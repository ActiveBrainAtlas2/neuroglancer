[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / Body

# Interface: Body

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).Body

## Hierarchy

- **`Body`**

  ↳ [`Response`](main_module._internal_.Response.md)

  ↳ [`Request`](main_module._internal_.Request.md)

## Table of contents

### Properties

- [body](main_module._internal_.Body.md#body)
- [bodyUsed](main_module._internal_.Body.md#bodyused)

### Methods

- [arrayBuffer](main_module._internal_.Body.md#arraybuffer)
- [blob](main_module._internal_.Body.md#blob)
- [formData](main_module._internal_.Body.md#formdata)
- [json](main_module._internal_.Body.md#json)
- [text](main_module._internal_.Body.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`Uint8Array`\>

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

▸ **blob**(): `Promise`<[`Blob`](../modules/main_module._internal_.md#blob)\>

#### Returns

`Promise`<[`Blob`](../modules/main_module._internal_.md#blob)\>

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
