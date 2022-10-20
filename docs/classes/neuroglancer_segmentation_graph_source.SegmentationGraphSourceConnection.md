[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_graph/source](../modules/neuroglancer_segmentation_graph_source.md) / SegmentationGraphSourceConnection

# Class: SegmentationGraphSourceConnection<SourceType\>

[neuroglancer/segmentation_graph/source](../modules/neuroglancer_segmentation_graph_source.md).SegmentationGraphSourceConnection

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

## Type parameters

| Name | Type |
| :------ | :------ |
| `SourceType` | extends [`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md) = [`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SegmentationGraphSourceConnection`**

  ↳↳ [`GraphConnection`](neuroglancer_datasource_nggraph_frontend._internal_.GraphConnection.md)

  ↳↳ [`LocalSegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#constructor)

### Properties

- [disposedStacks](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#disposedstacks)
- [graph](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#graph)
- [refCount](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#refcount)
- [segmentsState](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#segmentsstate)
- [wasDisposed](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#wasdisposed)

### Methods

- [addRef](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#addref)
- [computeSplit](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#computesplit)
- [dispose](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#dispose)
- [disposed](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#disposed)
- [refCountReachedZero](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#refcountreachedzero)
- [registerCancellable](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#registercancellable)
- [registerDisposer](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#registerdisposer)
- [registerEventListener](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#registereventlistener)
- [unregisterDisposer](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationGraphSourceConnection**<`SourceType`\>(`graph`, `segmentsState`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SourceType` | extends [`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)<`SourceType`\> = [`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `SourceType` |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/source.ts#L43)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: `SourceType`

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/source.ts#L43)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### segmentsState

• **segmentsState**: [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/source.ts#L43)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)<`SourceType`\>

#### Returns

[`SegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)<`SourceType`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### computeSplit

▸ `Abstract` **computeSplit**(`include`, `exclude`): `undefined` \| [`ComputedSplit`](../interfaces/neuroglancer_segmentation_graph_source.ComputedSplit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `exclude` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`undefined` \| [`ComputedSplit`](../interfaces/neuroglancer_segmentation_graph_source.ComputedSplit.md)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/source.ts#L46)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
