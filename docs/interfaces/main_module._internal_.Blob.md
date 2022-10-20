[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / Blob

# Interface: Blob

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).Blob

A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.

## Table of contents

### Properties

- [size](main_module._internal_.Blob.md#size)
- [type](main_module._internal_.Blob.md#type)

### Methods

- [arrayBuffer](main_module._internal_.Blob.md#arraybuffer)
- [slice](main_module._internal_.Blob.md#slice)
- [stream](main_module._internal_.Blob.md#stream)
- [text](main_module._internal_.Blob.md#text)

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

▸ **slice**(`start?`, `end?`, `contentType?`): [`Blob`](../modules/main_module._internal_.md#blob)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

[`Blob`](../modules/main_module._internal_.md#blob)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2480

___

### stream

▸ **stream**(): [`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`Uint8Array`\>

#### Returns

[`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`Uint8Array`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2481

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2482
