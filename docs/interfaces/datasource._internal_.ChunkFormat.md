[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / ChunkFormat

# Interface: ChunkFormat

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).ChunkFormat

## Implemented by

- [`SingleTextureChunkFormat`](../classes/sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)

## Table of contents

### Properties

- [dataType](datasource._internal_.ChunkFormat.md#datatype)
- [shaderKey](datasource._internal_.ChunkFormat.md#shaderkey)

### Methods

- [beginDrawing](datasource._internal_.ChunkFormat.md#begindrawing)
- [beginSource](datasource._internal_.ChunkFormat.md#beginsource)
- [bindChunk](datasource._internal_.ChunkFormat.md#bindchunk)
- [defineShader](datasource._internal_.ChunkFormat.md#defineshader)
- [endDrawing](datasource._internal_.ChunkFormat.md#enddrawing)

## Properties

### dataType

• **dataType**: [`DataType`](../enums/util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L32)

___

### shaderKey

• **shaderKey**: `string`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L30)

## Methods

### beginDrawing

▸ **beginDrawing**(`gl`, `shader`): `void`

Called once per RenderLayer when starting to draw chunks, on the ChunkFormat of the first
source.  This is not called before each source is drawn.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L49)

___

### beginSource

▸ **beginSource**(`gl`, `shader`): `void`

Called just before drawing chunks for the source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L67)

___

### bindChunk

▸ **bindChunk**(`gl`, `shader`, `chunk`, `fixedChunkPosition`, `displayChunkDimensions`, `channelDimensions`, `newSource`): `void`

Called just before drawing each chunk, on the ChunkFormat .

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |
| `chunk` | [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md) |
| `fixedChunkPosition` | `Uint32Array` |
| `displayChunkDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |
| `newSource` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L60)

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
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |
| `numChannelDimensions` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L43)

___

### endDrawing

▸ **endDrawing**(`gl`, `shader`): `void`

Called once after all chunks have been drawn, on the ChunkFormat of the first source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L54)
