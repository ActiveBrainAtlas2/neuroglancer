/**
 * @license
 * Copyright 2018 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file User interface for display and editing annotations.
 */

import './annotations.css';
import './volume_session.css';
import './cell_session.css';
import './com_session.css';
import {AppSettings} from 'neuroglancer/services/service';
import {Annotation, AnnotationId, AnnotationPropertySerializer, AnnotationReference, AnnotationSource, annotationToJson, AnnotationType, annotationTypeHandlers, AxisAlignedBoundingBox, Collection, Ellipsoid, getSortPoint, isChildDummyAnnotation, isDummyAnnotation, isTypeCollection, Line, Polygon, Volume} from 'neuroglancer/annotation';
import {AnnotationDisplayState, AnnotationLayerState} from 'neuroglancer/annotation/annotation_layer_state';
import {MultiscaleAnnotationSource} from 'neuroglancer/annotation/frontend_source';
import {AnnotationLayer, PerspectiveViewAnnotationLayer, SliceViewAnnotationLayer} from 'neuroglancer/annotation/renderlayer';
import {SpatiallyIndexedPerspectiveViewAnnotationLayer, SpatiallyIndexedSliceViewAnnotationLayer} from 'neuroglancer/annotation/renderlayer';
import {CoordinateSpace} from 'neuroglancer/coordinate_transform';
import {MouseSelectionState, UserLayer} from 'neuroglancer/layer';
import {LoadedDataSubsource} from 'neuroglancer/layer_data_source';
import {ChunkTransformParameters, getChunkPositionFromCombinedGlobalLocalPositions} from 'neuroglancer/render_coordinate_transform';
import {RenderScaleHistogram, trackableRenderScaleTarget} from 'neuroglancer/render_scale_statistics';
import {RenderLayerRole} from 'neuroglancer/renderlayer';
import {bindSegmentListWidth, registerCallbackWhenSegmentationDisplayStateChanged, SegmentationDisplayState, SegmentWidgetFactory} from 'neuroglancer/segmentation_display_state/frontend';
import {ElementVisibilityFromTrackableBoolean} from 'neuroglancer/trackable_boolean';
import {AggregateWatchableValue, makeCachedLazyDerivedWatchableValue, registerNested, WatchableValue, WatchableValueInterface} from 'neuroglancer/trackable_value';
import {getDefaultAnnotationListBindings, setPointDrawModeInputEventBindings, setPointEditModeInputEventBindings, setPolygonDrawModeInputEventBindings, setPolygonEditModeInputEventBindings} from 'neuroglancer/ui/default_input_event_bindings';
import {LegacyTool, registerLegacyTool} from 'neuroglancer/ui/tool';
import {animationFrameDebounce} from 'neuroglancer/util/animation_frame_debounce';
import {arraysEqual, ArraySpliceOp} from 'neuroglancer/util/array';
import {setClipboard} from 'neuroglancer/util/clipboard';
import {packColor, parseRGBAColorSpecification, parseRGBColorSpecification, serializeColor, unpackRGB, unpackRGBA, useWhiteBackground} from 'neuroglancer/util/color';
import {Borrowed, disposableOnce, RefCounted} from 'neuroglancer/util/disposable';
import {removeChildren} from 'neuroglancer/util/dom';
import {Endianness, ENDIANNESS} from 'neuroglancer/util/endian';
import {ValueOrError} from 'neuroglancer/util/error';
import {vec3} from 'neuroglancer/util/geom';
import {EventActionMap, KeyboardEventBinder, registerActionListener} from 'neuroglancer/util/keyboard_bindings';
import * as matrix from 'neuroglancer/util/matrix';
import {MouseEventBinder} from 'neuroglancer/util/mouse_bindings';
import {formatScaleWithUnitAsString} from 'neuroglancer/util/si_units';
import {NullarySignal, Signal} from 'neuroglancer/util/signal';
import {Uint64} from 'neuroglancer/util/uint64';
import * as vector from 'neuroglancer/util/vector';
import {makeAddButton} from 'neuroglancer/widget/add_button';
import {AnnotationColorWidget, ColorWidget} from 'neuroglancer/widget/color';
import {makeCopyButton} from 'neuroglancer/widget/copy_button';
import {makeDeleteButton} from 'neuroglancer/widget/delete_button';
import {DependentViewContext, DependentViewWidget} from 'neuroglancer/widget/dependent_view_widget';
import {makeIcon} from 'neuroglancer/widget/icon';
import {makeMoveToButton} from 'neuroglancer/widget/move_to_button';
import {Tab} from 'neuroglancer/widget/tab_view';
import {VirtualList, VirtualListSource} from 'neuroglancer/widget/virtual_list';
import {FetchAnnotationWidget} from 'neuroglancer/widget/fetch_annotation';
import {fetchOk} from 'neuroglancer/util/http_request';
import { StatusMessage } from '../status';
import { getEndPointBasedOnPartIndex, isCornerPicked } from '../annotation/line';
import { getZCoordinate, isPointUniqueInPolygon } from '../annotation/polygon';
import { VolumeSessionDialog } from './volume_session';
import { isSectionValid } from '../annotation/volume';
import { SaveAnnotationWidget } from '../widget/save_annotation';
import { CellSessionDialog } from './cell_session';
import { ComSessionDialog } from './com_session';
import { makeVisibilityButton } from '../widget/visibility_button';
import { Viewer } from '../viewer';

export interface LandmarkListJSON {
  land_marks: Array<string>,
}

export interface CategoryListJSON {
  cell_type: Array<string>,
}

export const AnnotationSortOrder: Map<AnnotationType, number> = new Map([
  [AnnotationType.VOLUME, 0],
  [AnnotationType.CELL, 3],
  [AnnotationType.COM, 4],
  // Below types can only exist with parent so priority does not matter
  [AnnotationType.POLYGON, 1],
  [AnnotationType.LINE, 2],
  [AnnotationType.POINT, 5],
  [AnnotationType.AXIS_ALIGNED_BOUNDING_BOX, 6],
  [AnnotationType.ELLIPSOID, 7],
]);

/**
 * Returns a list of landmarks from database based on annotation type.
 * @param type 
 * @returns list of landmarks.
 */
export async function getLandmarkList(type: AnnotationType) {
  if (type === AnnotationType.CELL) {
    return ["positive", "negative"];
  }
  const landmarkURL = `${AppSettings.API_ENDPOINT}/landmark_list`;
  const landmarkListJSON:LandmarkListJSON = await fetchOk(landmarkURL, {
    method: 'GET',
  }).then(response => {
    return response.json();});
  const {land_marks} = landmarkListJSON;
  return land_marks
}
/**
 * @returns A list of categories for cell annotations. eg: Positive, negative.
 */
export async function getCategoryList() {
  const landmarkURL = `${AppSettings.API_ENDPOINT}/cell_types`;
  const categoryJSON:CategoryListJSON = await fetchOk(landmarkURL, {
    method: 'GET',
  }).then(response => {
    return response.json();});
  const {cell_type} = categoryJSON;
  return cell_type;
}

export class MergedAnnotationStates extends RefCounted implements
    WatchableValueInterface<readonly AnnotationLayerState[]> {
  changed = new NullarySignal();
  isLoadingChanged = new NullarySignal();
  states: Borrowed<AnnotationLayerState>[] = [];
  relationships: string[] = [];
  private loadingCount = 0;

  get value() {
    return this.states;
  }

  get isLoading() {
    return this.loadingCount !== 0;
  }

  markLoading() {
    this.loadingCount++;
    return () => {
      if (--this.loadingCount === 0) {
        this.isLoadingChanged.dispatch();
      }
    };
  }

  private sort() {
    this.states.sort((a, b) => {
      const d = a.sourceIndex - b.sourceIndex;
      if (d !== 0) return d;
      return a.subsourceIndex - b.subsourceIndex;
    });
  }

  private updateRelationships() {
    const newRelationships = new Set<string>();
    for (const state of this.states) {
      for (const relationship of state.source.relationships) {
        newRelationships.add(relationship);
      }
    }
    this.relationships = Array.from(newRelationships);
  }

  add(state: Borrowed<AnnotationLayerState>) {
    this.states.push(state);
    this.sort();
    this.updateRelationships();
    this.changed.dispatch();
    return () => {
      const index = this.states.indexOf(state);
      this.states.splice(index, 1);
      this.updateRelationships();
      this.changed.dispatch();
    };
  }
}

function getCenterPosition(center: Float32Array, annotation: Annotation) {
  switch (annotation.type) {
    case AnnotationType.AXIS_ALIGNED_BOUNDING_BOX:
    case AnnotationType.LINE:
      vector.add(center, annotation.pointA, annotation.pointB);
      vector.scale(center, center, 0.5);
      break;
    case AnnotationType.POINT:
      center.set(annotation.point);
      break;
    case AnnotationType.ELLIPSOID:
      center.set(annotation.center);
      break;
    case AnnotationType.POLYGON:
      center.set(annotation.source);
      break;
    case AnnotationType.VOLUME:
      center.set(annotation.source);
      break;
    case AnnotationType.CELL:
      center.set(annotation.point);
      break;
    case AnnotationType.COM:
      center.set(annotation.point);
      break;
  }
}

function setLayerPosition(
    layer: UserLayer, chunkTransform: ValueOrError<ChunkTransformParameters>,
    layerPosition: Float32Array) {
  if (chunkTransform.error !== undefined) return;
  layer.setLayerPosition(chunkTransform.modelTransform, layerPosition);
}

function getConfirmDeleteDisplayText(annotation: Annotation): string {
  if (annotation.type === AnnotationType.VOLUME) {
    return `Are you sure you want to delete the annotation ?\nAnnotation type: Volume\nAnnotation label: ${annotation.description}`;
  } else if (annotation.type === AnnotationType.CELL) {
    return `Are you sure you want to delete the annotation ?\nAnnotation type: Cell\nAnnotation label: ` + 
    `${annotation.description}\nAnnotation category: ${annotation.category}\nAnnotation x,y,z: ${stringifyPoint(annotation.point)}`;
  } else if (annotation.type === AnnotationType.COM) {
    return `Are you sure you want to delete the annotation ?\nAnnotation type: COM\nAnnotation label: ` +
     `${annotation.description}\nAnnotation x,y,z: ${stringifyPoint(annotation.point)}`;
  }
  return ``;
}

function stringifyPoint(point: Float32Array): string {
  let ans: string = '';
  for(let i = 0; i < point.length; i++) {
    ans += Math.trunc(point[i]);
    if (i !== point.length - 1) ans += ",";
  }
  return ans;
}

function shouldConfirmAnnotationDelete(annotation: Annotation): boolean {
  return annotation.type === AnnotationType.VOLUME || annotation.type === AnnotationType.CELL
  || annotation.type === AnnotationType.COM;
}


function visitTransformedAnnotationGeometry(
    annotation: Annotation, chunkTransform: ChunkTransformParameters,
    callback: (layerPosition: Float32Array, isVector: boolean) => void) {
  const {layerRank} = chunkTransform;
  const paddedChunkPosition = new Float32Array(layerRank);
  annotationTypeHandlers[annotation.type].visitGeometry(annotation, (chunkPosition, isVector) => {
    // Rank of "chunk" coordinate space may be less than rank of layer space if the annotations are
    // embedded in a higher-dimensional space.  The extra embedding dimensions always are last and
    // have a coordinate of 0.
    paddedChunkPosition.set(chunkPosition);
    const layerPosition = new Float32Array(layerRank);
    (isVector ? matrix.transformVector : matrix.transformPoint)(
        layerPosition, chunkTransform.chunkToLayerTransform, layerRank + 1, paddedChunkPosition,
        layerRank);
    callback(layerPosition, isVector);
  });
}

interface AnnotationLayerViewAttachedState {
  refCounted: RefCounted;
  annotations: Annotation[];
  idToIndex: Map<AnnotationId, number>;
  listOffset: number;
  idToLevel: Map<AnnotationId, number>;
}

export class AnnotationLayerView extends Tab {
  private previousSelectedState:
      {annotationId: string, annotationLayerState: AnnotationLayerState, pin: boolean}|undefined =
          undefined;
  private previousHoverId: string|undefined = undefined;
  private previousHoverAnnotationLayerState: AnnotationLayerState|undefined = undefined;
  //@ts-ignore
  private annotationColorPicker: AnnotationColorWidget|undefined = undefined;

  private virtualListSource: VirtualListSource = {
    length: 0,
    render: (index: number) => this.render(index),
    changed: new Signal<(splices: ArraySpliceOp[]) => void>(),
  };
  private virtualList = new VirtualList({source: this.virtualListSource});
  private listElements: {state: AnnotationLayerState, annotation: Annotation}[] = [];
  private updated = false;
  private mutableControls = document.createElement('div');
  private headerRow = document.createElement('div');
  volumeSession = document.createElement('div');
  cellSession = document.createElement('div');
  comSession = document.createElement('div');
  volumeButton: HTMLElement;
  cellButton: HTMLElement;
  comButton: HTMLElement;

  get annotationStates() {
    return this.layer.annotationStates;
  }

  private attachedAnnotationStates =
      new Map<AnnotationLayerState, AnnotationLayerViewAttachedState>();

  private updateAttachedAnnotationLayerStates() {
    const states = this.annotationStates.states;
    const {attachedAnnotationStates} = this;
    const newAttachedAnnotationStates =
        new Map<AnnotationLayerState, AnnotationLayerViewAttachedState>();
    for (const [state, info] of attachedAnnotationStates) {
      if (!states.includes(state)) {
        attachedAnnotationStates.delete(state);
        info.refCounted.dispose();
      }
    }
    for (const state of states) {
      const info = attachedAnnotationStates.get(state);
      if (info !== undefined) {
        newAttachedAnnotationStates.set(state, info);
        continue;
      }
      const source = state.source;
      const refCounted = new RefCounted();
      if (source instanceof AnnotationSource) {
        refCounted.registerDisposer(
            source.childAdded.add((annotation) => this.addAnnotationElement(annotation, state)));
        refCounted.registerDisposer(source.childUpdated.add(
            (annotation) => this.updateAnnotationElement(annotation, state)));
        refCounted.registerDisposer(source.childDeleted.add(
            (annotationId) => this.deleteAnnotationElement(annotationId, state)));
      }
      refCounted.registerDisposer(state.transform.changed.add(this.forceUpdateView));
      newAttachedAnnotationStates.set(
          state, {refCounted, annotations: [], idToIndex: new Map(), listOffset: 0, idToLevel: new Map()});
    }
    this.attachedAnnotationStates = newAttachedAnnotationStates;
    attachedAnnotationStates.clear();
    this.updateCoordinateSpace();
    this.forceUpdateView();
  }

  private forceUpdateView = () => {
    this.updated = false;
    this.updateView();
  };

  private globalDimensionIndices: number[] = [];
  private localDimensionIndices: number[] = [];
  private curCoordinateSpaceGeneration = -1;
  private prevCoordinateSpaceGeneration = -1;
  private columnWidths: number[] = [];
  private gridTemplate: string = '';

  private updateCoordinateSpace() {
    const localCoordinateSpace = this.layer.localCoordinateSpace.value;
    const globalCoordinateSpace = this.layer.manager.root.coordinateSpace.value;
    const globalDimensionIndices: number[] = [];
    const localDimensionIndices: number[] = [];
    for (let globalDim = 0, globalRank = globalCoordinateSpace.rank; globalDim < globalRank;
         ++globalDim) {
      if (this.annotationStates.states.some(state => {
            const transform = state.transform.value;
            if (transform.error !== undefined) return false;
            return transform.globalToRenderLayerDimensions[globalDim] !== -1;
          })) {
        globalDimensionIndices.push(globalDim);
      }
    }
    for (let localDim = 0, localRank = localCoordinateSpace.rank; localDim < localRank;
         ++localDim) {
      if (this.annotationStates.states.some(state => {
            const transform = state.transform.value;
            if (transform.error !== undefined) return false;
            return transform.localToRenderLayerDimensions[localDim] !== -1;
          })) {
        localDimensionIndices.push(localDim);
      }
    }
    if (!arraysEqual(globalDimensionIndices, this.globalDimensionIndices) ||
        !arraysEqual(localDimensionIndices, this.localDimensionIndices)) {
      this.localDimensionIndices = localDimensionIndices;
      this.globalDimensionIndices = globalDimensionIndices;
      ++this.curCoordinateSpaceGeneration;
    }
  }

