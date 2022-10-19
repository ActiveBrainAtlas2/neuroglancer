[neuroglancer](../README.md) / [Modules](../modules.md) / [credentials\_provider](../modules/credentials_provider.md) / CachingCredentialsManager

# Class: CachingCredentialsManager<Base\>

[credentials_provider](../modules/credentials_provider.md).CachingCredentialsManager

CredentialsManager that wraps another and caches the CredentialsProvider objects.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Base` | extends [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`CachingCredentialsManager`**

  ↳↳ [`CachingMapBasedCredentialsManager`](credentials_provider.CachingMapBasedCredentialsManager.md)

## Implements

- [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md)

## Table of contents

### Constructors

- [constructor](credentials_provider.CachingCredentialsManager.md#constructor)

### Properties

- [base](credentials_provider.CachingCredentialsManager.md#base)
- [disposedStacks](credentials_provider.CachingCredentialsManager.md#disposedstacks)
- [memoize](credentials_provider.CachingCredentialsManager.md#memoize)
- [refCount](credentials_provider.CachingCredentialsManager.md#refcount)
- [wasDisposed](credentials_provider.CachingCredentialsManager.md#wasdisposed)

### Methods

- [addRef](credentials_provider.CachingCredentialsManager.md#addref)
- [dispose](credentials_provider.CachingCredentialsManager.md#dispose)
- [disposed](credentials_provider.CachingCredentialsManager.md#disposed)
- [getCredentialsProvider](credentials_provider.CachingCredentialsManager.md#getcredentialsprovider)
- [refCountReachedZero](credentials_provider.CachingCredentialsManager.md#refcountreachedzero)
- [registerCancellable](credentials_provider.CachingCredentialsManager.md#registercancellable)
- [registerDisposer](credentials_provider.CachingCredentialsManager.md#registerdisposer)
- [registerEventListener](credentials_provider.CachingCredentialsManager.md#registereventlistener)
- [unregisterDisposer](credentials_provider.CachingCredentialsManager.md#unregisterdisposer)

## Constructors

### constructor

• **new CachingCredentialsManager**<`Base`\>(`base`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Base` | extends [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | `Base` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L135)

## Properties

### base

• **base**: `Base`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### memoize

• **memoize**: [`StringMemoize`](util_memoize.StringMemoize.md)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L133)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CachingCredentialsManager`](credentials_provider.CachingCredentialsManager.md)<`Base`\>

#### Returns

[`CachingCredentialsManager`](credentials_provider.CachingCredentialsManager.md)<`Base`\>

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

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `parameters?` | `any` |

#### Returns

[`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Implementation of

[CredentialsManager](../interfaces/credentials_provider.CredentialsManager.md).[getCredentialsProvider](../interfaces/credentials_provider.CredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L139)

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
