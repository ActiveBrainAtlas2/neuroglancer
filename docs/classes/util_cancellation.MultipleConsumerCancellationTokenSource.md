[neuroglancer](../README.md) / [Modules](../modules.md) / [util/cancellation](../modules/util_cancellation.md) / MultipleConsumerCancellationTokenSource

# Class: MultipleConsumerCancellationTokenSource

[util/cancellation](../modules/util_cancellation.md).MultipleConsumerCancellationTokenSource

Creates a CancellationToken corresponding to an asynchronous process with multiple consumers.  It
is cancelled only when the cancellation tokens corresponding to all of the consumers have been
cancelled.

## Hierarchy

- [`CancellationTokenSource`](util_cancellation.CancellationTokenSource.md)

  ↳ **`MultipleConsumerCancellationTokenSource`**

## Table of contents

### Constructors

- [constructor](util_cancellation.MultipleConsumerCancellationTokenSource.md#constructor)

### Properties

- [consumers](util_cancellation.MultipleConsumerCancellationTokenSource.md#consumers)

### Accessors

- [isCanceled](util_cancellation.MultipleConsumerCancellationTokenSource.md#iscanceled)

### Methods

- [add](util_cancellation.MultipleConsumerCancellationTokenSource.md#add)
- [addConsumer](util_cancellation.MultipleConsumerCancellationTokenSource.md#addconsumer)
- [cancel](util_cancellation.MultipleConsumerCancellationTokenSource.md#cancel)
- [remove](util_cancellation.MultipleConsumerCancellationTokenSource.md#remove)

## Constructors

### constructor

• **new MultipleConsumerCancellationTokenSource**()

#### Inherited from

[CancellationTokenSource](util_cancellation.CancellationTokenSource.md).[constructor](util_cancellation.CancellationTokenSource.md#constructor)

## Properties

### consumers

• `Private` **consumers**: `Set`<[`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)\>

#### Defined in

[src/neuroglancer/util/cancellation.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L147)

## Accessors

### isCanceled

• `get` **isCanceled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CancellationTokenSource.isCanceled

#### Defined in

[src/neuroglancer/util/cancellation.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L112)

## Methods

### add

▸ **add**(`handler`): () => `void`

Add a cancellation handler function.  The handler will be invoked synchronously if
this.isCanceled === true.  Otherwise, it will be invoked synchronously upon cancellation,
unless it is removed prior to cancellation.

The handler function must not throw any exceptions when called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | () => `void` |

#### Returns

`fn`

A function that unregisters the handler.

▸ (): `void`

##### Returns

`void`

#### Inherited from

[CancellationTokenSource](util_cancellation.CancellationTokenSource.md).[add](util_cancellation.CancellationTokenSource.md#add)

#### Defined in

[src/neuroglancer/util/cancellation.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L118)

___

### addConsumer

▸ **addConsumer**(`cancellationToken?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/cancellation.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L149)

___

### cancel

▸ **cancel**(): `void`

Trigger cancellation.

If this.isCanceled === false, then each registered cancellation handler is invoked
synchronously.

#### Returns

`void`

#### Inherited from

[CancellationTokenSource](util_cancellation.CancellationTokenSource.md).[cancel](util_cancellation.CancellationTokenSource.md#cancel)

#### Defined in

[src/neuroglancer/util/cancellation.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L100)

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

[CancellationTokenSource](util_cancellation.CancellationTokenSource.md).[remove](util_cancellation.CancellationTokenSource.md#remove)

#### Defined in

[src/neuroglancer/util/cancellation.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L133)