  constructor(
      public layer: Borrowed<UserLayerWithAnnotations>,
      public displayState: AnnotationDisplayState) {
    super();

    const fetchAnnotationWidget = this.registerDisposer(new FetchAnnotationWidget(this));
    this.element.appendChild(fetchAnnotationWidget.element);

    const saveAnnotationWidget = this.registerDisposer(new SaveAnnotationWidget(this));
    this.element.appendChild(saveAnnotationWidget.element);

    this.element.classList.add('neuroglancer-annotation-layer-view');
    this.registerDisposer(this.visibility.changed.add(() => this.updateView()));
    this.registerDisposer(
        layer.annotationStates.changed.add(() => this.updateAttachedAnnotationLayerStates()));
    this.headerRow.classList.add('neuroglancer-annotation-list-header');
    let toolColorFunc = () => {
      if (this.layer.tool.value instanceof PlaceVolumeTool) {
        const iconDiv = this.layer.tool.value.icon.value;
        if (iconDiv === undefined) return;
        switch (this.layer.tool.value.mode) {
          case VolumeToolMode.DRAW: {
            iconDiv.style.backgroundColor = 'green';
            break;
          }
          case VolumeToolMode.EDIT: {
            iconDiv.style.backgroundColor = 'red';
            break;
          }
          default: {
            iconDiv.style.backgroundColor = 'grey';
          }
        }
      }
      else if (this.layer.tool.value instanceof PlaceCellTool) {
        const iconDiv = this.layer.tool.value.icon.value;
        if (iconDiv === undefined) return;
        switch (this.layer.tool.value.mode) {
          case CellToolMode.DRAW: {
            iconDiv.style.backgroundColor = 'green';
            break;
          }
          case CellToolMode.EDIT: {
            iconDiv.style.backgroundColor = 'red';
            break;
          }
          default: {
            iconDiv.style.backgroundColor = 'grey';
          }
        }
      }
      else if (this.layer.tool.value instanceof PlaceComTool) {
        const iconDiv = this.layer.tool.value.icon.value;
        if (iconDiv === undefined) return;
        switch (this.layer.tool.value.mode) {
          case ComToolMode.DRAW: {
            iconDiv.style.backgroundColor = 'green';
            break;
          }
          case ComToolMode.EDIT: {
            iconDiv.style.backgroundColor = 'red';
            break;
          }
          default: {
            iconDiv.style.backgroundColor = 'grey';
          }
        }
      }
    };
    toolColorFunc = toolColorFunc.bind(this);
    this.registerDisposer(this.layer.tool.changed.add(() => toolColorFunc()));

    const toolbox = document.createElement('div');
    toolbox.className = 'neuroglancer-annotation-toolbox';

    layer.initializeAnnotationLayerViewTab(this);
    const colorPicker = this.registerDisposer(new ColorWidget(this.displayState.color));
    colorPicker.element.title = 'Change annotation display color';
    this.registerDisposer(new ElementVisibilityFromTrackableBoolean(
        makeCachedLazyDerivedWatchableValue(
            shader => shader.match(/\bdefaultColor\b/) !== null,
            displayState.shaderControls.processedFragmentMain),
        colorPicker.element));
    toolbox.appendChild(colorPicker.element);
    
    this.layer.setAnnotationColorPicker();
    if (this.layer.annotationColorPicker !== undefined) toolbox.append(this.layer.annotationColorPicker.element);

    const {mutableControls, volumeSession, cellSession, comSession} = this;
    // const pointButton = makeIcon({
    //   text: annotationTypeHandlers[AnnotationType.POINT].icon,
    //   title: 'Annotate point',
    //   onClick: () => {
    //     this.layer.tool.value = new PlacePointTool(this.layer, {});
    //   },
    // });
    // mutableControls.appendChild(pointButton);

    this.cellButton = makeIcon({
      text: annotationTypeHandlers[AnnotationType.CELL].icon,
      title: 'Annotate cell',
      onClick: () => {
        new CellSessionDialog(this);
      },
    });
    mutableControls.appendChild(this.cellButton);

    this.comButton = makeIcon({
      text: annotationTypeHandlers[AnnotationType.COM].icon,
      title: 'Annotate centre of mass',
      onClick: () => {
        new ComSessionDialog(this);
      },
    });
    mutableControls.appendChild(this.comButton);

    // const boundingBoxButton = makeIcon({
    //   text: annotationTypeHandlers[AnnotationType.AXIS_ALIGNED_BOUNDING_BOX].icon,
    //   title: 'Annotate bounding box',
    //   onClick: () => {
    //     this.layer.tool.value = new PlaceBoundingBoxTool(this.layer, {});
    //   },
    // });
    // mutableControls.appendChild(boundingBoxButton);

    // const lineButton = makeIcon({
    //   text: annotationTypeHandlers[AnnotationType.LINE].icon,
    //   title: 'Annotate line',
    //   onClick: () => {
    //     this.layer.tool.value = new PlaceLineTool(this.layer, {});
    //   },
    // });
    // mutableControls.appendChild(lineButton);

    // const ellipsoidButton = makeIcon({
    //   text: annotationTypeHandlers[AnnotationType.ELLIPSOID].icon,
    //   title: 'Annotate ellipsoid',
    //   onClick: () => {
    //     this.layer.tool.value = new PlaceEllipsoidTool(this.layer, {});
    //   },
    // });
    // mutableControls.appendChild(ellipsoidButton);

    // const polygonButton = makeIcon({
    //   text: annotationTypeHandlers[AnnotationType.POLYGON].icon,
    //   title: 'Annotate polygon',
    //   onClick: () => {
    //     const isInstance = this.layer.tool.value instanceof PlacePolygonTool;
    //     if (!isInstance) {
    //       this.layer.tool.value = new PlacePolygonTool(this.layer, {}, PolygonToolMode.DRAW);
    //     }
    //     else {
    //       const polygonTool = <PlacePolygonTool>this.layer.tool.value;
    //       if (polygonTool.mode === PolygonToolMode.EDIT) {
    //         this.layer.tool.value = new PlacePolygonTool(this.layer, {}, PolygonToolMode.DRAW);
    //       }
    //       else {
    //         this.layer.tool.value = undefined;
    //       }
    //     }
    //   },
    //   onRightClick: () => {
    //     const isInstance = this.layer.tool.value instanceof PlacePolygonTool;
    //     if (!isInstance) {
    //       this.layer.tool.value = new PlacePolygonTool(this.layer, {}, PolygonToolMode.EDIT);
    //     } else {
    //       const polygonTool = <PlacePolygonTool>this.layer.tool.value;
    //       if (polygonTool.mode === PolygonToolMode.DRAW) {
    //         this.layer.tool.value = new PlacePolygonTool(this.layer, {}, PolygonToolMode.EDIT);
    //       }
    //       else {
    //         this.layer.tool.value = undefined;
    //       }
    //     }
    //   }
    // });
    // mutableControls.appendChild(polygonButton);

    this.volumeButton = makeIcon({
      text: annotationTypeHandlers[AnnotationType.VOLUME].icon,
      title: 'Annotate Volume',
      onClick: () => {
        new VolumeSessionDialog(this);
      }
    });
    mutableControls.appendChild(this.volumeButton);

    toolbox.appendChild(mutableControls);
    this.element.appendChild(toolbox);

    volumeSession.classList.add('volume-session-display');
    this.element.appendChild(volumeSession);
    if (this.layer.tool.value instanceof PlaceVolumeTool) {
      this.layer.tool.value.sessionWidgetDiv = volumeSession;
      this.layer.tool.value.session.changed.dispatch();
      this.layer.tool.value.icon.value = this.volumeButton;
    }

    comSession.classList.add('com-session-display');
    this.element.appendChild(comSession);
    if (this.layer.tool.value instanceof PlaceComTool) {
      this.layer.tool.value.sessionWidgetDiv = comSession;
      this.layer.tool.value.session.changed.dispatch();
      this.layer.tool.value.icon.value = this.comButton;
    }

    comSession.classList.add('cell-session-display');
    this.element.appendChild(cellSession);
    if (this.layer.tool.value instanceof PlaceCellTool) {
      this.layer.tool.value.sessionWidgetDiv = cellSession;
      this.layer.tool.value.session.changed.dispatch();
      this.layer.tool.value.icon.value = this.cellButton;
    }

    this.element.appendChild(this.headerRow);
    const {virtualList} = this;
    virtualList.element.classList.add('neuroglancer-annotation-list');
    this.element.appendChild(virtualList.element);
    this.virtualList.element.addEventListener('mouseleave', () => {
      this.displayState.hoverState.value = undefined;
    });

    const bindings = getDefaultAnnotationListBindings();
    this.registerDisposer(new MouseEventBinder(this.virtualList.element, bindings));
    this.virtualList.element.title = bindings.describe();
    this.registerDisposer(this.displayState.hoverState.changed.add(() => this.updateHoverView()));
    this.registerDisposer(
        this.selectedAnnotationState.changed.add(() => this.updateSelectionView(true)));
    this.registerDisposer(this.layer.localCoordinateSpace.changed.add(() => {
      this.updateCoordinateSpace();
      this.updateView();
    }));
    this.registerDisposer(this.layer.manager.root.coordinateSpace.changed.add(() => {
      this.updateCoordinateSpace();
      this.updateView();
    }));
    this.updateCoordinateSpace();
    this.updateAttachedAnnotationLayerStates();
    this.updateSelectionView();
  }

  private getRenderedAnnotationListElement(
      state: AnnotationLayerState, id: AnnotationId, scrollIntoView: boolean = false): HTMLElement
      |undefined {
    const attached = this.attachedAnnotationStates.get(state);
    if (attached == undefined) return undefined;
    const index = attached.idToIndex.get(id);
    if (index === undefined) return undefined;
    const listIndex = attached.listOffset + index;
    if (scrollIntoView) {
      this.virtualList.scrollItemIntoView(index)
    }
    return this.virtualList.getItemElement(listIndex);
  }

  private clearSelectionClass() {
    const {previousSelectedState: state} = this;
    if (state === undefined) return;
    this.previousSelectedState = undefined;
    const reference = state.annotationLayerState.source.getNonDummyAnnotationReference(state.annotationId);
    if (reference.value === null) return;
    const element =
        this.getRenderedAnnotationListElement(state.annotationLayerState, reference.value!.id);
    if (element !== undefined) {
      element.classList.remove('neuroglancer-annotation-selected');
    }
    reference.dispose();
  }

  private clearHoverClass() {
    const {previousHoverId, previousHoverAnnotationLayerState} = this;
    if (previousHoverAnnotationLayerState !== undefined) {
      this.previousHoverAnnotationLayerState = undefined;
      this.previousHoverId = undefined;
      const element = this.getRenderedAnnotationListElement(
          previousHoverAnnotationLayerState, previousHoverId!);
      if (element !== undefined) {
        element.classList.remove('neuroglancer-annotation-hover');
      }
    }
  }

  private selectedAnnotationState = makeCachedLazyDerivedWatchableValue((selectionState, pin) => {
    if (selectionState === undefined) return undefined;
    const {layer} = this;
    const layerSelectionState = selectionState.layers.find(s => s.layer === layer)?.state;
    if (layerSelectionState === undefined) return undefined;
    const {annotationId} = layerSelectionState;
    if (annotationId === undefined) return undefined;
    const annotationLayerState = this.annotationStates.states.find(
        x => x.sourceIndex === layerSelectionState.annotationSourceIndex &&
            (layerSelectionState.annotationSubsource === undefined ||
             x.subsourceId === layerSelectionState.annotationSubsource));
    if (annotationLayerState === undefined) return undefined;
    return {annotationId, annotationLayerState, pin};
  }, this.layer.manager.root.selectionState, this.layer.manager.root.selectionState.pin);

  private updateSelectionView(selectionStateUpdate : boolean = false) {
    const selectionState = this.selectedAnnotationState.value;
    const {previousSelectedState} = this;
    if (previousSelectedState === selectionState ||
        (previousSelectedState !== undefined && selectionState !== undefined &&
         previousSelectedState.annotationId === selectionState.annotationId &&
         previousSelectedState.annotationLayerState === selectionState.annotationLayerState &&
         previousSelectedState.pin === selectionState.pin)) {
      return;
    }
    this.clearSelectionClass();
    this.previousSelectedState = selectionState;
    if (selectionState === undefined) return;
    const reference = selectionState.annotationLayerState.source.getNonDummyAnnotationReference(selectionState.annotationId);
    if (reference.value === null) return;
    const annotationId = reference.value!.id;
    if (selectionState.pin && selectionStateUpdate) {
      selectionState.annotationLayerState.source.makeAllParentsVisible(annotationId);
    }
    const element = this.getRenderedAnnotationListElement(
        selectionState.annotationLayerState, annotationId,
        /*scrollIntoView=*/ selectionState.pin);
    if (element !== undefined) {
      element.classList.add('neuroglancer-annotation-selected');
    }
    reference.dispose();
  }

  private updateHoverView() {
    const selectedValue = this.displayState.hoverState.value;
    let newHoverId: string|undefined;
    let newAnnotationLayerState: AnnotationLayerState|undefined;
    if (selectedValue !== undefined) {
      newHoverId = selectedValue.id;
      newAnnotationLayerState = selectedValue.annotationLayerState;
    }
    const {previousHoverId, previousHoverAnnotationLayerState} = this;
    if (newHoverId === previousHoverId &&
        newAnnotationLayerState === previousHoverAnnotationLayerState) {
      return;
    }
    this.clearHoverClass();
    this.previousHoverId = newHoverId;
    this.previousHoverAnnotationLayerState = newAnnotationLayerState;
    if (newHoverId === undefined) return;
    const element = this.getRenderedAnnotationListElement(newAnnotationLayerState!, newHoverId);
    if (element === undefined) return;
    element.classList.add('neuroglancer-annotation-hover');
  }

  private render(index: number) {
    const {annotation, state} = this.listElements[index];
    return this.makeAnnotationListElement(annotation, state);
  }

  private setColumnWidth(column: number, width: number) {
    // Padding
    width += 2;
    const {columnWidths} = this;
    if (columnWidths[column] > width) {
      // False if `columnWidths[column] === undefined`.
      return;
    }
    columnWidths[column] = width;
    this.element.style.setProperty(`--neuroglancer-column-${column}-width`, `${width}ch`);
  }

  private updateView() {
    if (!this.visible) {
      return;
    }
    if (this.curCoordinateSpaceGeneration !== this.prevCoordinateSpaceGeneration) {
      this.updated = false;
      const {columnWidths} = this;
      columnWidths.length = 0;
      const {headerRow} = this;
      const symbolPlaceholder = document.createElement('div');
      symbolPlaceholder.style.gridColumn = `symbol`;

      const deletePlaceholder = document.createElement('div');
      deletePlaceholder.style.gridColumn = `delete`;

      removeChildren(headerRow);
      headerRow.appendChild(symbolPlaceholder);
      let i = 0;
      let gridTemplate = '[symbol] 2ch';
      const addDimension = (coordinateSpace: CoordinateSpace, dimIndex: number) => {
        const dimWidget = document.createElement('div');
        dimWidget.classList.add('neuroglancer-annotations-view-dimension');
        const name = document.createElement('span');
        name.classList.add('neuroglancer-annotations-view-dimension-name');
        name.textContent = coordinateSpace.names[dimIndex];
        const scale = document.createElement('scale');
        scale.classList.add('neuroglancer-annotations-view-dimension-scale');
        scale.textContent = formatScaleWithUnitAsString(
            coordinateSpace.scales[dimIndex], coordinateSpace.units[dimIndex], {precision: 2});
        dimWidget.appendChild(name);
        dimWidget.appendChild(scale);
        dimWidget.style.gridColumn = `dim ${i + 1}`;
        this.setColumnWidth(i, scale.textContent.length + name.textContent.length + 3);
        gridTemplate += ` [dim] var(--neuroglancer-column-${i}-width)`;
        ++i;
        headerRow.appendChild(dimWidget);
      };
      const globalCoordinateSpace = this.layer.manager.root.coordinateSpace.value;
      for (const globalDim of this.globalDimensionIndices) {
        addDimension(globalCoordinateSpace, globalDim);
      }
      const localCoordinateSpace = this.layer.localCoordinateSpace.value;
      for (const localDim of this.localDimensionIndices) {
        addDimension(localCoordinateSpace, localDim);
      }
      headerRow.appendChild(deletePlaceholder);
      gridTemplate += ` [delete] 2ch`;
      this.gridTemplate = gridTemplate;
      headerRow.style.gridTemplateColumns = gridTemplate;
      this.prevCoordinateSpaceGeneration = this.curCoordinateSpaceGeneration;
    }
    if (this.updated) {
      return;
    }

    let isMutable = false;
    const {listElements} = this;
    listElements.length = 0;
    for (const [state, info] of this.attachedAnnotationStates) {
      if (!state.source.readonly) isMutable = true;
      if (state.chunkTransform.value.error !== undefined) continue;
      const {source} = state;
      const annotations = Array.from(source);
      annotations.sort((a: Annotation, b: Annotation): number => {
        if (a.parentAnnotationId == undefined && b.parentAnnotationId !== undefined) return 1;
        if (a.parentAnnotationId !== undefined && b.parentAnnotationId == undefined) return -1;
        if (a.parentAnnotationId !== undefined && b.parentAnnotationId !== undefined) return 0;
        if (a.type !== b.type) {
          return (AnnotationSortOrder.get(a.type) || 0) - (AnnotationSortOrder.get(b.type) || 0);
        }
        const pointA = getSortPoint(a);
        const pointB = getSortPoint(b);
        const zA = getZCoordinate(pointA) || 0;
        const zB = getZCoordinate(pointB) || 0;
        return zA - zB;
      });
      info.annotations.length = 0;
      const {idToIndex, idToLevel} = info;
      idToIndex.clear();
      idToLevel.clear();
      for (let i = 0, length = annotations.length; i < length; ++i) {
        const annotation = annotations[i];
        if (annotation.parentAnnotationId) continue;
        const annotationList = this.getAllAnnotationsUnderRoot(annotation.id, state);
        for (let ann of annotationList) {
          const index = info.annotations.length;
          info.annotations.push(ann);
          info.idToIndex.set(ann.id, index);
          info.idToLevel.set(ann.id, this.getAnnotationLevel(ann.id, state));
          const spliceStart = info.listOffset + index;
          this.listElements.splice(spliceStart, 0, {state, annotation:ann});
        }
      }
    }
    const oldLength = this.virtualListSource.length;
    this.updateListLength();
    this.virtualListSource.changed!.dispatch(
        [{retainCount: 0, deleteCount: oldLength, insertCount: listElements.length}]);
    this.mutableControls.style.display = isMutable ? 'contents' : 'none';
    this.resetOnUpdate();
  }

  private updateListLength() {
    let length = 0;
    for (const info of this.attachedAnnotationStates.values()) {
      info.listOffset = length;
      length += info.annotations.length;
    }
    this.virtualListSource.length = length;
  }

