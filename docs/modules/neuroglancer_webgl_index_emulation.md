[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/index\_emulation

# Module: neuroglancer/webgl/index\_emulation

## Table of contents

### Classes

- [CountingBuffer](../classes/neuroglancer_webgl_index_emulation.CountingBuffer.md)
- [IndexBufferAttributeHelper](../classes/neuroglancer_webgl_index_emulation.IndexBufferAttributeHelper.md)

### Functions

- [countingBufferShaderModule](neuroglancer_webgl_index_emulation.md#countingbuffershadermodule)
- [disableCountingBuffer](neuroglancer_webgl_index_emulation.md#disablecountingbuffer)
- [getCountingBuffer](neuroglancer_webgl_index_emulation.md#getcountingbuffer)
- [makeIndexBuffer](neuroglancer_webgl_index_emulation.md#makeindexbuffer)

## Functions

### countingBufferShaderModule

▸ **countingBufferShaderModule**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L94)

___

### disableCountingBuffer

▸ **disableCountingBuffer**(`gl`, `shader`, `instanced?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) | `undefined` |
| `instanced` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L80)

___

### getCountingBuffer

▸ **getCountingBuffer**(`gl`): [`CountingBuffer`](../classes/neuroglancer_webgl_index_emulation.CountingBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`CountingBuffer`](../classes/neuroglancer_webgl_index_emulation.CountingBuffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L90)

___

### makeIndexBuffer

▸ **makeIndexBuffer**(`gl`, `data`): [`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](main_module._internal_.md#webgl2renderingcontext) |
| `data` | `Uint32Array` |

#### Returns

[`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L124)
