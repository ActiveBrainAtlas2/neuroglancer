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
 * @file Support for rendering polygon annotations.
 */

 import { vec3 } from 'gl-matrix';
 import {AnnotationReference, AnnotationType, Line, Polygon} from 'neuroglancer/annotation';
 import {AnnotationRenderContext, AnnotationRenderHelper, getAnnotationTypeRenderHandler, registerAnnotationTypeRenderHandler} from 'neuroglancer/annotation/type_handler';
 import { DisplayPose, NavigationState } from '../navigation_state';
 import { Viewer } from '../viewer';
 import { AnnotationLayerState } from './annotation_layer_state';
 
 class RenderHelper extends AnnotationRenderHelper {

  draw(context: AnnotationRenderContext) {
    context;
  }
 }
 
 registerAnnotationTypeRenderHandler<Polygon>(AnnotationType.POLYGON, {
   sliceViewRenderHelper: RenderHelper,
   perspectiveViewRenderHelper: RenderHelper,
   defineShaderNoOpSetters(builder) {
     builder;
   },
   pickIdsPerInstance: 1,
   snapPosition(position, data, offset) {
     position.set(new Float32Array(data, offset, position.length));
   },
   getRepresentativePoint(out, ann) {
     out.set(ann.source);
   },
   updateViaRepresentativePoint(oldAnnotation, position) {
     return {...oldAnnotation, source: new Float32Array(position)};
   }
 });

export function cloneAnnotationSequence(navigationState: NavigationState, annotationLayer: AnnotationLayerState, 
  annotationId: string, startOffset: number, polygonCnt: number, stepSize: number): void {
  const reference = annotationLayer.source.getTopMostParentReference(annotationId);
  if(reference.value?.type !== AnnotationType.POLYGON) return;
  for (let depth = startOffset, cnt = 0; cnt < polygonCnt; depth += stepSize, cnt++) {
    cloneAnnotation(navigationState, annotationLayer, reference, depth);
  }
  reference.dispose();
}

function cloneAnnotation(navigationState: NavigationState, annotationLayer: AnnotationLayerState, 
  reference: AnnotationReference, depth: number): boolean {
  const childAnnotationRefs : AnnotationReference[] = [];
  const ann = <Polygon>reference.value;
  ann.childAnnotationIds.forEach((childAnnotationId) => {
    childAnnotationRefs.push(annotationLayer.source.getReference(childAnnotationId));
  });
  const {pose} = navigationState;
  const translation = vec3.create();
  translation[0] = 0;
  translation[1] = 0;
  translation[2] = depth;

  const cloneSource = getTransformedPoint(pose, ann.source, translation);
  if (cloneSource === undefined) return false;

  const cloneAnnRef = annotationLayer.source.add(<Polygon>{
    id: '',
    type: AnnotationType.POLYGON,
    description: '',
    source: cloneSource,
    properties: annotationLayer.source.properties.map(x => x.default),
    childAnnotationIds: [],
  }, false);

  const disposeAnnotation = () : boolean => {
    annotationLayer.source.delete(cloneAnnRef);
    cloneAnnRef.dispose();
    return false;
  };

  const success = () : boolean => {
    annotationLayer.source.commit(cloneAnnRef);
    cloneAnnRef.dispose();
    return true;
  };

  childAnnotationRefs.forEach((childAnnotationRef) => {
    const pointAnn = <Line>childAnnotationRef.value;
    const pointA = getTransformedPoint(pose, pointAnn.pointA, translation);
    const pointB = getTransformedPoint(pose, pointAnn.pointB, translation);
    if (pointA === undefined || pointB === undefined) {
      return disposeAnnotation();
    }

    const cloneLineRef = annotationLayer.source.add(<Line>{
      id: '',
      type: AnnotationType.LINE,
      description: '',
      pointA: pointA,
      pointB: pointB,
      properties: annotationLayer.source.properties.map(x => x.default),
    }, true, cloneAnnRef);
    cloneLineRef.dispose();
  });

  return success();
}

function getTransformedPoint(pose: DisplayPose, source: Float32Array, translation: vec3, round: boolean = false): Float32Array | undefined {
  if (!pose.valid) {
    return undefined;
  }
  const orientation = pose.orientation.orientation;
  const temp = vec3.transformQuat(vec3.create(), translation, orientation);
  const {position} = pose;
  const {displayDimensionIndices, displayRank} = pose.displayDimensions.value;
  const {bounds: {lowerBounds, upperBounds}} = position.coordinateSpace.value;
  const transformedPoint = new Float32Array(displayRank);
  for (let i = 0; i < displayRank; ++i) {
    const dim = displayDimensionIndices[i];
    const adjustment = temp[i];
    let newValue = source[dim] + adjustment;
    if (adjustment > 0) {
      const bound = upperBounds[dim];
      if (Number.isFinite(bound)) {
        newValue = Math.min(newValue, Math.ceil(bound - 1));
      }
    } else {
      const bound = lowerBounds[dim];
      if (Number.isFinite(bound)) {
        newValue = Math.max(newValue, Math.floor(bound));
      }
    }
    if (round) newValue = Math.floor(newValue) + 0.5;
    transformedPoint[dim] = newValue;
  }
  return transformedPoint;
}