[neuroglancer](../README.md) / [Modules](../modules.md) / [worker\_rpc](../modules/worker_rpc.md) / [<internal\>](../modules/worker_rpc._internal_.md) / RPCTarget

# Interface: RPCTarget

[worker_rpc](../modules/worker_rpc.md).[<internal>](../modules/worker_rpc._internal_.md).RPCTarget

## Table of contents

### Properties

- [onmessage](worker_rpc._internal_.RPCTarget.md#onmessage)

### Methods

- [postMessage](worker_rpc._internal_.RPCTarget.md#postmessage)

## Properties

### onmessage

• **onmessage**: ``null`` \| (`ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

[src/neuroglancer/worker_rpc.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L95)

## Methods

### postMessage

▸ **postMessage**(`message?`, `ports?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `ports?` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/worker_rpc.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L94)
