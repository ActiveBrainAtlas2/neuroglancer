[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/credentials\_provider](../modules/python_integration_credentials_provider.md) / [<internal\>](../modules/python_integration_credentials_provider._internal_.md) / GcsCredentialsProvider

# Class: GcsCredentialsProvider

[python_integration/credentials_provider](../modules/python_integration_credentials_provider.md).[<internal>](../modules/python_integration_credentials_provider._internal_.md).GcsCredentialsProvider

## Hierarchy

- [`AnonymousFirstCredentialsProvider`](credentials_provider.AnonymousFirstCredentialsProvider.md)<`any`\>

  ↳ **`GcsCredentialsProvider`**

## Table of contents

### Constructors

- [constructor](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#constructor)

### Properties

- [disposedStacks](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#disposedstacks)
- [get](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#get)
- [refCount](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#refcount)
- [wasDisposed](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#addref)
- [dispose](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#dispose)
- [disposed](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#disposed)
- [refCountReachedZero](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#registercancellable)
- [registerDisposer](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#registerdisposer)
- [registerEventListener](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new GcsCredentialsProvider**(`baseProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseProvider` | [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`any`\> |

#### Overrides

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[constructor](credentials_provider.AnonymousFirstCredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/credentials_provider.ts#L50)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[disposedStacks](credentials_provider.AnonymousFirstCredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`any`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`any`\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`any`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`any`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`any`\>\>

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[get](credentials_provider.AnonymousFirstCredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L169)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[refCount](credentials_provider.AnonymousFirstCredentialsProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[wasDisposed](credentials_provider.AnonymousFirstCredentialsProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`GcsCredentialsProvider`](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md)

#### Returns

[`GcsCredentialsProvider`](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md)

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[addRef](credentials_provider.AnonymousFirstCredentialsProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[dispose](credentials_provider.AnonymousFirstCredentialsProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[disposed](credentials_provider.AnonymousFirstCredentialsProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[refCountReachedZero](credentials_provider.AnonymousFirstCredentialsProvider.md#refcountreachedzero)

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

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[registerCancellable](credentials_provider.AnonymousFirstCredentialsProvider.md#registercancellable)

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

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[registerDisposer](credentials_provider.AnonymousFirstCredentialsProvider.md#registerdisposer)

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

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[registerEventListener](credentials_provider.AnonymousFirstCredentialsProvider.md#registereventlistener)

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

[AnonymousFirstCredentialsProvider](credentials_provider.AnonymousFirstCredentialsProvider.md).[unregisterDisposer](credentials_provider.AnonymousFirstCredentialsProvider.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
