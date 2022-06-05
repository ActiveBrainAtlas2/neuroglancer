[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerListSpecification

# Class: LayerListSpecification

[layer](../modules/layer.md).LayerListSpecification

## Hierarchy

- `RefCounted`

  ↳ **`LayerListSpecification`**

  ↳↳ [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

  ↳↳ [`LayerSubsetSpecification`](layer.LayerSubsetSpecification.md)

## Table of contents

### Constructors

- [constructor](layer.LayerListSpecification.md#constructor)

### Properties

- [changed](layer.LayerListSpecification.md#changed)
- [chunkManager](layer.LayerListSpecification.md#chunkmanager)
- [dataSourceProviderRegistry](layer.LayerListSpecification.md#datasourceproviderregistry)
- [disposedStacks](layer.LayerListSpecification.md#disposedstacks)
- [layerManager](layer.LayerListSpecification.md#layermanager)
- [layerSelectedValues](layer.LayerListSpecification.md#layerselectedvalues)
- [refCount](layer.LayerListSpecification.md#refcount)
- [root](layer.LayerListSpecification.md#root)
- [rootLayers](layer.LayerListSpecification.md#rootlayers)
- [rpc](layer.LayerListSpecification.md#rpc)
- [wasDisposed](layer.LayerListSpecification.md#wasdisposed)

### Methods

- [add](layer.LayerListSpecification.md#add)
- [addRef](layer.LayerListSpecification.md#addref)
- [dispose](layer.LayerListSpecification.md#dispose)
- [disposed](layer.LayerListSpecification.md#disposed)
- [refCountReachedZero](layer.LayerListSpecification.md#refcountreachedzero)
- [registerCancellable](layer.LayerListSpecification.md#registercancellable)
- [registerDisposer](layer.LayerListSpecification.md#registerdisposer)
- [registerEventListener](layer.LayerListSpecification.md#registereventlistener)
- [unregisterDisposer](layer.LayerListSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerListSpecification**()

#### Inherited from

RefCounted.constructor

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:1776](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1776)

___

### chunkManager

• `Abstract` **chunkManager**: `ChunkManager`

#### Defined in

[src/neuroglancer/layer.ts:1782](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1782)

___

### dataSourceProviderRegistry

• `Abstract` **dataSourceProviderRegistry**: `DataSourceProviderRegistry`

#### Defined in

[src/neuroglancer/layer.ts:1780](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1780)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• `Abstract` **layerManager**: [`LayerManager`](layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1781](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1781)

___

### layerSelectedValues

• `Abstract` **layerSelectedValues**: [`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/layer.ts:1783](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1783)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` `Abstract` **root**: [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer.ts:1785](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1785)

___

### rootLayers

• `Abstract` **rootLayers**: [`LayerManager`](layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1789](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1789)

___

### rpc

• `Abstract` **rpc**: [`RPC`](worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/layer.ts:1778](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1778)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Methods

### add

▸ `Abstract` **add**(`layer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1787](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1787)

___

### addRef

▸ **addRef**(): [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](layer.LayerListSpecification.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L85)
