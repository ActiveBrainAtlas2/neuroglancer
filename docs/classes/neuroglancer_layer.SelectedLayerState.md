[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / SelectedLayerState

# Class: SelectedLayerState

[neuroglancer/layer](../modules/neuroglancer_layer.md).SelectedLayerState

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

  ↳ **`SelectedLayerState`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.SelectedLayerState.md#constructor)

### Properties

- [changed](neuroglancer_layer.SelectedLayerState.md#changed)
- [disposedStacks](neuroglancer_layer.SelectedLayerState.md#disposedstacks)
- [existingLayerDisposer](neuroglancer_layer.SelectedLayerState.md#existinglayerdisposer)
- [layerManager](neuroglancer_layer.SelectedLayerState.md#layermanager)
- [layer\_](neuroglancer_layer.SelectedLayerState.md#layer_)
- [location](neuroglancer_layer.SelectedLayerState.md#location)
- [refCount](neuroglancer_layer.SelectedLayerState.md#refcount)
- [wasDisposed](neuroglancer_layer.SelectedLayerState.md#wasdisposed)

### Accessors

- [layer](neuroglancer_layer.SelectedLayerState.md#layer)
- [visible](neuroglancer_layer.SelectedLayerState.md#visible)

### Methods

- [addRef](neuroglancer_layer.SelectedLayerState.md#addref)
- [dispose](neuroglancer_layer.SelectedLayerState.md#dispose)
- [disposed](neuroglancer_layer.SelectedLayerState.md#disposed)
- [maybeDeleteNewLayer](neuroglancer_layer.SelectedLayerState.md#maybedeletenewlayer)
- [refCountReachedZero](neuroglancer_layer.SelectedLayerState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.SelectedLayerState.md#registercancellable)
- [registerDisposer](neuroglancer_layer.SelectedLayerState.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.SelectedLayerState.md#registereventlistener)
- [reset](neuroglancer_layer.SelectedLayerState.md#reset)
- [restoreState](neuroglancer_layer.SelectedLayerState.md#restorestate)
- [toJSON](neuroglancer_layer.SelectedLayerState.md#tojson)
- [toggle](neuroglancer_layer.SelectedLayerState.md#toggle)
- [unregisterDisposer](neuroglancer_layer.SelectedLayerState.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectedLayerState**(`layerManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](neuroglancer_layer.LayerManager.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1431)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1372)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### existingLayerDisposer

• `Private` `Optional` **existingLayerDisposer**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1429)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1431)

___

### layer\_

• **layer\_**: `undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1374)

___

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/layer.ts:1373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1373)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layer

• `get` **layer**(): `undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Returns

`undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1376)

• `set` **layer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1450)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1380)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1393)

## Methods

### addRef

▸ **addRef**(): [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

#### Returns

[`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### maybeDeleteNewLayer

▸ `Private` **maybeDeleteNewLayer**(`existingLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingLayer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1419)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/layer.ts:1519](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1519)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/layer.ts:1504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1504)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/layer.ts:1496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1496)

___

### toggle

▸ **toggle**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1384)

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
