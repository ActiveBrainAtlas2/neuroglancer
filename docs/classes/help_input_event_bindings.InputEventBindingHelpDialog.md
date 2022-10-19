[neuroglancer](../README.md) / [Modules](../modules.md) / [help/input\_event\_bindings](../modules/help_input_event_bindings.md) / InputEventBindingHelpDialog

# Class: InputEventBindingHelpDialog

[help/input_event_bindings](../modules/help_input_event_bindings.md).InputEventBindingHelpDialog

## Hierarchy

- [`SidePanel`](ui_side_panel.SidePanel.md)

  ↳ **`InputEventBindingHelpDialog`**

## Table of contents

### Constructors

- [constructor](help_input_event_bindings.InputEventBindingHelpDialog.md#constructor)

### Properties

- [disposedStacks](help_input_event_bindings.InputEventBindingHelpDialog.md#disposedstacks)
- [element](help_input_event_bindings.InputEventBindingHelpDialog.md#element)
- [location](help_input_event_bindings.InputEventBindingHelpDialog.md#location)
- [refCount](help_input_event_bindings.InputEventBindingHelpDialog.md#refcount)
- [scroll](help_input_event_bindings.InputEventBindingHelpDialog.md#scroll)
- [sidePanelManager](help_input_event_bindings.InputEventBindingHelpDialog.md#sidepanelmanager)
- [visibility](help_input_event_bindings.InputEventBindingHelpDialog.md#visibility)
- [wasDisposed](help_input_event_bindings.InputEventBindingHelpDialog.md#wasdisposed)

### Methods

- [addBody](help_input_event_bindings.InputEventBindingHelpDialog.md#addbody)
- [addRef](help_input_event_bindings.InputEventBindingHelpDialog.md#addref)
- [addTitleBar](help_input_event_bindings.InputEventBindingHelpDialog.md#addtitlebar)
- [close](help_input_event_bindings.InputEventBindingHelpDialog.md#close)
- [dispose](help_input_event_bindings.InputEventBindingHelpDialog.md#dispose)
- [disposed](help_input_event_bindings.InputEventBindingHelpDialog.md#disposed)
- [makeDragSource](help_input_event_bindings.InputEventBindingHelpDialog.md#makedragsource)
- [refCountReachedZero](help_input_event_bindings.InputEventBindingHelpDialog.md#refcountreachedzero)
- [registerCancellable](help_input_event_bindings.InputEventBindingHelpDialog.md#registercancellable)
- [registerDisposer](help_input_event_bindings.InputEventBindingHelpDialog.md#registerdisposer)
- [registerEventListener](help_input_event_bindings.InputEventBindingHelpDialog.md#registereventlistener)
- [unregisterDisposer](help_input_event_bindings.InputEventBindingHelpDialog.md#unregisterdisposer)
- [updateView](help_input_event_bindings.InputEventBindingHelpDialog.md#updateview)

## Constructors

### constructor

• **new InputEventBindingHelpDialog**(`sidePanelManager`, `state`, `bindings`, `layerManager`, `toolBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](ui_side_panel.SidePanelManager.md) |
| `state` | [`HelpPanelState`](help_input_event_bindings.HelpPanelState.md) |
| `bindings` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<[`string`, [`EventActionMap`](util_event_action_map.EventActionMap.md)]\> |
| `layerManager` | [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md) |
| `toolBinder` | [`ToolBinder`](ui_tool.ToolBinder.md) |

#### Overrides

[SidePanel](ui_side_panel.SidePanel.md).[constructor](ui_side_panel.SidePanel.md#constructor)

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L71)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[disposedStacks](ui_side_panel.SidePanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[element](ui_side_panel.SidePanel.md#element)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L82)

___

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[location](ui_side_panel.SidePanel.md#location)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[refCount](ui_side_panel.SidePanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### scroll

• **scroll**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L69)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](ui_side_panel.SidePanelManager.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[sidePanelManager](ui_side_panel.SidePanel.md#sidepanelmanager)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[visibility](ui_side_panel.SidePanel.md#visibility)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L83)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[wasDisposed](ui_side_panel.SidePanel.md#wasdisposed)

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

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[addBody](ui_side_panel.SidePanel.md#addbody)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L146)

___

### addRef

▸ **addRef**(): [`InputEventBindingHelpDialog`](help_input_event_bindings.InputEventBindingHelpDialog.md)

#### Returns

[`InputEventBindingHelpDialog`](help_input_event_bindings.InputEventBindingHelpDialog.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[addRef](ui_side_panel.SidePanel.md#addref)

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

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[addTitleBar](ui_side_panel.SidePanel.md#addtitlebar)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L123)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[close](ui_side_panel.SidePanel.md#close)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L119)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[dispose](ui_side_panel.SidePanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[disposed](ui_side_panel.SidePanel.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### makeDragSource

▸ **makeDragSource**(): [`DragSource`](../interfaces/ui_side_panel.DragSource.md)

#### Returns

[`DragSource`](../interfaces/ui_side_panel.DragSource.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[makeDragSource](ui_side_panel.SidePanel.md#makedragsource)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L109)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[refCountReachedZero](ui_side_panel.SidePanel.md#refcountreachedzero)

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

[SidePanel](ui_side_panel.SidePanel.md).[registerCancellable](ui_side_panel.SidePanel.md#registercancellable)

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

[SidePanel](ui_side_panel.SidePanel.md).[registerDisposer](ui_side_panel.SidePanel.md#registerdisposer)

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

[SidePanel](ui_side_panel.SidePanel.md).[registerEventListener](ui_side_panel.SidePanel.md#registereventlistener)

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

[SidePanel](ui_side_panel.SidePanel.md).[unregisterDisposer](ui_side_panel.SidePanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L91)
