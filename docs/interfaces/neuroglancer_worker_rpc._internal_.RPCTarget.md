[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/worker\_rpc](../modules/neuroglancer_worker_rpc.md) / [<internal\>](../modules/neuroglancer_worker_rpc._internal_.md) / RPCTarget

# Interface: RPCTarget

[neuroglancer/worker_rpc](../modules/neuroglancer_worker_rpc.md).[<internal>](../modules/neuroglancer_worker_rpc._internal_.md).RPCTarget

## Table of contents

### Properties

- [onmessage](neuroglancer_worker_rpc._internal_.RPCTarget.md#onmessage)

### Methods

- [postMessage](neuroglancer_worker_rpc._internal_.RPCTarget.md#postmessage)

## Properties

### onmessage

• **onmessage**: ``null`` \| (`ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

[src/neuroglancer/worker_rpc.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L95)

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

[src/neuroglancer/worker_rpc.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L94)
