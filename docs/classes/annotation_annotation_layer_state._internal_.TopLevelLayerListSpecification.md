[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TopLevelLayerListSpecification

# Class: TopLevelLayerListSpecification

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TopLevelLayerListSpecification

## Hierarchy

- [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

  ↳ **`TopLevelLayerListSpecification`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#changed)
- [chunkManager](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#chunkmanager)
- [coordinateSpace](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#coordinatespace)
- [coordinateSpaceCombiner](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#coordinatespacecombiner)
- [dataSourceProviderRegistry](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#datasourceproviderregistry)
- [display](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#display)
- [disposedStacks](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#disposedstacks)
- [globalPosition](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#globalposition)
- [layerManager](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#layermanager)
- [layerSelectedValues](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#layerselectedvalues)
- [refCount](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#refcount)
- [selectedLayer](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#selectedlayer)
- [selectionState](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#selectionstate)
- [subsets](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#subsets)
- [toolBinder](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#toolbinder)
- [wasDisposed](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#wasdisposed)

### Accessors

- [root](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#root)
- [rootLayers](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#rootlayers)
- [rpc](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#rpc)

### Methods

- [add](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#add)
- [addRef](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#registereventlistener)
- [reset](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#restorestate)
- [toJSON](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#tojson)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new TopLevelLayerListSpecification**(`display`, `dataSourceProviderRegistry`, `layerManager`, `chunkManager`, `selectionState`, `selectedLayer`, `coordinateSpace`, `globalPosition`, `toolBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `dataSourceProviderRegistry` | [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md) |
| `layerManager` | [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md) |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `selectionState` | [`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md) |
| `selectedLayer` | [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md) |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |
| `globalPosition` | [`Position`](annotation_annotation_layer_state._internal_.Position.md) |
| `toolBinder` | [`ToolBinder`](ui_tool.ToolBinder.md) |

#### Overrides

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[constructor](annotation_annotation_layer_state._internal_.LayerListSpecification.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1810](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1810)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[changed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1780](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1780)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[chunkManager](annotation_annotation_layer_state._internal_.LayerListSpecification.md#chunkmanager)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

___

### coordinateSpaceCombiner

• **coordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:1805](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1805)

___

### dataSourceProviderRegistry

• **dataSourceProviderRegistry**: [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[dataSourceProviderRegistry](annotation_annotation_layer_state._internal_.LayerListSpecification.md#datasourceproviderregistry)

___

### display

• **display**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[disposedStacks](annotation_annotation_layer_state._internal_.LayerListSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### globalPosition

• **globalPosition**: [`Position`](annotation_annotation_layer_state._internal_.Position.md)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[layerManager](annotation_annotation_layer_state._internal_.LayerListSpecification.md#layermanager)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

#### Overrides

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[layerSelectedValues](annotation_annotation_layer_state._internal_.LayerListSpecification.md#layerselectedvalues)

#### Defined in

[src/neuroglancer/layer.ts:1808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1808)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[refCount](annotation_annotation_layer_state._internal_.LayerListSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

___

### selectionState

• **selectionState**: [`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

___

### subsets

• **subsets**: `Set`<[`LayerSubsetSpecification`](annotation_annotation_layer_state._internal_.LayerSubsetSpecification.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1806](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1806)

___

### toolBinder

• **toolBinder**: [`ToolBinder`](ui_tool.ToolBinder.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[wasDisposed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### root

• `get` **root**(): `this`

#### Returns

`this`

#### Overrides

LayerListSpecification.root

#### Defined in

[src/neuroglancer/layer.ts:1801](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1801)

___

### rootLayers

• `get` **rootLayers**(): [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Returns

[`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Overrides

LayerListSpecification.rootLayers

#### Defined in

[src/neuroglancer/layer.ts:1897](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1897)

___

### rpc

• `get` **rpc**(): [`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Returns

[`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Overrides

LayerListSpecification.rpc

#### Defined in

[src/neuroglancer/layer.ts:1797](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1797)

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

[src/neuroglancer/layer.ts:1872](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1872)

___

### addRef

▸ **addRef**(): [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

#### Returns

[`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

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

#### Inherited from

[LayerListSpecification](annotation_annotation_layer_state._internal_.LayerListSpecification.md).[disposed](annotation_annotation_layer_state._internal_.LayerListSpecification.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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

[src/neuroglancer/layer.ts:1822](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1822)

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

[src/neuroglancer/layer.ts:1826](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1826)

___

### toJSON

▸ **toJSON**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Defined in

[src/neuroglancer/layer.ts:1879](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1879)

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
