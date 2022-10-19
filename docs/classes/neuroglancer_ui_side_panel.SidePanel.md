[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/side\_panel](../modules/neuroglancer_ui_side_panel.md) / SidePanel

# Class: SidePanel

[neuroglancer/ui/side_panel](../modules/neuroglancer_ui_side_panel.md).SidePanel

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SidePanel`**

  ↳↳ [`InputEventBindingHelpDialog`](neuroglancer_help_input_event_bindings.InputEventBindingHelpDialog.md)

  ↳↳ [`LayerListPanel`](neuroglancer_ui_layer_list_panel.LayerListPanel.md)

  ↳↳ [`SelectionDetailsPanel`](neuroglancer_ui_selection_details.SelectionDetailsPanel.md)

  ↳↳ [`StatisticsPanel`](neuroglancer_ui_statistics.StatisticsPanel.md)

  ↳↳ [`ViewerSettingsPanel`](neuroglancer_ui_viewer_settings.ViewerSettingsPanel.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_side_panel.SidePanel.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_side_panel.SidePanel.md#disposedstacks)
- [element](neuroglancer_ui_side_panel.SidePanel.md#element)
- [location](neuroglancer_ui_side_panel.SidePanel.md#location)
- [refCount](neuroglancer_ui_side_panel.SidePanel.md#refcount)
- [sidePanelManager](neuroglancer_ui_side_panel.SidePanel.md#sidepanelmanager)
- [visibility](neuroglancer_ui_side_panel.SidePanel.md#visibility)
- [wasDisposed](neuroglancer_ui_side_panel.SidePanel.md#wasdisposed)

### Methods

- [addBody](neuroglancer_ui_side_panel.SidePanel.md#addbody)
- [addRef](neuroglancer_ui_side_panel.SidePanel.md#addref)
- [addTitleBar](neuroglancer_ui_side_panel.SidePanel.md#addtitlebar)
- [close](neuroglancer_ui_side_panel.SidePanel.md#close)
- [dispose](neuroglancer_ui_side_panel.SidePanel.md#dispose)
- [disposed](neuroglancer_ui_side_panel.SidePanel.md#disposed)
- [makeDragSource](neuroglancer_ui_side_panel.SidePanel.md#makedragsource)
- [refCountReachedZero](neuroglancer_ui_side_panel.SidePanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_side_panel.SidePanel.md#registercancellable)
- [registerDisposer](neuroglancer_ui_side_panel.SidePanel.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_side_panel.SidePanel.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_side_panel.SidePanel.md#unregisterdisposer)

## Constructors

### constructor

• **new SidePanel**(`sidePanelManager`, `location?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md) |
| `location` | [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L84)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L82)

___

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L83)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addBody

▸ **addBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L146)

___

### addRef

▸ **addRef**(): [`SidePanel`](neuroglancer_ui_side_panel.SidePanel.md)

#### Returns

[`SidePanel`](neuroglancer_ui_side_panel.SidePanel.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

#### Defined in

[src/neuroglancer/ui/side_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L123)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L119)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### makeDragSource

▸ **makeDragSource**(): [`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Returns

[`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L109)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
