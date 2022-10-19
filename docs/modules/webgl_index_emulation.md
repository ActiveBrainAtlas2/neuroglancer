[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/index\_emulation

# Module: webgl/index\_emulation

## Table of contents

### Classes

- [CountingBuffer](../classes/webgl_index_emulation.CountingBuffer.md)
- [IndexBufferAttributeHelper](../classes/webgl_index_emulation.IndexBufferAttributeHelper.md)

### Functions

- [countingBufferShaderModule](webgl_index_emulation.md#countingbuffershadermodule)
- [disableCountingBuffer](webgl_index_emulation.md#disablecountingbuffer)
- [getCountingBuffer](webgl_index_emulation.md#getcountingbuffer)
- [makeIndexBuffer](webgl_index_emulation.md#makeindexbuffer)

## Functions

### countingBufferShaderModule

▸ **countingBufferShaderModule**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L94)

___

### disableCountingBuffer

▸ **disableCountingBuffer**(`gl`, `shader`, `instanced?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) | `undefined` |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) | `undefined` |
| `instanced` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L80)

___

### getCountingBuffer

▸ **getCountingBuffer**(`gl`): [`CountingBuffer`](../classes/webgl_index_emulation.CountingBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`CountingBuffer`](../classes/webgl_index_emulation.CountingBuffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L90)

___

### makeIndexBuffer

▸ **makeIndexBuffer**(`gl`, `data`): [`Buffer`](../classes/webgl_buffer.Buffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |
| `data` | `Uint32Array` |

#### Returns

[`Buffer`](../classes/webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L124)
