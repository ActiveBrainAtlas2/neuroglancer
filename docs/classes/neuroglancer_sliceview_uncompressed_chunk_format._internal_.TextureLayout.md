[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/uncompressed\_chunk\_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md) / [<internal\>](../modules/neuroglancer_sliceview_uncompressed_chunk_format._internal_.md) / TextureLayout

# Class: TextureLayout

[neuroglancer/sliceview/uncompressed_chunk_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md).[<internal>](../modules/neuroglancer_sliceview_uncompressed_chunk_format._internal_.md).TextureLayout

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TextureLayout`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#constructor)

### Properties

- [chunkDataSize](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#chunkdatasize)
- [disposedStacks](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#disposedstacks)
- [refCount](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#refcount)
- [strides](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#strides)
- [textureDims](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#texturedims)
- [textureShape](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#textureshape)
- [wasDisposed](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#wasdisposed)

### Methods

- [addRef](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#addref)
- [dispose](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#dispose)
- [disposed](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#disposed)
- [refCountReachedZero](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#unregisterdisposer)
- [get](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md#get)

## Constructors

### constructor

• **new TextureLayout**(`gl`, `chunkDataSize`, `textureDims`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `chunkDataSize` | `Uint32Array` |
| `textureDims` | `number` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L32)

## Properties

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

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

### strides

• **strides**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L30)

___

### textureDims

• **textureDims**: `number`

___

### textureShape

• **textureShape**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L31)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Returns

[`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

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

___

### get

▸ `Static` **get**(`gl`, `chunkSizeInVoxels`, `textureDims`): [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `chunkSizeInVoxels` | `Uint32Array` |
| `textureDims` | `number` |

#### Returns

[`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L64)
