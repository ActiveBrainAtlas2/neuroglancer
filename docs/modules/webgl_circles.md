[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/circles

# Module: webgl/circles

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

- [VERTICES\_PER\_CIRCLE](webgl_circles.md#vertices_per_circle)

### Functions

- [defineCircleShader](webgl_circles.md#definecircleshader)
- [drawCircles](webgl_circles.md#drawcircles)
- [initializeCircleShader](webgl_circles.md#initializecircleshader)

## Variables

### VERTICES\_PER\_CIRCLE

• `Const` **VERTICES\_PER\_CIRCLE**: ``6``

#### Defined in

[src/neuroglancer/webgl/circles.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/circles.ts#L24)

## Functions

### defineCircleShader

▸ **defineCircleShader**(`builder`, `crossSectionFade`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |
| `crossSectionFade` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/circles.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/circles.ts#L26)

___

### drawCircles

▸ **drawCircles**(`gl`, `circlesPerInstance`, `numInstances`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |
| `circlesPerInstance` | `number` |
| `numInstances` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/circles.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/circles.ts#L90)

___

### initializeCircleShader

▸ **initializeCircleShader**(`shader`, `projectionParameters`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |
| `projectionParameters` | `Object` |
| `projectionParameters.height` | `number` |
| `projectionParameters.width` | `number` |
| `options` | `Object` |
| `options.featherWidthInPixels` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/circles.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/circles.ts#L81)
