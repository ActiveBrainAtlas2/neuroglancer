[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ChunkTransformParameters

# Interface: ChunkTransformParameters

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ChunkTransformParameters

## Hierarchy

- [`ChunkChannelAccessParameters`](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md)

  ↳ **`ChunkTransformParameters`**

## Table of contents

### Properties

- [channelSpaceShape](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#channelspaceshape)
- [channelToChunkDimensionIndices](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#channeltochunkdimensionindices)
- [chunkChannelCoordinates](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#chunkchannelcoordinates)
- [chunkChannelDimensionIndices](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#chunkchanneldimensionindices)
- [chunkToLayerTransform](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#chunktolayertransform)
- [chunkToLayerTransformDet](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#chunktolayertransformdet)
- [combinedGlobalLocalRank](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#combinedgloballocalrank)
- [combinedGlobalLocalToChunkTransform](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#combinedgloballocaltochunktransform)
- [layerRank](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#layerrank)
- [layerToChunkTransform](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#layertochunktransform)
- [modelTransform](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#modeltransform)
- [numChannels](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md#numchannels)

## Properties

### channelSpaceShape

• **channelSpaceShape**: `Uint32Array`

#### Inherited from

[ChunkChannelAccessParameters](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md).[channelSpaceShape](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#channelspaceshape)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L309)

___

### channelToChunkDimensionIndices

• **channelToChunkDimensionIndices**: readonly `number`[]

Maps channel dimension indices in the layer channel coordinate space to the corresponding chunk
dimension index, or `-1` if there is no correpsonding chunk dimension.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L337)

___

### chunkChannelCoordinates

• **chunkChannelCoordinates**: `Uint32Array`

Row-major array of shape `[numChannels, chunkChannelDimensionIndices.length]`, specifies the
coordinates within the chunk channel dimensions corresponding to each flat channel index.

#### Inherited from

[ChunkChannelAccessParameters](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md).[chunkChannelCoordinates](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#chunkchannelcoordinates)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L325)

___

### chunkChannelDimensionIndices

• **chunkChannelDimensionIndices**: readonly `number`[]

Equal to the values in `channelToChunkDimensionIndices` not equal to `-1`.

#### Inherited from

[ChunkChannelAccessParameters](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md).[chunkChannelDimensionIndices](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#chunkchanneldimensionindices)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L314)

___

### chunkToLayerTransform

• **chunkToLayerTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L330)

___

### chunkToLayerTransformDet

• **chunkToLayerTransformDet**: `number`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L332)

___

### combinedGlobalLocalRank

• **combinedGlobalLocalRank**: `number`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L339)

___

### combinedGlobalLocalToChunkTransform

• **combinedGlobalLocalToChunkTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L338)

___

### layerRank

• **layerRank**: `number`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L340)

___

### layerToChunkTransform

• **layerToChunkTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L331)

___

### modelTransform

• **modelTransform**: [`RenderLayerTransform`](annotation_annotation_layer_state._internal_.RenderLayerTransform.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L329)

___

### numChannels

• **numChannels**: `number`

Product of `modelTransform.channelSpaceShape`.

#### Inherited from

[ChunkChannelAccessParameters](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md).[numChannels](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md#numchannels)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_coordinate_transform.ts#L319)
