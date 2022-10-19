[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_bar](../modules/neuroglancer_ui_layer_bar.md) / LayerBar

# Class: LayerBar

[neuroglancer/ui/layer_bar](../modules/neuroglancer_ui_layer_bar.md).LayerBar

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LayerBar`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_bar.LayerBar.md#constructor)

### Properties

- [display](neuroglancer_ui_layer_bar.LayerBar.md#display)
- [disposedStacks](neuroglancer_ui_layer_bar.LayerBar.md#disposedstacks)
- [dragEnterCount](neuroglancer_ui_layer_bar.LayerBar.md#dragentercount)
- [dropLayers](neuroglancer_ui_layer_bar.LayerBar.md#droplayers)
- [dropZone](neuroglancer_ui_layer_bar.LayerBar.md#dropzone)
- [element](neuroglancer_ui_layer_bar.LayerBar.md#element)
- [getLayoutSpecForDrag](neuroglancer_ui_layer_bar.LayerBar.md#getlayoutspecfordrag)
- [layerUpdateNeeded](neuroglancer_ui_layer_bar.LayerBar.md#layerupdateneeded)
- [layerWidgetInsertionPoint](neuroglancer_ui_layer_bar.LayerBar.md#layerwidgetinsertionpoint)
- [layerWidgets](neuroglancer_ui_layer_bar.LayerBar.md#layerwidgets)
- [manager](neuroglancer_ui_layer_bar.LayerBar.md#manager)
- [positionWidget](neuroglancer_ui_layer_bar.LayerBar.md#positionwidget)
- [refCount](neuroglancer_ui_layer_bar.LayerBar.md#refcount)
- [scheduleUpdate](neuroglancer_ui_layer_bar.LayerBar.md#scheduleupdate)
- [selectedLayer](neuroglancer_ui_layer_bar.LayerBar.md#selectedlayer)
- [showLayerHoverValues](neuroglancer_ui_layer_bar.LayerBar.md#showlayerhovervalues)
- [valueUpdateNeeded](neuroglancer_ui_layer_bar.LayerBar.md#valueupdateneeded)
- [viewerNavigationState](neuroglancer_ui_layer_bar.LayerBar.md#viewernavigationstate)
- [wasDisposed](neuroglancer_ui_layer_bar.LayerBar.md#wasdisposed)

### Accessors

- [layerManager](neuroglancer_ui_layer_bar.LayerBar.md#layermanager)

### Methods

- [addLayerMenu](neuroglancer_ui_layer_bar.LayerBar.md#addlayermenu)
- [addRef](neuroglancer_ui_layer_bar.LayerBar.md#addref)
- [dispose](neuroglancer_ui_layer_bar.LayerBar.md#dispose)
- [disposed](neuroglancer_ui_layer_bar.LayerBar.md#disposed)
- [handleLayerItemValueChanged](neuroglancer_ui_layer_bar.LayerBar.md#handlelayeritemvaluechanged)
- [handleLayerValuesChanged](neuroglancer_ui_layer_bar.LayerBar.md#handlelayervalueschanged)
- [handleLayersChanged](neuroglancer_ui_layer_bar.LayerBar.md#handlelayerschanged)
- [refCountReachedZero](neuroglancer_ui_layer_bar.LayerBar.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_bar.LayerBar.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_bar.LayerBar.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_bar.LayerBar.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_layer_bar.LayerBar.md#unregisterdisposer)
- [update](neuroglancer_ui_layer_bar.LayerBar.md#update)
- [updateChunkStatistics](neuroglancer_ui_layer_bar.LayerBar.md#updatechunkstatistics)
- [updateLayers](neuroglancer_ui_layer_bar.LayerBar.md#updatelayers)

## Constructors

### constructor

• **new LayerBar**(`display`, `manager`, `viewerNavigationState`, `selectedLayer`, `getLayoutSpecForDrag`, `showLayerHoverValues`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `manager` | [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md) |
| `viewerNavigationState` | [`LinkedViewerNavigationState`](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md) |
| `selectedLayer` | [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md) |
| `getLayoutSpecForDrag` | () => `any` |
| `showLayerHoverValues` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L186)

## Properties

### display

• **display**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### dragEnterCount

• **dragEnterCount**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L180)

___

### dropLayers

• **dropLayers**: `undefined` \| [`DropLayers`](neuroglancer_ui_layer_drag_and_drop.DropLayers.md)

For use within this module only.

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:178](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L178)

___

### dropZone

• **dropZone**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L171)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L168)

___

### getLayoutSpecForDrag

• **getLayoutSpecForDrag**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

___

### layerUpdateNeeded

• `Private` **layerUpdateNeeded**: `boolean` = `true`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L169)

___

### layerWidgetInsertionPoint

• `Private` **layerWidgetInsertionPoint**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L172)

___

### layerWidgets

• **layerWidgets**: `Map`<[`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md), [`LayerWidget`](neuroglancer_ui_layer_bar._internal_.LayerWidget.md)\>

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L167)

___

### manager

• **manager**: [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

___

### positionWidget

• `Private` **positionWidget**: [`PositionWidget`](neuroglancer_widget_position_widget.PositionWidget.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L173)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### scheduleUpdate

• `Private` **scheduleUpdate**: [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L285)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

___

### showLayerHoverValues

• **showLayerHoverValues**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

___

### valueUpdateNeeded

• `Private` **valueUpdateNeeded**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L170)

___

### viewerNavigationState

• **viewerNavigationState**: [`LinkedViewerNavigationState`](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layerManager

• `get` **layerManager**(): [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Returns

[`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L182)

## Methods

### addLayerMenu

▸ **addLayerMenu**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L371)

___

### addRef

▸ **addRef**(): [`LayerBar`](neuroglancer_ui_layer_bar.LayerBar.md)

#### Returns

[`LayerBar`](neuroglancer_ui_layer_bar.LayerBar.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L262)

___

### handleLayerItemValueChanged

▸ **handleLayerItemValueChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L281)

___

### handleLayerValuesChanged

▸ **handleLayerValuesChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L274)

___

### handleLayersChanged

▸ **handleLayersChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L269)

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

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L287)

___

### updateChunkStatistics

▸ `Private` **updateChunkStatistics**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L316)

___

### updateLayers

▸ **updateLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_bar.ts#L338)
