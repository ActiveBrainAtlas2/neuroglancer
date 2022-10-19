[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/api](../modules/python_integration_api.md) / ClientStateSynchronizer

# Class: ClientStateSynchronizer

[python_integration/api](../modules/python_integration_api.md).ClientStateSynchronizer

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ClientStateSynchronizer`**

## Table of contents

### Constructors

- [constructor](python_integration_api.ClientStateSynchronizer.md#constructor)

### Properties

- [client](python_integration_api.ClientStateSynchronizer.md#client)
- [clientGeneration](python_integration_api.ClientStateSynchronizer.md#clientgeneration)
- [disposedStacks](python_integration_api.ClientStateSynchronizer.md#disposedstacks)
- [lastServerState](python_integration_api.ClientStateSynchronizer.md#lastserverstate)
- [needUpdate](python_integration_api.ClientStateSynchronizer.md#needupdate)
- [refCount](python_integration_api.ClientStateSynchronizer.md#refcount)
- [state](python_integration_api.ClientStateSynchronizer.md#state)
- [updateInProgress](python_integration_api.ClientStateSynchronizer.md#updateinprogress)
- [wasDisposed](python_integration_api.ClientStateSynchronizer.md#wasdisposed)

### Methods

- [addRef](python_integration_api.ClientStateSynchronizer.md#addref)
- [dispose](python_integration_api.ClientStateSynchronizer.md#dispose)
- [disposed](python_integration_api.ClientStateSynchronizer.md#disposed)
- [handleStateChanged](python_integration_api.ClientStateSynchronizer.md#handlestatechanged)
- [refCountReachedZero](python_integration_api.ClientStateSynchronizer.md#refcountreachedzero)
- [registerCancellable](python_integration_api.ClientStateSynchronizer.md#registercancellable)
- [registerDisposer](python_integration_api.ClientStateSynchronizer.md#registerdisposer)
- [registerEventListener](python_integration_api.ClientStateSynchronizer.md#registereventlistener)
- [unregisterDisposer](python_integration_api.ClientStateSynchronizer.md#unregisterdisposer)

## Constructors

### constructor

• **new ClientStateSynchronizer**(`client`, `state`, `updateDelayMilliseconds`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](python_integration_api.Client.md) |
| `state` | [`Trackable`](../interfaces/util_trackable.Trackable.md) |
| `updateDelayMilliseconds` | ``null`` \| `number` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/api.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L49)

## Properties

### client

• **client**: [`Client`](python_integration_api.Client.md)

___

### clientGeneration

• **clientGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/python_integration/api.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L44)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### lastServerState

• **lastServerState**: `string` = `''`

#### Defined in

[src/neuroglancer/python_integration/api.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L45)

___

### needUpdate

• `Private` **needUpdate**: `boolean` = `false`

#### Defined in

[src/neuroglancer/python_integration/api.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L46)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: [`Trackable`](../interfaces/util_trackable.Trackable.md)

___

### updateInProgress

• `Private` **updateInProgress**: `boolean` = `false`

#### Defined in

[src/neuroglancer/python_integration/api.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L47)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ClientStateSynchronizer`](python_integration_api.ClientStateSynchronizer.md)

#### Returns

[`ClientStateSynchronizer`](python_integration_api.ClientStateSynchronizer.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### handleStateChanged

▸ `Private` **handleStateChanged**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/python_integration/api.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/api.ts#L59)

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
