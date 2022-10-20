[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/mouse\_bindings](../modules/neuroglancer_util_mouse_bindings.md) / MouseEventBinder

# Class: MouseEventBinder<EventMap\>

[neuroglancer/util/mouse_bindings](../modules/neuroglancer_util_mouse_bindings.md).MouseEventBinder

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

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`EventActionMapInterface`](../modules/neuroglancer_util_event_action_map.md#eventactionmapinterface) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`MouseEventBinder`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_mouse_bindings.MouseEventBinder.md#constructor)

### Properties

- [disposedStacks](neuroglancer_util_mouse_bindings.MouseEventBinder.md#disposedstacks)
- [eventMap](neuroglancer_util_mouse_bindings.MouseEventBinder.md#eventmap)
- [refCount](neuroglancer_util_mouse_bindings.MouseEventBinder.md#refcount)
- [target](neuroglancer_util_mouse_bindings.MouseEventBinder.md#target)
- [wasDisposed](neuroglancer_util_mouse_bindings.MouseEventBinder.md#wasdisposed)

### Methods

- [addRef](neuroglancer_util_mouse_bindings.MouseEventBinder.md#addref)
- [dispatch](neuroglancer_util_mouse_bindings.MouseEventBinder.md#dispatch)
- [dispose](neuroglancer_util_mouse_bindings.MouseEventBinder.md#dispose)
- [disposed](neuroglancer_util_mouse_bindings.MouseEventBinder.md#disposed)
- [refCountReachedZero](neuroglancer_util_mouse_bindings.MouseEventBinder.md#refcountreachedzero)
- [registerCancellable](neuroglancer_util_mouse_bindings.MouseEventBinder.md#registercancellable)
- [registerDisposer](neuroglancer_util_mouse_bindings.MouseEventBinder.md#registerdisposer)
- [registerEventListener](neuroglancer_util_mouse_bindings.MouseEventBinder.md#registereventlistener)
- [unregisterDisposer](neuroglancer_util_mouse_bindings.MouseEventBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new MouseEventBinder**<`EventMap`\>(`target`, `eventMap`, `commonHandler?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<`string`, [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md), `EventMap`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `eventMap` | `EventMap` |
| `commonHandler?` | (`event`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `void` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/mouse_bindings.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/mouse_bindings.ts#L28)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### eventMap

• **eventMap**: `EventMap`

#### Defined in

[src/neuroglancer/util/mouse_bindings.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/mouse_bindings.ts#L29)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### target

• **target**: [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

#### Defined in

[src/neuroglancer/util/mouse_bindings.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/mouse_bindings.ts#L29)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`MouseEventBinder`](neuroglancer_util_mouse_bindings.MouseEventBinder.md)<`EventMap`\>

#### Returns

[`MouseEventBinder`](neuroglancer_util_mouse_bindings.MouseEventBinder.md)<`EventMap`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispatch

▸ `Private` **dispatch**(`baseIdentifier`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseIdentifier` | `string` |
| `event` | [`MouseEvent`](../modules/main_module._internal_.md#mouseevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/mouse_bindings.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/mouse_bindings.ts#L25)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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
