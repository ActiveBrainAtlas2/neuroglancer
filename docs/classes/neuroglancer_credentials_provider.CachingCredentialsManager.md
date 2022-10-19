[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/credentials\_provider](../modules/neuroglancer_credentials_provider.md) / CachingCredentialsManager

# Class: CachingCredentialsManager<Base\>

[neuroglancer/credentials_provider](../modules/neuroglancer_credentials_provider.md).CachingCredentialsManager

CredentialsManager that wraps another and caches the CredentialsProvider objects.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Base` | extends [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`CachingCredentialsManager`**

  ↳↳ [`CachingMapBasedCredentialsManager`](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md)

## Implements

- [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_credentials_provider.CachingCredentialsManager.md#constructor)

### Properties

- [base](neuroglancer_credentials_provider.CachingCredentialsManager.md#base)
- [disposedStacks](neuroglancer_credentials_provider.CachingCredentialsManager.md#disposedstacks)
- [memoize](neuroglancer_credentials_provider.CachingCredentialsManager.md#memoize)
- [refCount](neuroglancer_credentials_provider.CachingCredentialsManager.md#refcount)
- [wasDisposed](neuroglancer_credentials_provider.CachingCredentialsManager.md#wasdisposed)

### Methods

- [addRef](neuroglancer_credentials_provider.CachingCredentialsManager.md#addref)
- [dispose](neuroglancer_credentials_provider.CachingCredentialsManager.md#dispose)
- [disposed](neuroglancer_credentials_provider.CachingCredentialsManager.md#disposed)
- [getCredentialsProvider](neuroglancer_credentials_provider.CachingCredentialsManager.md#getcredentialsprovider)
- [refCountReachedZero](neuroglancer_credentials_provider.CachingCredentialsManager.md#refcountreachedzero)
- [registerCancellable](neuroglancer_credentials_provider.CachingCredentialsManager.md#registercancellable)
- [registerDisposer](neuroglancer_credentials_provider.CachingCredentialsManager.md#registerdisposer)
- [registerEventListener](neuroglancer_credentials_provider.CachingCredentialsManager.md#registereventlistener)
- [unregisterDisposer](neuroglancer_credentials_provider.CachingCredentialsManager.md#unregisterdisposer)

## Constructors

### constructor

• **new CachingCredentialsManager**<`Base`\>(`base`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Base` | extends [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | `Base` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L135)

## Properties

### base

• **base**: `Base`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### memoize

• **memoize**: [`StringMemoize`](neuroglancer_util_memoize.StringMemoize.md)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L133)

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

▸ **addRef**(): [`CachingCredentialsManager`](neuroglancer_credentials_provider.CachingCredentialsManager.md)<`Base`\>

#### Returns

[`CachingCredentialsManager`](neuroglancer_credentials_provider.CachingCredentialsManager.md)<`Base`\>

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

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

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

[`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Implementation of

[CredentialsManager](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md).[getCredentialsProvider](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L139)

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
