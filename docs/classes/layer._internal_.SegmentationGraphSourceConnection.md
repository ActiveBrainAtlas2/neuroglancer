[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / SegmentationGraphSourceConnection

# Class: SegmentationGraphSourceConnection<SourceType\>

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).SegmentationGraphSourceConnection

## Type parameters

| Name | Type |
| :------ | :------ |
| `SourceType` | extends [`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md) = [`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md) |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SegmentationGraphSourceConnection`**

  ↳↳ [`LocalSegmentationGraphSourceConnection`](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md)

## Table of contents

### Constructors

- [constructor](layer._internal_.SegmentationGraphSourceConnection.md#constructor)

### Properties

- [disposedStacks](layer._internal_.SegmentationGraphSourceConnection.md#disposedstacks)
- [graph](layer._internal_.SegmentationGraphSourceConnection.md#graph)
- [refCount](layer._internal_.SegmentationGraphSourceConnection.md#refcount)
- [segmentsState](layer._internal_.SegmentationGraphSourceConnection.md#segmentsstate)
- [wasDisposed](layer._internal_.SegmentationGraphSourceConnection.md#wasdisposed)

### Methods

- [addRef](layer._internal_.SegmentationGraphSourceConnection.md#addref)
- [computeSplit](layer._internal_.SegmentationGraphSourceConnection.md#computesplit)
- [dispose](layer._internal_.SegmentationGraphSourceConnection.md#dispose)
- [disposed](layer._internal_.SegmentationGraphSourceConnection.md#disposed)
- [refCountReachedZero](layer._internal_.SegmentationGraphSourceConnection.md#refcountreachedzero)
- [registerCancellable](layer._internal_.SegmentationGraphSourceConnection.md#registercancellable)
- [registerDisposer](layer._internal_.SegmentationGraphSourceConnection.md#registerdisposer)
- [registerEventListener](layer._internal_.SegmentationGraphSourceConnection.md#registereventlistener)
- [unregisterDisposer](layer._internal_.SegmentationGraphSourceConnection.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationGraphSourceConnection**<`SourceType`\>(`graph`, `segmentsState`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SourceType` | extends [`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md)<`SourceType`\> = [`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `SourceType` |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/image_user_layer._internal_.VisibleSegmentsState.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L43)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: `SourceType`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### segmentsState

• **segmentsState**: [`VisibleSegmentsState`](../interfaces/image_user_layer._internal_.VisibleSegmentsState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)<`SourceType`\>

#### Returns

[`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)<`SourceType`\>

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### computeSplit

▸ `Abstract` **computeSplit**(`include`, `exclude`): `undefined` \| [`ComputedSplit`](../interfaces/layer._internal_.ComputedSplit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `exclude` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`undefined` \| [`ComputedSplit`](../interfaces/layer._internal_.ComputedSplit.md)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L46)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
