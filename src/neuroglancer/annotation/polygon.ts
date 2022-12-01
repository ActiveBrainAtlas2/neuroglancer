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
 import {AnnotationRenderContext, AnnotationRenderHelper, registerAnnotationTypeRenderHandler} from 'neuroglancer/annotation/type_handler';
 import { DisplayPose, NavigationState } from '../navigation_state';
import { StatusMessage } from '../status';
 import { TrackableValue } from '../trackable_value';
import { UserLayerWithAnnotations } from '../ui/annotations';
import { arraysEqual } from '../util/array';
 import { verifyInt, verifyNonNegativeFloat } from '../util/json';
 import { AnnotationLayerState } from './annotation_layer_state';
import { isSectionValid } from './volume';
 
/**
 * Indicates the default value of polygon scale percentage. Default value is 1%.
 */
 export const DEFAULT_POLYGON_SCALE_PERCENTAGE = 1;
 /**
  * Polygon scale percentage value set from the form submitted by user. Default value is same as DEFAULT_POLYGON_SCALE_PERCENTAGE
  */
 export const polygonScalePercentage = new TrackableValue<number>(DEFAULT_POLYGON_SCALE_PERCENTAGE, verifyNonNegativeFloat);
 /**
 * Indicates the default value of polygon rotate angle. Default value is 1 degree.
 */
 export const DEFAULT_POLYGON_ROTATE_ANGLE = 1;
 /**
  * Polygon rotate angle value set from the form submitted by user. Default value is same as DEFAULT_POLYGON_ROTATE_ANGLE
  */
 export const polygonRotateAngle = new TrackableValue<number>(DEFAULT_POLYGON_ROTATE_ANGLE, verifyNonNegativeFloat);
 /**
 * Indicates the default value of polygon clone section offset. Default value is 1. (clones from section 's' to section 's+1')
 */
 export const DEFAULT_POLYGON_CLONE_SECTION_OFFSET = 1;
 /**
  * Polygon clone section offset set from the form submitted by user. Default value is same as DEFAULT_POLYGON_CLONE_SECTION_OFFSET
  */
 export const polygonSectionOffset = new TrackableValue<number>(DEFAULT_POLYGON_CLONE_SECTION_OFFSET, verifyInt);

 /**
  * RenderHelper class is used for rendering the polygon annotation.
  * Polygons are internally rendered as line annotations. This class is for format purposes only.
  */
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

/**
 * Takes two vectors as input and returns their cross product.
 * @param vec1 input vector
 * @param vec2 input vector
 * @returns number cross product of vec1 and vec2
 */
 export function findCrossProduct(vec1: Float32Array, vec2: Float32Array) : Array<number> {
  const vec3 = new Array<number>(vec1.length);
  vec3[0] = vec1[1]*vec2[2] - vec1[2]*vec2[1];
  vec3[1] = vec1[2]*vec2[0] - vec1[0]*vec2[2];
  vec3[2] = vec1[0]*vec2[1] - vec1[1]*vec2[0];

  return vec3;
}

/**
 * Takes two vectors as input and returns their dot product.
 * @param vec1 input vector
 * @param vec2 input vector
 * @returns number dot product of vec1 and vec2
 */
export function findDotProduct(vec1: number[], vec2: vec3): number {
  let prod = 0;
  const rank = vec1.length;
  for (let i = 0; i < rank; i++) {
    prod += vec1[i]*vec2[i];
  }

  return prod;
}

/**
 * Takes a list of childrefs and plane orientation and finds the normal vector to the polygon into the plane.
 * @param childRefs List of childrefs (child lines of polygon)
 * @param orientation Current plane orientation
 * @returns A normal vector of polygon whose direction is into the plane.
 */
