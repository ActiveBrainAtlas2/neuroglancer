[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerSubsetSpecification

# Class: LayerSubsetSpecification

[layer](../modules/layer.md).LayerSubsetSpecification

Class for specifying a subset of a TopLevelLayerListsSpecification.

## Hierarchy

- [`LayerListSpecification`](layer.LayerListSpecification.md)

  ↳ **`LayerSubsetSpecification`**

## Table of contents

### Constructors

- [constructor](layer.LayerSubsetSpecification.md#constructor)

### Properties

- [changed](layer.LayerSubsetSpecification.md#changed)
- [disposedStacks](layer.LayerSubsetSpecification.md#disposedstacks)
- [layerManager](layer.LayerSubsetSpecification.md#layermanager)
- [master](layer.LayerSubsetSpecification.md#master)
- [refCount](layer.LayerSubsetSpecification.md#refcount)
- [wasDisposed](layer.LayerSubsetSpecification.md#wasdisposed)

### Accessors

- [chunkManager](layer.LayerSubsetSpecification.md#chunkmanager)
- [dataSourceProviderRegistry](layer.LayerSubsetSpecification.md#datasourceproviderregistry)
- [layerSelectedValues](layer.LayerSubsetSpecification.md#layerselectedvalues)
- [root](layer.LayerSubsetSpecification.md#root)
- [rootLayers](layer.LayerSubsetSpecification.md#rootlayers)
- [rpc](layer.LayerSubsetSpecification.md#rpc)

### Methods

- [add](layer.LayerSubsetSpecification.md#add)
- [addRef](layer.LayerSubsetSpecification.md#addref)
- [dispose](layer.LayerSubsetSpecification.md#dispose)
- [disposed](layer.LayerSubsetSpecification.md#disposed)
- [refCountReachedZero](layer.LayerSubsetSpecification.md#refcountreachedzero)
- [registerCancellable](layer.LayerSubsetSpecification.md#registercancellable)
- [registerDisposer](layer.LayerSubsetSpecification.md#registerdisposer)
- [registerEventListener](layer.LayerSubsetSpecification.md#registereventlistener)
- [reset](layer.LayerSubsetSpecification.md#reset)
- [restoreState](layer.LayerSubsetSpecification.md#restorestate)
- [toJSON](layer.LayerSubsetSpecification.md#tojson)
- [unregisterDisposer](layer.LayerSubsetSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerSubsetSpecification**(`master`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `master` | [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md) |

#### Overrides

[LayerListSpecification](layer.LayerListSpecification.md).[constructor](layer.LayerListSpecification.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1926](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1926)

## Properties

### changed

• **changed**: `NullarySignal`

#### Overrides

[LayerListSpecification](layer.LayerListSpecification.md).[changed](layer.LayerListSpecification.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1906)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[disposedStacks](layer.LayerListSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

#### Overrides

[LayerListSpecification](layer.LayerListSpecification.md).[layerManager](layer.LayerListSpecification.md#layermanager)

#### Defined in

[src/neuroglancer/layer.ts:1924](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1924)

___

### master

• **master**: [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[refCount](layer.LayerListSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[wasDisposed](layer.LayerListSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkManager

• `get` **chunkManager**(): `ChunkManager`

#### Returns

`ChunkManager`

#### Overrides

LayerListSpecification.chunkManager

#### Defined in

[src/neuroglancer/layer.ts:1913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1913)

___

### dataSourceProviderRegistry

• `get` **dataSourceProviderRegistry**(): `DataSourceProviderRegistry`

#### Returns

`DataSourceProviderRegistry`

#### Overrides

LayerListSpecification.dataSourceProviderRegistry

#### Defined in

[src/neuroglancer/layer.ts:1910](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1910)

___

### layerSelectedValues

• `get` **layerSelectedValues**(): [`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Returns

[`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Overrides

LayerListSpecification.layerSelectedValues

#### Defined in

[src/neuroglancer/layer.ts:1916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1916)

___

### root

• `get` **root**(): [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

#### Returns

[`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

#### Overrides

LayerListSpecification.root

#### Defined in

[src/neuroglancer/layer.ts:1920](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1920)

___

### rootLayers

• `get` **rootLayers**(): [`LayerManager`](layer.LayerManager.md)

#### Returns

[`LayerManager`](layer.LayerManager.md)

#### Overrides

LayerListSpecification.rootLayers

#### Defined in

[src/neuroglancer/layer.ts:1974](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1974)

___

### rpc

• `get` **rpc**(): [`RPC`](worker_rpc.RPC.md)

#### Returns

[`RPC`](worker_rpc.RPC.md)

#### Overrides

LayerListSpecification.rpc

#### Defined in

[src/neuroglancer/layer.ts:1907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1907)

## Methods

### add

▸ **add**(`layer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Overrides

[LayerListSpecification](layer.LayerListSpecification.md).[add](layer.LayerListSpecification.md#add)

#### Defined in

[src/neuroglancer/layer.ts:1966](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1966)

___

### addRef

▸ **addRef**(): [`LayerSubsetSpecification`](layer.LayerSubsetSpecification.md)

#### Returns

[`LayerSubsetSpecification`](layer.LayerSubsetSpecification.md)

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[addRef](layer.LayerListSpecification.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[dispose](layer.LayerListSpecification.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[LayerListSpecification](layer.LayerListSpecification.md).[disposed](layer.LayerListSpecification.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:1935](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1935)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[refCountReachedZero](layer.LayerListSpecification.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

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

[LayerListSpecification](layer.LayerListSpecification.md).[registerCancellable](layer.LayerListSpecification.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

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

[LayerListSpecification](layer.LayerListSpecification.md).[registerDisposer](layer.LayerListSpecification.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

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

[LayerListSpecification](layer.LayerListSpecification.md).[registerEventListener](layer.LayerListSpecification.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1940](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1940)

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

[src/neuroglancer/layer.ts:1944](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1944)

___

### toJSON

▸ **toJSON**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/layer.ts:1962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1962)

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

[LayerListSpecification](layer.LayerListSpecification.md).[unregisterDisposer](layer.LayerListSpecification.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)
