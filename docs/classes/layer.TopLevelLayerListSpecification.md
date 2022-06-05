[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / TopLevelLayerListSpecification

# Class: TopLevelLayerListSpecification

[layer](../modules/layer.md).TopLevelLayerListSpecification

## Hierarchy

- [`LayerListSpecification`](layer.LayerListSpecification.md)

  ↳ **`TopLevelLayerListSpecification`**

## Table of contents

### Constructors

- [constructor](layer.TopLevelLayerListSpecification.md#constructor)

### Properties

- [changed](layer.TopLevelLayerListSpecification.md#changed)
- [chunkManager](layer.TopLevelLayerListSpecification.md#chunkmanager)
- [coordinateSpace](layer.TopLevelLayerListSpecification.md#coordinatespace)
- [coordinateSpaceCombiner](layer.TopLevelLayerListSpecification.md#coordinatespacecombiner)
- [dataSourceProviderRegistry](layer.TopLevelLayerListSpecification.md#datasourceproviderregistry)
- [display](layer.TopLevelLayerListSpecification.md#display)
- [disposedStacks](layer.TopLevelLayerListSpecification.md#disposedstacks)
- [globalPosition](layer.TopLevelLayerListSpecification.md#globalposition)
- [layerManager](layer.TopLevelLayerListSpecification.md#layermanager)
- [layerSelectedValues](layer.TopLevelLayerListSpecification.md#layerselectedvalues)
- [refCount](layer.TopLevelLayerListSpecification.md#refcount)
- [selectedLayer](layer.TopLevelLayerListSpecification.md#selectedlayer)
- [selectionState](layer.TopLevelLayerListSpecification.md#selectionstate)
- [subsets](layer.TopLevelLayerListSpecification.md#subsets)
- [toolBinder](layer.TopLevelLayerListSpecification.md#toolbinder)
- [wasDisposed](layer.TopLevelLayerListSpecification.md#wasdisposed)

### Accessors

- [root](layer.TopLevelLayerListSpecification.md#root)
- [rootLayers](layer.TopLevelLayerListSpecification.md#rootlayers)
- [rpc](layer.TopLevelLayerListSpecification.md#rpc)

### Methods

- [add](layer.TopLevelLayerListSpecification.md#add)
- [addRef](layer.TopLevelLayerListSpecification.md#addref)
- [dispose](layer.TopLevelLayerListSpecification.md#dispose)
- [disposed](layer.TopLevelLayerListSpecification.md#disposed)
- [refCountReachedZero](layer.TopLevelLayerListSpecification.md#refcountreachedzero)
- [registerCancellable](layer.TopLevelLayerListSpecification.md#registercancellable)
- [registerDisposer](layer.TopLevelLayerListSpecification.md#registerdisposer)
- [registerEventListener](layer.TopLevelLayerListSpecification.md#registereventlistener)
- [reset](layer.TopLevelLayerListSpecification.md#reset)
- [restoreState](layer.TopLevelLayerListSpecification.md#restorestate)
- [toJSON](layer.TopLevelLayerListSpecification.md#tojson)
- [unregisterDisposer](layer.TopLevelLayerListSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new TopLevelLayerListSpecification**(`display`, `dataSourceProviderRegistry`, `layerManager`, `chunkManager`, `selectionState`, `selectedLayer`, `coordinateSpace`, `globalPosition`, `toolBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](display_context.DisplayContext.md) |
| `dataSourceProviderRegistry` | `DataSourceProviderRegistry` |
| `layerManager` | [`LayerManager`](layer.LayerManager.md) |
| `chunkManager` | `ChunkManager` |
| `selectionState` | [`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md) |
| `selectedLayer` | [`SelectedLayerState`](layer.SelectedLayerState.md) |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |
| `globalPosition` | [`Position`](navigation_state.Position.md) |
| `toolBinder` | `ToolBinder` |

#### Overrides

[LayerListSpecification](layer.LayerListSpecification.md).[constructor](layer.LayerListSpecification.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1806](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1806)

## Properties

### changed

• **changed**: `NullarySignal`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[changed](layer.LayerListSpecification.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1776](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1776)

___

### chunkManager

• **chunkManager**: `ChunkManager`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[chunkManager](layer.LayerListSpecification.md#chunkmanager)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

___

### coordinateSpaceCombiner

• **coordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:1801](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1801)

___

### dataSourceProviderRegistry

• **dataSourceProviderRegistry**: `DataSourceProviderRegistry`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[dataSourceProviderRegistry](layer.LayerListSpecification.md#datasourceproviderregistry)

___

### display

• **display**: [`DisplayContext`](display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[disposedStacks](layer.LayerListSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### globalPosition

• **globalPosition**: [`Position`](navigation_state.Position.md)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[layerManager](layer.LayerListSpecification.md#layermanager)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Overrides

[LayerListSpecification](layer.LayerListSpecification.md).[layerSelectedValues](layer.LayerListSpecification.md#layerselectedvalues)

#### Defined in

[src/neuroglancer/layer.ts:1804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1804)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[refCount](layer.LayerListSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](layer.SelectedLayerState.md)

___

### selectionState

• **selectionState**: [`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

___

### subsets

• **subsets**: `Set`<[`LayerSubsetSpecification`](layer.LayerSubsetSpecification.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1802](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1802)

___

### toolBinder

• **toolBinder**: `ToolBinder`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[wasDisposed](layer.LayerListSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### root

• `get` **root**(): `this`

#### Returns

`this`

#### Overrides

LayerListSpecification.root

#### Defined in

[src/neuroglancer/layer.ts:1797](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1797)

___

### rootLayers

• `get` **rootLayers**(): [`LayerManager`](layer.LayerManager.md)

#### Returns

[`LayerManager`](layer.LayerManager.md)

#### Overrides

LayerListSpecification.rootLayers

#### Defined in

[src/neuroglancer/layer.ts:1893](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1893)

___

### rpc

• `get` **rpc**(): [`RPC`](worker_rpc.RPC.md)

#### Returns

[`RPC`](worker_rpc.RPC.md)

#### Overrides

LayerListSpecification.rpc

#### Defined in

[src/neuroglancer/layer.ts:1793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1793)

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

[src/neuroglancer/layer.ts:1868](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1868)

___

### addRef

▸ **addRef**(): [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

#### Returns

[`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[addRef](layer.LayerListSpecification.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[dispose](layer.LayerListSpecification.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[disposed](layer.LayerListSpecification.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[LayerListSpecification](layer.LayerListSpecification.md).[refCountReachedZero](layer.LayerListSpecification.md#refcountreachedzero)

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

[LayerListSpecification](layer.LayerListSpecification.md).[registerCancellable](layer.LayerListSpecification.md#registercancellable)

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

[LayerListSpecification](layer.LayerListSpecification.md).[registerDisposer](layer.LayerListSpecification.md#registerdisposer)

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

[LayerListSpecification](layer.LayerListSpecification.md).[registerEventListener](layer.LayerListSpecification.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1818](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1818)

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

[src/neuroglancer/layer.ts:1822](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1822)

___

### toJSON

▸ **toJSON**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Defined in

[src/neuroglancer/layer.ts:1875](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1875)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)
