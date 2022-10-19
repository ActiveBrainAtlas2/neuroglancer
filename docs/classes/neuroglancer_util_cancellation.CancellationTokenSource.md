[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/cancellation](../modules/neuroglancer_util_cancellation.md) / CancellationTokenSource

# Class: CancellationTokenSource

[neuroglancer/util/cancellation](../modules/neuroglancer_util_cancellation.md).CancellationTokenSource

Class that can be used to trigger cancellation.

## Hierarchy

- **`CancellationTokenSource`**

  ↳ [`MultipleConsumerCancellationTokenSource`](neuroglancer_util_cancellation.MultipleConsumerCancellationTokenSource.md)

## Implements

- [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_cancellation.CancellationTokenSource.md#constructor)

### Properties

- [handlers](neuroglancer_util_cancellation.CancellationTokenSource.md#handlers)

### Accessors

- [isCanceled](neuroglancer_util_cancellation.CancellationTokenSource.md#iscanceled)

### Methods

- [add](neuroglancer_util_cancellation.CancellationTokenSource.md#add)
- [cancel](neuroglancer_util_cancellation.CancellationTokenSource.md#cancel)
- [remove](neuroglancer_util_cancellation.CancellationTokenSource.md#remove)

## Constructors

### constructor

• **new CancellationTokenSource**()

## Properties

### handlers

• `Private` **handlers**: `undefined` \| ``null`` \| `Set`<() => `void`\>

#### Defined in

[src/neuroglancer/util/cancellation.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/cancellation.ts#L116)

## Accessors

### isCanceled

• `get` **isCanceled**(): `boolean`

Indicates whether cancellation has occurred.

#### Returns

`boolean`

#### Implementation of

[CancellationToken](../interfaces/neuroglancer_util_cancellation.CancellationToken.md).[isCanceled](../interfaces/neuroglancer_util_cancellation.CancellationToken.md#iscanceled)

#### Defined in

[src/neuroglancer/util/cancellation.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/cancellation.ts#L112)

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

#### Implementation of

[CancellationToken](../interfaces/neuroglancer_util_cancellation.CancellationToken.md).[add](../interfaces/neuroglancer_util_cancellation.CancellationToken.md#add)

#### Defined in

[src/neuroglancer/util/cancellation.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/cancellation.ts#L118)

___

### cancel

▸ **cancel**(): `void`

Trigger cancellation.

If this.isCanceled === false, then each registered cancellation handler is invoked
synchronously.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/cancellation.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/cancellation.ts#L100)

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

#### Implementation of

[CancellationToken](../interfaces/neuroglancer_util_cancellation.CancellationToken.md).[remove](../interfaces/neuroglancer_util_cancellation.CancellationToken.md#remove)

#### Defined in

[src/neuroglancer/util/cancellation.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/cancellation.ts#L133)
