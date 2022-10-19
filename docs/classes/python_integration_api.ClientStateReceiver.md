[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/api](../modules/python_integration_api.md) / ClientStateReceiver

# Class: ClientStateReceiver

[python_integration/api](../modules/python_integration_api.md).ClientStateReceiver

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ClientStateReceiver`**

## Table of contents

### Constructors

- [constructor](python_integration_api.ClientStateReceiver.md#constructor)

### Properties

- [client](python_integration_api.ClientStateReceiver.md#client)
- [disposedStacks](python_integration_api.ClientStateReceiver.md#disposedstacks)
- [eventSource](python_integration_api.ClientStateReceiver.md#eventsource)
- [lastServerGeneration](python_integration_api.ClientStateReceiver.md#lastservergeneration)
- [numConnectionFailures](python_integration_api.ClientStateReceiver.md#numconnectionfailures)
- [refCount](python_integration_api.ClientStateReceiver.md#refcount)
- [states](python_integration_api.ClientStateReceiver.md#states)
- [status](python_integration_api.ClientStateReceiver.md#status)
- [waitingToReconnect](python_integration_api.ClientStateReceiver.md#waitingtoreconnect)
- [wasDisposed](python_integration_api.ClientStateReceiver.md#wasdisposed)

### Methods

- [addRef](python_integration_api.ClientStateReceiver.md#addref)
- [connect](python_integration_api.ClientStateReceiver.md#connect)
- [dispose](python_integration_api.ClientStateReceiver.md#dispose)
- [disposed](python_integration_api.ClientStateReceiver.md#disposed)
- [refCountReachedZero](python_integration_api.ClientStateReceiver.md#refcountreachedzero)
- [registerCancellable](python_integration_api.ClientStateReceiver.md#registercancellable)
- [registerDisposer](python_integration_api.ClientStateReceiver.md#registerdisposer)
- [registerEventListener](python_integration_api.ClientStateReceiver.md#registereventlistener)
- [unregisterDisposer](python_integration_api.ClientStateReceiver.md#unregisterdisposer)

## Constructors

### constructor

• **new ClientStateReceiver**(`client`, `states`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](python_integration_api.Client.md) |
| `states` | `Map`<`string`, [`ClientStateSynchronizer`](python_integration_api.ClientStateSynchronizer.md)\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/api.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L106)

## Properties

### client

• **client**: [`Client`](python_integration_api.Client.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### eventSource

• **eventSource**: `undefined` \| [`EventSource`](../modules/python_integration_api._internal_.md#eventsource)

#### Defined in

[src/neuroglancer/python_integration/api.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L104)

___

### lastServerGeneration

• `Private` **lastServerGeneration**: `Map`<`string`, `string`\>

#### Defined in

[src/neuroglancer/python_integration/api.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L100)

___

### numConnectionFailures

• `Private` **numConnectionFailures**: `number` = `0`

#### Defined in

[src/neuroglancer/python_integration/api.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L101)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### states

• **states**: `Map`<`string`, [`ClientStateSynchronizer`](python_integration_api.ClientStateSynchronizer.md)\>

___

### status

• **status**: [`StatusMessage`](annotation_frontend_source._internal_.StatusMessage.md)

#### Defined in

[src/neuroglancer/python_integration/api.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L102)

___

### waitingToReconnect

• **waitingToReconnect**: `number` = `-1`

#### Defined in

[src/neuroglancer/python_integration/api.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L103)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ClientStateReceiver`](python_integration_api.ClientStateReceiver.md)

#### Returns

[`ClientStateReceiver`](python_integration_api.ClientStateReceiver.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/api.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L122)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/python_integration/api.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L114)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
