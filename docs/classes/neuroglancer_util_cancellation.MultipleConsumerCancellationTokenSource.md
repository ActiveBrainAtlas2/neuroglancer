[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/cancellation](../modules/neuroglancer_util_cancellation.md) / MultipleConsumerCancellationTokenSource

# Class: MultipleConsumerCancellationTokenSource

[neuroglancer/util/cancellation](../modules/neuroglancer_util_cancellation.md).MultipleConsumerCancellationTokenSource

Creates a CancellationToken corresponding to an asynchronous process with multiple consumers.  It
is cancelled only when the cancellation tokens corresponding to all of the consumers have been
cancelled.

## Hierarchy

- [`CancellationTokenSource`](neuroglancer_util_cancellation.CancellationTokenSource.md)

  ↳ **`MultipleConsumerCancellationTokenSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md#constructor)

### Properties

- [consumers](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md#consumers)

### Accessors

- [isCanceled](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md#iscanceled)

### Methods

- [add](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md#add)
- [addConsumer](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md#addconsumer)
- [cancel](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md#cancel)
- [remove](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md#remove)

## Constructors

### constructor

• **new MultipleConsumerCancellationTokenSource**()

#### Inherited from

[CancellationTokenSource](neuroglancer_util_cancellation.CancellationTokenSource.md).[constructor](neuroglancer_util_cancellation.CancellationTokenSource.md#constructor)

## Properties

### consumers

• `Private` **consumers**: `Set`<[`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)\>

#### Defined in

[src/neuroglancer/util/cancellation.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/cancellation.ts#L147)

## Accessors

### isCanceled

• `get` **isCanceled**(): `boolean`

Indicates whether cancellation has occurred.

#### Returns

`boolean`

#### Inherited from

CancellationTokenSource.isCanceled

#### Defined in

[src/neuroglancer/util/cancellation.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/cancellation.ts#L112)

## Methods

### add

▸ **add**(`handler`): () => `void`

Add a cancellation handler function.  The handler will be invoked synchronously if
this.isCanceled === true.  Otherwise, it will be invoked synchronously upon cancellation,
unless it is removed prior to cancellation.

The handler function must not throw any exceptions when called.

**`Precondition`**

The handler function must not already be registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` | The handler function to add. |

#### Returns

`fn`

A function that unregisters the handler.

▸ (): `void`

##### Returns

`void`

#### Inherited from

[CancellationTokenSource](neuroglancer_util_cancellation.CancellationTokenSource.md).[add](neuroglancer_util_cancellation.CancellationTokenSource.md#add)

#### Defined in

[src/neuroglancer/util/cancellation.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/cancellation.ts#L118)

___

### addConsumer

▸ **addConsumer**(`cancellationToken?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/cancellation.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/cancellation.ts#L149)

___

### cancel

▸ **cancel**(): `void`

Trigger cancellation.

If this.isCanceled === false, then each registered cancellation handler is invoked
synchronously.

#### Returns

`void`

#### Inherited from

[CancellationTokenSource](neuroglancer_util_cancellation.CancellationTokenSource.md).[cancel](neuroglancer_util_cancellation.CancellationTokenSource.md#cancel)

#### Defined in

[src/neuroglancer/util/cancellation.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/cancellation.ts#L100)

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

#### Inherited from

[CancellationTokenSource](neuroglancer_util_cancellation.CancellationTokenSource.md).[remove](neuroglancer_util_cancellation.CancellationTokenSource.md#remove)

#### Defined in

[src/neuroglancer/util/cancellation.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/cancellation.ts#L133)
