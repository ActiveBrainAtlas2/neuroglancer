[neuroglancer](../README.md) / [Modules](../modules.md) / [worker\_rpc](../modules/worker_rpc.md) / RPC

# Class: RPC

[worker_rpc](../modules/worker_rpc.md).RPC

## Table of contents

### Constructors

- [constructor](worker_rpc.RPC.md#constructor)

### Properties

- [nextId](worker_rpc.RPC.md#nextid)
- [objects](worker_rpc.RPC.md#objects)
- [target](worker_rpc.RPC.md#target)

### Accessors

- [numObjects](worker_rpc.RPC.md#numobjects)

### Methods

- [delete](worker_rpc.RPC.md#delete)
- [get](worker_rpc.RPC.md#get)
- [getOptionalRef](worker_rpc.RPC.md#getoptionalref)
- [getRef](worker_rpc.RPC.md#getref)
- [invoke](worker_rpc.RPC.md#invoke)
- [newId](worker_rpc.RPC.md#newid)
- [promiseInvoke](worker_rpc.RPC.md#promiseinvoke)
- [set](worker_rpc.RPC.md#set)

## Constructors

### constructor

• **new RPC**(`target`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `RPCTarget` |

#### Defined in

[src/neuroglancer/worker_rpc.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L103)

## Properties

### nextId

• `Private` **nextId**: `number` = `INITIAL_RPC_ID`

#### Defined in

[src/neuroglancer/worker_rpc.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L102)

___

### objects

• `Private` **objects**: `Map`<`number`, `any`\>

#### Defined in

[src/neuroglancer/worker_rpc.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L101)

___

### target

• **target**: `RPCTarget`

## Accessors

### numObjects

• `get` **numObjects**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/worker_rpc.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L113)

## Methods

### delete

▸ **delete**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L121)

___

### get

▸ **get**(`id`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/worker_rpc.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L124)

___

### getOptionalRef

▸ **getOptionalRef**<`T`\>(`x`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SharedObject`](worker_rpc.SharedObject.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.gen` | `number` |
| `x.id` | `number` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/neuroglancer/worker_rpc.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L135)

___

### getRef

▸ **getRef**<`T`\>(`x`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SharedObject`](worker_rpc.SharedObject.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.gen` | `number` |
| `x.id` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/worker_rpc.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L127)

___

### invoke

▸ **invoke**(`name`, `x`, `transfers?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `x` | `any` |
| `transfers?` | `any`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L144)

___

### newId

▸ **newId**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/worker_rpc.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L163)

___

### promiseInvoke

▸ **promiseInvoke**<`T`\>(`name`, `x`, `cancellationToken?`, `transfers?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `x` | `any` | `undefined` |
| `cancellationToken` | `CancellationToken` | `uncancelableToken` |
| `transfers?` | `any`[] | `undefined` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/worker_rpc.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L152)

___

### set

▸ **set**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L117)
