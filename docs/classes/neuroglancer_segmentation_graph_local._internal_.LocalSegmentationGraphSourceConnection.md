[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_graph/local](../modules/neuroglancer_segmentation_graph_local.md) / [<internal\>](../modules/neuroglancer_segmentation_graph_local._internal_.md) / LocalSegmentationGraphSourceConnection

# Class: LocalSegmentationGraphSourceConnection

[neuroglancer/segmentation_graph/local](../modules/neuroglancer_segmentation_graph_local.md).[<internal>](../modules/neuroglancer_segmentation_graph_local._internal_.md).LocalSegmentationGraphSourceConnection

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

- [`SegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)<[`LocalSegmentationGraphSource`](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md)\>

  ↳ **`LocalSegmentationGraphSourceConnection`**

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#constructor)

### Properties

- [disposedStacks](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#disposedstacks)
- [graph](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#graph)
- [refCount](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#refcount)
- [segmentsState](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#segmentsstate)
- [wasDisposed](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#wasdisposed)

### Methods

- [addRef](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#addref)
- [computeSplit](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#computesplit)
- [dispose](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#dispose)
- [disposed](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#disposed)
- [refCountReachedZero](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#refcountreachedzero)
- [registerCancellable](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#registercancellable)
- [registerDisposer](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#registerdisposer)
- [registerEventListener](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#registereventlistener)
- [unregisterDisposer](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md#unregisterdisposer)

## Constructors

### constructor

• **new LocalSegmentationGraphSourceConnection**(`graph`, `segmentsState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | [`LocalSegmentationGraphSource`](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md) |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[constructor](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/source.ts#L43)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[disposedStacks](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: [`LocalSegmentationGraphSource`](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md)

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[graph](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#graph)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/source.ts#L43)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[refCount](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### segmentsState

• **segmentsState**: [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md)

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[segmentsState](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#segmentsstate)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/source.ts#L43)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[wasDisposed](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LocalSegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md)

#### Returns

[`LocalSegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md)

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[addRef](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### computeSplit

▸ **computeSplit**(`include`, `exclude`): `undefined` \| [`ComputedSplit`](../interfaces/neuroglancer_segmentation_graph_source.ComputedSplit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `exclude` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`undefined` \| [`ComputedSplit`](../interfaces/neuroglancer_segmentation_graph_source.ComputedSplit.md)

#### Overrides

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[computeSplit](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#computesplit)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L275)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[dispose](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[disposed](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[refCountReachedZero](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#refcountreachedzero)

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

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[registerCancellable](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#registercancellable)

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

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[registerDisposer](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#registerdisposer)

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

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[registerEventListener](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[SegmentationGraphSourceConnection](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md).[unregisterDisposer](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
