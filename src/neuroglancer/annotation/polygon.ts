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

 import { quat, vec3 } from 'gl-matrix';
 import {AnnotationReference, AnnotationType, Line, Polygon} from 'neuroglancer/annotation';
 import {AnnotationRenderContext, AnnotationRenderHelper, getAnnotationTypeRenderHandler, registerAnnotationTypeRenderHandler} from 'neuroglancer/annotation/type_handler';
 import { DisplayPose, NavigationState } from '../navigation_state';
 import { Viewer } from '../viewer';
 import { AnnotationLayerState } from './annotation_layer_state';
 import { AnnotationLayer } from './renderlayer';
 
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


 function findCrossProduct(vec1: Float32Array, vec2: Float32Array) : Float32Array {
  const vec3 = new Float32Array(vec1.length);
  vec3[0] = vec1[1]*vec2[2] - vec1[2]*vec2[1];
  vec3[1] = vec1[2]*vec2[0] - vec1[0]*vec2[2];
  vec3[2] = vec1[0]*vec2[1] - vec1[1]*vec2[0];

  return vec3;
}

function findDotProduct(vec1: Float32Array, vec2: vec3): number {
  let prod = 0;
  const rank = vec1.length;
  for (let i = 0; i < rank; i++) {
    prod += vec1[i]*vec2[i];
  }

  return prod;
}

function findNormalVectorToPolygon(childRefs: AnnotationReference[], orientation: quat) : Float32Array {
  let crossProductVec = new Float32Array(3);
  if (childRefs.length < 2) { // atleast two lines to find normal
    return crossProductVec;
  }
  const line1 = <Line>childRefs[0].value;
  const line2 = <Line>childRefs[1].value;

  const rank = 3;
  const vec1 = new Float32Array(rank);
  const vec2 = new Float32Array(rank);

  for (let i = 0; i < rank; i++) {
    vec1[i] = line1.pointA[i] - line1.pointB[i];
    vec2[i] = line2.pointA[i] - line2.pointB[i];
  }

  crossProductVec = findCrossProduct(vec1, vec2);
  const translation = vec3.create();
  translation[0] = 0;
  translation[1] = 0;
  translation[2] = 1.0;
  const temp = vec3.transformQuat(vec3.create(), translation, orientation);

  if(findDotProduct(crossProductVec, temp) < 0) {
    crossProductVec[0] = -crossProductVec[0];
    crossProductVec[1] = -crossProductVec[1];
    crossProductVec[2] = -crossProductVec[2];
  }

  let mag = 0;
  for (let i = 0; i < rank; i++) {
    mag += crossProductVec[i]*crossProductVec[i];
  }
  mag = Math.sqrt(mag);

  crossProductVec[0] /= mag;
  crossProductVec[1] /= mag;
  crossProductVec[2] /= mag;

  return crossProductVec;
}

export function cloneAnnotationSequence(navigationState: NavigationState, annotationLayer: AnnotationLayerState, 
  annotationId: string, startOffset: number, polygonCnt: number, stepSize: number): void {
  const reference = annotationLayer.source.getTopMostParentReference(annotationId);
  if(reference.value === null || reference.value!.type !== AnnotationType.POLYGON) return;
  const childAnnotationRefs : AnnotationReference[] = [];
  const ann = <Polygon>reference.value;
  const {pose} = navigationState;

  ann.childAnnotationIds.forEach((childAnnotationId) => {
    childAnnotationRefs.push(annotationLayer.source.getReference(childAnnotationId));
  });
  const normalVector = findNormalVectorToPolygon(childAnnotationRefs, pose.orientation.orientation);
  for (let depth = startOffset, cnt = 0; cnt < polygonCnt; depth += stepSize, cnt++) {
    cloneAnnotation(pose, annotationLayer, reference, childAnnotationRefs, depth, normalVector);
  }
  reference.dispose();
}

