[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/backend](../modules/chunk_manager_backend.md) / [<internal\>](../modules/chunk_manager_backend._internal_.md) / AvailableCapacity

# Class: AvailableCapacity

[chunk_manager/backend](../modules/chunk_manager_backend.md).[<internal>](../modules/chunk_manager_backend._internal_.md).AvailableCapacity

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AvailableCapacity`**

## Table of contents

### Constructors

- [constructor](chunk_manager_backend._internal_.AvailableCapacity.md#constructor)

### Properties

- [capacityChanged](chunk_manager_backend._internal_.AvailableCapacity.md#capacitychanged)
- [currentItems](chunk_manager_backend._internal_.AvailableCapacity.md#currentitems)
- [currentSize](chunk_manager_backend._internal_.AvailableCapacity.md#currentsize)
- [disposedStacks](chunk_manager_backend._internal_.AvailableCapacity.md#disposedstacks)
- [itemLimit](chunk_manager_backend._internal_.AvailableCapacity.md#itemlimit)
- [refCount](chunk_manager_backend._internal_.AvailableCapacity.md#refcount)
- [sizeLimit](chunk_manager_backend._internal_.AvailableCapacity.md#sizelimit)
- [wasDisposed](chunk_manager_backend._internal_.AvailableCapacity.md#wasdisposed)

### Accessors

- [availableItems](chunk_manager_backend._internal_.AvailableCapacity.md#availableitems)
- [availableSize](chunk_manager_backend._internal_.AvailableCapacity.md#availablesize)

### Methods

- [addRef](chunk_manager_backend._internal_.AvailableCapacity.md#addref)
- [adjust](chunk_manager_backend._internal_.AvailableCapacity.md#adjust)
- [dispose](chunk_manager_backend._internal_.AvailableCapacity.md#dispose)
- [disposed](chunk_manager_backend._internal_.AvailableCapacity.md#disposed)
- [refCountReachedZero](chunk_manager_backend._internal_.AvailableCapacity.md#refcountreachedzero)
- [registerCancellable](chunk_manager_backend._internal_.AvailableCapacity.md#registercancellable)
- [registerDisposer](chunk_manager_backend._internal_.AvailableCapacity.md#registerdisposer)
- [registerEventListener](chunk_manager_backend._internal_.AvailableCapacity.md#registereventlistener)
- [toString](chunk_manager_backend._internal_.AvailableCapacity.md#tostring)
- [unregisterDisposer](chunk_manager_backend._internal_.AvailableCapacity.md#unregisterdisposer)

## Constructors

### constructor

• **new AvailableCapacity**(`itemLimit`, `sizeLimit`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemLimit` | [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\> |
| `sizeLimit` | [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:547](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L547)

## Properties

### capacityChanged

• **capacityChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:545](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L545)

___

### currentItems

• **currentItems**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L543)

___

### currentSize

• **currentSize**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L542)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### itemLimit

• **itemLimit**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\>

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### sizeLimit

• **sizeLimit**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\>

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### availableItems

• `get` **availableItems**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:566](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L566)

___

### availableSize

• `get` **availableSize**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:563](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L563)

## Methods

### addRef

▸ **addRef**(): [`AvailableCapacity`](chunk_manager_backend._internal_.AvailableCapacity.md)

#### Returns

[`AvailableCapacity`](chunk_manager_backend._internal_.AvailableCapacity.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/chunk_manager/backend.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L558)

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

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:570](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L570)

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
