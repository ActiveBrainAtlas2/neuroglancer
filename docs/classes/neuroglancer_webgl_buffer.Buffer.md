[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/buffer](../modules/neuroglancer_webgl_buffer.md) / Buffer

# Class: Buffer

[neuroglancer/webgl/buffer](../modules/neuroglancer_webgl_buffer.md).Buffer

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Implements

- [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_buffer.Buffer.md#constructor)

### Properties

- [buffer](neuroglancer_webgl_buffer.Buffer.md#buffer)
- [bufferType](neuroglancer_webgl_buffer.Buffer.md#buffertype)
- [gl](neuroglancer_webgl_buffer.Buffer.md#gl)

### Methods

- [bind](neuroglancer_webgl_buffer.Buffer.md#bind)
- [bindToVertexAttrib](neuroglancer_webgl_buffer.Buffer.md#bindtovertexattrib)
- [bindToVertexAttribI](neuroglancer_webgl_buffer.Buffer.md#bindtovertexattribi)
- [dispose](neuroglancer_webgl_buffer.Buffer.md#dispose)
- [setData](neuroglancer_webgl_buffer.Buffer.md#setdata)
- [fromData](neuroglancer_webgl_buffer.Buffer.md#fromdata)

## Constructors

### constructor

• **new Buffer**(`gl`, `bufferType?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/main_module._internal_.md#webgl2renderingcontext) | `undefined` |
| `bufferType` | `number` | `WebGL2RenderingContext.ARRAY_BUFFER` |

#### Defined in

[src/neuroglancer/webgl/buffer.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L28)

## Properties

### buffer

• **buffer**: ``null`` \| [`WebGLBuffer`](../modules/main_module._internal_.md#webglbuffer)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L27)

___

### bufferType

• **bufferType**: `number` = `WebGL2RenderingContext.ARRAY_BUFFER`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L30)

___

### gl

• **gl**: [`WebGL2RenderingContext`](../modules/main_module._internal_.md#webgl2renderingcontext)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L29)

## Methods

### bind

▸ **bind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L36)

___

### bindToVertexAttrib

▸ **bindToVertexAttrib**(`location`, `componentsPerVertexAttribute`, `attributeType?`, `normalized?`, `stride?`, `offset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `location` | `number` | `undefined` |
| `componentsPerVertexAttribute` | `number` | `undefined` |
| `attributeType` | `number` | `WebGL2RenderingContext.FLOAT` |
| `normalized` | `boolean` | `false` |
| `stride` | `number` | `0` |
| `offset` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L40)

___

### bindToVertexAttribI

▸ **bindToVertexAttribI**(`location`, `componentsPerVertexAttribute`, `attributeType?`, `stride?`, `offset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `location` | `number` | `undefined` |
| `componentsPerVertexAttribute` | `number` | `undefined` |
| `attributeType` | `number` | `WebGL2RenderingContext.UNSIGNED_INT` |
| `stride` | `number` | `0` |
| `offset` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L50)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

[src/neuroglancer/webgl/buffer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L65)

___

### setData

▸ **setData**(`data`, `usage?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md) | `undefined` |
| `usage` | `number` | `WebGL2RenderingContext.STATIC_DRAW` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L59)

___

### fromData

▸ `Static` **fromData**(`gl`, `data`, `bufferType?`, `usage?`): [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/main_module._internal_.md#webgl2renderingcontext) |
| `data` | [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md) |
| `bufferType?` | `number` |
| `usage?` | `number` |

#### Returns

[`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L71)
