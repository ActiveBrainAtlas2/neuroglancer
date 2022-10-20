[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md) / VolumeChunk

# Class: VolumeChunk

[neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md).VolumeChunk

## Hierarchy

- [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md)

  ↳ **`VolumeChunk`**

  ↳↳ [`SingleTextureVolumeChunk`](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#constructor)

### Properties

- [CHUNK\_FORMAT\_TYPE](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#chunk_format_type)
- [chunkDataSize](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#chunkdatasize)
- [chunkGridPosition](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#chunkgridposition)
- [source](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#source)
- [state](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#state)

### Accessors

- [chunkFormat](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#chunkformat)
- [gl](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#freegpumemory)
- [getValueAt](neuroglancer_sliceview_volume_frontend.VolumeChunk.md#getvalueat)

## Constructors

### constructor

• **new VolumeChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md) |
| `x` | `any` |

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[constructor](neuroglancer_sliceview_frontend.SliceViewChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L235)

## Properties

### CHUNK\_FORMAT\_TYPE

• **CHUNK\_FORMAT\_TYPE**: [`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L229)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L228)

___

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[chunkGridPosition](neuroglancer_sliceview_frontend.SliceViewChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L489)

___

### source

• **source**: [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[source](neuroglancer_sliceview_frontend.SliceViewChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L227)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[state](neuroglancer_sliceview_frontend.SliceViewChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): `this`[``"CHUNK_FORMAT_TYPE"``]

#### Returns

`this`[``"CHUNK_FORMAT_TYPE"``]

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L231)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

SliceViewChunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[copyToGPU](neuroglancer_sliceview_frontend.SliceViewChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[freeGPUMemory](neuroglancer_sliceview_frontend.SliceViewChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L44)

___

### getValueAt

▸ `Abstract` **getValueAt**(`dataPosition`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPosition` | `Uint32Array` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L239)
