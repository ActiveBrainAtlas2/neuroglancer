[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / LocalSegmentationGraphSourceConnection

# Class: LocalSegmentationGraphSourceConnection

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).LocalSegmentationGraphSourceConnection

## Hierarchy

- [`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)<[`LocalSegmentationGraphSource`](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md)\>

  ↳ **`LocalSegmentationGraphSourceConnection`**

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#constructor)

### Properties

- [disposedStacks](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#disposedstacks)
- [graph](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#graph)
- [refCount](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#refcount)
- [segmentsState](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#segmentsstate)
- [wasDisposed](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#wasdisposed)

### Methods

- [addRef](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#addref)
- [computeSplit](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#computesplit)
- [dispose](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#dispose)
- [disposed](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#disposed)
- [refCountReachedZero](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#refcountreachedzero)
- [registerCancellable](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#registercancellable)
- [registerDisposer](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#registerdisposer)
- [registerEventListener](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#registereventlistener)
- [unregisterDisposer](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md#unregisterdisposer)

## Constructors

### constructor

• **new LocalSegmentationGraphSourceConnection**(`graph`, `segmentsState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | [`LocalSegmentationGraphSource`](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md) |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/image_user_layer._internal_.VisibleSegmentsState.md) |

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[constructor](layer._internal_.SegmentationGraphSourceConnection.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L43)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[disposedStacks](layer._internal_.SegmentationGraphSourceConnection.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: [`LocalSegmentationGraphSource`](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md)

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[graph](layer._internal_.SegmentationGraphSourceConnection.md#graph)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[refCount](layer._internal_.SegmentationGraphSourceConnection.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### segmentsState

• **segmentsState**: [`VisibleSegmentsState`](../interfaces/image_user_layer._internal_.VisibleSegmentsState.md)

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[segmentsState](layer._internal_.SegmentationGraphSourceConnection.md#segmentsstate)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[wasDisposed](layer._internal_.SegmentationGraphSourceConnection.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LocalSegmentationGraphSourceConnection`](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md)

#### Returns

[`LocalSegmentationGraphSourceConnection`](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md)

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[addRef](layer._internal_.SegmentationGraphSourceConnection.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### computeSplit

▸ **computeSplit**(`include`, `exclude`): `undefined` \| [`ComputedSplit`](../interfaces/layer._internal_.ComputedSplit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `exclude` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`undefined` \| [`ComputedSplit`](../interfaces/layer._internal_.ComputedSplit.md)

#### Overrides

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[computeSplit](layer._internal_.SegmentationGraphSourceConnection.md#computesplit)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L275)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[dispose](layer._internal_.SegmentationGraphSourceConnection.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[disposed](layer._internal_.SegmentationGraphSourceConnection.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[refCountReachedZero](layer._internal_.SegmentationGraphSourceConnection.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[registerCancellable](layer._internal_.SegmentationGraphSourceConnection.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[registerDisposer](layer._internal_.SegmentationGraphSourceConnection.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[registerEventListener](layer._internal_.SegmentationGraphSourceConnection.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SegmentationGraphSourceConnection](layer._internal_.SegmentationGraphSourceConnection.md).[unregisterDisposer](layer._internal_.SegmentationGraphSourceConnection.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
