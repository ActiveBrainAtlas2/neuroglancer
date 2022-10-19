[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](viewer.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [AutocompleteTextInput](../classes/viewer._internal_.AutocompleteTextInput.md)
- [CancellationTokenSource](../classes/viewer._internal_.CancellationTokenSource.md)
- [HelpPanelState](../classes/viewer._internal_.HelpPanelState.md)
- [LayerListPanelState](../classes/viewer._internal_.LayerListPanelState.md)
- [SidePanel](../classes/viewer._internal_.SidePanel.md)
- [SidePanelManager](../classes/viewer._internal_.SidePanelManager.md)
- [StateAPI](../classes/viewer._internal_.StateAPI.md)
- [StateAutocomplete](../classes/viewer._internal_.StateAutocomplete.md)
- [StateLoader](../classes/viewer._internal_.StateLoader.md)
- [StatisticsDisplayState](../classes/viewer._internal_.StatisticsDisplayState.md)
- [TrackableViewerState](../classes/viewer._internal_.TrackableViewerState.md)
- [UrlHashBinding](../classes/viewer._internal_.UrlHashBinding.md)
- [ViewerSettingsPanelState](../classes/viewer._internal_.ViewerSettingsPanelState.md)

### Interfaces

- [AbstractWorker](../interfaces/viewer._internal_.AbstractWorker.md)
- [AbstractWorkerEventMap](../interfaces/viewer._internal_.AbstractWorkerEventMap.md)
- [CompletionResult](../interfaces/viewer._internal_.CompletionResult.md)
- [CompletionWithState](../interfaces/viewer._internal_.CompletionWithState.md)
- [DragSource](../interfaces/viewer._internal_.DragSource.md)
- [RegisteredSidePanel](../interfaces/viewer._internal_.RegisteredSidePanel.md)
- [Segmentation](../interfaces/viewer._internal_.Segmentation.md)
- [SidePanelCell](../interfaces/viewer._internal_.SidePanelCell.md)
- [SidePanelDropLocation](../interfaces/viewer._internal_.SidePanelDropLocation.md)
- [SidePanelFlex](../interfaces/viewer._internal_.SidePanelFlex.md)
- [SidePanelSideState](../interfaces/viewer._internal_.SidePanelSideState.md)
- [State](../interfaces/viewer._internal_.State.md)
- [UrlHashBindingOptions](../interfaces/viewer._internal_.UrlHashBindingOptions.md)
- [User](../interfaces/viewer._internal_.User.md)
- [Worker](../interfaces/viewer._internal_.Worker.md)
- [WorkerEventMap](../interfaces/viewer._internal_.WorkerEventMap.md)

### Type Aliases

- [Completer](viewer._internal_.md#completer)

### Variables

- [Worker](viewer._internal_.md#worker)

## Type Aliases

### Completer

Ƭ **Completer**: (`value`: `string`, `cancellationToken`: [`CancellationToken`](../interfaces/layer._internal_.CancellationToken.md)) => `Promise`<[`CompletionResult`](../interfaces/viewer._internal_.CompletionResult.md)\> \| ``null``

#### Type declaration

▸ (`value`, `cancellationToken`): `Promise`<[`CompletionResult`](../interfaces/viewer._internal_.CompletionResult.md)\> \| ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/layer._internal_.CancellationToken.md) |

##### Returns

`Promise`<[`CompletionResult`](../interfaces/viewer._internal_.CompletionResult.md)\> \| ``null``

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L82)

## Variables

### Worker

• **Worker**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | [`Worker`](viewer._internal_.md#worker) |

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16841
