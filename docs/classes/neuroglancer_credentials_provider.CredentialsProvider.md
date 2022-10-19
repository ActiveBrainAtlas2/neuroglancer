[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/credentials\_provider](../modules/neuroglancer_credentials_provider.md) / CredentialsProvider

# Class: CredentialsProvider<Credentials\>

[neuroglancer/credentials_provider](../modules/neuroglancer_credentials_provider.md).CredentialsProvider

## Type parameters

| Name |
| :------ |
| `Credentials` |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`CredentialsProvider`**

  ↳↳ [`AnonymousFirstCredentialsProvider`](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md)

  ↳↳ [`BossCredentialsProvider`](neuroglancer_datasource_boss_credentials_provider.BossCredentialsProvider.md)

  ↳↳ [`MiddleAuthCredentialsProvider`](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md)

  ↳↳ [`MiddleAuthAppCredentialsProvider`](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthAppCredentialsProvider.md)

  ↳↳ [`NgauthCredentialsProvider`](neuroglancer_datasource_ngauth_credentials_provider.NgauthCredentialsProvider.md)

  ↳↳ [`NgauthGcsCredentialsProvider`](neuroglancer_datasource_ngauth_credentials_provider.NgauthGcsCredentialsProvider.md)

  ↳↳ [`NggraphCredentialsProvider`](neuroglancer_datasource_nggraph_credentials_provider.NggraphCredentialsProvider.md)

  ↳↳ [`GoogleOAuth2CredentialsProvider`](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md)

  ↳↳ [`PythonCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.PythonCredentialsProvider.md)

## Implemented by

- [`SharedCredentialsProvider`](neuroglancer_credentials_provider_shared.SharedCredentialsProvider.md)
- [`SharedCredentialsProviderCounterpart`](neuroglancer_credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_credentials_provider.CredentialsProvider.md#constructor)

### Properties

- [disposedStacks](neuroglancer_credentials_provider.CredentialsProvider.md#disposedstacks)
- [get](neuroglancer_credentials_provider.CredentialsProvider.md#get)
- [refCount](neuroglancer_credentials_provider.CredentialsProvider.md#refcount)
- [wasDisposed](neuroglancer_credentials_provider.CredentialsProvider.md#wasdisposed)

### Methods

- [addRef](neuroglancer_credentials_provider.CredentialsProvider.md#addref)
- [dispose](neuroglancer_credentials_provider.CredentialsProvider.md#dispose)
- [disposed](neuroglancer_credentials_provider.CredentialsProvider.md#disposed)
- [refCountReachedZero](neuroglancer_credentials_provider.CredentialsProvider.md#refcountreachedzero)
- [registerCancellable](neuroglancer_credentials_provider.CredentialsProvider.md#registercancellable)
- [registerDisposer](neuroglancer_credentials_provider.CredentialsProvider.md#registerdisposer)
- [registerEventListener](neuroglancer_credentials_provider.CredentialsProvider.md#registereventlistener)
- [unregisterDisposer](neuroglancer_credentials_provider.CredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new CredentialsProvider**<`Credentials`\>()

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### get

• `Abstract` **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

Request valid credentials.  If `invalidCredentials` is specified, it indicates that the
specified credentials are invalid.

This method can be conveniently defined using the `makeCredentialsGetter` function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L42)

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

▸ **addRef**(): [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Returns

[`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

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
