[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / [<internal\>](../modules/layer_group_viewer._internal_.md) / LayerBar

# Class: LayerBar

[layer_group_viewer](../modules/layer_group_viewer.md).[<internal>](../modules/layer_group_viewer._internal_.md).LayerBar

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`LayerBar`**

## Table of contents

### Constructors

- [constructor](layer_group_viewer._internal_.LayerBar.md#constructor)

### Properties

- [display](layer_group_viewer._internal_.LayerBar.md#display)
- [disposedStacks](layer_group_viewer._internal_.LayerBar.md#disposedstacks)
- [dragEnterCount](layer_group_viewer._internal_.LayerBar.md#dragentercount)
- [dropLayers](layer_group_viewer._internal_.LayerBar.md#droplayers)
- [dropZone](layer_group_viewer._internal_.LayerBar.md#dropzone)
- [element](layer_group_viewer._internal_.LayerBar.md#element)
- [getLayoutSpecForDrag](layer_group_viewer._internal_.LayerBar.md#getlayoutspecfordrag)
- [layerUpdateNeeded](layer_group_viewer._internal_.LayerBar.md#layerupdateneeded)
- [layerWidgetInsertionPoint](layer_group_viewer._internal_.LayerBar.md#layerwidgetinsertionpoint)
- [layerWidgets](layer_group_viewer._internal_.LayerBar.md#layerwidgets)
- [manager](layer_group_viewer._internal_.LayerBar.md#manager)
- [positionWidget](layer_group_viewer._internal_.LayerBar.md#positionwidget)
- [refCount](layer_group_viewer._internal_.LayerBar.md#refcount)
- [scheduleUpdate](layer_group_viewer._internal_.LayerBar.md#scheduleupdate)
- [selectedLayer](layer_group_viewer._internal_.LayerBar.md#selectedlayer)
- [showLayerHoverValues](layer_group_viewer._internal_.LayerBar.md#showlayerhovervalues)
- [valueUpdateNeeded](layer_group_viewer._internal_.LayerBar.md#valueupdateneeded)
- [viewerNavigationState](layer_group_viewer._internal_.LayerBar.md#viewernavigationstate)
- [wasDisposed](layer_group_viewer._internal_.LayerBar.md#wasdisposed)

### Accessors

- [layerManager](layer_group_viewer._internal_.LayerBar.md#layermanager)

### Methods

- [addLayerMenu](layer_group_viewer._internal_.LayerBar.md#addlayermenu)
- [addRef](layer_group_viewer._internal_.LayerBar.md#addref)
- [dispose](layer_group_viewer._internal_.LayerBar.md#dispose)
- [disposed](layer_group_viewer._internal_.LayerBar.md#disposed)
- [handleLayerItemValueChanged](layer_group_viewer._internal_.LayerBar.md#handlelayeritemvaluechanged)
- [handleLayerValuesChanged](layer_group_viewer._internal_.LayerBar.md#handlelayervalueschanged)
- [handleLayersChanged](layer_group_viewer._internal_.LayerBar.md#handlelayerschanged)
- [refCountReachedZero](layer_group_viewer._internal_.LayerBar.md#refcountreachedzero)
- [registerCancellable](layer_group_viewer._internal_.LayerBar.md#registercancellable)
- [registerDisposer](layer_group_viewer._internal_.LayerBar.md#registerdisposer)
- [registerEventListener](layer_group_viewer._internal_.LayerBar.md#registereventlistener)
- [unregisterDisposer](layer_group_viewer._internal_.LayerBar.md#unregisterdisposer)
- [update](layer_group_viewer._internal_.LayerBar.md#update)
- [updateChunkStatistics](layer_group_viewer._internal_.LayerBar.md#updatechunkstatistics)
- [updateLayers](layer_group_viewer._internal_.LayerBar.md#updatelayers)

## Constructors

### constructor

• **new LayerBar**(`display`, `manager`, `viewerNavigationState`, `selectedLayer`, `getLayoutSpecForDrag`, `showLayerHoverValues`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](display_context.DisplayContext.md) |
| `manager` | [`LayerListSpecification`](layer.LayerListSpecification.md) |
| `viewerNavigationState` | [`LinkedViewerNavigationState`](layer_group_viewer.LinkedViewerNavigationState.md) |
| `selectedLayer` | [`SelectedLayerState`](layer.SelectedLayerState.md) |
| `getLayoutSpecForDrag` | () => `any` |
| `showLayerHoverValues` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L186)

## Properties

### display

• **display**: [`DisplayContext`](display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### dragEnterCount

• **dragEnterCount**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L180)

___

### dropLayers

• **dropLayers**: `undefined` \| [`DropLayers`](layer_group_viewer._internal_.DropLayers.md)

For use within this module only.

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:178](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L178)

___

### dropZone

• **dropZone**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L171)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L168)

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

[src/neuroglancer/ui/layer_bar.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L169)

___

### layerWidgetInsertionPoint

• `Private` **layerWidgetInsertionPoint**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L172)

___

### layerWidgets

• **layerWidgets**: `Map`<[`ManagedUserLayer`](layer.ManagedUserLayer.md), [`LayerWidget`](layer_group_viewer._internal_.LayerWidget.md)\>

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L167)

___

### manager

• **manager**: [`LayerListSpecification`](layer.LayerListSpecification.md)

___

### positionWidget

• `Private` **positionWidget**: [`PositionWidget`](layer_group_viewer._internal_.PositionWidget.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L173)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### scheduleUpdate

• `Private` **scheduleUpdate**: [`DebouncedFunction`](../interfaces/display_context._internal_.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L285)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](layer.SelectedLayerState.md)

___

### showLayerHoverValues

• **showLayerHoverValues**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\>

___

### valueUpdateNeeded

• `Private` **valueUpdateNeeded**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L170)

___

### viewerNavigationState

• **viewerNavigationState**: [`LinkedViewerNavigationState`](layer_group_viewer.LinkedViewerNavigationState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layerManager

• `get` **layerManager**(): [`LayerManager`](layer.LayerManager.md)

#### Returns

[`LayerManager`](layer.LayerManager.md)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L182)

## Methods

### addLayerMenu

▸ **addLayerMenu**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L371)

___

### addRef

▸ **addRef**(): [`LayerBar`](layer_group_viewer._internal_.LayerBar.md)

#### Returns

[`LayerBar`](layer_group_viewer._internal_.LayerBar.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L262)

___

### handleLayerItemValueChanged

▸ **handleLayerItemValueChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L281)

___

### handleLayerValuesChanged

▸ **handleLayerValuesChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L274)

___

### handleLayersChanged

▸ **handleLayersChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L269)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L287)

___

### updateChunkStatistics

▸ `Private` **updateChunkStatistics**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L316)

___

### updateLayers

▸ **updateLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L338)
