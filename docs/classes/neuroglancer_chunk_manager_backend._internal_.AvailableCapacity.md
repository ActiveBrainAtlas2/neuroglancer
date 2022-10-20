[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/backend](../modules/neuroglancer_chunk_manager_backend.md) / [<internal\>](../modules/neuroglancer_chunk_manager_backend._internal_.md) / AvailableCapacity

# Class: AvailableCapacity

[neuroglancer/chunk_manager/backend](../modules/neuroglancer_chunk_manager_backend.md).[<internal>](../modules/neuroglancer_chunk_manager_backend._internal_.md).AvailableCapacity

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

  ↳ **`AvailableCapacity`**

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#constructor)

### Properties

- [capacityChanged](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#capacitychanged)
- [currentItems](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#currentitems)
- [currentSize](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#currentsize)
- [disposedStacks](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#disposedstacks)
- [itemLimit](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#itemlimit)
- [refCount](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#refcount)
- [sizeLimit](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#sizelimit)
- [wasDisposed](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#wasdisposed)

### Accessors

- [availableItems](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#availableitems)
- [availableSize](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#availablesize)

### Methods

- [addRef](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#addref)
- [adjust](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#adjust)
- [dispose](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#dispose)
- [disposed](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#disposed)
- [refCountReachedZero](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#refcountreachedzero)
- [registerCancellable](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#registercancellable)
- [registerDisposer](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#registerdisposer)
- [registerEventListener](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#registereventlistener)
- [toString](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#tostring)
- [unregisterDisposer](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md#unregisterdisposer)

## Constructors

### constructor

• **new AvailableCapacity**(`itemLimit`, `sizeLimit`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemLimit` | [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\> |
| `sizeLimit` | [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:547](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L547)

## Properties

### capacityChanged

• **capacityChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:545](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L545)

___

### currentItems

• **currentItems**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L543)

___

### currentSize

• **currentSize**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L542)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### itemLimit

• **itemLimit**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L548)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### sizeLimit

• **sizeLimit**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:549](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L549)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### availableItems

• `get` **availableItems**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:566](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L566)

___

### availableSize

• `get` **availableSize**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:563](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L563)

## Methods

### addRef

▸ **addRef**(): [`AvailableCapacity`](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md)

#### Returns

[`AvailableCapacity`](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### adjust

▸ **adjust**(`items`, `size`): `void`

Adjust available capacity by the specified amounts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `number` |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L558)

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

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:570](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L570)

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
