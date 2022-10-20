[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / TrackableRefCounted

# Class: TrackableRefCounted<T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).TrackableRefCounted

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
| `T` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) |

## Hierarchy

- [`WatchableRefCounted`](neuroglancer_trackable_value.WatchableRefCounted.md)<`T`\>

  ↳ **`TrackableRefCounted`**

## Implements

- [`TrackableValueInterface`](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)<`T` \| `undefined`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_trackable_value.TrackableRefCounted.md#constructor)

### Properties

- [changed](neuroglancer_trackable_value.TrackableRefCounted.md#changed)
- [disposedStacks](neuroglancer_trackable_value.TrackableRefCounted.md#disposedstacks)
- [jsonConverter](neuroglancer_trackable_value.TrackableRefCounted.md#jsonconverter)
- [refCount](neuroglancer_trackable_value.TrackableRefCounted.md#refcount)
- [validator](neuroglancer_trackable_value.TrackableRefCounted.md#validator)
- [wasDisposed](neuroglancer_trackable_value.TrackableRefCounted.md#wasdisposed)

### Accessors

- [value](neuroglancer_trackable_value.TrackableRefCounted.md#value)

### Methods

- [addRef](neuroglancer_trackable_value.TrackableRefCounted.md#addref)
- [dispose](neuroglancer_trackable_value.TrackableRefCounted.md#dispose)
- [disposed](neuroglancer_trackable_value.TrackableRefCounted.md#disposed)
- [refCountReachedZero](neuroglancer_trackable_value.TrackableRefCounted.md#refcountreachedzero)
- [registerCancellable](neuroglancer_trackable_value.TrackableRefCounted.md#registercancellable)
- [registerDisposer](neuroglancer_trackable_value.TrackableRefCounted.md#registerdisposer)
- [registerEventListener](neuroglancer_trackable_value.TrackableRefCounted.md#registereventlistener)
- [reset](neuroglancer_trackable_value.TrackableRefCounted.md#reset)
- [restoreState](neuroglancer_trackable_value.TrackableRefCounted.md#restorestate)
- [toJSON](neuroglancer_trackable_value.TrackableRefCounted.md#tojson)
- [unregisterDisposer](neuroglancer_trackable_value.TrackableRefCounted.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableRefCounted**<`T`\>(`validator`, `jsonConverter`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | (`value`: `any`) => `undefined` \| `T` |
| `jsonConverter` | (`value`: `T`) => `any` |

#### Overrides

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[constructor](neuroglancer_trackable_value.WatchableRefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L244)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#changed)

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[changed](neuroglancer_trackable_value.WatchableRefCounted.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L193)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[disposedStacks](neuroglancer_trackable_value.WatchableRefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### jsonConverter

• **jsonConverter**: (`value`: `T`) => `any`

#### Type declaration

▸ (`value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`any`

#### Defined in

[src/neuroglancer/trackable_value.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L245)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[refCount](neuroglancer_trackable_value.WatchableRefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### validator

• **validator**: (`value`: `any`) => `undefined` \| `T`

#### Type declaration

▸ (`value`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`undefined` \| `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L245)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[wasDisposed](neuroglancer_trackable_value.WatchableRefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#value)

#### Inherited from

WatchableRefCounted.value

#### Defined in

[src/neuroglancer/trackable_value.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L198)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#value)

#### Inherited from

WatchableRefCounted.value

#### Defined in

[src/neuroglancer/trackable_value.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L202)

## Methods

### addRef

▸ **addRef**(): [`TrackableRefCounted`](neuroglancer_trackable_value.TrackableRefCounted.md)<`T`\>

#### Returns

[`TrackableRefCounted`](neuroglancer_trackable_value.TrackableRefCounted.md)<`T`\>

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[addRef](neuroglancer_trackable_value.WatchableRefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[dispose](neuroglancer_trackable_value.WatchableRefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[disposed](neuroglancer_trackable_value.WatchableRefCounted.md#disposed)

#### Defined in

[src/neuroglancer/trackable_value.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L229)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[refCountReachedZero](neuroglancer_trackable_value.WatchableRefCounted.md#refcountreachedzero)

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

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[registerCancellable](neuroglancer_trackable_value.WatchableRefCounted.md#registercancellable)

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

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[registerDisposer](neuroglancer_trackable_value.WatchableRefCounted.md#registerdisposer)

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

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[registerEventListener](neuroglancer_trackable_value.WatchableRefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

TrackableValueInterface.reset

#### Inherited from

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[reset](neuroglancer_trackable_value.WatchableRefCounted.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L225)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Implementation of

TrackableValueInterface.restoreState

#### Defined in

[src/neuroglancer/trackable_value.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L253)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

TrackableValueInterface.toJSON

#### Defined in

[src/neuroglancer/trackable_value.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L248)

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

[WatchableRefCounted](neuroglancer_trackable_value.WatchableRefCounted.md).[unregisterDisposer](neuroglancer_trackable_value.WatchableRefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
