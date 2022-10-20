[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_list\_panel](../modules/neuroglancer_ui_layer_list_panel.md) / [<internal\>](../modules/neuroglancer_ui_layer_list_panel._internal_.md) / LayerListItem

# Class: LayerListItem

[neuroglancer/ui/layer_list_panel](../modules/neuroglancer_ui_layer_list_panel.md).[<internal>](../modules/neuroglancer_ui_layer_list_panel._internal_.md).LayerListItem

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

  ↳ **`LayerListItem`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#disposedstacks)
- [element](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#element)
- [generation](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#generation)
- [layer](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#layer)
- [numberElement](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#numberelement)
- [panel](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#panel)
- [refCount](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#refcount)
- [wasDisposed](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#addref)
- [dispose](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#dispose)
- [disposed](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#disposed)
- [refCountReachedZero](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerListItem**(`panel`, `layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`LayerListPanel`](neuroglancer_ui_layer_list_panel.LayerListPanel.md) |
| `layer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L124)

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

[src/neuroglancer/ui/layer_list_panel.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L121)

___

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L123)

___

### layer

• **layer**: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L124)

___

### numberElement

• **numberElement**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L122)

___

### panel

• **panel**: [`LayerListPanel`](neuroglancer_ui_layer_list_panel.LayerListPanel.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L124)

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

## Methods

### addRef

▸ **addRef**(): [`LayerListItem`](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md)

#### Returns

[`LayerListItem`](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md)

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
