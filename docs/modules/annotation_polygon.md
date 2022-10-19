[neuroglancer](../README.md) / [Modules](../modules.md) / annotation/polygon

# Module: annotation/polygon

**`license`**
Copyright 2018 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Modules

- [&lt;internal\&gt;](annotation_polygon._internal_.md)

### Variables

- [DEFAULT\_POLYGON\_CLONE\_SECTION\_OFFSET](annotation_polygon.md#default_polygon_clone_section_offset)
- [DEFAULT\_POLYGON\_ROTATE\_ANGLE](annotation_polygon.md#default_polygon_rotate_angle)
- [DEFAULT\_POLYGON\_SCALE\_PERCENTAGE](annotation_polygon.md#default_polygon_scale_percentage)
- [polygonRotateAngle](annotation_polygon.md#polygonrotateangle)
- [polygonScalePercentage](annotation_polygon.md#polygonscalepercentage)
- [polygonSectionOffset](annotation_polygon.md#polygonsectionoffset)

### Functions

- [checkIfSameZCoordinate](annotation_polygon.md#checkifsamezcoordinate)
- [cloneAnnotationSequence](annotation_polygon.md#cloneannotationsequence)
- [copyZCoordinate](annotation_polygon.md#copyzcoordinate)
- [findCrossProduct](annotation_polygon.md#findcrossproduct)
- [findDotProduct](annotation_polygon.md#finddotproduct)
- [getNeighbouringAnnIds](annotation_polygon.md#getneighbouringannids)
- [getZCoordinate](annotation_polygon.md#getzcoordinate)
- [isPointUniqueInPolygon](annotation_polygon.md#ispointuniqueinpolygon)
- [rotatePolygon](annotation_polygon.md#rotatepolygon)
- [scalePolygon](annotation_polygon.md#scalepolygon)

## Variables

### DEFAULT\_POLYGON\_CLONE\_SECTION\_OFFSET

• `Const` **DEFAULT\_POLYGON\_CLONE\_SECTION\_OFFSET**: ``1``

#### Defined in

[src/neuroglancer/annotation/polygon.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L37)

___

### DEFAULT\_POLYGON\_ROTATE\_ANGLE

• `Const` **DEFAULT\_POLYGON\_ROTATE\_ANGLE**: ``1``

#### Defined in

[src/neuroglancer/annotation/polygon.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L35)

___

### DEFAULT\_POLYGON\_SCALE\_PERCENTAGE

• `Const` **DEFAULT\_POLYGON\_SCALE\_PERCENTAGE**: ``1``

#### Defined in

[src/neuroglancer/annotation/polygon.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L33)

___

### polygonRotateAngle

• `Const` **polygonRotateAngle**: [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/annotation/polygon.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L36)

___

### polygonScalePercentage

• `Const` **polygonScalePercentage**: [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/annotation/polygon.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L34)

___

### polygonSectionOffset

• `Const` **polygonSectionOffset**: [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/annotation/polygon.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L38)

## Functions

### checkIfSameZCoordinate

▸ **checkIfSameZCoordinate**(`point1`, `point2`): `boolean`

Checks if both points have same z-coordinate

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | `Float32Array` |
| `point2` | `Float32Array` |

#### Returns

`boolean`

true if both points have same z-coordinate otherwise false.

#### Defined in

[src/neuroglancer/annotation/polygon.ts:449](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L449)

___

### cloneAnnotationSequence

▸ **cloneAnnotationSequence**(`layer`, `navigationState`, `annotationLayer`, `annotationId`, `startOffset`, `polygonCnt`, `stepSize`): `void`

Given a polygon reference and start offset, creates a polygon sequence of size polygonCnt
For example, let the source polygon be at location 's', polygonCnt be 3 and start offset be 10.
step size to be 3.
creates a sequence of polygons at locations: s+10, s+10+3, s+10+3+3

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |
| `navigationState` | [`NavigationState`](../classes/annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](annotation_polygon._internal_.md#trackablezoominterface)\> |
| `annotationLayer` | [`AnnotationLayerState`](../classes/annotation_annotation_layer_state.AnnotationLayerState.md) |
| `annotationId` | `string` |
| `startOffset` | `number` |
| `polygonCnt` | `number` |
| `stepSize` | `number` |

#### Returns

`void`

void

#### Defined in

[src/neuroglancer/annotation/polygon.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L159)

___

### copyZCoordinate

▸ **copyZCoordinate**(`point1`, `point2`): `void`

Takes two points and copies the first point's z coordinate into the second point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | `undefined` \| `Float32Array` |
| `point2` | `undefined` \| `Float32Array` |

#### Returns

`void`

void

#### Defined in

[src/neuroglancer/annotation/polygon.ts:462](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L462)

___

### findCrossProduct

▸ **findCrossProduct**(`vec1`, `vec2`): `number`[]

Takes two vectors as input and returns their cross product.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec1` | `Float32Array` | input vector |
| `vec2` | `Float32Array` | input vector |

#### Returns

`number`[]

number cross product of vec1 and vec2

#### Defined in

[src/neuroglancer/annotation/polygon.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L71)

___

### findDotProduct

▸ **findDotProduct**(`vec1`, `vec2`): `number`

Takes two vectors as input and returns their dot product.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec1` | `number`[] | input vector |
| `vec2` | [`vec3`](../classes/util_geom.vec3.md) | input vector |

#### Returns

`number`

number dot product of vec1 and vec2

#### Defined in

[src/neuroglancer/annotation/polygon.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L86)

___

### getNeighbouringAnnIds

▸ **getNeighbouringAnnIds**(`childAnns`, `id`): `string`[] \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childAnns` | `string`[] |
| `id` | `string` |

#### Returns

`string`[] \| `undefined`

#### Defined in

[src/neuroglancer/annotation/polygon.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L469)

___

### getZCoordinate

▸ **getZCoordinate**(`point`): `number` \| `undefined`

Takes a point as input and returns the z-coordinate of the point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Float32Array` |

#### Returns

`number` \| `undefined`

z-coordinate of the point.

#### Defined in

[src/neuroglancer/annotation/polygon.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L438)

___

### isPointUniqueInPolygon

▸ **isPointUniqueInPolygon**(`annotationLayer`, `ann`, `point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayer` | [`AnnotationLayerState`](../classes/annotation_annotation_layer_state.AnnotationLayerState.md) |
| `ann` | [`Polygon`](../interfaces/annotation.Polygon.md) |
| `point` | `Float32Array` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/polygon.ts:479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L479)

___

### rotatePolygon

▸ **rotatePolygon**(`navigationState`, `annotationLayer`, `reference`, `angle`): `void`

Takes a polygon annotation reference and rotates the polygon wrt to its centroid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `navigationState` | [`NavigationState`](../classes/annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](annotation_polygon._internal_.md#trackablezoominterface)\> |  |
| `annotationLayer` | [`AnnotationLayerState`](../classes/annotation_annotation_layer_state.AnnotationLayerState.md) | Layer in which the polygon annotation is present. |
| `reference` | [`AnnotationReference`](../classes/annotation.AnnotationReference.md) | reference corresponding to the polygon. |
| `angle` | `number` | Angle of rotation in degrees. |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/polygon.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L354)

___

### scalePolygon

▸ **scalePolygon**(`navigationState`, `annotationLayer`, `reference`, `scale`): `void`

Takes a polygon annotation reference and scales the polygon wrt to its centroid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `navigationState` | [`NavigationState`](../classes/annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](annotation_polygon._internal_.md#trackablezoominterface)\> |  |
| `annotationLayer` | [`AnnotationLayerState`](../classes/annotation_annotation_layer_state.AnnotationLayerState.md) | Layer in which the polygon annotation is present. |
| `reference` | [`AnnotationReference`](../classes/annotation.AnnotationReference.md) | reference corresponding to the polygon. |
| `scale` | `number` | scale factor of the polygon (1.2 indicates 20% scale in polygon) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/polygon.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/polygon.ts#L311)
