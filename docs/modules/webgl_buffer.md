[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/buffer

# Module: webgl/buffer

## Table of contents

### Classes

- [Buffer](../classes/webgl_buffer.Buffer.md)

### Type Aliases

- [BufferType](webgl_buffer.md#buffertype)
- [WebGLBufferUsage](webgl_buffer.md#webglbufferusage)
- [WebGLDataType](webgl_buffer.md#webgldatatype)

### Functions

- [getMemoizedBuffer](webgl_buffer.md#getmemoizedbuffer)

## Type Aliases

### BufferType

Ƭ **BufferType**: `number`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L23)

___

### WebGLBufferUsage

Ƭ **WebGLBufferUsage**: `number`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L25)

___

### WebGLDataType

Ƭ **WebGLDataType**: `number`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L24)

## Functions

### getMemoizedBuffer

▸ **getMemoizedBuffer**(`gl`, `bufferType`, `getter`, ...`args`): [`RefCountedValue`](../classes/util_disposable.RefCountedValue.md)<[`Buffer`](../classes/webgl_buffer.Buffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `bufferType` | `number` |
| `getter` | (...`args`: `any`[]) => [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) |
| `...args` | `any`[] |

#### Returns

[`RefCountedValue`](../classes/util_disposable.RefCountedValue.md)<[`Buffer`](../classes/webgl_buffer.Buffer.md)\>

#### Defined in

[src/neuroglancer/webgl/buffer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/buffer.ts#L80)
