[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / VisibleRenderLayerTracker

# Class: VisibleRenderLayerTracker<View, RenderLayerType\>

[layer](../modules/layer.md).VisibleRenderLayerTracker

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/layer.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](renderlayer.VisibilityTrackedRenderLayer.md)<`View`\> |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

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
| `visibility` | [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1295)

## Properties

### debouncedUpdateVisibleLayers

• `Private` **debouncedUpdateVisibleLayers**: [`DebouncedFunc`](../interfaces/data_panel_layout._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:1292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1292)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

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

• **visibility**: [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md)

___

### visibleLayers\_

• `Private` **visibleLayers\_**: `Map`<`RenderLayerType`, [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

Maps a layer to the disposer to call when it is no longer visible.

#### Defined in

[src/neuroglancer/layer.ts:1290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1290)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visibleLayers

• `get` **visibleLayers**(): `Map`<`RenderLayerType`, [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Returns

`Map`<`RenderLayerType`, [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Defined in

[src/neuroglancer/layer.ts:1340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1340)

## Methods

### addRef

▸ **addRef**(): [`VisibleRenderLayerTracker`](layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Returns

[`VisibleRenderLayerTracker`](layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/layer.ts:1307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1307)

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

### updateVisibleLayers

▸ `Private` **updateVisibleLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1313)