  private addAnnotationElement(annotation: Annotation, state: AnnotationLayerState) {
    if (!this.visible) {
      this.updated = false;
      return;
    }
    if (!this.updated) {
      this.updateView();
      return;
    }
    const info = this.attachedAnnotationStates.get(state);
    if (info !== undefined && info.idToIndex.get(annotation.id)) return;
    if (info !== undefined) {
      let index: number;
      if (annotation.parentAnnotationId && annotation.type === AnnotationType.POLYGON) {
        const insertIndex = this.getSortedIndexBasedOnPolygonSection(annotation, info, state);
        index = (insertIndex !== undefined)? insertIndex : info.annotations.length;
      } else if (annotation.parentAnnotationId) {
        const parentIndex = info.idToIndex.get(annotation.parentAnnotationId);
        index = (parentIndex !== undefined)? parentIndex + 1 : info.annotations.length;
      } else if (annotation.type === AnnotationType.CELL || annotation.type === AnnotationType.COM) {
        const insertIndex = this.getSortedIndexBasedForPointType(annotation, info);
        index = (insertIndex !== undefined)? insertIndex : info.annotations.length;
      } else {
        index = info.annotations.length;
      }
      info.annotations.splice(index, 0, annotation);
      info.idToIndex.set(annotation.id, index);
      info.idToLevel.set(annotation.id, this.getAnnotationLevel(annotation.id, state));
      for (let i = index + 1, length = info.annotations.length; i < length; ++i) {
        info.idToIndex.set(info.annotations[i].id, i);
      }
      const spliceStart = info.listOffset + index;
      this.listElements.splice(spliceStart, 0, {state, annotation});
      this.updateListLength();
      this.virtualListSource.changed!.dispatch(
          [{retainCount: spliceStart, deleteCount: 0, insertCount: 1}]);
    }
    this.resetOnUpdate();
  }
  /**
   * Returns the index at which the annotation should be located based on its z-coordinate.
   * @param annotation annotation input id.
   * @param info Annotation layer info.
   * @param state Annotation layer state of current panel.
   * @returns index at which the annotation should be located in its parent list based on its z-coordinate.
   */
  private getSortedIndexBasedOnPolygonSection(annotation: Annotation, info: AnnotationLayerViewAttachedState,
    state: AnnotationLayerState): number | undefined {
    if (annotation.type !== AnnotationType.POLYGON || !annotation.parentAnnotationId ) return undefined;
    const parentRef = state.source.getReference(annotation.parentAnnotationId);
    const zCoordinate = getZCoordinate((<Polygon>annotation).source);
    if (!parentRef.value || !zCoordinate) {
      parentRef.dispose();
      return undefined;
    }
    const parAnn = <Collection>parentRef.value;
    const childAnnList :Annotation[] = [];

    const parentIdx = info.idToIndex.get(parAnn.id);
    if (parentIdx === undefined) return undefined;
    for(let i = parentIdx + 1; i < info.annotations.length; i++) {
      if (info.annotations[i].parentAnnotationId === parAnn.id) {
        childAnnList.push(info.annotations[i]);
      }
    }
    if (childAnnList.length === 0) {
      parentRef.dispose();
      return parentIdx + 1;
    }
    let prevZ = -Infinity;
    for (let i = 0; i < childAnnList.length; i++) {
      const curZCoordinate = getZCoordinate((<Polygon>(childAnnList[i])).source);
      if (curZCoordinate === undefined) return undefined;
      if (prevZ <= zCoordinate && zCoordinate <= curZCoordinate) {
        return info.idToIndex.get(childAnnList[i].id);
      }
      prevZ = curZCoordinate;
    }
    let lastIndex = info.idToIndex.get(childAnnList[childAnnList.length - 1].id);
    if (lastIndex === undefined) {
      parentRef.dispose();
      return undefined;
    }
    lastIndex++;
    for (let i = lastIndex; i < info.annotations.length; i++) {
      if (info.annotations[i].parentAnnotationId === childAnnList[childAnnList.length - 1].id) {
        lastIndex = i + 1;
      }
    }
    parentRef.dispose();
    return lastIndex;
  }

  /**
   * Gives the index of sorted position for annotation type of CELL or COM.
   * Order of priority: VOLUME, POLYGON, LINE, CELL, COM, POINT, ELLIPSOID, BOUNDING BOX
   * @param annotation Annotation for which the sorted index needs to be found
   * @param info Annotation info contains all the list of annotations of current layer
   */
  private getSortedIndexBasedForPointType(annotation: Annotation, info: AnnotationLayerViewAttachedState): number | undefined {
    if (annotation.type !== AnnotationType.CELL && annotation.type !== AnnotationType.COM) return undefined;
    const annPriority = AnnotationSortOrder.get(annotation.type);
    if (annPriority === undefined) return undefined;
    const annZ = getZCoordinate(getSortPoint(annotation));
    if (annZ === undefined) return undefined;
    const {annotations} = info;
    let lastIndex = 0;

    for(; lastIndex < annotations.length; lastIndex++) {
      const curAnnPriority = AnnotationSortOrder.get(annotations[lastIndex].type) || 0;
      if (curAnnPriority < annPriority) continue;
      if (curAnnPriority > annPriority) break;
      if (curAnnPriority === annPriority) {
        const curAnnZ = getZCoordinate(getSortPoint(annotations[lastIndex]));
        if (curAnnZ === undefined) continue;
        if (annZ < curAnnZ) return lastIndex;
      }
    }
    return lastIndex;
  }

  private updateAnnotationElement(annotation: Annotation, state: AnnotationLayerState) {
    if (!this.visible) {
      this.updated = false;
      return;
    }
    if (!this.updated) {
      this.updateView();
      return;
    }
    const info = this.attachedAnnotationStates.get(state);
    if (info !== undefined) {
      const index = info.idToIndex.get(annotation.id);
      if (index !== undefined) {
        info.idToLevel.set(annotation.id, this.getAnnotationLevel(annotation.id, state));
        const updateStart = info.listOffset + index;
        info.annotations[index] = annotation;
        this.listElements[updateStart].annotation = annotation;
        this.virtualListSource.changed!.dispatch(
            [{retainCount: updateStart, deleteCount: 1, insertCount: 1}]);
      }
    }
    this.resetOnUpdate();
  }

  private deleteAnnotationElement(annotationId: string, state: AnnotationLayerState) {
    if (!this.visible) {
      this.updated = false;
      return;
    }
    if (!this.updated) {
      this.updateView();
      return;
    }
    const info = this.attachedAnnotationStates.get(state);
    if (info !== undefined) {
      const {idToIndex, idToLevel} = info;
      const index = idToIndex.get(annotationId);
      if (index !== undefined) {
        const spliceStart = info.listOffset + index;
        const {annotations} = info;
        annotations.splice(index, 1);
        idToIndex.delete(annotationId);
        idToLevel.delete(annotationId);
        for (let i = index, length = annotations.length; i < length; ++i) {
          idToIndex.set(annotations[i].id, i);
        }
        this.listElements.splice(spliceStart, 1);
        this.updateListLength();
        this.virtualListSource.changed!.dispatch(
            [{retainCount: spliceStart, deleteCount: 1, insertCount: 0}]);
      }
    }
    this.resetOnUpdate();
  }
  /**
   * Returns the level of the annotation id based on heirarchy.
   * @param annotationId Annotation id of input.
   * @param state Annotation layer state of panel.
   * @returns a number indicating the level, 
   * eg: if the annotation doesn't have parent
   * level is 0, if the annotation has a parent and if the parent does not have any parent 
   * then level is 1 etc.
   */
  private getAnnotationLevel(annotationId: AnnotationId, state: AnnotationLayerState): number {
    let depth = 0;
    let curAnnotationId = annotationId;
    const curRef = state.source.getReference(curAnnotationId);
    if (!curRef.value) {
      curRef.dispose();
      return -1;
    }
    const annotation = curRef.value;
    if (annotation.parentAnnotationId) {
      depth = 1 + this.getAnnotationLevel(annotation.parentAnnotationId, state);
    }
    curRef.dispose();
    return depth;
  }
  /**
   * Returns all the descendants of the input annotation.
   * @param annotationId 
   * @param state 
   * @returns Array of annotations that are descendants of the input annotation.
   */
  private getAllAnnotationsUnderRoot(annotationId: AnnotationId, state: AnnotationLayerState) : Annotation[] {
    const reference = state.source.getReference(annotationId);
    let annotationList : Annotation[] = [];
    if (!reference.value) {
      reference.dispose();
      return annotationList;
    }
    let annotation : Annotation | undefined;
    annotation = reference.value;
    annotationList.push(annotation);
    if (isTypeCollection(annotation)) {
      const collection = <Collection>annotation;
      if (collection.childrenVisible) {
        const sortedChildAnnotationIds :string[] = Object.assign([], collection.childAnnotationIds);
        if (collection.type === AnnotationType.POLYGON) {
          sortedChildAnnotationIds.sort((id1: string, id2: string): number => {
            const ref1 = state.source.getReference(id1);
            const ref2 = state.source.getReference(id2);
            if (!ref1.value || !ref2.value) return 0;
            const z1 = getZCoordinate((<Polygon>(ref1.value)).source);
            const z2 = getZCoordinate((<Polygon>(ref2.value)).source);
            if (z1 === undefined || z2 === undefined) return 0;
            return z1 - z2;
          });
        }
        for (let i = 0; annotation && i < collection.childAnnotationIds!.length; i++) {
          annotationList = [...annotationList, ...this.getAllAnnotationsUnderRoot(collection.childAnnotationIds[i], state)];
        }
      }
    }
    reference.dispose();
    return annotationList;
  }

  private resetOnUpdate() {
    this.clearHoverClass();
    this.clearSelectionClass();
    this.updated = true;
    this.updateHoverView();
    this.updateSelectionView();
  }

  private makeAnnotationListElement(annotation: Annotation, state: AnnotationLayerState) {
    const chunkTransform = state.chunkTransform.value as ChunkTransformParameters;
    const element = document.createElement('div');
    element.classList.add('neuroglancer-annotation-list-entry');
    element.style.gridTemplateColumns = this.gridTemplate;
    const info = this.attachedAnnotationStates.get(state);
    if (info !== undefined) {
      const depth = info.idToLevel.get(annotation.id);
      if (depth !== undefined) element.style.paddingLeft = (2.0*depth + 0.5) + 'em';
    }
    const icon = document.createElement('div');
    icon.className = 'neuroglancer-annotation-icon';
    icon.textContent = annotationTypeHandlers[annotation.type].icon;
    element.appendChild(icon);

    let deleteButton: HTMLElement|undefined;
    let visibilityButton: HTMLElement|undefined;
    const buttonElement = document.createElement('div');
    buttonElement.classList.add('neuroglancer-annotation-list-entry-delete');

    const maybeAddDeleteButton = () => {
      if (state.source.readonly) return;
      if (deleteButton !== undefined) return;
      if (isDummyAnnotation(annotation)) return;
      deleteButton = makeDeleteButton({
        title: 'Delete annotation',
        onClick: event => {
          event.stopPropagation();
          event.preventDefault();
          const ref = state.source.getReference(annotation.id);
          try {
            if (shouldConfirmAnnotationDelete(annotation)) {
              const confirmDeleteDisplayText = getConfirmDeleteDisplayText(annotation);
              if (confirm(confirmDeleteDisplayText)) {
                state.source.delete(ref);
              }
            } else {
              state.source.delete(ref);
            }
          } finally {
            ref.dispose();
          }
        },
      });
      // deleteButton.classList.add('neuroglancer-annotation-list-entry-delete');
      buttonElement.appendChild(deleteButton);
    };

    const maybeAddVisiblityButton = () => {
      if (state.source.readonly) return;
      if (visibilityButton !== undefined) return;
      if (isDummyAnnotation(annotation)) return;
      visibilityButton = makeVisibilityButton(annotation.id, state);
      //visibilityButton.classList.add('neuroglancer-annotation-list-entry-delete');
      buttonElement.appendChild(visibilityButton);
    };

    let numRows = 0;
    visitTransformedAnnotationGeometry(annotation, chunkTransform, (layerPosition, isVector) => {
      isVector;
      ++numRows;
      const position = document.createElement('div');
      position.className = 'neuroglancer-annotation-position';
      element.appendChild(position);
      let i = 0;
      const addDims =
          (viewDimensionIndices: readonly number[], layerDimensionIndices: readonly number[]) => {
            for (const viewDim of viewDimensionIndices) {
              const layerDim = layerDimensionIndices[viewDim];
              if (layerDim !== -1) {
                const coord = Math.floor(layerPosition[layerDim]);
                const coordElement = document.createElement('div');
                const text = (annotation.type === AnnotationType.VOLUME)? '' : coord.toString();
                coordElement.textContent = text;
                coordElement.classList.add('neuroglancer-annotation-coordinate');
                coordElement.style.gridColumn = `dim ${i + 1}`;
                this.setColumnWidth(i, text.length);
                position.appendChild(coordElement);
              }
              ++i;
            }
          };
      addDims(
          this.globalDimensionIndices, chunkTransform.modelTransform.globalToRenderLayerDimensions);
      addDims(
          this.localDimensionIndices, chunkTransform.modelTransform.localToRenderLayerDimensions);
      maybeAddVisiblityButton();
      maybeAddDeleteButton();
      if (buttonElement.childElementCount > 0) element.appendChild(buttonElement);
    });
    if (annotation.description) {
      ++numRows;
      const description = document.createElement('div');
      description.classList.add('neuroglancer-annotation-description');
      description.textContent = annotation.description;
      element.appendChild(description);
    }
    if (annotation.type === AnnotationType.CELL && annotation.category) {
      ++numRows;
      const category = document.createElement('div');
      category.classList.add('neuroglancer-annotation-description');
      category.textContent = annotation.category;
      element.appendChild(category);
    }
    icon.style.gridRow = `span ${numRows}`;
    if (deleteButton !== undefined) {
      deleteButton.style.gridRow = `span ${numRows}`;
    }
    element.addEventListener('mouseenter', () => {
      this.displayState.hoverState.value = {
        id: annotation.id,
        partIndex: 0,
        annotationLayerState: state,
      };
      this.layer.selectAnnotation(state, annotation.id, false);
    });

    let addEventsToElement = true;

    if (annotation.parentAnnotationId) {
      const parentRef = state.source.getReference(annotation.parentAnnotationId);
      if (parentRef.value && isChildDummyAnnotation(parentRef.value)) {
        addEventsToElement = false;
      }
    }

    if (addEventsToElement) {
      element.addEventListener('action:select-position', event => {
        event.stopPropagation();
        this.layer.selectAnnotation(state, annotation.id, 'toggle');
      });

      element.addEventListener('action:pin-annotation', event => {
        event.stopPropagation();
        this.layer.selectAnnotation(state, annotation.id, true);
      });

      element.addEventListener('action:move-to-annotation', event => {
        event.stopPropagation();
        event.preventDefault();
        const {layerRank} = chunkTransform;
        const chunkPosition = new Float32Array(layerRank);
        const layerPosition = new Float32Array(layerRank);
        getCenterPosition(chunkPosition, annotation);
        matrix.transformPoint(
            layerPosition, chunkTransform.chunkToLayerTransform, layerRank + 1, chunkPosition,
            layerRank);
        setLayerPosition(this.layer, chunkTransform, layerPosition);
      });

      element.addEventListener('action:display-annotation-children', event => {
        event.stopPropagation();
        if (isTypeCollection(annotation)) {
          const collection = <Collection>annotation;
          const reference = state.source.getReference(annotation.id);
          if (!reference.value) return;
          const newAnn = {...collection, childrenVisible: !collection.childrenVisible};
          state.source.update(reference, <Annotation>newAnn);
        }
      });
    }

    const selectionState = this.selectedAnnotationState.value;
    if (selectionState !== undefined && selectionState.annotationLayerState === state) {
      const reference = selectionState.annotationLayerState.source.getNonDummyAnnotationReference(selectionState.annotationId);
      if (reference.value !== null && reference.value!.id === annotation.id) {
        element.classList.add('neuroglancer-annotation-selected');
      }
      reference.dispose();
    }
    return element;
  }
}

export class AnnotationTab extends Tab {
  private layerView =
      this.registerDisposer(new AnnotationLayerView(this.layer, this.layer.annotationDisplayState));
  constructor(public layer: Borrowed<UserLayerWithAnnotations>) {
    super();
    const {element} = this;
    element.classList.add('neuroglancer-annotations-tab');
    element.appendChild(this.layerView.element);
  }
}

function getSelectedAssociatedSegments(annotationLayer: AnnotationLayerState) {
  const segments: Uint64[][] = [];
  const {relationships} = annotationLayer.source;
  const {relationshipStates} = annotationLayer.displayState;
  for (let i = 0, count = relationships.length; i < count; ++i) {
    const segmentationState = relationshipStates.get(relationships[i]).segmentationState.value;
    if (segmentationState != null) {
      if (segmentationState.segmentSelectionState.hasSelectedSegment) {
        segments[i] = [segmentationState.segmentSelectionState.selectedSegment.clone()];
        continue;
      }
    }
    segments[i] = [];
  }
  return segments;
}

abstract class PlaceAnnotationTool extends LegacyTool {
  layer: UserLayerWithAnnotations;
  constructor(layer: UserLayerWithAnnotations, options: any) {
    super(layer);
    options;
  }

  get annotationLayer(): AnnotationLayerState|undefined {
    for (const state of this.layer.annotationStates.states) {
      if (!state.source.readonly) return state;
    }
    return undefined;
  }

  get annotationColorPicker(): AnnotationColorWidget|undefined {
    return this.layer.annotationColorPicker;
  }
}

