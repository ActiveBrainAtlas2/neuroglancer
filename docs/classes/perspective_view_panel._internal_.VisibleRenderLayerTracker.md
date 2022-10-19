[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / [<internal\>](../modules/perspective_view_panel._internal_.md) / VisibleRenderLayerTracker

# Class: VisibleRenderLayerTracker<View, RenderLayerType\>

[perspective_view/panel](../modules/perspective_view_panel.md).[<internal>](../modules/perspective_view_panel._internal_.md).VisibleRenderLayerTracker

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<`View`\> |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`VisibleRenderLayerTracker`**

## Table of contents

### Constructors

- [constructor](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#constructor)

### Properties

- [debouncedUpdateVisibleLayers](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#debouncedupdatevisiblelayers)
- [disposedStacks](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#disposedstacks)
- [layerManager](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#layermanager)
- [refCount](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#refcount)
- [renderLayerType](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#renderlayertype)
- [roles](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#roles)
- [view](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#view)
- [visibility](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#visibility)
- [visibleLayers\_](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#visiblelayers_)
- [wasDisposed](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#wasdisposed)

### Accessors

- [visibleLayers](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#visiblelayers)

### Methods

- [addRef](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#addref)
- [dispose](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#dispose)
- [disposed](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#disposed)
- [refCountReachedZero](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#refcountreachedzero)
- [registerCancellable](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#registercancellable)
- [registerDisposer](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#registerdisposer)
- [registerEventListener](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#registereventlistener)
- [unregisterDisposer](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#unregisterdisposer)
- [updateVisibleLayers](perspective_view_panel._internal_.VisibleRenderLayerTracker.md#updatevisiblelayers)

## Constructors

### constructor

• **new VisibleRenderLayerTracker**<`View`, `RenderLayerType`\>(`layerManager`, `renderLayerType`, `view`, `roles`, `layerAdded`, `visibility`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<`View`, `unknown`, `RenderLayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md) |
| `renderLayerType` | (...`args`: `any`[]) => `RenderLayerType` |
| `view` | `View` |
| `roles` | [`WatchableSet`](datasource_state_share._internal_.WatchableSet.md)<[`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md)\> |
| `layerAdded` | (`layer`: `RenderLayerType`, `info`: [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<`View`, `unknown`\>) => `void` |
| `visibility` | [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1295)

## Properties

### debouncedUpdateVisibleLayers

• `Private` **debouncedUpdateVisibleLayers**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:1292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1292)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

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

• **roles**: [`WatchableSet`](datasource_state_share._internal_.WatchableSet.md)<[`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md)\>

___

### view

• **view**: `View`

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

___

### visibleLayers\_

• `Private` **visibleLayers\_**: `Map`<`RenderLayerType`, [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<`View`, `unknown`\>\>

Maps a layer to the disposer to call when it is no longer visible.

#### Defined in

[src/neuroglancer/layer.ts:1290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1290)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visibleLayers

• `get` **visibleLayers**(): `Map`<`RenderLayerType`, [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Returns

`Map`<`RenderLayerType`, [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Defined in

[src/neuroglancer/layer.ts:1340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1340)

## Methods

### addRef

▸ **addRef**(): [`VisibleRenderLayerTracker`](perspective_view_panel._internal_.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Returns

[`VisibleRenderLayerTracker`](perspective_view_panel._internal_.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/layer.ts:1307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1307)

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

### updateVisibleLayers

▸ `Private` **updateVisibleLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1313)
