[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/lines

# Module: webgl/lines

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

- [VERTICES\_PER\_LINE](webgl_lines.md#vertices_per_line)

### Functions

- [defineLineShader](webgl_lines.md#definelineshader)
- [drawLines](webgl_lines.md#drawlines)
- [initializeLineShader](webgl_lines.md#initializelineshader)

## Variables

### VERTICES\_PER\_LINE

• `Const` **VERTICES\_PER\_LINE**: ``6``

#### Defined in

[src/neuroglancer/webgl/lines.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lines.ts#L25)

## Functions

### defineLineShader

▸ **defineLineShader**(`builder`, `rounded?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) | `undefined` |
| `rounded` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/lines.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lines.ts#L27)

___

### drawLines

▸ **drawLines**(`gl`, `linesPerInstance`, `numInstances`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |
| `linesPerInstance` | `number` |
| `numInstances` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/lines.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lines.ts#L116)

___

### initializeLineShader

▸ **initializeLineShader**(`shader`, `projectionParameters`, `featherWidthInPixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |
| `projectionParameters` | `Object` |
| `projectionParameters.height` | `number` |
| `projectionParameters.width` | `number` |
| `featherWidthInPixels` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/lines.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lines.ts#L121)
