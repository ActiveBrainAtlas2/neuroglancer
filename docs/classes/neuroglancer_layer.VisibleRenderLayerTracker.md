[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / VisibleRenderLayerTracker

# Class: VisibleRenderLayerTracker<View, RenderLayerType\>

[neuroglancer/layer](../modules/neuroglancer_layer.md).VisibleRenderLayerTracker

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

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/neuroglancer_layer.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<`View`\> |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`VisibleRenderLayerTracker`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.VisibleRenderLayerTracker.md#constructor)

### Properties

- [debouncedUpdateVisibleLayers](neuroglancer_layer.VisibleRenderLayerTracker.md#debouncedupdatevisiblelayers)
- [disposedStacks](neuroglancer_layer.VisibleRenderLayerTracker.md#disposedstacks)
- [layerAdded](neuroglancer_layer.VisibleRenderLayerTracker.md#layeradded)
- [layerManager](neuroglancer_layer.VisibleRenderLayerTracker.md#layermanager)
- [refCount](neuroglancer_layer.VisibleRenderLayerTracker.md#refcount)
- [renderLayerType](neuroglancer_layer.VisibleRenderLayerTracker.md#renderlayertype)
- [roles](neuroglancer_layer.VisibleRenderLayerTracker.md#roles)
- [view](neuroglancer_layer.VisibleRenderLayerTracker.md#view)
- [visibility](neuroglancer_layer.VisibleRenderLayerTracker.md#visibility)
- [visibleLayers\_](neuroglancer_layer.VisibleRenderLayerTracker.md#visiblelayers_)
- [wasDisposed](neuroglancer_layer.VisibleRenderLayerTracker.md#wasdisposed)

### Accessors

- [visibleLayers](neuroglancer_layer.VisibleRenderLayerTracker.md#visiblelayers)

### Methods

- [addRef](neuroglancer_layer.VisibleRenderLayerTracker.md#addref)
- [dispose](neuroglancer_layer.VisibleRenderLayerTracker.md#dispose)
- [disposed](neuroglancer_layer.VisibleRenderLayerTracker.md#disposed)
- [refCountReachedZero](neuroglancer_layer.VisibleRenderLayerTracker.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.VisibleRenderLayerTracker.md#registercancellable)
- [registerDisposer](neuroglancer_layer.VisibleRenderLayerTracker.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.VisibleRenderLayerTracker.md#registereventlistener)
- [unregisterDisposer](neuroglancer_layer.VisibleRenderLayerTracker.md#unregisterdisposer)
- [updateVisibleLayers](neuroglancer_layer.VisibleRenderLayerTracker.md#updatevisiblelayers)

## Constructors

### constructor

• **new VisibleRenderLayerTracker**<`View`, `RenderLayerType`\>(`layerManager`, `renderLayerType`, `view`, `roles`, `layerAdded`, `visibility`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/neuroglancer_layer.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `unknown`, `RenderLayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](neuroglancer_layer.LayerManager.md) |
| `renderLayerType` | (...`args`: `any`[]) => `RenderLayerType` |
| `view` | `View` |
| `roles` | [`WatchableSet`](neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\> |
| `layerAdded` | (`layer`: `RenderLayerType`, `info`: [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<`View`, `unknown`\>) => `void` |
| `visibility` | [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1295)

## Properties

### debouncedUpdateVisibleLayers

• `Private` **debouncedUpdateVisibleLayers**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:1292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1292)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### layerAdded

• `Private` **layerAdded**: (`layer`: `RenderLayerType`, `info`: [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<`View`, `unknown`\>) => `void`

#### Type declaration

▸ (`layer`, `info`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `RenderLayerType` |
| `info` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<`View`, `unknown`\> |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1299)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1296)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayerType

• **renderLayerType**: (...`args`: `any`[]) => `RenderLayerType`

#### Type declaration

• **new VisibleRenderLayerTracker**(...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/neuroglancer/layer.ts:1297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1297)

___

### roles

• **roles**: [`WatchableSet`](neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1298)

___

### view

• **view**: `View`

#### Defined in

[src/neuroglancer/layer.ts:1297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1297)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Defined in

[src/neuroglancer/layer.ts:1300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1300)

___

### visibleLayers\_

• `Private` **visibleLayers\_**: `Map`<`RenderLayerType`, [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

Maps a layer to the disposer to call when it is no longer visible.

#### Defined in

[src/neuroglancer/layer.ts:1290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1290)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visibleLayers

• `get` **visibleLayers**(): `Map`<`RenderLayerType`, [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Returns

`Map`<`RenderLayerType`, [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<`View`, `unknown`\>\>

#### Defined in

[src/neuroglancer/layer.ts:1340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1340)

## Methods

### addRef

▸ **addRef**(): [`VisibleRenderLayerTracker`](neuroglancer_layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Returns

[`VisibleRenderLayerTracker`](neuroglancer_layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/layer.ts:1307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1307)

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

### updateVisibleLayers

▸ `Private` **updateVisibleLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1313)
