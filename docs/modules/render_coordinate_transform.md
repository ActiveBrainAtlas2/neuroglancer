[neuroglancer](../README.md) / [Modules](../modules.md) / render\_coordinate\_transform

# Module: render\_coordinate\_transform

## Table of contents

### Interfaces

- [ChannelSpace](../interfaces/render_coordinate_transform.ChannelSpace.md)
- [ChunkChannelAccessParameters](../interfaces/render_coordinate_transform.ChunkChannelAccessParameters.md)
- [ChunkDisplayTransformParameters](../interfaces/render_coordinate_transform.ChunkDisplayTransformParameters.md)
- [ChunkTransformParameters](../interfaces/render_coordinate_transform.ChunkTransformParameters.md)
- [LayerDisplayDimensionMapping](../interfaces/render_coordinate_transform.LayerDisplayDimensionMapping.md)
- [RenderLayerTransform](../interfaces/render_coordinate_transform.RenderLayerTransform.md)

### Type Aliases

- [RenderLayerTransformOrError](render_coordinate_transform.md#renderlayertransformorerror)
- [WatchableRenderLayerTransform](render_coordinate_transform.md#watchablerenderlayertransform)

### Variables

- [zeroRankChannelSpace](render_coordinate_transform.md#zerorankchannelspace)

### Functions

- [chunkToDisplayCoordinates](render_coordinate_transform.md#chunktodisplaycoordinates)
- [displayToLayerCoordinates](render_coordinate_transform.md#displaytolayercoordinates)
- [get3dModelToDisplaySpaceMatrix](render_coordinate_transform.md#get3dmodeltodisplayspacematrix)
- [getChannelSpace](render_coordinate_transform.md#getchannelspace)
- [getChunkDisplayTransformParameters](render_coordinate_transform.md#getchunkdisplaytransformparameters)
- [getChunkPositionFromCombinedGlobalLocalPositions](render_coordinate_transform.md#getchunkpositionfromcombinedgloballocalpositions)
- [getChunkTransformParameters](render_coordinate_transform.md#getchunktransformparameters)
- [getLayerDisplayDimensionMapping](render_coordinate_transform.md#getlayerdisplaydimensionmapping)
- [getLayerPositionFromCombinedGlobalLocalPositions](render_coordinate_transform.md#getlayerpositionfromcombinedgloballocalpositions)
- [getRenderLayerTransform](render_coordinate_transform.md#getrenderlayertransform)
- [getWatchableRenderLayerTransform](render_coordinate_transform.md#getwatchablerenderlayertransform)
- [layerToDisplayCoordinates](render_coordinate_transform.md#layertodisplaycoordinates)
- [renderLayerTransformsEqual](render_coordinate_transform.md#renderlayertransformsequal)

## Type Aliases

### RenderLayerTransformOrError

Ƭ **RenderLayerTransformOrError**: `ValueOrError`<[`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md)\>

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L118)

___

### WatchableRenderLayerTransform

Ƭ **WatchableRenderLayerTransform**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L119)

## Variables

### zeroRankChannelSpace

• `Const` **zeroRankChannelSpace**: [`ChannelSpace`](../interfaces/render_coordinate_transform.ChannelSpace.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L88)

## Functions

### chunkToDisplayCoordinates

▸ **chunkToDisplayCoordinates**(`displayPosition`, `chunkPosition`, `chunkTransform`, `displayDimensionIndices`): `vec3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayPosition` | `vec3` |
| `chunkPosition` | `Float32Array` |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/render_coordinate_transform.ChunkTransformParameters.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`vec3`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L375)

___

### displayToLayerCoordinates

▸ **displayToLayerCoordinates**(`layerPosition`, `displayPosition`, `modelTransform`, `displayDimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerPosition` | `Float32Array` |
| `displayPosition` | `vec3` |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L360)

___

### get3dModelToDisplaySpaceMatrix

▸ **get3dModelToDisplaySpaceMatrix**(`out`, `displayDimensionRenderInfo`, `transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `mat4` |
| `displayDimensionRenderInfo` | [`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md) |
| `transform` | [`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L641)

___

### getChannelSpace

▸ **getChannelSpace**(`channelCoordinateSpace`): [`ChannelSpace`](../interfaces/render_coordinate_transform.ChannelSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelCoordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |

#### Returns

[`ChannelSpace`](../interfaces/render_coordinate_transform.ChannelSpace.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L95)

___

### getChunkDisplayTransformParameters

▸ **getChunkDisplayTransformParameters**(`chunkTransform`, `layerDisplayDimensionMapping`): [`ChunkDisplayTransformParameters`](../interfaces/render_coordinate_transform.ChunkDisplayTransformParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/render_coordinate_transform.ChunkTransformParameters.md) |
| `layerDisplayDimensionMapping` | [`LayerDisplayDimensionMapping`](../interfaces/render_coordinate_transform.LayerDisplayDimensionMapping.md) |

#### Returns

[`ChunkDisplayTransformParameters`](../interfaces/render_coordinate_transform.ChunkDisplayTransformParameters.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L548)

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

[src/neuroglancer/render_coordinate_transform.ts:601](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L601)

___

### getChunkTransformParameters

▸ **getChunkTransformParameters**(`modelTransform`, `chunkToModelTransform?`): [`ChunkTransformParameters`](../interfaces/render_coordinate_transform.ChunkTransformParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md) |
| `chunkToModelTransform?` | `Float32Array` |

#### Returns

[`ChunkTransformParameters`](../interfaces/render_coordinate_transform.ChunkTransformParameters.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L407)

___

### getLayerDisplayDimensionMapping

▸ **getLayerDisplayDimensionMapping**(`transform`, `displayDimensionIndices`): [`LayerDisplayDimensionMapping`](../interfaces/render_coordinate_transform.LayerDisplayDimensionMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

[`LayerDisplayDimensionMapping`](../interfaces/render_coordinate_transform.LayerDisplayDimensionMapping.md)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L522)

___

### getLayerPositionFromCombinedGlobalLocalPositions

▸ **getLayerPositionFromCombinedGlobalLocalPositions**(`layerPosition`, `globalPosition`, `localPosition`, `modelTransform`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerPosition` | `Float32Array` |
| `globalPosition` | `Float32Array` |
| `localPosition` | `Float32Array` |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md) |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:633](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L633)

___

### getRenderLayerTransform

▸ **getRenderLayerTransform**(`globalCoordinateSpace`, `localCoordinateSpace`, `modelToLayerTransform`, `subsourceEntry`, `channelCoordinateSpace?`): [`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `globalCoordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) | `undefined` |
| `localCoordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) | `undefined` |
| `modelToLayerTransform` | [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) | `undefined` |
| `subsourceEntry` | `undefined` \| { `modelSubspaceDimensionIndices`: readonly `number`[] ; `subsourceToModelSubspaceTransform`: `Float32Array`  } | `undefined` |
| `channelCoordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) | `emptyValidCoordinateSpace` |

#### Returns

[`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror)

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L140)

___

### getWatchableRenderLayerTransform

▸ **getWatchableRenderLayerTransform**(`globalCoordinateSpace`, `localCoordinateSpace`, `modelToLayerTransform`, `subsourceEntry`, `channelCoordinateSpace?`): [`CachedWatchableValue`](../classes/trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalCoordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |
| `localCoordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |
| `modelToLayerTransform` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)\> |
| `subsourceEntry` | `undefined` \| { `modelSubspaceDimensionIndices`: readonly `number`[] ; `subsourceToModelSubspaceTransform`: `Float32Array`  } |
| `channelCoordinateSpace?` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`undefined` \| [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |

#### Returns

[`CachedWatchableValue`](../classes/trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L270)

___

### layerToDisplayCoordinates

▸ **layerToDisplayCoordinates**(`displayPosition`, `layerPosition`, `modelTransform`, `displayDimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayPosition` | `vec3` |
| `layerPosition` | `Float32Array` |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md) |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L343)

___

### renderLayerTransformsEqual

▸ **renderLayerTransformsEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror) |
| `b` | [`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/render_coordinate_transform.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/render_coordinate_transform.ts#L256)
