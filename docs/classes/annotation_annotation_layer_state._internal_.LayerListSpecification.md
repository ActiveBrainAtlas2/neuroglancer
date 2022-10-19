[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LayerListSpecification

# Class: LayerListSpecification

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LayerListSpecification

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LayerListSpecification`**

  ↳↳ [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

  ↳↳ [`LayerSubsetSpecification`](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md)

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LayerListSpecification.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#changed)
- [chunkManager](annotation_annotation_layer_state._internal_.LayerListSpecification.md#chunkmanager)
- [dataSourceProviderRegistry](annotation_annotation_layer_state._internal_.LayerListSpecification.md#datasourceproviderregistry)
- [disposedStacks](annotation_annotation_layer_state._internal_.LayerListSpecification.md#disposedstacks)
- [layerManager](annotation_annotation_layer_state._internal_.LayerListSpecification.md#layermanager)
- [layerSelectedValues](annotation_annotation_layer_state._internal_.LayerListSpecification.md#layerselectedvalues)
- [refCount](annotation_annotation_layer_state._internal_.LayerListSpecification.md#refcount)
- [root](annotation_annotation_layer_state._internal_.LayerListSpecification.md#root)
- [rootLayers](annotation_annotation_layer_state._internal_.LayerListSpecification.md#rootlayers)
- [rpc](annotation_annotation_layer_state._internal_.LayerListSpecification.md#rpc)
- [wasDisposed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#wasdisposed)

### Methods

- [add](annotation_annotation_layer_state._internal_.LayerListSpecification.md#add)
- [addRef](annotation_annotation_layer_state._internal_.LayerListSpecification.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.LayerListSpecification.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.LayerListSpecification.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.LayerListSpecification.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.LayerListSpecification.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.LayerListSpecification.md#registereventlistener)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.LayerListSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerListSpecification**()

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:1780](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1780)

___

### chunkManager

• `Abstract` **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1786](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1786)

___

### dataSourceProviderRegistry

• `Abstract` **dataSourceProviderRegistry**: [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/layer.ts:1784](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1784)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• `Abstract` **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1785](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1785)

___

### layerSelectedValues

• `Abstract` **layerSelectedValues**: [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/layer.ts:1787](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1787)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` `Abstract` **root**: [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer.ts:1789](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1789)

___

### rootLayers

• `Abstract` **rootLayers**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1793)

___

### rpc

• `Abstract` **rpc**: [`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Defined in

[src/neuroglancer/layer.ts:1782](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1782)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### add

▸ `Abstract` **add**(`layer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1791](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1791)

___

### addRef

▸ **addRef**(): [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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
