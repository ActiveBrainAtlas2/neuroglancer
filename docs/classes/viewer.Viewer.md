[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / Viewer

# Class: Viewer

[viewer](../modules/viewer.md).Viewer

## Hierarchy

- `RefCounted`

  ↳ **`Viewer`**

## Implements

- [`ViewerState`](../interfaces/viewer_state.ViewerState.md)

## Table of contents

### Constructors

- [constructor](viewer.Viewer.md#constructor)

### Properties

- [coordinateSpace](viewer.Viewer.md#coordinatespace)
- [crossSectionBackgroundColor](viewer.Viewer.md#crosssectionbackgroundcolor)
- [crossSectionDepthRange](viewer.Viewer.md#crosssectiondepthrange)
- [crossSectionOrientation](viewer.Viewer.md#crosssectionorientation)
- [crossSectionScale](viewer.Viewer.md#crosssectionscale)
- [dataContext](viewer.Viewer.md#datacontext)
- [dataSourceProvider](viewer.Viewer.md#datasourceprovider)
- [display](viewer.Viewer.md#display)
- [displayDimensionRenderInfo](viewer.Viewer.md#displaydimensionrenderinfo)
- [displayDimensions](viewer.Viewer.md#displaydimensions)
- [disposedStacks](viewer.Viewer.md#disposedstacks)
- [element](viewer.Viewer.md#element)
- [helpPanelState](viewer.Viewer.md#helppanelstate)
- [inputEventBindings](viewer.Viewer.md#inputeventbindings)
- [layerListPanelState](viewer.Viewer.md#layerlistpanelstate)
- [layerManager](viewer.Viewer.md#layermanager)
- [layerSelectedValues](viewer.Viewer.md#layerselectedvalues)
- [layerSpecification](viewer.Viewer.md#layerspecification)
- [layout](viewer.Viewer.md#layout)
- [mouseState](viewer.Viewer.md#mousestate)
- [navigationState](viewer.Viewer.md#navigationstate)
- [partialViewport](viewer.Viewer.md#partialviewport)
- [perspectiveNavigationState](viewer.Viewer.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](viewer.Viewer.md#perspectiveviewbackgroundcolor)
- [position](viewer.Viewer.md#position)
- [projectionDepthRange](viewer.Viewer.md#projectiondepthrange)
- [projectionOrientation](viewer.Viewer.md#projectionorientation)
- [projectionScale](viewer.Viewer.md#projectionscale)
- [refCount](viewer.Viewer.md#refcount)
- [relativeDisplayScales](viewer.Viewer.md#relativedisplayscales)
- [resetInitiated](viewer.Viewer.md#resetinitiated)
- [resetStateWhenEmpty](viewer.Viewer.md#resetstatewhenempty)
- [scaleBarOptions](viewer.Viewer.md#scalebaroptions)
- [selectedLayer](viewer.Viewer.md#selectedlayer)
- [selectedStateServer](viewer.Viewer.md#selectedstateserver)
- [selectionDetailsState](viewer.Viewer.md#selectiondetailsstate)
- [settingsPanelState](viewer.Viewer.md#settingspanelstate)
- [showAxisLines](viewer.Viewer.md#showaxislines)
- [showDefaultAnnotations](viewer.Viewer.md#showdefaultannotations)
- [showLayerDialog](viewer.Viewer.md#showlayerdialog)
- [showPerspectiveSliceViews](viewer.Viewer.md#showperspectivesliceviews)
- [showScaleBar](viewer.Viewer.md#showscalebar)
- [sidePanelManager](viewer.Viewer.md#sidepanelmanager)
- [state](viewer.Viewer.md#state)
- [stateLoader](viewer.Viewer.md#stateloader)
- [statisticsDisplayState](viewer.Viewer.md#statisticsdisplaystate)
- [title](viewer.Viewer.md#title)
- [toolBinder](viewer.Viewer.md#toolbinder)
- [uiConfiguration](viewer.Viewer.md#uiconfiguration)
- [uiControlVisibility](viewer.Viewer.md#uicontrolvisibility)
- [urlHashBinding](viewer.Viewer.md#urlhashbinding)
- [visibility](viewer.Viewer.md#visibility)
- [visible](viewer.Viewer.md#visible)
- [visibleLayerRoles](viewer.Viewer.md#visiblelayerroles)
- [wasDisposed](viewer.Viewer.md#wasdisposed)
- [wireFrame](viewer.Viewer.md#wireframe)

### Accessors

- [chunkManager](viewer.Viewer.md#chunkmanager)
- [chunkQueueManager](viewer.Viewer.md#chunkqueuemanager)
- [gl](viewer.Viewer.md#gl)
- [inputEventMap](viewer.Viewer.md#inputeventmap)

### Methods

- [activateTool](viewer.Viewer.md#activatetool)
- [addRef](viewer.Viewer.md#addref)
- [bindAction](viewer.Viewer.md#bindaction)
- [dispose](viewer.Viewer.md#dispose)
- [disposed](viewer.Viewer.md#disposed)
- [editJsonState](viewer.Viewer.md#editjsonstate)
- [editPolygonOptions](viewer.Viewer.md#editpolygonoptions)
- [handleNavigationStateChanged](viewer.Viewer.md#handlenavigationstatechanged)
- [makeUI](viewer.Viewer.md#makeui)
- [makeUiControlVisibilityState](viewer.Viewer.md#makeuicontrolvisibilitystate)
- [onUpdateDisplay](viewer.Viewer.md#onupdatedisplay)
- [refCountReachedZero](viewer.Viewer.md#refcountreachedzero)
- [registerActionListeners](viewer.Viewer.md#registeractionlisteners)
- [registerCancellable](viewer.Viewer.md#registercancellable)
- [registerDisposer](viewer.Viewer.md#registerdisposer)
- [registerEventActionBindings](viewer.Viewer.md#registereventactionbindings)
- [registerEventListener](viewer.Viewer.md#registereventlistener)
- [showStatistics](viewer.Viewer.md#showstatistics)
- [showWiki](viewer.Viewer.md#showwiki)
- [toggleHelpPanel](viewer.Viewer.md#togglehelppanel)
- [toolInputEventMapBinder](viewer.Viewer.md#toolinputeventmapbinder)
- [unregisterDisposer](viewer.Viewer.md#unregisterdisposer)
- [updateShowBorders](viewer.Viewer.md#updateshowborders)

## Constructors

### constructor

• **new Viewer**(`display`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](display_context.DisplayContext.md) |
| `options` | `Partial`<[`ViewerOptions`](../interfaces/viewer.ViewerOptions.md)\> |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/viewer.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L363)

## Properties

### coordinateSpace

• **coordinateSpace**: [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/viewer.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L265)

___

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: `TrackableRGB`

#### Defined in

[src/neuroglancer/viewer.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L301)

___

### crossSectionDepthRange

• **crossSectionDepthRange**: [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Defined in

[src/neuroglancer/viewer.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L276)

___

### crossSectionOrientation

• **crossSectionOrientation**: [`OrientationState`](navigation_state.OrientationState.md)

#### Defined in

[src/neuroglancer/viewer.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L272)

___

### crossSectionScale

• **crossSectionScale**: [`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md)

#### Defined in

[src/neuroglancer/viewer.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L273)

___

### dataContext

• **dataContext**: [`DataManagementContext`](viewer.DataManagementContext.md)

#### Defined in

[src/neuroglancer/viewer.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L330)

___

### dataSourceProvider

• **dataSourceProvider**: `DataSourceProviderRegistry`

#### Defined in

[src/neuroglancer/viewer.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L334)

___

### display

• **display**: [`DisplayContext`](display_context.DisplayContext.md)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/viewer.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L270)

___

### displayDimensions

• **displayDimensions**: [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/viewer.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L269)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLElement`

#### Defined in

[src/neuroglancer/viewer.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L333)

___

### helpPanelState

• **helpPanelState**: `HelpPanelState`

#### Defined in

[src/neuroglancer/viewer.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L306)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](viewer.InputEventBindings.md)

#### Defined in

[src/neuroglancer/viewer.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L332)

___

### layerListPanelState

• **layerListPanelState**: `LayerListPanelState`

#### Defined in

[src/neuroglancer/viewer.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L313)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[layerManager](../interfaces/viewer_state.ViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L293)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/viewer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L308)

___

### layerSpecification

• **layerSpecification**: [`TopLevelLayerListSpecification`](layer.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/viewer.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L324)

___

### layout

• **layout**: [`RootLayoutContainer`](layer_groups_layout.RootLayoutContainer.md)

#### Defined in

[src/neuroglancer/viewer.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L325)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](layer.MouseSelectionState.md)

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[mouseState](../interfaces/viewer_state.ViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L292)

___

### navigationState

• **navigationState**: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md)\>

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[navigationState](../interfaces/viewer_state.ViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L282)

___

### partialViewport

• **partialViewport**: [`TrackableWindowedViewport`](display_context.TrackableWindowedViewport.md)

#### Defined in

[src/neuroglancer/viewer.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L304)

___

### perspectiveNavigationState

• **perspectiveNavigationState**: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableProjectionZoom`](navigation_state.TrackableProjectionZoom.md)\>

#### Defined in

[src/neuroglancer/viewer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L287)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: `TrackableRGB`

#### Defined in

[src/neuroglancer/viewer.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L302)

___

### position

• **position**: [`Position`](navigation_state.Position.md)

#### Defined in

[src/neuroglancer/viewer.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L266)

___

### projectionDepthRange

• **projectionDepthRange**: [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Defined in

[src/neuroglancer/viewer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L278)

___

### projectionOrientation

• **projectionOrientation**: [`OrientationState`](navigation_state.OrientationState.md)

#### Defined in

[src/neuroglancer/viewer.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L275)

___

### projectionScale

• **projectionScale**: [`TrackableProjectionZoom`](navigation_state.TrackableProjectionZoom.md)

#### Defined in

[src/neuroglancer/viewer.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L280)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### relativeDisplayScales

• **relativeDisplayScales**: [`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/viewer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L267)

___

### resetInitiated

• **resetInitiated**: `NullarySignal`

#### Defined in

[src/neuroglancer/viewer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L315)

___

### resetStateWhenEmpty

• **resetStateWhenEmpty**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L355)

___

### scaleBarOptions

• **scaleBarOptions**: `TrackableScaleBarOptions`

#### Defined in

[src/neuroglancer/viewer.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L303)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](layer.SelectedLayerState.md)

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[selectedLayer](../interfaces/viewer_state.ViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L294)

___

### selectedStateServer

• **selectedStateServer**: [`TrackableValue`](trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/viewer.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L312)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[selectionDetailsState](../interfaces/viewer_state.ViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L310)

___

### settingsPanelState

• **settingsPanelState**: `ViewerSettingsPanelState`

#### Defined in

[src/neuroglancer/viewer.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L307)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[showAxisLines](../interfaces/viewer_state.ViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L295)

___

### showDefaultAnnotations

• **showDefaultAnnotations**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L300)

___

### showLayerDialog

• **showLayerDialog**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L354)

___

### showPerspectiveSliceViews

• **showPerspectiveSliceViews**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L298)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L297)

___

### sidePanelManager

• **sidePanelManager**: `SidePanelManager`

#### Defined in

[src/neuroglancer/viewer.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L326)

___

### state

• **state**: `TrackableViewerState`

#### Defined in

[src/neuroglancer/viewer.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L328)

___

### stateLoader

• **stateLoader**: `StateLoader`

#### Defined in

[src/neuroglancer/viewer.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L338)

___

### statisticsDisplayState

• **statisticsDisplayState**: `StatisticsDisplayState`

#### Defined in

[src/neuroglancer/viewer.ts:305](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L305)

___

### title

• **title**: [`TrackableValue`](trackable_value.TrackableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/viewer.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L264)

___

### toolBinder

• `Private` **toolBinder**: `ToolBinder`

#### Defined in

[src/neuroglancer/viewer.ts:1002](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1002)

___

### uiConfiguration

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/viewer.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L336)

___

### uiControlVisibility

• **uiControlVisibility**: `Object`

Logical and of each `VIEWER_UI_CONTROL_CONFIG_OPTIONS` option with the value of showUIControls.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `showAnnotationToolStatus` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showEditStateButton` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showHelpButton` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerHoverValues` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerListPanelButton` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerPanel` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLayerSidePanelButton` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showLocation` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showSelectionPanelButton` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `showSettingsButton` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Defined in

[src/neuroglancer/viewer.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L350)

___

### urlHashBinding

• **urlHashBinding**: `UrlHashBinding`

#### Defined in

[src/neuroglancer/viewer.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L337)

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[visibility](../interfaces/viewer_state.ViewerState.md#visibility)

#### Defined in

[src/neuroglancer/viewer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L331)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[src/neuroglancer/viewer.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L361)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Implementation of

[ViewerState](../interfaces/viewer_state.ViewerState.md).[visibleLayerRoles](../interfaces/viewer_state.ViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L299)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L296)

## Accessors

### chunkManager

• `get` **chunkManager**(): `ChunkManager`

#### Returns

`ChunkManager`

#### Defined in

[src/neuroglancer/viewer.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L317)

___

### chunkQueueManager

• `get` **chunkQueueManager**(): `ChunkQueueManager`

#### Returns

`ChunkQueueManager`

#### Defined in

[src/neuroglancer/viewer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L320)

___

### gl

• `get` **gl**(): `GL`

#### Returns

`GL`

#### Defined in

[src/neuroglancer/viewer.ts:1027](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1027)

___

### inputEventMap

• `get` **inputEventMap**(): `EventActionMap`

#### Returns

`EventActionMap`

#### Defined in

[src/neuroglancer/viewer.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L357)

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

[src/neuroglancer/viewer.ts:1004](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1004)

___

### addRef

▸ **addRef**(): [`Viewer`](viewer.Viewer.md)

#### Returns

[`Viewer`](viewer.Viewer.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

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
| `handler` | (`event`: `ActionEvent`<`Data`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:739](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L739)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L75)

___

### editJsonState

▸ **editJsonState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1012](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1012)

___

### editPolygonOptions

▸ **editPolygonOptions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1016](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1016)

___

### handleNavigationStateChanged

▸ `Private` **handleNavigationStateChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1037](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1037)

___

### makeUI

▸ `Private` **makeUI**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:488](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L488)

___

### makeUiControlVisibilityState

▸ `Private` **makeUiControlVisibilityState**(`key`): `DerivedWatchableValue`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"showLayerPanel"`` \| ``"showLayerHoverValues"`` \| ``"showHelpButton"`` \| ``"showSettingsButton"`` \| ``"showEditStateButton"`` \| ``"showLayerListPanelButton"`` \| ``"showSelectionPanelButton"`` \| ``"showLayerSidePanelButton"`` \| ``"showLocation"`` \| ``"showAnnotationToolStatus"`` \| ``"showUIControls"`` \| ``"showPanelBorders"`` |

#### Returns

`DerivedWatchableValue`<`boolean`\>

#### Defined in

[src/neuroglancer/viewer.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L340)

___

### onUpdateDisplay

▸ **onUpdateDisplay**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1031](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1031)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

___

### registerActionListeners

▸ `Private` **registerActionListeners**(): `void`

Called once by the constructor to register the action listeners.

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L746)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventActionBindings

▸ `Private` **registerEventActionBindings**(): `void`

Called once by the constructor to set up event handlers.

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:733](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L733)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/viewer.ts:1020](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1020)

___

### showWiki

▸ **showWiki**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:1008](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L1008)

___

### toggleHelpPanel

▸ **toggleHelpPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:991](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L991)

___

### toolInputEventMapBinder

▸ `Private` **toolInputEventMapBinder**(`inputEventMap`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMap` | `EventActionMap` |
| `context` | `RefCounted` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:995](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L995)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)

___

### updateShowBorders

▸ `Private` **updateShowBorders**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/viewer.ts:478](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/viewer.ts#L478)
