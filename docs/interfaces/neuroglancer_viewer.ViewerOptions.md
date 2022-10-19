[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/viewer](../modules/neuroglancer_viewer.md) / ViewerOptions

# Interface: ViewerOptions

[neuroglancer/viewer](../modules/neuroglancer_viewer.md).ViewerOptions

## Hierarchy

- [`ViewerUIOptions`](../modules/neuroglancer_viewer.md#vieweruioptions)

- [`VisibilityPrioritySpecification`](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md)

  ↳ **`ViewerOptions`**

## Table of contents

### Properties

- [bundleRoot](neuroglancer_viewer.ViewerOptions.md#bundleroot)
- [dataContext](neuroglancer_viewer.ViewerOptions.md#datacontext)
- [dataSourceProvider](neuroglancer_viewer.ViewerOptions.md#datasourceprovider)
- [element](neuroglancer_viewer.ViewerOptions.md#element)
- [inputEventBindings](neuroglancer_viewer.ViewerOptions.md#inputeventbindings)
- [resetStateWhenEmpty](neuroglancer_viewer.ViewerOptions.md#resetstatewhenempty)
- [showAnnotationToolStatus](neuroglancer_viewer.ViewerOptions.md#showannotationtoolstatus)
- [showEditStateButton](neuroglancer_viewer.ViewerOptions.md#showeditstatebutton)
- [showHelpButton](neuroglancer_viewer.ViewerOptions.md#showhelpbutton)
- [showLayerDialog](neuroglancer_viewer.ViewerOptions.md#showlayerdialog)
- [showLayerHoverValues](neuroglancer_viewer.ViewerOptions.md#showlayerhovervalues)
- [showLayerListPanelButton](neuroglancer_viewer.ViewerOptions.md#showlayerlistpanelbutton)
- [showLayerPanel](neuroglancer_viewer.ViewerOptions.md#showlayerpanel)
- [showLayerSidePanelButton](neuroglancer_viewer.ViewerOptions.md#showlayersidepanelbutton)
- [showLocation](neuroglancer_viewer.ViewerOptions.md#showlocation)
- [showPanelBorders](neuroglancer_viewer.ViewerOptions.md#showpanelborders)
- [showSelectionPanelButton](neuroglancer_viewer.ViewerOptions.md#showselectionpanelbutton)
- [showSettingsButton](neuroglancer_viewer.ViewerOptions.md#showsettingsbutton)
- [showUIControls](neuroglancer_viewer.ViewerOptions.md#showuicontrols)
- [uiConfiguration](neuroglancer_viewer.ViewerOptions.md#uiconfiguration)
- [visibility](neuroglancer_viewer.ViewerOptions.md#visibility)

## Properties

### bundleRoot

• **bundleRoot**: `string`

#### Defined in

[src/neuroglancer/viewer.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L174)

___

### dataContext

• **dataContext**: [`DataManagementContext`](../classes/neuroglancer_viewer.DataManagementContext.md)

#### Defined in

[src/neuroglancer/viewer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L167)

___

### dataSourceProvider

• **dataSourceProvider**: [`DataSourceProviderRegistry`](../classes/neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/viewer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L169)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/viewer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L168)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](../classes/neuroglancer_viewer.InputEventBindings.md)

#### Defined in

[src/neuroglancer/viewer.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L172)

___

### resetStateWhenEmpty

• **resetStateWhenEmpty**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L173)

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

[src/neuroglancer/viewer.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L171)

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

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/neuroglancer_viewer.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L170)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[VisibilityPrioritySpecification](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md).[visibility](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L50)
