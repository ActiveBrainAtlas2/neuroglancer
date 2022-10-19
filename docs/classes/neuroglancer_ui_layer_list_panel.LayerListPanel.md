[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_list\_panel](../modules/neuroglancer_ui_layer_list_panel.md) / LayerListPanel

# Class: LayerListPanel

[neuroglancer/ui/layer_list_panel](../modules/neuroglancer_ui_layer_list_panel.md).LayerListPanel

## Hierarchy

- [`SidePanel`](neuroglancer_ui_side_panel.SidePanel.md)

  ↳ **`LayerListPanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_list_panel.LayerListPanel.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_layer_list_panel.LayerListPanel.md#disposedstacks)
- [dragEnterCount](neuroglancer_ui_layer_list_panel.LayerListPanel.md#dragentercount)
- [dropLayers](neuroglancer_ui_layer_list_panel.LayerListPanel.md#droplayers)
- [element](neuroglancer_ui_layer_list_panel.LayerListPanel.md#element)
- [generation](neuroglancer_ui_layer_list_panel.LayerListPanel.md#generation)
- [itemContainer](neuroglancer_ui_layer_list_panel.LayerListPanel.md#itemcontainer)
- [items](neuroglancer_ui_layer_list_panel.LayerListPanel.md#items)
- [layerDropZone](neuroglancer_ui_layer_list_panel.LayerListPanel.md#layerdropzone)
- [location](neuroglancer_ui_layer_list_panel.LayerListPanel.md#location)
- [manager](neuroglancer_ui_layer_list_panel.LayerListPanel.md#manager)
- [refCount](neuroglancer_ui_layer_list_panel.LayerListPanel.md#refcount)
- [sidePanelManager](neuroglancer_ui_layer_list_panel.LayerListPanel.md#sidepanelmanager)
- [state](neuroglancer_ui_layer_list_panel.LayerListPanel.md#state)
- [titleElement](neuroglancer_ui_layer_list_panel.LayerListPanel.md#titleelement)
- [visibility](neuroglancer_ui_layer_list_panel.LayerListPanel.md#visibility)
- [wasDisposed](neuroglancer_ui_layer_list_panel.LayerListPanel.md#wasdisposed)

### Accessors

- [layerManager](neuroglancer_ui_layer_list_panel.LayerListPanel.md#layermanager)
- [selectedLayer](neuroglancer_ui_layer_list_panel.LayerListPanel.md#selectedlayer)

### Methods

- [addBody](neuroglancer_ui_layer_list_panel.LayerListPanel.md#addbody)
- [addRef](neuroglancer_ui_layer_list_panel.LayerListPanel.md#addref)
- [addTitleBar](neuroglancer_ui_layer_list_panel.LayerListPanel.md#addtitlebar)
- [close](neuroglancer_ui_layer_list_panel.LayerListPanel.md#close)
- [dispose](neuroglancer_ui_layer_list_panel.LayerListPanel.md#dispose)
- [disposed](neuroglancer_ui_layer_list_panel.LayerListPanel.md#disposed)
- [makeDragSource](neuroglancer_ui_layer_list_panel.LayerListPanel.md#makedragsource)
- [refCountReachedZero](neuroglancer_ui_layer_list_panel.LayerListPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_list_panel.LayerListPanel.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_list_panel.LayerListPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_list_panel.LayerListPanel.md#registereventlistener)
- [render](neuroglancer_ui_layer_list_panel.LayerListPanel.md#render)
- [unregisterDisposer](neuroglancer_ui_layer_list_panel.LayerListPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerListPanel**(`sidePanelManager`, `manager`, `state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md) |
| `manager` | [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md) |
| `state` | [`LayerListPanelState`](neuroglancer_ui_layer_list_panel.LayerListPanelState.md) |

#### Overrides

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[constructor](neuroglancer_ui_side_panel.SidePanel.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L195)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[disposedStacks](neuroglancer_ui_side_panel.SidePanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### dragEnterCount

• **dragEnterCount**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L193)

___

### dropLayers

• **dropLayers**: `undefined` \| [`DropLayers`](neuroglancer_ui_layer_drag_and_drop.DropLayers.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L192)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[element](neuroglancer_ui_side_panel.SidePanel.md#element)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L82)

___

### generation

• `Private` **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L194)

___

### itemContainer

• **itemContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L183)

___

### items

• `Private` **items**: `Map`<[`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md), [`LayerListItem`](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md)\>

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L182)

___

### layerDropZone

• **layerDropZone**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L184)

___

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[location](neuroglancer_ui_side_panel.SidePanel.md#location)

___

### manager

• **manager**: [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[refCount](neuroglancer_ui_side_panel.SidePanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[sidePanelManager](neuroglancer_ui_side_panel.SidePanel.md#sidepanelmanager)

___

### state

• **state**: [`LayerListPanelState`](neuroglancer_ui_layer_list_panel.LayerListPanelState.md)

___

### titleElement

• **titleElement**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L185)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[visibility](neuroglancer_ui_side_panel.SidePanel.md#visibility)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L83)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[wasDisposed](neuroglancer_ui_side_panel.SidePanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layerManager

• `get` **layerManager**(): [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Returns

[`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L186)

___

### selectedLayer

• `get` **selectedLayer**(): [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

#### Returns

[`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L189)

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

[src/neuroglancer/ui/side_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L146)

___

### addRef

▸ **addRef**(): [`LayerListPanel`](neuroglancer_ui_layer_list_panel.LayerListPanel.md)

#### Returns

[`LayerListPanel`](neuroglancer_ui_layer_list_panel.LayerListPanel.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addRef](neuroglancer_ui_side_panel.SidePanel.md#addref)

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

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addTitleBar](neuroglancer_ui_side_panel.SidePanel.md#addtitlebar)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L123)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[close](neuroglancer_ui_side_panel.SidePanel.md#close)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L119)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[dispose](neuroglancer_ui_side_panel.SidePanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[disposed](neuroglancer_ui_side_panel.SidePanel.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### makeDragSource

▸ **makeDragSource**(): [`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Returns

[`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[makeDragSource](neuroglancer_ui_side_panel.SidePanel.md#makedragsource)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L109)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[refCountReachedZero](neuroglancer_ui_side_panel.SidePanel.md#refcountreachedzero)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerCancellable](neuroglancer_ui_side_panel.SidePanel.md#registercancellable)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerDisposer](neuroglancer_ui_side_panel.SidePanel.md#registerdisposer)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerEventListener](neuroglancer_ui_side_panel.SidePanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_list_panel.ts#L215)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
