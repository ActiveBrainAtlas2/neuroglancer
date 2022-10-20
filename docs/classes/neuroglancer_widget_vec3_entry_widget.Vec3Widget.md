[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/vec3\_entry\_widget](../modules/neuroglancer_widget_vec3_entry_widget.md) / Vec3Widget

# Class: Vec3Widget

[neuroglancer/widget/vec3_entry_widget](../modules/neuroglancer_widget_vec3_entry_widget.md).Vec3Widget

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

  ↳ **`Vec3Widget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#disposedstacks)
- [element](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#element)
- [inputx](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#inputx)
- [inputy](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#inputy)
- [inputz](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#inputz)
- [model](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#model)
- [promptElement](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#promptelement)
- [refCount](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#refcount)
- [valueEntered](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#valueentered)
- [wasDisposed](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#addref)
- [dispose](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#dispose)
- [disposed](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#disposed)
- [getVec3Values](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#getvec3values)
- [refCountReachedZero](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#unregisterdisposer)
- [updateInput](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#updateinput)
- [verifyValue](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md#verifyvalue)

## Constructors

### constructor

• **new Vec3Widget**(`model`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`TrackableVec3`](neuroglancer_trackable_vec3.TrackableVec3.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L33)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLLabelElement`](../modules/main_module._internal_.md#htmllabelelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L27)

___

### inputx

• **inputx**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L28)

___

### inputy

• **inputy**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L29)

___

### inputz

• **inputz**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L30)

___

### model

• **model**: [`TrackableVec3`](neuroglancer_trackable_vec3.TrackableVec3.md)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L33)

___

### promptElement

• **promptElement**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L26)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### valueEntered

• **valueEntered**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`value`: `number`) => `void`\>

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L31)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`Vec3Widget`](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md)

#### Returns

[`Vec3Widget`](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md)

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

[src/neuroglancer/widget/vec3_entry_widget.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L80)

___

### getVec3Values

▸ **getVec3Values**(): [`vec3`](neuroglancer_util_geom.vec3.md)

#### Returns

[`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L61)

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

### updateInput

▸ **updateInput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L74)

___

### verifyValue

▸ **verifyValue**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/vec3_entry_widget.ts#L70)
