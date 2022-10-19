[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Body

# Interface: Body

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Body

## Hierarchy

- **`Body`**

  ↳ [`Response`](annotation_annotation_layer_state._internal_.Response.md)

  ↳ [`Request`](annotation_annotation_layer_state._internal_.Request.md)

## Table of contents

### Properties

- [body](annotation_annotation_layer_state._internal_.Body.md#body)
- [bodyUsed](annotation_annotation_layer_state._internal_.Body.md#bodyused)

### Methods

- [arrayBuffer](annotation_annotation_layer_state._internal_.Body.md#arraybuffer)
- [blob](annotation_annotation_layer_state._internal_.Body.md#blob)
- [formData](annotation_annotation_layer_state._internal_.Body.md#formdata)
- [json](annotation_annotation_layer_state._internal_.Body.md#json)
- [text](annotation_annotation_layer_state._internal_.Body.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`Uint8Array`\>

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

▸ **blob**(): `Promise`<[`Blob`](../modules/annotation_annotation_layer_state._internal_.md#blob)\>

#### Returns

`Promise`<[`Blob`](../modules/annotation_annotation_layer_state._internal_.md#blob)\>

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
