[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / CancellationTokenSource

# Class: CancellationTokenSource

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).CancellationTokenSource

Class that can be used to trigger cancellation.

## Implements

- [`CancellationToken`](../interfaces/layer._internal_.CancellationToken.md)

## Table of contents

### Constructors

- [constructor](viewer._internal_.CancellationTokenSource.md#constructor)

### Properties

- [handlers](viewer._internal_.CancellationTokenSource.md#handlers)

### Accessors

- [isCanceled](viewer._internal_.CancellationTokenSource.md#iscanceled)

### Methods

- [add](viewer._internal_.CancellationTokenSource.md#add)
- [cancel](viewer._internal_.CancellationTokenSource.md#cancel)
- [remove](viewer._internal_.CancellationTokenSource.md#remove)

## Constructors

### constructor

• **new CancellationTokenSource**()

## Properties

### handlers

• `Private` **handlers**: `undefined` \| ``null`` \| `Set`<() => `void`\>

#### Defined in

[src/neuroglancer/util/cancellation.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/cancellation.ts#L116)

## Accessors

### isCanceled

• `get` **isCanceled**(): `boolean`

Indicates whether cancellation has occurred.

#### Returns

`boolean`

#### Implementation of

[CancellationToken](../interfaces/layer._internal_.CancellationToken.md).[isCanceled](../interfaces/layer._internal_.CancellationToken.md#iscanceled)

#### Defined in

[src/neuroglancer/util/cancellation.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/cancellation.ts#L112)

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

[CancellationToken](../interfaces/layer._internal_.CancellationToken.md).[add](../interfaces/layer._internal_.CancellationToken.md#add)

#### Defined in

[src/neuroglancer/util/cancellation.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/cancellation.ts#L118)

___

### cancel

▸ **cancel**(): `void`

Trigger cancellation.

If this.isCanceled === false, then each registered cancellation handler is invoked
synchronously.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/cancellation.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/cancellation.ts#L100)

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

[CancellationToken](../interfaces/layer._internal_.CancellationToken.md).[remove](../interfaces/layer._internal_.CancellationToken.md#remove)

#### Defined in

[src/neuroglancer/util/cancellation.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/cancellation.ts#L133)
