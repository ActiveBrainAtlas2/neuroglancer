[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/volume

# Module: neuroglancer/annotation/volume

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

### Functions

- [isSectionValid](neuroglancer_annotation_volume.md#issectionvalid)

## Functions

### isSectionValid

▸ **isSectionValid**(`annotationLayer`, `id`, `zCoordinate`): `boolean`

This function takes a volume id as input and finds if there is a polygon already present at the input
zCoordiante, if the polygon is present returns false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `annotationLayer` | [`AnnotationLayerState`](../classes/neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |  |
| `id` | `string` | volume id |
| `zCoordinate` | `number` | z coordinate input. |

#### Returns

`boolean`

True, if polygon is not present otherwise false.

#### Defined in

[src/neuroglancer/annotation/volume.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/volume.ts#L59)
