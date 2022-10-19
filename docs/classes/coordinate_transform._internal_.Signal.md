[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / [<internal\>](../modules/coordinate_transform._internal_.md) / Signal

# Class: Signal<Callable\>

[coordinate_transform](../modules/coordinate_transform.md).[<internal>](../modules/coordinate_transform._internal_.md).Signal

This class provides a simple signal dispatch mechanism.  Handlers can be added, and then the
`dispatch` method calls all of them.

If specified, Callable should be an interface containing only a callable signature returning
void.  Due to limitations in TypeScript, any interface containing a callable signature will be
accepted by the compiler, but the resultant signature of `dispatch` will not be correct.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Callable` | extends `Function` = () => `void` |

## Hierarchy

- **`Signal`**

  ↳ [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

## Table of contents

### Constructors

- [constructor](coordinate_transform._internal_.Signal.md#constructor)

### Properties

- [count](coordinate_transform._internal_.Signal.md#count)
- [dispatch](coordinate_transform._internal_.Signal.md#dispatch)
- [handlers](coordinate_transform._internal_.Signal.md#handlers)

### Methods

- [add](coordinate_transform._internal_.Signal.md#add)
- [dispose](coordinate_transform._internal_.Signal.md#dispose)
- [remove](coordinate_transform._internal_.Signal.md#remove)

## Constructors

### constructor

• **new Signal**<`Callable`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Callable` | extends `Function` = () => `void` |

#### Defined in

[src/neuroglancer/util/signal.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L38)

## Properties

### count

• **count**: `number` = `0`

Count of number of times this signal has been dispatched.  This is incremented each time
`dispatch` is called prior to invoking the handlers.

#### Defined in

[src/neuroglancer/util/signal.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L36)

___

### dispatch

• **dispatch**: `Callable`

Invokes each handler function with the same parameters (including `this`) with which it is
called.  Handlers are invoked in the order in which they were added.

#### Defined in

[src/neuroglancer/util/signal.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L78)

___

### handlers

• `Private` **handlers**: `Set`<`Callable`\>

#### Defined in

[src/neuroglancer/util/signal.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L30)

## Methods

### add

▸ **add**(`handler`): () => `boolean`

Add a handler function.  If `dispatch` is currently be called, then the new handler will be
called before `dispatch` returns.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `Callable` | The handler function to add. |

#### Returns

`fn`

A function that unregisters the handler.

▸ (): `boolean`

Add a handler function.  If `dispatch` is currently be called, then the new handler will be
called before `dispatch` returns.

##### Returns

`boolean`

A function that unregisters the handler.

#### Defined in

[src/neuroglancer/util/signal.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L56)

___

### dispose

▸ **dispose**(): `void`

Disposes of resources.  No methods, including `dispatch`, may be invoked afterwards.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/signal.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L83)

___

### remove

▸ **remove**(`handler`): `boolean`

Remove a handler function.  If `dispatch` is currently be called and the new handler has not
yet been called, then it will not be called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `Callable` | Handler to remove. |

#### Returns

`boolean`

`true` if the handler was present, `false` otherwise.

#### Defined in

[src/neuroglancer/util/signal.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L70)
