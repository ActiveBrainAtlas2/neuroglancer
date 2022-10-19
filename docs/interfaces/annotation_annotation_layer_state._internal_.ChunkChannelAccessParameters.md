[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ChunkChannelAccessParameters

# Interface: ChunkChannelAccessParameters

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ChunkChannelAccessParameters

## Hierarchy

- **`ChunkChannelAccessParameters`**

  ↳ [`ChunkTransformParameters`](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)

## Table of contents

### Properties

- [channelSpaceShape](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#channelspaceshape)
- [chunkChannelCoordinates](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#chunkchannelcoordinates)
- [chunkChannelDimensionIndices](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#chunkchanneldimensionindices)
- [numChannels](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#numchannels)

## Properties

### channelSpaceShape

• **channelSpaceShape**: `Uint32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L309)

___

### chunkChannelCoordinates

• **chunkChannelCoordinates**: `Uint32Array`

Row-major array of shape `[numChannels, chunkChannelDimensionIndices.length]`, specifies the
coordinates within the chunk channel dimensions corresponding to each flat channel index.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L325)

___

### chunkChannelDimensionIndices

• **chunkChannelDimensionIndices**: readonly `number`[]

Equal to the values in `channelToChunkDimensionIndices` not equal to `-1`.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L314)

___

### numChannels

• **numChannels**: `number`

Product of `modelTransform.channelSpaceShape`.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L319)
