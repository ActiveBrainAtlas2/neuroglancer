[neuroglancer](../README.md) / [Modules](../modules.md) / [worker\_rpc](../modules/worker_rpc.md) / RPCError

# Class: RPCError

[worker_rpc](../modules/worker_rpc.md).RPCError

## Hierarchy

- [`Error`](../modules/axes_lines._internal_.md#error)

  ↳ **`RPCError`**

## Table of contents

### Constructors

- [constructor](worker_rpc.RPCError.md#constructor)

### Properties

- [message](worker_rpc.RPCError.md#message)
- [name](worker_rpc.RPCError.md#name)
- [stack](worker_rpc.RPCError.md#stack)
- [stackTraceLimit](worker_rpc.RPCError.md#stacktracelimit)

### Methods

- [captureStackTrace](worker_rpc.RPCError.md#capturestacktrace)
- [prepareStackTrace](worker_rpc.RPCError.md#preparestacktrace)

## Constructors

### constructor

• **new RPCError**(`name`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/worker_rpc.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L42)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/axes_lines._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/image_user_layer._internal_.CallSite.md)[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
