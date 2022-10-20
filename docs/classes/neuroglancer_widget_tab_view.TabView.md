[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/tab\_view](../modules/neuroglancer_widget_tab_view.md) / TabView

# Class: TabView

[neuroglancer/widget/tab_view](../modules/neuroglancer_widget_tab_view.md).TabView

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

  ↳ **`TabView`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_tab_view.TabView.md#constructor)

### Properties

- [debouncedUpdateView](neuroglancer_widget_tab_view.TabView.md#debouncedupdateview)
- [disposedStacks](neuroglancer_widget_tab_view.TabView.md#disposedstacks)
- [element](neuroglancer_widget_tab_view.TabView.md#element)
- [handleTabElement](neuroglancer_widget_tab_view.TabView.md#handletabelement)
- [refCount](neuroglancer_widget_tab_view.TabView.md#refcount)
- [selectedTab](neuroglancer_widget_tab_view.TabView.md#selectedtab)
- [stack](neuroglancer_widget_tab_view.TabView.md#stack)
- [tabBar](neuroglancer_widget_tab_view.TabView.md#tabbar)
- [tabLabels](neuroglancer_widget_tab_view.TabView.md#tablabels)
- [tabs](neuroglancer_widget_tab_view.TabView.md#tabs)
- [tabsGeneration](neuroglancer_widget_tab_view.TabView.md#tabsgeneration)
- [visibility](neuroglancer_widget_tab_view.TabView.md#visibility)
- [wasDisposed](neuroglancer_widget_tab_view.TabView.md#wasdisposed)

### Accessors

- [visible](neuroglancer_widget_tab_view.TabView.md#visible)

### Methods

- [addRef](neuroglancer_widget_tab_view.TabView.md#addref)
- [destroyTabs](neuroglancer_widget_tab_view.TabView.md#destroytabs)
- [dispose](neuroglancer_widget_tab_view.TabView.md#dispose)
- [disposed](neuroglancer_widget_tab_view.TabView.md#disposed)
- [makeTabs](neuroglancer_widget_tab_view.TabView.md#maketabs)
- [refCountReachedZero](neuroglancer_widget_tab_view.TabView.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_tab_view.TabView.md#registercancellable)
- [registerDisposer](neuroglancer_widget_tab_view.TabView.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_tab_view.TabView.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_tab_view.TabView.md#unregisterdisposer)
- [updateTabLabelStyles](neuroglancer_widget_tab_view.TabView.md#updatetablabelstyles)
- [updateTabs](neuroglancer_widget_tab_view.TabView.md#updatetabs)

## Constructors

### constructor

• **new TabView**(`options`, `visibility?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TabViewOptions`](../interfaces/neuroglancer_widget_tab_view.TabViewOptions.md) |
| `visibility` | [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L290)

## Properties

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L287)

___

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

[src/neuroglancer/widget/tab_view.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L272)

___

### handleTabElement

• `Private` **handleTabElement**: `undefined` \| (`id`: `string`, `element`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)) => `void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L277)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### selectedTab

• **selectedTab**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L276)

___

### stack

• `Private` **stack**: [`StackView`](neuroglancer_widget_tab_view.StackView.md)<`string`, [`Tab`](neuroglancer_widget_tab_view.Tab.md)\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L279)

___

### tabBar

• **tabBar**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L273)

___

### tabLabels

• `Private` **tabLabels**: `Map`<`string`, [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L280)

___

### tabs

• **tabs**: [`WatchableValueChangeInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md)<{ `id`: `string` ; `label`: `string`  }[]\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L275)

___

### tabsGeneration

• `Private` **tabsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L281)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L292)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L283)

## Methods

### addRef

▸ **addRef**(): [`TabView`](neuroglancer_widget_tab_view.TabView.md)

#### Returns

[`TabView`](neuroglancer_widget_tab_view.TabView.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### destroyTabs

▸ `Private` **destroyTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L326)

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

[src/neuroglancer/widget/tab_view.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L360)

___

### makeTabs

▸ `Private` **makeTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L341)

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

### updateTabLabelStyles

▸ `Private` **updateTabLabelStyles**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L310)

___

### updateTabs

▸ `Private` **updateTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L317)
