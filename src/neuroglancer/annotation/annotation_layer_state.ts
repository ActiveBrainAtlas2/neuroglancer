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

import {AnnotationSource} from 'neuroglancer/annotation';
import {MultiscaleAnnotationSource} from 'neuroglancer/annotation/frontend_source';
import {LayerDataSource} from 'neuroglancer/layer_data_source';
import {ChunkTransformParameters, getChunkTransformParameters, RenderLayerTransformOrError} from 'neuroglancer/render_coordinate_transform';
import {RenderLayerRole} from 'neuroglancer/renderlayer';
import {SegmentationDisplayState} from 'neuroglancer/segmentation_display_state/frontend';
import {TrackableBoolean} from 'neuroglancer/trackable_boolean';
import {makeCachedLazyDerivedWatchableValue, registerNested, WatchableValue, WatchableValueInterface} from 'neuroglancer/trackable_value';
import {TrackableRGB} from 'neuroglancer/util/color';
import {Owned, RefCounted} from 'neuroglancer/util/disposable';
import {makeValueOrError, ValueOrError, valueOrThrow} from 'neuroglancer/util/error';
import {vec3} from 'neuroglancer/util/geom';
import {WatchableMap} from 'neuroglancer/util/watchable_map';
import {makeTrackableFragmentMain, makeWatchableShaderError} from 'neuroglancer/webgl/dynamic_shader';
import {getFallbackBuilderState, parseShaderUiControls, ShaderControlState} from 'neuroglancer/webgl/shader_ui_controls';

export class AnnotationHoverState extends WatchableValue<
    {id: string, partIndex: number, annotationLayerState: AnnotationLayerState}|undefined> {}

// null means loading
// undefined means no attached layer
export type OptionalSegmentationDisplayState = SegmentationDisplayState|null|undefined;

export interface AnnotationRelationshipState {
  segmentationState: WatchableValueInterface<OptionalSegmentationDisplayState>;
  showMatches: TrackableBoolean;
}

export class WatchableAnnotationRelationshipStates extends
    WatchableMap<string, AnnotationRelationshipState> {
  constructor() {
    super((context, {showMatches, segmentationState}) => {
      context.registerDisposer(showMatches.changed.add(this.changed.dispatch));
      context.registerDisposer(segmentationState.changed.add(this.changed.dispatch));
      context.registerDisposer(registerNested((nestedContext, segmentationState) => {
        if (segmentationState == null) return;
        const {segmentationGroupState} = segmentationState;
        nestedContext.registerDisposer(segmentationGroupState.changed.add(this.changed.dispatch));
        nestedContext.registerDisposer(registerNested((groupContext, groupState) => {
          const {visibleSegments} = groupState;
          let wasEmpty = visibleSegments.size === 0;
          groupContext.registerDisposer(visibleSegments.changed.add(() => {
            const isEmpty = visibleSegments.size === 0;
            if (isEmpty !== wasEmpty) {
              wasEmpty = isEmpty;
              this.changed.dispatch();
            }
          }));
        }, segmentationGroupState));
      }, segmentationState));
    });
  }

  get(name: string): AnnotationRelationshipState {
    let value = super.get(name);
    if (value === undefined) {
      value = {
        segmentationState: new WatchableValue(undefined),
        showMatches: new TrackableBoolean(false)
      };
      super.set(name, value);
    }
    return value;
  }
}