const ANNOTATE_POINT_TOOL_ID = 'annotatePoint';
const ANNOTATE_LINE_TOOL_ID = 'annotateLine';
const ANNOTATE_BOUNDING_BOX_TOOL_ID = 'annotateBoundingBox';
const ANNOTATE_ELLIPSOID_TOOL_ID = 'annotateSphere';
const ANNOTATE_POLYGON_TOOL_ID = 'annotatePolygon';
const ANNOTATE_VOLUME_TOOL_ID = 'annotateVolume';
const ANNOTATE_CELL_TOOL_ID = 'annotateCell';
const ANNOTATE_COM_TOOL_ID = 'annotateCom';

export class PlacePointTool extends PlaceAnnotationTool {
  trigger(mouseState: MouseSelectionState) {
    const {annotationLayer, annotationColorPicker} = this;
    if (annotationLayer === undefined) {
      // Not yet ready.
      return;
    }
    if (mouseState.updateUnconditionally()) {
      const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
      if (point === undefined) return;
      const annotation: Annotation = {
        id: '',
        description: '',
        relatedSegments: getSelectedAssociatedSegments(annotationLayer),
        point,
        type: AnnotationType.POINT,
        properties: annotationLayer.source.properties.map(x => {
          if (x.identifier !== 'color') return x.default;
          if (x.identifier === 'color' && annotationColorPicker === undefined) return x.default;
          const colorInNum = packColor(parseRGBColorSpecification(annotationColorPicker!.getColor()));
          return colorInNum;
        }),
      };
      const reference = annotationLayer.source.add(annotation, /*commit=*/ true);
      this.layer.selectAnnotation(annotationLayer, reference.id, true);
      reference.dispose();
    }
  }

  get description() {
    return `annotate point`;
  }

  toJSON() {
    return ANNOTATE_POINT_TOOL_ID;
  }
}

function getMousePositionInAnnotationCoordinates(
    mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState): Float32Array|
    undefined {
  const chunkTransform = annotationLayer.chunkTransform.value;
  if (chunkTransform.error !== undefined) return undefined;
  const chunkPosition = new Float32Array(chunkTransform.modelTransform.unpaddedRank);
  if (!getChunkPositionFromCombinedGlobalLocalPositions(
          chunkPosition, mouseState.unsnappedPosition, annotationLayer.localPosition.value,
          chunkTransform.layerRank, chunkTransform.combinedGlobalLocalToChunkTransform)) {
    return undefined;
  }
  return chunkPosition;
}

abstract class TwoStepAnnotationTool extends PlaceAnnotationTool {
  inProgressAnnotation:
      {annotationLayer: AnnotationLayerState, reference: AnnotationReference, disposer: () => void}|
      undefined;

  abstract getInitialAnnotation(
      mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState): Annotation;
  abstract getUpdatedAnnotation(
      oldAnnotation: Annotation, mouseState: MouseSelectionState,
      annotationLayer: AnnotationLayerState): Annotation;

  trigger(mouseState: MouseSelectionState, parentRef?: AnnotationReference) {
    const {annotationLayer} = this;
    if (annotationLayer === undefined) {
      // Not yet ready.
      return;
    }
    if (mouseState.updateUnconditionally()) {
      const updatePointB = () => {
        const state = this.inProgressAnnotation!;
        const reference = state.reference;
        const newAnnotation =
            this.getUpdatedAnnotation(reference.value!, mouseState, annotationLayer);
        if (JSON.stringify(annotationToJson(newAnnotation, annotationLayer.source)) ===
            JSON.stringify(annotationToJson(reference.value!, annotationLayer.source))) {
          return;
        }
        state.annotationLayer.source.update(reference, newAnnotation);
        this.layer.selectAnnotation(annotationLayer, reference.id, true);
      };

      if (this.inProgressAnnotation === undefined) {
        const initAnn = this.getInitialAnnotation(mouseState, annotationLayer);
        if (parentRef) {
          initAnn.description = parentRef.value!.description;
          initAnn.properties = Object.assign([], parentRef.value!.properties);
        }
        const reference = annotationLayer.source.add(initAnn, /*commit=*/ false, parentRef);
        this.layer.selectAnnotation(annotationLayer, reference.id, true);
        const mouseDisposer = mouseState.changed.add(updatePointB);
        const disposer = () => {
          mouseDisposer();
          reference.dispose();
        };
        this.inProgressAnnotation = {
          annotationLayer,
          reference,
          disposer,
        };
      } else {
        updatePointB();
        this.inProgressAnnotation.annotationLayer.source.commit(
            this.inProgressAnnotation.reference);
        this.inProgressAnnotation.disposer();
        this.inProgressAnnotation = undefined;
      }
    }
  }

  disposed() {
    this.deactivate();
    super.disposed();
  }

  deactivate() {
    if (this.inProgressAnnotation !== undefined) {
      this.inProgressAnnotation.annotationLayer.source.delete(this.inProgressAnnotation.reference);
      this.inProgressAnnotation.disposer();
      this.inProgressAnnotation = undefined;
    }
  }
}
/**
 * An abstract class to represent any annotation tool with multiple steps to complete annotation.
 */
export abstract class MultiStepAnnotationTool extends PlaceAnnotationTool {
  inProgressAnnotation: {
    annotationLayer: AnnotationLayerState, 
    reference: AnnotationReference, 
    disposer: () => void
  } | undefined;

  
  abstract getInitialAnnotation(mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState): Annotation;
  abstract getUpdatedAnnotation(oldAnnotation: Annotation, mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState): Annotation;
  abstract complete() : boolean;
  abstract undo(mouseState: MouseSelectionState) : boolean;

  disposed() {
    this.deactivate();
    super.disposed();
  }

  deactivate() {
    if (this.inProgressAnnotation !== undefined) {
      this.inProgressAnnotation.annotationLayer.source.delete(this.inProgressAnnotation.reference);
      this.inProgressAnnotation.disposer();
      this.inProgressAnnotation = undefined;
    }
  }
}
/**
 * Abstract class to represent any tool which draws a Collection.
 */
abstract class PlaceCollectionAnnotationTool extends MultiStepAnnotationTool {
  annotationType: AnnotationType.POLYGON | AnnotationType.VOLUME;
  /**
   * Returns the initial collection annotation based on the mouse location.
   * @param mouseState 
   * @param annotationLayer 
   * @returns newly created annotation.
   */
  getInitialAnnotation(mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState): Annotation {
    const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
    const {annotationColorPicker} = this;
    return <Polygon|Volume> {
      id: '',
      type: this.annotationType,
      description: '',
      source: point,
      properties: annotationLayer.source.properties.map(x => {
        if (x.identifier !== 'color') return x.default;
        if (x.identifier === 'color' && annotationColorPicker === undefined) return x.default;
        const colorInNum = packColor(parseRGBColorSpecification(annotationColorPicker!.getColor()));
        return colorInNum;
      }),
      childAnnotationIds: [],
      childrenVisible: false,
    };
  }
  /**
   * Get updated annotation based on the source position of the mouse.
   * @param oldAnnotation 
   * @param mouseState 
   * @param annotationLayer 
   * @returns updated annotation.
   */
  getUpdatedAnnotation(oldAnnotation: Annotation, mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState): Annotation {
    const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
    if(point == undefined) return oldAnnotation;
    return <Polygon>{...oldAnnotation, source: point};
  }
}

/**
 * Enum to represent different polygon modes.
 */
export enum PolygonToolMode {
  DRAW,
  EDIT
}
/**
 * This class is used to draw polygon annotations.
 */
export class PlacePolygonTool extends PlaceCollectionAnnotationTool {
  childTool: PlaceLineTool;
  sourceMouseState: MouseSelectionState;
  sourcePosition: Float32Array|undefined;
  mode: PolygonToolMode;
  bindingsRef: RefCounted|undefined;
  active: boolean;
  zCoordinate: number|undefined;

  constructor(public layer: UserLayerWithAnnotations, options: any, mode: PolygonToolMode = PolygonToolMode.DRAW) {
    super(layer, options);
    this.mode = mode;
    this.active = true;
    this.childTool = new PlaceLineTool(layer, {...options, parent: this});
    this.bindingsRef = new RefCounted();
    if (mode === PolygonToolMode.DRAW) {
      //@ts-ignore
      setPolygonDrawModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
    } else {
      //@ts-ignore
      setPolygonEditModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
    }
  }
  /**
   * This function is called when the user tries to draw annotation
   * @param mouseState
   * @param parentRef optional parent reference passed from parent tool.
   * @returns void
   */
  trigger(mouseState: MouseSelectionState, parentRef?: AnnotationReference) {
    const {annotationLayer, mode} = this;
    if (annotationLayer === undefined || mode === PolygonToolMode.EDIT) {
      // Not yet ready.
      return;
    }

    if (mouseState.updateUnconditionally()) {
      if (this.inProgressAnnotation === undefined) {
        if (parentRef) {
          const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
          if (point === undefined) return;
          this.zCoordinate = getZCoordinate(point);
          if (this.zCoordinate === undefined) return;
          if (!isSectionValid(annotationLayer, parentRef.id, this.zCoordinate)) {
            StatusMessage.showTemporaryMessage("A polygon already exists in this section for the volume, only one polygon per section is allowed for a volume");
            return;
          }
        }
        this.sourceMouseState = <MouseSelectionState>{...mouseState};
        this.sourcePosition = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
        const annotation = this.getInitialAnnotation(mouseState, annotationLayer);
        if (parentRef) {
          //annotation.description = parentRef.value!.description;
          annotation.properties = Object.assign([], parentRef.value!.properties);
        }
        const reference = annotationLayer.source.add(annotation, /*commit=*/ false, parentRef);
        this.layer.selectAnnotation(annotationLayer, reference.id, true);
        this.childTool.trigger(mouseState, reference);
        const disposer = () => {
          reference.dispose();
        };
        this.inProgressAnnotation = {
          annotationLayer,
          reference,
          disposer,
        };
      } else {
        const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
        if (point === undefined) return;
        if(!isPointUniqueInPolygon(annotationLayer, <Polygon>(this.inProgressAnnotation.reference.value!), point)) {
          StatusMessage.showTemporaryMessage("All vertices of polygon must be unique");
          return;
        }

        if (parentRef) {
          const {zCoordinate} = this;
          // const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
          // if (point === undefined) return;
          const newZCoordinate = getZCoordinate(point);
          if (zCoordinate === undefined || newZCoordinate === undefined) return;
          if (zCoordinate !== newZCoordinate) {
            StatusMessage.showTemporaryMessage("All vertices of polygon must be in same plane");
            return;
          }
        }
        this.childTool.trigger(mouseState, this.inProgressAnnotation.reference);
        //start new annotation
        this.childTool.trigger(mouseState, this.inProgressAnnotation.reference);
      }
    }
  }
  /**
   * Disposes the annotation tool.
   */
  dispose() {
    if(this.bindingsRef) this.bindingsRef.dispose();
    this.bindingsRef = undefined;
    if (this.childTool) {
      this.childTool.dispose();
    }
    // completely delete the annotation
    this.disposeAnnotation();
    super.dispose();
  }
  /**
   * Activates the annotation tool if value is true.
   * @param _value 
   */
  setActive(_value: boolean) {
    if (this.active !== _value) {
      this.active = _value;
      if (this.active) {
        const {mode} = this;
        if (this.bindingsRef) {
          this.bindingsRef.dispose();
          this.bindingsRef = undefined;
        }
        this.bindingsRef = new RefCounted();
        if (mode === PolygonToolMode.DRAW && this.bindingsRef) {
          //@ts-ignore
          setPolygonDrawModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
        } else if (this.bindingsRef && mode === PolygonToolMode.EDIT) {
          //@ts-ignore
          setPolygonEditModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
        }
      }
      this.childTool.setActive(_value);
      super.setActive(_value);
    }
  }
  /**
   * Deactivates the annotation tool.
   */
  deactivate() {
    this.active = false;
    if (this.bindingsRef) this.bindingsRef.dispose();
    this.bindingsRef = undefined;
    this.childTool.deactivate();
    super.deactivate();
  }
  /**
   * Completes the last edge of polygon to be drawn.
   * @returns true if the operation suceeded otherwise false.
   */
  complete(): boolean {
    const {annotationLayer, mode} = this;
    const state = this.inProgressAnnotation;

    if(annotationLayer === undefined || state === undefined || mode === PolygonToolMode.EDIT) {
      return false;
    }

    if(this.completeLastLine()) {
      annotationLayer.source.commit(this.inProgressAnnotation!.reference);
      this.layer.selectAnnotation(annotationLayer, this.inProgressAnnotation!.reference.id, true);
      this.inProgressAnnotation!.disposer();
      this.inProgressAnnotation = undefined;
      this.sourcePosition = undefined;
      return true;
    }

    return false;
  }
  /**
   * Dispose current active annotation.
   */
  private disposeAnnotation() {
    if (this.inProgressAnnotation && this.annotationLayer) {
      this.annotationLayer.source.delete(this.inProgressAnnotation.reference);
      this.inProgressAnnotation.disposer();
      this.inProgressAnnotation = undefined;
    }
  }
  /**
   * Undo the last drawn polygon line segment.
   */
  undo(mouseState: MouseSelectionState): boolean {
    const {annotationLayer, mode} = this;
    const state = this.inProgressAnnotation;
    
    if(annotationLayer === undefined || state === undefined || mode === PolygonToolMode.EDIT) {
      return false;
    }

    const annotation = <Polygon>state.reference.value;
    if (annotation.childAnnotationIds.length > 0) {
      const id = annotation.childAnnotationIds[annotation.childAnnotationIds.length-1];
      const annotationRef = annotationLayer.source.getReference(id);
      annotationLayer.source.delete(annotationRef, true);
      annotationRef.dispose();
      this.childTool.inProgressAnnotation!.disposer();
      this.childTool.inProgressAnnotation = undefined;
    }

    if (annotation.childAnnotationIds.length > 0) {
      const updatePointB = () => {
        const state = this.childTool.inProgressAnnotation!;
        const reference = state.reference;
        const newAnnotation =
            this.childTool.getUpdatedAnnotation(<Line>reference.value!, mouseState, annotationLayer);
        if (JSON.stringify(annotationToJson(newAnnotation, annotationLayer.source)) ===
            JSON.stringify(annotationToJson(reference.value!, annotationLayer.source))) {
          return;
        }
        state.annotationLayer.source.update(reference, newAnnotation);
        this.childTool.layer.selectAnnotation(annotationLayer, reference.id, true);
      };

      const id = annotation.childAnnotationIds[annotation.childAnnotationIds.length-1];
      const reference = annotationLayer.source.getReference(id);
      this.childTool.layer.selectAnnotation(annotationLayer, reference.id, true);
      const mouseDisposer = mouseState.changed.add(updatePointB);
      const disposer = () => {
        mouseDisposer();
        reference.dispose();
      };
      this.childTool.inProgressAnnotation = {
        annotationLayer,
        reference,
        disposer,
      };
    } else {
      this.disposeAnnotation();
    }

    return true;
  }
  /**
   * Completes the last line of the polygon.
   * @returns true if last line was succesfully completed otherwise false.
   */
  private completeLastLine(): boolean {
    const {annotationLayer, mode} = this;
    const {childTool} = this;
    const childState = childTool.inProgressAnnotation;
    const state = this.inProgressAnnotation;

    if(annotationLayer === undefined || childTool === undefined || childState === undefined || state === undefined || mode == PolygonToolMode
      .EDIT) {
      return false;
    }
    const annotation = <Polygon>state.reference.value;
    if(annotation.childAnnotationIds.length < 3) return false; //min 3 sides in polygon

    if (childState.reference !== undefined && childState.reference.value !== undefined) {
      const newAnnotation = <Annotation>{...childState.reference.value, pointB: this.sourcePosition};
      annotationLayer.source.update(childState.reference, newAnnotation);
      this.layer.selectAnnotation(annotationLayer, childState.reference.id, true);
      annotationLayer.source.commit(childState.reference);
      this.childTool.inProgressAnnotation!.disposer();
      this.childTool.inProgressAnnotation = undefined;
      return true;
    }
    return false;
  }
  /**
   * Adds a new vertex to the polygon in edit mode.
   * @param mouseState 
   * @returns 
   */
  addVertexPolygon(mouseState: MouseSelectionState) {
    const {mode} = this;
    if (mode === PolygonToolMode.DRAW) return;
    const selectedAnnotationId = mouseState.pickedAnnotationId;
    const annotationLayer = mouseState.pickedAnnotationLayer;
    const pickedOffset = mouseState.pickedOffset;

    if (annotationLayer === undefined || selectedAnnotationId === undefined || isCornerPicked(pickedOffset)) {
      return;
    }

    const annotationRef = annotationLayer.source.getReference(selectedAnnotationId);
    if (annotationRef.value!.parentAnnotationId === undefined) {
      return;
    }
    const parentAnnotationId = annotationRef.value!.parentAnnotationId;
    const parentAnnotationRef = annotationLayer.source.getReference(parentAnnotationId);
    const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
    if (parentAnnotationRef.value!.type !== AnnotationType.POLYGON || annotationRef.value!.type !== AnnotationType.LINE
      || point === undefined) {
      return;
    }
    const newAnn1 = <Line>{
      id: '',
      type: AnnotationType.LINE,
      description: parentAnnotationRef.value!.description,
      pointA: (<Line>annotationRef.value).pointA,
      pointB: point,
      properties: Object.assign([], parentAnnotationRef.value!.properties),
    };
    const newAnn2 = <Line>{
      id: '',
      type: AnnotationType.LINE,
      description: parentAnnotationRef.value!.description,
      pointA: point,
      pointB: (<Line>annotationRef.value).pointB,
      properties: Object.assign([], parentAnnotationRef.value!.properties),
    };
    let index = (<Polygon>parentAnnotationRef.value!).childAnnotationIds.indexOf(annotationRef.id);
    if (index === -1) index = (<Polygon>parentAnnotationRef.value!).childAnnotationIds.length;
    const newAnnRef1 = annotationLayer.source.add(newAnn1, false, parentAnnotationRef, index);
    const newAnnRef2 = annotationLayer.source.add(newAnn2, false, parentAnnotationRef, index+1);
    annotationLayer.source.delete(annotationRef, true);
    annotationLayer.source.commit(newAnnRef1);
    annotationLayer.source.commit(newAnnRef2);
    annotationRef.dispose();
    newAnnRef1.dispose();
    newAnnRef2.dispose();
    parentAnnotationRef.dispose();
  }
  /**
   * Deletes a vertex of the polygon in edit mode.
   * @param mouseState 
   * @returns 
   */
  deleteVertexPolygon(mouseState: MouseSelectionState) {
    const {mode} = this;
    if (mode === PolygonToolMode.DRAW) return;
    const selectedAnnotationId = mouseState.pickedAnnotationId;
    const annotationLayer = mouseState.pickedAnnotationLayer;
    const pickedOffset = mouseState.pickedOffset;
    if (annotationLayer === undefined || selectedAnnotationId === undefined || !isCornerPicked(pickedOffset)) {
      return;
    }
    const annotationRef = annotationLayer.source.getReference(selectedAnnotationId);
    if (annotationRef.value!.parentAnnotationId === undefined) {
      return;
    }
    const parentAnnotationId = annotationRef.value!.parentAnnotationId;
    const parentAnnotationRef = annotationLayer.source.getReference(parentAnnotationId);
    const point = getEndPointBasedOnPartIndex(<Line>annotationRef.value, pickedOffset);
    if (parentAnnotationRef.value!.type !== AnnotationType.POLYGON || annotationRef.value!.type !== AnnotationType.LINE
      || point === undefined) {
      return;
    }

    let annotationRef1 : AnnotationReference|undefined = undefined;
    let annotationRef2 : AnnotationReference|undefined = undefined;
    const childAnnotationIds = (<Polygon>(parentAnnotationRef.value!)).childAnnotationIds;
    if (childAnnotationIds.length <= 3) { // minimum 3 sides should be there
      return;
    }

    childAnnotationIds.forEach((annotationId) => {
      const annRef = annotationLayer.source.getReference(annotationId);
      const ann = <Line>annRef.value;
      if (arraysEqual(ann.pointA, point)) {
        annotationRef2 = <AnnotationReference>annRef;
      } else if (arraysEqual(ann.pointB, point)) {
        annotationRef1 = <AnnotationReference>annRef;
      } else {
        annRef.dispose();
      }
    });

    if(annotationRef1 === undefined || annotationRef2 === undefined) return;

    annotationRef1 = <AnnotationReference>annotationRef1;
    annotationRef2 = <AnnotationReference>annotationRef2;

    const newAnn = <Line>{
      id: '',
      type: AnnotationType.LINE,
      description: parentAnnotationRef.value!.description,
      pointA: (<Line>annotationRef1.value).pointA,
      pointB: (<Line>annotationRef2.value).pointB,
      properties: Object.assign([], parentAnnotationRef.value!.properties),
    };

    let index = (<Polygon>parentAnnotationRef.value!).childAnnotationIds.indexOf(annotationRef1.id);
    if (index === -1) index = (<Polygon>parentAnnotationRef.value!).childAnnotationIds.length;
    const newAnnRef = annotationLayer.source.add(newAnn, false, parentAnnotationRef, index);
    annotationLayer.source.delete(annotationRef1, true);
    annotationLayer.source.delete(annotationRef2, true);
    annotationLayer.source.commit(newAnnRef);
    annotationRef1.dispose();
    annotationRef2.dispose();
    newAnnRef.dispose();
    parentAnnotationRef.dispose();
  }
  /**
   * Get polygon description to be shown in top corner of annotation tab.
   */
  get description() {
    const {mode} = this;
    if (mode === PolygonToolMode.DRAW) {
      return `annotate polygon (draw mode)`;
    }
    return `annotate polygon (edit mode)`;
  }

