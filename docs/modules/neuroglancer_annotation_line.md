[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/line

# Module: neuroglancer/annotation/line

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

### Variables

- [FULL\_OBJECT\_PICK\_OFFSET](neuroglancer_annotation_line.md#full_object_pick_offset)

### Functions

- [getEndPointBasedOnPartIndex](neuroglancer_annotation_line.md#getendpointbasedonpartindex)
- [getPointPartIndex](neuroglancer_annotation_line.md#getpointpartindex)
- [isCornerPicked](neuroglancer_annotation_line.md#iscornerpicked)

## Variables

### FULL\_OBJECT\_PICK\_OFFSET

• `Const` **FULL\_OBJECT\_PICK\_OFFSET**: ``0``

#### Defined in

[src/neuroglancer/annotation/line.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/line.ts#L31)

## Functions

### getEndPointBasedOnPartIndex

▸ **getEndPointBasedOnPartIndex**(`annotation`, `partIndex`): `Float32Array` \| `undefined`

Finds the point corresponding to the part index picked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `annotation` | [`Line`](../interfaces/neuroglancer_annotation.Line.md) | Annotation for which the point needs to be found. |
| `partIndex` | `number` | input part index |

#### Returns

`Float32Array` \| `undefined`

undefined if the part index is valid otherwise
returns the point corresponding to the part index.

#### Defined in

[src/neuroglancer/annotation/line.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/line.ts#L293)

___

### getPointPartIndex

▸ **getPointPartIndex**(`annotation`, `point`): `number`

Finds which part index is picked based on the annotation and the point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `annotation` | [`Line`](../interfaces/neuroglancer_annotation.Line.md) | The line annotation for which part index needs to be found based on point. |
| `point` | `Float32Array` | Input point of the line. |

#### Returns

`number`

part index corresponding to the point.

#### Defined in

[src/neuroglancer/annotation/line.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/line.ts#L280)

___

### isCornerPicked

▸ **isCornerPicked**(`partIndex`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `partIndex` | `number` | the part of the annotation that is picked with mouse |

#### Returns

`boolean`

returns true if the part index indicates a corner is picked.

#### Defined in

[src/neuroglancer/annotation/line.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/line.ts#L270)
