[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_data\_source](../modules/layer_data_source.md) / LoadedLayerDataSource

# Class: LoadedLayerDataSource

[layer_data_source](../modules/layer_data_source.md).LoadedLayerDataSource

## Hierarchy

- `RefCounted`

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
| `dataSource` | `DataSource` |
| `spec` | `DataSourceSpecification` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_data_source.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L176)

## Properties

### activatedSubsourcesChanged

• **activatedSubsourcesChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer_data_source.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L165)

___

### dataSource

• **dataSource**: `DataSource`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### enableDefaultSubsources

• **enableDefaultSubsources**: `boolean`

#### Defined in

[src/neuroglancer/layer_data_source.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L169)

___

### enabledSubsourcesChanged

• **enabledSubsourcesChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer_data_source.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L164)

___

### error

• **error**: `undefined` = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L163)

___

### layerDataSource

• **layerDataSource**: [`LayerDataSource`](layer_data_source.LayerDataSource.md)

___

### messages

• **messages**: `MessageList`

#### Defined in

[src/neuroglancer/layer_data_source.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L166)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### subsources

• **subsources**: [`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L168)

___

### transform

• **transform**: [`WatchableCoordinateSpaceTransform`](coordinate_transform.WatchableCoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### enabledSubsources

• `get` **enabledSubsources**(): [`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md)[]

#### Returns

[`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md)[]

#### Defined in

[src/neuroglancer/layer_data_source.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L170)

___

### layer

• `get` **layer**(): [`UserLayer`](layer.UserLayer.md)

#### Returns

[`UserLayer`](layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L173)

## Methods

### addRef

▸ **addRef**(): [`LoadedLayerDataSource`](layer_data_source.LoadedLayerDataSource.md)

#### Returns

[`LoadedLayerDataSource`](layer_data_source.LoadedLayerDataSource.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer_data_source.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_data_source.ts#L200)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)
