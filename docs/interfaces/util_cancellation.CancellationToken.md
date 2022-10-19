[neuroglancer](../README.md) / [Modules](../modules.md) / [util/cancellation](../modules/util_cancellation.md) / CancellationToken

# Interface: CancellationToken

[util/cancellation](../modules/util_cancellation.md).CancellationToken

Interface used by cancelable operations to monitor whether cancellation has occurred.

Note that this interface does not provide any way to trigger cancellation; for that,
CancellationTokenSource is used.

## Implemented by

- [`CancellationTokenSource`](../classes/util_cancellation.CancellationTokenSource.md)

## Table of contents

### Properties

- [isCanceled](util_cancellation.CancellationToken.md#iscanceled)

### Methods

- [add](util_cancellation.CancellationToken.md#add)
- [remove](util_cancellation.CancellationToken.md#remove)

## Properties

### isCanceled

• `Readonly` **isCanceled**: `boolean`

Indicates whether cancellation has occurred.

#### Defined in

[src/neuroglancer/util/cancellation.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L32)

## Methods

### add

▸ **add**(`handler`): () => `void`

Add a cancellation handler function.  The handler will be invoked synchronously if
this.isCanceled === true.  Otherwise, it will be invoked synchronously upon cancellation,
unless it is removed prior to cancellation.

The handler function must not throw any exceptions when called.

**`precondition`** The handler function must not already be registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` | The handler function to add. |

#### Returns

`fn`

A function that unregisters the handler.

▸ (): `void`

Add a cancellation handler function.  The handler will be invoked synchronously if
this.isCanceled === true.  Otherwise, it will be invoked synchronously upon cancellation,
unless it is removed prior to cancellation.

The handler function must not throw any exceptions when called.

**`precondition`** The handler function must not already be registered.

##### Returns

`void`

A function that unregisters the handler.

#### Defined in

[src/neuroglancer/util/cancellation.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L47)

___

### remove

▸ **remove**(`handler`): `void`

Unregister a cancellation handler function.  If this.isCanceled, or the specified handler
function has not been registered, then this function has no effect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/cancellation.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L53)
