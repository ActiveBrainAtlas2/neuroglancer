[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/worker\_rpc](../modules/neuroglancer_worker_rpc.md) / RPCError

# Class: RPCError

[neuroglancer/worker_rpc](../modules/neuroglancer_worker_rpc.md).RPCError

## Hierarchy

- [`Error`](../modules/main_module._internal_.md#error)

  ↳ **`RPCError`**

## Table of contents

### Constructors

- [constructor](neuroglancer_worker_rpc.RPCError.md#constructor)

### Properties

- [message](neuroglancer_worker_rpc.RPCError.md#message)
- [name](neuroglancer_worker_rpc.RPCError.md#name)
- [stack](neuroglancer_worker_rpc.RPCError.md#stack)
- [prepareStackTrace](neuroglancer_worker_rpc.RPCError.md#preparestacktrace)
- [stackTraceLimit](neuroglancer_worker_rpc.RPCError.md#stacktracelimit)

### Methods

- [captureStackTrace](neuroglancer_worker_rpc.RPCError.md#capturestacktrace)

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

[src/neuroglancer/worker_rpc.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L42)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

[src/neuroglancer/worker_rpc.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L42)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

[src/neuroglancer/worker_rpc.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L42)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: [`Error`](../modules/main_module._internal_.md#error), `stackTraces`: [`CallSite`](../interfaces/neuroglancer_datasource._internal_.CallSite.md)[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/main_module._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/neuroglancer_datasource._internal_.CallSite.md)[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

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
