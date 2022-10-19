[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/buffer](../modules/webgl_buffer.md) / Buffer

# Class: Buffer

[webgl/buffer](../modules/webgl_buffer.md).Buffer

## Implements

- [`Disposable`](../interfaces/util_disposable.Disposable.md)

## Table of contents

### Constructors

- [constructor](webgl_buffer.Buffer.md#constructor)

### Properties

- [buffer](webgl_buffer.Buffer.md#buffer)
- [bufferType](webgl_buffer.Buffer.md#buffertype)
- [gl](webgl_buffer.Buffer.md#gl)

### Methods

- [bind](webgl_buffer.Buffer.md#bind)
- [bindToVertexAttrib](webgl_buffer.Buffer.md#bindtovertexattrib)
- [bindToVertexAttribI](webgl_buffer.Buffer.md#bindtovertexattribi)
- [dispose](webgl_buffer.Buffer.md#dispose)
- [setData](webgl_buffer.Buffer.md#setdata)
- [fromData](webgl_buffer.Buffer.md#fromdata)

## Constructors

### constructor

• **new Buffer**(`gl`, `bufferType?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) | `undefined` |
| `bufferType` | `number` | `WebGL2RenderingContext.ARRAY_BUFFER` |

#### Defined in

[src/neuroglancer/webgl/buffer.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L28)

## Properties

### buffer

• **buffer**: ``null`` \| [`WebGLBuffer`](../modules/annotation_annotation_layer_state._internal_.md#webglbuffer)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L27)

___

### bufferType

• **bufferType**: `number` = `WebGL2RenderingContext.ARRAY_BUFFER`

___

### gl

• **gl**: [`WebGL2RenderingContext`](../modules/annotation_annotation_layer_state._internal_.md#webgl2renderingcontext)

## Methods

### bind

▸ **bind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L36)

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

[src/neuroglancer/webgl/buffer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L40)

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

[src/neuroglancer/webgl/buffer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L50)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/util_disposable.Disposable.md).[dispose](../interfaces/util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L65)

___

### setData

▸ **setData**(`data`, `usage?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) | `undefined` |
| `usage` | `number` | `WebGL2RenderingContext.STATIC_DRAW` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L59)

___

### fromData

▸ `Static` **fromData**(`gl`, `data`, `bufferType?`, `usage?`): [`Buffer`](webgl_buffer.Buffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |
| `data` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) |
| `bufferType?` | `number` |
| `usage?` | `number` |

#### Returns

[`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L71)
