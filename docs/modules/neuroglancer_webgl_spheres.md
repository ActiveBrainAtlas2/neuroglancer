[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/spheres

# Module: neuroglancer/webgl/spheres

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

### Classes

- [SphereRenderHelper](../classes/neuroglancer_webgl_spheres.SphereRenderHelper.md)

### Functions

- [getSphereIndexArray](neuroglancer_webgl_spheres.md#getsphereindexarray)
- [getSphereVertexArray](neuroglancer_webgl_spheres.md#getspherevertexarray)

## Functions

### getSphereIndexArray

▸ **getSphereIndexArray**(`latitudeBands`, `longitudeBands`): `Uint16Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latitudeBands` | `number` |
| `longitudeBands` | `number` |

#### Returns

`Uint16Array`

#### Defined in

[src/neuroglancer/webgl/spheres.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/spheres.ts#L45)

___

### getSphereVertexArray

▸ **getSphereVertexArray**(`latitudeBands`, `longitudeBands`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latitudeBands` | `number` |
| `longitudeBands` | `number` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/webgl/spheres.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/spheres.ts#L26)
