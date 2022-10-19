[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/viewer

# Module: neuroglancer/viewer

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_viewer._internal_.md)

### Classes

- [DataManagementContext](../classes/neuroglancer_viewer.DataManagementContext.md)
- [InputEventBindings](../classes/neuroglancer_viewer.InputEventBindings.md)
- [Viewer](../classes/neuroglancer_viewer.Viewer.md)

### Interfaces

- [ViewerOptions](../interfaces/neuroglancer_viewer.ViewerOptions.md)

### Type Aliases

- [ViewerUIConfiguration](neuroglancer_viewer.md#vieweruiconfiguration)
- [ViewerUIOptions](neuroglancer_viewer.md#vieweruioptions)

### Variables

- [VIEWER\_TOP\_ROW\_CONFIG\_OPTIONS](neuroglancer_viewer.md#viewer_top_row_config_options)
- [VIEWER\_UI\_CONFIG\_OPTIONS](neuroglancer_viewer.md#viewer_ui_config_options)
- [VIEWER\_UI\_CONTROL\_CONFIG\_OPTIONS](neuroglancer_viewer.md#viewer_ui_control_config_options)

### Functions

- [makeViewerUIConfiguration](neuroglancer_viewer.md#makevieweruiconfiguration)

## Type Aliases

### ViewerUIConfiguration

Ƭ **ViewerUIConfiguration**: { [Key in typeof VIEWER\_UI\_CONFIG\_OPTIONS[number]]: TrackableBoolean }

#### Defined in

[src/neuroglancer/viewer.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L147)

___

### ViewerUIOptions

Ƭ **ViewerUIOptions**: { [Key in typeof VIEWER\_UI\_CONFIG\_OPTIONS[number]]: boolean }

#### Defined in

[src/neuroglancer/viewer.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L143)

## Variables

### VIEWER\_TOP\_ROW\_CONFIG\_OPTIONS

• `Const` **VIEWER\_TOP\_ROW\_CONFIG\_OPTIONS**: readonly [``"showHelpButton"``, ``"showSettingsButton"``, ``"showEditStateButton"``, ``"showLayerListPanelButton"``, ``"showSelectionPanelButton"``, ``"showLayerSidePanelButton"``, ``"showLocation"``, ``"showAnnotationToolStatus"``]

#### Defined in

[src/neuroglancer/viewer.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L120)

___

### VIEWER\_UI\_CONFIG\_OPTIONS

• `Const` **VIEWER\_UI\_CONFIG\_OPTIONS**: readonly [``"showHelpButton"``, ``"showSettingsButton"``, ``"showEditStateButton"``, ``"showLayerListPanelButton"``, ``"showSelectionPanelButton"``, ``"showLayerSidePanelButton"``, ``"showLocation"``, ``"showAnnotationToolStatus"``, ``"showLayerPanel"``, ``"showLayerHoverValues"``, ``"showUIControls"``, ``"showPanelBorders"``]

#### Defined in

[src/neuroglancer/viewer.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L137)

___

### VIEWER\_UI\_CONTROL\_CONFIG\_OPTIONS

• `Const` **VIEWER\_UI\_CONTROL\_CONFIG\_OPTIONS**: readonly [``"showHelpButton"``, ``"showSettingsButton"``, ``"showEditStateButton"``, ``"showLayerListPanelButton"``, ``"showSelectionPanelButton"``, ``"showLayerSidePanelButton"``, ``"showLocation"``, ``"showAnnotationToolStatus"``, ``"showLayerPanel"``, ``"showLayerHoverValues"``]

#### Defined in

[src/neuroglancer/viewer.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L131)

## Functions

### makeViewerUIConfiguration

▸ **makeViewerUIConfiguration**(): [`ViewerUIConfiguration`](neuroglancer_viewer.md#vieweruiconfiguration)

#### Returns

[`ViewerUIConfiguration`](neuroglancer_viewer.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L151)
