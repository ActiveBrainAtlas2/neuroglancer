[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_data\_source](../modules/layer_data_source.md) / LoadedLayerDataSource

# Class: LoadedLayerDataSource

[layer_data_source](../modules/layer_data_source.md).LoadedLayerDataSource

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`LoadedLayerDataSource`**

## Table of contents

### Constructors

- [constructor](layer_data_source.LoadedLayerDataSource.md#constructor)

### Properties

- [activatedSubsourcesChanged](layer_data_source.LoadedLayerDataSource.md#activatedsubsourceschanged)
- [dataSource](layer_data_source.LoadedLayerDataSource.md#datasource)
- [disposedStacks](layer_data_source.LoadedLayerDataSource.md#disposedstacks)
- [enableDefaultSubsources](layer_data_source.LoadedLayerDataSource.md#enabledefaultsubsources)
- [enabledSubsourcesChanged](layer_data_source.LoadedLayerDataSource.md#enabledsubsourceschanged)
- [error](layer_data_source.LoadedLayerDataSource.md#error)
- [layerDataSource](layer_data_source.LoadedLayerDataSource.md#layerdatasource)
- [messages](layer_data_source.LoadedLayerDataSource.md#messages)
- [refCount](layer_data_source.LoadedLayerDataSource.md#refcount)
- [subsources](layer_data_source.LoadedLayerDataSource.md#subsources)
- [transform](layer_data_source.LoadedLayerDataSource.md#transform)
- [wasDisposed](layer_data_source.LoadedLayerDataSource.md#wasdisposed)

### Accessors

- [enabledSubsources](layer_data_source.LoadedLayerDataSource.md#enabledsubsources)
- [layer](layer_data_source.LoadedLayerDataSource.md#layer)

### Methods

- [addRef](layer_data_source.LoadedLayerDataSource.md#addref)
- [dispose](layer_data_source.LoadedLayerDataSource.md#dispose)
- [disposed](layer_data_source.LoadedLayerDataSource.md#disposed)
- [refCountReachedZero](layer_data_source.LoadedLayerDataSource.md#refcountreachedzero)
- [registerCancellable](layer_data_source.LoadedLayerDataSource.md#registercancellable)
- [registerDisposer](layer_data_source.LoadedLayerDataSource.md#registerdisposer)
- [registerEventListener](layer_data_source.LoadedLayerDataSource.md#registereventlistener)
- [unregisterDisposer](layer_data_source.LoadedLayerDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new LoadedLayerDataSource**(`layerDataSource`, `dataSource`, `spec`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerDataSource` | [`LayerDataSource`](layer_data_source.LayerDataSource.md) |
| `dataSource` | [`DataSource`](../interfaces/layer._internal_.DataSource.md) |
| `spec` | [`DataSourceSpecification`](../interfaces/image_user_layer._internal_.DataSourceSpecification.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_data_source.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L176)

## Properties

### activatedSubsourcesChanged

• **activatedSubsourcesChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L165)

___

### dataSource

• **dataSource**: [`DataSource`](../interfaces/layer._internal_.DataSource.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### enableDefaultSubsources

• **enableDefaultSubsources**: `boolean`

#### Defined in

[src/neuroglancer/layer_data_source.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L169)

___

### enabledSubsourcesChanged

• **enabledSubsourcesChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L164)

___

### error

• **error**: `undefined` = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L163)

___

### layerDataSource

• **layerDataSource**: [`LayerDataSource`](layer_data_source.LayerDataSource.md)

___

### messages

• **messages**: [`MessageList`](data_panel_layout._internal_.MessageList.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L166)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### subsources

• **subsources**: [`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L168)

___

### transform

• **transform**: [`WatchableCoordinateSpaceTransform`](coordinate_transform.WatchableCoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### enabledSubsources

• `get` **enabledSubsources**(): [`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md)[]

#### Returns

[`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L170)

___

### layer

• `get` **layer**(): [`UserLayer`](layer.UserLayer.md)

#### Returns

[`UserLayer`](layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L173)

## Methods

### addRef

▸ **addRef**(): [`LoadedLayerDataSource`](layer_data_source.LoadedLayerDataSource.md)

#### Returns

[`LoadedLayerDataSource`](layer_data_source.LoadedLayerDataSource.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_data_source.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L200)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
