[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/credentials\_provider](../modules/neuroglancer_datasource_brainmaps_credentials_provider.md) / BrainmapsCredentialsProvider

# Class: BrainmapsCredentialsProvider

[neuroglancer/datasource/brainmaps/credentials_provider](../modules/neuroglancer_datasource_brainmaps_credentials_provider.md).BrainmapsCredentialsProvider

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

- [`GoogleOAuth2CredentialsProvider`](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md)

  ↳ **`BrainmapsCredentialsProvider`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#constructor)

### Properties

- [disposedStacks](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#disposedstacks)
- [get](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#get)
- [options](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#options)
- [refCount](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#refcount)
- [wasDisposed](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#addref)
- [dispose](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#dispose)
- [disposed](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#disposed)
- [refCountReachedZero](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new BrainmapsCredentialsProvider**(`clientId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientId` | `string` |

#### Overrides

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[constructor](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/datasource/brainmaps/credentials_provider.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/credentials_provider.ts#L26)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[disposedStacks](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#disposedstacks)

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

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[get](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#get)

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

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[options](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#options)

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/google_oauth2.ts#L267)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[refCount](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[wasDisposed](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`BrainmapsCredentialsProvider`](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md)

#### Returns

[`BrainmapsCredentialsProvider`](neuroglancer_datasource_brainmaps_credentials_provider.BrainmapsCredentialsProvider.md)

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[addRef](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[dispose](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[disposed](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[refCountReachedZero](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#refcountreachedzero)

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

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[registerCancellable](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registercancellable)

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

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[registerDisposer](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registerdisposer)

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

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[registerEventListener](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#registereventlistener)

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

[GoogleOAuth2CredentialsProvider](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md).[unregisterDisposer](neuroglancer_util_google_oauth2.GoogleOAuth2CredentialsProvider.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
