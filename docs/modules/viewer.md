[neuroglancer](../README.md) / [Modules](../modules.md) / viewer

# Module: viewer

## Table of contents

### Classes

- [DataManagementContext](../classes/viewer.DataManagementContext.md)
- [InputEventBindings](../classes/viewer.InputEventBindings.md)
- [Viewer](../classes/viewer.Viewer.md)

### Interfaces

- [ViewerOptions](../interfaces/viewer.ViewerOptions.md)

### Type Aliases

- [ViewerUIConfiguration](viewer.md#vieweruiconfiguration)
- [ViewerUIOptions](viewer.md#vieweruioptions)

### Variables

- [VIEWER\_TOP\_ROW\_CONFIG\_OPTIONS](viewer.md#viewer_top_row_config_options)
- [VIEWER\_UI\_CONFIG\_OPTIONS](viewer.md#viewer_ui_config_options)
- [VIEWER\_UI\_CONTROL\_CONFIG\_OPTIONS](viewer.md#viewer_ui_control_config_options)

### Functions

- [makeViewerUIConfiguration](viewer.md#makevieweruiconfiguration)

## Type Aliases

### ViewerUIConfiguration

Ƭ **ViewerUIConfiguration**: { [Key in typeof VIEWER\_UI\_CONFIG\_OPTIONS[number]]: TrackableBoolean }

#### Defined in

[src/neuroglancer/viewer.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L147)

___

### ViewerUIOptions

Ƭ **ViewerUIOptions**: { [Key in typeof VIEWER\_UI\_CONFIG\_OPTIONS[number]]: boolean }

#### Defined in

[src/neuroglancer/viewer.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L143)

## Variables

### VIEWER\_TOP\_ROW\_CONFIG\_OPTIONS

• `Const` **VIEWER\_TOP\_ROW\_CONFIG\_OPTIONS**: readonly [``"showHelpButton"``, ``"showSettingsButton"``, ``"showEditStateButton"``, ``"showLayerListPanelButton"``, ``"showSelectionPanelButton"``, ``"showLayerSidePanelButton"``, ``"showLocation"``, ``"showAnnotationToolStatus"``]

#### Defined in

[src/neuroglancer/viewer.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L120)

___

### VIEWER\_UI\_CONFIG\_OPTIONS

• `Const` **VIEWER\_UI\_CONFIG\_OPTIONS**: readonly [``"showHelpButton"``, ``"showSettingsButton"``, ``"showEditStateButton"``, ``"showLayerListPanelButton"``, ``"showSelectionPanelButton"``, ``"showLayerSidePanelButton"``, ``"showLocation"``, ``"showAnnotationToolStatus"``, ``"showLayerPanel"``, ``"showLayerHoverValues"``, ``"showUIControls"``, ``"showPanelBorders"``]

#### Defined in

[src/neuroglancer/viewer.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L137)

___

### VIEWER\_UI\_CONTROL\_CONFIG\_OPTIONS

• `Const` **VIEWER\_UI\_CONTROL\_CONFIG\_OPTIONS**: readonly [``"showHelpButton"``, ``"showSettingsButton"``, ``"showEditStateButton"``, ``"showLayerListPanelButton"``, ``"showSelectionPanelButton"``, ``"showLayerSidePanelButton"``, ``"showLocation"``, ``"showAnnotationToolStatus"``, ``"showLayerPanel"``, ``"showLayerHoverValues"``]

#### Defined in

[src/neuroglancer/viewer.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L131)

## Functions

### makeViewerUIConfiguration

▸ **makeViewerUIConfiguration**(): [`ViewerUIConfiguration`](viewer.md#vieweruiconfiguration)

#### Returns

[`ViewerUIConfiguration`](viewer.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/viewer.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L151)
