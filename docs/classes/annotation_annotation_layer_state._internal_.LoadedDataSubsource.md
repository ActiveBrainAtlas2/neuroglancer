[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LoadedDataSubsource

# Class: LoadedDataSubsource

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LoadedDataSubsource

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#constructor)

### Properties

- [activated](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#activated)
- [enabled](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#enabled)
- [guardValues](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#guardvalues)
- [isActiveChanged](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#isactivechanged)
- [loadedDataSource](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#loadeddatasource)
- [messages](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#messages)
- [modelSubspaceDimensionIndices](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#modelsubspacedimensionindices)
- [subsourceEntry](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#subsourceentry)
- [subsourceIndex](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#subsourceindex)
- [subsourceSpec](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#subsourcespec)
- [subsourceToModelSubspaceTransform](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#subsourcetomodelsubspacetransform)

### Methods

- [activate](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#activate)
- [addRenderLayer](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#addrenderlayer)
- [deactivate](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#deactivate)
- [getRenderLayerTransform](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md#getrenderlayertransform)

## Constructors

### constructor

• **new LoadedDataSubsource**(`loadedDataSource`, `subsourceEntry`, `subsourceSpec`, `subsourceIndex`, `enableDefaultSubsources`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `loadedDataSource` | [`LoadedLayerDataSource`](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md) |
| `subsourceEntry` | [`DataSubsourceEntry`](../interfaces/datasource.DataSubsourceEntry.md) |
| `subsourceSpec` | `undefined` \| [`DataSubsourceSpecification`](../interfaces/datasource.DataSubsourceSpecification.md) |
| `subsourceIndex` | `number` |
| `enableDefaultSubsources` | `boolean` |

#### Defined in

[src/neuroglancer/layer_data_source.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L98)

## Properties

### activated

• **activated**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L94)

___

### enabled

• **enabled**: `boolean`

#### Defined in

[src/neuroglancer/layer_data_source.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L93)

___

### guardValues

• **guardValues**: `any`[] = `[]`

#### Defined in

[src/neuroglancer/layer_data_source.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L95)

___

### isActiveChanged

• **isActiveChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L97)

___

### loadedDataSource

• **loadedDataSource**: [`LoadedLayerDataSource`](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L96)

___

### modelSubspaceDimensionIndices

• **modelSubspaceDimensionIndices**: `number`[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L92)

___

### subsourceEntry

• **subsourceEntry**: [`DataSubsourceEntry`](../interfaces/datasource.DataSubsourceEntry.md)

___

### subsourceIndex

• **subsourceIndex**: `number`

___

### subsourceSpec

• **subsourceSpec**: `undefined` \| [`DataSubsourceSpecification`](../interfaces/datasource.DataSubsourceSpecification.md)

___

### subsourceToModelSubspaceTransform

• **subsourceToModelSubspaceTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/layer_data_source.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L91)

## Methods

### activate

▸ **activate**(`callback`, ...`guardValues`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`refCounted`: [`RefCounted`](util_disposable.RefCounted.md)) => `void` |
| `...guardValues` | `any`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L125)

___

### addRenderLayer

▸ **addRenderLayer**(`renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderLayer` | [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L147)

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

[src/neuroglancer/layer_data_source.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L137)

___

### getRenderLayerTransform

▸ **getRenderLayerTransform**(`channelCoordinateSpace?`): [`CachedWatchableValue`](annotation_annotation_layer_state._internal_.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelCoordinateSpace?` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |

#### Returns

[`CachedWatchableValue`](annotation_annotation_layer_state._internal_.CachedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/layer_data_source.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L153)
