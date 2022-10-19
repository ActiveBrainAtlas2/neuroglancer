[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/middleauth/credentials\_provider](../modules/neuroglancer_datasource_middleauth_credentials_provider.md) / MiddleAuthCredentialsProvider

# Class: MiddleAuthCredentialsProvider

[neuroglancer/datasource/middleauth/credentials_provider](../modules/neuroglancer_datasource_middleauth_credentials_provider.md).MiddleAuthCredentialsProvider

## Hierarchy

- [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`MiddleAuthToken`](../modules/neuroglancer_datasource_middleauth_credentials_provider.md#middleauthtoken)\>

  ↳ **`MiddleAuthCredentialsProvider`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#constructor)

### Properties

- [alreadyTriedLocalStorage](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#alreadytriedlocalstorage)
- [disposedStacks](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#disposedstacks)
- [get](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#get)
- [refCount](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#refcount)
- [wasDisposed](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#addref)
- [dispose](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#dispose)
- [disposed](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#disposed)
- [refCountReachedZero](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new MiddleAuthCredentialsProvider**(`serverUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverUrl` | `string` |

#### Overrides

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[constructor](neuroglancer_credentials_provider.CredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/datasource/middleauth/credentials_provider.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/middleauth/credentials_provider.ts#L112)

## Properties

### alreadyTriedLocalStorage

• **alreadyTriedLocalStorage**: [`Boolean`](../modules/neuroglancer_datasource_middleauth_credentials_provider._internal_.md#boolean) = `false`

#### Defined in

[src/neuroglancer/datasource/middleauth/credentials_provider.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/middleauth/credentials_provider.ts#L110)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[disposedStacks](neuroglancer_credentials_provider.CredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`MiddleAuthToken`](../modules/neuroglancer_datasource_middleauth_credentials_provider.md#middleauthtoken)\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`MiddleAuthToken`](../modules/neuroglancer_datasource_middleauth_credentials_provider.md#middleauthtoken)\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`MiddleAuthToken`](../modules/neuroglancer_datasource_middleauth_credentials_provider.md#middleauthtoken)\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`MiddleAuthToken`](../modules/neuroglancer_datasource_middleauth_credentials_provider.md#middleauthtoken)\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`MiddleAuthToken`](../modules/neuroglancer_datasource_middleauth_credentials_provider.md#middleauthtoken)\>\>

#### Overrides

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[get](neuroglancer_credentials_provider.CredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/datasource/middleauth/credentials_provider.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/middleauth/credentials_provider.ts#L115)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[refCount](neuroglancer_credentials_provider.CredentialsProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[wasDisposed](neuroglancer_credentials_provider.CredentialsProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`MiddleAuthCredentialsProvider`](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md)

#### Returns

[`MiddleAuthCredentialsProvider`](neuroglancer_datasource_middleauth_credentials_provider.MiddleAuthCredentialsProvider.md)

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[addRef](neuroglancer_credentials_provider.CredentialsProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[dispose](neuroglancer_credentials_provider.CredentialsProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[disposed](neuroglancer_credentials_provider.CredentialsProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[refCountReachedZero](neuroglancer_credentials_provider.CredentialsProvider.md#refcountreachedzero)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[registerCancellable](neuroglancer_credentials_provider.CredentialsProvider.md#registercancellable)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[registerDisposer](neuroglancer_credentials_provider.CredentialsProvider.md#registerdisposer)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[registerEventListener](neuroglancer_credentials_provider.CredentialsProvider.md#registereventlistener)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[unregisterDisposer](neuroglancer_credentials_provider.CredentialsProvider.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
