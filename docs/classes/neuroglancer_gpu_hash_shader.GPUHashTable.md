[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/gpu\_hash/shader](../modules/neuroglancer_gpu_hash_shader.md) / GPUHashTable

# Class: GPUHashTable<HashTable\>

[neuroglancer/gpu_hash/shader](../modules/neuroglancer_gpu_hash_shader.md).GPUHashTable

## Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](neuroglancer_gpu_hash_hash_table.HashTableBase.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`GPUHashTable`**

## Table of contents

### Constructors

- [constructor](neuroglancer_gpu_hash_shader.GPUHashTable.md#constructor)

### Properties

- [disposedStacks](neuroglancer_gpu_hash_shader.GPUHashTable.md#disposedstacks)
- [generation](neuroglancer_gpu_hash_shader.GPUHashTable.md#generation)
- [gl](neuroglancer_gpu_hash_shader.GPUHashTable.md#gl)
- [hashTable](neuroglancer_gpu_hash_shader.GPUHashTable.md#hashtable)
- [refCount](neuroglancer_gpu_hash_shader.GPUHashTable.md#refcount)
- [texture](neuroglancer_gpu_hash_shader.GPUHashTable.md#texture)
- [wasDisposed](neuroglancer_gpu_hash_shader.GPUHashTable.md#wasdisposed)

### Methods

- [addRef](neuroglancer_gpu_hash_shader.GPUHashTable.md#addref)
- [copyToGPU](neuroglancer_gpu_hash_shader.GPUHashTable.md#copytogpu)
- [dispose](neuroglancer_gpu_hash_shader.GPUHashTable.md#dispose)
- [disposed](neuroglancer_gpu_hash_shader.GPUHashTable.md#disposed)
- [refCountReachedZero](neuroglancer_gpu_hash_shader.GPUHashTable.md#refcountreachedzero)
- [registerCancellable](neuroglancer_gpu_hash_shader.GPUHashTable.md#registercancellable)
- [registerDisposer](neuroglancer_gpu_hash_shader.GPUHashTable.md#registerdisposer)
- [registerEventListener](neuroglancer_gpu_hash_shader.GPUHashTable.md#registereventlistener)
- [unregisterDisposer](neuroglancer_gpu_hash_shader.GPUHashTable.md#unregisterdisposer)
- [get](neuroglancer_gpu_hash_shader.GPUHashTable.md#get)

## Constructors

### constructor

• **new GPUHashTable**<`HashTable`\>(`gl`, `hashTable`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](neuroglancer_gpu_hash_hash_table.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `hashTable` | `HashTable` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/gpu_hash/shader.ts#L50)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/gpu_hash/shader.ts#L47)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

___

### hashTable

• **hashTable**: `HashTable`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture) = `null`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/gpu_hash/shader.ts#L48)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Returns

[`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### copyToGPU

▸ **copyToGPU**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/gpu_hash/shader.ts#L56)

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

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/gpu_hash/shader.ts#L72)

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

▸ `Static` **get**<`HashTable`\>(`gl`, `hashTable`): [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](neuroglancer_gpu_hash_hash_table.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `hashTable` | `HashTable` |

#### Returns

[`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<`HashTable`\>

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/gpu_hash/shader.ts#L81)
