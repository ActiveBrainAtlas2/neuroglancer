[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewSingleResolutionSource

# Interface: SliceViewSingleResolutionSource<Source\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewSingleResolutionSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md) = [`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md) |

## Table of contents

### Properties

- [chunkSource](data_panel_layout._internal_.SliceViewSingleResolutionSource.md#chunksource)
- [chunkToMultiscaleTransform](data_panel_layout._internal_.SliceViewSingleResolutionSource.md#chunktomultiscaletransform)
- [lowerClipBound](data_panel_layout._internal_.SliceViewSingleResolutionSource.md#lowerclipbound)
- [upperClipBound](data_panel_layout._internal_.SliceViewSingleResolutionSource.md#upperclipbound)

## Properties

### chunkSource

• **chunkSource**: `Source`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:571](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L571)

___

### chunkToMultiscaleTransform

• **chunkToMultiscaleTransform**: `Float32Array`

(rank + 1)*(rank + 1) homogeneous transformation matrix from the "chunk" coordinate space to
the MultiscaleSliceViewChunkSource space.

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:577](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L577)

___

### lowerClipBound

• `Optional` **lowerClipBound**: `Float32Array`

Lower clipping bound in voxels within the "chunk" coordinate space.  If not specified, defaults
to `chunkSource.spec.lowerVoxelBound`.  Non-integer values are supported.

Both lowerClipBound and upperClipBound are applied during rendering but do not affect which
chunks/voxels are actually retrieved.  That is determined by lowerVoxelBound and
upperVoxelBound of `chunkSource.spec`.

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:587](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L587)

___

### upperClipBound

• `Optional` **upperClipBound**: `Float32Array`

Upper clipping bound in voxels within the "chunk" coordinate space.  If not specified, defaults
to `chunkSource.spec.upperVoxelBound`.

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:593](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L593)
