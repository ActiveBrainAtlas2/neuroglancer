[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/bounding\_box\_shader\_helper

# Module: neuroglancer/sliceview/bounding\_box\_shader\_helper

**`license`**
Copyright 2017 Google Inc.
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

- [boundingBoxCrossSectionVertexIndices](neuroglancer_sliceview_bounding_box_shader_helper.md#boundingboxcrosssectionvertexindices)
- [vertexBasePositions](neuroglancer_sliceview_bounding_box_shader_helper.md#vertexbasepositions)

### Functions

- [computeVertexPositionDebug](neuroglancer_sliceview_bounding_box_shader_helper.md#computevertexpositiondebug)
- [computeVertexPositionsDebug](neuroglancer_sliceview_bounding_box_shader_helper.md#computevertexpositionsdebug)
- [defineBoundingBoxCrossSectionShader](neuroglancer_sliceview_bounding_box_shader_helper.md#defineboundingboxcrosssectionshader)
- [setBoundingBoxCrossSectionShaderPlane](neuroglancer_sliceview_bounding_box_shader_helper.md#setboundingboxcrosssectionshaderplane)
- [setBoundingBoxCrossSectionShaderViewportPlane](neuroglancer_sliceview_bounding_box_shader_helper.md#setboundingboxcrosssectionshaderviewportplane)

## Variables

### boundingBoxCrossSectionVertexIndices

• `Const` **boundingBoxCrossSectionVertexIndices**: `Int32Array`

#### Defined in

[src/neuroglancer/sliceview/bounding_box_shader_helper.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/bounding_box_shader_helper.ts#L76)

___

### vertexBasePositions

• `Const` **vertexBasePositions**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/bounding_box_shader_helper.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/bounding_box_shader_helper.ts#L65)

## Functions

### computeVertexPositionDebug

▸ **computeVertexPositionDebug**(`chunkSize`, `uLowerClipBound`, `uUpperClipBound`, `uPlaneDistance`, `uPlaneNormal`, `uTranslation`, `vertexIndex`, `print?`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md) \| `undefined`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunkSize` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) | `undefined` |
| `uLowerClipBound` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) | `undefined` |
| `uUpperClipBound` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) | `undefined` |
| `uPlaneDistance` | `number` | `undefined` |
| `uPlaneNormal` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) | `undefined` |
| `uTranslation` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) | `undefined` |
| `vertexIndex` | `number` | `undefined` |
| `print` | `boolean` | `true` |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md) \| `undefined`

#### Defined in

[src/neuroglancer/sliceview/bounding_box_shader_helper.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/bounding_box_shader_helper.ts#L183)

___

### computeVertexPositionsDebug

▸ **computeVertexPositionsDebug**(`chunkSize`, `uLowerClipBound`, `uUpperClipBound`, `uPlaneDistance`, `uPlaneNormal`, `uTranslation`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkSize` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `uLowerClipBound` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `uUpperClipBound` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `uPlaneDistance` | `number` |
| `uPlaneNormal` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `uTranslation` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)[]

#### Defined in

[src/neuroglancer/sliceview/bounding_box_shader_helper.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/bounding_box_shader_helper.ts#L239)

___

### defineBoundingBoxCrossSectionShader

▸ **defineBoundingBoxCrossSectionShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/bounding_box_shader_helper.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/bounding_box_shader_helper.ts#L140)

___

### setBoundingBoxCrossSectionShaderPlane

▸ **setBoundingBoxCrossSectionShaderPlane**(`shader`, `planeNormal`, `planeDistanceToOrigin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |
| `planeNormal` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `planeDistanceToOrigin` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/bounding_box_shader_helper.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/bounding_box_shader_helper.ts#L252)

___

### setBoundingBoxCrossSectionShaderViewportPlane

▸ **setBoundingBoxCrossSectionShaderViewportPlane**(`shader`, `viewportNormalInGlobalCoordinates`, `viewportCenterPosition`, `modelMatrix`, `invModelMatrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |
| `viewportNormalInGlobalCoordinates` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `viewportCenterPosition` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `modelMatrix` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |
| `invModelMatrix` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/bounding_box_shader_helper.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/bounding_box_shader_helper.ts#L265)
