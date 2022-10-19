[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/uncompressed\_chunk\_format](../modules/sliceview_uncompressed_chunk_format.md) / UncompressedVolumeChunk

# Class: UncompressedVolumeChunk

[sliceview/uncompressed_chunk_format](../modules/sliceview_uncompressed_chunk_format.md).UncompressedVolumeChunk

## Hierarchy

- [`SingleTextureVolumeChunk`](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md)<`Uint8Array`, [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)\>

  ↳ **`UncompressedVolumeChunk`**

## Table of contents

### Constructors

- [constructor](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#constructor)

### Properties

- [CHUNK\_FORMAT\_TYPE](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#chunk_format_type)
- [chunkDataSize](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#chunkdatasize)
- [chunkGridPosition](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#chunkgridposition)
- [data](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#data)
- [source](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#source)
- [state](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#state)
- [texture](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#texture)
- [textureLayout](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#texturelayout)

### Accessors

- [chunkFormat](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#chunkformat)
- [gl](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#gl)

### Methods

- [copyToGPU](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#copytogpu)
- [freeGPUMemory](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#freegpumemory)
- [getValueAt](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#getvalueat)
- [setTextureData](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md#settexturedata)

## Constructors

### constructor

• **new UncompressedVolumeChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md) |
| `x` | `any` |

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[constructor](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L90)

## Properties

### CHUNK\_FORMAT\_TYPE

• **CHUNK\_FORMAT\_TYPE**: [`ChunkFormat`](sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Overrides

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[CHUNK_FORMAT_TYPE](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunk_format_type)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L191)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[chunkDataSize](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L228)

___

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](util_geom.vec3.md)

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[chunkGridPosition](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L489)

___

### data

• **data**: `Uint8Array`

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[data](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#data)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L86)

___

### source

• **source**: [`Source`](../interfaces/sliceview_uncompressed_chunk_format._internal_.Source.md)

#### Overrides

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[source](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L192)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[state](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture) = `null`

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[texture](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texture)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L85)

___

### textureLayout

• **textureLayout**: ``null`` \| [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[textureLayout](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texturelayout)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L87)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): `this`[``"CHUNK_FORMAT_TYPE"``]

#### Returns

`this`[``"CHUNK_FORMAT_TYPE"``]

#### Inherited from

SingleTextureVolumeChunk.chunkFormat

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L231)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

SingleTextureVolumeChunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[copyToGPU](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L97)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[freeGPUMemory](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L106)

___

### getValueAt

▸ **getValueAt**(`dataPosition`): `number` \| [`Uint64`](util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPosition` | `Uint32Array` |

#### Returns

`number` \| [`Uint64`](util_uint64.Uint64.md)

#### Overrides

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[getValueAt](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#getvalueat)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L209)

___

### setTextureData

▸ **setTextureData**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[SingleTextureVolumeChunk](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[setTextureData](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#settexturedata)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L194)
