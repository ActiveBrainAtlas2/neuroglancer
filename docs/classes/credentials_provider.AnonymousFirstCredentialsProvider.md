[neuroglancer](../README.md) / [Modules](../modules.md) / [credentials\_provider](../modules/credentials_provider.md) / AnonymousFirstCredentialsProvider

# Class: AnonymousFirstCredentialsProvider<T\>

[credentials_provider](../modules/credentials_provider.md).AnonymousFirstCredentialsProvider

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`T`\>

  ↳ **`AnonymousFirstCredentialsProvider`**

  ↳↳ [`GcsCredentialsProvider`](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md)

## Table of contents

### Constructors

- [constructor](credentials_provider.AnonymousFirstCredentialsProvider.md#constructor)

### Properties

- [anonymous](credentials_provider.AnonymousFirstCredentialsProvider.md#anonymous)
- [disposedStacks](credentials_provider.AnonymousFirstCredentialsProvider.md#disposedstacks)
- [get](credentials_provider.AnonymousFirstCredentialsProvider.md#get)
- [refCount](credentials_provider.AnonymousFirstCredentialsProvider.md#refcount)
- [wasDisposed](credentials_provider.AnonymousFirstCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](credentials_provider.AnonymousFirstCredentialsProvider.md#addref)
- [dispose](credentials_provider.AnonymousFirstCredentialsProvider.md#dispose)
- [disposed](credentials_provider.AnonymousFirstCredentialsProvider.md#disposed)
- [refCountReachedZero](credentials_provider.AnonymousFirstCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](credentials_provider.AnonymousFirstCredentialsProvider.md#registercancellable)
- [registerDisposer](credentials_provider.AnonymousFirstCredentialsProvider.md#registerdisposer)
- [registerEventListener](credentials_provider.AnonymousFirstCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](credentials_provider.AnonymousFirstCredentialsProvider.md#unregisterdisposer)

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
| `baseProvider` | [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`T`\> |
| `anonymousCredentials` | `T` |

#### Overrides

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[constructor](credentials_provider.CredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L165)

## Properties

### anonymous

• `Private` **anonymous**: `boolean` = `true`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L164)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[disposedStacks](credentials_provider.CredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`T`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`T`\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`T`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`T`\>\>

#### Overrides

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[get](credentials_provider.CredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L169)

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

▸ **addRef**(): [`AnonymousFirstCredentialsProvider`](credentials_provider.AnonymousFirstCredentialsProvider.md)<`T`\>

#### Returns

[`AnonymousFirstCredentialsProvider`](credentials_provider.AnonymousFirstCredentialsProvider.md)<`T`\>

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
