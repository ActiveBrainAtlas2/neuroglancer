[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerManager

# Class: LayerManager

[layer](../modules/layer.md).LayerManager

## Hierarchy

- `RefCounted`

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

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:635](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L635)

## Properties

### boundPositions

• **boundPositions**: `WeakSet`<[`Position`](navigation_state.Position.md)\>

#### Defined in

[src/neuroglancer/layer.ts:629](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L629)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### layerSet

• **layerSet**: `Set`<[`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L625)

___

### layersChanged

• **layersChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L626)

___

### managedLayers

• **managedLayers**: [`ManagedUserLayer`](layer.ManagedUserLayer.md)[]

#### Defined in

[src/neuroglancer/layer.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L624)

___

### nonArchivedLayerIndexGeneration

• **nonArchivedLayerIndexGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L631)

___

### numDirectUsers

• **numDirectUsers**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:630](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L630)

___

### readyStateChanged

• **readyStateChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:627](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L627)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayerToManagedLayerMapGeneration

• `Private` **renderLayerToManagedLayerMapGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L632)

___

### renderLayerToManagedLayerMap\_

• `Private` **renderLayerToManagedLayerMap\_**: `Map`<[`RenderLayer`](renderlayer.RenderLayer.md), [`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:633](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L633)

___

### scheduleRemoveLayersWithSingleRef

• `Private` **scheduleRemoveLayersWithSingleRef**: `DebouncedFunc`<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L658)

___

### specificationChanged

• **specificationChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L628)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### renderLayerToManagedLayerMap

• `get` **renderLayerToManagedLayerMap**(): `Map`<[`RenderLayer`](renderlayer.RenderLayer.md), [`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Returns

`Map`<[`RenderLayer`](renderlayer.RenderLayer.md), [`ManagedUserLayer`](layer.ManagedUserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:689](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L689)

___

### renderLayers

• `get` **renderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => `Generator`<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L842)

___

### visibleRenderLayers

• `get` **visibleRenderLayers**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => `Generator`<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `unknown`\> |

#### Defined in

[src/neuroglancer/layer.ts:858](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L858)

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

[src/neuroglancer/layer.ts:752](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L752)

___

### addRef

▸ **addRef**(): [`LayerManager`](layer.LayerManager.md)

#### Returns

[`LayerManager`](layer.LayerManager.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:783](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L783)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer.ts:820](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L820)

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

[src/neuroglancer/layer.ts:707](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L707)

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

[src/neuroglancer/layer.ts:825](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L825)

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

[src/neuroglancer/layer.ts:678](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L678)

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

[src/neuroglancer/layer.ts:829](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L829)

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

[src/neuroglancer/layer.ts:838](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L838)

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

[src/neuroglancer/layer.ts:874](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L874)

___

### readyRenderLayers

▸ **readyRenderLayers**(): `Generator`<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `undefined`\>

#### Returns

`Generator`<[`RenderLayer`](renderlayer.RenderLayer.md), `void`, `undefined`\>

#### Defined in

[src/neuroglancer/layer.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L765)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

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

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

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

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/layer.ts:792](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L792)

___

### removeLayersWithSingleRef

▸ `Private` **removeLayersWithSingleRef**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:723](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L723)

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

[src/neuroglancer/layer.ts:800](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L800)

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

[src/neuroglancer/layer.ts:808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L808)

___

### setCoordinateSpaceToImageLayer

▸ `Private` **setCoordinateSpaceToImageLayer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L641)

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

[src/neuroglancer/layer.ts:774](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L774)

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

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)

___

### updateNonArchivedLayerIndices

▸ **updateNonArchivedLayerIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L661)

___

### updateSignalBindings

▸ `Private` **updateSignalBindings**(`layer`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |
| `callback` | `SignalBindingUpdater`<() => `void`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:730](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L730)

___

### useDirectly

▸ **useDirectly**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:737](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L737)
