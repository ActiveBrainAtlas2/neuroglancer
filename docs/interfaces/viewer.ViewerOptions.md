[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / ViewerOptions

# Interface: ViewerOptions

[viewer](../modules/viewer.md).ViewerOptions

## Hierarchy

- [`ViewerUIOptions`](../modules/viewer.md#vieweruioptions)

- [`VisibilityPrioritySpecification`](viewer_state.VisibilityPrioritySpecification.md)

  ↳ **`ViewerOptions`**

## Table of contents

### Properties

- [bundleRoot](viewer.ViewerOptions.md#bundleroot)
- [dataContext](viewer.ViewerOptions.md#datacontext)
- [dataSourceProvider](viewer.ViewerOptions.md#datasourceprovider)
- [element](viewer.ViewerOptions.md#element)
- [inputEventBindings](viewer.ViewerOptions.md#inputeventbindings)
- [resetStateWhenEmpty](viewer.ViewerOptions.md#resetstatewhenempty)
- [showAnnotationToolStatus](viewer.ViewerOptions.md#showannotationtoolstatus)
- [showEditStateButton](viewer.ViewerOptions.md#showeditstatebutton)
- [showHelpButton](viewer.ViewerOptions.md#showhelpbutton)
- [showLayerDialog](viewer.ViewerOptions.md#showlayerdialog)
- [showLayerHoverValues](viewer.ViewerOptions.md#showlayerhovervalues)
- [showLayerListPanelButton](viewer.ViewerOptions.md#showlayerlistpanelbutton)
- [showLayerPanel](viewer.ViewerOptions.md#showlayerpanel)
- [showLayerSidePanelButton](viewer.ViewerOptions.md#showlayersidepanelbutton)
- [showLocation](viewer.ViewerOptions.md#showlocation)
- [showPanelBorders](viewer.ViewerOptions.md#showpanelborders)
- [showSelectionPanelButton](viewer.ViewerOptions.md#showselectionpanelbutton)
- [showSettingsButton](viewer.ViewerOptions.md#showsettingsbutton)
- [showUIControls](viewer.ViewerOptions.md#showuicontrols)
- [uiConfiguration](viewer.ViewerOptions.md#uiconfiguration)
- [visibility](viewer.ViewerOptions.md#visibility)

## Properties

### bundleRoot

• **bundleRoot**: `string`

#### Defined in

[src/neuroglancer/viewer.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L174)

___

### dataContext

• **dataContext**: [`DataManagementContext`](../classes/viewer.DataManagementContext.md)

#### Defined in

[src/neuroglancer/viewer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L167)

___

### dataSourceProvider

• **dataSourceProvider**: `DataSourceProviderRegistry`

#### Defined in

[src/neuroglancer/viewer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L169)

___

### element

• **element**: `HTMLElement`

#### Defined in

[src/neuroglancer/viewer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L168)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](../classes/viewer.InputEventBindings.md)

#### Defined in

[src/neuroglancer/viewer.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L172)

___

### resetStateWhenEmpty

• **resetStateWhenEmpty**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L173)

___

### showAnnotationToolStatus

• **showAnnotationToolStatus**: `boolean`

#### Inherited from

ViewerUIOptions.showAnnotationToolStatus

___

### showEditStateButton

• **showEditStateButton**: `boolean`

#### Inherited from

ViewerUIOptions.showEditStateButton

___

### showHelpButton

• **showHelpButton**: `boolean`

#### Inherited from

ViewerUIOptions.showHelpButton

___

### showLayerDialog

• **showLayerDialog**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L171)

___

### showLayerHoverValues

• **showLayerHoverValues**: `boolean`

#### Inherited from

ViewerUIOptions.showLayerHoverValues

___

### showLayerListPanelButton

• **showLayerListPanelButton**: `boolean`

#### Inherited from

ViewerUIOptions.showLayerListPanelButton

___

### showLayerPanel

• **showLayerPanel**: `boolean`

#### Inherited from

ViewerUIOptions.showLayerPanel

___

### showLayerSidePanelButton

• **showLayerSidePanelButton**: `boolean`

#### Inherited from

ViewerUIOptions.showLayerSidePanelButton

___

### showLocation

• **showLocation**: `boolean`

#### Inherited from

ViewerUIOptions.showLocation

___

### showPanelBorders

• **showPanelBorders**: `boolean`

#### Inherited from

ViewerUIOptions.showPanelBorders

___

### showSelectionPanelButton

• **showSelectionPanelButton**: `boolean`

#### Inherited from

ViewerUIOptions.showSelectionPanelButton

___

### showSettingsButton

• **showSettingsButton**: `boolean`

#### Inherited from

ViewerUIOptions.showSettingsButton

___

### showUIControls

• **showUIControls**: `boolean`

#### Inherited from

ViewerUIOptions.showUIControls

___

### uiConfiguration

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/viewer.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/viewer.ts#L170)

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

#### Inherited from

[VisibilityPrioritySpecification](viewer_state.VisibilityPrioritySpecification.md).[visibility](viewer_state.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/visibility_priority/frontend.ts#L50)
