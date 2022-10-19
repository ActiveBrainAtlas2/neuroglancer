[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md) / ChunkFormat

# Interface: ChunkFormat

[neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md).ChunkFormat

## Implemented by

- [`SingleTextureChunkFormat`](../classes/neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)

## Table of contents

### Properties

- [dataType](neuroglancer_sliceview_volume_frontend.ChunkFormat.md#datatype)
- [shaderKey](neuroglancer_sliceview_volume_frontend.ChunkFormat.md#shaderkey)

### Methods

- [beginDrawing](neuroglancer_sliceview_volume_frontend.ChunkFormat.md#begindrawing)
- [beginSource](neuroglancer_sliceview_volume_frontend.ChunkFormat.md#beginsource)
- [bindChunk](neuroglancer_sliceview_volume_frontend.ChunkFormat.md#bindchunk)
- [defineShader](neuroglancer_sliceview_volume_frontend.ChunkFormat.md#defineshader)
- [endDrawing](neuroglancer_sliceview_volume_frontend.ChunkFormat.md#enddrawing)

## Properties

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L32)

___

### shaderKey

• **shaderKey**: `string`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L30)

## Methods

### beginDrawing

▸ **beginDrawing**(`gl`, `shader`): `void`

Called once per RenderLayer when starting to draw chunks, on the ChunkFormat of the first
source.  This is not called before each source is drawn.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L49)

___

### beginSource

▸ **beginSource**(`gl`, `shader`): `void`

Called just before drawing chunks for the source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L67)

___

### bindChunk

▸ **bindChunk**(`gl`, `shader`, `chunk`, `fixedChunkPosition`, `displayChunkDimensions`, `channelDimensions`, `newSource`): `void`

Called just before drawing each chunk, on the ChunkFormat .

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |
| `chunk` | [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md) |
| `fixedChunkPosition` | `Uint32Array` |
| `displayChunkDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |
| `newSource` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L60)

___

### defineShader

▸ **defineShader**(`builder`, `numChannelDimensions`): `void`

Called on the ChunkFormat of the first source of a RenderLayer.

This should define a fragment shader function:

  value_type getDataValueAt(ivec3 position, int channelIndex...);

where value_type is `getShaderType(this.dataType)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |
| `numChannelDimensions` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L43)

___

### endDrawing

▸ **endDrawing**(`gl`, `shader`): `void`

Called once after all chunks have been drawn, on the ChunkFormat of the first source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L54)
