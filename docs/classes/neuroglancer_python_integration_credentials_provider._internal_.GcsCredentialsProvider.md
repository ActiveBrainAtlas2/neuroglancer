[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/credentials\_provider](../modules/neuroglancer_python_integration_credentials_provider.md) / [<internal\>](../modules/neuroglancer_python_integration_credentials_provider._internal_.md) / GcsCredentialsProvider

# Class: GcsCredentialsProvider

[neuroglancer/python_integration/credentials_provider](../modules/neuroglancer_python_integration_credentials_provider.md).[<internal>](../modules/neuroglancer_python_integration_credentials_provider._internal_.md).GcsCredentialsProvider

## Hierarchy

- [`AnonymousFirstCredentialsProvider`](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md)<`any`\>

  ↳ **`GcsCredentialsProvider`**

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#constructor)

### Properties

- [disposedStacks](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#disposedstacks)
- [get](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#get)
- [refCount](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#refcount)
- [wasDisposed](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#wasdisposed)

### Methods

- [addRef](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#addref)
- [dispose](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#dispose)
- [disposed](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#disposed)
- [refCountReachedZero](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#refcountreachedzero)
- [registerCancellable](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#registercancellable)
- [registerDisposer](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#registerdisposer)
- [registerEventListener](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#registereventlistener)
- [unregisterDisposer](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md#unregisterdisposer)

## Constructors

### constructor

• **new GcsCredentialsProvider**(`baseProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |

#### Overrides

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[constructor](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/credentials_provider.ts#L50)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AnonymousFirstCredentialsProvider](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md).[disposedStacks](neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### get

• **get**: (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`any`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`any`\>\>

#### Type declaration

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`any`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`any`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`any`\>\>

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

▸ **addRef**(): [`GcsCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md)

#### Returns

[`GcsCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md)

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
