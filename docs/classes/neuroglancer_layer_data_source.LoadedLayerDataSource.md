[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_data\_source](../modules/neuroglancer_layer_data_source.md) / LoadedLayerDataSource

# Class: LoadedLayerDataSource

[neuroglancer/layer_data_source](../modules/neuroglancer_layer_data_source.md).LoadedLayerDataSource

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LoadedLayerDataSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_data_source.LoadedLayerDataSource.md#constructor)

### Properties

- [activatedSubsourcesChanged](neuroglancer_layer_data_source.LoadedLayerDataSource.md#activatedsubsourceschanged)
- [dataSource](neuroglancer_layer_data_source.LoadedLayerDataSource.md#datasource)
- [disposedStacks](neuroglancer_layer_data_source.LoadedLayerDataSource.md#disposedstacks)
- [enableDefaultSubsources](neuroglancer_layer_data_source.LoadedLayerDataSource.md#enabledefaultsubsources)
- [enabledSubsourcesChanged](neuroglancer_layer_data_source.LoadedLayerDataSource.md#enabledsubsourceschanged)
- [error](neuroglancer_layer_data_source.LoadedLayerDataSource.md#error)
- [layerDataSource](neuroglancer_layer_data_source.LoadedLayerDataSource.md#layerdatasource)
- [messages](neuroglancer_layer_data_source.LoadedLayerDataSource.md#messages)
- [refCount](neuroglancer_layer_data_source.LoadedLayerDataSource.md#refcount)
- [subsources](neuroglancer_layer_data_source.LoadedLayerDataSource.md#subsources)
- [transform](neuroglancer_layer_data_source.LoadedLayerDataSource.md#transform)
- [wasDisposed](neuroglancer_layer_data_source.LoadedLayerDataSource.md#wasdisposed)

### Accessors

- [enabledSubsources](neuroglancer_layer_data_source.LoadedLayerDataSource.md#enabledsubsources)
- [layer](neuroglancer_layer_data_source.LoadedLayerDataSource.md#layer)

### Methods

- [addRef](neuroglancer_layer_data_source.LoadedLayerDataSource.md#addref)
- [dispose](neuroglancer_layer_data_source.LoadedLayerDataSource.md#dispose)
- [disposed](neuroglancer_layer_data_source.LoadedLayerDataSource.md#disposed)
- [refCountReachedZero](neuroglancer_layer_data_source.LoadedLayerDataSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer_data_source.LoadedLayerDataSource.md#registercancellable)
- [registerDisposer](neuroglancer_layer_data_source.LoadedLayerDataSource.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_data_source.LoadedLayerDataSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_layer_data_source.LoadedLayerDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new LoadedLayerDataSource**(`layerDataSource`, `dataSource`, `spec`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerDataSource` | [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md) |
| `dataSource` | [`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md) |
| `spec` | [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_data_source.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L176)

## Properties

### activatedSubsourcesChanged

• **activatedSubsourcesChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L165)

___

### dataSource

• **dataSource**: [`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### enableDefaultSubsources

• **enableDefaultSubsources**: `boolean`

#### Defined in

[src/neuroglancer/layer_data_source.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L169)

___

### enabledSubsourcesChanged

• **enabledSubsourcesChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L164)

___

### error

• **error**: `undefined` = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L163)

___

### layerDataSource

• **layerDataSource**: [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L166)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### subsources

• **subsources**: [`LoadedDataSubsource`](neuroglancer_layer_data_source.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L168)

___

### transform

• **transform**: [`WatchableCoordinateSpaceTransform`](neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### enabledSubsources

• `get` **enabledSubsources**(): [`LoadedDataSubsource`](neuroglancer_layer_data_source.LoadedDataSubsource.md)[]

#### Returns

[`LoadedDataSubsource`](neuroglancer_layer_data_source.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L170)

___

### layer

• `get` **layer**(): [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Returns

[`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L173)

## Methods

### addRef

▸ **addRef**(): [`LoadedLayerDataSource`](neuroglancer_layer_data_source.LoadedLayerDataSource.md)

#### Returns

[`LoadedLayerDataSource`](neuroglancer_layer_data_source.LoadedLayerDataSource.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_data_source.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L200)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
