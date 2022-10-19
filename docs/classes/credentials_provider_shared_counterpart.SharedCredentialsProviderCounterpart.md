[neuroglancer](../README.md) / [Modules](../modules.md) / [credentials\_provider/shared\_counterpart](../modules/credentials_provider_shared_counterpart.md) / SharedCredentialsProviderCounterpart

# Class: SharedCredentialsProviderCounterpart<Credentials\>

[credentials_provider/shared_counterpart](../modules/credentials_provider_shared_counterpart.md).SharedCredentialsProviderCounterpart

## Type parameters

| Name |
| :------ |
| `Credentials` |

## Hierarchy

- [`SharedObjectCounterpart`](annotation_backend._internal_.SharedObjectCounterpart.md)

  ↳ **`SharedCredentialsProviderCounterpart`**

## Implements

- [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

## Table of contents

### Constructors

- [constructor](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#constructor)

### Properties

- [RPC\_TYPE\_ID](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#rpc_type_id)
- [disposedStacks](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#disposedstacks)
- [get](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#get)
- [isOwner](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#isowner)
- [refCount](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#refcount)
- [referencedGeneration](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#referencedgeneration)
- [rpc](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#rpc)
- [rpcId](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#rpcid)
- [unreferencedGeneration](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#unreferencedgeneration)
- [wasDisposed](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#wasdisposed)

### Methods

- [addCounterpartRef](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#addcounterpartref)
- [addRef](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#addref)
- [counterpartRefCountReachedZero](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#counterpartrefcountreachedzero)
- [dispose](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#dispose)
- [disposed](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#disposed)
- [initializeCounterpart](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#initializecounterpart)
- [initializeSharedObject](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#initializesharedobject)
- [ownerDispose](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#ownerdispose)
- [refCountReachedZero](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#refcountreachedzero)
- [registerCancellable](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#registercancellable)
- [registerDisposer](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#registerdisposer)
- [registerEventListener](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#registereventlistener)
- [unregisterDisposer](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md#unregisterdisposer)

## Constructors

### constructor

• **new SharedCredentialsProviderCounterpart**<`Credentials`\>(`rpc?`, `options?`)

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[constructor](annotation_backend._internal_.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[RPC_TYPE_ID](annotation_backend._internal_.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Implementation of

CredentialsProvider.disposedStacks

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposedStacks](annotation_backend._internal_.SharedObjectCounterpart.md#disposedstacks)

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

#### Implementation of

CredentialsProvider.get

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/shared_counterpart.ts#L31)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[isOwner](annotation_backend._internal_.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

CredentialsProvider.refCount

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[refCount](annotation_backend._internal_.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[referencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpc](annotation_backend._internal_.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpcId](annotation_backend._internal_.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unreferencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

CredentialsProvider.wasDisposed

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[wasDisposed](annotation_backend._internal_.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addCounterpartRef

▸ **addCounterpartRef**(): `Object`

Precondition: this.isOwner === true.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gen` | `number` |
| `id` | ``null`` \| `number` |

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addCounterpartRef](annotation_backend._internal_.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedCredentialsProviderCounterpart`](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md)<`Credentials`\>

#### Returns

[`SharedCredentialsProviderCounterpart`](credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md)<`Credentials`\>

#### Implementation of

CredentialsProvider.addRef

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addRef](annotation_backend._internal_.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### counterpartRefCountReachedZero

▸ **counterpartRefCountReachedZero**(`generation`): `void`

Precondition: this.isOwner === true.

This should be called when the counterpart's refCount is decremented and reaches zero.

#### Parameters

| Name | Type |
| :------ | :------ |
| `generation` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](annotation_backend._internal_.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

CredentialsProvider.dispose

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[dispose](annotation_backend._internal_.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

CredentialsProvider.disposed

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposed](annotation_backend._internal_.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[initializeCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[initializeSharedObject](annotation_backend._internal_.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[ownerDispose](annotation_backend._internal_.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Implementation of

CredentialsProvider.refCountReachedZero

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[refCountReachedZero](annotation_backend._internal_.SharedObjectCounterpart.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L203)

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

#### Implementation of

CredentialsProvider.registerCancellable

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerCancellable](annotation_backend._internal_.SharedObjectCounterpart.md#registercancellable)

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

#### Implementation of

CredentialsProvider.registerDisposer

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerDisposer](annotation_backend._internal_.SharedObjectCounterpart.md#registerdisposer)

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

#### Implementation of

CredentialsProvider.registerEventListener

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerEventListener](annotation_backend._internal_.SharedObjectCounterpart.md#registereventlistener)

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

#### Implementation of

CredentialsProvider.unregisterDisposer

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unregisterDisposer](annotation_backend._internal_.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