function cloneAnnotation(pose: DisplayPose, annotationLayer: AnnotationLayerState, reference: AnnotationReference, 
  childAnnotationRefs: AnnotationReference[], depth: number, normalVector: Float32Array): boolean {
  
  const ann = <Polygon>reference.value;
  const cloneSource = getTransformedPoint(pose, ann.source, normalVector, depth);
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
    const pointA = getTransformedPoint(pose, pointAnn.pointA, normalVector, depth);
    const pointB = getTransformedPoint(pose, pointAnn.pointB, normalVector, depth);
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

function getTransformedPoint(pose: DisplayPose, source: Float32Array, normalVec: Float32Array,
  depth: number, round: boolean = false): Float32Array | undefined {
  if (!pose.valid) {
    return undefined;
  }
  const {position} = pose;
  const {displayDimensionIndices, displayRank} = pose.displayDimensions.value;
  const {bounds: {lowerBounds, upperBounds}} = position.coordinateSpace.value;
  const transformedPoint = new Float32Array(displayRank);
  for (let i = 0; i < displayRank; ++i) {
    const dim = displayDimensionIndices[i];
    const adjustment = depth*normalVec[i];
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

export function scalePolygon(navigationState: NavigationState, annotationLayer: AnnotationLayerState,
  reference: AnnotationReference, scale: number) {
  const childAnnotationRefs : AnnotationReference[] = [];
  const ann = <Polygon>reference.value;
  const {pose} = navigationState;

  ann.childAnnotationIds.forEach((childAnnotationId) => {
    childAnnotationRefs.push(annotationLayer.source.getReference(childAnnotationId));
  });
  const centroid = getCentroidPolygon(childAnnotationRefs);

  childAnnotationRefs.forEach((childAnnotationRef) => {
    const line = <Line>childAnnotationRef.value;
    const vecA = new Float32Array(centroid.length);
    const vecB = new Float32Array(centroid.length);
    for (let i = 0; i < centroid.length; i++) {
      vecA[i] = scale*(line.pointA[i] - centroid[i]);
      vecB[i] = scale*(line.pointB[i] - centroid[i]);
    }
    const newPointA = new Float32Array(centroid.length);
    const newPointB = new Float32Array(centroid.length);
    for (let i = 0; i < centroid.length; i++) {
      newPointA[i] = vecA[i] + centroid[i];
      newPointB[i] = vecB[i] + centroid[i];
    }
    const newLine = <Line>{...line, pointA: newPointA, pointB: newPointB};
    annotationLayer.source.update(childAnnotationRef, newLine);
  });
  const vec = new Float32Array(centroid.length);
  for (let i = 0; i < centroid.length; i++) vec[i] = scale*(ann.source[i] - centroid[i]);
  const newSource = new Float32Array(centroid.length);
  for (let i = 0; i < centroid.length; i++) newSource[i] = vec[i] + centroid[i];
  const newAnn = <Polygon>{...ann, source: newSource};
  annotationLayer.source.update(reference, newAnn);
}

export function rotatePolygon(navigationState: NavigationState, annotationLayer: AnnotationLayerState, reference: AnnotationReference, angle: number) {
  if(reference.value?.type !== AnnotationType.POLYGON) return;
  const childAnnotationRefs : AnnotationReference[] = [];
  const ann = <Polygon>reference.value;
  const {pose} = navigationState;

  ann.childAnnotationIds.forEach((childAnnotationId) => {
    childAnnotationRefs.push(annotationLayer.source.getReference(childAnnotationId));
  });
  const normalVector = findNormalVectorToPolygon(childAnnotationRefs, pose.orientation.orientation);
  const rotateQuat = quat.create();
  quat.setAxisAngle(rotateQuat, normalVector, angle);
  const centroid = getCentroidPolygon(childAnnotationRefs);

  childAnnotationRefs.forEach((childAnnotationRef) => {
    const line = <Line>childAnnotationRef.value;
    const vecA = new Float32Array(centroid.length);
    const vecB = new Float32Array(centroid.length);
    for (let i = 0; i < centroid.length; i++) {
      vecA[i] = line.pointA[i] - centroid[i];
      vecB[i] = line.pointB[i] - centroid[i];
    }
    const newVecA = getTransformedPointOnRotation(rotateQuat, vecA);
    const newVecB = getTransformedPointOnRotation(rotateQuat, vecB);
    const newPointA = new Float32Array(centroid.length);
    const newPointB = new Float32Array(centroid.length);
    for (let i = 0; i < centroid.length; i++) {
      newPointA[i] = newVecA[i] + centroid[i];
      newPointB[i] = newVecB[i] + centroid[i];
    }
    const newLine = <Line>{...line, pointA: newPointA, pointB: newPointB};
    annotationLayer.source.update(childAnnotationRef, newLine);
  });
  const vec = new Float32Array(centroid.length);
  for (let i = 0; i < centroid.length; i++) vec[i] = ann.source[i] - centroid[i];
  const newVec = getTransformedPointOnRotation(rotateQuat, vec);
  const newSource = new Float32Array(centroid.length);
  for (let i = 0; i < centroid.length; i++) newSource[i] = newVec[i] + centroid[i];
  const newAnn = <Polygon>{...ann, source: newSource};
  annotationLayer.source.update(reference, newAnn);
}

function getTransformedPointOnRotation(rotateQuat: quat, point: Float32Array) : Float32Array {
  const rank = point.length;
  const transformedPoint = new Float32Array(rank);
  const transformedVec3 = vec3.transformQuat(vec3.create(), point, rotateQuat);
  transformedPoint[0] = transformedVec3[0];
  transformedPoint[1] = transformedVec3[1];
  transformedPoint[2] = transformedVec3[2];

  return transformedPoint;
}

function getCentroidPolygon(childAnnotationRefs: AnnotationReference[]) : Float32Array {
  const rank = 3;
  const centroid = new Float32Array(rank);
  childAnnotationRefs.forEach((childAnnotationRef) => {
    const line = <Line>childAnnotationRef.value;
    for (let i = 0; i < rank; i++) {
      centroid[i] += line.pointA[i];
      centroid[i] += line.pointB[i];
    }
  });
  for (let i = 0; i < rank; i++) centroid[i] /= (2*childAnnotationRefs.length);

  return centroid;
}