[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/remote\_status\_messages](../modules/neuroglancer_python_integration_remote_status_messages.md) / TrackableBasedStatusMessages

# Class: TrackableBasedStatusMessages

[neuroglancer/python_integration/remote_status_messages](../modules/neuroglancer_python_integration_remote_status_messages.md).TrackableBasedStatusMessages

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TrackableBasedStatusMessages`**

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#constructor)

### Properties

- [changed](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#changed)
- [disposedStacks](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#disposedstacks)
- [existingMessages](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#existingmessages)
- [messages](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#messages)
- [refCount](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#refcount)
- [wasDisposed](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#wasdisposed)

### Methods

- [addRef](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#addref)
- [dispose](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#dispose)
- [disposed](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#disposed)
- [refCountReachedZero](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#refcountreachedzero)
- [registerCancellable](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#registercancellable)
- [registerDisposer](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#registerdisposer)
- [registerEventListener](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#registereventlistener)
- [reset](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#reset)
- [restoreState](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#restorestate)
- [toJSON](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#tojson)
- [unregisterDisposer](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#unregisterdisposer)
- [updateMessages](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md#updatemessages)

## Constructors

### constructor

• **new TrackableBasedStatusMessages**()

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L50)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L30)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### existingMessages

• **existingMessages**: `Map`<`string`, [`StatusMessage`](neuroglancer_status.StatusMessage.md)\>

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L28)

___

### messages

• **messages**: `Map`<`string`, `string`\>

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L32)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TrackableBasedStatusMessages`](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md)

#### Returns

[`TrackableBasedStatusMessages`](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L55)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L34)

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

[src/neuroglancer/python_integration/remote_status_messages.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L39)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L87)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateMessages

▸ `Private` **updateMessages**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_status_messages.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_status_messages.ts#L62)
