[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LayerSubsetSpecification

# Class: LayerSubsetSpecification

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LayerSubsetSpecification

Class for specifying a subset of a TopLevelLayerListsSpecification.

## Hierarchy

- [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

  ↳ **`LayerSubsetSpecification`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#changed)
- [disposedStacks](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#disposedstacks)
- [layerManager](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#layermanager)
- [master](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#master)
- [refCount](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#refcount)
- [wasDisposed](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#wasdisposed)

### Accessors

- [chunkManager](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#chunkmanager)
- [dataSourceProviderRegistry](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#datasourceproviderregistry)
- [layerSelectedValues](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#layerselectedvalues)
- [root](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#root)
- [rootLayers](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#rootlayers)
- [rpc](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#rpc)

### Methods

- [add](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#add)
- [addRef](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#registereventlistener)
- [reset](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#restorestate)
- [toJSON](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#tojson)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerSubsetSpecification**(`master`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `master` | [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md) |

#### Overrides

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[constructor](annotation_annotation_layer_state._internal_.LayerListSpecification.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1926](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1926)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Overrides

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[changed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1906)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[disposedStacks](annotation_annotation_layer_state._internal_.LayerListSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Overrides

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[layerManager](annotation_annotation_layer_state._internal_.LayerListSpecification.md#layermanager)

#### Defined in

[src/neuroglancer/layer.ts:1924](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1924)

___

### master

• **master**: [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[refCount](annotation_annotation_layer_state._internal_.LayerListSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[wasDisposed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Overrides

LayerListSpecification.chunkManager

#### Defined in

[src/neuroglancer/layer.ts:1913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1913)

___

### dataSourceProviderRegistry

• `get` **dataSourceProviderRegistry**(): [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

#### Returns

[`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

#### Overrides

LayerListSpecification.dataSourceProviderRegistry

#### Defined in

[src/neuroglancer/layer.ts:1910](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1910)

___

### layerSelectedValues

• `get` **layerSelectedValues**(): [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

#### Returns

[`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

#### Overrides

LayerListSpecification.layerSelectedValues

#### Defined in

[src/neuroglancer/layer.ts:1916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1916)

___

### root

• `get` **root**(): [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

#### Returns

[`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

#### Overrides

LayerListSpecification.root

#### Defined in

[src/neuroglancer/layer.ts:1920](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1920)

___

### rootLayers

• `get` **rootLayers**(): [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Returns

[`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Overrides

LayerListSpecification.rootLayers

#### Defined in

[src/neuroglancer/layer.ts:1974](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1974)

___

### rpc

• `get` **rpc**(): [`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Returns

[`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Overrides

LayerListSpecification.rpc

#### Defined in

[src/neuroglancer/layer.ts:1907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1907)

## Methods

### add

▸ **add**(`layer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Overrides

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[add](annotation_annotation_layer_state._internal_.LayerListSpecification.md#add)

#### Defined in

[src/neuroglancer/layer.ts:1966](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1966)

___

### addRef

▸ **addRef**(): [`LayerSubsetSpecification`](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md)

#### Returns

[`LayerSubsetSpecification`](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md)

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[addRef](annotation_annotation_layer_state._internal_.LayerListSpecification.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[dispose](annotation_annotation_layer_state._internal_.LayerListSpecification.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[disposed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:1935](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1935)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.LayerListSpecification.md#refcountreachedzero)

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

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[registerCancellable](annotation_annotation_layer_state._internal_.LayerListSpecification.md#registercancellable)

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

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[registerDisposer](annotation_annotation_layer_state._internal_.LayerListSpecification.md#registerdisposer)

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

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[registerEventListener](annotation_annotation_layer_state._internal_.LayerListSpecification.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1940](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1940)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1944](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1944)

___

### toJSON

▸ **toJSON**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/layer.ts:1962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1962)

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

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.LayerListSpecification.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
