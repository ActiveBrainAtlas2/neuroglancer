[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/invlerp](../modules/neuroglancer_widget_invlerp.md) / CdfController

# Class: CdfController<T\>

[neuroglancer/widget/invlerp](../modules/neuroglancer_widget_invlerp.md).CdfController

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
| `T` | extends [`RangeAndWindowIntervals`](../interfaces/neuroglancer_widget_invlerp.RangeAndWindowIntervals.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`CdfController`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_invlerp.CdfController.md#constructor)

### Properties

- [dataType](neuroglancer_widget_invlerp.CdfController.md#datatype)
- [disposedStacks](neuroglancer_widget_invlerp.CdfController.md#disposedstacks)
- [element](neuroglancer_widget_invlerp.CdfController.md#element)
- [getModel](neuroglancer_widget_invlerp.CdfController.md#getmodel)
- [refCount](neuroglancer_widget_invlerp.CdfController.md#refcount)
- [setModel](neuroglancer_widget_invlerp.CdfController.md#setmodel)
- [wasDisposed](neuroglancer_widget_invlerp.CdfController.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_invlerp.CdfController.md#addref)
- [dispose](neuroglancer_widget_invlerp.CdfController.md#dispose)
- [disposed](neuroglancer_widget_invlerp.CdfController.md#disposed)
- [getTargetFraction](neuroglancer_widget_invlerp.CdfController.md#gettargetfraction)
- [getTargetValue](neuroglancer_widget_invlerp.CdfController.md#gettargetvalue)
- [getWindowLerp](neuroglancer_widget_invlerp.CdfController.md#getwindowlerp)
- [refCountReachedZero](neuroglancer_widget_invlerp.CdfController.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_invlerp.CdfController.md#registercancellable)
- [registerDisposer](neuroglancer_widget_invlerp.CdfController.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_invlerp.CdfController.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_invlerp.CdfController.md#unregisterdisposer)

## Constructors

### constructor

• **new CdfController**<`T`\>(`element`, `dataType`, `getModel`, `setModel`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RangeAndWindowIntervals`](../interfaces/neuroglancer_widget_invlerp.RangeAndWindowIntervals.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `getModel` | () => `T` |
| `setModel` | (`value`: `T`) => `void` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L57)

## Properties

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L58)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L58)

___

### getModel

• **getModel**: () => `T`

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L58)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### setModel

• **setModel**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L59)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CdfController`](neuroglancer_widget_invlerp.CdfController.md)<`T`\>

#### Returns

[`CdfController`](neuroglancer_widget_invlerp.CdfController.md)<`T`\>

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

### getTargetFraction

▸ **getTargetFraction**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MouseEvent`](../modules/main_module._internal_.md#mouseevent) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L129)

___

### getTargetValue

▸ **getTargetValue**(`event`): `undefined` \| `number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MouseEvent`](../modules/main_module._internal_.md#mouseevent) |

#### Returns

`undefined` \| `number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L138)

___

### getWindowLerp

▸ **getWindowLerp**(`relativeX`): `number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeX` | `number` |

#### Returns

`number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L134)

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
