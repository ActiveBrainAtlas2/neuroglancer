[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / LayerBar

# Class: LayerBar

[ui/layer_bar](../modules/ui_layer_bar.md).LayerBar

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LayerBar`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar.LayerBar.md#constructor)

### Properties

- [display](ui_layer_bar.LayerBar.md#display)
- [disposedStacks](ui_layer_bar.LayerBar.md#disposedstacks)
- [dragEnterCount](ui_layer_bar.LayerBar.md#dragentercount)
- [dropLayers](ui_layer_bar.LayerBar.md#droplayers)
- [dropZone](ui_layer_bar.LayerBar.md#dropzone)
- [element](ui_layer_bar.LayerBar.md#element)
- [getLayoutSpecForDrag](ui_layer_bar.LayerBar.md#getlayoutspecfordrag)
- [layerUpdateNeeded](ui_layer_bar.LayerBar.md#layerupdateneeded)
- [layerWidgetInsertionPoint](ui_layer_bar.LayerBar.md#layerwidgetinsertionpoint)
- [layerWidgets](ui_layer_bar.LayerBar.md#layerwidgets)
- [manager](ui_layer_bar.LayerBar.md#manager)
- [positionWidget](ui_layer_bar.LayerBar.md#positionwidget)
- [refCount](ui_layer_bar.LayerBar.md#refcount)
- [scheduleUpdate](ui_layer_bar.LayerBar.md#scheduleupdate)
- [selectedLayer](ui_layer_bar.LayerBar.md#selectedlayer)
- [showLayerHoverValues](ui_layer_bar.LayerBar.md#showlayerhovervalues)
- [valueUpdateNeeded](ui_layer_bar.LayerBar.md#valueupdateneeded)
- [viewerNavigationState](ui_layer_bar.LayerBar.md#viewernavigationstate)
- [wasDisposed](ui_layer_bar.LayerBar.md#wasdisposed)

### Accessors

- [layerManager](ui_layer_bar.LayerBar.md#layermanager)

### Methods

- [addLayerMenu](ui_layer_bar.LayerBar.md#addlayermenu)
- [addRef](ui_layer_bar.LayerBar.md#addref)
- [dispose](ui_layer_bar.LayerBar.md#dispose)
- [disposed](ui_layer_bar.LayerBar.md#disposed)
- [handleLayerItemValueChanged](ui_layer_bar.LayerBar.md#handlelayeritemvaluechanged)
- [handleLayerValuesChanged](ui_layer_bar.LayerBar.md#handlelayervalueschanged)
- [handleLayersChanged](ui_layer_bar.LayerBar.md#handlelayerschanged)
- [refCountReachedZero](ui_layer_bar.LayerBar.md#refcountreachedzero)
- [registerCancellable](ui_layer_bar.LayerBar.md#registercancellable)
- [registerDisposer](ui_layer_bar.LayerBar.md#registerdisposer)
- [registerEventListener](ui_layer_bar.LayerBar.md#registereventlistener)
- [unregisterDisposer](ui_layer_bar.LayerBar.md#unregisterdisposer)
- [update](ui_layer_bar.LayerBar.md#update)
- [updateChunkStatistics](ui_layer_bar.LayerBar.md#updatechunkstatistics)
- [updateLayers](ui_layer_bar.LayerBar.md#updatelayers)

## Constructors

### constructor

• **new LayerBar**(`display`, `manager`, `viewerNavigationState`, `selectedLayer`, `getLayoutSpecForDrag`, `showLayerHoverValues`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `manager` | [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md) |
| `viewerNavigationState` | [`LinkedViewerNavigationState`](ui_layer_bar._internal_.LinkedViewerNavigationState.md) |
| `selectedLayer` | [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md) |
| `getLayoutSpecForDrag` | () => `any` |
| `showLayerHoverValues` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L186)

## Properties

### display

• **display**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### dragEnterCount

• **dragEnterCount**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L180)

___

### dropLayers

• **dropLayers**: `undefined` \| [`DropLayers`](ui_layer_drag_and_drop.DropLayers.md)

For use within this module only.

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:178](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L178)

___

### dropZone

• **dropZone**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L171)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L168)

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

[src/neuroglancer/ui/layer_bar.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L169)

___

### layerWidgetInsertionPoint

• `Private` **layerWidgetInsertionPoint**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L172)

___

### layerWidgets

• **layerWidgets**: `Map`<[`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md), [`LayerWidget`](ui_layer_bar._internal_.LayerWidget.md)\>

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L167)

___

### manager

• **manager**: [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

___

### positionWidget

• `Private` **positionWidget**: [`PositionWidget`](widget_position_widget.PositionWidget.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L173)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### scheduleUpdate

• `Private` **scheduleUpdate**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L285)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

___

### showLayerHoverValues

• **showLayerHoverValues**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

___

### valueUpdateNeeded

• `Private` **valueUpdateNeeded**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L170)

___

### viewerNavigationState

• **viewerNavigationState**: [`LinkedViewerNavigationState`](ui_layer_bar._internal_.LinkedViewerNavigationState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layerManager

• `get` **layerManager**(): [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Returns

[`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L182)

## Methods

### addLayerMenu

▸ **addLayerMenu**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L371)

___

### addRef

▸ **addRef**(): [`LayerBar`](ui_layer_bar.LayerBar.md)

#### Returns

[`LayerBar`](ui_layer_bar.LayerBar.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L262)

___

### handleLayerItemValueChanged

▸ **handleLayerItemValueChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L281)

___

### handleLayerValuesChanged

▸ **handleLayerValuesChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L274)

___

### handleLayersChanged

▸ **handleLayersChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L269)

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

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L287)

___

### updateChunkStatistics

▸ `Private` **updateChunkStatistics**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L316)

___

### updateLayers

▸ **updateLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L338)
