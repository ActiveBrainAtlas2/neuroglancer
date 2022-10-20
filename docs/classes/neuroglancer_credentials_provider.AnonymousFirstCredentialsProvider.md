[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/credentials\_provider](../modules/neuroglancer_credentials_provider.md) / AnonymousFirstCredentialsProvider

# Class: AnonymousFirstCredentialsProvider<T\>

[neuroglancer/credentials_provider](../modules/neuroglancer_credentials_provider.md).AnonymousFirstCredentialsProvider

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

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`T`\>

  ↳ **`AnonymousFirstCredentialsProvider`**

  ↳↳ [`DVIDCredentialsProvider`](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md)

  ↳↳ [`GcsCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#constructor)

### Properties

- [anonymous](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#anonymous)
- [anonymousCredentials](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#anonymouscredentials)
- [baseProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#baseprovider)
- [disposedStacks](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#disposedstacks)
- [get](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#get)
- [refCount](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#refcount)
- [wasDisposed](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#addref)
- [dispose](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#dispose)
- [disposed](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#disposed)
- [refCountReachedZero](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#registercancellable)
- [registerDisposer](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#registerdisposer)
- [registerEventListener](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new AnonymousFirstCredentialsProvider**<`T`\>(`baseProvider`, `anonymousCredentials`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`T`\> |
| `anonymousCredentials` | `T` |

#### Overrides

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[constructor](neuroglancer_credentials_provider.CredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L165)

## Properties

### anonymous

• `Private` **anonymous**: `boolean` = `true`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L164)

___

### anonymousCredentials

• `Private` **anonymousCredentials**: `T`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L165)

___

### baseProvider

• `Private` **baseProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`T`\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L165)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[disposedStacks](neuroglancer_credentials_provider.CredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`T`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`T`\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`T`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`T`\>\>

#### Overrides

[CredentialsProvider](neuroglancer_credentials_provider.CredentialsProvider.md).[get](neuroglancer_credentials_provider.CredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L169)

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

▸ **addRef**(): [`AnonymousFirstCredentialsProvider`](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md)<`T`\>

#### Returns

[`AnonymousFirstCredentialsProvider`](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md)<`T`\>

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
