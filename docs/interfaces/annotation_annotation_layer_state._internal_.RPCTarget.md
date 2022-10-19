[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / RPCTarget

# Interface: RPCTarget

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).RPCTarget

## Table of contents

### Properties

- [onmessage](annotation_annotation_layer_state._internal_.RPCTarget.md#onmessage)

### Methods

- [postMessage](annotation_annotation_layer_state._internal_.RPCTarget.md#postmessage)

## Properties

### onmessage

• **onmessage**: ``null`` \| (`ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

[src/neuroglancer/worker_rpc.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L95)

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

[src/neuroglancer/worker_rpc.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L94)
