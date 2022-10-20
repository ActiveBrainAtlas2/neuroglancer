[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/single\_texture\_chunk\_format](../modules/neuroglancer_sliceview_single_texture_chunk_format.md) / SingleTextureVolumeChunk

# Class: SingleTextureVolumeChunk<Data, TextureLayout\>

[neuroglancer/sliceview/single_texture_chunk_format](../modules/neuroglancer_sliceview_single_texture_chunk_format.md).SingleTextureVolumeChunk

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `Data` |
| `TextureLayout` | extends [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md) |

## Hierarchy

- [`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

  ↳ **`SingleTextureVolumeChunk`**

  ↳↳ [`CompressedSegmentationVolumeChunk`](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md)

  ↳↳ [`UncompressedVolumeChunk`](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#constructor)

### Properties

- [CHUNK\_FORMAT\_TYPE](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunk_format_type)
- [chunkDataSize](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkdatasize)
- [chunkGridPosition](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkgridposition)
- [data](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#data)
- [source](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#source)
- [state](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#state)
- [texture](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texture)
- [textureLayout](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texturelayout)

### Accessors

- [chunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkformat)
- [gl](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#freegpumemory)
- [getValueAt](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#getvalueat)
- [setTextureData](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#settexturedata)

## Constructors

### constructor

• **new SingleTextureVolumeChunk**<`Data`, `TextureLayout`\>(`source`, `x`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `Data` |
| `TextureLayout` | extends [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md) |
| `x` | `any` |

#### Overrides

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[constructor](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L90)

## Properties

### CHUNK\_FORMAT\_TYPE

• **CHUNK\_FORMAT\_TYPE**: [`SingleTextureChunkFormat`](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<`TextureLayout`\>

#### Overrides

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[CHUNK_FORMAT_TYPE](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#chunk_format_type)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L88)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Inherited from

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[chunkDataSize](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L228)

___

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[chunkGridPosition](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L489)

___

### data

• **data**: `Data`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L86)

___

### source

• **source**: [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

#### Inherited from

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[source](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L227)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[state](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture) = `null`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L85)

___

### textureLayout

• **textureLayout**: ``null`` \| `TextureLayout`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L87)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): `this`[``"CHUNK_FORMAT_TYPE"``]

#### Returns

`this`[``"CHUNK_FORMAT_TYPE"``]

#### Inherited from

VolumeChunk.chunkFormat

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L231)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

VolumeChunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[copyToGPU](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L97)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[freeGPUMemory](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L106)

___

### getValueAt

▸ `Abstract` **getValueAt**(`dataPosition`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPosition` | `Uint32Array` |

#### Returns

`any`

#### Inherited from

[VolumeChunk](neuroglancer_sliceview_volume_frontend.VolumeChunk.md).[getValueAt](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#getvalueat)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L239)

___

### setTextureData

▸ `Abstract` **setTextureData**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L95)
