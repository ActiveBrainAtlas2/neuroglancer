[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/single\_texture\_chunk\_format](../modules/sliceview_single_texture_chunk_format.md) / SingleTextureVolumeChunk

# Class: SingleTextureVolumeChunk<Data, TextureLayout\>

[sliceview/single_texture_chunk_format](../modules/sliceview_single_texture_chunk_format.md).SingleTextureVolumeChunk

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `Data` |
| `TextureLayout` | extends [`Disposable`](../interfaces/util_disposable.Disposable.md) |

## Hierarchy

- [`VolumeChunk`](datasource._internal_.VolumeChunk.md)

  ↳ **`SingleTextureVolumeChunk`**

  ↳↳ [`UncompressedVolumeChunk`](sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md)

## Table of contents

### Constructors

- [constructor](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#constructor)

### Properties

- [CHUNK\_FORMAT\_TYPE](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunk_format_type)
- [chunkDataSize](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkdatasize)
- [chunkGridPosition](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkgridposition)
- [data](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#data)
- [source](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#source)
- [state](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#state)
- [texture](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texture)
- [textureLayout](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#texturelayout)

### Accessors

- [chunkFormat](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#chunkformat)
- [gl](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#gl)

### Methods

- [copyToGPU](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#copytogpu)
- [freeGPUMemory](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#freegpumemory)
- [getValueAt](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#getvalueat)
- [setTextureData](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md#settexturedata)

## Constructors

### constructor

• **new SingleTextureVolumeChunk**<`Data`, `TextureLayout`\>(`source`, `x`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `Data` |
| `TextureLayout` | extends [`Disposable`](../interfaces/util_disposable.Disposable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md) |
| `x` | `any` |

#### Overrides

[VolumeChunk](datasource._internal_.VolumeChunk.md).[constructor](datasource._internal_.VolumeChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L90)

## Properties

### CHUNK\_FORMAT\_TYPE

• **CHUNK\_FORMAT\_TYPE**: [`SingleTextureChunkFormat`](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<`TextureLayout`\>

#### Overrides

[VolumeChunk](datasource._internal_.VolumeChunk.md).[CHUNK_FORMAT_TYPE](datasource._internal_.VolumeChunk.md#chunk_format_type)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L88)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Inherited from

[VolumeChunk](datasource._internal_.VolumeChunk.md).[chunkDataSize](datasource._internal_.VolumeChunk.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L228)

___

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](util_geom.vec3.md)

#### Inherited from

[VolumeChunk](datasource._internal_.VolumeChunk.md).[chunkGridPosition](datasource._internal_.VolumeChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L489)

___

### data

• **data**: `Data`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L86)

___

### source

• **source**: [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md)

#### Inherited from

[VolumeChunk](datasource._internal_.VolumeChunk.md).[source](datasource._internal_.VolumeChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L227)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[VolumeChunk](datasource._internal_.VolumeChunk.md).[state](datasource._internal_.VolumeChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture) = `null`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L85)

___

### textureLayout

• **textureLayout**: ``null`` \| `TextureLayout`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L87)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): `this`[``"CHUNK_FORMAT_TYPE"``]

#### Returns

`this`[``"CHUNK_FORMAT_TYPE"``]

#### Inherited from

VolumeChunk.chunkFormat

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L231)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

VolumeChunk.gl

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

#### Overrides

[VolumeChunk](datasource._internal_.VolumeChunk.md).[copyToGPU](datasource._internal_.VolumeChunk.md#copytogpu)

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

#### Overrides

[VolumeChunk](datasource._internal_.VolumeChunk.md).[freeGPUMemory](datasource._internal_.VolumeChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L106)

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

[VolumeChunk](datasource._internal_.VolumeChunk.md).[getValueAt](datasource._internal_.VolumeChunk.md#getvalueat)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L239)

___

### setTextureData

▸ `Abstract` **setTextureData**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L95)