  toJSON() {
    return ANNOTATE_POLYGON_TOOL_ID;
  }
}
PlacePolygonTool.prototype.annotationType = AnnotationType.POLYGON;

/**
 * Enum to represent different types of volume modes (noop is view mode).
 */
export enum VolumeToolMode {
  DRAW,
  EDIT,
  NOOP
}

export interface VolumeSession {
  reference: AnnotationReference;
}
/**
 * Enum to represent different types of com modes (noop is view mode).
 */
export enum ComToolMode {
  DRAW,
  EDIT,
  NOOP
}

export interface COMSession {
  label: string|undefined;
  color: string|undefined;
}
/**
 * Enum to represent different types of cell modes (noop is view mode).
 */
export enum CellToolMode {
  DRAW,
  EDIT,
  NOOP
}

export interface CellSession {
  label: string|undefined;
  color: string|undefined;
  category: string|undefined;
}

/**
 * This class is used to create the Volume annotation tool.
 */
export class PlaceVolumeTool extends PlaceCollectionAnnotationTool {
  /** Volume tool utilises the polygon tool to draw annotations. */
  childTool: PlacePolygonTool|undefined;
  sourceMouseState: MouseSelectionState;
  sourcePosition: any;
  mode: VolumeToolMode;
  active: boolean;
  session: WatchableValue<VolumeSession|undefined> = new WatchableValue(undefined);
  sessionWidget: RefCounted|undefined;
  sessionWidgetDiv: HTMLElement|undefined;
  icon: WatchableValue<HTMLElement|undefined> = new WatchableValue(undefined);

  constructor(public layer: UserLayerWithAnnotations, options: any, session: VolumeSession|undefined = undefined,
     mode: VolumeToolMode = VolumeToolMode.NOOP, sessionDiv: HTMLElement|undefined = undefined,
     iconDiv: HTMLElement|undefined = undefined) {
    super(layer, options);
    this.mode = mode;
    const func = this.displayVolumeSession.bind(this);
    this.sessionWidgetDiv = sessionDiv;
    this.session.changed.add(() => func());
    this.session.value = session;
    this.active = true;
    if (mode === VolumeToolMode.DRAW) {
      this.childTool = new PlacePolygonTool(layer, {...options, parent: this}, PolygonToolMode.DRAW);
    } else if (mode === VolumeToolMode.EDIT) {
      this.childTool = new PlacePolygonTool(layer, {...options, parent: this}, PolygonToolMode.EDIT);
    } else {
      this.childTool = undefined;
    }
    this.icon.changed.add(this.setIconColor.bind(this));
    this.icon.value = iconDiv;
    this.registerDisposer(() => {
      const iconDiv = this.icon.value;
      if (iconDiv === undefined) return;
      iconDiv.style.backgroundColor = '';
      this.icon.value = undefined;
    });
  }
  /** Sets the icon color of the volume tool based on the type of mode */
  setIconColor() {
    const iconDiv = this.icon.value;
    if (iconDiv === undefined) return;
    switch (this.mode) {
      case VolumeToolMode.DRAW: {
        iconDiv.style.backgroundColor = 'green';
        break;
      }
      case VolumeToolMode.EDIT: {
        iconDiv.style.backgroundColor = 'red';
        break;
      }
      default: {
        iconDiv.style.backgroundColor = 'grey';
      }
    }
  }
  /**
   * This function is called when the user tries to draw annotation
   * @param mouseState
   * @returns void
   */
  trigger(mouseState: MouseSelectionState) {
    const {annotationLayer, mode} = this;
    const {session} = this;
    if (annotationLayer === undefined || mode !== VolumeToolMode.DRAW || session.value === undefined || this.childTool === undefined) {
      // Not yet ready.
      return;
    }
    if (!session.value.reference.value) return;

    if (mouseState.updateUnconditionally()) {
      this.childTool.trigger(mouseState, session.value.reference);
    }
  }
  /**
   * Takes description and color and creates a new volume annotation.
   * @param description 
   * @param color 
   * @returns 
   */
  createNewVolumeAnn(description: string|undefined, color: string|undefined) : AnnotationReference | undefined {
    const {annotationLayer} = this;
    if (annotationLayer === undefined) return undefined;
    //@ts-ignore
    const collection = <Collection>this.getInitialAnnotation(window['viewer'].mouseState, annotationLayer);
    collection.childrenVisible = true;
    if (description) collection.description = description;
    if (color) {
      for(let idx = 0; idx < annotationLayer.source.properties.length; idx++) {
        if (annotationLayer.source.properties[idx].identifier === 'color' && collection.properties.length > idx) {
          collection.properties[idx] = packColor(parseRGBColorSpecification(color));
          break;
        }
      }
    }
    const reference = annotationLayer.source.add(<Annotation>collection, true);
    this.layer.selectAnnotation(annotationLayer, reference.id, true);

    return reference;
  }
  /**
   * Disposes the annotation tool.
   */
  dispose() {
    if (this.childTool) {
      this.childTool.dispose();
    }
    // completely delete the session
    this.disposeSession();
    super.dispose();
  }
  /**
   * Activates the annotation tool if value is true.
   * @param _value 
   */
  setActive(_value: boolean) {
    if (this.active !== _value) {
      this.active = _value;
      if (this.childTool) {
        this.childTool.setActive(_value);
      }
      super.setActive(_value);
    }
  }
  /**
   * Deactivates the annotation tool.
   */
  deactivate() {
    this.active = false;
    if (this.childTool) this.childTool.deactivate();
    super.deactivate();
  }
  /**
   * Completes the last edge of polygon to be drawn.
   * @returns true if the operation suceeded otherwise false.
   */
  complete(): boolean {
    const {annotationLayer, mode} = this;
    const {session} = this;

    if (annotationLayer === undefined || session.value === undefined || mode !== VolumeToolMode.DRAW) {
      return false;
    }
    if (!session.value.reference.value) return false;

    if(this.childTool && this.childTool.complete()) {
      //this.layer.selectAnnotation(annotationLayer, session.value.reference.id, true);
      return true;
    }

    return false;
  }
  /**
   * Deletes the current active session
   */
  private disposeSession() {
    const {session} = this;
    if (session.value) session.value.reference.dispose();
    this.session.value = undefined;
    if (this.sessionWidget) this.sessionWidget.dispose();
    this.sessionWidget = undefined;
  }
  /**
   * Undo the last drawn polygon line segment.
   */
  undo(mouseState: MouseSelectionState): boolean {
    const {session, mode} = this;
    if (session.value === undefined || !session.value.reference.value || mode !== VolumeToolMode.DRAW || this.childTool === undefined) return false;
    
    return this.childTool.undo(mouseState);
  }
  /**
   * Adds a new vertex to the polygon in edit mode.
   * @param mouseState 
   * @returns 
   */
  addVertexPolygon(mouseState: MouseSelectionState) {
    const {mode} = this;
    if (mode !== VolumeToolMode.EDIT) return;
    if (!this.validateSession(mouseState.pickedAnnotationId, mouseState.pickedAnnotationLayer)) return;
    if (this.childTool) this.childTool.addVertexPolygon(mouseState);
  }
  /**
   * Deletes a vertex of the polygon in edit mode.
   * @param mouseState 
   * @returns 
   */
  deleteVertexPolygon(mouseState: MouseSelectionState) {
    const {mode} = this;
    if (mode !== VolumeToolMode.EDIT) return;
    if (!this.validateSession(mouseState.pickedAnnotationId, mouseState.pickedAnnotationLayer)) return;
    if (this.childTool) this.childTool.deleteVertexPolygon(mouseState);
  }
  /**
   * Valides the session, that is if the volume id edited is the current active session or not.
   * @param annotationId 
   * @param annotationLayer 
   * @returns 
   */
  validateSession(annotationId: string|undefined, annotationLayer: AnnotationLayerState|undefined) : boolean {
    if (this.session.value === undefined || annotationId === undefined || annotationLayer === undefined) return false;
    if (this.session.value.reference === undefined || !this.session.value.reference.value) return false;
    if (!this.active) return false;
    const reference = annotationLayer.source.getTopMostAnnotationReference(annotationId);
    if (!reference.value) return false;
    const annotation = reference.value;
    if (annotation.id !== this.session.value.reference.value.id) return false;
    return true;
  }
  /**
   * This function is used to display the Volume session data in the annotation tabs
   * while the user is annotating.
   */
  displayVolumeSession() {
    const {annotationLayer, session, sessionWidgetDiv} = this;
    if (this.sessionWidget) this.sessionWidget.dispose();
    this.sessionWidget = new RefCounted();
    const {sessionWidget} = this; 
    if (annotationLayer === undefined || session.value === undefined || sessionWidgetDiv === undefined) return;

    const reference = session.value.reference;
    sessionWidgetDiv.appendChild(
      this.sessionWidget.registerDisposer(new DependentViewWidget(
        this.sessionWidget.registerDisposer(
                    new AggregateWatchableValue(() => ({
                                                  annotation: reference,
                                                  chunkTransform: annotationLayer.chunkTransform
                                                }))),
                                                //@ts-ignore
                ({annotation, chunkTransform}, parent, context) => {
                  if (annotation == null) {
                    const statusMessage = document.createElement('div');
                    statusMessage.classList.add('neuroglancer-selection-annotation-status');
                    statusMessage.textContent =
                        (annotation === null) ? 'Annotation not found' : 'Loading...';
                    parent.appendChild(statusMessage);
                    return;
                  }

                  const sessionTitle = document.createElement('div');
                  sessionTitle.classList.add('volume-session-display-title');
                  sessionTitle.textContent = "Volume session";

                  const sessionBody = document.createElement('div');
                  sessionBody.classList.add('volume-session-display-body');

                  const {properties} = annotationLayer.source;

                  for (let i = 0, count = properties.length; i < count; ++i) {
                    const property = properties[i];
                    if (property.identifier === 'visibility') {
                      continue;
                    }
                    const label = document.createElement('label');
                    label.classList.add('neuroglancer-annotation-property');
                    const idElement = document.createElement('span');
                    idElement.classList.add('neuroglancer-annotation-property-label');
                    idElement.textContent = property.identifier;
                    label.appendChild(idElement);
                    const {description} = property;
                    if (description !== undefined) {
                      label.title = description;
                    }
                    let valueElement: HTMLSpanElement;
                    let colorElement : HTMLInputElement;
                    const value = annotation.properties[i];
                    switch (property.type) {
                      case 'float32':
                        valueElement = document.createElement('span');
                        valueElement.classList.add('neuroglancer-annotation-property-value');
                        valueElement.textContent = value.toPrecision(6);
                        label.appendChild(valueElement);
                        break;
                      case 'rgb': {
                        colorElement = document.createElement('input');
                        if (reference.value && reference.value.parentAnnotationId) {
                          colorElement.disabled = true;
                        };
                        colorElement.type = 'color';
                        const colorVec = unpackRGB(value);
                        const hex = serializeColor(colorVec);
                        colorElement.value = hex;
                        colorElement.style.backgroundColor =
                            useWhiteBackground(colorVec) ? 'white' : 'black';
                        colorElement.disabled = true;
                        // colorElement.addEventListener('change', () => {
                        //   const colorInNum = packColor(parseRGBColorSpecification(colorElement.value));
                          // annotationLayer.source.updateColor(reference, colorInNum);
                        // });
                        label.appendChild(colorElement);
                        break;
                      }
                      case 'rgba': {
                        valueElement = document.createElement('span');
                        valueElement.classList.add('neuroglancer-annotation-property-value');
                        const colorVec = unpackRGB(value >>> 8);
                        valueElement.textContent = serializeColor(unpackRGBA(value));
                        valueElement.style.backgroundColor =
                            serializeColor(unpackRGB(value >>> 8));
                        valueElement.style.color =
                            useWhiteBackground(colorVec) ? 'white' : 'black';
                        label.appendChild(valueElement);
                        break;
                      }
                      default:
                        valueElement = document.createElement('span');
                        valueElement.classList.add('neuroglancer-annotation-property-value');
                        valueElement.textContent = value.toString();
                        label.appendChild(valueElement);
                        break;
                    }
                    
                    sessionBody.appendChild(label);
                  }

                  if (annotation.description) {
                    const label = document.createElement('label');
                    label.classList.add('neuroglancer-annotation-property');
                    const idElement = document.createElement('span');
                    idElement.classList.add('neuroglancer-annotation-property-label');
                    idElement.textContent = "Description";
                    label.appendChild(idElement);
                    const valueElement = document.createElement('span');
                    valueElement.classList.add('neuroglancer-annotation-property-description');
                    valueElement.textContent = annotation.description || '';
                    label.appendChild(valueElement);
                    sessionBody.appendChild(label);
                  }
                  parent.appendChild(sessionTitle);
                  parent.appendChild(sessionBody);
                  
                  sessionWidget.registerDisposer(() => {
                    try {
                      sessionWidgetDiv.removeChild(parent);
                    }
                    catch (e) {
                      //ignore errors
                    }
                  });
                }))
            .element);
    return;
  }

  get description() {
    const {mode} = this;
    if (mode === VolumeToolMode.DRAW) {
      return `volume session (draw mode)`;
    } else if (mode === VolumeToolMode.EDIT) {
      return `volume session (edit mode)`;
    } else {
      return `volume session (view mode)`;
    }
  }

  toJSON() {
    return ANNOTATE_VOLUME_TOOL_ID;
  }
}
PlaceVolumeTool.prototype.annotationType = AnnotationType.VOLUME;

/**
 * This class is used to create the Cell annotation tool.
 */
export class PlaceCellTool extends PlaceAnnotationTool {
  mode: CellToolMode;
  active: boolean;
  session: WatchableValue<CellSession|undefined> = new WatchableValue(undefined);
  sessionWidget: RefCounted|undefined;
  sessionWidgetDiv: HTMLElement|undefined;
  icon: WatchableValue<HTMLElement|undefined> = new WatchableValue(undefined);
  bindingsRef: RefCounted|undefined;

