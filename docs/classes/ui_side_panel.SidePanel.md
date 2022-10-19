[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/side\_panel](../modules/ui_side_panel.md) / SidePanel

# Class: SidePanel

[ui/side_panel](../modules/ui_side_panel.md).SidePanel

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SidePanel`**

  ↳↳ [`InputEventBindingHelpDialog`](help_input_event_bindings.InputEventBindingHelpDialog.md)

  ↳↳ [`LayerListPanel`](ui_layer_list_panel.LayerListPanel.md)

  ↳↳ [`SelectionDetailsPanel`](ui_selection_details.SelectionDetailsPanel.md)

  ↳↳ [`StatisticsPanel`](ui_statistics.StatisticsPanel.md)

  ↳↳ [`ViewerSettingsPanel`](ui_viewer_settings.ViewerSettingsPanel.md)

## Table of contents

### Constructors

- [constructor](ui_side_panel.SidePanel.md#constructor)

### Properties

- [disposedStacks](ui_side_panel.SidePanel.md#disposedstacks)
- [element](ui_side_panel.SidePanel.md#element)
- [location](ui_side_panel.SidePanel.md#location)
- [refCount](ui_side_panel.SidePanel.md#refcount)
- [sidePanelManager](ui_side_panel.SidePanel.md#sidepanelmanager)
- [visibility](ui_side_panel.SidePanel.md#visibility)
- [wasDisposed](ui_side_panel.SidePanel.md#wasdisposed)

### Methods

- [addBody](ui_side_panel.SidePanel.md#addbody)
- [addRef](ui_side_panel.SidePanel.md#addref)
- [addTitleBar](ui_side_panel.SidePanel.md#addtitlebar)
- [close](ui_side_panel.SidePanel.md#close)
- [dispose](ui_side_panel.SidePanel.md#dispose)
- [disposed](ui_side_panel.SidePanel.md#disposed)
- [makeDragSource](ui_side_panel.SidePanel.md#makedragsource)
- [refCountReachedZero](ui_side_panel.SidePanel.md#refcountreachedzero)
- [registerCancellable](ui_side_panel.SidePanel.md#registercancellable)
- [registerDisposer](ui_side_panel.SidePanel.md#registerdisposer)
- [registerEventListener](ui_side_panel.SidePanel.md#registereventlistener)
- [unregisterDisposer](ui_side_panel.SidePanel.md#unregisterdisposer)

## Constructors

### constructor

• **new SidePanel**(`sidePanelManager`, `location?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](ui_side_panel.SidePanelManager.md) |
| `location` | [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L84)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L82)

___

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](ui_side_panel.SidePanelManager.md)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L83)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addBody

▸ **addBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L146)

___

### addRef

▸ **addRef**(): [`SidePanel`](ui_side_panel.SidePanel.md)

#### Returns

[`SidePanel`](ui_side_panel.SidePanel.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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
| `closeButton` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `titleBar` | [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `titleElement` | `undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Defined in

[src/neuroglancer/ui/side_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L123)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L119)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### makeDragSource

▸ **makeDragSource**(): [`DragSource`](../interfaces/ui_side_panel.DragSource.md)

#### Returns

[`DragSource`](../interfaces/ui_side_panel.DragSource.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L109)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
