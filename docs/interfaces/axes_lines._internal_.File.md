[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / File

# Interface: File

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).File

Provides information about files and allows JavaScript in a web page to access their content.

## Hierarchy

- [`Blob`](../modules/axes_lines._internal_.md#blob)

  ↳ **`File`**

## Table of contents

### Properties

- [lastModified](axes_lines._internal_.File.md#lastmodified)
- [name](axes_lines._internal_.File.md#name)
- [size](axes_lines._internal_.File.md#size)
- [type](axes_lines._internal_.File.md#type)
- [webkitRelativePath](axes_lines._internal_.File.md#webkitrelativepath)

### Methods

- [arrayBuffer](axes_lines._internal_.File.md#arraybuffer)
- [slice](axes_lines._internal_.File.md#slice)
- [stream](axes_lines._internal_.File.md#stream)
- [text](axes_lines._internal_.File.md#text)

## Properties

### lastModified

• `Readonly` **lastModified**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5164

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5165

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Blob.size

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2477

___

### type

• `Readonly` **type**: `string`

#### Inherited from

Blob.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2478

___

### webkitRelativePath

• `Readonly` **webkitRelativePath**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5166

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Blob.arrayBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2479

___

### slice

▸ **slice**(`start?`, `end?`, `contentType?`): [`Blob`](../modules/axes_lines._internal_.md#blob)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

[`Blob`](../modules/axes_lines._internal_.md#blob)

#### Inherited from

Blob.slice

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2480

___

### stream

▸ **stream**(): [`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`Uint8Array`\>

#### Returns

[`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`Uint8Array`\>

#### Inherited from

Blob.stream

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2481

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

Blob.text

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2482
