[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/compressed\_segmentation/chunk\_format](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format.md) / CompressedSegmentationVolumeChunk

# Class: CompressedSegmentationVolumeChunk

[neuroglancer/sliceview/compressed_segmentation/chunk_format](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format.md).CompressedSegmentationVolumeChunk

## Hierarchy

- [`SingleTextureVolumeChunk`](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md)<`Uint32Array`, [`TextureLayout`](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md)\>

  ↳ **`CompressedSegmentationVolumeChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#constructor)

### Properties

- [CHUNK\_FORMAT\_TYPE](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#chunk_format_type)
- [chunkDataSize](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#chunkdatasize)
- [chunkGridPosition](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#chunkgridposition)
- [data](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#data)
- [source](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#source)
- [state](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#state)
- [texture](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#texture)
- [textureLayout](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#texturelayout)

### Accessors

- [chunkFormat](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#chunkformat)
- [gl](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#freegpumemory)
- [getValueAt](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#getvalueat)
- [setTextureData](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md#settexturedata)

## Constructors

### constructor

• **new CompressedSegmentationVolumeChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md) |
| `x` | `any` |

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[constructor](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L90)

## Properties

### CHUNK\_FORMAT\_TYPE

• **CHUNK\_FORMAT\_TYPE**: [`ChunkFormat`](neuroglancer_sliceview_compressed_segmentation_chunk_format.ChunkFormat.md)

#### Overrides

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[CHUNK_FORMAT_TYPE](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunk_format_type)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L217)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[chunkDataSize](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L228)

___

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[chunkGridPosition](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L489)

___

### data

• **data**: `Uint32Array`

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[data](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#data)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L86)

___

### source

• **source**: [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[source](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L227)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[state](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture) = `null`

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[texture](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texture)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L85)

___

### textureLayout

• **textureLayout**: ``null`` \| [`TextureLayout`](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md)

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[textureLayout](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texturelayout)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L87)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): `this`[``"CHUNK_FORMAT_TYPE"``]

#### Returns

`this`[``"CHUNK_FORMAT_TYPE"``]

#### Inherited from

SingleTextureVolumeChunk.chunkFormat

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L231)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

SingleTextureVolumeChunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[copyToGPU](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L97)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[freeGPUMemory](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L106)

___

### getValueAt

▸ **getValueAt**(`dataPosition`): `number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPosition` | `Uint32Array` |

#### Returns

`number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Overrides

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[getValueAt](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#getvalueat)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L226)

___

### setTextureData

▸ **setTextureData**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[SingleTextureVolumeChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md).[setTextureData](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#settexturedata)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L219)
