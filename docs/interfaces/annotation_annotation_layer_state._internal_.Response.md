[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Response

# Interface: Response

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Response

This Fetch API interface represents the response to a request.

## Hierarchy

- [`Body`](annotation_annotation_layer_state._internal_.Body.md)

  ↳ **`Response`**

## Table of contents

### Properties

- [body](annotation_annotation_layer_state._internal_.Response.md#body)
- [bodyUsed](annotation_annotation_layer_state._internal_.Response.md#bodyused)
- [headers](annotation_annotation_layer_state._internal_.Response.md#headers)
- [ok](annotation_annotation_layer_state._internal_.Response.md#ok)
- [redirected](annotation_annotation_layer_state._internal_.Response.md#redirected)
- [status](annotation_annotation_layer_state._internal_.Response.md#status)
- [statusText](annotation_annotation_layer_state._internal_.Response.md#statustext)
- [type](annotation_annotation_layer_state._internal_.Response.md#type)
- [url](annotation_annotation_layer_state._internal_.Response.md#url)

### Methods

- [arrayBuffer](annotation_annotation_layer_state._internal_.Response.md#arraybuffer)
- [blob](annotation_annotation_layer_state._internal_.Response.md#blob)
- [clone](annotation_annotation_layer_state._internal_.Response.md#clone)
- [formData](annotation_annotation_layer_state._internal_.Response.md#formdata)
- [json](annotation_annotation_layer_state._internal_.Response.md#json)
- [text](annotation_annotation_layer_state._internal_.Response.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`Uint8Array`\>

#### Inherited from

[Body](annotation_annotation_layer_state._internal_.Body.md).[body](annotation_annotation_layer_state._internal_.Body.md#body)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2501

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

[Body](annotation_annotation_layer_state._internal_.Body.md).[bodyUsed](annotation_annotation_layer_state._internal_.Body.md#bodyused)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2502

___

### headers

• `Readonly` **headers**: `Headers`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11617

___

### ok

• `Readonly` **ok**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11618

___

### redirected

• `Readonly` **redirected**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11619

___

### status

• `Readonly` **status**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11620

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11621

___

### type

• `Readonly` **type**: [`ResponseType`](../modules/annotation_annotation_layer_state._internal_.md#responsetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11622

___

### url

• `Readonly` **url**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11623

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

[Body](annotation_annotation_layer_state._internal_.Body.md).[arrayBuffer](annotation_annotation_layer_state._internal_.Body.md#arraybuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2503

___

### blob

▸ **blob**(): `Promise`<[`Blob`](../modules/annotation_annotation_layer_state._internal_.md#blob)\>

#### Returns

`Promise`<[`Blob`](../modules/annotation_annotation_layer_state._internal_.md#blob)\>

#### Inherited from

[Body](annotation_annotation_layer_state._internal_.Body.md).[blob](annotation_annotation_layer_state._internal_.Body.md#blob)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2504

___

### clone

▸ **clone**(): [`Response`](../modules/annotation_annotation_layer_state._internal_.md#response)

#### Returns

[`Response`](../modules/annotation_annotation_layer_state._internal_.md#response)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11624

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

[Body](annotation_annotation_layer_state._internal_.Body.md).[formData](annotation_annotation_layer_state._internal_.Body.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2505

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

[Body](annotation_annotation_layer_state._internal_.Body.md).[json](annotation_annotation_layer_state._internal_.Body.md#json)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2506

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[Body](annotation_annotation_layer_state._internal_.Body.md).[text](annotation_annotation_layer_state._internal_.Body.md#text)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2507
