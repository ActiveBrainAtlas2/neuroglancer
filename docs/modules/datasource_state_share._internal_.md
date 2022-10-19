[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](datasource_state_share.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [DataManagementContext](../classes/datasource_state_share._internal_.DataManagementContext.md)
- [DerivedWatchableValue](../classes/datasource_state_share._internal_.DerivedWatchableValue.md)
- [InputEventBindings](../classes/datasource_state_share._internal_.InputEventBindings.md)
- [InputEventBindings](../classes/datasource_state_share._internal_.InputEventBindings-1.md)
- [LayoutComponentContainer](../classes/datasource_state_share._internal_.LayoutComponentContainer.md)
- [RootLayoutContainer](../classes/datasource_state_share._internal_.RootLayoutContainer.md)
- [StackLayoutComponent](../classes/datasource_state_share._internal_.StackLayoutComponent.md)
- [TrackableViewerState](../classes/datasource_state_share._internal_.TrackableViewerState.md)
- [TrackableWindowedViewport](../classes/datasource_state_share._internal_.TrackableWindowedViewport.md)
- [Viewer](../classes/datasource_state_share._internal_.Viewer.md)
- [WatchableSet](../classes/datasource_state_share._internal_.WatchableSet.md)

### Interfaces

- [AbstractWorker](../interfaces/datasource_state_share._internal_.AbstractWorker.md)
- [AbstractWorkerEventMap](../interfaces/datasource_state_share._internal_.AbstractWorkerEventMap.md)
- [LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md)
- [ViewerOptions](../interfaces/datasource_state_share._internal_.ViewerOptions.md)
- [ViewerState](../interfaces/datasource_state_share._internal_.ViewerState.md)
- [Worker](../interfaces/datasource_state_share._internal_.Worker.md)
- [WorkerEventMap](../interfaces/datasource_state_share._internal_.WorkerEventMap.md)

### Type Aliases

- [Partial](datasource_state_share._internal_.md#partial)
- [ViewerUIConfiguration](datasource_state_share._internal_.md#vieweruiconfiguration)
- [ViewerUIOptions](datasource_state_share._internal_.md#vieweruioptions)

### Variables

- [VIEWER\_UI\_CONFIG\_OPTIONS](datasource_state_share._internal_.md#viewer_ui_config_options)
- [Worker](datasource_state_share._internal_.md#worker)

## Type Aliases

### Partial

Ƭ **Partial**<`T`\>: { [P in keyof T]?: T[P] }

Make all properties in T optional

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1537

___

### ViewerUIConfiguration

Ƭ **ViewerUIConfiguration**: { [Key in typeof VIEWER\_UI\_CONFIG\_OPTIONS[number]]: TrackableBoolean }

#### Defined in

[src/neuroglancer/viewer.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L147)

___

### ViewerUIOptions

Ƭ **ViewerUIOptions**: { [Key in typeof VIEWER\_UI\_CONFIG\_OPTIONS[number]]: boolean }

#### Defined in

[src/neuroglancer/viewer.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L143)

## Variables

### VIEWER\_UI\_CONFIG\_OPTIONS

• `Const` **VIEWER\_UI\_CONFIG\_OPTIONS**: readonly [``"showHelpButton"``, ``"showSettingsButton"``, ``"showEditStateButton"``, ``"showLayerListPanelButton"``, ``"showSelectionPanelButton"``, ``"showLayerSidePanelButton"``, ``"showLocation"``, ``"showAnnotationToolStatus"``, ``"showLayerPanel"``, ``"showLayerHoverValues"``, ``"showUIControls"``, ``"showPanelBorders"``]

#### Defined in

[src/neuroglancer/viewer.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L137)

___

### Worker

• **Worker**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | [`Worker`](datasource_state_share._internal_.md#worker) |

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16841
