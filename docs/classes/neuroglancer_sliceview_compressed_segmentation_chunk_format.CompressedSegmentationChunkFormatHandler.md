[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/compressed\_segmentation/chunk\_format](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format.md) / CompressedSegmentationChunkFormatHandler

# Class: CompressedSegmentationChunkFormatHandler

[neuroglancer/sliceview/compressed_segmentation/chunk_format](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format.md).CompressedSegmentationChunkFormatHandler

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`CompressedSegmentationChunkFormatHandler`**

## Implements

- [`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#constructor)

### Properties

- [chunkFormat](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#chunkformat)
- [disposedStacks](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#disposedstacks)
- [refCount](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#refcount)
- [wasDisposed](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#wasdisposed)

### Methods

- [addRef](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#addref)
- [dispose](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#dispose)
- [disposed](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#disposed)
- [getChunk](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#getchunk)
- [refCountReachedZero](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md#unregisterdisposer)

## Constructors

### constructor

• **new CompressedSegmentationChunkFormatHandler**(`gl`, `spec`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `spec` | [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L247)

## Properties

### chunkFormat

• **chunkFormat**: [`ChunkFormat`](neuroglancer_sliceview_compressed_segmentation_chunk_format.ChunkFormat.md)

#### Implementation of

[ChunkFormatHandler](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md).[chunkFormat](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#chunkformat)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CompressedSegmentationChunkFormatHandler`](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md)

#### Returns

[`CompressedSegmentationChunkFormatHandler`](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[ChunkFormatHandler](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md).[dispose](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#dispose)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`source`, `x`): [`CompressedSegmentationVolumeChunk`](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md) |
| `x` | `any` |

#### Returns

[`CompressedSegmentationVolumeChunk`](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationVolumeChunk.md)

#### Implementation of

[ChunkFormatHandler](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md).[getChunk](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L257)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
