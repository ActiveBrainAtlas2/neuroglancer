[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LoadedLayerDataSource

# Class: LoadedLayerDataSource

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LoadedLayerDataSource

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LoadedLayerDataSource`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#constructor)

### Properties

- [activatedSubsourcesChanged](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#activatedsubsourceschanged)
- [dataSource](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#datasource)
- [disposedStacks](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#disposedstacks)
- [enableDefaultSubsources](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#enabledefaultsubsources)
- [enabledSubsourcesChanged](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#enabledsubsourceschanged)
- [error](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#error)
- [layerDataSource](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#layerdatasource)
- [messages](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#messages)
- [refCount](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#refcount)
- [subsources](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#subsources)
- [transform](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#transform)
- [wasDisposed](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#wasdisposed)

### Accessors

- [enabledSubsources](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#enabledsubsources)
- [layer](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#layer)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#registereventlistener)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new LoadedLayerDataSource**(`layerDataSource`, `dataSource`, `spec`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerDataSource` | [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md) |
| `dataSource` | [`DataSource`](../interfaces/datasource.DataSource.md) |
| `spec` | [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_data_source.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L176)

## Properties

### activatedSubsourcesChanged

• **activatedSubsourcesChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L165)

___

### dataSource

• **dataSource**: [`DataSource`](../interfaces/datasource.DataSource.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### enableDefaultSubsources

• **enableDefaultSubsources**: `boolean`

#### Defined in

[src/neuroglancer/layer_data_source.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L169)

___

### enabledSubsourcesChanged

• **enabledSubsourcesChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L164)

___

### error

• **error**: `undefined` = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L163)

___

### layerDataSource

• **layerDataSource**: [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L166)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### subsources

• **subsources**: [`LoadedDataSubsource`](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L168)

___

### transform

• **transform**: [`WatchableCoordinateSpaceTransform`](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### enabledSubsources

• `get` **enabledSubsources**(): [`LoadedDataSubsource`](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md)[]

#### Returns

[`LoadedDataSubsource`](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L170)

___

### layer

• `get` **layer**(): [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Returns

[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L173)

## Methods

### addRef

▸ **addRef**(): [`LoadedLayerDataSource`](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md)

#### Returns

[`LoadedLayerDataSource`](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_data_source.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L200)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