  constructor(public layer: UserLayerWithAnnotations, options: any, session: CellSession|undefined = undefined,
     mode: CellToolMode = CellToolMode.NOOP, sessionDiv: HTMLElement|undefined = undefined,
     iconDiv: HTMLElement|undefined = undefined) {
    super(layer, options);
    this.mode = mode;
    const func = this.displayCellSession.bind(this);
    this.sessionWidgetDiv = sessionDiv;
    this.session.changed.add(() => func());
    this.session.value = session;
    this.active = true;
    this.bindingsRef = new RefCounted();
    if (mode === CellToolMode.DRAW) {
      //@ts-ignore
      setPointDrawModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
    } else if (mode === CellToolMode.EDIT) {
      //@ts-ignore
      setPointEditModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
    }
    this.icon.changed.add(this.setIconColor.bind(this));
    this.icon.value = iconDiv;
    this.registerDisposer(() => {
      const iconDiv = this.icon.value;
      if (iconDiv === undefined) return;
      iconDiv.style.backgroundColor = '';
      this.icon.value = undefined;
    });
  }
  /** Sets the icon color of the volume tool based on the type of mode */
  setIconColor() {
    const iconDiv = this.icon.value;
    if (iconDiv === undefined) return;
    switch (this.mode) {
      case CellToolMode.DRAW: {
        iconDiv.style.backgroundColor = 'green';
        break;
      }
      case CellToolMode.EDIT: {
        iconDiv.style.backgroundColor = 'red';
        break;
      }
      default: {
        iconDiv.style.backgroundColor = 'grey';
      }
    }
  }
  /**
   * This function is called when the user tries to draw annotation
   * @param mouseState
   * @returns void
   */
  trigger(mouseState: MouseSelectionState) {
    const {annotationLayer, mode} = this;
    const {session} = this;
    if (annotationLayer === undefined || mode !== CellToolMode.DRAW || session.value === undefined) {
      // Not yet ready.
      return;
    }
    if (!session.value.color) return;

    if (mouseState.updateUnconditionally()) {
      const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
      if (point === undefined) return;
      const annotation: Annotation = {
        id: '',
        description: session.value.label,
        category: session.value.category,
        relatedSegments: getSelectedAssociatedSegments(annotationLayer),
        point,
        type: AnnotationType.CELL,
        properties: annotationLayer.source.properties.map(x => {
          if (x.identifier !== 'color') return x.default;
          if (x.identifier === 'color' && session.value!.color === undefined) return x.default;
          const colorInNum = packColor(parseRGBColorSpecification(session.value!.color));
          return colorInNum;
        }),
      };
      const reference = annotationLayer.source.add(annotation, /*commit=*/ true);
      this.layer.selectAnnotation(annotationLayer, reference.id, true);
      reference.dispose();
    }
  }
  /**
   * Disposes the annotation tool.
   */
  dispose() {
    // completely delete the session
    if(this.bindingsRef) this.bindingsRef.dispose();
    this.bindingsRef = undefined;
    this.disposeSession();
    super.dispose();
  }
  /**
   * Activates the annotation tool if value is true.
   * @param _value 
   */
  setActive(_value: boolean) {
    if (this.active !== _value) {
      this.active = _value;
      if (this.active) {
        const {mode} = this;
        if (this.bindingsRef) {
          this.bindingsRef.dispose();
          this.bindingsRef = undefined;
        }
        this.bindingsRef = new RefCounted();
        if (mode === CellToolMode.DRAW && this.bindingsRef) {
          //@ts-ignore
          setPointDrawModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
        } else if (this.bindingsRef && mode === CellToolMode.EDIT) {
          //@ts-ignore
          setPointEditModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
        }
      }
      super.setActive(_value);
    }
  }
  /**
   * Deactivates the annotation tool.
   */
  deactivate() {
    this.active = false;
    if (this.bindingsRef) this.bindingsRef.dispose();
    this.bindingsRef = undefined;
    super.deactivate();
  }
  /**
   * Deletes the current active session
   */
  private disposeSession() {
    this.session.value = undefined;
    if (this.sessionWidget) this.sessionWidget.dispose();
    this.sessionWidget = undefined;
  }
  /**
   * Valides the session, that is if the volume id edited is the current active session or not.
   * @param annotationId 
   * @param annotationLayer 
   * @returns 
   */
  validateSession(annotationId: string|undefined, annotationLayer: AnnotationLayerState|undefined) : boolean {
    if (this.session.value === undefined || annotationId === undefined || annotationLayer === undefined) return false;
    if (!this.active) return false;
    const reference = annotationLayer.source.getTopMostAnnotationReference(annotationId);
    if (!reference.value) return false;
    const annotation = reference.value;
    if (annotation.type !== AnnotationType.CELL) return false;
    return true;
  }
  /**
   * This function is used to display the Cell session data in the annotation tabs
   * while the user is annotating.
   */
  displayCellSession() {
    const {annotationLayer, session, sessionWidgetDiv} = this;
    if (this.sessionWidget) this.sessionWidget.dispose();
    this.sessionWidget = new RefCounted();
    const {sessionWidget} = this; 
    if (annotationLayer === undefined || session.value === undefined || sessionWidgetDiv === undefined) return;

    sessionWidgetDiv.appendChild(
      this.sessionWidget.registerDisposer(new DependentViewWidget(
        this.sessionWidget.registerDisposer(
                    new AggregateWatchableValue(() => ({
                                                  session: session,
                                                }))),
                                                //@ts-ignore
                ({session}, parent, context) => {

                  if (session === null || session === undefined) {
                    const statusMessage = document.createElement('div');
                    statusMessage.classList.add('neuroglancer-selection-annotation-status');
                    statusMessage.textContent =
                        (session === null) ? 'Session not found' : 'Loading...';
                    parent.appendChild(statusMessage);
                    return;
                  }

                  const sessionTitle = document.createElement('div');
                  sessionTitle.classList.add('cell-session-display-title');
                  sessionTitle.textContent = "Cell session";

                  const sessionBody = document.createElement('div');
                  sessionBody.classList.add('cell-session-display-body');

                  if (session.color !== undefined) {
                    const label = document.createElement('label');
                    label.classList.add('neuroglancer-annotation-property');
                    const idElement = document.createElement('span');
                    idElement.classList.add('neuroglancer-annotation-property-label');
                    idElement.textContent = 'color';
                    label.appendChild(idElement);
                    const colorElement = document.createElement('input');
                    colorElement.type = 'color';
                    colorElement.value = serializeColor(parseRGBAColorSpecification(session.color));
                    colorElement.style.backgroundColor =
                        useWhiteBackground(parseRGBAColorSpecification(session.color)) ? 'white' : 'black';
                    colorElement.disabled = true;
                    label.appendChild(colorElement);
                    sessionBody.appendChild(label);
                  }

                  if (session.category !== undefined) {
                    const label = document.createElement('label');
                    label.classList.add('neuroglancer-annotation-property');
                    const idElement = document.createElement('span');
                    idElement.classList.add('neuroglancer-annotation-property-label');
                    idElement.textContent = "Category";
                    label.appendChild(idElement);
                    const valueElement = document.createElement('span');
                    valueElement.classList.add('neuroglancer-annotation-property-description');
                    valueElement.textContent = session.category || '';
                    label.appendChild(valueElement);
                    sessionBody.appendChild(label);
                  }

                  if (session.label !== undefined) {
                    const label = document.createElement('label');
                    label.classList.add('neuroglancer-annotation-property');
                    const idElement = document.createElement('span');
                    idElement.classList.add('neuroglancer-annotation-property-label');
                    idElement.textContent = "Label";
                    label.appendChild(idElement);
                    const valueElement = document.createElement('span');
                    valueElement.classList.add('neuroglancer-annotation-property-description');
                    valueElement.textContent = session.label || '';
                    label.appendChild(valueElement);
                    sessionBody.appendChild(label);
                  }
                  parent.appendChild(sessionTitle);
                  parent.appendChild(sessionBody);
                  
                  sessionWidget.registerDisposer(() => {
                    try {
                      sessionWidgetDiv.removeChild(parent);
                    }
                    catch (e) {
                      //ignore errors
                    }
                  });
                }))
            .element);
    return;
  }

  get description() {
    const {mode} = this;
    if (mode === CellToolMode.DRAW) {
      return `cell session (draw mode)`;
    } else if (mode === CellToolMode.EDIT) {
      return `cell session (edit mode)`;
    } else {
      return `cell session (view mode)`;
    }
  }

  toJSON() {
    return ANNOTATE_CELL_TOOL_ID;
  }
}
/**
 * This class is used to create the Centre of Mass (COM) annotation tool.
 */
export class PlaceComTool extends PlaceAnnotationTool {
  mode: ComToolMode;
  active: boolean;
  session: WatchableValue<COMSession|undefined> = new WatchableValue(undefined);
  sessionWidget: RefCounted|undefined;
  sessionWidgetDiv: HTMLElement|undefined;
  icon: WatchableValue<HTMLElement|undefined> = new WatchableValue(undefined);
  bindingsRef: RefCounted|undefined;

  constructor(public layer: UserLayerWithAnnotations, options: any, session: COMSession|undefined = undefined,
     mode: ComToolMode = ComToolMode.NOOP, sessionDiv: HTMLElement|undefined = undefined,
     iconDiv: HTMLElement|undefined = undefined) {
    super(layer, options);
    this.mode = mode;
    const func = this.displayComSession.bind(this);
    this.sessionWidgetDiv = sessionDiv;
    this.session.changed.add(() => func());
    this.session.value = session;
    this.active = true;
    this.bindingsRef = new RefCounted();
    if (mode === ComToolMode.DRAW) {
      //@ts-ignore
      setPointDrawModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
    } else if (mode === ComToolMode.EDIT) {
      //@ts-ignore
      setPointEditModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
    }
    this.icon.changed.add(this.setIconColor.bind(this));
    this.icon.value = iconDiv;
    this.registerDisposer(() => {
      const iconDiv = this.icon.value;
      if (iconDiv === undefined) return;
      iconDiv.style.backgroundColor = '';
      this.icon.value = undefined;
    });
  }
  /** Sets the icon color of the volume tool based on the type of mode */
  setIconColor() {
    const iconDiv = this.icon.value;
    if (iconDiv === undefined) return;
    switch (this.mode) {
      case ComToolMode.DRAW: {
        iconDiv.style.backgroundColor = 'green';
        break;
      }
      case ComToolMode.EDIT: {
        iconDiv.style.backgroundColor = 'red';
        break;
      }
      default: {
        iconDiv.style.backgroundColor = 'grey';
      }
    }
  }
  /**
   * This function is called when the user tries to draw annotation
   * @param mouseState
   * @returns void
   */
  trigger(mouseState: MouseSelectionState) {
    const {annotationLayer, mode} = this;
    const {session} = this;
    if (annotationLayer === undefined || mode !== ComToolMode.DRAW || session.value === undefined) {
      // Not yet ready.
      return;
    }
    if (!session.value.color) return;

    if (mouseState.updateUnconditionally()) {
      const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
      if (point === undefined) return;
      const annotation: Annotation = {
        id: '',
        description: session.value.label,
        relatedSegments: getSelectedAssociatedSegments(annotationLayer),
        point,
        type: AnnotationType.COM,
        properties: annotationLayer.source.properties.map(x => {
          if (x.identifier !== 'color') return x.default;
          if (x.identifier === 'color' && session.value!.color === undefined) return x.default;
          const colorInNum = packColor(parseRGBColorSpecification(session.value!.color));
          return colorInNum;
        }),
      };
      const reference = annotationLayer.source.add(annotation, /*commit=*/ true);
      this.layer.selectAnnotation(annotationLayer, reference.id, true);
      reference.dispose();
    }
  }
  /**
   * Disposes the annotation tool.
   */
  dispose() {
    // completely delete the session
    if(this.bindingsRef) this.bindingsRef.dispose();
    this.bindingsRef = undefined;
    this.disposeSession();
    super.dispose();
  }
  /**
   * Activates the annotation tool if value is true.
   * @param _value 
   */
  setActive(_value: boolean) {
    if (this.active !== _value) {
      this.active = _value;
      if (this.active) {
        const {mode} = this;
        if (this.bindingsRef) {
          this.bindingsRef.dispose();
          this.bindingsRef = undefined;
        }
        this.bindingsRef = new RefCounted();
        if (mode === ComToolMode.DRAW && this.bindingsRef) {
          //@ts-ignore
          setPointDrawModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
        } else if (this.bindingsRef && mode === ComToolMode.EDIT) {
          //@ts-ignore
          setPointEditModeInputEventBindings(this.bindingsRef, window['viewer'].inputEventBindings);
        }
      }
      super.setActive(_value);
    }
  }
  /**
   * Deactivates the annotation tool.
   */
  deactivate() {
    this.active = false;
    if (this.bindingsRef) this.bindingsRef.dispose();
    this.bindingsRef = undefined;
    super.deactivate();
  }
  /**
   * Deletes the current active session
   */
  private disposeSession() {
    this.session.value = undefined;
    if (this.sessionWidget) this.sessionWidget.dispose();
    this.sessionWidget = undefined;
  }
  /**
   * Valides the session, that is if the volume id edited is the current active session or not.
   * @param annotationId 
   * @param annotationLayer 
   * @returns 
   */
  validateSession(annotationId: string|undefined, annotationLayer: AnnotationLayerState|undefined) : boolean {
    if (this.session.value === undefined || annotationId === undefined || annotationLayer === undefined) return false;
    if (!this.active) return false;
    const reference = annotationLayer.source.getTopMostAnnotationReference(annotationId);
    if (!reference.value) return false;
    const annotation = reference.value;
    if (annotation.type !== AnnotationType.COM) return false;
    return true;
  }
  /**
   * This function is used to display the COM session data in the annotation tabs
   * while the user is annotating.
   */
  displayComSession() {
    const {annotationLayer, session, sessionWidgetDiv} = this;
    if (this.sessionWidget) this.sessionWidget.dispose();
    this.sessionWidget = new RefCounted();
    const {sessionWidget} = this; 
    if (annotationLayer === undefined || session.value === undefined || sessionWidgetDiv === undefined) return;

    sessionWidgetDiv.appendChild(
      this.sessionWidget.registerDisposer(new DependentViewWidget(
        this.sessionWidget.registerDisposer(
                    new AggregateWatchableValue(() => ({
                                                  session: session,
                                                }))),
                                                //@ts-ignore
                ({session}, parent, context) => {

                  if (session === null || session === undefined) {
                    const statusMessage = document.createElement('div');
                    statusMessage.classList.add('neuroglancer-selection-annotation-status');
                    statusMessage.textContent =
                        (session === null) ? 'Session not found' : 'Loading...';
                    parent.appendChild(statusMessage);
                    return;
                  }

                  const sessionTitle = document.createElement('div');
                  sessionTitle.classList.add('com-session-display-title');
                  sessionTitle.textContent = "Com session";

                  const sessionBody = document.createElement('div');
                  sessionBody.classList.add('com-session-display-body');

                  if (session.color !== undefined) {
                    const label = document.createElement('label');
                    label.classList.add('neuroglancer-annotation-property');
                    const idElement = document.createElement('span');
                    idElement.classList.add('neuroglancer-annotation-property-label');
                    idElement.textContent = 'color';
                    label.appendChild(idElement);
                    const colorElement = document.createElement('input');
                    colorElement.type = 'color';
                    colorElement.value = serializeColor(parseRGBAColorSpecification(session.color));
                    colorElement.style.backgroundColor =
                        useWhiteBackground(parseRGBAColorSpecification(session.color)) ? 'white' : 'black';
                    colorElement.disabled = true;
                    label.appendChild(colorElement);
                    sessionBody.appendChild(label);
                  }

                  if (session.label !== undefined) {
                    const label = document.createElement('label');
                    label.classList.add('neuroglancer-annotation-property');
                    const idElement = document.createElement('span');
                    idElement.classList.add('neuroglancer-annotation-property-label');
                    idElement.textContent = "Label";
                    label.appendChild(idElement);
                    const valueElement = document.createElement('span');
                    valueElement.classList.add('neuroglancer-annotation-property-description');
                    valueElement.textContent = session.label || '';
                    label.appendChild(valueElement);
                    sessionBody.appendChild(label);
                  }
                  parent.appendChild(sessionTitle);
                  parent.appendChild(sessionBody);
                  
                  sessionWidget.registerDisposer(() => {
                    try {
                      sessionWidgetDiv.removeChild(parent);
                    }
                    catch (e) {
                      //ignore errors
                    }
                  });
                }))
            .element);
    return;
  }

  get description() {
    const {mode} = this;
    if (mode === ComToolMode.DRAW) {
      return `com session (draw mode)`;
    } else if (mode === ComToolMode.EDIT) {
      return `com session (edit mode)`;
    } else {
      return `com session (view mode)`;
    }
  }

  toJSON() {
    return ANNOTATE_COM_TOOL_ID;
  }
}

abstract class PlaceTwoCornerAnnotationTool extends TwoStepAnnotationTool {
  annotationType: AnnotationType.LINE|AnnotationType.AXIS_ALIGNED_BOUNDING_BOX;

  getInitialAnnotation(mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState):
      Annotation {
    const {annotationColorPicker} = this;
    const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
    return <AxisAlignedBoundingBox|Line>{
      id: '',
      type: this.annotationType,
      description: '',
      pointA: point,
      pointB: point,
      properties: annotationLayer.source.properties.map(x => {
        if (x.identifier !== 'color') return x.default;
        if (x.identifier === 'color' && annotationColorPicker === undefined) return x.default;
        const colorInNum = packColor(parseRGBColorSpecification(annotationColorPicker!.getColor()));
        return colorInNum;
      }),
    };
  }

