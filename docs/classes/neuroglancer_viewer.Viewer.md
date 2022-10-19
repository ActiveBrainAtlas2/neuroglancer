[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/viewer](../modules/neuroglancer_viewer.md) / Viewer

# Class: Viewer

[neuroglancer/viewer](../modules/neuroglancer_viewer.md).Viewer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`Viewer`**

## Implements

- [`ViewerState`](../interfaces/neuroglancer_viewer_state.ViewerState.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_viewer.Viewer.md#constructor)

### Properties

- [coordinateSpace](neuroglancer_viewer.Viewer.md#coordinatespace)
- [crossSectionBackgroundColor](neuroglancer_viewer.Viewer.md#crosssectionbackgroundcolor)
- [crossSectionDepthRange](neuroglancer_viewer.Viewer.md#crosssectiondepthrange)
- [crossSectionOrientation](neuroglancer_viewer.Viewer.md#crosssectionorientation)
- [crossSectionScale](neuroglancer_viewer.Viewer.md#crosssectionscale)
- [dataContext](neuroglancer_viewer.Viewer.md#datacontext)
- [dataSourceProvider](neuroglancer_viewer.Viewer.md#datasourceprovider)
- [display](neuroglancer_viewer.Viewer.md#display)
- [displayDimensionRenderInfo](neuroglancer_viewer.Viewer.md#displaydimensionrenderinfo)
- [displayDimensions](neuroglancer_viewer.Viewer.md#displaydimensions)
- [disposedStacks](neuroglancer_viewer.Viewer.md#disposedstacks)
- [element](neuroglancer_viewer.Viewer.md#element)
- [helpPanelState](neuroglancer_viewer.Viewer.md#helppanelstate)
- [inputEventBindings](neuroglancer_viewer.Viewer.md#inputeventbindings)
- [layerListPanelState](neuroglancer_viewer.Viewer.md#layerlistpanelstate)
- [layerManager](neuroglancer_viewer.Viewer.md#layermanager)
- [layerSelectedValues](neuroglancer_viewer.Viewer.md#layerselectedvalues)
- [layerSpecification](neuroglancer_viewer.Viewer.md#layerspecification)
- [layout](neuroglancer_viewer.Viewer.md#layout)
- [mouseState](neuroglancer_viewer.Viewer.md#mousestate)
- [navigationState](neuroglancer_viewer.Viewer.md#navigationstate)
- [partialViewport](neuroglancer_viewer.Viewer.md#partialviewport)
- [perspectiveNavigationState](neuroglancer_viewer.Viewer.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](neuroglancer_viewer.Viewer.md#perspectiveviewbackgroundcolor)
- [position](neuroglancer_viewer.Viewer.md#position)
- [projectionDepthRange](neuroglancer_viewer.Viewer.md#projectiondepthrange)
- [projectionOrientation](neuroglancer_viewer.Viewer.md#projectionorientation)
- [projectionScale](neuroglancer_viewer.Viewer.md#projectionscale)
- [refCount](neuroglancer_viewer.Viewer.md#refcount)
- [relativeDisplayScales](neuroglancer_viewer.Viewer.md#relativedisplayscales)
- [resetInitiated](neuroglancer_viewer.Viewer.md#resetinitiated)
- [resetStateWhenEmpty](neuroglancer_viewer.Viewer.md#resetstatewhenempty)
- [scaleBarOptions](neuroglancer_viewer.Viewer.md#scalebaroptions)
- [selectedLayer](neuroglancer_viewer.Viewer.md#selectedlayer)
- [selectedStateServer](neuroglancer_viewer.Viewer.md#selectedstateserver)
- [selectionDetailsState](neuroglancer_viewer.Viewer.md#selectiondetailsstate)
- [settingsPanelState](neuroglancer_viewer.Viewer.md#settingspanelstate)
- [showAxisLines](neuroglancer_viewer.Viewer.md#showaxislines)
- [showDefaultAnnotations](neuroglancer_viewer.Viewer.md#showdefaultannotations)
- [showLayerDialog](neuroglancer_viewer.Viewer.md#showlayerdialog)
- [showPerspectiveSliceViews](neuroglancer_viewer.Viewer.md#showperspectivesliceviews)
- [showScaleBar](neuroglancer_viewer.Viewer.md#showscalebar)
- [sidePanelManager](neuroglancer_viewer.Viewer.md#sidepanelmanager)
- [state](neuroglancer_viewer.Viewer.md#state)
- [stateLoader](neuroglancer_viewer.Viewer.md#stateloader)
- [statisticsDisplayState](neuroglancer_viewer.Viewer.md#statisticsdisplaystate)
- [title](neuroglancer_viewer.Viewer.md#title)
- [toolBinder](neuroglancer_viewer.Viewer.md#toolbinder)
- [uiConfiguration](neuroglancer_viewer.Viewer.md#uiconfiguration)
- [uiControlVisibility](neuroglancer_viewer.Viewer.md#uicontrolvisibility)
- [urlHashBinding](neuroglancer_viewer.Viewer.md#urlhashbinding)
- [visibility](neuroglancer_viewer.Viewer.md#visibility)
- [visible](neuroglancer_viewer.Viewer.md#visible)
- [visibleLayerRoles](neuroglancer_viewer.Viewer.md#visiblelayerroles)
- [wasDisposed](neuroglancer_viewer.Viewer.md#wasdisposed)
- [wireFrame](neuroglancer_viewer.Viewer.md#wireframe)

### Accessors

- [chunkManager](neuroglancer_viewer.Viewer.md#chunkmanager)
- [chunkQueueManager](neuroglancer_viewer.Viewer.md#chunkqueuemanager)
- [gl](neuroglancer_viewer.Viewer.md#gl)
- [inputEventMap](neuroglancer_viewer.Viewer.md#inputeventmap)

### Methods

- [activateTool](neuroglancer_viewer.Viewer.md#activatetool)
- [addRef](neuroglancer_viewer.Viewer.md#addref)
- [bindAction](neuroglancer_viewer.Viewer.md#bindaction)
- [dispose](neuroglancer_viewer.Viewer.md#dispose)
- [disposed](neuroglancer_viewer.Viewer.md#disposed)
- [editJsonState](neuroglancer_viewer.Viewer.md#editjsonstate)
- [editPolygonOptions](neuroglancer_viewer.Viewer.md#editpolygonoptions)
- [handleNavigationStateChanged](neuroglancer_viewer.Viewer.md#handlenavigationstatechanged)
- [makeUI](neuroglancer_viewer.Viewer.md#makeui)
- [makeUiControlVisibilityState](neuroglancer_viewer.Viewer.md#makeuicontrolvisibilitystate)
- [onUpdateDisplay](neuroglancer_viewer.Viewer.md#onupdatedisplay)
- [refCountReachedZero](neuroglancer_viewer.Viewer.md#refcountreachedzero)
- [registerActionListeners](neuroglancer_viewer.Viewer.md#registeractionlisteners)
- [registerCancellable](neuroglancer_viewer.Viewer.md#registercancellable)
- [registerDisposer](neuroglancer_viewer.Viewer.md#registerdisposer)
- [registerEventActionBindings](neuroglancer_viewer.Viewer.md#registereventactionbindings)
- [registerEventListener](neuroglancer_viewer.Viewer.md#registereventlistener)
- [showStatistics](neuroglancer_viewer.Viewer.md#showstatistics)
- [showWiki](neuroglancer_viewer.Viewer.md#showwiki)
- [toggleHelpPanel](neuroglancer_viewer.Viewer.md#togglehelppanel)
- [toolInputEventMapBinder](neuroglancer_viewer.Viewer.md#toolinputeventmapbinder)
- [unregisterDisposer](neuroglancer_viewer.Viewer.md#unregisterdisposer)
- [updateShowBorders](neuroglancer_viewer.Viewer.md#updateshowborders)

## Constructors

### constructor

• **new Viewer**(`display`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `options` | [`Partial`](../modules/neuroglancer_layer_group_viewer._internal_.md#partial)<[`ViewerOptions`](../interfaces/neuroglancer_viewer.ViewerOptions.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L363)

## Properties

### coordinateSpace

• **coordinateSpace**: [`TrackableCoordinateSpace`](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/viewer.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L265)

___

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/viewer.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L301)

___

### crossSectionDepthRange

• **crossSectionDepthRange**: [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md)

#### Defined in

[src/neuroglancer/viewer.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L276)

___

### crossSectionOrientation

• **crossSectionOrientation**: [`OrientationState`](neuroglancer_navigation_state.OrientationState.md)

#### Defined in

[src/neuroglancer/viewer.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L272)

___

### crossSectionScale

• **crossSectionScale**: [`TrackableCrossSectionZoom`](neuroglancer_navigation_state.TrackableCrossSectionZoom.md)

#### Defined in

[src/neuroglancer/viewer.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L273)

___

### dataContext

• **dataContext**: [`DataManagementContext`](neuroglancer_viewer.DataManagementContext.md)

#### Defined in

[src/neuroglancer/viewer.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L330)

___

### dataSourceProvider

• **dataSourceProvider**: [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/viewer.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L334)

___

### display

• **display**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/viewer.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L270)

___

### displayDimensions

• **displayDimensions**: [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/viewer.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L269)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/viewer.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L333)

___

### helpPanelState

• **helpPanelState**: [`HelpPanelState`](neuroglancer_help_input_event_bindings.HelpPanelState.md)

#### Defined in

[src/neuroglancer/viewer.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L306)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](neuroglancer_viewer.InputEventBindings.md)

#### Defined in

[src/neuroglancer/viewer.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L332)

___

### layerListPanelState

• **layerListPanelState**: [`LayerListPanelState`](neuroglancer_ui_layer_list_panel.LayerListPanelState.md)

#### Defined in

[src/neuroglancer/viewer.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L313)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[layerManager](../interfaces/neuroglancer_viewer_state.ViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L293)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/viewer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L308)

___

### layerSpecification

• **layerSpecification**: [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/viewer.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L324)

___

### layout

• **layout**: [`RootLayoutContainer`](neuroglancer_layer_groups_layout.RootLayoutContainer.md)

#### Defined in

[src/neuroglancer/viewer.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L325)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[mouseState](../interfaces/neuroglancer_viewer_state.ViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L292)

___

### navigationState

• **navigationState**: [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableCrossSectionZoom`](neuroglancer_navigation_state.TrackableCrossSectionZoom.md)\>

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[navigationState](../interfaces/neuroglancer_viewer_state.ViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L282)

___

### partialViewport

• **partialViewport**: [`TrackableWindowedViewport`](neuroglancer_display_context.TrackableWindowedViewport.md)

#### Defined in

[src/neuroglancer/viewer.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L304)

___

### perspectiveNavigationState

• **perspectiveNavigationState**: [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableProjectionZoom`](neuroglancer_navigation_state.TrackableProjectionZoom.md)\>

#### Defined in

[src/neuroglancer/viewer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L287)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: [`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/viewer.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L302)

___

### position

• **position**: [`Position`](neuroglancer_navigation_state.Position.md)

#### Defined in

[src/neuroglancer/viewer.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L266)

___

### projectionDepthRange

• **projectionDepthRange**: [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md)

#### Defined in

[src/neuroglancer/viewer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L278)

___

### projectionOrientation

• **projectionOrientation**: [`OrientationState`](neuroglancer_navigation_state.OrientationState.md)

#### Defined in

[src/neuroglancer/viewer.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L275)

___

### projectionScale

• **projectionScale**: [`TrackableProjectionZoom`](neuroglancer_navigation_state.TrackableProjectionZoom.md)

#### Defined in

[src/neuroglancer/viewer.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L280)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### relativeDisplayScales

• **relativeDisplayScales**: [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/viewer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L267)

___

### resetInitiated

• **resetInitiated**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/viewer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L315)

___

### resetStateWhenEmpty

• **resetStateWhenEmpty**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L355)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableScaleBarOptions`](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md)

#### Defined in

[src/neuroglancer/viewer.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L303)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[selectedLayer](../interfaces/neuroglancer_viewer_state.ViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L294)

___

### selectedStateServer

• **selectedStateServer**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/viewer.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L312)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[selectionDetailsState](../interfaces/neuroglancer_viewer_state.ViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L310)

___

### settingsPanelState

• **settingsPanelState**: [`ViewerSettingsPanelState`](neuroglancer_ui_viewer_settings.ViewerSettingsPanelState.md)

#### Defined in

[src/neuroglancer/viewer.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L307)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[showAxisLines](../interfaces/neuroglancer_viewer_state.ViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L295)

___

### showDefaultAnnotations

• **showDefaultAnnotations**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L300)

___

### showLayerDialog

• **showLayerDialog**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L354)

___

### showPerspectiveSliceViews

• **showPerspectiveSliceViews**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L298)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L297)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L326)

___

### state

• **state**: [`TrackableViewerState`](neuroglancer_viewer._internal_.TrackableViewerState.md)

#### Defined in

[src/neuroglancer/viewer.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L328)

___

### stateLoader

• **stateLoader**: [`StateLoader`](neuroglancer_services_state_loader.StateLoader.md)

#### Defined in

[src/neuroglancer/viewer.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L338)

___

### statisticsDisplayState

• **statisticsDisplayState**: [`StatisticsDisplayState`](neuroglancer_ui_statistics.StatisticsDisplayState.md)

#### Defined in

[src/neuroglancer/viewer.ts:305](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L305)

___

### title

• **title**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/viewer.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L264)

___

### toolBinder

• `Private` **toolBinder**: [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

#### Defined in

[src/neuroglancer/viewer.ts:1002](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1002)

___

### uiConfiguration

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/neuroglancer_viewer.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L336)

___

### uiControlVisibility

• **uiControlVisibility**: `Object`

Logical and of each `VIEWER_UI_CONTROL_CONFIG_OPTIONS` option with the value of showUIControls.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `showAnnotationToolStatus` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showEditStateButton` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showHelpButton` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerHoverValues` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerListPanelButton` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerPanel` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerSidePanelButton` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLocation` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showSelectionPanelButton` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showSettingsButton` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Defined in

[src/neuroglancer/viewer.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L350)

___

### urlHashBinding

• **urlHashBinding**: [`UrlHashBinding`](neuroglancer_ui_url_hash_binding.UrlHashBinding.md)

#### Defined in

[src/neuroglancer/viewer.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L337)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[visibility](../interfaces/neuroglancer_viewer_state.ViewerState.md#visibility)

#### Defined in

[src/neuroglancer/viewer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L331)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[src/neuroglancer/viewer.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L361)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Implementation of

[ViewerState](../interfaces/neuroglancer_viewer_state.ViewerState.md).[visibleLayerRoles](../interfaces/neuroglancer_viewer_state.ViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L299)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L296)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L317)

___

### chunkQueueManager

• `get` **chunkQueueManager**(): [`ChunkQueueManager`](neuroglancer_chunk_manager_frontend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](neuroglancer_chunk_manager_frontend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L320)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/viewer.ts:1027](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1027)

___

### inputEventMap

• `get` **inputEventMap**(): [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Returns

[`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/viewer.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L357)

## Methods

### activateTool

▸ **activateTool**(`uppercase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uppercase` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1004](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1004)

___

### addRef

▸ **addRef**(): [`Viewer`](neuroglancer_viewer.Viewer.md)

#### Returns

[`Viewer`](neuroglancer_viewer.Viewer.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### bindAction

▸ **bindAction**<`Data`\>(`action`, `handler`): `void`

#### Type parameters

| Name |
| :------ |
| `Data` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `handler` | (`event`: [`ActionEvent`](../interfaces/neuroglancer_util_event_action_map.ActionEvent.md)<`Data`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:739](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L739)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### editJsonState

▸ **editJsonState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1012](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1012)

___

### editPolygonOptions

▸ **editPolygonOptions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1016](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1016)

___

### handleNavigationStateChanged

▸ `Private` **handleNavigationStateChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1037](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1037)

___

### makeUI

▸ `Private` **makeUI**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:488](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L488)

___

### makeUiControlVisibilityState

▸ `Private` **makeUiControlVisibilityState**(`key`): [`DerivedWatchableValue`](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"showLayerPanel"`` \| ``"showLayerHoverValues"`` \| ``"showHelpButton"`` \| ``"showSettingsButton"`` \| ``"showEditStateButton"`` \| ``"showLayerListPanelButton"`` \| ``"showSelectionPanelButton"`` \| ``"showLayerSidePanelButton"`` \| ``"showLocation"`` \| ``"showAnnotationToolStatus"`` \| ``"showUIControls"`` \| ``"showPanelBorders"`` |

#### Returns

[`DerivedWatchableValue`](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/viewer.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L340)

___

### onUpdateDisplay

▸ **onUpdateDisplay**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1031](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1031)

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

### registerActionListeners

▸ `Private` **registerActionListeners**(): `void`

Called once by the constructor to register the action listeners.

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L746)

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

### registerEventActionBindings

▸ `Private` **registerEventActionBindings**(): `void`

Called once by the constructor to set up event handlers.

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:733](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L733)

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

### showStatistics

▸ **showStatistics**(`value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `undefined` \| `boolean` | `undefined` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1020](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1020)

___

### showWiki

▸ **showWiki**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1008](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L1008)

___

### toggleHelpPanel

▸ **toggleHelpPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:991](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L991)

___

### toolInputEventMapBinder

▸ `Private` **toolInputEventMapBinder**(`inputEventMap`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMap` | [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md) |
| `context` | [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:995](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L995)

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

### updateShowBorders

▸ `Private` **updateShowBorders**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:478](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L478)
