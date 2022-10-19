[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Blob

# Interface: Blob

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Blob

A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.

## Table of contents

### Properties

- [size](annotation_annotation_layer_state._internal_.Blob.md#size)
- [type](annotation_annotation_layer_state._internal_.Blob.md#type)

### Methods

- [arrayBuffer](annotation_annotation_layer_state._internal_.Blob.md#arraybuffer)
- [slice](annotation_annotation_layer_state._internal_.Blob.md#slice)
- [stream](annotation_annotation_layer_state._internal_.Blob.md#stream)
- [text](annotation_annotation_layer_state._internal_.Blob.md#text)

## Properties

### size

• `Readonly` **size**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2477

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2478

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2479

___

### slice

▸ **slice**(`start?`, `end?`, `contentType?`): [`Blob`](../modules/annotation_annotation_layer_state._internal_.md#blob)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

[`Blob`](../modules/annotation_annotation_layer_state._internal_.md#blob)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2480

___

### stream

▸ **stream**(): [`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`Uint8Array`\>

#### Returns

[`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`Uint8Array`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2481

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2482
