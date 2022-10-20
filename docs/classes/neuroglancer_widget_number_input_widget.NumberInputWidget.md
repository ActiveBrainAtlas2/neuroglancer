[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/number\_input\_widget](../modules/neuroglancer_widget_number_input_widget.md) / NumberInputWidget

# Class: NumberInputWidget

[neuroglancer/widget/number_input_widget](../modules/neuroglancer_widget_number_input_widget.md).NumberInputWidget

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

  ↳ **`NumberInputWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_number_input_widget.NumberInputWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_number_input_widget.NumberInputWidget.md#disposedstacks)
- [element](neuroglancer_widget_number_input_widget.NumberInputWidget.md#element)
- [inputElement](neuroglancer_widget_number_input_widget.NumberInputWidget.md#inputelement)
- [model](neuroglancer_widget_number_input_widget.NumberInputWidget.md#model)
- [refCount](neuroglancer_widget_number_input_widget.NumberInputWidget.md#refcount)
- [validator](neuroglancer_widget_number_input_widget.NumberInputWidget.md#validator)
- [wasDisposed](neuroglancer_widget_number_input_widget.NumberInputWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_number_input_widget.NumberInputWidget.md#addref)
- [dispose](neuroglancer_widget_number_input_widget.NumberInputWidget.md#dispose)
- [disposed](neuroglancer_widget_number_input_widget.NumberInputWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_number_input_widget.NumberInputWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_number_input_widget.NumberInputWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_number_input_widget.NumberInputWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_number_input_widget.NumberInputWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_number_input_widget.NumberInputWidget.md#unregisterdisposer)
- [updateModel](neuroglancer_widget_number_input_widget.NumberInputWidget.md#updatemodel)
- [updateView](neuroglancer_widget_number_input_widget.NumberInputWidget.md#updateview)

## Constructors

### constructor

• **new NumberInputWidget**(`model`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`number`\> |
| `options` | `Object` |
| `options.label?` | `string` |
| `options.validator?` | (`x`: `number`) => `number` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/number_input_widget.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L25)

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

[src/neuroglancer/widget/number_input_widget.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L22)

___

### inputElement

• **inputElement**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/number_input_widget.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L23)

___

### model

• **model**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/widget/number_input_widget.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L25)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### validator

• **validator**: (`x`: `number`) => `number`

#### Type declaration

▸ (`x`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

##### Returns

`number`

#### Defined in

[src/neuroglancer/widget/number_input_widget.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L24)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`NumberInputWidget`](neuroglancer_widget_number_input_widget.NumberInputWidget.md)

#### Returns

[`NumberInputWidget`](neuroglancer_widget_number_input_widget.NumberInputWidget.md)

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

[src/neuroglancer/widget/number_input_widget.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L69)

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

### updateModel

▸ `Private` **updateModel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/number_input_widget.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L55)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/number_input_widget.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/number_input_widget.ts#L51)
