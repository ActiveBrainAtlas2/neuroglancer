[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_data\_source](../modules/neuroglancer_layer_data_source.md) / LoadedDataSubsource

# Class: LoadedDataSubsource

[neuroglancer/layer_data_source](../modules/neuroglancer_layer_data_source.md).LoadedDataSubsource

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_data_source.LoadedDataSubsource.md#constructor)

### Properties

- [activated](neuroglancer_layer_data_source.LoadedDataSubsource.md#activated)
- [enabled](neuroglancer_layer_data_source.LoadedDataSubsource.md#enabled)
- [guardValues](neuroglancer_layer_data_source.LoadedDataSubsource.md#guardvalues)
- [isActiveChanged](neuroglancer_layer_data_source.LoadedDataSubsource.md#isactivechanged)
- [loadedDataSource](neuroglancer_layer_data_source.LoadedDataSubsource.md#loadeddatasource)
- [messages](neuroglancer_layer_data_source.LoadedDataSubsource.md#messages)
- [modelSubspaceDimensionIndices](neuroglancer_layer_data_source.LoadedDataSubsource.md#modelsubspacedimensionindices)
- [subsourceEntry](neuroglancer_layer_data_source.LoadedDataSubsource.md#subsourceentry)
- [subsourceIndex](neuroglancer_layer_data_source.LoadedDataSubsource.md#subsourceindex)
- [subsourceSpec](neuroglancer_layer_data_source.LoadedDataSubsource.md#subsourcespec)
- [subsourceToModelSubspaceTransform](neuroglancer_layer_data_source.LoadedDataSubsource.md#subsourcetomodelsubspacetransform)

### Methods

- [activate](neuroglancer_layer_data_source.LoadedDataSubsource.md#activate)
- [addRenderLayer](neuroglancer_layer_data_source.LoadedDataSubsource.md#addrenderlayer)
- [deactivate](neuroglancer_layer_data_source.LoadedDataSubsource.md#deactivate)
- [getRenderLayerTransform](neuroglancer_layer_data_source.LoadedDataSubsource.md#getrenderlayertransform)

## Constructors

### constructor

• **new LoadedDataSubsource**(`loadedDataSource`, `subsourceEntry`, `subsourceSpec`, `subsourceIndex`, `enableDefaultSubsources`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `loadedDataSource` | [`LoadedLayerDataSource`](neuroglancer_layer_data_source.LoadedLayerDataSource.md) |
| `subsourceEntry` | [`DataSubsourceEntry`](../interfaces/neuroglancer_datasource.DataSubsourceEntry.md) |
| `subsourceSpec` | `undefined` \| [`DataSubsourceSpecification`](../interfaces/neuroglancer_datasource.DataSubsourceSpecification.md) |
| `subsourceIndex` | `number` |
| `enableDefaultSubsources` | `boolean` |

#### Defined in

[src/neuroglancer/layer_data_source.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L98)

## Properties

### activated

• **activated**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L94)

___

### enabled

• **enabled**: `boolean`

#### Defined in

[src/neuroglancer/layer_data_source.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L93)

___

### guardValues

• **guardValues**: `any`[] = `[]`

#### Defined in

[src/neuroglancer/layer_data_source.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L95)

___

### isActiveChanged

• **isActiveChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L97)

___

### loadedDataSource

• **loadedDataSource**: [`LoadedLayerDataSource`](neuroglancer_layer_data_source.LoadedLayerDataSource.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L99)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L96)

___

### modelSubspaceDimensionIndices

• **modelSubspaceDimensionIndices**: `number`[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L92)

___

### subsourceEntry

• **subsourceEntry**: [`DataSubsourceEntry`](../interfaces/neuroglancer_datasource.DataSubsourceEntry.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L99)

___

### subsourceIndex

• **subsourceIndex**: `number`

#### Defined in

[src/neuroglancer/layer_data_source.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L100)

___

### subsourceSpec

• **subsourceSpec**: `undefined` \| [`DataSubsourceSpecification`](../interfaces/neuroglancer_datasource.DataSubsourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L100)

___

### subsourceToModelSubspaceTransform

• **subsourceToModelSubspaceTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/layer_data_source.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L91)

## Methods

### activate

▸ **activate**(`callback`, ...`guardValues`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`refCounted`: [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)) => `void` |
| `...guardValues` | `any`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L125)

___

### addRenderLayer

▸ **addRenderLayer**(`renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderLayer` | [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L147)

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

[src/neuroglancer/layer_data_source.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L137)

___

### getRenderLayerTransform

▸ **getRenderLayerTransform**(`channelCoordinateSpace?`): [`CachedWatchableValue`](neuroglancer_trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelCoordinateSpace?` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |

#### Returns

[`CachedWatchableValue`](neuroglancer_trackable_value.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/layer_data_source.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L153)
