[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LayerManager

# Class: LayerManager

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LayerManager

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LayerManager`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LayerManager.md#constructor)

### Properties

- [boundPositions](annotation_annotation_layer_state._internal_.LayerManager.md#boundpositions)
- [disposedStacks](annotation_annotation_layer_state._internal_.LayerManager.md#disposedstacks)
- [layerSet](annotation_annotation_layer_state._internal_.LayerManager.md#layerset)
- [layersChanged](annotation_annotation_layer_state._internal_.LayerManager.md#layerschanged)
- [managedLayers](annotation_annotation_layer_state._internal_.LayerManager.md#managedlayers)
- [nonArchivedLayerIndexGeneration](annotation_annotation_layer_state._internal_.LayerManager.md#nonarchivedlayerindexgeneration)
- [numDirectUsers](annotation_annotation_layer_state._internal_.LayerManager.md#numdirectusers)
- [readyStateChanged](annotation_annotation_layer_state._internal_.LayerManager.md#readystatechanged)
- [refCount](annotation_annotation_layer_state._internal_.LayerManager.md#refcount)
- [renderLayerToManagedLayerMapGeneration](annotation_annotation_layer_state._internal_.LayerManager.md#renderlayertomanagedlayermapgeneration)
- [renderLayerToManagedLayerMap\_](annotation_annotation_layer_state._internal_.LayerManager.md#renderlayertomanagedlayermap_)
- [scheduleRemoveLayersWithSingleRef](annotation_annotation_layer_state._internal_.LayerManager.md#scheduleremovelayerswithsingleref)
- [specificationChanged](annotation_annotation_layer_state._internal_.LayerManager.md#specificationchanged)
- [wasDisposed](annotation_annotation_layer_state._internal_.LayerManager.md#wasdisposed)

### Accessors

- [renderLayerToManagedLayerMap](annotation_annotation_layer_state._internal_.LayerManager.md#renderlayertomanagedlayermap)
- [renderLayers](annotation_annotation_layer_state._internal_.LayerManager.md#renderlayers)
- [visibleRenderLayers](annotation_annotation_layer_state._internal_.LayerManager.md#visiblerenderlayers)

### Methods

- [addManagedLayer](annotation_annotation_layer_state._internal_.LayerManager.md#addmanagedlayer)
- [addRef](annotation_annotation_layer_state._internal_.LayerManager.md#addref)
- [clear](annotation_annotation_layer_state._internal_.LayerManager.md#clear)
- [dispose](annotation_annotation_layer_state._internal_.LayerManager.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.LayerManager.md#disposed)
- [filter](annotation_annotation_layer_state._internal_.LayerManager.md#filter)
- [getLayerByName](annotation_annotation_layer_state._internal_.LayerManager.md#getlayerbyname)
- [getLayerByNonArchivedIndex](annotation_annotation_layer_state._internal_.LayerManager.md#getlayerbynonarchivedindex)
- [getUniqueLayerName](annotation_annotation_layer_state._internal_.LayerManager.md#getuniquelayername)
- [has](annotation_annotation_layer_state._internal_.LayerManager.md#has)
- [invokeAction](annotation_annotation_layer_state._internal_.LayerManager.md#invokeaction)
- [readyRenderLayers](annotation_annotation_layer_state._internal_.LayerManager.md#readyrenderlayers)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.LayerManager.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.LayerManager.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.LayerManager.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.LayerManager.md#registereventlistener)
- [remove](annotation_annotation_layer_state._internal_.LayerManager.md#remove)
- [removeLayersWithSingleRef](annotation_annotation_layer_state._internal_.LayerManager.md#removelayerswithsingleref)
- [removeManagedLayer](annotation_annotation_layer_state._internal_.LayerManager.md#removemanagedlayer)
- [reorderManagedLayer](annotation_annotation_layer_state._internal_.LayerManager.md#reordermanagedlayer)
- [setCoordinateSpaceToImageLayer](annotation_annotation_layer_state._internal_.LayerManager.md#setcoordinatespacetoimagelayer)
- [unbindManagedLayer](annotation_annotation_layer_state._internal_.LayerManager.md#unbindmanagedlayer)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.LayerManager.md#unregisterdisposer)
- [updateNonArchivedLayerIndices](annotation_annotation_layer_state._internal_.LayerManager.md#updatenonarchivedlayerindices)
- [updateSignalBindings](annotation_annotation_layer_state._internal_.LayerManager.md#updatesignalbindings)
- [useDirectly](annotation_annotation_layer_state._internal_.LayerManager.md#usedirectly)

## Constructors

### constructor

• **new LayerManager**()

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:635](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L635)

## Properties

### boundPositions

• **boundPositions**: `WeakSet`<[`Position`](annotation_annotation_layer_state._internal_.Position.md)\>

#### Defined in

[src/neuroglancer/layer.ts:629](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L629)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerSet

• **layerSet**: `Set`<[`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L625)

