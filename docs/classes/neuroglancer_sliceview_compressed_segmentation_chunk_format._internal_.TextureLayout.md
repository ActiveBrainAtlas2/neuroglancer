[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/compressed\_segmentation/chunk\_format](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format.md) / [<internal\>](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.md) / TextureLayout

# Class: TextureLayout

[neuroglancer/sliceview/compressed_segmentation/chunk_format](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format.md).[<internal>](../modules/neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.md).TextureLayout

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

  ↳ **`TextureLayout`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#constructor)

### Properties

- [chunkDataSize](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#chunkdatasize)
- [disposedStacks](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#disposedstacks)
- [refCount](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#refcount)
- [subchunkGridSize](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#subchunkgridsize)
- [subchunkSize](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#subchunksize)
- [wasDisposed](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#wasdisposed)

### Methods

- [addRef](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#addref)
- [dispose](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#dispose)
- [disposed](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#disposed)
- [refCountReachedZero](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#unregisterdisposer)
- [get](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md#get)

## Constructors

### constructor

• **new TextureLayout**(`chunkDataSize`, `subchunkSize`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkDataSize` | `Uint32Array` |
| `subchunkSize` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L34)

## Properties

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L34)

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

### subchunkGridSize

• **subchunkGridSize**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L32)

___

### subchunkSize

• **subchunkSize**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L34)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TextureLayout`](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md)

#### Returns

[`TextureLayout`](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

___

### get

▸ `Static` **get**(`gl`, `chunkDataSize`, `subchunkSize`): [`TextureLayout`](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `chunkDataSize` | `Uint32Array` |
| `subchunkSize` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Returns

[`TextureLayout`](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/chunk_format.ts#L42)
