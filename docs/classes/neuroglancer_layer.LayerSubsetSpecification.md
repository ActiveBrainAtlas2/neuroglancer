[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / LayerSubsetSpecification

# Class: LayerSubsetSpecification

[neuroglancer/layer](../modules/neuroglancer_layer.md).LayerSubsetSpecification

Class for specifying a subset of a TopLevelLayerListsSpecification.

## Hierarchy

- [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

  ↳ **`LayerSubsetSpecification`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.LayerSubsetSpecification.md#constructor)

### Properties

- [changed](neuroglancer_layer.LayerSubsetSpecification.md#changed)
- [disposedStacks](neuroglancer_layer.LayerSubsetSpecification.md#disposedstacks)
- [layerManager](neuroglancer_layer.LayerSubsetSpecification.md#layermanager)
- [master](neuroglancer_layer.LayerSubsetSpecification.md#master)
- [refCount](neuroglancer_layer.LayerSubsetSpecification.md#refcount)
- [wasDisposed](neuroglancer_layer.LayerSubsetSpecification.md#wasdisposed)

### Accessors

- [chunkManager](neuroglancer_layer.LayerSubsetSpecification.md#chunkmanager)
- [dataSourceProviderRegistry](neuroglancer_layer.LayerSubsetSpecification.md#datasourceproviderregistry)
- [layerSelectedValues](neuroglancer_layer.LayerSubsetSpecification.md#layerselectedvalues)
- [root](neuroglancer_layer.LayerSubsetSpecification.md#root)
- [rootLayers](neuroglancer_layer.LayerSubsetSpecification.md#rootlayers)
- [rpc](neuroglancer_layer.LayerSubsetSpecification.md#rpc)

### Methods

- [add](neuroglancer_layer.LayerSubsetSpecification.md#add)
- [addRef](neuroglancer_layer.LayerSubsetSpecification.md#addref)
- [dispose](neuroglancer_layer.LayerSubsetSpecification.md#dispose)
- [disposed](neuroglancer_layer.LayerSubsetSpecification.md#disposed)
- [refCountReachedZero](neuroglancer_layer.LayerSubsetSpecification.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.LayerSubsetSpecification.md#registercancellable)
- [registerDisposer](neuroglancer_layer.LayerSubsetSpecification.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.LayerSubsetSpecification.md#registereventlistener)
- [reset](neuroglancer_layer.LayerSubsetSpecification.md#reset)
- [restoreState](neuroglancer_layer.LayerSubsetSpecification.md#restorestate)
- [toJSON](neuroglancer_layer.LayerSubsetSpecification.md#tojson)
- [unregisterDisposer](neuroglancer_layer.LayerSubsetSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerSubsetSpecification**(`master`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `master` | [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md) |

#### Overrides

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[constructor](neuroglancer_layer.LayerListSpecification.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1926](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1926)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Overrides

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[changed](neuroglancer_layer.LayerListSpecification.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1906)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[disposedStacks](neuroglancer_layer.LayerListSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Overrides

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[layerManager](neuroglancer_layer.LayerListSpecification.md#layermanager)

#### Defined in

[src/neuroglancer/layer.ts:1924](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1924)

___

### master

• **master**: [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[refCount](neuroglancer_layer.LayerListSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[wasDisposed](neuroglancer_layer.LayerListSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Overrides

LayerListSpecification.chunkManager

#### Defined in

[src/neuroglancer/layer.ts:1913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1913)

___

### dataSourceProviderRegistry

• `get` **dataSourceProviderRegistry**(): [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Returns

[`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Overrides

LayerListSpecification.dataSourceProviderRegistry

#### Defined in

[src/neuroglancer/layer.ts:1910](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1910)

___

### layerSelectedValues

• `get` **layerSelectedValues**(): [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Returns

[`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Overrides

LayerListSpecification.layerSelectedValues

#### Defined in

[src/neuroglancer/layer.ts:1916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1916)

___

### root

• `get` **root**(): [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

#### Returns

[`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

#### Overrides

LayerListSpecification.root

#### Defined in

[src/neuroglancer/layer.ts:1920](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1920)

___

### rootLayers

• `get` **rootLayers**(): [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Returns

[`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Overrides

LayerListSpecification.rootLayers

#### Defined in

[src/neuroglancer/layer.ts:1974](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1974)

___

### rpc

• `get` **rpc**(): [`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Returns

[`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Overrides

LayerListSpecification.rpc

#### Defined in

[src/neuroglancer/layer.ts:1907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1907)

## Methods

### add

▸ **add**(`layer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Overrides

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[add](neuroglancer_layer.LayerListSpecification.md#add)

#### Defined in

[src/neuroglancer/layer.ts:1966](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1966)

___

### addRef

▸ **addRef**(): [`LayerSubsetSpecification`](neuroglancer_layer.LayerSubsetSpecification.md)

#### Returns

[`LayerSubsetSpecification`](neuroglancer_layer.LayerSubsetSpecification.md)

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[addRef](neuroglancer_layer.LayerListSpecification.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[dispose](neuroglancer_layer.LayerListSpecification.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[disposed](neuroglancer_layer.LayerListSpecification.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:1935](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1935)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[refCountReachedZero](neuroglancer_layer.LayerListSpecification.md#refcountreachedzero)

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

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[registerCancellable](neuroglancer_layer.LayerListSpecification.md#registercancellable)

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

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[registerDisposer](neuroglancer_layer.LayerListSpecification.md#registerdisposer)

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

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[registerEventListener](neuroglancer_layer.LayerListSpecification.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1940](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1940)

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

[src/neuroglancer/layer.ts:1944](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1944)

___

### toJSON

▸ **toJSON**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/layer.ts:1962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1962)

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

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[unregisterDisposer](neuroglancer_layer.LayerListSpecification.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
