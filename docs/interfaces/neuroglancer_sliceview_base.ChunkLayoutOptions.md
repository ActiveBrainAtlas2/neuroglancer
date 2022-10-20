[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / ChunkLayoutOptions

# Interface: ChunkLayoutOptions

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).ChunkLayoutOptions

Specifies parameters for getChunkDataSizes.

## Hierarchy

- **`ChunkLayoutOptions`**

  ↳ [`VolumeChunkSpecificationGetDefaultsOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md)

## Table of contents

### Properties

- [chunkDataSizes](neuroglancer_sliceview_base.ChunkLayoutOptions.md#chunkdatasizes)
- [chunkLayoutPreference](neuroglancer_sliceview_base.ChunkLayoutOptions.md#chunklayoutpreference)

## Properties

### chunkDataSizes

• `Optional` **chunkDataSizes**: `Uint32Array`[]

Chunk sizes in voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L516)

___

### chunkLayoutPreference

• `Optional` **chunkLayoutPreference**: [`ChunkLayoutPreference`](../enums/neuroglancer_sliceview_base.ChunkLayoutPreference.md)

Preferred chunk layout, which determines chunk sizes to use if chunkDataSizes is not
specified.

#### Defined in

[src/neuroglancer/sliceview/base.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L522)
