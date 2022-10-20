[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/google\_oauth2](../modules/neuroglancer_util_google_oauth2.md) / GoogleOAuth2CredentialsProvider

# Class: GoogleOAuth2CredentialsProvider

[neuroglancer/util/google_oauth2](../modules/neuroglancer_util_google_oauth2.md).GoogleOAuth2CredentialsProvider

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Token`](../interfaces/neuroglancer_util_google_oauth2.OAuth2Token.md)\>

  ↳ **`GoogleOAuth2CredentialsProvider`**

  ↳↳ [`BrainmapsCredentialsProvider`](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#constructor)

### Properties

- [disposedStacks](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#disposedstacks)
- [get](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#get)
- [options](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#options)
- [refCount](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#refcount)
- [wasDisposed](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#wasdisposed)

### Methods

- [addRef](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#addref)
- [dispose](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#dispose)
- [disposed](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#disposed)
- [refCountReachedZero](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#refcountreachedzero)
- [registerCancellable](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registercancellable)
- [registerDisposer](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registerdisposer)
- [registerEventListener](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registereventlistener)
- [unregisterDisposer](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#unregisterdisposer)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[constructor](neuroglancer_credentials_provider.CredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/google_oauth2.ts#L267)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[disposedStacks](neuroglancer_credentials_provider.CredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/neuroglancer_util_google_oauth2.OAuth2Token.md)\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/neuroglancer_util_google_oauth2.OAuth2Token.md)\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/neuroglancer_util_google_oauth2.OAuth2Token.md)\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/neuroglancer_util_google_oauth2.OAuth2Token.md)\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`OAuth2Token`](../interfaces/neuroglancer_util_google_oauth2.OAuth2Token.md)\>\>

#### Overrides

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[get](neuroglancer_credentials_provider.CredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/google_oauth2.ts#L271)

___

### options

• **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientId` | `string` |
| `description` | `string` |
| `scopes` | `string`[] |

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/google_oauth2.ts#L267)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[refCount](neuroglancer_credentials_provider.CredentialsProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[wasDisposed](neuroglancer_credentials_provider.CredentialsProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`GoogleOAuth2CredentialsProvider`](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md)

#### Returns

[`GoogleOAuth2CredentialsProvider`](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md)

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[addRef](neuroglancer_credentials_provider.CredentialsProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[dispose](neuroglancer_credentials_provider.CredentialsProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[disposed](neuroglancer_credentials_provider.CredentialsProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[refCountReachedZero](neuroglancer_credentials_provider.CredentialsProvider.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[registerDisposer](neuroglancer_credentials_provider.CredentialsProvider.md#registerdisposer)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[registerEventListener](neuroglancer_credentials_provider.CredentialsProvider.md#registereventlistener)

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

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[unregisterDisposer](neuroglancer_credentials_provider.CredentialsProvider.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
