[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / LayerGroupViewer

# Class: LayerGroupViewer

[layer_group_viewer](../modules/layer_group_viewer.md).LayerGroupViewer

## Hierarchy

- `RefCounted`

  ↳ **`LayerGroupViewer`**

## Table of contents

### Constructors

- [constructor](layer_group_viewer.LayerGroupViewer.md#constructor)

### Properties

- [disposedStacks](layer_group_viewer.LayerGroupViewer.md#disposedstacks)
- [element](layer_group_viewer.LayerGroupViewer.md#element)
- [layerPanel](layer_group_viewer.LayerGroupViewer.md#layerpanel)
- [layerSpecification](layer_group_viewer.LayerGroupViewer.md#layerspecification)
- [layout](layer_group_viewer.LayerGroupViewer.md#layout)
- [options](layer_group_viewer.LayerGroupViewer.md#options)
- [refCount](layer_group_viewer.LayerGroupViewer.md#refcount)
- [state](layer_group_viewer.LayerGroupViewer.md#state)
- [viewerNavigationState](layer_group_viewer.LayerGroupViewer.md#viewernavigationstate)
- [viewerState](layer_group_viewer.LayerGroupViewer.md#viewerstate)
- [wasDisposed](layer_group_viewer.LayerGroupViewer.md#wasdisposed)

### Accessors

- [changed](layer_group_viewer.LayerGroupViewer.md#changed)
- [chunkManager](layer_group_viewer.LayerGroupViewer.md#chunkmanager)
- [crossSectionBackgroundColor](layer_group_viewer.LayerGroupViewer.md#crosssectionbackgroundcolor)
- [display](layer_group_viewer.LayerGroupViewer.md#display)
- [inputEventBindings](layer_group_viewer.LayerGroupViewer.md#inputeventbindings)
- [layerManager](layer_group_viewer.LayerGroupViewer.md#layermanager)
- [mouseState](layer_group_viewer.LayerGroupViewer.md#mousestate)
- [navigationState](layer_group_viewer.LayerGroupViewer.md#navigationstate)
- [perspectiveNavigationState](layer_group_viewer.LayerGroupViewer.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](layer_group_viewer.LayerGroupViewer.md#perspectiveviewbackgroundcolor)
- [scaleBarOptions](layer_group_viewer.LayerGroupViewer.md#scalebaroptions)
- [selectedLayer](layer_group_viewer.LayerGroupViewer.md#selectedlayer)
- [selectionDetailsState](layer_group_viewer.LayerGroupViewer.md#selectiondetailsstate)
- [showAxisLines](layer_group_viewer.LayerGroupViewer.md#showaxislines)
- [showPerspectiveSliceViews](layer_group_viewer.LayerGroupViewer.md#showperspectivesliceviews)
- [showScaleBar](layer_group_viewer.LayerGroupViewer.md#showscalebar)
- [visibility](layer_group_viewer.LayerGroupViewer.md#visibility)
- [visibleLayerRoles](layer_group_viewer.LayerGroupViewer.md#visiblelayerroles)
- [wireFrame](layer_group_viewer.LayerGroupViewer.md#wireframe)

### Methods

- [addRef](layer_group_viewer.LayerGroupViewer.md#addref)
- [bindAction](layer_group_viewer.LayerGroupViewer.md#bindaction)
- [dispose](layer_group_viewer.LayerGroupViewer.md#dispose)
- [disposed](layer_group_viewer.LayerGroupViewer.md#disposed)
- [makeUI](layer_group_viewer.LayerGroupViewer.md#makeui)
- [refCountReachedZero](layer_group_viewer.LayerGroupViewer.md#refcountreachedzero)
- [registerActionBindings](layer_group_viewer.LayerGroupViewer.md#registeractionbindings)
- [registerCancellable](layer_group_viewer.LayerGroupViewer.md#registercancellable)
- [registerDisposer](layer_group_viewer.LayerGroupViewer.md#registerdisposer)
- [registerEventListener](layer_group_viewer.LayerGroupViewer.md#registereventlistener)
- [reset](layer_group_viewer.LayerGroupViewer.md#reset)
- [restoreState](layer_group_viewer.LayerGroupViewer.md#restorestate)
- [toJSON](layer_group_viewer.LayerGroupViewer.md#tojson)
- [unregisterDisposer](layer_group_viewer.LayerGroupViewer.md#unregisterdisposer)
- [updateUI](layer_group_viewer.LayerGroupViewer.md#updateui)

## Constructors

### constructor

• **new LayerGroupViewer**(`element`, `viewerState`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `viewerState` | [`LayerGroupViewerState`](../interfaces/layer_group_viewer.LayerGroupViewerState.md) |
| `options` | `Partial`<[`LayerGroupViewerOptions`](../interfaces/layer_group_viewer.LayerGroupViewerOptions.md)\> |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L295)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLElement`

___

### layerPanel

• **layerPanel**: `undefined` \| `LayerBar`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L284)

___

### layerSpecification

• **layerSpecification**: [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L224)

___

### layout

• **layout**: [`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L285)

___

### options

• **options**: [`LayerGroupViewerOptions`](../interfaces/layer_group_viewer.LayerGroupViewerOptions.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L287)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: `CompoundTrackable`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L289)

___

### viewerNavigationState

• **viewerNavigationState**: [`LinkedViewerNavigationState`](layer_group_viewer.LinkedViewerNavigationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L225)

___

### viewerState

• **viewerState**: [`LayerGroupViewerState`](../interfaces/layer_group_viewer.LayerGroupViewerState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): `NullarySignal`

#### Returns

`NullarySignal`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L291)

___

### chunkManager

• `get` **chunkManager**(): `ChunkManager`

#### Returns

`ChunkManager`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L248)

___

### crossSectionBackgroundColor

• `get` **crossSectionBackgroundColor**(): `TrackableRGB`

#### Returns

`TrackableRGB`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L275)

___

### display

• `get` **display**(): [`DisplayContext`](display_context.DisplayContext.md)

#### Returns

[`DisplayContext`](display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L238)

___

### inputEventBindings

• `get` **inputEventBindings**(): [`InputEventBindings`](data_panel_layout.InputEventBindings.md)

#### Returns

[`InputEventBindings`](data_panel_layout.InputEventBindings.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L266)

___

### layerManager

• `get` **layerManager**(): [`LayerManager`](layer.LayerManager.md)

#### Returns

[`LayerManager`](layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L244)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L251)

___

### navigationState

• `get` **navigationState**(): [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Returns

[`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L229)

___

### perspectiveNavigationState

• `get` **perspectiveNavigationState**(): [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Returns

[`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L226)

___

### perspectiveViewBackgroundColor

• `get` **perspectiveViewBackgroundColor**(): `TrackableRGB`

#### Returns

`TrackableRGB`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L278)

___

### scaleBarOptions

• `get` **scaleBarOptions**(): `TrackableScaleBarOptions`

#### Returns

`TrackableScaleBarOptions`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L281)

___

### selectedLayer

• `get` **selectedLayer**(): [`SelectedLayerState`](layer.SelectedLayerState.md)

#### Returns

[`SelectedLayerState`](layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L241)

___

### selectionDetailsState

• `get` **selectionDetailsState**(): [`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

#### Returns

[`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L233)

___

### showAxisLines

• `get` **showAxisLines**(): [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L254)

___

### showPerspectiveSliceViews

• `get` **showPerspectiveSliceViews**(): [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L263)

___

### showScaleBar

• `get` **showScaleBar**(): [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L260)

___

### visibility

• `get` **visibility**(): `WatchableVisibilityPriority`

#### Returns

`WatchableVisibilityPriority`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L269)

___

### visibleLayerRoles

• `get` **visibleLayerRoles**(): [`WatchableSet`](trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Returns

[`WatchableSet`](trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L272)

___

### wireFrame

• `get` **wireFrame**(): [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Returns

[`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L257)

## Methods

### addRef

▸ **addRef**(): [`LayerGroupViewer`](layer_group_viewer.LayerGroupViewer.md)

#### Returns

[`LayerGroupViewer`](layer_group_viewer.LayerGroupViewer.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/layer_group_viewer.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L336)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L472)

___

### makeUI

▸ `Private` **makeUI**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L375)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

___

### registerActionBindings

▸ `Private` **registerActionBindings**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L340)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:358](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L358)

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

[src/neuroglancer/layer_group_viewer.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L362)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L354)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### updateUI

▸ `Private` **updateUI**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:383](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L383)
