[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/buffer

# Module: neuroglancer/webgl/buffer

## Table of contents

### Classes

- [Buffer](../classes/neuroglancer_webgl_buffer.Buffer.md)

### Type Aliases

- [BufferType](neuroglancer_webgl_buffer.md#buffertype)
- [WebGLBufferUsage](neuroglancer_webgl_buffer.md#webglbufferusage)
- [WebGLDataType](neuroglancer_webgl_buffer.md#webgldatatype)

### Functions

- [getMemoizedBuffer](neuroglancer_webgl_buffer.md#getmemoizedbuffer)

## Type Aliases

### BufferType

Ƭ **BufferType**: `number`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L23)

___

### WebGLBufferUsage

Ƭ **WebGLBufferUsage**: `number`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L25)

___

### WebGLDataType

Ƭ **WebGLDataType**: `number`

#### Defined in

[src/neuroglancer/webgl/buffer.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L24)

## Functions

### getMemoizedBuffer

▸ **getMemoizedBuffer**(`gl`, `bufferType`, `getter`, ...`args`): [`RefCountedValue`](../classes/neuroglancer_util_disposable.RefCountedValue.md)<[`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `bufferType` | `number` |
| `getter` | (...`args`: `any`[]) => [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md) |
| `...args` | `any`[] |

#### Returns

[`RefCountedValue`](../classes/neuroglancer_util_disposable.RefCountedValue.md)<[`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)\>

#### Defined in

[src/neuroglancer/webgl/buffer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/buffer.ts#L80)
