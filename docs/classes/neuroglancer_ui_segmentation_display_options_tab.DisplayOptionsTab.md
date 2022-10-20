[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/segmentation\_display\_options\_tab](../modules/neuroglancer_ui_segmentation_display_options_tab.md) / DisplayOptionsTab

# Class: DisplayOptionsTab

[neuroglancer/ui/segmentation_display_options_tab](../modules/neuroglancer_ui_segmentation_display_options_tab.md).DisplayOptionsTab

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

- [`Tab`](neuroglancer_widget_tab_view.Tab.md)

  ↳ **`DisplayOptionsTab`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#disposedstacks)
- [element](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#element)
- [layer](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#layer)
- [refCount](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#refcount)
- [visibility](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#visibility)
- [wasDisposed](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#wasdisposed)

### Accessors

- [visible](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#visible)

### Methods

- [addRef](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#addref)
- [dispose](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#dispose)
- [disposed](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#disposed)
- [refCountReachedZero](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#registercancellable)
- [registerDisposer](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md#unregisterdisposer)

## Constructors

### constructor

• **new DisplayOptionsTab**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md) |

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[constructor](neuroglancer_widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/segmentation_display_options_tab.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/segmentation_display_options_tab.ts#L37)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposedStacks](neuroglancer_widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[element](neuroglancer_widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L32)

___

### layer

• **layer**: [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)

#### Defined in

[src/neuroglancer/ui/segmentation_display_options_tab.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/segmentation_display_options_tab.ts#L37)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCount](neuroglancer_widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[visibility](neuroglancer_widget_tab_view.Tab.md#visibility)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L39)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[wasDisposed](neuroglancer_widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addRef

▸ **addRef**(): [`DisplayOptionsTab`](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md)

#### Returns

[`DisplayOptionsTab`](neuroglancer_ui_segmentation_display_options_tab.DisplayOptionsTab.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[addRef](neuroglancer_widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[dispose](neuroglancer_widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposed](neuroglancer_widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L45)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCountReachedZero](neuroglancer_widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerCancellable](neuroglancer_widget_tab_view.Tab.md#registercancellable)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerDisposer](neuroglancer_widget_tab_view.Tab.md#registerdisposer)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerEventListener](neuroglancer_widget_tab_view.Tab.md#registereventlistener)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[unregisterDisposer](neuroglancer_widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
