[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/statistics](../modules/neuroglancer_ui_statistics.md) / StatisticsPanel

# Class: StatisticsPanel

[neuroglancer/ui/statistics](../modules/neuroglancer_ui_statistics.md).StatisticsPanel

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`SidePanel`](neuroglancer_ui_side_panel.SidePanel.md)

  ↳ **`StatisticsPanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_statistics.StatisticsPanel.md#constructor)

### Properties

- [body](neuroglancer_ui_statistics.StatisticsPanel.md#body)
- [chunkQueueManager](neuroglancer_ui_statistics.StatisticsPanel.md#chunkqueuemanager)
- [data](neuroglancer_ui_statistics.StatisticsPanel.md#data)
- [dataRequested](neuroglancer_ui_statistics.StatisticsPanel.md#datarequested)
- [debouncedUpdateView](neuroglancer_ui_statistics.StatisticsPanel.md#debouncedupdateview)
- [displayState](neuroglancer_ui_statistics.StatisticsPanel.md#displaystate)
- [disposedStacks](neuroglancer_ui_statistics.StatisticsPanel.md#disposedstacks)
- [element](neuroglancer_ui_statistics.StatisticsPanel.md#element)
- [location](neuroglancer_ui_statistics.StatisticsPanel.md#location)
- [refCount](neuroglancer_ui_statistics.StatisticsPanel.md#refcount)
- [requestDataTimerId](neuroglancer_ui_statistics.StatisticsPanel.md#requestdatatimerid)
- [sidePanelManager](neuroglancer_ui_statistics.StatisticsPanel.md#sidepanelmanager)
- [visibility](neuroglancer_ui_statistics.StatisticsPanel.md#visibility)
- [wasDisposed](neuroglancer_ui_statistics.StatisticsPanel.md#wasdisposed)

### Methods

- [addBody](neuroglancer_ui_statistics.StatisticsPanel.md#addbody)
- [addRef](neuroglancer_ui_statistics.StatisticsPanel.md#addref)
- [addTitleBar](neuroglancer_ui_statistics.StatisticsPanel.md#addtitlebar)
- [close](neuroglancer_ui_statistics.StatisticsPanel.md#close)
- [dispose](neuroglancer_ui_statistics.StatisticsPanel.md#dispose)
- [disposed](neuroglancer_ui_statistics.StatisticsPanel.md#disposed)
- [makeDragSource](neuroglancer_ui_statistics.StatisticsPanel.md#makedragsource)
- [refCountReachedZero](neuroglancer_ui_statistics.StatisticsPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_statistics.StatisticsPanel.md#registercancellable)
- [registerDisposer](neuroglancer_ui_statistics.StatisticsPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_statistics.StatisticsPanel.md#registereventlistener)
- [requestData](neuroglancer_ui_statistics.StatisticsPanel.md#requestdata)
- [unregisterDisposer](neuroglancer_ui_statistics.StatisticsPanel.md#unregisterdisposer)
- [updateView](neuroglancer_ui_statistics.StatisticsPanel.md#updateview)

## Constructors

### constructor

• **new StatisticsPanel**(`sidePanelManager`, `chunkQueueManager`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md) |
| `chunkQueueManager` | [`ChunkQueueManager`](neuroglancer_chunk_manager_frontend.ChunkQueueManager.md) |
| `displayState` | [`StatisticsDisplayState`](neuroglancer_ui_statistics.StatisticsDisplayState.md) |

#### Overrides

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[constructor](neuroglancer_ui_side_panel.SidePanel.md#constructor)

#### Defined in

[src/neuroglancer/ui/statistics.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L237)

## Properties

### body

• **body**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/statistics.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L236)

___

### chunkQueueManager

• **chunkQueueManager**: [`ChunkQueueManager`](neuroglancer_chunk_manager_frontend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/ui/statistics.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L238)

___

### data

• **data**: `undefined` \| [`ChunkStatistics`](../modules/neuroglancer_chunk_manager_frontend.md#chunkstatistics) = `undefined`

#### Defined in

[src/neuroglancer/ui/statistics.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L233)

___

### dataRequested

• `Private` **dataRequested**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/statistics.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L235)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/statistics.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L269)

___

### displayState

• **displayState**: [`StatisticsDisplayState`](neuroglancer_ui_statistics.StatisticsDisplayState.md)

#### Defined in

[src/neuroglancer/ui/statistics.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L239)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[disposedStacks](neuroglancer_ui_side_panel.SidePanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[element](neuroglancer_ui_side_panel.SidePanel.md#element)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L82)

___

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[location](neuroglancer_ui_side_panel.SidePanel.md#location)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L86)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[refCount](neuroglancer_ui_side_panel.SidePanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### requestDataTimerId

• `Private` **requestDataTimerId**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/statistics.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L234)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[sidePanelManager](neuroglancer_ui_side_panel.SidePanel.md#sidepanelmanager)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L85)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[visibility](neuroglancer_ui_side_panel.SidePanel.md#visibility)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L83)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[wasDisposed](neuroglancer_ui_side_panel.SidePanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addBody

▸ **addBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addBody](neuroglancer_ui_side_panel.SidePanel.md#addbody)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L146)

___

### addRef

▸ **addRef**(): [`StatisticsPanel`](neuroglancer_ui_statistics.StatisticsPanel.md)

#### Returns

[`StatisticsPanel`](neuroglancer_ui_statistics.StatisticsPanel.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addRef](neuroglancer_ui_side_panel.SidePanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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
| `closeButton` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `titleBar` | [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) |
| `titleElement` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[addTitleBar](neuroglancer_ui_side_panel.SidePanel.md#addtitlebar)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L123)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[close](neuroglancer_ui_side_panel.SidePanel.md#close)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L119)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[dispose](neuroglancer_ui_side_panel.SidePanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[disposed](neuroglancer_ui_side_panel.SidePanel.md#disposed)

#### Defined in

[src/neuroglancer/ui/statistics.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L249)

___

### makeDragSource

▸ **makeDragSource**(): [`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Returns

[`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[makeDragSource](neuroglancer_ui_side_panel.SidePanel.md#makedragsource)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/side_panel.ts#L109)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[refCountReachedZero](neuroglancer_ui_side_panel.SidePanel.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerCancellable](neuroglancer_ui_side_panel.SidePanel.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerDisposer](neuroglancer_ui_side_panel.SidePanel.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[registerEventListener](neuroglancer_ui_side_panel.SidePanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### requestData

▸ `Private` **requestData**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/statistics.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L254)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SidePanel](neuroglancer_ui_side_panel.SidePanel.md).[unregisterDisposer](neuroglancer_ui_side_panel.SidePanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/statistics.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L271)
