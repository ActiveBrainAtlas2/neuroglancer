[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / VolumeChunk

# Class: VolumeChunk

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).VolumeChunk

## Hierarchy

- [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)

  ↳ **`VolumeChunk`**

  ↳↳ [`SingleTextureVolumeChunk`](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md)

## Table of contents

### Constructors

- [constructor](datasource._internal_.VolumeChunk.md#constructor)

### Properties

- [CHUNK\_FORMAT\_TYPE](datasource._internal_.VolumeChunk.md#chunk_format_type)
- [chunkDataSize](datasource._internal_.VolumeChunk.md#chunkdatasize)
- [chunkGridPosition](datasource._internal_.VolumeChunk.md#chunkgridposition)
- [source](datasource._internal_.VolumeChunk.md#source)
- [state](datasource._internal_.VolumeChunk.md#state)

### Accessors

- [chunkFormat](datasource._internal_.VolumeChunk.md#chunkformat)
- [gl](datasource._internal_.VolumeChunk.md#gl)

### Methods

- [copyToGPU](datasource._internal_.VolumeChunk.md#copytogpu)
- [freeGPUMemory](datasource._internal_.VolumeChunk.md#freegpumemory)
- [getValueAt](datasource._internal_.VolumeChunk.md#getvalueat)

## Constructors

### constructor

• **new VolumeChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md) |
| `x` | `any` |

#### Overrides

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[constructor](sliceview_frontend.SliceViewChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L235)

## Properties

### CHUNK\_FORMAT\_TYPE

• **CHUNK\_FORMAT\_TYPE**: [`ChunkFormat`](../interfaces/datasource._internal_.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L229)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L228)

___

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](util_geom.vec3.md)

#### Inherited from

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[chunkGridPosition](sliceview_frontend.SliceViewChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L489)

___

### source

• **source**: [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md)

#### Overrides

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[source](sliceview_frontend.SliceViewChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L227)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[state](sliceview_frontend.SliceViewChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): `this`[``"CHUNK_FORMAT_TYPE"``]

#### Returns

`this`[``"CHUNK_FORMAT_TYPE"``]

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L231)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

SliceViewChunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[copyToGPU](sliceview_frontend.SliceViewChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[freeGPUMemory](sliceview_frontend.SliceViewChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L44)

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

[src/neuroglancer/sliceview/volume/frontend.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L239)
