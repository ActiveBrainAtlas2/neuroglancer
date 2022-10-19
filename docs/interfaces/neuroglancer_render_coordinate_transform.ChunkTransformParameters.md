[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/render\_coordinate\_transform](../modules/neuroglancer_render_coordinate_transform.md) / ChunkTransformParameters

# Interface: ChunkTransformParameters

[neuroglancer/render_coordinate_transform](../modules/neuroglancer_render_coordinate_transform.md).ChunkTransformParameters

## Hierarchy

- [`ChunkChannelAccessParameters`](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md)

  ↳ **`ChunkTransformParameters`**

## Table of contents

### Properties

- [channelSpaceShape](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#channelspaceshape)
- [channelToChunkDimensionIndices](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#channeltochunkdimensionindices)
- [chunkChannelCoordinates](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#chunkchannelcoordinates)
- [chunkChannelDimensionIndices](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#chunkchanneldimensionindices)
- [chunkToLayerTransform](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#chunktolayertransform)
- [chunkToLayerTransformDet](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#chunktolayertransformdet)
- [combinedGlobalLocalRank](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#combinedgloballocalrank)
- [combinedGlobalLocalToChunkTransform](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#combinedgloballocaltochunktransform)
- [layerRank](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#layerrank)
- [layerToChunkTransform](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#layertochunktransform)
- [modelTransform](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#modeltransform)
- [numChannels](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md#numchannels)

## Properties

### channelSpaceShape

• **channelSpaceShape**: `Uint32Array`

#### Inherited from

[ChunkChannelAccessParameters](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md).[channelSpaceShape](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md#channelspaceshape)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L309)

___

### channelToChunkDimensionIndices

• **channelToChunkDimensionIndices**: readonly `number`[]

Maps channel dimension indices in the layer channel coordinate space to the corresponding chunk
dimension index, or `-1` if there is no correpsonding chunk dimension.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L337)

___

### chunkChannelCoordinates

• **chunkChannelCoordinates**: `Uint32Array`

Row-major array of shape `[numChannels, chunkChannelDimensionIndices.length]`, specifies the
coordinates within the chunk channel dimensions corresponding to each flat channel index.

#### Inherited from

[ChunkChannelAccessParameters](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md).[chunkChannelCoordinates](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md#chunkchannelcoordinates)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L325)

___

### chunkChannelDimensionIndices

• **chunkChannelDimensionIndices**: readonly `number`[]

Equal to the values in `channelToChunkDimensionIndices` not equal to `-1`.

#### Inherited from

[ChunkChannelAccessParameters](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md).[chunkChannelDimensionIndices](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md#chunkchanneldimensionindices)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L314)

___

### chunkToLayerTransform

• **chunkToLayerTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L330)

___

### chunkToLayerTransformDet

• **chunkToLayerTransformDet**: `number`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L332)

___

### combinedGlobalLocalRank

• **combinedGlobalLocalRank**: `number`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L339)

___

### combinedGlobalLocalToChunkTransform

• **combinedGlobalLocalToChunkTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L338)

___

### layerRank

• **layerRank**: `number`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L340)

___

### layerToChunkTransform

• **layerToChunkTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L331)

___

### modelTransform

• **modelTransform**: [`RenderLayerTransform`](neuroglancer_render_coordinate_transform.RenderLayerTransform.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L329)

___

### numChannels

• **numChannels**: `number`

Product of `modelTransform.channelSpaceShape`.

#### Inherited from

[ChunkChannelAccessParameters](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md).[numChannels](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md#numchannels)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_coordinate_transform.ts#L319)
