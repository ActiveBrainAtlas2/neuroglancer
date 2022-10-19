[neuroglancer](../README.md) / [Modules](../modules.md) / [util/google\_oauth2](../modules/util_google_oauth2.md) / GoogleOAuth2CredentialsProvider

# Class: GoogleOAuth2CredentialsProvider

[util/google_oauth2](../modules/util_google_oauth2.md).GoogleOAuth2CredentialsProvider

## Hierarchy

- [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\>

  ↳ **`GoogleOAuth2CredentialsProvider`**

## Table of contents

### Constructors

- [constructor](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#constructor)

### Properties

- [disposedStacks](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#disposedstacks)
- [get](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#get)
- [options](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#options)
- [refCount](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#refcount)
- [wasDisposed](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#wasdisposed)

### Methods

- [addRef](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#addref)
- [dispose](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#dispose)
- [disposed](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#disposed)
- [refCountReachedZero](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#refcountreachedzero)
- [registerCancellable](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registercancellable)
- [registerDisposer](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registerdisposer)
- [registerEventListener](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registereventlistener)
- [unregisterDisposer](util_google_oauth2.GoogleOAuth2CredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new GoogleOAuth2CredentialsProvider**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clientId` | `string` |
| `options.description` | `string` |
| `options.scopes` | `string`[] |

#### Overrides

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[constructor](credentials_provider.CredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/google_oauth2.ts#L267)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[disposedStacks](credentials_provider.CredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\>, `cancellationToken?`: [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\>\>

#### Overrides

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[get](credentials_provider.CredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/google_oauth2.ts#L271)

___

### options

• **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientId` | `string` |
| `description` | `string` |
| `scopes` | `string`[] |

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[refCount](credentials_provider.CredentialsProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[wasDisposed](credentials_provider.CredentialsProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`GoogleOAuth2CredentialsProvider`](util_google_oauth2.GoogleOAuth2CredentialsProvider.md)

#### Returns

[`GoogleOAuth2CredentialsProvider`](util_google_oauth2.GoogleOAuth2CredentialsProvider.md)

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[addRef](credentials_provider.CredentialsProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[dispose](credentials_provider.CredentialsProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[disposed](credentials_provider.CredentialsProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[refCountReachedZero](credentials_provider.CredentialsProvider.md#refcountreachedzero)

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

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[registerCancellable](credentials_provider.CredentialsProvider.md#registercancellable)

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

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[registerDisposer](credentials_provider.CredentialsProvider.md#registerdisposer)

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

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[registerEventListener](credentials_provider.CredentialsProvider.md#registereventlistener)

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

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[unregisterDisposer](credentials_provider.CredentialsProvider.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
