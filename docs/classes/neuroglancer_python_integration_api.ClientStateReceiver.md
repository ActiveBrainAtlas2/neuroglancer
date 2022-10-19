[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/api](../modules/neuroglancer_python_integration_api.md) / ClientStateReceiver

# Class: ClientStateReceiver

[neuroglancer/python_integration/api](../modules/neuroglancer_python_integration_api.md).ClientStateReceiver

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ClientStateReceiver`**

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_api.ClientStateReceiver.md#constructor)

### Properties

- [client](neuroglancer_python_integration_api.ClientStateReceiver.md#client)
- [disposedStacks](neuroglancer_python_integration_api.ClientStateReceiver.md#disposedstacks)
- [eventSource](neuroglancer_python_integration_api.ClientStateReceiver.md#eventsource)
- [lastServerGeneration](neuroglancer_python_integration_api.ClientStateReceiver.md#lastservergeneration)
- [numConnectionFailures](neuroglancer_python_integration_api.ClientStateReceiver.md#numconnectionfailures)
- [refCount](neuroglancer_python_integration_api.ClientStateReceiver.md#refcount)
- [states](neuroglancer_python_integration_api.ClientStateReceiver.md#states)
- [status](neuroglancer_python_integration_api.ClientStateReceiver.md#status)
- [waitingToReconnect](neuroglancer_python_integration_api.ClientStateReceiver.md#waitingtoreconnect)
- [wasDisposed](neuroglancer_python_integration_api.ClientStateReceiver.md#wasdisposed)

### Methods

- [addRef](neuroglancer_python_integration_api.ClientStateReceiver.md#addref)
- [connect](neuroglancer_python_integration_api.ClientStateReceiver.md#connect)
- [dispose](neuroglancer_python_integration_api.ClientStateReceiver.md#dispose)
- [disposed](neuroglancer_python_integration_api.ClientStateReceiver.md#disposed)
- [refCountReachedZero](neuroglancer_python_integration_api.ClientStateReceiver.md#refcountreachedzero)
- [registerCancellable](neuroglancer_python_integration_api.ClientStateReceiver.md#registercancellable)
- [registerDisposer](neuroglancer_python_integration_api.ClientStateReceiver.md#registerdisposer)
- [registerEventListener](neuroglancer_python_integration_api.ClientStateReceiver.md#registereventlistener)
- [unregisterDisposer](neuroglancer_python_integration_api.ClientStateReceiver.md#unregisterdisposer)

## Constructors

### constructor

• **new ClientStateReceiver**(`client`, `states`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](neuroglancer_python_integration_api.Client.md) |
| `states` | `Map`<`string`, [`ClientStateSynchronizer`](neuroglancer_python_integration_api.ClientStateSynchronizer.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/api.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L106)

## Properties

### client

• **client**: [`Client`](neuroglancer_python_integration_api.Client.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### eventSource

• **eventSource**: `undefined` \| [`EventSource`](../modules/neuroglancer_python_integration_api._internal_.md#eventsource)

#### Defined in

[src/neuroglancer/python_integration/api.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L104)

___

### lastServerGeneration

• `Private` **lastServerGeneration**: `Map`<`string`, `string`\>

#### Defined in

[src/neuroglancer/python_integration/api.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L100)

___

### numConnectionFailures

• `Private` **numConnectionFailures**: `number` = `0`

#### Defined in

[src/neuroglancer/python_integration/api.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L101)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### states

• **states**: `Map`<`string`, [`ClientStateSynchronizer`](neuroglancer_python_integration_api.ClientStateSynchronizer.md)\>

___

### status

• **status**: [`StatusMessage`](neuroglancer_status.StatusMessage.md)

#### Defined in

[src/neuroglancer/python_integration/api.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L102)

___

### waitingToReconnect

• **waitingToReconnect**: `number` = `-1`

#### Defined in

[src/neuroglancer/python_integration/api.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L103)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ClientStateReceiver`](neuroglancer_python_integration_api.ClientStateReceiver.md)

#### Returns

[`ClientStateReceiver`](neuroglancer_python_integration_api.ClientStateReceiver.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/api.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L122)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/python_integration/api.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/api.ts#L114)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
