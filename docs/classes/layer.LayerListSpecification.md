[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerListSpecification

# Class: LayerListSpecification

[layer](../modules/layer.md).LayerListSpecification

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:1780](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1780)

___

### chunkManager

• `Abstract` **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1786](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1786)

___

### dataSourceProviderRegistry

• `Abstract` **dataSourceProviderRegistry**: [`DataSourceProviderRegistry`](layer._internal_.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/layer.ts:1784](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1784)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• `Abstract` **layerManager**: [`LayerManager`](layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1785](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1785)

___

### layerSelectedValues

• `Abstract` **layerSelectedValues**: [`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/layer.ts:1787](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1787)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` `Abstract` **root**: [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer.ts:1789](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1789)

___

### rootLayers

• `Abstract` **rootLayers**: [`LayerManager`](layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1793)

___

### rpc

• `Abstract` **rpc**: [`RPC`](worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/layer.ts:1782](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1782)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

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

[src/neuroglancer/layer.ts:1791](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1791)

___

### addRef

▸ **addRef**(): [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](layer.LayerListSpecification.md)

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

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

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
