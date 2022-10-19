[neuroglancer](../README.md) / [Modules](../modules.md) / [gpu\_hash/shader](../modules/gpu_hash_shader.md) / GPUHashTable

# Class: GPUHashTable<HashTable\>

[gpu_hash/shader](../modules/gpu_hash_shader.md).GPUHashTable

## Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](gpu_hash_hash_table.HashTableBase.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`GPUHashTable`**

## Table of contents

### Constructors

- [constructor](gpu_hash_shader.GPUHashTable.md#constructor)

### Properties

- [disposedStacks](gpu_hash_shader.GPUHashTable.md#disposedstacks)
- [generation](gpu_hash_shader.GPUHashTable.md#generation)
- [gl](gpu_hash_shader.GPUHashTable.md#gl)
- [hashTable](gpu_hash_shader.GPUHashTable.md#hashtable)
- [refCount](gpu_hash_shader.GPUHashTable.md#refcount)
- [texture](gpu_hash_shader.GPUHashTable.md#texture)
- [wasDisposed](gpu_hash_shader.GPUHashTable.md#wasdisposed)

### Methods

- [addRef](gpu_hash_shader.GPUHashTable.md#addref)
- [copyToGPU](gpu_hash_shader.GPUHashTable.md#copytogpu)
- [dispose](gpu_hash_shader.GPUHashTable.md#dispose)
- [disposed](gpu_hash_shader.GPUHashTable.md#disposed)
- [refCountReachedZero](gpu_hash_shader.GPUHashTable.md#refcountreachedzero)
- [registerCancellable](gpu_hash_shader.GPUHashTable.md#registercancellable)
- [registerDisposer](gpu_hash_shader.GPUHashTable.md#registerdisposer)
- [registerEventListener](gpu_hash_shader.GPUHashTable.md#registereventlistener)
- [unregisterDisposer](gpu_hash_shader.GPUHashTable.md#unregisterdisposer)
- [get](gpu_hash_shader.GPUHashTable.md#get)

## Constructors

### constructor

• **new GPUHashTable**<`HashTable`\>(`gl`, `hashTable`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](gpu_hash_hash_table.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `hashTable` | `HashTable` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L50)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L47)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### hashTable

• **hashTable**: `HashTable`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture) = `null`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L48)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`GPUHashTable`](gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Returns

[`GPUHashTable`](gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### copyToGPU

▸ **copyToGPU**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L56)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L72)

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

▸ `Static` **get**<`HashTable`\>(`gl`, `hashTable`): [`GPUHashTable`](gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](gpu_hash_hash_table.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `hashTable` | `HashTable` |

#### Returns

[`GPUHashTable`](gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L81)