___

### layersChanged

• **layersChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L626)

___

### managedLayers

• **managedLayers**: [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)[]

#### Defined in

[src/neuroglancer/layer.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L624)

___

### nonArchivedLayerIndexGeneration

• **nonArchivedLayerIndexGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L631)

___

### numDirectUsers

• **numDirectUsers**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:630](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L630)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:627](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L627)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayerToManagedLayerMapGeneration

• `Private` **renderLayerToManagedLayerMapGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L632)

___

### renderLayerToManagedLayerMap\_

• `Private` **renderLayerToManagedLayerMap\_**: `Map`<[`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md), [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:633](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L633)

___

### scheduleRemoveLayersWithSingleRef

• `Private` **scheduleRemoveLayersWithSingleRef**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L662)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L628)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### renderLayerToManagedLayerMap

• `get` **renderLayerToManagedLayerMap**(): `Map`<[`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md), [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)\>

#### Returns

`Map`<[`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md), [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:693](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L693)

___

### renderLayers

• `get` **renderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => [`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:846](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L846)

___

### visibleRenderLayers

• `get` **visibleRenderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => [`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:862](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L862)

## Methods

### addManagedLayer

▸ **addManagedLayer**(`managedLayer`, `index?`): [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

Assumes ownership of an existing reference to managedLayer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

[`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:756](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L756)

___

### addRef

▸ **addRef**(): [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Returns

[`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:787](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L787)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:824](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L824)

___

### filter

▸ **filter**(`predicate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`layer`: [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)) => `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:711](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L711)

___

### getLayerByName

▸ **getLayerByName**(`name`): `undefined` \| [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:829](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L829)

___

### getLayerByNonArchivedIndex

▸ **getLayerByNonArchivedIndex**(`index`): `undefined` \| [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:682](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L682)

___

### getUniqueLayerName

▸ **getUniqueLayerName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/layer.ts:833](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L833)

___

### has

▸ **has**(`layer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L842)

___

### invokeAction

▸ **invokeAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:878](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L878)

___

### readyRenderLayers

▸ **readyRenderLayers**(): [`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md), `void`, `undefined`\>

#### Returns

[`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md), `void`, `undefined`\>

#### Defined in

[src/neuroglancer/layer.ts:769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L769)

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

### remove

▸ **remove**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:796](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L796)

___

### removeLayersWithSingleRef

▸ `Private` **removeLayersWithSingleRef**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:727](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L727)

___

### removeManagedLayer

▸ **removeManagedLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L804)

___

### reorderManagedLayer

▸ **reorderManagedLayer**(`oldIndex`, `newIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldIndex` | `number` |
| `newIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:812](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L812)

___

### setCoordinateSpaceToImageLayer

▸ `Private` **setCoordinateSpaceToImageLayer**(): `void`

This function is a utility to reset the resolution of neuroglancer whenever
there is an addition of new image layer to the neuroglancer session.

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:645](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L645)

___

### unbindManagedLayer

▸ **unbindManagedLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:778](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L778)

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

___

### updateNonArchivedLayerIndices

▸ **updateNonArchivedLayerIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L665)

___

### updateSignalBindings

▸ `Private` **updateSignalBindings**(`layer`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |
| `callback` | [`SignalBindingUpdater`](../interfaces/util_signal_binding_updater.SignalBindingUpdater.md)<() => `void`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:734](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L734)

___

### useDirectly

▸ **useDirectly**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:741](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L741)
