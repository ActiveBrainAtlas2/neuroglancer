[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_list\_panel](../modules/ui_layer_list_panel.md) / LayerListPanel

# Class: LayerListPanel

[ui/layer_list_panel](../modules/ui_layer_list_panel.md).LayerListPanel

## Hierarchy

- [`SidePanel`](ui_side_panel.SidePanel.md)

  ↳ **`LayerListPanel`**

## Table of contents

### Constructors

- [constructor](ui_layer_list_panel.LayerListPanel.md#constructor)

### Properties

- [disposedStacks](ui_layer_list_panel.LayerListPanel.md#disposedstacks)
- [dragEnterCount](ui_layer_list_panel.LayerListPanel.md#dragentercount)
- [dropLayers](ui_layer_list_panel.LayerListPanel.md#droplayers)
- [element](ui_layer_list_panel.LayerListPanel.md#element)
- [generation](ui_layer_list_panel.LayerListPanel.md#generation)
- [itemContainer](ui_layer_list_panel.LayerListPanel.md#itemcontainer)
- [items](ui_layer_list_panel.LayerListPanel.md#items)
- [layerDropZone](ui_layer_list_panel.LayerListPanel.md#layerdropzone)
- [location](ui_layer_list_panel.LayerListPanel.md#location)
- [manager](ui_layer_list_panel.LayerListPanel.md#manager)
- [refCount](ui_layer_list_panel.LayerListPanel.md#refcount)
- [sidePanelManager](ui_layer_list_panel.LayerListPanel.md#sidepanelmanager)
- [state](ui_layer_list_panel.LayerListPanel.md#state)
- [titleElement](ui_layer_list_panel.LayerListPanel.md#titleelement)
- [visibility](ui_layer_list_panel.LayerListPanel.md#visibility)
- [wasDisposed](ui_layer_list_panel.LayerListPanel.md#wasdisposed)

### Accessors

- [layerManager](ui_layer_list_panel.LayerListPanel.md#layermanager)
- [selectedLayer](ui_layer_list_panel.LayerListPanel.md#selectedlayer)

### Methods

- [addBody](ui_layer_list_panel.LayerListPanel.md#addbody)
- [addRef](ui_layer_list_panel.LayerListPanel.md#addref)
- [addTitleBar](ui_layer_list_panel.LayerListPanel.md#addtitlebar)
- [close](ui_layer_list_panel.LayerListPanel.md#close)
- [dispose](ui_layer_list_panel.LayerListPanel.md#dispose)
- [disposed](ui_layer_list_panel.LayerListPanel.md#disposed)
- [makeDragSource](ui_layer_list_panel.LayerListPanel.md#makedragsource)
- [refCountReachedZero](ui_layer_list_panel.LayerListPanel.md#refcountreachedzero)
- [registerCancellable](ui_layer_list_panel.LayerListPanel.md#registercancellable)
- [registerDisposer](ui_layer_list_panel.LayerListPanel.md#registerdisposer)
- [registerEventListener](ui_layer_list_panel.LayerListPanel.md#registereventlistener)
- [render](ui_layer_list_panel.LayerListPanel.md#render)
- [unregisterDisposer](ui_layer_list_panel.LayerListPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerListPanel**(`sidePanelManager`, `manager`, `state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](ui_side_panel.SidePanelManager.md) |
| `manager` | [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md) |
| `state` | [`LayerListPanelState`](ui_layer_list_panel.LayerListPanelState.md) |

#### Overrides

[SidePanel](ui_side_panel.SidePanel.md).[constructor](ui_side_panel.SidePanel.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L195)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[disposedStacks](ui_side_panel.SidePanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### dragEnterCount

• **dragEnterCount**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L193)

___

### dropLayers

• **dropLayers**: `undefined` \| [`DropLayers`](ui_layer_drag_and_drop.DropLayers.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L192)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[element](ui_side_panel.SidePanel.md#element)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L82)

___

### generation

• `Private` **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L194)

___

### itemContainer

• **itemContainer**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L183)

___

### items

• `Private` **items**: `Map`<[`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md), [`LayerListItem`](ui_layer_list_panel._internal_.LayerListItem.md)\>

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L182)

___

### layerDropZone

• **layerDropZone**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L184)

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

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](ui_side_panel.SidePanelManager.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[sidePanelManager](ui_side_panel.SidePanel.md#sidepanelmanager)

___

### state

• **state**: [`LayerListPanelState`](ui_layer_list_panel.LayerListPanelState.md)

___

### titleElement

• **titleElement**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L185)

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

## Accessors

### layerManager

• `get` **layerManager**(): [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Returns

[`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L186)

___

### selectedLayer

• `get` **selectedLayer**(): [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

#### Returns

[`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L189)

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

▸ **addRef**(): [`LayerListPanel`](ui_layer_list_panel.LayerListPanel.md)

#### Returns

[`LayerListPanel`](ui_layer_list_panel.LayerListPanel.md)

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

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L215)

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
