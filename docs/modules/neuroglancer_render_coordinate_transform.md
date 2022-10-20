[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/render\_coordinate\_transform

# Module: neuroglancer/render\_coordinate\_transform

## Table of contents

### Interfaces

- [ChannelSpace](../interfaces/neuroglancer_render_coordinate_transform.ChannelSpace.md)
- [ChunkChannelAccessParameters](../interfaces/neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md)
- [ChunkDisplayTransformParameters](../interfaces/neuroglancer_render_coordinate_transform.ChunkDisplayTransformParameters.md)
- [ChunkTransformParameters](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)
- [LayerDisplayDimensionMapping](../interfaces/neuroglancer_render_coordinate_transform.LayerDisplayDimensionMapping.md)
- [RenderLayerTransform](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md)

### Type Aliases

- [RenderLayerTransformOrError](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)
- [WatchableRenderLayerTransform](neuroglancer_render_coordinate_transform.md#watchablerenderlayertransform)

### Variables

- [zeroRankChannelSpace](neuroglancer_render_coordinate_transform.md#zerorankchannelspace)

### Functions

- [chunkToDisplayCoordinates](neuroglancer_render_coordinate_transform.md#chunktodisplaycoordinates)
- [displayToLayerCoordinates](neuroglancer_render_coordinate_transform.md#displaytolayercoordinates)
- [get3dModelToDisplaySpaceMatrix](neuroglancer_render_coordinate_transform.md#get3dmodeltodisplayspacematrix)
- [getChannelSpace](neuroglancer_render_coordinate_transform.md#getchannelspace)
- [getChunkDisplayTransformParameters](neuroglancer_render_coordinate_transform.md#getchunkdisplaytransformparameters)
- [getChunkPositionFromCombinedGlobalLocalPositions](neuroglancer_render_coordinate_transform.md#getchunkpositionfromcombinedgloballocalpositions)
- [getChunkTransformParameters](neuroglancer_render_coordinate_transform.md#getchunktransformparameters)
- [getLayerDisplayDimensionMapping](neuroglancer_render_coordinate_transform.md#getlayerdisplaydimensionmapping)
- [getLayerPositionFromCombinedGlobalLocalPositions](neuroglancer_render_coordinate_transform.md#getlayerpositionfromcombinedgloballocalpositions)
- [getRenderLayerTransform](neuroglancer_render_coordinate_transform.md#getrenderlayertransform)
- [getWatchableRenderLayerTransform](neuroglancer_render_coordinate_transform.md#getwatchablerenderlayertransform)
- [layerToDisplayCoordinates](neuroglancer_render_coordinate_transform.md#layertodisplaycoordinates)
- [renderLayerTransformsEqual](neuroglancer_render_coordinate_transform.md#renderlayertransformsequal)

## Type Aliases

### RenderLayerTransformOrError

Ƭ **RenderLayerTransformOrError**: [`ValueOrError`](neuroglancer_util_error.md#valueorerror)<[`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md)\>

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L118)

___

### WatchableRenderLayerTransform

Ƭ **WatchableRenderLayerTransform**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L119)

## Variables

### zeroRankChannelSpace

• `Const` **zeroRankChannelSpace**: [`ChannelSpace`](../interfaces/neuroglancer_render_coordinate_transform.ChannelSpace.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L88)

## Functions

### chunkToDisplayCoordinates

▸ **chunkToDisplayCoordinates**(`displayPosition`, `chunkPosition`, `chunkTransform`, `displayDimensionIndices`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayPosition` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `chunkPosition` | `Float32Array` |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L375)

___

### displayToLayerCoordinates

▸ **displayToLayerCoordinates**(`layerPosition`, `displayPosition`, `modelTransform`, `displayDimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerPosition` | `Float32Array` |
| `displayPosition` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L360)

___

### get3dModelToDisplaySpaceMatrix

▸ **get3dModelToDisplaySpaceMatrix**(`out`, `displayDimensionRenderInfo`, `transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |
| `displayDimensionRenderInfo` | [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md) |
| `transform` | [`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L641)

___

### getChannelSpace

▸ **getChannelSpace**(`channelCoordinateSpace`): [`ChannelSpace`](../interfaces/neuroglancer_render_coordinate_transform.ChannelSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelCoordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |

#### Returns

[`ChannelSpace`](../interfaces/neuroglancer_render_coordinate_transform.ChannelSpace.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L95)

___

### getChunkDisplayTransformParameters

▸ **getChunkDisplayTransformParameters**(`chunkTransform`, `layerDisplayDimensionMapping`): [`ChunkDisplayTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkDisplayTransformParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md) |
| `layerDisplayDimensionMapping` | [`LayerDisplayDimensionMapping`](../interfaces/neuroglancer_render_coordinate_transform.LayerDisplayDimensionMapping.md) |

#### Returns

[`ChunkDisplayTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkDisplayTransformParameters.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L548)

___

### getChunkPositionFromCombinedGlobalLocalPositions

▸ **getChunkPositionFromCombinedGlobalLocalPositions**(`chunkPosition`, `globalPosition`, `localPosition`, `layerRank`, `combinedGlobalLocalToChunkTransform`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkPosition` | `Float32Array` |
| `globalPosition` | `Float32Array` |
| `localPosition` | `Float32Array` |
| `layerRank` | `number` |
| `combinedGlobalLocalToChunkTransform` | `Float32Array` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:601](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L601)

___

### getChunkTransformParameters

▸ **getChunkTransformParameters**(`modelTransform`, `chunkToModelTransform?`): [`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md) |
| `chunkToModelTransform?` | `Float32Array` |

#### Returns

[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L407)

___

### getLayerDisplayDimensionMapping

▸ **getLayerDisplayDimensionMapping**(`transform`, `displayDimensionIndices`): [`LayerDisplayDimensionMapping`](../interfaces/neuroglancer_render_coordinate_transform.LayerDisplayDimensionMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

[`LayerDisplayDimensionMapping`](../interfaces/neuroglancer_render_coordinate_transform.LayerDisplayDimensionMapping.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L522)

___

### getLayerPositionFromCombinedGlobalLocalPositions

▸ **getLayerPositionFromCombinedGlobalLocalPositions**(`layerPosition`, `globalPosition`, `localPosition`, `modelTransform`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerPosition` | `Float32Array` |
| `globalPosition` | `Float32Array` |
| `localPosition` | `Float32Array` |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md) |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:633](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L633)

___

### getRenderLayerTransform

▸ **getRenderLayerTransform**(`globalCoordinateSpace`, `localCoordinateSpace`, `modelToLayerTransform`, `subsourceEntry`, `channelCoordinateSpace?`): [`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `globalCoordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) | `undefined` |
| `localCoordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) | `undefined` |
| `modelToLayerTransform` | [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md) | `undefined` |
| `subsourceEntry` | `undefined` \| { `modelSubspaceDimensionIndices`: readonly `number`[] ; `subsourceToModelSubspaceTransform`: `Float32Array`  } | `undefined` |
| `channelCoordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) | `emptyValidCoordinateSpace` |

#### Returns

[`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L140)

___

### getWatchableRenderLayerTransform

▸ **getWatchableRenderLayerTransform**(`globalCoordinateSpace`, `localCoordinateSpace`, `modelToLayerTransform`, `subsourceEntry`, `channelCoordinateSpace?`): [`CachedWatchableValue`](../classes/neuroglancer_trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalCoordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |
| `localCoordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |
| `modelToLayerTransform` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md)\> |
| `subsourceEntry` | `undefined` \| { `modelSubspaceDimensionIndices`: readonly `number`[] ; `subsourceToModelSubspaceTransform`: `Float32Array`  } |
| `channelCoordinateSpace?` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |

#### Returns

[`CachedWatchableValue`](../classes/neuroglancer_trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L270)

___

### layerToDisplayCoordinates

▸ **layerToDisplayCoordinates**(`displayPosition`, `layerPosition`, `modelTransform`, `displayDimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayPosition` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `layerPosition` | `Float32Array` |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L343)

___

### renderLayerTransformsEqual

▸ **renderLayerTransformsEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror) |
| `b` | [`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_coordinate_transform.ts#L256)
