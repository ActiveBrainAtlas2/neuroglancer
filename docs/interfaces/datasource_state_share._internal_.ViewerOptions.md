[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / ViewerOptions

# Interface: ViewerOptions

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).ViewerOptions

## Hierarchy

- [`ViewerUIOptions`](../modules/datasource_state_share._internal_.md#vieweruioptions)

- [`VisibilityPrioritySpecification`](visibility_priority_frontend.VisibilityPrioritySpecification.md)

  ↳ **`ViewerOptions`**

## Table of contents

### Properties

- [bundleRoot](datasource_state_share._internal_.ViewerOptions.md#bundleroot)
- [dataContext](datasource_state_share._internal_.ViewerOptions.md#datacontext)
- [dataSourceProvider](datasource_state_share._internal_.ViewerOptions.md#datasourceprovider)
- [element](datasource_state_share._internal_.ViewerOptions.md#element)
- [inputEventBindings](datasource_state_share._internal_.ViewerOptions.md#inputeventbindings)
- [resetStateWhenEmpty](datasource_state_share._internal_.ViewerOptions.md#resetstatewhenempty)
- [showAnnotationToolStatus](datasource_state_share._internal_.ViewerOptions.md#showannotationtoolstatus)
- [showEditStateButton](datasource_state_share._internal_.ViewerOptions.md#showeditstatebutton)
- [showHelpButton](datasource_state_share._internal_.ViewerOptions.md#showhelpbutton)
- [showLayerDialog](datasource_state_share._internal_.ViewerOptions.md#showlayerdialog)
- [showLayerHoverValues](datasource_state_share._internal_.ViewerOptions.md#showlayerhovervalues)
- [showLayerListPanelButton](datasource_state_share._internal_.ViewerOptions.md#showlayerlistpanelbutton)
- [showLayerPanel](datasource_state_share._internal_.ViewerOptions.md#showlayerpanel)
- [showLayerSidePanelButton](datasource_state_share._internal_.ViewerOptions.md#showlayersidepanelbutton)
- [showLocation](datasource_state_share._internal_.ViewerOptions.md#showlocation)
- [showPanelBorders](datasource_state_share._internal_.ViewerOptions.md#showpanelborders)
- [showSelectionPanelButton](datasource_state_share._internal_.ViewerOptions.md#showselectionpanelbutton)
- [showSettingsButton](datasource_state_share._internal_.ViewerOptions.md#showsettingsbutton)
- [showUIControls](datasource_state_share._internal_.ViewerOptions.md#showuicontrols)
- [uiConfiguration](datasource_state_share._internal_.ViewerOptions.md#uiconfiguration)
- [visibility](datasource_state_share._internal_.ViewerOptions.md#visibility)

## Properties

### bundleRoot

• **bundleRoot**: `string`

#### Defined in

[src/neuroglancer/viewer.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L174)

___

### dataContext

• **dataContext**: [`DataManagementContext`](../classes/datasource_state_share._internal_.DataManagementContext.md)

#### Defined in

[src/neuroglancer/viewer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L167)

___

### dataSourceProvider

• **dataSourceProvider**: [`DataSourceProviderRegistry`](../classes/datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/viewer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L169)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/viewer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L168)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](../classes/datasource_state_share._internal_.InputEventBindings.md)

#### Defined in

[src/neuroglancer/viewer.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L172)

___

### resetStateWhenEmpty

• **resetStateWhenEmpty**: `boolean`

#### Defined in

[src/neuroglancer/viewer.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L173)

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

[src/neuroglancer/viewer.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L171)

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

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/datasource_state_share._internal_.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L170)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[VisibilityPrioritySpecification](visibility_priority_frontend.VisibilityPrioritySpecification.md).[visibility](visibility_priority_frontend.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L50)
