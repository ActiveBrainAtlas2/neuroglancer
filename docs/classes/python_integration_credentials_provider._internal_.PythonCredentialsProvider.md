[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/credentials\_provider](../modules/python_integration_credentials_provider.md) / [<internal\>](../modules/python_integration_credentials_provider._internal_.md) / PythonCredentialsProvider

# Class: PythonCredentialsProvider<Credentials\>

[python_integration/credentials_provider](../modules/python_integration_credentials_provider.md).[<internal>](../modules/python_integration_credentials_provider._internal_.md).PythonCredentialsProvider

## Type parameters

| Name |
| :------ |
| `Credentials` |

## Hierarchy

- [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

  ↳ **`PythonCredentialsProvider`**

## Table of contents

### Constructors

- [constructor](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#constructor)

### Properties

- [disposedStacks](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#disposedstacks)
- [get](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#get)
- [refCount](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#refcount)
- [wasDisposed](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#addref)
- [dispose](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#dispose)
- [disposed](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#disposed)
- [refCountReachedZero](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#registercancellable)
- [registerDisposer](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#registerdisposer)
- [registerEventListener](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new PythonCredentialsProvider**<`Credentials`\>(`client`, `key`, `parameters`)

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](python_integration_api.Client.md) |
| `key` | `string` |
| `parameters` | `any` |

#### Overrides

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[constructor](credentials_provider.CredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/credentials_provider.ts#L28)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[disposedStacks](credentials_provider.CredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`Credentials`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Overrides

[CredentialsProvider](credentials_provider.CredentialsProvider.md).[get](credentials_provider.CredentialsProvider.md#get)

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/credentials_provider.ts#L32)

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

▸ **addRef**(): [`PythonCredentialsProvider`](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md)<`Credentials`\>

#### Returns

[`PythonCredentialsProvider`](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md)<`Credentials`\>

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