/* START OF CHANGE: Point Annotation Marker Size */
const DEFAULT_FRAGMENT_MAIN = `
#uicontrol float com_vertex_size slider(min=0, max=10, default=1)
#uicontrol float com_vertex_border_width slider(min=0, max=5, default=1)
#uicontrol float com_opacity slider(min=0, max=1, default=1)
#uicontrol float cell_vertex_size slider(min=0, max=10, default=1)
#uicontrol float cell_vertex_border_width slider(min=0, max=5, default=1)
#uicontrol float cell_opacity slider(min=0, max=1, default=1)
#uicontrol float polygon_vertex_size slider(min=0, max=10, default=7)
#uicontrol float polygon_vertex_border_width slider(min=0, max=5, default=3)
#uicontrol float polygon_opacity slider(min=0, max=1, default=1)
#uicontrol float polygon_line_width slider(min=0, max=5, default=1)
void main() {
  setColor(prop_color());
  setVisibility(prop_visibility());
  setEndpointVisibility(prop_visibility());
  setComVisibility(prop_visibility());
  setCellVisibility(prop_visibility());
  setCellMarkerSize(cell_vertex_size);
  setCellMarkerBorderWidth(cell_vertex_border_width);
  setCellOpacity(cell_opacity);
  setComMarkerSize(com_vertex_size);
  setComMarkerBorderWidth(com_vertex_border_width);
  setComOpacity(com_opacity);
  setEndpointMarkerSize(polygon_vertex_size);
  setEndpointMarkerBorderWidth(polygon_vertex_border_width);
  setEndpointOpacity(polygon_opacity);
  setLineOpacity(polygon_opacity);
  setLineWidth(polygon_line_width);
}
`;
/* END OF CHANGE: Point Annotation Marker Size */

export class AnnotationDisplayState extends RefCounted {
  shader = makeTrackableFragmentMain(DEFAULT_FRAGMENT_MAIN);
  shaderControls = new ShaderControlState(this.shader);
  fallbackShaderControls =
      new WatchableValue(getFallbackBuilderState(parseShaderUiControls(DEFAULT_FRAGMENT_MAIN)));
  shaderError = makeWatchableShaderError();
  color = new TrackableRGB(vec3.fromValues(1, 1, 0));
  relationshipStates = this.registerDisposer(new WatchableAnnotationRelationshipStates());
  ignoreNullSegmentFilter = new TrackableBoolean(true);
  displayUnfiltered = makeCachedLazyDerivedWatchableValue((map, ignoreNullSegmentFilter) => {
    for (const state of map.values()) {
      if (state.showMatches.value) {
        if (!ignoreNullSegmentFilter) return false;
        const segmentationState = state.segmentationState.value;
        if (segmentationState != null) {
          if (segmentationState.segmentationGroupState.value.visibleSegments.size > 0) {
            return false;
          }
        }
      }
    }
    return true;
  }, this.relationshipStates, this.ignoreNullSegmentFilter);
  hoverState = new AnnotationHoverState(undefined);
}

export class AnnotationLayerState extends RefCounted {
  transform: WatchableValueInterface<RenderLayerTransformOrError>;
  localPosition: WatchableValueInterface<Float32Array>;
  source: Owned<AnnotationSource|MultiscaleAnnotationSource>;
  role: RenderLayerRole;
  dataSource: LayerDataSource;
  subsourceId: string;
  subsourceIndex: number;
  displayState: AnnotationDisplayState;

  readonly chunkTransform: WatchableValueInterface<ValueOrError<ChunkTransformParameters>>;

  constructor(options: {
    transform: WatchableValueInterface<RenderLayerTransformOrError>,
    localPosition: WatchableValueInterface<Float32Array>,
    source: Owned<AnnotationSource|MultiscaleAnnotationSource>,
    displayState: AnnotationDisplayState,
    dataSource: LayerDataSource,
    subsourceId: string,
    subsourceIndex: number,
    role?: RenderLayerRole,
  }) {
    super();
    const {
      transform,
      localPosition,
      source,
      role = RenderLayerRole.ANNOTATION,
    } = options;
    this.transform = transform;
    this.localPosition = localPosition;
    this.source = this.registerDisposer(source);
    this.role = role;
    this.displayState = options.displayState;
    this.chunkTransform = this.registerDisposer(makeCachedLazyDerivedWatchableValue(
        modelTransform =>
            makeValueOrError(() => getChunkTransformParameters(valueOrThrow(modelTransform))),
        this.transform));
    this.dataSource = options.dataSource;
    this.subsourceId = options.subsourceId;
    this.subsourceIndex = options.subsourceIndex;
  }

  get sourceIndex() {
    const {dataSource} = this;
    return dataSource.layer.dataSources.indexOf(dataSource);
  }
}
