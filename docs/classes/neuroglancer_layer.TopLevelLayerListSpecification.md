[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / TopLevelLayerListSpecification

# Class: TopLevelLayerListSpecification

[neuroglancer/layer](../modules/neuroglancer_layer.md).TopLevelLayerListSpecification

## Hierarchy

- [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

  ↳ **`TopLevelLayerListSpecification`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.TopLevelLayerListSpecification.md#constructor)

### Properties

- [changed](neuroglancer_layer.TopLevelLayerListSpecification.md#changed)
- [chunkManager](neuroglancer_layer.TopLevelLayerListSpecification.md#chunkmanager)
- [coordinateSpace](neuroglancer_layer.TopLevelLayerListSpecification.md#coordinatespace)
- [coordinateSpaceCombiner](neuroglancer_layer.TopLevelLayerListSpecification.md#coordinatespacecombiner)
- [dataSourceProviderRegistry](neuroglancer_layer.TopLevelLayerListSpecification.md#datasourceproviderregistry)
- [display](neuroglancer_layer.TopLevelLayerListSpecification.md#display)
- [disposedStacks](neuroglancer_layer.TopLevelLayerListSpecification.md#disposedstacks)
- [globalPosition](neuroglancer_layer.TopLevelLayerListSpecification.md#globalposition)
- [layerManager](neuroglancer_layer.TopLevelLayerListSpecification.md#layermanager)
- [layerSelectedValues](neuroglancer_layer.TopLevelLayerListSpecification.md#layerselectedvalues)
- [refCount](neuroglancer_layer.TopLevelLayerListSpecification.md#refcount)
- [selectedLayer](neuroglancer_layer.TopLevelLayerListSpecification.md#selectedlayer)
- [selectionState](neuroglancer_layer.TopLevelLayerListSpecification.md#selectionstate)
- [subsets](neuroglancer_layer.TopLevelLayerListSpecification.md#subsets)
- [toolBinder](neuroglancer_layer.TopLevelLayerListSpecification.md#toolbinder)
- [wasDisposed](neuroglancer_layer.TopLevelLayerListSpecification.md#wasdisposed)

### Accessors

- [root](neuroglancer_layer.TopLevelLayerListSpecification.md#root)
- [rootLayers](neuroglancer_layer.TopLevelLayerListSpecification.md#rootlayers)
- [rpc](neuroglancer_layer.TopLevelLayerListSpecification.md#rpc)

### Methods

- [add](neuroglancer_layer.TopLevelLayerListSpecification.md#add)
- [addRef](neuroglancer_layer.TopLevelLayerListSpecification.md#addref)
- [dispose](neuroglancer_layer.TopLevelLayerListSpecification.md#dispose)
- [disposed](neuroglancer_layer.TopLevelLayerListSpecification.md#disposed)
- [refCountReachedZero](neuroglancer_layer.TopLevelLayerListSpecification.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.TopLevelLayerListSpecification.md#registercancellable)
- [registerDisposer](neuroglancer_layer.TopLevelLayerListSpecification.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.TopLevelLayerListSpecification.md#registereventlistener)
- [reset](neuroglancer_layer.TopLevelLayerListSpecification.md#reset)
- [restoreState](neuroglancer_layer.TopLevelLayerListSpecification.md#restorestate)
- [toJSON](neuroglancer_layer.TopLevelLayerListSpecification.md#tojson)
- [unregisterDisposer](neuroglancer_layer.TopLevelLayerListSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new TopLevelLayerListSpecification**(`display`, `dataSourceProviderRegistry`, `layerManager`, `chunkManager`, `selectionState`, `selectedLayer`, `coordinateSpace`, `globalPosition`, `toolBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `dataSourceProviderRegistry` | [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md) |
| `layerManager` | [`LayerManager`](neuroglancer_layer.LayerManager.md) |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `selectionState` | [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md) |
| `selectedLayer` | [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md) |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |
| `globalPosition` | [`Position`](neuroglancer_navigation_state.Position.md) |
| `toolBinder` | [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md) |

#### Overrides

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[constructor](neuroglancer_layer.LayerListSpecification.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1810](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1810)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[changed](neuroglancer_layer.LayerListSpecification.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1780](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1780)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[chunkManager](neuroglancer_layer.LayerListSpecification.md#chunkmanager)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

___

### coordinateSpaceCombiner

• **coordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:1805](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1805)

___

### dataSourceProviderRegistry

• **dataSourceProviderRegistry**: [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[dataSourceProviderRegistry](neuroglancer_layer.LayerListSpecification.md#datasourceproviderregistry)

___

### display

• **display**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[disposedStacks](neuroglancer_layer.LayerListSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### globalPosition

• **globalPosition**: [`Position`](neuroglancer_navigation_state.Position.md)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[layerManager](neuroglancer_layer.LayerListSpecification.md#layermanager)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Overrides

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[layerSelectedValues](neuroglancer_layer.LayerListSpecification.md#layerselectedvalues)

#### Defined in

[src/neuroglancer/layer.ts:1808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1808)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[refCount](neuroglancer_layer.LayerListSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

___

### selectionState

• **selectionState**: [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

___

### subsets

• **subsets**: `Set`<[`LayerSubsetSpecification`](neuroglancer_layer.LayerSubsetSpecification.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1806](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1806)

___

### toolBinder

• **toolBinder**: [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[wasDisposed](neuroglancer_layer.LayerListSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### root

• `get` **root**(): `this`

#### Returns

`this`

#### Overrides

LayerListSpecification.root

#### Defined in

[src/neuroglancer/layer.ts:1801](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1801)

___

### rootLayers

• `get` **rootLayers**(): [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Returns

[`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Overrides

LayerListSpecification.rootLayers

#### Defined in

[src/neuroglancer/layer.ts:1897](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1897)

___

### rpc

• `get` **rpc**(): [`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Returns

[`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Overrides

LayerListSpecification.rpc

#### Defined in

[src/neuroglancer/layer.ts:1797](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1797)

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

[src/neuroglancer/layer.ts:1872](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1872)

___

### addRef

▸ **addRef**(): [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

#### Returns

[`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

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

#### Inherited from

[LayerListSpecification](neuroglancer_layer.LayerListSpecification.md).[disposed](neuroglancer_layer.LayerListSpecification.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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

[src/neuroglancer/layer.ts:1822](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1822)

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

[src/neuroglancer/layer.ts:1826](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1826)

___

### toJSON

▸ **toJSON**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Defined in

[src/neuroglancer/layer.ts:1879](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1879)

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
