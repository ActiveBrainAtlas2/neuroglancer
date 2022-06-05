[neuroglancer](../README.md) / [Modules](../modules.md) / [render\_coordinate\_transform](../modules/render_coordinate_transform.md) / ChunkChannelAccessParameters

# Interface: ChunkChannelAccessParameters

[render_coordinate_transform](../modules/render_coordinate_transform.md).ChunkChannelAccessParameters

## Hierarchy

- **`ChunkChannelAccessParameters`**

  ↳ [`ChunkTransformParameters`](render_coordinate_transform.ChunkTransformParameters.md)

## Table of contents

### Properties

- [channelSpaceShape](render_coordinate_transform.ChunkChannelAccessParameters.md#channelspaceshape)
- [chunkChannelCoordinates](render_coordinate_transform.ChunkChannelAccessParameters.md#chunkchannelcoordinates)
- [chunkChannelDimensionIndices](render_coordinate_transform.ChunkChannelAccessParameters.md#chunkchanneldimensionindices)
- [numChannels](render_coordinate_transform.ChunkChannelAccessParameters.md#numchannels)

## Properties

### channelSpaceShape

• **channelSpaceShape**: `Uint32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L309)

___

### chunkChannelCoordinates

• **chunkChannelCoordinates**: `Uint32Array`

Row-major array of shape `[numChannels, chunkChannelDimensionIndices.length]`, specifies the
coordinates within the chunk channel dimensions corresponding to each flat channel index.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L325)

___

### chunkChannelDimensionIndices

• **chunkChannelDimensionIndices**: readonly `number`[]

Equal to the values in `channelToChunkDimensionIndices` not equal to `-1`.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L314)

___

### numChannels

• **numChannels**: `number`

Product of `modelTransform.channelSpaceShape`.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L319)