  getUpdatedAnnotation(
      oldAnnotation: AxisAlignedBoundingBox|Line, mouseState: MouseSelectionState,
      annotationLayer: AnnotationLayerState): Annotation {
    const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
    if (point === undefined) return oldAnnotation;
    return {...oldAnnotation, pointB: point};
  }
}

export class PlaceBoundingBoxTool extends PlaceTwoCornerAnnotationTool {
  get description() {
    return `annotate bounding box`;
  }

  toJSON() {
    return ANNOTATE_BOUNDING_BOX_TOOL_ID;
  }
}
PlaceBoundingBoxTool.prototype.annotationType = AnnotationType.AXIS_ALIGNED_BOUNDING_BOX;

export class PlaceLineTool extends PlaceTwoCornerAnnotationTool {
  get description() {
    return `annotate line`;
  }

  private initialRelationships: Uint64[][]|undefined;

  getInitialAnnotation(mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState):
      Annotation {
    const result = super.getInitialAnnotation(mouseState, annotationLayer);
    this.initialRelationships = result.relatedSegments =
        getSelectedAssociatedSegments(annotationLayer);
    return result;
  }

  getUpdatedAnnotation(
      oldAnnotation: Line|AxisAlignedBoundingBox, mouseState: MouseSelectionState,
      annotationLayer: AnnotationLayerState) {
    const result = super.getUpdatedAnnotation(oldAnnotation, mouseState, annotationLayer);
    const initialRelationships = this.initialRelationships;
    const newRelationships = getSelectedAssociatedSegments(annotationLayer);
    if (initialRelationships === undefined) {
      result.relatedSegments = newRelationships;
    } else {
      result.relatedSegments = Array.from(newRelationships, (newSegments, i) => {
        const initialSegments = initialRelationships[i];
        newSegments =
            newSegments.filter(x => initialSegments.findIndex(y => Uint64.equal(x, y)) === -1);
        return [...initialSegments, ...newSegments];
      });
    }
    return result;
  }

  toJSON() {
    return ANNOTATE_LINE_TOOL_ID;
  }
}
PlaceLineTool.prototype.annotationType = AnnotationType.LINE;

class PlaceEllipsoidTool extends TwoStepAnnotationTool {
  getInitialAnnotation(mouseState: MouseSelectionState, annotationLayer: AnnotationLayerState):
      Annotation {
    const point = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
    const {annotationColorPicker} = this;
    return <Ellipsoid>{
      type: AnnotationType.ELLIPSOID,
      id: '',
      description: '',
      segments: getSelectedAssociatedSegments(annotationLayer),
      center: point,
      radii: vec3.fromValues(0, 0, 0),
      properties: annotationLayer.source.properties.map(x => {
        if (x.identifier !== 'color') return x.default;
        if (x.identifier === 'color' && annotationColorPicker === undefined) return x.default;
        const colorInNum = packColor(parseRGBColorSpecification(annotationColorPicker!.getColor()));
        return colorInNum;
      }),
    };
  }

  getUpdatedAnnotation(
      oldAnnotation: Ellipsoid, mouseState: MouseSelectionState,
      annotationLayer: AnnotationLayerState) {
    const radii = getMousePositionInAnnotationCoordinates(mouseState, annotationLayer);
    if (radii === undefined) return oldAnnotation;
    const center = oldAnnotation.center;
    const rank = center.length;
    for (let i = 0; i < rank; ++i) {
      radii[i] = Math.abs(center[i] - radii[i]);
    }
    return <Ellipsoid>{
      ...oldAnnotation,
      radii,
    };
  }
  get description() {
    return `annotate ellipsoid`;
  }

  toJSON() {
    return ANNOTATE_ELLIPSOID_TOOL_ID;
  }
}

registerLegacyTool(
    ANNOTATE_POINT_TOOL_ID,
    (layer, options) => new PlacePointTool(<UserLayerWithAnnotations>layer, options));
registerLegacyTool(
    ANNOTATE_BOUNDING_BOX_TOOL_ID,
    (layer, options) => new PlaceBoundingBoxTool(<UserLayerWithAnnotations>layer, options));
registerLegacyTool(
    ANNOTATE_LINE_TOOL_ID,
    (layer, options) => new PlaceLineTool(<UserLayerWithAnnotations>layer, options));
registerLegacyTool(
    ANNOTATE_ELLIPSOID_TOOL_ID,
    (layer, options) => new PlaceEllipsoidTool(<UserLayerWithAnnotations>layer, options));
registerLegacyTool(
    ANNOTATE_POLYGON_TOOL_ID,
    //@ts-ignore
    (layer, options) => undefined);
registerLegacyTool(
    ANNOTATE_VOLUME_TOOL_ID,
    //@ts-ignore
    (layer, options) => undefined);
registerLegacyTool(
    ANNOTATE_CELL_TOOL_ID,
    //@ts-ignore
    (layer, options) => undefined);
registerLegacyTool(
    ANNOTATE_COM_TOOL_ID,
    //@ts-ignore
    (layer, options) => undefined);

const newRelatedSegmentKeyMap = EventActionMap.fromObject({
  'enter': {action: 'commit'},
  'escape': {action: 'cancel'},
});

function makeRelatedSegmentList(
    listName: string, segments: Uint64[],
    segmentationDisplayState: WatchableValueInterface<SegmentationDisplayState|null|undefined>,
    mutate?: ((newSegments: Uint64[]) => void)|undefined) {
  return new DependentViewWidget(
      segmentationDisplayState, (segmentationDisplayState, parent, context) => {
        const listElement = document.createElement('div');
        listElement.classList.add('neuroglancer-related-segment-list');
        if (segmentationDisplayState != null) {
          context.registerDisposer(bindSegmentListWidth(segmentationDisplayState, listElement));
        }
        const headerRow = document.createElement('div');
        headerRow.classList.add('neuroglancer-related-segment-list-header');
        const copyButton = makeCopyButton({
          title: `Copy segment IDs`,
          onClick: () => {
            setClipboard(segments.map(x => x.toString()).join(', '));
          },
        });
        headerRow.appendChild(copyButton);
        let headerCheckbox: HTMLInputElement|undefined;
        if (segmentationDisplayState != null) {
          headerCheckbox = document.createElement('input');
          headerCheckbox.type = 'checkbox';
          headerCheckbox.addEventListener('change', () => {
            const {visibleSegments} = segmentationDisplayState.segmentationGroupState.value;
            const add = segments.some(id => !visibleSegments.has(id));
            for (const id of segments) {
              visibleSegments.set(id, add);
            }
          });
          headerRow.appendChild(headerCheckbox);
        }
        if (mutate !== undefined) {
          const deleteButton = makeDeleteButton({
            title: 'Remove all IDs',
            onClick: () => {
              mutate([]);
            },
          });
          headerRow.appendChild(deleteButton);
        }
        const titleElement = document.createElement('span');
        titleElement.classList.add('neuroglancer-related-segment-list-title');
        titleElement.textContent = listName;
        headerRow.appendChild(titleElement);
        if (mutate !== undefined) {
          const addButton = makeAddButton({
            title: 'Add related segment ID',
            onClick: () => {
              const addContext = new RefCounted();
              const addContextDisposer = context.registerDisposer(disposableOnce(addContext));
              const newRow = document.createElement('div');
              newRow.classList.add('neuroglancer-segment-list-entry');
              newRow.classList.add('neuroglancer-segment-list-entry-new');
              const copyButton = makeCopyButton({});
              copyButton.classList.add('neuroglancer-segment-list-entry-copy');
              newRow.appendChild(copyButton);
              if (segmentationDisplayState != null) {
                const checkbox = document.createElement('input');
                checkbox.classList.add('neuroglancer-segment-list-entry-visible-checkbox');
                checkbox.type = 'checkbox';
                newRow.appendChild(checkbox);
              }
              const deleteButton = makeDeleteButton({
                title: 'Cancel adding new segment ID',
                onClick: () => {
                  addContextDisposer();
                },
              });
              deleteButton.classList.add('neuroglancer-segment-list-entry-delete');
              newRow.appendChild(deleteButton);
              const idElement = document.createElement('input');
              idElement.autocomplete = 'off';
              idElement.spellcheck = false;
              idElement.classList.add('neuroglancer-segment-list-entry-id');
              const keyboardEventBinder = addContext.registerDisposer(
                  new KeyboardEventBinder(idElement, newRelatedSegmentKeyMap));
              keyboardEventBinder.allShortcutsAreGlobal = true;
              const validateInput = () => {
                const id = new Uint64();
                if (id.tryParseString(idElement.value)) {
                  idElement.dataset.valid = 'true';
                  return id;
                } else {
                  idElement.dataset.valid = 'false';
                  return undefined;
                }
              };
              validateInput();
              idElement.addEventListener('input', () => {
                validateInput();
              });
              idElement.addEventListener('blur', () => {
                const id = validateInput();
                if (id !== undefined) {
                  mutate([...segments, id]);
                }
                addContextDisposer();
              });
              registerActionListener(idElement, 'cancel', addContextDisposer);
              registerActionListener(idElement, 'commit', () => {
                const id = validateInput();
                if (id !== undefined) {
                  mutate([...segments, id]);
                }
                addContextDisposer();
              });
              newRow.appendChild(idElement);
              listElement.appendChild(newRow);
              idElement.focus();
              addContext.registerDisposer(() => {
                idElement.value = '';
                newRow.remove();
              });
            },
          });
          headerRow.appendChild(addButton);
        }

        listElement.appendChild(headerRow);

        const rows: HTMLElement[] = [];
        const segmentWidgetFactory = SegmentWidgetFactory.make(
            segmentationDisplayState ?? undefined, /*includeMapped=*/ false);
        for (const id of segments) {
          const row = segmentWidgetFactory.get(id);
          rows.push(row);
          if (mutate !== undefined) {
            const deleteButton = makeDeleteButton({
              title: 'Remove ID',
              onClick: event => {
                mutate(segments.filter(x => !Uint64.equal(x, id)));
                event.stopPropagation();
              },
            });
            deleteButton.classList.add('neuroglancer-segment-list-entry-delete');
            row.children[0].appendChild(deleteButton);
          }
          listElement.appendChild(row);
        }
        if (segmentationDisplayState != null) {
          const updateSegments = context.registerCancellable(animationFrameDebounce(() => {
            const {visibleSegments} = segmentationDisplayState.segmentationGroupState.value;
            let numVisible = 0;
            for (const id of segments) {
              if (visibleSegments.has(id)) {
                ++numVisible;
              }
            }
            for (const row of rows) {
              segmentWidgetFactory.update(row);
            }
            headerCheckbox!.checked = numVisible === segments.length && numVisible > 0;
            headerCheckbox!.indeterminate = (numVisible > 0) && (numVisible < segments.length);
          }));
          updateSegments();
          updateSegments.flush();
          registerCallbackWhenSegmentationDisplayStateChanged(
              segmentationDisplayState, context, updateSegments);
          context.registerDisposer(
              segmentationDisplayState.segmentationGroupState.changed.add(updateSegments));
        }
        parent.appendChild(listElement);
      });
}

