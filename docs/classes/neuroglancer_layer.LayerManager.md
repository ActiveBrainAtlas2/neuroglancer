[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / LayerManager

# Class: LayerManager

[neuroglancer/layer](../modules/neuroglancer_layer.md).LayerManager

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LayerManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.LayerManager.md#constructor)

### Properties

- [boundPositions](neuroglancer_layer.LayerManager.md#boundpositions)
- [disposedStacks](neuroglancer_layer.LayerManager.md#disposedstacks)
- [layerSet](neuroglancer_layer.LayerManager.md#layerset)
- [layersChanged](neuroglancer_layer.LayerManager.md#layerschanged)
- [managedLayers](neuroglancer_layer.LayerManager.md#managedlayers)
- [nonArchivedLayerIndexGeneration](neuroglancer_layer.LayerManager.md#nonarchivedlayerindexgeneration)
- [numDirectUsers](neuroglancer_layer.LayerManager.md#numdirectusers)
- [readyStateChanged](neuroglancer_layer.LayerManager.md#readystatechanged)
- [refCount](neuroglancer_layer.LayerManager.md#refcount)
- [renderLayerToManagedLayerMapGeneration](neuroglancer_layer.LayerManager.md#renderlayertomanagedlayermapgeneration)
- [renderLayerToManagedLayerMap\_](neuroglancer_layer.LayerManager.md#renderlayertomanagedlayermap_)
- [scheduleRemoveLayersWithSingleRef](neuroglancer_layer.LayerManager.md#scheduleremovelayerswithsingleref)
- [specificationChanged](neuroglancer_layer.LayerManager.md#specificationchanged)
- [wasDisposed](neuroglancer_layer.LayerManager.md#wasdisposed)

### Accessors

- [renderLayerToManagedLayerMap](neuroglancer_layer.LayerManager.md#renderlayertomanagedlayermap)
- [renderLayers](neuroglancer_layer.LayerManager.md#renderlayers)
- [visibleRenderLayers](neuroglancer_layer.LayerManager.md#visiblerenderlayers)

### Methods

- [addManagedLayer](neuroglancer_layer.LayerManager.md#addmanagedlayer)
- [addRef](neuroglancer_layer.LayerManager.md#addref)
- [clear](neuroglancer_layer.LayerManager.md#clear)
- [dispose](neuroglancer_layer.LayerManager.md#dispose)
- [disposed](neuroglancer_layer.LayerManager.md#disposed)
- [filter](neuroglancer_layer.LayerManager.md#filter)
- [getLayerByName](neuroglancer_layer.LayerManager.md#getlayerbyname)
- [getLayerByNonArchivedIndex](neuroglancer_layer.LayerManager.md#getlayerbynonarchivedindex)
- [getUniqueLayerName](neuroglancer_layer.LayerManager.md#getuniquelayername)
- [has](neuroglancer_layer.LayerManager.md#has)
- [invokeAction](neuroglancer_layer.LayerManager.md#invokeaction)
- [readyRenderLayers](neuroglancer_layer.LayerManager.md#readyrenderlayers)
- [refCountReachedZero](neuroglancer_layer.LayerManager.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.LayerManager.md#registercancellable)
- [registerDisposer](neuroglancer_layer.LayerManager.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.LayerManager.md#registereventlistener)
- [remove](neuroglancer_layer.LayerManager.md#remove)
- [removeLayersWithSingleRef](neuroglancer_layer.LayerManager.md#removelayerswithsingleref)
- [removeManagedLayer](neuroglancer_layer.LayerManager.md#removemanagedlayer)
- [reorderManagedLayer](neuroglancer_layer.LayerManager.md#reordermanagedlayer)
- [setCoordinateSpaceToImageLayer](neuroglancer_layer.LayerManager.md#setcoordinatespacetoimagelayer)
- [unbindManagedLayer](neuroglancer_layer.LayerManager.md#unbindmanagedlayer)
- [unregisterDisposer](neuroglancer_layer.LayerManager.md#unregisterdisposer)
- [updateNonArchivedLayerIndices](neuroglancer_layer.LayerManager.md#updatenonarchivedlayerindices)
- [updateSignalBindings](neuroglancer_layer.LayerManager.md#updatesignalbindings)
- [useDirectly](neuroglancer_layer.LayerManager.md#usedirectly)

## Constructors

### constructor

• **new LayerManager**()

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:635](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L635)

## Properties

### boundPositions

• **boundPositions**: `WeakSet`<[`Position`](neuroglancer_navigation_state.Position.md)\>

#### Defined in

[src/neuroglancer/layer.ts:629](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L629)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### layerSet

• **layerSet**: `Set`<[`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L625)

___

### layersChanged

• **layersChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L626)

___

### managedLayers

• **managedLayers**: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)[]

#### Defined in

[src/neuroglancer/layer.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L624)

___

### nonArchivedLayerIndexGeneration

• **nonArchivedLayerIndexGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L631)

___

### numDirectUsers

• **numDirectUsers**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:630](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L630)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:627](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L627)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayerToManagedLayerMapGeneration

• `Private` **renderLayerToManagedLayerMapGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L632)

___

### renderLayerToManagedLayerMap\_

• `Private` **renderLayerToManagedLayerMap\_**: `Map`<[`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md), [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:633](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L633)

___

### scheduleRemoveLayersWithSingleRef

• `Private` **scheduleRemoveLayersWithSingleRef**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L662)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L628)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### renderLayerToManagedLayerMap

• `get` **renderLayerToManagedLayerMap**(): `Map`<[`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md), [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)\>

#### Returns

`Map`<[`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md), [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:693](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L693)

___

### renderLayers

• `get` **renderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:846](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L846)

___

### visibleRenderLayers

• `get` **visibleRenderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:862](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L862)

## Methods

### addManagedLayer

▸ **addManagedLayer**(`managedLayer`, `index?`): [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

Assumes ownership of an existing reference to managedLayer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

[`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:756](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L756)

___

### addRef

▸ **addRef**(): [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Returns

[`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:787](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L787)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:824](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L824)

___

### filter

▸ **filter**(`predicate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`layer`: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)) => `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:711](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L711)

___

### getLayerByName

▸ **getLayerByName**(`name`): `undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:829](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L829)

___

### getLayerByNonArchivedIndex

▸ **getLayerByNonArchivedIndex**(`index`): `undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:682](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L682)

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

[src/neuroglancer/layer.ts:833](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L833)

___

### has

▸ **has**(`layer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L842)

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

[src/neuroglancer/layer.ts:878](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L878)

___

### readyRenderLayers

▸ **readyRenderLayers**(): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md), `void`, `undefined`\>

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md), `void`, `undefined`\>

#### Defined in

[src/neuroglancer/layer.ts:769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L769)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/layer.ts:796](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L796)

___

### removeLayersWithSingleRef

▸ `Private` **removeLayersWithSingleRef**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:727](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L727)

___

### removeManagedLayer

▸ **removeManagedLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L804)

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

[src/neuroglancer/layer.ts:812](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L812)

___

### setCoordinateSpaceToImageLayer

▸ `Private` **setCoordinateSpaceToImageLayer**(): `void`

This function is a utility to reset the resolution of neuroglancer whenever
there is an addition of new image layer to the neuroglancer session.

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:645](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L645)

___

### unbindManagedLayer

▸ **unbindManagedLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:778](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L778)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateNonArchivedLayerIndices

▸ **updateNonArchivedLayerIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L665)

___

### updateSignalBindings

▸ `Private` **updateSignalBindings**(`layer`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |
| `callback` | [`SignalBindingUpdater`](../interfaces/neuroglancer_util_signal_binding_updater.SignalBindingUpdater.md)<() => `void`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:734](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L734)

___

### useDirectly

▸ **useDirectly**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:741](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L741)
