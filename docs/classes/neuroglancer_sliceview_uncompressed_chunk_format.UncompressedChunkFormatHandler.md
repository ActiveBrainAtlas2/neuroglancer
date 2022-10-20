[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/uncompressed\_chunk\_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md) / UncompressedChunkFormatHandler

# Class: UncompressedChunkFormatHandler

[neuroglancer/sliceview/uncompressed_chunk_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md).UncompressedChunkFormatHandler

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

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`UncompressedChunkFormatHandler`**

## Implements

- [`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#constructor)

### Properties

- [chunkFormat](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#chunkformat)
- [disposedStacks](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#disposedstacks)
- [refCount](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#refcount)
- [textureLayout](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#texturelayout)
- [wasDisposed](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#wasdisposed)

### Methods

- [addRef](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#addref)
- [dispose](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#dispose)
- [disposed](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#disposed)
- [getChunk](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#getchunk)
- [refCountReachedZero](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md#unregisterdisposer)

## Constructors

### constructor

• **new UncompressedChunkFormatHandler**(`gl`, `spec`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `spec` | [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:242](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L242)

## Properties

### chunkFormat

• **chunkFormat**: [`ChunkFormat`](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Implementation of

[ChunkFormatHandler](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md).[chunkFormat](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#chunkformat)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L239)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### textureLayout

• **textureLayout**: [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L240)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`UncompressedChunkFormatHandler`](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

#### Returns

[`UncompressedChunkFormatHandler`](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

ChunkFormatHandler.dispose

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

### getChunk

▸ **getChunk**(`source`, `x`): [`UncompressedVolumeChunk`](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md) |
| `x` | `any` |

#### Returns

[`UncompressedVolumeChunk`](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedVolumeChunk.md)

#### Implementation of

[ChunkFormatHandler](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md).[getChunk](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L254)

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
