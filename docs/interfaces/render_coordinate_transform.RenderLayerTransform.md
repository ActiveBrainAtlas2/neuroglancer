[neuroglancer](../README.md) / [Modules](../modules.md) / [render\_coordinate\_transform](../modules/render_coordinate_transform.md) / RenderLayerTransform

# Interface: RenderLayerTransform

[render_coordinate_transform](../modules/render_coordinate_transform.md).RenderLayerTransform

Specifies coordinate transform information for a RenderLayer.

## Table of contents

### Properties

- [channelSpaceShape](render_coordinate_transform.RenderLayerTransform.md#channelspaceshape)
- [channelToModelDimensions](render_coordinate_transform.RenderLayerTransform.md#channeltomodeldimensions)
- [channelToRenderLayerDimensions](render_coordinate_transform.RenderLayerTransform.md#channeltorenderlayerdimensions)
- [globalToRenderLayerDimensions](render_coordinate_transform.RenderLayerTransform.md#globaltorenderlayerdimensions)
- [layerDimensionNames](render_coordinate_transform.RenderLayerTransform.md#layerdimensionnames)
- [localToRenderLayerDimensions](render_coordinate_transform.RenderLayerTransform.md#localtorenderlayerdimensions)
- [modelDimensionNames](render_coordinate_transform.RenderLayerTransform.md#modeldimensionnames)
- [modelToRenderLayerTransform](render_coordinate_transform.RenderLayerTransform.md#modeltorenderlayertransform)
- [rank](render_coordinate_transform.RenderLayerTransform.md#rank)
- [unpaddedRank](render_coordinate_transform.RenderLayerTransform.md#unpaddedrank)

## Properties

### channelSpaceShape

• **channelSpaceShape**: `Uint32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L66)

___

### channelToModelDimensions

• **channelToModelDimensions**: readonly `number`[]

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L64)

___

### channelToRenderLayerDimensions

• **channelToRenderLayerDimensions**: readonly `number`[]

Specifies for each channel dimension the corresponding "render layer" dimension.  A value of
`-1` indicates there is no corresponding "render layer" dimension.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L62)

___

### globalToRenderLayerDimensions

• **globalToRenderLayerDimensions**: readonly `number`[]

Specifies for each global dimension the corresponding "render layer" dimension.  A value of
`-1` indicates there is no corresponding "render layer" dimension.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L56)

___

### layerDimensionNames

• **layerDimensionNames**: readonly `string`[]

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L74)

___

### localToRenderLayerDimensions

• **localToRenderLayerDimensions**: readonly `number`[]

Specifies for each local user layer dimension the corresponding "render layer" dimension.  A
value of `-1` indicates there is no corresponding "render layer" dimension.  The combined
values of `localToRenderLayerDimensions` and `globalToRenderLayerDimensions` that are not `-1`
must be distinct and partition `[0, ..., rank)`, where `rank` is the rank of the "model"
coordinate space.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L50)

___

### modelDimensionNames

• **modelDimensionNames**: readonly `string`[]

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L73)

___

### modelToRenderLayerTransform

• **modelToRenderLayerTransform**: `Float32Array`

Homogeneous transform from "model" coordinate space to "render layer" coordinate space.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L71)

___

### rank

• **rank**: `number`

Rank of chunk/model/layer subspace used by this RenderLayer, including any additional `[0,1)`
padding dimensions.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L36)

___

### unpaddedRank

• **unpaddedRank**: `number`

Rank of chunk/model/layer space, excluding any padding dimensions.

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_coordinate_transform.ts#L41)
