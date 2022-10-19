[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Body

# Interface: Body

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Body

## Hierarchy

- **`Body`**

  ↳ [`Response`](axes_lines._internal_.Response.md)

  ↳ [`Request`](axes_lines._internal_.Request.md)

## Table of contents

### Properties

- [body](axes_lines._internal_.Body.md#body)
- [bodyUsed](axes_lines._internal_.Body.md#bodyused)

### Methods

- [arrayBuffer](axes_lines._internal_.Body.md#arraybuffer)
- [blob](axes_lines._internal_.Body.md#blob)
- [formData](axes_lines._internal_.Body.md#formdata)
- [json](axes_lines._internal_.Body.md#json)
- [text](axes_lines._internal_.Body.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`Uint8Array`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2501

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2502

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2503

___

### blob

▸ **blob**(): `Promise`<[`Blob`](../modules/axes_lines._internal_.md#blob)\>

#### Returns

`Promise`<[`Blob`](../modules/axes_lines._internal_.md#blob)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2504

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2505

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2506

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2507
