[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/uncompressed\_chunk\_format](../modules/sliceview_uncompressed_chunk_format.md) / [<internal\>](../modules/sliceview_uncompressed_chunk_format._internal_.md) / TextureLayout

# Class: TextureLayout

[sliceview/uncompressed_chunk_format](../modules/sliceview_uncompressed_chunk_format.md).[<internal>](../modules/sliceview_uncompressed_chunk_format._internal_.md).TextureLayout

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TextureLayout`**

## Table of contents

### Constructors

- [constructor](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#constructor)

### Properties

- [chunkDataSize](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#chunkdatasize)
- [disposedStacks](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#disposedstacks)
- [refCount](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#refcount)
- [strides](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#strides)
- [textureDims](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#texturedims)
- [textureShape](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#textureshape)
- [wasDisposed](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#wasdisposed)

### Methods

- [addRef](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#addref)
- [dispose](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#dispose)
- [disposed](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#disposed)
- [refCountReachedZero](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#refcountreachedzero)
- [registerCancellable](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#registercancellable)
- [registerDisposer](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#registerdisposer)
- [registerEventListener](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#registereventlistener)
- [unregisterDisposer](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#unregisterdisposer)
- [get](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#get)

## Constructors

### constructor

• **new TextureLayout**(`gl`, `chunkDataSize`, `textureDims`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `chunkDataSize` | `Uint32Array` |
| `textureDims` | `number` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L32)

## Properties

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### strides

• **strides**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L30)

___

### textureDims

• **textureDims**: `number`

___

### textureShape

• **textureShape**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L31)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Returns

[`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

___

### get

▸ `Static` **get**(`gl`, `chunkSizeInVoxels`, `textureDims`): [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `chunkSizeInVoxels` | `Uint32Array` |
| `textureDims` | `number` |

#### Returns

[`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L64)
