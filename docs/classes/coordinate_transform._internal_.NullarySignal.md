[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / [<internal\>](../modules/coordinate_transform._internal_.md) / NullarySignal

# Class: NullarySignal

[coordinate_transform](../modules/coordinate_transform.md).[<internal>](../modules/coordinate_transform._internal_.md).NullarySignal

Simple specialization of Signal for the common case of a nullary handler signature.

## Hierarchy

- [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

  ↳ **`NullarySignal`**

## Table of contents

### Constructors

- [constructor](coordinate_transform._internal_.NullarySignal.md#constructor)

### Properties

- [count](coordinate_transform._internal_.NullarySignal.md#count)
- [dispatch](coordinate_transform._internal_.NullarySignal.md#dispatch)

### Methods

- [add](coordinate_transform._internal_.NullarySignal.md#add)
- [dispose](coordinate_transform._internal_.NullarySignal.md#dispose)
- [remove](coordinate_transform._internal_.NullarySignal.md#remove)

## Constructors

### constructor

• **new NullarySignal**()

#### Inherited from

[Signal](coordinate_transform._internal_.Signal.md).[constructor](coordinate_transform._internal_.Signal.md#constructor)

#### Defined in

[src/neuroglancer/util/signal.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L38)

## Properties

### count

• **count**: `number` = `0`

Count of number of times this signal has been dispatched.  This is incremented each time
`dispatch` is called prior to invoking the handlers.

#### Inherited from

[Signal](coordinate_transform._internal_.Signal.md).[count](coordinate_transform._internal_.Signal.md#count)

#### Defined in

[src/neuroglancer/util/signal.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L36)

___

### dispatch

• **dispatch**: () => `void`

Invokes each handler function with the same parameters (including `this`) with which it is
called.  Handlers are invoked in the order in which they were added.

#### Type declaration

▸ (): `void`

Invokes each handler function with the same parameters (including `this`) with which it is
called.  Handlers are invoked in the order in which they were added.

##### Returns

`void`

#### Inherited from

[Signal](coordinate_transform._internal_.Signal.md).[dispatch](coordinate_transform._internal_.Signal.md#dispatch)

#### Defined in

[src/neuroglancer/util/signal.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L78)

## Methods

### add

▸ **add**(`handler`): () => `boolean`

Add a handler function.  If `dispatch` is currently be called, then the new handler will be
called before `dispatch` returns.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` | The handler function to add. |

#### Returns

`fn`

A function that unregisters the handler.

▸ (): `boolean`

Add a handler function.  If `dispatch` is currently be called, then the new handler will be
called before `dispatch` returns.

##### Returns

`boolean`

A function that unregisters the handler.

#### Inherited from

[Signal](coordinate_transform._internal_.Signal.md).[add](coordinate_transform._internal_.Signal.md#add)

#### Defined in

[src/neuroglancer/util/signal.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L56)

___

### dispose

▸ **dispose**(): `void`

Disposes of resources.  No methods, including `dispatch`, may be invoked afterwards.

#### Returns

`void`

#### Inherited from

[Signal](coordinate_transform._internal_.Signal.md).[dispose](coordinate_transform._internal_.Signal.md#dispose)

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
| `handler` | () => `void` | Handler to remove. |

#### Returns

`boolean`

`true` if the handler was present, `false` otherwise.

#### Inherited from

[Signal](coordinate_transform._internal_.Signal.md).[remove](coordinate_transform._internal_.Signal.md#remove)

#### Defined in

[src/neuroglancer/util/signal.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L70)
