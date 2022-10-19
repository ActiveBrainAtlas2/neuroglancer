[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / [<internal\>](../modules/segment_color._internal_.md) / GPUHashTable

# Class: GPUHashTable<HashTable\>

[segment_color](../modules/segment_color.md).[<internal>](../modules/segment_color._internal_.md).GPUHashTable

## Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](segment_color._internal_.HashTableBase.md) |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`GPUHashTable`**

## Table of contents

### Constructors

- [constructor](segment_color._internal_.GPUHashTable.md#constructor)

### Properties

- [disposedStacks](segment_color._internal_.GPUHashTable.md#disposedstacks)
- [generation](segment_color._internal_.GPUHashTable.md#generation)
- [gl](segment_color._internal_.GPUHashTable.md#gl)
- [hashTable](segment_color._internal_.GPUHashTable.md#hashtable)
- [refCount](segment_color._internal_.GPUHashTable.md#refcount)
- [texture](segment_color._internal_.GPUHashTable.md#texture)
- [wasDisposed](segment_color._internal_.GPUHashTable.md#wasdisposed)

### Methods

- [addRef](segment_color._internal_.GPUHashTable.md#addref)
- [copyToGPU](segment_color._internal_.GPUHashTable.md#copytogpu)
- [dispose](segment_color._internal_.GPUHashTable.md#dispose)
- [disposed](segment_color._internal_.GPUHashTable.md#disposed)
- [refCountReachedZero](segment_color._internal_.GPUHashTable.md#refcountreachedzero)
- [registerCancellable](segment_color._internal_.GPUHashTable.md#registercancellable)
- [registerDisposer](segment_color._internal_.GPUHashTable.md#registerdisposer)
- [registerEventListener](segment_color._internal_.GPUHashTable.md#registereventlistener)
- [unregisterDisposer](segment_color._internal_.GPUHashTable.md#unregisterdisposer)
- [get](segment_color._internal_.GPUHashTable.md#get)

## Constructors

### constructor

• **new GPUHashTable**<`HashTable`\>(`gl`, `hashTable`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](segment_color._internal_.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `hashTable` | `HashTable` |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L50)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L47)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### hashTable

• **hashTable**: `HashTable`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture) = `null`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L48)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`GPUHashTable`](segment_color._internal_.GPUHashTable.md)<`HashTable`\>

#### Returns

[`GPUHashTable`](segment_color._internal_.GPUHashTable.md)<`HashTable`\>

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### copyToGPU

▸ **copyToGPU**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L56)

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

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L72)

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

___

### get

▸ `Static` **get**<`HashTable`\>(`gl`, `hashTable`): [`GPUHashTable`](segment_color._internal_.GPUHashTable.md)<`HashTable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](segment_color._internal_.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `hashTable` | `HashTable` |

#### Returns

[`GPUHashTable`](segment_color._internal_.GPUHashTable.md)<`HashTable`\>

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L81)
