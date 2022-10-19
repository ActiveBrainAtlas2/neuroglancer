[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/statistics](../modules/ui_statistics.md) / StatisticsPanel

# Class: StatisticsPanel

[ui/statistics](../modules/ui_statistics.md).StatisticsPanel

## Hierarchy

- [`SidePanel`](ui_side_panel.SidePanel.md)

  ↳ **`StatisticsPanel`**

## Table of contents

### Constructors

- [constructor](ui_statistics.StatisticsPanel.md#constructor)

### Properties

- [body](ui_statistics.StatisticsPanel.md#body)
- [chunkQueueManager](ui_statistics.StatisticsPanel.md#chunkqueuemanager)
- [data](ui_statistics.StatisticsPanel.md#data)
- [dataRequested](ui_statistics.StatisticsPanel.md#datarequested)
- [debouncedUpdateView](ui_statistics.StatisticsPanel.md#debouncedupdateview)
- [displayState](ui_statistics.StatisticsPanel.md#displaystate)
- [disposedStacks](ui_statistics.StatisticsPanel.md#disposedstacks)
- [element](ui_statistics.StatisticsPanel.md#element)
- [location](ui_statistics.StatisticsPanel.md#location)
- [refCount](ui_statistics.StatisticsPanel.md#refcount)
- [requestDataTimerId](ui_statistics.StatisticsPanel.md#requestdatatimerid)
- [sidePanelManager](ui_statistics.StatisticsPanel.md#sidepanelmanager)
- [visibility](ui_statistics.StatisticsPanel.md#visibility)
- [wasDisposed](ui_statistics.StatisticsPanel.md#wasdisposed)

### Methods

- [addBody](ui_statistics.StatisticsPanel.md#addbody)
- [addRef](ui_statistics.StatisticsPanel.md#addref)
- [addTitleBar](ui_statistics.StatisticsPanel.md#addtitlebar)
- [close](ui_statistics.StatisticsPanel.md#close)
- [dispose](ui_statistics.StatisticsPanel.md#dispose)
- [disposed](ui_statistics.StatisticsPanel.md#disposed)
- [makeDragSource](ui_statistics.StatisticsPanel.md#makedragsource)
- [refCountReachedZero](ui_statistics.StatisticsPanel.md#refcountreachedzero)
- [registerCancellable](ui_statistics.StatisticsPanel.md#registercancellable)
- [registerDisposer](ui_statistics.StatisticsPanel.md#registerdisposer)
- [registerEventListener](ui_statistics.StatisticsPanel.md#registereventlistener)
- [requestData](ui_statistics.StatisticsPanel.md#requestdata)
- [unregisterDisposer](ui_statistics.StatisticsPanel.md#unregisterdisposer)
- [updateView](ui_statistics.StatisticsPanel.md#updateview)

## Constructors

### constructor

• **new StatisticsPanel**(`sidePanelManager`, `chunkQueueManager`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](ui_side_panel.SidePanelManager.md) |
| `chunkQueueManager` | [`ChunkQueueManager`](chunk_manager_frontend.ChunkQueueManager.md) |
| `displayState` | [`StatisticsDisplayState`](ui_statistics.StatisticsDisplayState.md) |

#### Overrides

[SidePanel](ui_side_panel.SidePanel.md).[constructor](ui_side_panel.SidePanel.md#constructor)

#### Defined in

[src/neuroglancer/ui/statistics.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L237)

## Properties

### body

• **body**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/statistics.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L236)

___

### chunkQueueManager

• **chunkQueueManager**: [`ChunkQueueManager`](chunk_manager_frontend.ChunkQueueManager.md)

___

### data

• **data**: `undefined` \| [`ChunkStatistics`](../modules/chunk_manager_frontend.md#chunkstatistics) = `undefined`

#### Defined in

[src/neuroglancer/ui/statistics.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L233)

___

### dataRequested

• `Private` **dataRequested**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/statistics.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L235)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/statistics.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L269)

___

### displayState

• **displayState**: [`StatisticsDisplayState`](ui_statistics.StatisticsDisplayState.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[disposedStacks](ui_side_panel.SidePanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[element](ui_side_panel.SidePanel.md#element)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L82)

___

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[location](ui_side_panel.SidePanel.md#location)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[refCount](ui_side_panel.SidePanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### requestDataTimerId

• `Private` **requestDataTimerId**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/statistics.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L234)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](ui_side_panel.SidePanelManager.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[sidePanelManager](ui_side_panel.SidePanel.md#sidepanelmanager)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[visibility](ui_side_panel.SidePanel.md#visibility)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L83)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[wasDisposed](ui_side_panel.SidePanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addBody

▸ **addBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[addBody](ui_side_panel.SidePanel.md#addbody)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L146)

___

### addRef

▸ **addRef**(): [`StatisticsPanel`](ui_statistics.StatisticsPanel.md)

#### Returns

[`StatisticsPanel`](ui_statistics.StatisticsPanel.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[addRef](ui_side_panel.SidePanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### addTitleBar

▸ **addTitleBar**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.title?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `closeButton` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `titleBar` | [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `titleElement` | `undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[addTitleBar](ui_side_panel.SidePanel.md#addtitlebar)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L123)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[close](ui_side_panel.SidePanel.md#close)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L119)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[dispose](ui_side_panel.SidePanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SidePanel](ui_side_panel.SidePanel.md).[disposed](ui_side_panel.SidePanel.md#disposed)

#### Defined in

[src/neuroglancer/ui/statistics.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L249)

___

### makeDragSource

▸ **makeDragSource**(): [`DragSource`](../interfaces/ui_side_panel.DragSource.md)

#### Returns

[`DragSource`](../interfaces/ui_side_panel.DragSource.md)

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[makeDragSource](ui_side_panel.SidePanel.md#makedragsource)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L109)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](ui_side_panel.SidePanel.md).[refCountReachedZero](ui_side_panel.SidePanel.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[SidePanel](ui_side_panel.SidePanel.md).[registerCancellable](ui_side_panel.SidePanel.md#registercancellable)

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

[SidePanel](ui_side_panel.SidePanel.md).[registerDisposer](ui_side_panel.SidePanel.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

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

[SidePanel](ui_side_panel.SidePanel.md).[registerEventListener](ui_side_panel.SidePanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### requestData

▸ `Private` **requestData**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/statistics.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L254)

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

[SidePanel](ui_side_panel.SidePanel.md).[unregisterDisposer](ui_side_panel.SidePanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/statistics.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L271)
