[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / [<internal\>](../modules/neuroglancer_trackable_value._internal_.md) / DerivedWatchableValue

# Class: DerivedWatchableValue<U\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).[<internal>](../modules/neuroglancer_trackable_value._internal_.md).DerivedWatchableValue

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

| Name |
| :------ |
| `U` |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DerivedWatchableValue`**

## Implements

- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`U`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#constructor)

### Properties

- [changed](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#changed)
- [disposedStacks](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#disposedstacks)
- [f](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#f)
- [refCount](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#refcount)
- [wasDisposed](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#wasdisposed)
- [ws](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#ws)

### Accessors

- [value](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#value)

### Methods

- [addRef](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#addref)
- [dispose](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#dispose)
- [disposed](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#disposed)
- [refCountReachedZero](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#refcountreachedzero)
- [registerCancellable](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#registercancellable)
- [registerDisposer](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#registerdisposer)
- [registerEventListener](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#registereventlistener)
- [unregisterDisposer](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md#unregisterdisposer)

## Constructors

### constructor

• **new DerivedWatchableValue**<`U`\>(`f`, `ws`)

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (...`v`: `any`[]) => `U` |
| `ws` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`any`\>[] |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L81)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L74)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### f

• `Private` **f**: (...`v`: `any`[]) => `U`

#### Type declaration

▸ (...`v`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...v` | `any`[] |

##### Returns

`U`

#### Defined in

[src/neuroglancer/trackable_value.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L78)

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

___

### ws

• `Private` **ws**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`any`\>[]

#### Defined in

[src/neuroglancer/trackable_value.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L79)

## Accessors

### value

• `get` **value**(): `U`

#### Returns

`U`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L75)

## Methods

### addRef

▸ **addRef**(): [`DerivedWatchableValue`](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)<`U`\>

#### Returns

[`DerivedWatchableValue`](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)<`U`\>

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
