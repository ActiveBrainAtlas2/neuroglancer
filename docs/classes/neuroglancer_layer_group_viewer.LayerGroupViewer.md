[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_group\_viewer](../modules/neuroglancer_layer_group_viewer.md) / LayerGroupViewer

# Class: LayerGroupViewer

[neuroglancer/layer_group_viewer](../modules/neuroglancer_layer_group_viewer.md).LayerGroupViewer

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

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LayerGroupViewer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_group_viewer.LayerGroupViewer.md#constructor)

### Properties

- [disposedStacks](neuroglancer_layer_group_viewer.LayerGroupViewer.md#disposedstacks)
- [element](neuroglancer_layer_group_viewer.LayerGroupViewer.md#element)
- [layerPanel](neuroglancer_layer_group_viewer.LayerGroupViewer.md#layerpanel)
- [layerSpecification](neuroglancer_layer_group_viewer.LayerGroupViewer.md#layerspecification)
- [layout](neuroglancer_layer_group_viewer.LayerGroupViewer.md#layout)
- [options](neuroglancer_layer_group_viewer.LayerGroupViewer.md#options)
- [refCount](neuroglancer_layer_group_viewer.LayerGroupViewer.md#refcount)
- [state](neuroglancer_layer_group_viewer.LayerGroupViewer.md#state)
- [viewerNavigationState](neuroglancer_layer_group_viewer.LayerGroupViewer.md#viewernavigationstate)
- [viewerState](neuroglancer_layer_group_viewer.LayerGroupViewer.md#viewerstate)
- [wasDisposed](neuroglancer_layer_group_viewer.LayerGroupViewer.md#wasdisposed)

### Accessors

- [changed](neuroglancer_layer_group_viewer.LayerGroupViewer.md#changed)
- [chunkManager](neuroglancer_layer_group_viewer.LayerGroupViewer.md#chunkmanager)
- [crossSectionBackgroundColor](neuroglancer_layer_group_viewer.LayerGroupViewer.md#crosssectionbackgroundcolor)
- [display](neuroglancer_layer_group_viewer.LayerGroupViewer.md#display)
- [inputEventBindings](neuroglancer_layer_group_viewer.LayerGroupViewer.md#inputeventbindings)
- [layerManager](neuroglancer_layer_group_viewer.LayerGroupViewer.md#layermanager)
- [mouseState](neuroglancer_layer_group_viewer.LayerGroupViewer.md#mousestate)
- [navigationState](neuroglancer_layer_group_viewer.LayerGroupViewer.md#navigationstate)
- [perspectiveNavigationState](neuroglancer_layer_group_viewer.LayerGroupViewer.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](neuroglancer_layer_group_viewer.LayerGroupViewer.md#perspectiveviewbackgroundcolor)
- [scaleBarOptions](neuroglancer_layer_group_viewer.LayerGroupViewer.md#scalebaroptions)
- [selectedLayer](neuroglancer_layer_group_viewer.LayerGroupViewer.md#selectedlayer)
- [selectionDetailsState](neuroglancer_layer_group_viewer.LayerGroupViewer.md#selectiondetailsstate)
- [showAxisLines](neuroglancer_layer_group_viewer.LayerGroupViewer.md#showaxislines)
- [showPerspectiveSliceViews](neuroglancer_layer_group_viewer.LayerGroupViewer.md#showperspectivesliceviews)
- [showScaleBar](neuroglancer_layer_group_viewer.LayerGroupViewer.md#showscalebar)
- [visibility](neuroglancer_layer_group_viewer.LayerGroupViewer.md#visibility)
- [visibleLayerRoles](neuroglancer_layer_group_viewer.LayerGroupViewer.md#visiblelayerroles)
- [wireFrame](neuroglancer_layer_group_viewer.LayerGroupViewer.md#wireframe)

### Methods

- [addRef](neuroglancer_layer_group_viewer.LayerGroupViewer.md#addref)
- [bindAction](neuroglancer_layer_group_viewer.LayerGroupViewer.md#bindaction)
- [dispose](neuroglancer_layer_group_viewer.LayerGroupViewer.md#dispose)
- [disposed](neuroglancer_layer_group_viewer.LayerGroupViewer.md#disposed)
- [makeUI](neuroglancer_layer_group_viewer.LayerGroupViewer.md#makeui)
- [refCountReachedZero](neuroglancer_layer_group_viewer.LayerGroupViewer.md#refcountreachedzero)
- [registerActionBindings](neuroglancer_layer_group_viewer.LayerGroupViewer.md#registeractionbindings)
- [registerCancellable](neuroglancer_layer_group_viewer.LayerGroupViewer.md#registercancellable)
- [registerDisposer](neuroglancer_layer_group_viewer.LayerGroupViewer.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_group_viewer.LayerGroupViewer.md#registereventlistener)
- [reset](neuroglancer_layer_group_viewer.LayerGroupViewer.md#reset)
- [restoreState](neuroglancer_layer_group_viewer.LayerGroupViewer.md#restorestate)
- [toJSON](neuroglancer_layer_group_viewer.LayerGroupViewer.md#tojson)
- [unregisterDisposer](neuroglancer_layer_group_viewer.LayerGroupViewer.md#unregisterdisposer)
- [updateUI](neuroglancer_layer_group_viewer.LayerGroupViewer.md#updateui)

## Constructors

### constructor

• **new LayerGroupViewer**(`element`, `viewerState`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `viewerState` | [`LayerGroupViewerState`](../interfaces/neuroglancer_layer_group_viewer.LayerGroupViewerState.md) |
| `options` | [`Partial`](../modules/neuroglancer_layer_group_viewer._internal_.md#partial)<[`LayerGroupViewerOptions`](../interfaces/neuroglancer_layer_group_viewer.LayerGroupViewerOptions.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L295)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L296)

___

### layerPanel

• **layerPanel**: `undefined` \| [`LayerBar`](neuroglancer_ui_layer_bar.LayerBar.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L284)

___

### layerSpecification

• **layerSpecification**: [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L224)

___

### layout

• **layout**: [`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L285)

___

### options

• **options**: [`LayerGroupViewerOptions`](../interfaces/neuroglancer_layer_group_viewer.LayerGroupViewerOptions.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L287)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: [`CompoundTrackable`](neuroglancer_util_trackable.CompoundTrackable.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L289)

___

### viewerNavigationState

• **viewerNavigationState**: [`LinkedViewerNavigationState`](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L225)

___

### viewerState

• **viewerState**: [`LayerGroupViewerState`](../interfaces/neuroglancer_layer_group_viewer.LayerGroupViewerState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L296)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Returns

[`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L291)

___

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L248)

___

### crossSectionBackgroundColor

• `get` **crossSectionBackgroundColor**(): [`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

#### Returns

[`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L275)

___

### display

• `get` **display**(): [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Returns

[`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L238)

___

### inputEventBindings

• `get` **inputEventBindings**(): [`InputEventBindings`](neuroglancer_data_panel_layout.InputEventBindings.md)

#### Returns

[`InputEventBindings`](neuroglancer_data_panel_layout.InputEventBindings.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L266)

___

### layerManager

• `get` **layerManager**(): [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Returns

[`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L244)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L251)

___

### navigationState

• `get` **navigationState**(): [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Returns

[`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L229)

___

### perspectiveNavigationState

• `get` **perspectiveNavigationState**(): [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Returns

[`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L226)

___

### perspectiveViewBackgroundColor

• `get` **perspectiveViewBackgroundColor**(): [`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

#### Returns

[`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L278)

___

### scaleBarOptions

• `get` **scaleBarOptions**(): [`TrackableScaleBarOptions`](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md)

#### Returns

[`TrackableScaleBarOptions`](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L281)

___

### selectedLayer

• `get` **selectedLayer**(): [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

#### Returns

[`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L241)

___

### selectionDetailsState

• `get` **selectionDetailsState**(): [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

#### Returns

[`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L233)

___

### showAxisLines

• `get` **showAxisLines**(): [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L254)

___

### showPerspectiveSliceViews

• `get` **showPerspectiveSliceViews**(): [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L263)

___

### showScaleBar

• `get` **showScaleBar**(): [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L260)

___

### visibility

• `get` **visibility**(): [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Returns

[`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L269)

___

### visibleLayerRoles

• `get` **visibleLayerRoles**(): [`WatchableSet`](neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Returns

[`WatchableSet`](neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L272)

___

### wireFrame

• `get` **wireFrame**(): [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L257)

## Methods

### addRef

▸ **addRef**(): [`LayerGroupViewer`](neuroglancer_layer_group_viewer.LayerGroupViewer.md)

#### Returns

[`LayerGroupViewer`](neuroglancer_layer_group_viewer.LayerGroupViewer.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### bindAction

▸ **bindAction**(`action`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L336)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L472)

___

### makeUI

▸ `Private` **makeUI**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L375)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

___

### registerActionBindings

▸ `Private` **registerActionBindings**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L340)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:358](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L358)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L362)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L354)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateUI

▸ `Private` **updateUI**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:383](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L383)
