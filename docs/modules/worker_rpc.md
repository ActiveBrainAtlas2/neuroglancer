[neuroglancer](../README.md) / [Modules](../modules.md) / worker\_rpc

# Module: worker\_rpc

## Table of contents

### Classes

- [RPC](../classes/worker_rpc.RPC.md)
- [RPCError](../classes/worker_rpc.RPCError.md)
- [SharedObject](../classes/worker_rpc.SharedObject.md)
- [SharedObjectCounterpart](../classes/worker_rpc.SharedObjectCounterpart.md)

### Interfaces

- [SharedObjectConstructor](../interfaces/worker_rpc.SharedObjectConstructor.md)

### Type Aliases

- [RPCHandler](worker_rpc.md#rpchandler)
- [RPCPromise](worker_rpc.md#rpcpromise)
- [RpcId](worker_rpc.md#rpcid)

### Variables

- [WORKER\_RPC\_ID](worker_rpc.md#worker_rpc_id)

### Functions

- [initializeSharedObjectCounterpart](worker_rpc.md#initializesharedobjectcounterpart)
- [registerPromiseRPC](worker_rpc.md#registerpromiserpc)
- [registerRPC](worker_rpc.md#registerrpc)
- [registerSharedObject](worker_rpc.md#registersharedobject)
- [registerSharedObjectOwner](worker_rpc.md#registersharedobjectowner)

## Type Aliases

### RPCHandler

Ƭ **RPCHandler**: (`this`: [`RPC`](../classes/worker_rpc.RPC.md), `x`: `any`) => `void`

#### Type declaration

▸ (`this`, `x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`RPC`](../classes/worker_rpc.RPC.md) |
| `x` | `any` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L20)

___

### RPCPromise

Ƭ **RPCPromise**<`T`\>: `Promise`<{ `transfers?`: `any`[] ; `value`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/neuroglancer/worker_rpc.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L39)

___

### RpcId

Ƭ **RpcId**: `number`

#### Defined in

[src/neuroglancer/worker_rpc.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L22)

## Variables

### WORKER\_RPC\_ID

• `Const` **WORKER\_RPC\_ID**: ``"Worker"``

#### Defined in

[src/neuroglancer/worker_rpc.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L286)

## Functions

### initializeSharedObjectCounterpart

▸ **initializeSharedObjectCounterpart**(`obj`, `rpc?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`SharedObject`](../classes/worker_rpc.SharedObject.md) |
| `rpc?` | [`RPC`](../classes/worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L248)

___

### registerPromiseRPC

▸ **registerPromiseRPC**<`T`\>(`key`, `handler`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `handler` | (`this`: [`RPC`](../classes/worker_rpc.RPC.md), `x`: `any`, `cancellationToken`: `CancellationToken`) => [`RPCPromise`](worker_rpc.md#rpcpromise)<`T`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L47)

___

### registerRPC

▸ **registerRPC**(`key`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `handler` | [`RPCHandler`](worker_rpc.md#rpchandler) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L35)

___

### registerSharedObject

▸ **registerSharedObject**(`identifier?`): (`constructorFunction`: [`SharedObjectConstructor`](../interfaces/worker_rpc.SharedObjectConstructor.md)) => `void`

Register a class as a SharedObject counterpart type under the specified identifier.

This is intended to be used as a decorator.

Also register the type as a SharedObject owner, which is useful if this type is also used as a
SharedObject owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier?` | `string` |

#### Returns

`fn`

▸ (`constructorFunction`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructorFunction` | [`SharedObjectConstructor`](../interfaces/worker_rpc.SharedObjectConstructor.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L321)

___

### registerSharedObjectOwner

▸ **registerSharedObjectOwner**(`identifier`): (`constructorFunction`: { `prototype`: { `RPC_TYPE_ID`: `string`  }  }) => `void`

Register a class as a SharedObject owner type under the specified identifier.

This is intended to be used as a decorator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`fn`

▸ (`constructorFunction`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructorFunction` | `Object` |
| `constructorFunction.prototype` | `Object` |
| `constructorFunction.prototype.RPC_TYPE_ID` | `string` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L307)
