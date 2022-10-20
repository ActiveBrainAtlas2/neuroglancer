[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/linked\_layer](../modules/neuroglancer_widget_linked_layer.md) / LinkedLayerGroupWidget

# Class: LinkedLayerGroupWidget

[neuroglancer/widget/linked_layer](../modules/neuroglancer_widget_linked_layer.md).LinkedLayerGroupWidget

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

  ↳ **`LinkedLayerGroupWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#disposedstacks)
- [element](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#element)
- [group](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#group)
- [label](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#label)
- [linkedLayers](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#linkedlayers)
- [refCount](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#refcount)
- [selectElement](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#selectelement)
- [topRow](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#toprow)
- [unlinkButton](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#unlinkbutton)
- [wasDisposed](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#addref)
- [dispose](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#dispose)
- [disposed](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#unregisterdisposer)
- [updateModel](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#updatemodel)
- [updateView](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md#updateview)

## Constructors

### constructor

• **new LinkedLayerGroupWidget**(`group`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L32)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L26)

___

### group

• **group**: [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L32)

___

### label

• **label**: [`HTMLLabelElement`](../modules/main_module._internal_.md#htmllabelelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L28)

___

### linkedLayers

• `Private` **linkedLayers**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L30)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### selectElement

• `Private` **selectElement**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L29)

___

### topRow

• **topRow**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L27)

___

### unlinkButton

• `Private` **unlinkButton**: [`HTMLButtonElement`](../modules/main_module._internal_.md#htmlbuttonelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L31)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkedLayerGroupWidget`](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md)

#### Returns

[`LinkedLayerGroupWidget`](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md)

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

___

### updateModel

▸ `Private` **updateModel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L56)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/linked_layer.ts#L65)
