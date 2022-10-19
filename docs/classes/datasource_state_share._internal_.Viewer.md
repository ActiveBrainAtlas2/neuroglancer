[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / Viewer

# Class: Viewer

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).Viewer

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`Viewer`**

## Implements

- [`ViewerState`](../interfaces/datasource_state_share._internal_.ViewerState.md)

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.Viewer.md#constructor)

### Properties

- [coordinateSpace](datasource_state_share._internal_.Viewer.md#coordinatespace)
- [crossSectionBackgroundColor](datasource_state_share._internal_.Viewer.md#crosssectionbackgroundcolor)
- [crossSectionDepthRange](datasource_state_share._internal_.Viewer.md#crosssectiondepthrange)
- [crossSectionOrientation](datasource_state_share._internal_.Viewer.md#crosssectionorientation)
- [crossSectionScale](datasource_state_share._internal_.Viewer.md#crosssectionscale)
- [dataContext](datasource_state_share._internal_.Viewer.md#datacontext)
- [dataSourceProvider](datasource_state_share._internal_.Viewer.md#datasourceprovider)
- [display](datasource_state_share._internal_.Viewer.md#display)
- [displayDimensionRenderInfo](datasource_state_share._internal_.Viewer.md#displaydimensionrenderinfo)
- [displayDimensions](datasource_state_share._internal_.Viewer.md#displaydimensions)
- [disposedStacks](datasource_state_share._internal_.Viewer.md#disposedstacks)
- [element](datasource_state_share._internal_.Viewer.md#element)
- [helpPanelState](datasource_state_share._internal_.Viewer.md#helppanelstate)
- [inputEventBindings](datasource_state_share._internal_.Viewer.md#inputeventbindings)
- [layerListPanelState](datasource_state_share._internal_.Viewer.md#layerlistpanelstate)
- [layerManager](datasource_state_share._internal_.Viewer.md#layermanager)
- [layerSelectedValues](datasource_state_share._internal_.Viewer.md#layerselectedvalues)
- [layerSpecification](datasource_state_share._internal_.Viewer.md#layerspecification)
- [layout](datasource_state_share._internal_.Viewer.md#layout)
- [mouseState](datasource_state_share._internal_.Viewer.md#mousestate)
- [navigationState](datasource_state_share._internal_.Viewer.md#navigationstate)
- [partialViewport](datasource_state_share._internal_.Viewer.md#partialviewport)
- [perspectiveNavigationState](datasource_state_share._internal_.Viewer.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](datasource_state_share._internal_.Viewer.md#perspectiveviewbackgroundcolor)
- [position](datasource_state_share._internal_.Viewer.md#position)
- [projectionDepthRange](datasource_state_share._internal_.Viewer.md#projectiondepthrange)
- [projectionOrientation](datasource_state_share._internal_.Viewer.md#projectionorientation)
- [projectionScale](datasource_state_share._internal_.Viewer.md#projectionscale)
- [refCount](datasource_state_share._internal_.Viewer.md#refcount)
- [relativeDisplayScales](datasource_state_share._internal_.Viewer.md#relativedisplayscales)
- [resetInitiated](datasource_state_share._internal_.Viewer.md#resetinitiated)
- [resetStateWhenEmpty](datasource_state_share._internal_.Viewer.md#resetstatewhenempty)
- [scaleBarOptions](datasource_state_share._internal_.Viewer.md#scalebaroptions)
- [selectedLayer](datasource_state_share._internal_.Viewer.md#selectedlayer)
- [selectedStateServer](datasource_state_share._internal_.Viewer.md#selectedstateserver)
- [selectionDetailsState](datasource_state_share._internal_.Viewer.md#selectiondetailsstate)
- [settingsPanelState](datasource_state_share._internal_.Viewer.md#settingspanelstate)
- [showAxisLines](datasource_state_share._internal_.Viewer.md#showaxislines)
- [showDefaultAnnotations](datasource_state_share._internal_.Viewer.md#showdefaultannotations)
- [showLayerDialog](datasource_state_share._internal_.Viewer.md#showlayerdialog)
- [showPerspectiveSliceViews](datasource_state_share._internal_.Viewer.md#showperspectivesliceviews)
- [showScaleBar](datasource_state_share._internal_.Viewer.md#showscalebar)
- [sidePanelManager](datasource_state_share._internal_.Viewer.md#sidepanelmanager)
- [state](datasource_state_share._internal_.Viewer.md#state)
- [stateLoader](datasource_state_share._internal_.Viewer.md#stateloader)
- [statisticsDisplayState](datasource_state_share._internal_.Viewer.md#statisticsdisplaystate)
- [title](datasource_state_share._internal_.Viewer.md#title)
- [toolBinder](datasource_state_share._internal_.Viewer.md#toolbinder)
- [uiConfiguration](datasource_state_share._internal_.Viewer.md#uiconfiguration)
- [uiControlVisibility](datasource_state_share._internal_.Viewer.md#uicontrolvisibility)
- [urlHashBinding](datasource_state_share._internal_.Viewer.md#urlhashbinding)
- [visibility](datasource_state_share._internal_.Viewer.md#visibility)
- [visible](datasource_state_share._internal_.Viewer.md#visible)
- [visibleLayerRoles](datasource_state_share._internal_.Viewer.md#visiblelayerroles)
- [wasDisposed](datasource_state_share._internal_.Viewer.md#wasdisposed)
- [wireFrame](datasource_state_share._internal_.Viewer.md#wireframe)

### Accessors

- [chunkManager](datasource_state_share._internal_.Viewer.md#chunkmanager)
- [chunkQueueManager](datasource_state_share._internal_.Viewer.md#chunkqueuemanager)
- [gl](datasource_state_share._internal_.Viewer.md#gl)
- [inputEventMap](datasource_state_share._internal_.Viewer.md#inputeventmap)

### Methods

- [activateTool](datasource_state_share._internal_.Viewer.md#activatetool)
- [addRef](datasource_state_share._internal_.Viewer.md#addref)
- [bindAction](datasource_state_share._internal_.Viewer.md#bindaction)
- [dispose](datasource_state_share._internal_.Viewer.md#dispose)
- [disposed](datasource_state_share._internal_.Viewer.md#disposed)
- [editJsonState](datasource_state_share._internal_.Viewer.md#editjsonstate)
- [editPolygonOptions](datasource_state_share._internal_.Viewer.md#editpolygonoptions)
- [handleNavigationStateChanged](datasource_state_share._internal_.Viewer.md#handlenavigationstatechanged)
- [makeUI](datasource_state_share._internal_.Viewer.md#makeui)
- [makeUiControlVisibilityState](datasource_state_share._internal_.Viewer.md#makeuicontrolvisibilitystate)
- [onUpdateDisplay](datasource_state_share._internal_.Viewer.md#onupdatedisplay)
- [refCountReachedZero](datasource_state_share._internal_.Viewer.md#refcountreachedzero)
- [registerActionListeners](datasource_state_share._internal_.Viewer.md#registeractionlisteners)
- [registerCancellable](datasource_state_share._internal_.Viewer.md#registercancellable)
- [registerDisposer](datasource_state_share._internal_.Viewer.md#registerdisposer)
- [registerEventActionBindings](datasource_state_share._internal_.Viewer.md#registereventactionbindings)
- [registerEventListener](datasource_state_share._internal_.Viewer.md#registereventlistener)
- [showStatistics](datasource_state_share._internal_.Viewer.md#showstatistics)
- [showWiki](datasource_state_share._internal_.Viewer.md#showwiki)
- [toggleHelpPanel](datasource_state_share._internal_.Viewer.md#togglehelppanel)
- [toolInputEventMapBinder](datasource_state_share._internal_.Viewer.md#toolinputeventmapbinder)
- [unregisterDisposer](datasource_state_share._internal_.Viewer.md#unregisterdisposer)
- [updateShowBorders](datasource_state_share._internal_.Viewer.md#updateshowborders)

## Constructors

### constructor

• **new Viewer**(`display`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `options` | [`Partial`](../modules/datasource_state_share._internal_.md#partial)<[`ViewerOptions`](../interfaces/datasource_state_share._internal_.ViewerOptions.md)\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L363)

## Properties

### coordinateSpace

• **coordinateSpace**: [`TrackableCoordinateSpace`](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/viewer.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L265)

___

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/viewer.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L301)

___

### crossSectionDepthRange

• **crossSectionDepthRange**: [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)

#### Defined in

[src/neuroglancer/viewer.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L276)

___

### crossSectionOrientation

• **crossSectionOrientation**: [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

#### Defined in

[src/neuroglancer/viewer.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L272)

___

### crossSectionScale

• **crossSectionScale**: [`TrackableCrossSectionZoom`](annotation_polygon._internal_.TrackableCrossSectionZoom.md)

#### Defined in

[src/neuroglancer/viewer.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L273)

___

### dataContext

• **dataContext**: [`DataManagementContext`](datasource_state_share._internal_.DataManagementContext.md)

#### Defined in

[src/neuroglancer/viewer.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L330)

___

### dataSourceProvider

• **dataSourceProvider**: [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/viewer.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L334)

___

### display

• **display**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/viewer.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L270)

___

### displayDimensions

• **displayDimensions**: [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/viewer.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L269)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/viewer.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L333)

___

### helpPanelState

• **helpPanelState**: [`HelpPanelState`](help_input_event_bindings.HelpPanelState.md)

#### Defined in

[src/neuroglancer/viewer.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L306)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](datasource_state_share._internal_.InputEventBindings.md)

#### Defined in

[src/neuroglancer/viewer.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L332)

___

### layerListPanelState

• **layerListPanelState**: [`LayerListPanelState`](ui_layer_list_panel.LayerListPanelState.md)

#### Defined in

[src/neuroglancer/viewer.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L313)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[layerManager](../interfaces/datasource_state_share._internal_.ViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L293)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/viewer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L308)

___

### layerSpecification

• **layerSpecification**: [`TopLevelLayerListSpecification`](annotation_annotation_layer_state._internal_.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/viewer.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L324)

___

### layout

• **layout**: [`RootLayoutContainer`](datasource_state_share._internal_.RootLayoutContainer.md)

#### Defined in

[src/neuroglancer/viewer.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L325)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[mouseState](../interfaces/datasource_state_share._internal_.ViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L292)

___

### navigationState

• **navigationState**: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableCrossSectionZoom`](annotation_polygon._internal_.TrackableCrossSectionZoom.md)\>

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[navigationState](../interfaces/datasource_state_share._internal_.ViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L282)

___

### partialViewport

• **partialViewport**: [`TrackableWindowedViewport`](datasource_state_share._internal_.TrackableWindowedViewport.md)

#### Defined in

[src/neuroglancer/viewer.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L304)

___

### perspectiveNavigationState

• **perspectiveNavigationState**: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableProjectionZoom`](annotation_polygon._internal_.TrackableProjectionZoom.md)\>

#### Defined in

[src/neuroglancer/viewer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L287)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: [`TrackableRGB`](util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/viewer.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L302)

___

### position

• **position**: [`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Defined in

[src/neuroglancer/viewer.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L266)

___

### projectionDepthRange

• **projectionDepthRange**: [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)

#### Defined in

[src/neuroglancer/viewer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L278)

___

### projectionOrientation

• **projectionOrientation**: [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

#### Defined in

[src/neuroglancer/viewer.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L275)

___

### projectionScale

• **projectionScale**: [`TrackableProjectionZoom`](annotation_polygon._internal_.TrackableProjectionZoom.md)

#### Defined in

[src/neuroglancer/viewer.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L280)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### relativeDisplayScales

• **relativeDisplayScales**: [`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/viewer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L267)

___

### resetInitiated

• **resetInitiated**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/viewer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L315)

___

### resetStateWhenEmpty

• **resetStateWhenEmpty**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L355)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableScaleBarOptions`](widget_scale_bar.TrackableScaleBarOptions.md)

#### Defined in

[src/neuroglancer/viewer.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L303)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[selectedLayer](../interfaces/datasource_state_share._internal_.ViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L294)

___

### selectedStateServer

• **selectedStateServer**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/viewer.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L312)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[selectionDetailsState](../interfaces/datasource_state_share._internal_.ViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L310)

___

### settingsPanelState

• **settingsPanelState**: [`ViewerSettingsPanelState`](ui_viewer_settings.ViewerSettingsPanelState.md)

#### Defined in

[src/neuroglancer/viewer.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L307)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[showAxisLines](../interfaces/datasource_state_share._internal_.ViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L295)

___

### showDefaultAnnotations

• **showDefaultAnnotations**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L300)

___

### showLayerDialog

• **showLayerDialog**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L354)

___

### showPerspectiveSliceViews

• **showPerspectiveSliceViews**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L298)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L297)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](ui_side_panel.SidePanelManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L326)

___

### state

• **state**: [`TrackableViewerState`](datasource_state_share._internal_.TrackableViewerState.md)

#### Defined in

[src/neuroglancer/viewer.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L328)

___

### stateLoader

• **stateLoader**: [`StateLoader`](services_state_loader.StateLoader.md)

#### Defined in

[src/neuroglancer/viewer.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L338)

___

### statisticsDisplayState

• **statisticsDisplayState**: [`StatisticsDisplayState`](ui_statistics.StatisticsDisplayState.md)

#### Defined in

[src/neuroglancer/viewer.ts:305](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L305)

___

### title

• **title**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/viewer.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L264)

___

### toolBinder

• `Private` **toolBinder**: [`ToolBinder`](ui_tool.ToolBinder.md)

#### Defined in

[src/neuroglancer/viewer.ts:1002](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1002)

___

### uiConfiguration

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/datasource_state_share._internal_.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L336)

___

### uiControlVisibility

• **uiControlVisibility**: `Object`

Logical and of each `VIEWER_UI_CONTROL_CONFIG_OPTIONS` option with the value of showUIControls.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `showAnnotationToolStatus` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showEditStateButton` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showHelpButton` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showLayerHoverValues` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showLayerListPanelButton` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showLayerPanel` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showLayerSidePanelButton` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showLocation` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showSelectionPanelButton` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `showSettingsButton` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |

#### Defined in

[src/neuroglancer/viewer.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L350)

___

### urlHashBinding

• **urlHashBinding**: [`UrlHashBinding`](ui_url_hash_binding.UrlHashBinding.md)

#### Defined in

[src/neuroglancer/viewer.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L337)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[visibility](../interfaces/datasource_state_share._internal_.ViewerState.md#visibility)

#### Defined in

[src/neuroglancer/viewer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L331)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[src/neuroglancer/viewer.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L361)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](datasource_state_share._internal_.WatchableSet.md)<[`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md)\>

#### Implementation of

[ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md).[visibleLayerRoles](../interfaces/datasource_state_share._internal_.ViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L299)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L296)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L317)

___

### chunkQueueManager

• `get` **chunkQueueManager**(): [`ChunkQueueManager`](chunk_manager_frontend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](chunk_manager_frontend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L320)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/viewer.ts:1027](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1027)

___

### inputEventMap

• `get` **inputEventMap**(): [`EventActionMap`](util_event_action_map.EventActionMap.md)

#### Returns

[`EventActionMap`](util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/viewer.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L357)

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

[src/neuroglancer/viewer.ts:1004](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1004)

___

### addRef

▸ **addRef**(): [`Viewer`](datasource_state_share._internal_.Viewer.md)

#### Returns

[`Viewer`](datasource_state_share._internal_.Viewer.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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
| `handler` | (`event`: [`ActionEvent`](../interfaces/util_event_action_map.ActionEvent.md)<`Data`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:739](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L739)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### editJsonState

▸ **editJsonState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1012](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1012)

___

### editPolygonOptions

▸ **editPolygonOptions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1016](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1016)

___

### handleNavigationStateChanged

▸ `Private` **handleNavigationStateChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1037](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1037)

___

### makeUI

▸ `Private` **makeUI**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:488](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L488)

___

### makeUiControlVisibilityState

▸ `Private` **makeUiControlVisibilityState**(`key`): [`DerivedWatchableValue`](datasource_state_share._internal_.DerivedWatchableValue.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"showLayerPanel"`` \| ``"showLayerHoverValues"`` \| ``"showHelpButton"`` \| ``"showSettingsButton"`` \| ``"showEditStateButton"`` \| ``"showLayerListPanelButton"`` \| ``"showSelectionPanelButton"`` \| ``"showLayerSidePanelButton"`` \| ``"showLocation"`` \| ``"showAnnotationToolStatus"`` \| ``"showUIControls"`` \| ``"showPanelBorders"`` |

#### Returns

[`DerivedWatchableValue`](datasource_state_share._internal_.DerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/viewer.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L340)

___

### onUpdateDisplay

▸ **onUpdateDisplay**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1031](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1031)

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

### registerActionListeners

▸ `Private` **registerActionListeners**(): `void`

Called once by the constructor to register the action listeners.

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L746)

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

### registerEventActionBindings

▸ `Private` **registerEventActionBindings**(): `void`

Called once by the constructor to set up event handlers.

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:733](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L733)

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

### showStatistics

▸ **showStatistics**(`value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `undefined` \| `boolean` | `undefined` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1020](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1020)

___

### showWiki

▸ **showWiki**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1008](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L1008)

___

### toggleHelpPanel

▸ **toggleHelpPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:991](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L991)

___

### toolInputEventMapBinder

▸ `Private` **toolInputEventMapBinder**(`inputEventMap`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMap` | [`EventActionMap`](util_event_action_map.EventActionMap.md) |
| `context` | [`RefCounted`](util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:995](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L995)

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

### updateShowBorders

▸ `Private` **updateShowBorders**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:478](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L478)
