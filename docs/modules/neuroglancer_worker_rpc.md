[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/worker\_rpc

# Module: neuroglancer/worker\_rpc

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_worker_rpc._internal_.md)

### Classes

- [RPC](../classes/neuroglancer_worker_rpc.RPC.md)
- [RPCError](../classes/neuroglancer_worker_rpc.RPCError.md)
- [SharedObject](../classes/neuroglancer_worker_rpc.SharedObject.md)
- [SharedObjectCounterpart](../classes/neuroglancer_worker_rpc.SharedObjectCounterpart.md)

### Interfaces

- [SharedObjectConstructor](../interfaces/neuroglancer_worker_rpc.SharedObjectConstructor.md)

### Type Aliases

- [RPCHandler](neuroglancer_worker_rpc.md#rpchandler)
- [RPCPromise](neuroglancer_worker_rpc.md#rpcpromise)
- [RpcId](neuroglancer_worker_rpc.md#rpcid)

### Variables

- [WORKER\_RPC\_ID](neuroglancer_worker_rpc.md#worker_rpc_id)

### Functions

- [initializeSharedObjectCounterpart](neuroglancer_worker_rpc.md#initializesharedobjectcounterpart)
- [registerPromiseRPC](neuroglancer_worker_rpc.md#registerpromiserpc)
- [registerRPC](neuroglancer_worker_rpc.md#registerrpc)
- [registerSharedObject](neuroglancer_worker_rpc.md#registersharedobject)
- [registerSharedObjectOwner](neuroglancer_worker_rpc.md#registersharedobjectowner)

## Type Aliases

### RPCHandler

Ƭ **RPCHandler**: (`this`: [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md), `x`: `any`) => `void`

#### Type declaration

▸ (`this`, `x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `x` | `any` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L20)

___

### RPCPromise

Ƭ **RPCPromise**<`T`\>: `Promise`<{ `transfers?`: `any`[] ; `value`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/neuroglancer/worker_rpc.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L39)

___

### RpcId

Ƭ **RpcId**: `number`

#### Defined in

[src/neuroglancer/worker_rpc.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L22)

## Variables

### WORKER\_RPC\_ID

• `Const` **WORKER\_RPC\_ID**: ``"Worker"``

#### Defined in

[src/neuroglancer/worker_rpc.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L286)

## Functions

### initializeSharedObjectCounterpart

▸ **initializeSharedObjectCounterpart**(`obj`, `rpc?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`SharedObject`](../classes/neuroglancer_worker_rpc.SharedObject.md) |
| `rpc?` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L248)

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
| `handler` | (`this`: [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md), `x`: `any`, `cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => [`RPCPromise`](neuroglancer_worker_rpc.md#rpcpromise)<`T`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L47)

___

### registerRPC

▸ **registerRPC**(`key`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `handler` | [`RPCHandler`](neuroglancer_worker_rpc.md#rpchandler) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L35)

___

### registerSharedObject

▸ **registerSharedObject**(`identifier?`): (`constructorFunction`: [`SharedObjectConstructor`](../interfaces/neuroglancer_worker_rpc.SharedObjectConstructor.md)) => `void`

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
| `constructorFunction` | [`SharedObjectConstructor`](../interfaces/neuroglancer_worker_rpc.SharedObjectConstructor.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L321)

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

[src/neuroglancer/worker_rpc.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L307)
