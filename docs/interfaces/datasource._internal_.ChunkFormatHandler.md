[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / ChunkFormatHandler

# Interface: ChunkFormatHandler

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).ChunkFormatHandler

## Hierarchy

- [`Disposable`](util_disposable.Disposable.md)

  ↳ **`ChunkFormatHandler`**

## Implemented by

- [`UncompressedChunkFormatHandler`](../classes/sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

## Table of contents

### Properties

- [chunkFormat](datasource._internal_.ChunkFormatHandler.md#chunkformat)

### Methods

- [dispose](datasource._internal_.ChunkFormatHandler.md#dispose)
- [getChunk](datasource._internal_.ChunkFormatHandler.md#getchunk)

## Properties

### chunkFormat

• **chunkFormat**: [`ChunkFormat`](datasource._internal_.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L126)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Disposable](util_disposable.Disposable.md).[dispose](util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L17)

___

### getChunk

▸ **getChunk**(`source`, `x`): [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\> |
| `x` | `any` |

#### Returns

[`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L127)
