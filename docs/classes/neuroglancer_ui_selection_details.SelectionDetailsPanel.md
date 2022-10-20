[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/selection\_details](../modules/neuroglancer_ui_selection_details.md) / SelectionDetailsPanel

# Class: SelectionDetailsPanel

[neuroglancer/ui/selection_details](../modules/neuroglancer_ui_selection_details.md).SelectionDetailsPanel

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

- [`SidePanel`](neuroglancer_ui_side_panel.SidePanel.md)

  ↳ **`SelectionDetailsPanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#constructor)

### Properties

- [body](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#body)
- [disposedStacks](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#disposedstacks)
- [element](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#element)
- [location](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#location)
- [manager](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#manager)
- [refCount](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#refcount)
- [selectedLayer](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#selectedlayer)
- [sidePanelManager](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#sidepanelmanager)
- [state](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#state)
- [visibility](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#visibility)
- [wasDisposed](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#wasdisposed)

### Methods

- [addBody](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#addbody)
- [addRef](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#addref)
- [addTitleBar](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#addtitlebar)
- [close](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#close)
- [dispose](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#dispose)
- [disposed](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#disposed)
- [makeDragSource](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#makedragsource)
- [refCountReachedZero](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#registercancellable)
- [registerDisposer](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_selection_details.SelectionDetailsPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectionDetailsPanel**(`sidePanelManager`, `state`, `manager`, `selectedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md) |
| `state` | [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md) |
| `manager` | [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md) |
| `selectedLayer` | [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md) |

#### Overrides

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[constructor](neuroglancer_ui_side_panel.SidePanel.md#constructor)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/selection_details.ts#L40)

## Properties

### body

• **body**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/selection_details.ts#L38)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[disposedStacks](neuroglancer_ui_side_panel.SidePanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[element](neuroglancer_ui_side_panel.SidePanel.md#element)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L82)

___

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[location](neuroglancer_ui_side_panel.SidePanel.md#location)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L86)

___

### manager

• **manager**: [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/selection_details.ts#L43)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[refCount](neuroglancer_ui_side_panel.SidePanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/selection_details.ts#L44)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[sidePanelManager](neuroglancer_ui_side_panel.SidePanel.md#sidepanelmanager)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/selection_details.ts#L41)

___

### state

• **state**: [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/selection_details.ts#L42)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[visibility](neuroglancer_ui_side_panel.SidePanel.md#visibility)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L83)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[wasDisposed](neuroglancer_ui_side_panel.SidePanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addBody

▸ **addBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addBody](neuroglancer_ui_side_panel.SidePanel.md#addbody)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L146)

___

### addRef

▸ **addRef**(): [`SelectionDetailsPanel`](neuroglancer_ui_selection_details.SelectionDetailsPanel.md)

#### Returns

[`SelectionDetailsPanel`](neuroglancer_ui_selection_details.SelectionDetailsPanel.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addRef](neuroglancer_ui_side_panel.SidePanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### addTitleBar

▸ **addTitleBar**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.title?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `closeButton` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `titleBar` | [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) |
| `titleElement` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addTitleBar](neuroglancer_ui_side_panel.SidePanel.md#addtitlebar)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L123)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Overrides

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[close](neuroglancer_ui_side_panel.SidePanel.md#close)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/selection_details.ts#L163)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[dispose](neuroglancer_ui_side_panel.SidePanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[disposed](neuroglancer_ui_side_panel.SidePanel.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### makeDragSource

▸ **makeDragSource**(): [`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Returns

[`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[makeDragSource](neuroglancer_ui_side_panel.SidePanel.md#makedragsource)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L109)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[refCountReachedZero](neuroglancer_ui_side_panel.SidePanel.md#refcountreachedzero)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerCancellable](neuroglancer_ui_side_panel.SidePanel.md#registercancellable)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerDisposer](neuroglancer_ui_side_panel.SidePanel.md#registerdisposer)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerEventListener](neuroglancer_ui_side_panel.SidePanel.md#registereventlistener)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[unregisterDisposer](neuroglancer_ui_side_panel.SidePanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
