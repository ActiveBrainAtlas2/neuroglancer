[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / LayerReference

# Class: LayerReference

[neuroglancer/layer](../modules/neuroglancer_layer.md).LayerReference

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

  ↳ **`LayerReference`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.LayerReference.md#constructor)

### Properties

- [changed](neuroglancer_layer.LayerReference.md#changed)
- [disposedStacks](neuroglancer_layer.LayerReference.md#disposedstacks)
- [filter](neuroglancer_layer.LayerReference.md#filter)
- [layerManager](neuroglancer_layer.LayerReference.md#layermanager)
- [layerName\_](neuroglancer_layer.LayerReference.md#layername_)
- [layer\_](neuroglancer_layer.LayerReference.md#layer_)
- [refCount](neuroglancer_layer.LayerReference.md#refcount)
- [validate](neuroglancer_layer.LayerReference.md#validate)
- [wasDisposed](neuroglancer_layer.LayerReference.md#wasdisposed)

### Accessors

- [layer](neuroglancer_layer.LayerReference.md#layer)
- [layerName](neuroglancer_layer.LayerReference.md#layername)

### Methods

- [addRef](neuroglancer_layer.LayerReference.md#addref)
- [dispose](neuroglancer_layer.LayerReference.md#dispose)
- [disposed](neuroglancer_layer.LayerReference.md#disposed)
- [refCountReachedZero](neuroglancer_layer.LayerReference.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.LayerReference.md#registercancellable)
- [registerDisposer](neuroglancer_layer.LayerReference.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.LayerReference.md#registereventlistener)
- [reset](neuroglancer_layer.LayerReference.md#reset)
- [restoreState](neuroglancer_layer.LayerReference.md#restorestate)
- [toJSON](neuroglancer_layer.LayerReference.md#tojson)
- [unregisterDisposer](neuroglancer_layer.LayerReference.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerReference**(`layerManager`, `filter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](neuroglancer_layer.LayerManager.md) |
| `filter` | (`layer`: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)) => `boolean` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1529](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1529)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1528)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### filter

• **filter**: (`layer`: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)) => `boolean`

#### Type declaration

▸ (`layer`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

##### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1531)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1530)

___

### layerName\_

• `Private` **layerName\_**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/layer.ts:1526](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1526)

___

### layer\_

• `Private` **layer\_**: `undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1527](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1527)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### validate

• `Private` **validate**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:1584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1584)

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

[src/neuroglancer/layer.ts:1552](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1552)

• `set` **layer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1560](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1560)

___

### layerName

• `get` **layerName**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/layer.ts:1556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1556)

• `set` **layerName**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1574](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1574)

## Methods

### addRef

▸ **addRef**(): [`LayerReference`](neuroglancer_layer.LayerReference.md)

#### Returns

[`LayerReference`](neuroglancer_layer.LayerReference.md)

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

[src/neuroglancer/layer.ts:1612](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1612)

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

[src/neuroglancer/layer.ts:1599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1599)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/layer.ts:1604](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1604)

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
