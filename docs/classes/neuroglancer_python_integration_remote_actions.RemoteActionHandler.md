[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/remote\_actions](../modules/neuroglancer_python_integration_remote_actions.md) / RemoteActionHandler

# Class: RemoteActionHandler

[neuroglancer/python_integration/remote_actions](../modules/neuroglancer_python_integration_remote_actions.md).RemoteActionHandler

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

  ↳ **`RemoteActionHandler`**

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#constructor)

### Properties

- [actionDisposers](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#actiondisposers)
- [actionSet](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#actionset)
- [disposedStacks](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#disposedstacks)
- [refCount](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#refcount)
- [sendActionRequested](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#sendactionrequested)
- [viewer](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#viewer)
- [wasDisposed](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#wasdisposed)

### Methods

- [addRef](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#addref)
- [clearListeners](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#clearlisteners)
- [dispose](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#dispose)
- [disposed](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#disposed)
- [handleAction](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#handleaction)
- [refCountReachedZero](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#refcountreachedzero)
- [registerCancellable](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#registercancellable)
- [registerDisposer](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#registerdisposer)
- [registerEventListener](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#registereventlistener)
- [unregisterDisposer](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#unregisterdisposer)
- [updateActions](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md#updateactions)

## Constructors

### constructor

• **new RemoteActionHandler**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L37)

## Properties

### actionDisposers

• **actionDisposers**: () => `void`[] = `[]`

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L33)

___

### actionSet

• **actionSet**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`Set`<`string`\>\>

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L31)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### sendActionRequested

• **sendActionRequested**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`action`: `string`, `state`: `any`) => `void`\>

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L35)

___

### viewer

• **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L37)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RemoteActionHandler`](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md)

#### Returns

[`RemoteActionHandler`](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### clearListeners

▸ `Private` **clearListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L42)

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

[src/neuroglancer/python_integration/remote_actions.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L49)

___

### handleAction

▸ `Private` **handleAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L62)

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

### updateActions

▸ `Private` **updateActions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/remote_actions.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/remote_actions.ts#L54)
