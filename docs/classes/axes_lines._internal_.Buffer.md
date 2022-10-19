[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Buffer

# Class: Buffer

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Buffer

## Implements

- [`Disposable`](../interfaces/axes_lines._internal_.Disposable.md)

## Table of contents

### Constructors

- [constructor](axes_lines._internal_.Buffer.md#constructor)

### Properties

- [buffer](axes_lines._internal_.Buffer.md#buffer)
- [bufferType](axes_lines._internal_.Buffer.md#buffertype)
- [gl](axes_lines._internal_.Buffer.md#gl)

### Methods

- [bind](axes_lines._internal_.Buffer.md#bind)
- [bindToVertexAttrib](axes_lines._internal_.Buffer.md#bindtovertexattrib)
- [bindToVertexAttribI](axes_lines._internal_.Buffer.md#bindtovertexattribi)
- [dispose](axes_lines._internal_.Buffer.md#dispose)
- [setData](axes_lines._internal_.Buffer.md#setdata)
- [fromData](axes_lines._internal_.Buffer.md#fromdata)

## Constructors

### constructor

• **new Buffer**(`gl`, `bufferType?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/axes_lines._internal_.md#webgl2renderingcontext) | `undefined` |
| `bufferType` | `number` | `WebGL2RenderingContext.ARRAY_BUFFER` |

#### Defined in

[src/neuroglancer/webgl/buffer.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L28)

## Properties

### buffer

• **buffer**: ``null`` \| [`WebGLBuffer`](../modules/axes_lines._internal_.md#webglbuffer)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L27)

___

### bufferType

• **bufferType**: `number` = `WebGL2RenderingContext.ARRAY_BUFFER`

___

### gl

• **gl**: [`WebGL2RenderingContext`](../modules/axes_lines._internal_.md#webgl2renderingcontext)

## Methods

### bind

▸ **bind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L36)

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

[src/neuroglancer/webgl/buffer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L40)

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

[src/neuroglancer/webgl/buffer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L50)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/axes_lines._internal_.Disposable.md).[dispose](../interfaces/axes_lines._internal_.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L65)

___

### setData

▸ **setData**(`data`, `usage?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`ArrayBufferView`](../interfaces/axes_lines._internal_.ArrayBufferView.md) | `undefined` |
| `usage` | `number` | `WebGL2RenderingContext.STATIC_DRAW` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L59)

___

### fromData

▸ `Static` **fromData**(`gl`, `data`, `bufferType?`, `usage?`): [`Buffer`](axes_lines._internal_.Buffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/axes_lines._internal_.md#webgl2renderingcontext) |
| `data` | [`ArrayBufferView`](../interfaces/axes_lines._internal_.ArrayBufferView.md) |
| `bufferType?` | `number` |
| `usage?` | `number` |

#### Returns

[`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/buffer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/buffer.ts#L71)
