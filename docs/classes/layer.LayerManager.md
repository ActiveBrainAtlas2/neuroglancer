[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerManager

# Class: LayerManager

[layer](../modules/layer.md).LayerManager

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`LayerManager`**

## Table of contents

### Constructors

- [constructor](layer.LayerManager.md#constructor)

### Properties

- [boundPositions](layer.LayerManager.md#boundpositions)
- [disposedStacks](layer.LayerManager.md#disposedstacks)
- [layerSet](layer.LayerManager.md#layerset)
- [layersChanged](layer.LayerManager.md#layerschanged)
- [managedLayers](layer.LayerManager.md#managedlayers)
- [nonArchivedLayerIndexGeneration](layer.LayerManager.md#nonarchivedlayerindexgeneration)
- [numDirectUsers](layer.LayerManager.md#numdirectusers)
- [readyStateChanged](layer.LayerManager.md#readystatechanged)
- [refCount](layer.LayerManager.md#refcount)
- [renderLayerToManagedLayerMapGeneration](layer.LayerManager.md#renderlayertomanagedlayermapgeneration)
- [renderLayerToManagedLayerMap\_](layer.LayerManager.md#renderlayertomanagedlayermap_)
- [scheduleRemoveLayersWithSingleRef](layer.LayerManager.md#scheduleremovelayerswithsingleref)
- [specificationChanged](layer.LayerManager.md#specificationchanged)
- [wasDisposed](layer.LayerManager.md#wasdisposed)

### Accessors

- [renderLayerToManagedLayerMap](layer.LayerManager.md#renderlayertomanagedlayermap)
- [renderLayers](layer.LayerManager.md#renderlayers)
- [visibleRenderLayers](layer.LayerManager.md#visiblerenderlayers)

### Methods

- [addManagedLayer](layer.LayerManager.md#addmanagedlayer)
- [addRef](layer.LayerManager.md#addref)
- [clear](layer.LayerManager.md#clear)
- [dispose](layer.LayerManager.md#dispose)
- [disposed](layer.LayerManager.md#disposed)
- [filter](layer.LayerManager.md#filter)
- [getLayerByName](layer.LayerManager.md#getlayerbyname)
- [getLayerByNonArchivedIndex](layer.LayerManager.md#getlayerbynonarchivedindex)
- [getUniqueLayerName](layer.LayerManager.md#getuniquelayername)
- [has](layer.LayerManager.md#has)
- [invokeAction](layer.LayerManager.md#invokeaction)
- [readyRenderLayers](layer.LayerManager.md#readyrenderlayers)
- [refCountReachedZero](layer.LayerManager.md#refcountreachedzero)
- [registerCancellable](layer.LayerManager.md#registercancellable)
- [registerDisposer](layer.LayerManager.md#registerdisposer)
- [registerEventListener](layer.LayerManager.md#registereventlistener)
- [remove](layer.LayerManager.md#remove)
- [removeLayersWithSingleRef](layer.LayerManager.md#removelayerswithsingleref)
- [removeManagedLayer](layer.LayerManager.md#removemanagedlayer)
- [reorderManagedLayer](layer.LayerManager.md#reordermanagedlayer)
- [setCoordinateSpaceToImageLayer](layer.LayerManager.md#setcoordinatespacetoimagelayer)
- [unbindManagedLayer](layer.LayerManager.md#unbindmanagedlayer)
- [unregisterDisposer](layer.LayerManager.md#unregisterdisposer)
- [updateNonArchivedLayerIndices](layer.LayerManager.md#updatenonarchivedlayerindices)
- [updateSignalBindings](layer.LayerManager.md#updatesignalbindings)
- [useDirectly](layer.LayerManager.md#usedirectly)

## Constructors

### constructor

• **new LayerManager**()

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:635](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L635)

## Properties

### boundPositions

• **boundPositions**: `WeakSet`<[`Position`](navigation_state.Position.md)\>

#### Defined in

[src/neuroglancer/layer.ts:629](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L629)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### layerSet

• **layerSet**: `Set`<[`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L625)

___

### layersChanged

• **layersChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L626)

___

### managedLayers

• **managedLayers**: [`ManagedUserLayer`](layer.ManagedUserLayer.md)[]

#### Defined in

[src/neuroglancer/layer.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L624)

___

### nonArchivedLayerIndexGeneration

• **nonArchivedLayerIndexGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L631)

___

### numDirectUsers

• **numDirectUsers**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:630](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L630)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:627](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L627)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayerToManagedLayerMapGeneration

• `Private` **renderLayerToManagedLayerMapGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L632)

___

### renderLayerToManagedLayerMap\_

• `Private` **renderLayerToManagedLayerMap\_**: `Map`<[`RenderLayer`](renderlayer.RenderLayer.md), [`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:633](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L633)

___

### scheduleRemoveLayersWithSingleRef

• `Private` **scheduleRemoveLayersWithSingleRef**: [`DebouncedFunc`](../interfaces/data_panel_layout._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L662)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L628)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### renderLayerToManagedLayerMap

• `get` **renderLayerToManagedLayerMap**(): `Map`<[`RenderLayer`](renderlayer.RenderLayer.md), [`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Returns

`Map`<[`RenderLayer`](renderlayer.RenderLayer.md), [`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:693](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L693)

___

### renderLayers

• `get` **renderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => [`Generator`](../interfaces/layer._internal_.Generator.md)<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:846](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L846)

___

### visibleRenderLayers

• `get` **visibleRenderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => [`Generator`](../interfaces/layer._internal_.Generator.md)<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:862](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L862)

## Methods

### addManagedLayer

▸ **addManagedLayer**(`managedLayer`, `index?`): [`ManagedUserLayer`](layer.ManagedUserLayer.md)

Assumes ownership of an existing reference to managedLayer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

[`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:756](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L756)

___

### addRef

▸ **addRef**(): [`LayerManager`](layer.LayerManager.md)

#### Returns

[`LayerManager`](layer.LayerManager.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:787](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L787)

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

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:824](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L824)

___

### filter

▸ **filter**(`predicate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`layer`: [`ManagedUserLayer`](layer.ManagedUserLayer.md)) => `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:711](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L711)

___

### getLayerByName

▸ **getLayerByName**(`name`): `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:829](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L829)

___

### getLayerByNonArchivedIndex

▸ **getLayerByNonArchivedIndex**(`index`): `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:682](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L682)

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

[src/neuroglancer/layer.ts:833](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L833)

___

### has

▸ **has**(`layer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L842)

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

[src/neuroglancer/layer.ts:878](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L878)

___

### readyRenderLayers

▸ **readyRenderLayers**(): [`Generator`](../interfaces/layer._internal_.Generator.md)<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `undefined`\>

#### Returns

[`Generator`](../interfaces/layer._internal_.Generator.md)<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `undefined`\>

#### Defined in

[src/neuroglancer/layer.ts:769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L769)

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

### remove

▸ **remove**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:796](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L796)

___

### removeLayersWithSingleRef

▸ `Private` **removeLayersWithSingleRef**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:727](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L727)

___

### removeManagedLayer

▸ **removeManagedLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L804)

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

[src/neuroglancer/layer.ts:812](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L812)

___

### setCoordinateSpaceToImageLayer

▸ `Private` **setCoordinateSpaceToImageLayer**(): `void`

This function is a utility to reset the resolution of neuroglancer whenever
there is an addition of new image layer to the neuroglancer session.

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:645](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L645)

___

### unbindManagedLayer

▸ **unbindManagedLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:778](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L778)

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

___

### updateNonArchivedLayerIndices

▸ **updateNonArchivedLayerIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L665)

___

### updateSignalBindings

▸ `Private` **updateSignalBindings**(`layer`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |
| `callback` | [`SignalBindingUpdater`](../interfaces/layer._internal_.SignalBindingUpdater.md)<() => `void`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:734](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L734)

___

### useDirectly

▸ **useDirectly**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:741](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L741)