function findNormalVectorToPolygon(childRefs: AnnotationReference[], orientation: quat) : number[] {
  let crossProductVec = new Array<number>(3);
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

/**
 * Given a polygon reference and start offset, creates a polygon sequence of size polygonCnt
 * For example, let the source polygon be at location 's', polygonCnt be 3 and start offset be 10.
 * step size to be 3.
 * creates a sequence of polygons at locations: s+10, s+10+3, s+10+3+3
 * @param layer 
 * @param navigationState 
 * @param annotationLayer 
 * @param annotationId 
 * @param startOffset 
 * @param polygonCnt 
 * @param stepSize 
 * @returns void
 */
export function cloneAnnotationSequence(layer: UserLayerWithAnnotations, navigationState: NavigationState, annotationLayer: AnnotationLayerState, 
  annotationId: string, startOffset: number, polygonCnt: number, stepSize: number): void {
  const reference = annotationLayer.source.getNonDummyAnnotationReference(annotationId);
  if(reference.value === null || reference.value!.type !== AnnotationType.POLYGON) return;
  const childAnnotationRefs : AnnotationReference[] = [];
  const ann = <Polygon>reference.value;
  const {pose} = navigationState;

  ann.childAnnotationIds.forEach((childAnnotationId) => {
    childAnnotationRefs.push(annotationLayer.source.getReference(childAnnotationId));
  });
  const normalVector = findNormalVectorToPolygon(childAnnotationRefs, pose.orientation.orientation);
  let lastCloneId : string | undefined;  
  for (let depth = startOffset, cnt = 0; cnt < polygonCnt; depth += stepSize, cnt++) {
    const cloneId = cloneAnnotation(pose, annotationLayer, reference, childAnnotationRefs, depth, normalVector);
    if (cloneId !== undefined) lastCloneId = cloneId;
  }
  if (lastCloneId !== undefined) {
    const cloneRef = annotationLayer.source.getReference(lastCloneId);
    if (cloneRef.value) {
      layer.selectAnnotation(annotationLayer, cloneRef.id, true);
      const source = Object.assign([], (<Polygon>cloneRef.value).source);
      navigationState.position.value = source;
    }
    cloneRef.dispose();
  }
  reference.dispose();
}

/**
 * Takes an input polygon reference and creates a clone of the polygon at certain depth along a normal vector.
 * @param pose 
 * @param annotationLayer annotation layer corresponding to the polygon
 * @param reference polygon reference
 * @param childAnnotationRefs 
 * @param depth distance at which the new polygon needs to be cloned.
 * @param normalVector normal vector along which the new polygon needs to be cloned.
 * @returns returns the annotation id of the cloned polygon
 */
function cloneAnnotation(pose: DisplayPose, annotationLayer: AnnotationLayerState, reference: AnnotationReference, 
  childAnnotationRefs: AnnotationReference[], depth: number, normalVector: number[]): string | undefined {
  
  const ann = <Polygon>reference.value;
  const cloneSource = getTransformedPoint(pose, ann.source, normalVector, depth);
  if (cloneSource === undefined) return undefined;
  if (ann.parentAnnotationId) {
    const zCoordinate = getZCoordinate(cloneSource);
    if (zCoordinate !== undefined && !isSectionValid(annotationLayer, ann.parentAnnotationId, zCoordinate)) {
      StatusMessage.showTemporaryMessage("Failed to clone, polygon already exists in the section for the volume");
      return undefined;
    }
  }

  let volumeRef : AnnotationReference|undefined = undefined;
  if (ann.parentAnnotationId) volumeRef = annotationLayer.source.getReference(ann.parentAnnotationId); 

  const cloneAnnRef = annotationLayer.source.add(<Polygon>{
    id: '',
    type: AnnotationType.POLYGON,
    description: ann.description,
    source: cloneSource,
    properties: Object.assign([], ann.properties),
    childAnnotationIds: [],
    childrenVisible: false,
  }, false, volumeRef);

  

  const disposeAnnotation = () => {
    annotationLayer.source.delete(cloneAnnRef);
    cloneAnnRef.dispose();
    return undefined;
  };

  const success = () => {
    const cloneId = cloneAnnRef.value!.id;
    annotationLayer.source.commit(cloneAnnRef);
    return cloneId;
  };

  //@ts-ignore
  childAnnotationRefs.forEach((childAnnotationRef) => {
    const pointAnn = <Line>childAnnotationRef.value;
    const pointA = getTransformedPoint(pose, pointAnn.pointA, normalVector, depth);
    const pointB = getTransformedPoint(pose, pointAnn.pointB, normalVector, depth);
    if (pointA === undefined || pointB === undefined) {
      return disposeAnnotation();
    }
    copyZCoordinate(cloneSource, pointA);
    copyZCoordinate(cloneSource, pointB);

    const cloneLineRef = annotationLayer.source.add(<Line>{
      id: '',
      type: AnnotationType.LINE,
      description: '',
      pointA: pointA,
      pointB: pointB,
      properties: Object.assign([], cloneAnnRef.value!.properties),
    }, true, cloneAnnRef);
    cloneLineRef.dispose();
  });

  return success();
}

/**
 * Takes a point and finds a new point with certain depth along the normal vector
 * @param pose 
 * @param source source point to find the new point.
 * @param normalVec normal vector along which the depth needs to be computed.
 * @param depth depth value
 * @param round rounds the transformed point if value is true.
 * @returns The transformed point with depth along the normal vector.
 */
function getTransformedPoint(pose: DisplayPose, source: Float32Array, normalVec: number[],
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

/**
 * Takes a polygon annotation reference and scales the polygon wrt to its centroid.
 * @param navigationState 
 * @param annotationLayer Layer in which the polygon annotation is present.
 * @param reference reference corresponding to the polygon.
 * @param scale scale factor of the polygon (1.2 indicates 20% scale in polygon)
 */
//@ts-ignore
export function scalePolygon(navigationState: NavigationState, annotationLayer: AnnotationLayerState,
  reference: AnnotationReference, scale: number) {
  const childAnnotationRefs : AnnotationReference[] = [];
  const ann = <Polygon>reference.value;

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

/**
 * Takes a polygon annotation reference and rotates the polygon wrt to its centroid based on the input number of degrees.
 * After rotation saves the updated polygon in the annotation layer state.
 * @param navigationState The navigation State object of neuroglancer panel.
 * @param annotationLayer Layer in which the polygon annotation is present.
 * @param reference reference corresponding to the polygon.
 * @param angle Angle of rotation in degrees. Eg: (30 degrees etc)
 * @returns void
 */
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
    const vecA = new Array<number>(centroid.length);
    const vecB = new Array<number>(centroid.length);
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
  const vec = new Array<number>(centroid.length);
  for (let i = 0; i < centroid.length; i++) vec[i] = ann.source[i] - centroid[i];
  const newVec = getTransformedPointOnRotation(rotateQuat, vec);
  const newSource = new Float32Array(centroid.length);
  for (let i = 0; i < centroid.length; i++) newSource[i] = newVec[i] + centroid[i];
  const newAnn = <Polygon>{...ann, source: newSource};
  annotationLayer.source.update(reference, newAnn);
}

/**
 * Uses the rotation matrix and rotates the point with respect to the quat (first argument).
 * @param rotateQuat 
 * @param point The given input point which needs to be rotated.
 * @returns rotated point in float array.
 */
function getTransformedPointOnRotation(rotateQuat: quat, point: number[]) : Float32Array {
  const rank = point.length;
  const transformedPoint = new Float32Array(rank);
  const transformedVec3 = vec3.transformQuat(vec3.create(), point, rotateQuat);
  transformedPoint[0] = transformedVec3[0];
  transformedPoint[1] = transformedVec3[1];
  transformedPoint[2] = transformedVec3[2];

  return transformedPoint;
}

/**
 * Takez a list of child refs (child lines of polygon) and finds its centroid.
 * @param childAnnotationRefs List of child annotation ids of a polygon.
 * @returns centroid in a float array format.
 */
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

/**
 * Takes a point as input and returns the z-coordinate of the point.
 * @param point Float32Array of 3D point.
 * @returns z-coordinate of the point.
 */
export function getZCoordinate(point: Float32Array): number|undefined {
  if (point.length < 3) return undefined;
  return Math.floor(point[2]);
}

/**
 * Checks if both points have same z-coordinate
 * @param point1 Float32Array of 3D point.
 * @param point2 Float32Array of 3D point.
 * @returns true if both points have same z-coordinate otherwise false.
 */
export function checkIfSameZCoordinate(point1: Float32Array, point2: Float32Array): boolean {
  const z1 = getZCoordinate(point1);
  const z2 = getZCoordinate(point2);
  if (z1 === undefined || z2 === undefined) return false;
  return z1 === z2;
}

/**
 * Takes two points and copies the first point's z coordinate into the second point.
 * @param point1 
 * @param point2 
 * @returns void
 */
export function copyZCoordinate(point1: Float32Array|undefined, point2: Float32Array|undefined): void {
  if (point1 === undefined || point2 === undefined) return;
  if (point1.length < 3 || point2.length < 3) return;
  point2[2] = point1[2];
  return;
}

/**
 * Takes an id parameter and returns a list of annotation ids which are neighbours of this annotation.
 * @param childAnns Input list of annotation Ids
 * @param id Annotation id for which the neighbours are getting computed
 * @returns A list of annotation ids that are neighbours.
 */
export function getNeighbouringAnnIds(childAnns: string[], id: string) : string[] | undefined {
  const curIdx = childAnns.findIndex((value) => value === id);
  if (curIdx == -1) {
    return undefined;
  }
  const leftIdx = (curIdx - 1 + childAnns.length) % childAnns.length;
  const rightIdx = (curIdx + 1) % childAnns.length;
  return [childAnns[leftIdx], childAnns[rightIdx]];
}

/**
 * Takes an annotation layer and checks if there are no duplicate annotations at a particular point.
 * @param annotationLayer Annotation layer state object.
 * @param ann Input polygon annotation.
 * @param point The point for which it needs to be computed if the point is unique or not.
 * @returns Returns True if the point is unique otherwise it returns False.
 */
export function isPointUniqueInPolygon(annotationLayer: AnnotationLayerState, ann: Polygon, point: Float32Array): boolean {
  for(let i = 0; i < ann.childAnnotationIds.length; i++) {
    const childAnnRef = annotationLayer.source.getReference(ann.childAnnotationIds[i]);
    if (childAnnRef.value) {
      const lineAnn = <Line>(childAnnRef.value);
      if (i === ann.childAnnotationIds.length-1 && arraysEqual(lineAnn.pointA, point)) {
        return false;
      } else if (i !== ann.childAnnotationIds.length-1  
        && (arraysEqual(lineAnn.pointA, point) || arraysEqual(lineAnn.pointB, point))) {
        return false;
      }
    }
    childAnnRef.dispose();
  }
  return true;
}