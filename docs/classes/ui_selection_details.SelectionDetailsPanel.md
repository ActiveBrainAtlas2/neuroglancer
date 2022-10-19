[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/selection\_details](../modules/ui_selection_details.md) / SelectionDetailsPanel

# Class: SelectionDetailsPanel

[ui/selection_details](../modules/ui_selection_details.md).SelectionDetailsPanel

## Hierarchy

- [`SidePanel`](ui_side_panel.SidePanel.md)

  ↳ **`SelectionDetailsPanel`**

## Table of contents

### Constructors

- [constructor](ui_selection_details.SelectionDetailsPanel.md#constructor)

### Properties

- [body](ui_selection_details.SelectionDetailsPanel.md#body)
- [disposedStacks](ui_selection_details.SelectionDetailsPanel.md#disposedstacks)
- [element](ui_selection_details.SelectionDetailsPanel.md#element)
- [location](ui_selection_details.SelectionDetailsPanel.md#location)
- [manager](ui_selection_details.SelectionDetailsPanel.md#manager)
- [refCount](ui_selection_details.SelectionDetailsPanel.md#refcount)
- [selectedLayer](ui_selection_details.SelectionDetailsPanel.md#selectedlayer)
- [sidePanelManager](ui_selection_details.SelectionDetailsPanel.md#sidepanelmanager)
- [state](ui_selection_details.SelectionDetailsPanel.md#state)
- [visibility](ui_selection_details.SelectionDetailsPanel.md#visibility)
- [wasDisposed](ui_selection_details.SelectionDetailsPanel.md#wasdisposed)

### Methods

- [addBody](ui_selection_details.SelectionDetailsPanel.md#addbody)
- [addRef](ui_selection_details.SelectionDetailsPanel.md#addref)
- [addTitleBar](ui_selection_details.SelectionDetailsPanel.md#addtitlebar)
- [close](ui_selection_details.SelectionDetailsPanel.md#close)
- [dispose](ui_selection_details.SelectionDetailsPanel.md#dispose)
- [disposed](ui_selection_details.SelectionDetailsPanel.md#disposed)
- [makeDragSource](ui_selection_details.SelectionDetailsPanel.md#makedragsource)
- [refCountReachedZero](ui_selection_details.SelectionDetailsPanel.md#refcountreachedzero)
- [registerCancellable](ui_selection_details.SelectionDetailsPanel.md#registercancellable)
- [registerDisposer](ui_selection_details.SelectionDetailsPanel.md#registerdisposer)
- [registerEventListener](ui_selection_details.SelectionDetailsPanel.md#registereventlistener)
- [unregisterDisposer](ui_selection_details.SelectionDetailsPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectionDetailsPanel**(`sidePanelManager`, `state`, `manager`, `selectedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](ui_side_panel.SidePanelManager.md) |
| `state` | [`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md) |
| `manager` | [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md) |
| `selectedLayer` | [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md) |

#### Overrides

[SidePanel](ui_side_panel.SidePanel.md).[constructor](ui_side_panel.SidePanel.md#constructor)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/selection_details.ts#L40)

## Properties

### body

• **body**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/selection_details.ts#L38)

___

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

### manager

• **manager**: [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[refCount](ui_side_panel.SidePanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](ui_side_panel.SidePanelManager.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[sidePanelManager](ui_side_panel.SidePanel.md#sidepanelmanager)

___

### state

• **state**: [`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

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

▸ **addRef**(): [`SelectionDetailsPanel`](ui_selection_details.SelectionDetailsPanel.md)

#### Returns

[`SelectionDetailsPanel`](ui_selection_details.SelectionDetailsPanel.md)

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

#### Overrides

[SidePanel](ui_side_panel.SidePanel.md).[close](ui_side_panel.SidePanel.md#close)

#### Defined in

[src/neuroglancer/ui/selection_details.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/selection_details.ts#L163)

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
