[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/remote\_status\_messages](../modules/python_integration_remote_status_messages.md) / TrackableBasedStatusMessages

# Class: TrackableBasedStatusMessages

[python_integration/remote_status_messages](../modules/python_integration_remote_status_messages.md).TrackableBasedStatusMessages

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TrackableBasedStatusMessages`**

## Table of contents

### Constructors

- [constructor](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#constructor)

### Properties

- [changed](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#changed)
- [disposedStacks](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#disposedstacks)
- [existingMessages](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#existingmessages)
- [messages](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#messages)
- [refCount](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#refcount)
- [wasDisposed](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#wasdisposed)

### Methods

- [addRef](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#addref)
- [dispose](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#dispose)
- [disposed](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#disposed)
- [refCountReachedZero](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#refcountreachedzero)
- [registerCancellable](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#registercancellable)
- [registerDisposer](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#registerdisposer)
- [registerEventListener](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#registereventlistener)
- [reset](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#reset)
- [restoreState](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#restorestate)
- [toJSON](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#tojson)
- [unregisterDisposer](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#unregisterdisposer)
- [updateMessages](python_integration_remote_status_messages.TrackableBasedStatusMessages.md#updatemessages)

## Constructors

### constructor

• **new TrackableBasedStatusMessages**()

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L50)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L30)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### existingMessages

• **existingMessages**: `Map`<`string`, [`StatusMessage`](annotation_frontend_source._internal_.StatusMessage.md)\>

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L28)

___

### messages

• **messages**: `Map`<`string`, `string`\>

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L32)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TrackableBasedStatusMessages`](python_integration_remote_status_messages.TrackableBasedStatusMessages.md)

#### Returns

[`TrackableBasedStatusMessages`](python_integration_remote_status_messages.TrackableBasedStatusMessages.md)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L55)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L34)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L39)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L87)

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

___

### updateMessages

▸ `Private` **updateMessages**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/remote_status_messages.ts#L62)
