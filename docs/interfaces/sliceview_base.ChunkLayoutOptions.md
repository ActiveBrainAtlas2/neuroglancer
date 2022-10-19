[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / ChunkLayoutOptions

# Interface: ChunkLayoutOptions

[sliceview/base](../modules/sliceview_base.md).ChunkLayoutOptions

Specifies parameters for getChunkDataSizes.

## Table of contents

### Properties

- [chunkDataSizes](sliceview_base.ChunkLayoutOptions.md#chunkdatasizes)
- [chunkLayoutPreference](sliceview_base.ChunkLayoutOptions.md#chunklayoutpreference)

## Properties

### chunkDataSizes

• `Optional` **chunkDataSizes**: `Uint32Array`[]

Chunk sizes in voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L516)

___

### chunkLayoutPreference

• `Optional` **chunkLayoutPreference**: [`ChunkLayoutPreference`](../enums/sliceview_base.ChunkLayoutPreference.md)

Preferred chunk layout, which determines chunk sizes to use if chunkDataSizes is not
specified.

#### Defined in

[src/neuroglancer/sliceview/base.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L522)
