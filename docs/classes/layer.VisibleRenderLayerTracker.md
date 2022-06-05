[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / VisibleRenderLayerTracker

# Class: VisibleRenderLayerTracker<View, RenderLayerType\>

[layer](../modules/layer.md).VisibleRenderLayerTracker

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/layer.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](renderlayer.VisibilityTrackedRenderLayer.md)<`View`\> |

## Hierarchy

- `RefCounted`

  ↳ **`VisibleRenderLayerTracker`**

## Table of contents

### Constructors

- [constructor](layer.VisibleRenderLayerTracker.md#constructor)

### Properties

- [debouncedUpdateVisibleLayers](layer.VisibleRenderLayerTracker.md#debouncedupdatevisiblelayers)
- [disposedStacks](layer.VisibleRenderLayerTracker.md#disposedstacks)
- [layerManager](layer.VisibleRenderLayerTracker.md#layermanager)
- [refCount](layer.VisibleRenderLayerTracker.md#refcount)
- [renderLayerType](layer.VisibleRenderLayerTracker.md#renderlayertype)
- [roles](layer.VisibleRenderLayerTracker.md#roles)
- [view](layer.VisibleRenderLayerTracker.md#view)
- [visibility](layer.VisibleRenderLayerTracker.md#visibility)
- [visibleLayers\_](layer.VisibleRenderLayerTracker.md#visiblelayers_)
- [wasDisposed](layer.VisibleRenderLayerTracker.md#wasdisposed)

### Accessors

- [visibleLayers](layer.VisibleRenderLayerTracker.md#visiblelayers)

### Methods

- [addRef](layer.VisibleRenderLayerTracker.md#addref)
- [dispose](layer.VisibleRenderLayerTracker.md#dispose)
- [disposed](layer.VisibleRenderLayerTracker.md#disposed)
- [refCountReachedZero](layer.VisibleRenderLayerTracker.md#refcountreachedzero)
- [registerCancellable](layer.VisibleRenderLayerTracker.md#registercancellable)
- [registerDisposer](layer.VisibleRenderLayerTracker.md#registerdisposer)
- [registerEventListener](layer.VisibleRenderLayerTracker.md#registereventlistener)
- [unregisterDisposer](layer.VisibleRenderLayerTracker.md#unregisterdisposer)
- [updateVisibleLayers](layer.VisibleRenderLayerTracker.md#updatevisiblelayers)

## Constructors

### constructor

• **new VisibleRenderLayerTracker**<`View`, `RenderLayerType`\>(`layerManager`, `renderLayerType`, `view`, `roles`, `layerAdded`, `visibility`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/layer.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `unknown`, `RenderLayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](layer.LayerManager.md) |
| `renderLayerType` | (...`args`: `any`[]) => `RenderLayerType` |
| `view` | `View` |
| `roles` | [`WatchableSet`](trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\> |
| `layerAdded` | (`layer`: `RenderLayerType`, `info`: [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `unknown`\>) => `void` |
| `visibility` | `WatchableVisibilityPriority` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:1291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1291)

## Properties

### debouncedUpdateVisibleLayers

• `Private` **debouncedUpdateVisibleLayers**: `DebouncedFunc`<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:1288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1288)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayerType

• **renderLayerType**: (...`args`: `any`[]) => `RenderLayerType`

#### Type declaration

• **new VisibleRenderLayerTracker**(...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

___

### roles

• **roles**: [`WatchableSet`](trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

___

### view

• **view**: `View`

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

___

### visibleLayers\_

• `Private` **visibleLayers\_**: `Map`<`RenderLayerType`, [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

Maps a layer to the disposer to call when it is no longer visible.

#### Defined in

[src/neuroglancer/layer.ts:1286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1286)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visibleLayers

• `get` **visibleLayers**(): `Map`<`RenderLayerType`, [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Returns

`Map`<`RenderLayerType`, [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Defined in

[src/neuroglancer/layer.ts:1336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1336)

## Methods

### addRef

▸ **addRef**(): [`VisibleRenderLayerTracker`](layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Returns

[`VisibleRenderLayerTracker`](layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer.ts:1303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1303)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L85)

___

### updateVisibleLayers

▸ `Private` **updateVisibleLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1309)
