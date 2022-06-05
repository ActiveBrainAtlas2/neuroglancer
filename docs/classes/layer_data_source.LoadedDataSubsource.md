[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_data\_source](../modules/layer_data_source.md) / LoadedDataSubsource

# Class: LoadedDataSubsource

[layer_data_source](../modules/layer_data_source.md).LoadedDataSubsource

## Table of contents

### Constructors

- [constructor](layer_data_source.LoadedDataSubsource.md#constructor)

### Properties

- [activated](layer_data_source.LoadedDataSubsource.md#activated)
- [enabled](layer_data_source.LoadedDataSubsource.md#enabled)
- [guardValues](layer_data_source.LoadedDataSubsource.md#guardvalues)
- [isActiveChanged](layer_data_source.LoadedDataSubsource.md#isactivechanged)
- [loadedDataSource](layer_data_source.LoadedDataSubsource.md#loadeddatasource)
- [messages](layer_data_source.LoadedDataSubsource.md#messages)
- [modelSubspaceDimensionIndices](layer_data_source.LoadedDataSubsource.md#modelsubspacedimensionindices)
- [subsourceEntry](layer_data_source.LoadedDataSubsource.md#subsourceentry)
- [subsourceIndex](layer_data_source.LoadedDataSubsource.md#subsourceindex)
- [subsourceSpec](layer_data_source.LoadedDataSubsource.md#subsourcespec)
- [subsourceToModelSubspaceTransform](layer_data_source.LoadedDataSubsource.md#subsourcetomodelsubspacetransform)

### Methods

- [activate](layer_data_source.LoadedDataSubsource.md#activate)
- [addRenderLayer](layer_data_source.LoadedDataSubsource.md#addrenderlayer)
- [deactivate](layer_data_source.LoadedDataSubsource.md#deactivate)
- [getRenderLayerTransform](layer_data_source.LoadedDataSubsource.md#getrenderlayertransform)

## Constructors

### constructor

• **new LoadedDataSubsource**(`loadedDataSource`, `subsourceEntry`, `subsourceSpec`, `subsourceIndex`, `enableDefaultSubsources`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `loadedDataSource` | [`LoadedLayerDataSource`](layer_data_source.LoadedLayerDataSource.md) |
| `subsourceEntry` | `DataSubsourceEntry` |
| `subsourceSpec` | `undefined` \| `DataSubsourceSpecification` |
| `subsourceIndex` | `number` |
| `enableDefaultSubsources` | `boolean` |

#### Defined in

[src/neuroglancer/layer_data_source.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L98)

## Properties

### activated

• **activated**: `undefined` \| `RefCounted` = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L94)

___

### enabled

• **enabled**: `boolean`

#### Defined in

[src/neuroglancer/layer_data_source.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L93)

___

### guardValues

• **guardValues**: `any`[] = `[]`

#### Defined in

[src/neuroglancer/layer_data_source.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L95)

___

### isActiveChanged

• **isActiveChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer_data_source.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L97)

___

### loadedDataSource

• **loadedDataSource**: [`LoadedLayerDataSource`](layer_data_source.LoadedLayerDataSource.md)

___

### messages

• **messages**: `MessageList`

#### Defined in

[src/neuroglancer/layer_data_source.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L96)

___

### modelSubspaceDimensionIndices

• **modelSubspaceDimensionIndices**: `number`[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L92)

___

### subsourceEntry

• **subsourceEntry**: `DataSubsourceEntry`

___

### subsourceIndex

• **subsourceIndex**: `number`

___

### subsourceSpec

• **subsourceSpec**: `undefined` \| `DataSubsourceSpecification`

___

### subsourceToModelSubspaceTransform

• **subsourceToModelSubspaceTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/layer_data_source.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L91)

## Methods

### activate

▸ **activate**(`callback`, ...`guardValues`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`refCounted`: `RefCounted`) => `void` |
| `...guardValues` | `any`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L125)

___

### addRenderLayer

▸ **addRenderLayer**(`renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderLayer` | [`RenderLayer`](renderlayer.RenderLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L147)

___

### deactivate

▸ **deactivate**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L137)

___

### getRenderLayerTransform

▸ **getRenderLayerTransform**(`channelCoordinateSpace?`): [`CachedWatchableValue`](trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/render_coordinate_transform.md#renderlayertransformorerror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelCoordinateSpace?` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |

#### Returns

[`CachedWatchableValue`](trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/layer_data_source.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L153)
