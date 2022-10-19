[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_graph/source](../modules/segmentation_graph_source.md) / SegmentationGraphSourceConnection

# Class: SegmentationGraphSourceConnection<SourceType\>

[segmentation_graph/source](../modules/segmentation_graph_source.md).SegmentationGraphSourceConnection

## Type parameters

| Name | Type |
| :------ | :------ |
| `SourceType` | extends [`SegmentationGraphSource`](segmentation_graph_source.SegmentationGraphSource.md) = [`SegmentationGraphSource`](segmentation_graph_source.SegmentationGraphSource.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SegmentationGraphSourceConnection`**

  ↳↳ [`LocalSegmentationGraphSourceConnection`](segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md)

## Table of contents

### Constructors

- [constructor](segmentation_graph_source.SegmentationGraphSourceConnection.md#constructor)

### Properties

- [disposedStacks](segmentation_graph_source.SegmentationGraphSourceConnection.md#disposedstacks)
- [graph](segmentation_graph_source.SegmentationGraphSourceConnection.md#graph)
- [refCount](segmentation_graph_source.SegmentationGraphSourceConnection.md#refcount)
- [segmentsState](segmentation_graph_source.SegmentationGraphSourceConnection.md#segmentsstate)
- [wasDisposed](segmentation_graph_source.SegmentationGraphSourceConnection.md#wasdisposed)

### Methods

- [addRef](segmentation_graph_source.SegmentationGraphSourceConnection.md#addref)
- [computeSplit](segmentation_graph_source.SegmentationGraphSourceConnection.md#computesplit)
- [dispose](segmentation_graph_source.SegmentationGraphSourceConnection.md#dispose)
- [disposed](segmentation_graph_source.SegmentationGraphSourceConnection.md#disposed)
- [refCountReachedZero](segmentation_graph_source.SegmentationGraphSourceConnection.md#refcountreachedzero)
- [registerCancellable](segmentation_graph_source.SegmentationGraphSourceConnection.md#registercancellable)
- [registerDisposer](segmentation_graph_source.SegmentationGraphSourceConnection.md#registerdisposer)
- [registerEventListener](segmentation_graph_source.SegmentationGraphSourceConnection.md#registereventlistener)
- [unregisterDisposer](segmentation_graph_source.SegmentationGraphSourceConnection.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationGraphSourceConnection**<`SourceType`\>(`graph`, `segmentsState`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SourceType` | extends [`SegmentationGraphSource`](segmentation_graph_source.SegmentationGraphSource.md)<`SourceType`\> = [`SegmentationGraphSource`](segmentation_graph_source.SegmentationGraphSource.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `SourceType` |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L43)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: `SourceType`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### segmentsState

• **segmentsState**: [`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationGraphSourceConnection`](segmentation_graph_source.SegmentationGraphSourceConnection.md)<`SourceType`\>

#### Returns

[`SegmentationGraphSourceConnection`](segmentation_graph_source.SegmentationGraphSourceConnection.md)<`SourceType`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### computeSplit

▸ `Abstract` **computeSplit**(`include`, `exclude`): `undefined` \| [`ComputedSplit`](../interfaces/segmentation_graph_source.ComputedSplit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](util_uint64.Uint64.md) |
| `exclude` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`undefined` \| [`ComputedSplit`](../interfaces/segmentation_graph_source.ComputedSplit.md)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L46)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
