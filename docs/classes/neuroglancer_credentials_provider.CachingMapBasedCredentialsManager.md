[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/credentials\_provider](../modules/neuroglancer_credentials_provider.md) / CachingMapBasedCredentialsManager

# Class: CachingMapBasedCredentialsManager

[neuroglancer/credentials_provider](../modules/neuroglancer_credentials_provider.md).CachingMapBasedCredentialsManager

CredentialsManager that wraps another and caches the CredentialsProvider objects.

## Hierarchy

- [`CachingCredentialsManager`](neuroglancer_credentials_provider.CachingCredentialsManager.md)<[`MapBasedCredentialsManager`](neuroglancer_credentials_provider.MapBasedCredentialsManager.md)\>

  ↳ **`CachingMapBasedCredentialsManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#constructor)

### Properties

- [base](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#base)
- [disposedStacks](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#disposedstacks)
- [memoize](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#memoize)
- [refCount](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#refcount)
- [wasDisposed](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#wasdisposed)

### Methods

- [addRef](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#addref)
- [dispose](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#dispose)
- [disposed](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#disposed)
- [getCredentialsProvider](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#getcredentialsprovider)
- [refCountReachedZero](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#refcountreachedzero)
- [register](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#register)
- [registerCancellable](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#registercancellable)
- [registerDisposer](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#registerdisposer)
- [registerEventListener](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#registereventlistener)
- [unregisterDisposer](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md#unregisterdisposer)

## Constructors

### constructor

• **new CachingMapBasedCredentialsManager**()

#### Overrides

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[constructor](neuroglancer_credentials_provider.CachingCredentialsManager.md#constructor)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L150)

## Properties

### base

• **base**: [`MapBasedCredentialsManager`](neuroglancer_credentials_provider.MapBasedCredentialsManager.md)

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[base](neuroglancer_credentials_provider.CachingCredentialsManager.md#base)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L135)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[disposedStacks](neuroglancer_credentials_provider.CachingCredentialsManager.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### memoize

• **memoize**: [`StringMemoize`](neuroglancer_util_memoize.StringMemoize.md)

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[memoize](neuroglancer_credentials_provider.CachingCredentialsManager.md#memoize)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L133)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[refCount](neuroglancer_credentials_provider.CachingCredentialsManager.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[wasDisposed](neuroglancer_credentials_provider.CachingCredentialsManager.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CachingMapBasedCredentialsManager`](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md)

#### Returns

[`CachingMapBasedCredentialsManager`](neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md)

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[addRef](neuroglancer_credentials_provider.CachingCredentialsManager.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[dispose](neuroglancer_credentials_provider.CachingCredentialsManager.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[disposed](neuroglancer_credentials_provider.CachingCredentialsManager.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[getCredentialsProvider](neuroglancer_credentials_provider.CachingCredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L139)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[refCountReachedZero](neuroglancer_credentials_provider.CachingCredentialsManager.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

___

### register

▸ **register**<`Credentials`\>(`key`, `providerGetter`): `void`

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `providerGetter` | [`ProviderGetter`](../modules/neuroglancer_credentials_provider.md#providergetter)<`Credentials`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L155)

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

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[registerCancellable](neuroglancer_credentials_provider.CachingCredentialsManager.md#registercancellable)

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

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[registerDisposer](neuroglancer_credentials_provider.CachingCredentialsManager.md#registerdisposer)

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

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[registerEventListener](neuroglancer_credentials_provider.CachingCredentialsManager.md#registereventlistener)

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

[CachingCredentialsManager](neuroglancer_credentials_provider.CachingCredentialsManager.md).[unregisterDisposer](neuroglancer_credentials_provider.CachingCredentialsManager.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
