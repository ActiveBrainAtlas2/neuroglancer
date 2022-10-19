[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / RPC

# Class: RPC

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).RPC

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.RPC.md#constructor)

### Properties

- [nextId](annotation_annotation_layer_state._internal_.RPC.md#nextid)
- [objects](annotation_annotation_layer_state._internal_.RPC.md#objects)
- [target](annotation_annotation_layer_state._internal_.RPC.md#target)

### Accessors

- [numObjects](annotation_annotation_layer_state._internal_.RPC.md#numobjects)

### Methods

- [delete](annotation_annotation_layer_state._internal_.RPC.md#delete)
- [get](annotation_annotation_layer_state._internal_.RPC.md#get)
- [getOptionalRef](annotation_annotation_layer_state._internal_.RPC.md#getoptionalref)
- [getRef](annotation_annotation_layer_state._internal_.RPC.md#getref)
- [invoke](annotation_annotation_layer_state._internal_.RPC.md#invoke)
- [newId](annotation_annotation_layer_state._internal_.RPC.md#newid)
- [promiseInvoke](annotation_annotation_layer_state._internal_.RPC.md#promiseinvoke)
- [set](annotation_annotation_layer_state._internal_.RPC.md#set)

## Constructors

### constructor

• **new RPC**(`target`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`RPCTarget`](../interfaces/annotation_annotation_layer_state._internal_.RPCTarget.md) |

#### Defined in

[src/neuroglancer/worker_rpc.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L103)

## Properties

### nextId

• `Private` **nextId**: `number` = `INITIAL_RPC_ID`

#### Defined in

[src/neuroglancer/worker_rpc.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L102)

___

### objects

• `Private` **objects**: `Map`<`number`, `any`\>

#### Defined in

[src/neuroglancer/worker_rpc.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L101)

___

### target

• **target**: [`RPCTarget`](../interfaces/annotation_annotation_layer_state._internal_.RPCTarget.md)

## Accessors

### numObjects

• `get` **numObjects**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/worker_rpc.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L113)

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

[src/neuroglancer/worker_rpc.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L121)

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

[src/neuroglancer/worker_rpc.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L124)

___

### getOptionalRef

▸ **getOptionalRef**<`T`\>(`x`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.gen` | `number` |
| `x.id` | `number` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/neuroglancer/worker_rpc.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L135)

___

### getRef

▸ **getRef**<`T`\>(`x`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.gen` | `number` |
| `x.id` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/worker_rpc.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L127)

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

[src/neuroglancer/worker_rpc.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L144)

___

### newId

▸ **newId**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/worker_rpc.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L163)

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
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | `uncancelableToken` |
| `transfers?` | `any`[] | `undefined` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/worker_rpc.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L152)

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

[src/neuroglancer/worker_rpc.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L117)
