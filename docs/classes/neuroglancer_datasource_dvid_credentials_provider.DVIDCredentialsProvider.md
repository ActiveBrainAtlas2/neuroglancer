[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/dvid/credentials\_provider](../modules/neuroglancer_datasource_dvid_credentials_provider.md) / DVIDCredentialsProvider

# Class: DVIDCredentialsProvider

[neuroglancer/datasource/dvid/credentials_provider](../modules/neuroglancer_datasource_dvid_credentials_provider.md).DVIDCredentialsProvider

## Hierarchy

- [`AnonymousFirstCredentialsProvider`](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\>

  ↳ **`DVIDCredentialsProvider`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#constructor)

### Properties

- [disposedStacks](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#disposedstacks)
- [get](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#get)
- [refCount](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#refcount)
- [wasDisposed](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#addref)
- [dispose](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#dispose)
- [disposed](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#disposed)
- [refCountReachedZero](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new DVIDCredentialsProvider**(`_dvidServer`, `authServer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_dvidServer` | `string` |
| `authServer` | `undefined` \| `string` |

#### Overrides

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[constructor](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/datasource/dvid/credentials_provider.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/credentials_provider.ts#L103)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[disposedStacks](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\>\>

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[get](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L169)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[refCount](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[wasDisposed](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DVIDCredentialsProvider`](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md)

#### Returns

[`DVIDCredentialsProvider`](neuroglancer_datasource_dvid_credentials_provider.DVIDCredentialsProvider.md)

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[addRef](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[dispose](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[disposed](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[refCountReachedZero](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#refcountreachedzero)

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

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[registerCancellable](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#registercancellable)

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

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[registerDisposer](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#registerdisposer)

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

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[registerEventListener](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#registereventlistener)

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

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[unregisterDisposer](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