const ANNOTATION_COLOR_JSON_KEY = 'annotationColor';
export function UserLayerWithAnnotationsMixin<TBase extends {new (...args: any[]): UserLayer}>(
    Base: TBase) {
  abstract class C extends Base implements UserLayerWithAnnotations {
    annotationStates = this.registerDisposer(new MergedAnnotationStates());
    annotationDisplayState = new AnnotationDisplayState();
    annotationCrossSectionRenderScaleHistogram = new RenderScaleHistogram();
    annotationCrossSectionRenderScaleTarget = trackableRenderScaleTarget(8);
    annotationProjectionRenderScaleHistogram = new RenderScaleHistogram();
    annotationProjectionRenderScaleTarget = trackableRenderScaleTarget(8);
    annotationColorPicker : AnnotationColorWidget|undefined = undefined;

    constructor(...args: any[]) {
      super(...args);
      this.annotationDisplayState.color.changed.add(this.specificationChanged.dispatch);
      this.annotationDisplayState.shader.changed.add(this.specificationChanged.dispatch);
      this.annotationDisplayState.shaderControls.changed.add(this.specificationChanged.dispatch);
      this.tabs.add(
          'annotations', {label: 'Annotations', order: 10, getter: () => new AnnotationTab(this)});

      let annotationStateReadyBinding: (() => void)|undefined;

      const updateReadyBinding = () => {
        const isReady = this.isReady;
        if (isReady && annotationStateReadyBinding !== undefined) {
          annotationStateReadyBinding();
          annotationStateReadyBinding = undefined;
        } else if (!isReady && annotationStateReadyBinding === undefined) {
          annotationStateReadyBinding = this.annotationStates.markLoading();
        }
      };
      this.readyStateChanged.add(updateReadyBinding);
      updateReadyBinding();

      const {mouseState} = this.manager.layerSelectedValues;
      this.registerDisposer(mouseState.changed.add(() => {
        if (mouseState.active) {
          const {pickedAnnotationLayer} = mouseState;
          if (pickedAnnotationLayer !== undefined &&
              this.annotationStates.states.includes(pickedAnnotationLayer)) {
            const existingValue = this.annotationDisplayState.hoverState.value;
            const reference = pickedAnnotationLayer.source.getNonDummyAnnotationReference(mouseState.pickedAnnotationId!);
            if (reference.value === null) return;
            const annotationId = reference.value!.id;
            if (existingValue === undefined || existingValue.id !== annotationId
                || existingValue.partIndex !== mouseState.pickedOffset ||
                existingValue.annotationLayerState !== pickedAnnotationLayer) {
              this.annotationDisplayState.hoverState.value = {
                id: annotationId,
                partIndex: mouseState.pickedOffset,
                annotationLayerState: pickedAnnotationLayer,
              };
            }
            reference.dispose();
            return;
          }
        }
        this.annotationDisplayState.hoverState.value = undefined;
      }));
    }
    /**
     * Sets the annotation picker color based on the annotation property value.
     */
    setAnnotationColorPicker() {
      for (const state of this.annotationStates.states) {
        if (!state.source.readonly) {
          const colorProperties = state.source.properties.filter(x => x.identifier === 'color');
          if (colorProperties.length === 0) continue;
          const defaultColor = serializeColor(unpackRGB(colorProperties[0].default));
          this.annotationColorPicker = this.registerDisposer(new AnnotationColorWidget());
          this.annotationColorPicker.element.title = 'Pick color to draw annotation';
          this.annotationColorPicker.setColor(defaultColor);
          break;
        }
      }
    }

    initializeAnnotationLayerViewTab(tab: AnnotationLayerView) {
      tab;
    }

    restoreState(specification: any) {
      super.restoreState(specification);
      this.annotationDisplayState.color.restoreState(specification[ANNOTATION_COLOR_JSON_KEY]);
    }

    captureSelectionState(state: this['selectionState'], mouseState: MouseSelectionState) {
      super.captureSelectionState(state, mouseState);
      const annotationLayer = mouseState.pickedAnnotationLayer;
      if (annotationLayer === undefined ||
          !this.annotationStates.states.includes(annotationLayer)) {
        return;
      }

      state.annotationId = mouseState.pickedAnnotationId;
      state.annotationType = mouseState.pickedAnnotationType;
      state.annotationSerialized = new Uint8Array(
          mouseState.pickedAnnotationBuffer!, mouseState.pickedAnnotationBufferOffset!);
      state.annotationPartIndex = mouseState.pickedOffset;
      state.annotationSourceIndex = annotationLayer.sourceIndex;
      state.annotationSubsource = annotationLayer.subsourceId;
    }

    async addText(parent: HTMLElement, select:HTMLSelectElement,annotationLayer:AnnotationLayerState,
      //@ts-ignore
      reference:AnnotationReference,annotation:Annotation) {
      var idx = select.selectedIndex; 
      var text = select.options[idx].value
      const text_element = document.createElement('textarea');
      text_element.disabled = true;
      text_element.value = text;
      text_element.rows = 3;
      text_element.className = 'neuroglancer-annotation-details-description';
      text_element.placeholder = 'Description';
      const description = text ? text : undefined;
      annotationLayer.source.updateDescription(reference, description);
      annotationLayer.source.commit(reference);
      const n_child = parent.children.length
      var text_childi:number = -1
      for (let childi = 0; childi < n_child; childi++){
        if (parent.children[childi].className == 'neuroglancer-annotation-details-description'){
          text_childi = childi;
        }
      }
      if (!(text_childi == -1)){
        parent.children[text_childi].replaceWith(text_element) 
      }
    }
    /**
     * Adds the category text to the annotation on selecting a new category.
     * @param parent parent HTML Element
     * @param select select dropdown
     * @param annotationLayer annotation layer in which annotation is present
     * @param reference annotation reference
     * @param annotation annotation value
     * @returns void
     */
    async addCategoryText(parent: HTMLElement, select:HTMLSelectElement,annotationLayer:AnnotationLayerState,
      reference:AnnotationReference,annotation:Annotation) {
      if (annotation.type !== AnnotationType.CELL) return;
      var idx = select.selectedIndex; 
      var text = select.options[idx].value
      const text_element = document.createElement('textarea');
      text_element.disabled = true;
      text_element.value = text;
      text_element.rows = 3;
      text_element.className = 'neuroglancer-annotation-details-description';
      text_element.placeholder = 'Description';
      const description = text ? text : undefined;
      annotationLayer.source.update(reference, {...annotation, category: description});
      annotationLayer.source.commit(reference);
      const n_child = parent.children.length
      var text_childi:number = -1
      for (let childi = 0; childi < n_child; childi++){
        if (parent.children[childi].className == 'neuroglancer-annotation-details-description'){
          text_childi = childi;
        }
      }
      if (!(text_childi == -1)){
        parent.children[text_childi].replaceWith(text_element) 
      }
    }

    displayAnnotationState(state: this['selectionState'], parent: HTMLElement, context: RefCounted):
        boolean {
      if (state.annotationId === undefined) return false;
      const annotationLayer = this.annotationStates.states.find(
          x => x.sourceIndex === state.annotationSourceIndex &&
              (state.annotationSubsource === undefined ||
               x.subsourceId === state.annotationSubsource));
      if (annotationLayer === undefined) return false;
      const reference =
          context.registerDisposer(annotationLayer.source.getNonDummyAnnotationReference(state.annotationId));
      parent.appendChild(
          context.registerDisposer(new DependentViewWidget(
                  context.registerDisposer(
                      new AggregateWatchableValue(() => ({
                                                    annotation: reference,
                                                    chunkTransform: annotationLayer.chunkTransform
                                                  }))),
                  ({annotation, chunkTransform}, parent, context) => {
                    let statusText: string|undefined;
                    if (annotation == null) {
                      if (state.annotationType !== undefined &&
                          state.annotationSerialized !== undefined) {
                        const handler = annotationTypeHandlers[state.annotationType];
                        const rank = annotationLayer.source.rank;
                        const baseNumBytes = handler.serializedBytes(rank);
                        const geometryOffset = state.annotationSerialized.byteOffset;
                        const propertiesOffset = geometryOffset + baseNumBytes;
                        const dataView = new DataView(state.annotationSerialized.buffer);
                        const isLittleEndian = Endianness.LITTLE === ENDIANNESS;
                        const {properties} = annotationLayer.source;
                        const annotationPropertySerializer =
                            new AnnotationPropertySerializer(rank, properties);

                        annotation = handler.deserialize(
                            dataView, geometryOffset, isLittleEndian, rank, state.annotationId!);
                        annotationPropertySerializer.deserialize(
                            dataView, propertiesOffset, isLittleEndian,
                            annotation.properties = new Array(properties.length));
                        if (annotationLayer.source.hasNonSerializedProperties()) {
                          statusText = 'Loading...';
                        }
                      } else {
                        statusText = (annotation === null) ? 'Annotation not found' : 'Loading...';
                      }
                    }
                    if (annotation != null) {
                      const layerRank =
                          chunkTransform.error === undefined ? chunkTransform.layerRank : 0;
                      const positionGrid = document.createElement('div');
                      positionGrid.classList.add(
                          'neuroglancer-selected-annotation-details-position-grid');
                      positionGrid.style.gridTemplateColumns = `[icon] 0fr [copy] 0fr repeat(${
                          layerRank}, [dim] 0fr [coord] 0fr) [move] 0fr [delete] 0fr`;
                      parent.appendChild(positionGrid);

                      const handler = annotationTypeHandlers[annotation.type];
                      const icon = document.createElement('div');
                      icon.className = 'neuroglancer-selected-annotation-details-icon';
                      icon.textContent = handler.icon;
                      positionGrid.appendChild(icon);

                      if (layerRank !== 0) {
                        const {layerDimensionNames} =
                            (chunkTransform as ChunkTransformParameters).modelTransform;
                        for (let i = 0; i < layerRank; ++i) {
                          const dimElement = document.createElement('div');
                          dimElement.classList.add(
                              'neuroglancer-selected-annotation-details-position-dim');
                          dimElement.textContent = layerDimensionNames[i];
                          dimElement.style.gridColumn = `dim ${i + 1}`;
                          positionGrid.appendChild(dimElement);
                        }
                        visitTransformedAnnotationGeometry(
                            annotation, chunkTransform as ChunkTransformParameters,
                            (layerPosition, isVector) => {
                              const copyButton = makeCopyButton({
                                title: 'Copy position',
                                onClick: () => {
                                  setClipboard(layerPosition.map(x => Math.floor(x)).join(', '));
                                },
                              });
                              copyButton.style.gridColumn = 'copy';
                              positionGrid.appendChild(copyButton);
                              for (let layerDim = 0; layerDim < layerRank; ++layerDim) {
                                const coordElement = document.createElement('div');
                                coordElement.classList.add(
                                    'neuroglancer-selected-annotation-details-position-coord');
                                coordElement.style.gridColumn = `coord ${layerDim + 1}`;
                                coordElement.textContent =
                                    Math.floor(layerPosition[layerDim]).toString();
                                positionGrid.appendChild(coordElement);
                              }
                              if (!isVector) {
                                const moveButton = makeMoveToButton({
                                  title: 'Move to position',
                                  onClick: () => {
                                    setLayerPosition(this, chunkTransform, layerPosition);
                                  },
                                });
                                moveButton.style.gridColumn = 'move';
                                positionGrid.appendChild(moveButton);
                              }
                            });
                      }

                      // if (!isDummyAnnotation(annotation)) {
                      //   const visibilityButton = makeVisibilityButton(annotation.id, annotationLayer);
                      //   visibilityButton.style.gridColumn = 'move';
                      //   positionGrid.appendChild(visibilityButton);
                      // }

                      if (!annotationLayer.source.readonly) {
                        const button = makeDeleteButton({
                          title: 'Delete annotation',
                          onClick: () => {
                            annotationLayer.source.delete(reference);
                          }
                        });
                        button.classList.add('neuroglancer-selected-annotation-details-delete');
                        positionGrid.appendChild(button);
                      }

                      const {relationships, properties} = annotationLayer.source;
                      const sourceReadonly = annotationLayer.source.readonly;

                      for (let i = 0, count = properties.length; i < count; ++i) {
                        const property = properties[i];
                        if (property.identifier === 'visibility') continue;
                        const label = document.createElement('label');
                        label.classList.add('neuroglancer-annotation-property');
                        const idElement = document.createElement('span');
                        idElement.classList.add('neuroglancer-annotation-property-label');
                        idElement.textContent = property.identifier;
                        label.appendChild(idElement);
                        const {description} = property;
                        if (description !== undefined) {
                          label.title = description;
                        }
                        let valueElement: HTMLSpanElement;
                        let colorElement : HTMLInputElement;
                        const value = annotation.properties[i];
                        valueElement = document.createElement('span');
                        colorElement = document.createElement('input');
                        colorElement.type = 'color';
                        valueElement.classList.add('neuroglancer-annotation-property-value');
                        switch (property.type) {
                          case 'rgb': {
                            const colorVec = unpackRGB(value);
                            const hex = serializeColor(colorVec);
                            if (reference.value && reference.value.parentAnnotationId) {
                              colorElement.disabled = true;
                            };                          colorElement.value = hex;
                            colorElement.style.backgroundColor =
                                useWhiteBackground(colorVec) ? 'white' : 'black';
                            colorElement.addEventListener('change', () => {
                              const colorInNum = packColor(parseRGBColorSpecification(colorElement.value));
                              annotationLayer.source.updateColor(reference, colorInNum);
                            });
                            label.appendChild(colorElement);
                            break;
                          }
                          case 'rgba': {
                            const colorVec = unpackRGB(value);
                            valueElement.textContent = serializeColor(unpackRGBA(value));
                            valueElement.style.backgroundColor = serializeColor(unpackRGB(value));
                            valueElement.style.color =
                                useWhiteBackground(colorVec) ? 'white' : 'black';
                            label.appendChild(valueElement);
                            break;
                          }
                          default:
                            valueElement.textContent = formatNumericProperty(property, value);
                            label.appendChild(valueElement);
                            break;
                        }
                        parent.appendChild(label);
                      }

                      const {relatedSegments} = annotation;
                      for (let i = 0, count = relationships.length; i < count; ++i) {
                        const related = relatedSegments === undefined ? [] : relatedSegments[i];
                        if (related.length === 0 && sourceReadonly) continue;
                        const relationshipIndex = i;
                        const relationship = relationships[i];
                        parent.appendChild(
                            context
                                .registerDisposer(makeRelatedSegmentList(
                                    relationship, related,
                                    annotationLayer.displayState.relationshipStates
                                        .get(relationship)
                                        .segmentationState,
                                    sourceReadonly ?
                                        undefined :
                                        newIds => {
                                          const annotation = reference.value;
                                          if (annotation == null) {
                                            return;
                                          }
                                          let {relatedSegments} = annotation;
                                          if (relatedSegments === undefined) {
                                            relatedSegments =
                                                annotationLayer.source.relationships.map(() => []);
                                          } else {
                                            relatedSegments = relatedSegments.slice();
                                          }
                                          relatedSegments[relationshipIndex] = newIds;
                                          const newAnnotation = {...annotation, relatedSegments};
                                          annotationLayer.source.update(reference, newAnnotation);
                                          annotationLayer.source.commit(reference);
                                        }))
                                .element);
                      }

                      if (!annotationLayer.source.readonly || annotation.description) {
                        if (annotationLayer.source.readonly) {
                          const description = document.createElement('div');
                          description.className = 'neuroglancer-annotation-details-description';
                          description.textContent = annotation.description || '';
                          parent.appendChild(description);
                          if (annotation.type === AnnotationType.CELL) {
                            const category = document.createElement('div');
                            category.className = 'neuroglancer-annotation-details-description';
                            category.textContent = annotation.category || '';
                            parent.appendChild(category);
                          }
                        } else {
                          const description = document.createElement('textarea');
                          description.disabled = true;
                          description.value = annotation.description || '';
                          description.rows = 3;
                          description.className = 'neuroglancer-annotation-details-description';
                          description.placeholder = 'Description';
                          description.addEventListener('change', () => {
                            const x = description.value;
                            const descString = x ? x : undefined
                            annotationLayer.source.updateDescription(reference, descString);
                            annotationLayer.source.commit(reference);
                          });
                          parent.appendChild(description);
                          var dropdownElement :HTMLElement = document.createElement('div')
                          const landmarkDropdown = document.createElement('select');
                          landmarkDropdown.classList.add('neuroglancer-landmarks-dropdown');
                          const defaultOption = document.createElement('option');
                          defaultOption.text = (annotation.type !== AnnotationType.CELL)? 'Select landmark' : 'Select label';
                          defaultOption.value = '';
                          defaultOption.disabled = true;
                          defaultOption.selected = true;
                          landmarkDropdown.add(defaultOption);
                          landmarkDropdown.addEventListener('change', () => {
                            if (annotation !== null && annotation !== undefined) {
                              this.addText(parent,landmarkDropdown,annotationLayer,reference,annotation)
                            }
                          });
                          getLandmarkList(annotation.type).then(function(result) {
                            const n_landmark = result.length
                            for (let i = 0; i < n_landmark; i++){
                              const landmarki = result[i];
                              const option = document.createElement('option');
                              option.value = landmarki; 
                              option.text = landmarki;
                              landmarkDropdown.add(option)}
                            dropdownElement.classList.add('neuroglancer-landmarks-dropdown-tool');
                            dropdownElement.appendChild(landmarkDropdown);
                            })
                          parent.appendChild(dropdownElement)
                          if (annotation.type === AnnotationType.CELL) {
                            const category = document.createElement('textarea');
                            category.disabled = true;
                            category.value = annotation.category || '';
                            category.rows = 3;
                            category.className = 'neuroglancer-annotation-details-description';
                            category.placeholder = 'Category';
                            category.addEventListener('change', () => {
                              const x = category.value;
                              const descString = x ? x : undefined
                              if (annotation !== null && annotation !== undefined) {
                                annotationLayer.source.update(reference, <Annotation>{...annotation, category: descString});
                                annotationLayer.source.commit(reference);
                              }
                            });
                            parent.appendChild(category);
                            var dropDownCategoryElement :HTMLElement = document.createElement('div')
                            const categoryDropdown = document.createElement('select');
                            categoryDropdown.classList.add('neuroglancer-landmarks-dropdown');
                            const defaultOption = document.createElement('option');
                            defaultOption.text = 'Select cell type';
                            defaultOption.value = '';
                            defaultOption.disabled = true;
                            defaultOption.selected = true;
                            categoryDropdown.add(defaultOption);
                            categoryDropdown.addEventListener('change', () => {
                              if (annotation !== null && annotation !== undefined) {
                                this.addCategoryText(parent,categoryDropdown,annotationLayer,reference,annotation);
                              }
                            });
                            getCategoryList().then(function(result) {
                              const n_landmark = result.length
                              for (let i = 0; i < n_landmark; i++){
                                const landmarki = result[i];
                                const option = document.createElement('option');
                                option.value = landmarki; 
                                option.text = landmarki;
                                categoryDropdown.add(option)}
                                dropDownCategoryElement.classList.add('neuroglancer-landmarks-dropdown-tool');
                                dropDownCategoryElement.appendChild(categoryDropdown);
                              })
                            parent.appendChild(dropDownCategoryElement)
                          }
                        }
                      }
                    }
                    if (statusText !== undefined) {
                      const statusMessage = document.createElement('div');
                      statusMessage.classList.add('neuroglancer-selection-annotation-status');
                      statusMessage.textContent = statusText;
                      parent.appendChild(statusMessage);
                    }
                  }))
              .element);
      return true;
    }


    displaySelectionState(
        state: this['selectionState'], parent: HTMLElement,
        context: DependentViewContext): boolean {
      let displayed = this.displayAnnotationState(state, parent, context);
      if (super.displaySelectionState(state, parent, context)) displayed = true;
      return displayed;
    }

    addLocalAnnotations(
        loadedSubsource: LoadedDataSubsource, source: AnnotationSource, role: RenderLayerRole) {
      const {subsourceEntry} = loadedSubsource;
      const state = new AnnotationLayerState({
        localPosition: this.localPosition,
        transform: loadedSubsource.getRenderLayerTransform(),
        source,
        displayState: this.annotationDisplayState,
        dataSource: loadedSubsource.loadedDataSource.layerDataSource,
        subsourceIndex: loadedSubsource.subsourceIndex,
        subsourceId: subsourceEntry.id,
        role,
      });
      this.addAnnotationLayerState(state, loadedSubsource);
    }

    addStaticAnnotations(loadedSubsource: LoadedDataSubsource) {
      const {subsourceEntry} = loadedSubsource;
      const {staticAnnotations} = subsourceEntry.subsource;
      if (staticAnnotations === undefined) return false;
      loadedSubsource.activate(() => {
        this.addLocalAnnotations(
            loadedSubsource, staticAnnotations, RenderLayerRole.DEFAULT_ANNOTATION);
      });
      return true;
    }

    addAnnotationLayerState(state: AnnotationLayerState, loadedSubsource: LoadedDataSubsource) {
      const refCounted = loadedSubsource.activated!;
      refCounted.registerDisposer(this.annotationStates.add(state));
      const annotationLayer = new AnnotationLayer(this.manager.chunkManager, state.addRef());
      if (annotationLayer.source instanceof MultiscaleAnnotationSource) {
        const crossSectionRenderLayer = new SpatiallyIndexedSliceViewAnnotationLayer({
          annotationLayer: annotationLayer.addRef(),
          renderScaleTarget: this.annotationCrossSectionRenderScaleTarget,
          renderScaleHistogram: this.annotationCrossSectionRenderScaleHistogram
        });
        refCounted.registerDisposer(
            loadedSubsource.messages.addChild(crossSectionRenderLayer.messages));

        const projectionRenderLayer = new SpatiallyIndexedPerspectiveViewAnnotationLayer({
          annotationLayer: annotationLayer.addRef(),
          renderScaleTarget: this.annotationProjectionRenderScaleTarget,
          renderScaleHistogram: this.annotationProjectionRenderScaleHistogram
        });
        refCounted.registerDisposer(
            loadedSubsource.messages.addChild(projectionRenderLayer.messages));

        refCounted.registerDisposer(registerNested((context, value) => {
          if (value) {
            context.registerDisposer(this.addRenderLayer(crossSectionRenderLayer.addRef()));
            context.registerDisposer(this.addRenderLayer(projectionRenderLayer.addRef()));
          }
        }, this.annotationDisplayState.displayUnfiltered));
      }
      {
        const renderLayer = new SliceViewAnnotationLayer(
            annotationLayer, this.annotationCrossSectionRenderScaleHistogram);
        refCounted.registerDisposer(this.addRenderLayer(renderLayer));
        refCounted.registerDisposer(loadedSubsource.messages.addChild(renderLayer.messages));
      }
      {
        const renderLayer = new PerspectiveViewAnnotationLayer(
            annotationLayer.addRef(), this.annotationProjectionRenderScaleHistogram);
        refCounted.registerDisposer(this.addRenderLayer(renderLayer));
        refCounted.registerDisposer(loadedSubsource.messages.addChild(renderLayer.messages));
      }
      
      //@ts-ignore
      const viewer = <Viewer>window['viewer'];
      const annotationSavedState = viewer.annotationsSavedState;
      state.source.registerDisposer(state.source.changed.add(() => {
        annotationSavedState.value = false;
      }));
    }

    selectAnnotation(
        annotationLayer: Borrowed<AnnotationLayerState>, id: string, pin: boolean|'toggle') {
      this.manager.root.selectionState.captureSingleLayerState(this, state => {
        state.annotationId = id;
        state.annotationSourceIndex = annotationLayer.sourceIndex;
        state.annotationSubsource = annotationLayer.subsourceId;
        return true;
      }, pin);
    }

    toJSON() {
      const x = super.toJSON();
      x[ANNOTATION_COLOR_JSON_KEY] = this.annotationDisplayState.color.toJSON();
      return x;
    }
  }
  return C;
}

export type UserLayerWithAnnotations =
    InstanceType<ReturnType<typeof UserLayerWithAnnotationsMixin>>;
//@ts-ignore
function formatNumericProperty(property: Readonly<import("neuroglancer/annotation").AnnotationNumericPropertySpec> | Readonly<import("neuroglancer/annotation").AnnotationNumericPropertySpec>, value: any): string | null {
  throw new Error('Function not implemented.');
}

