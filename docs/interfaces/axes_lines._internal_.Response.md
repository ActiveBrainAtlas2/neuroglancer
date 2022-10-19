[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Response

# Interface: Response

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Response

This Fetch API interface represents the response to a request.

## Hierarchy

- [`Body`](axes_lines._internal_.Body.md)

  ↳ **`Response`**

## Table of contents

### Properties

- [body](axes_lines._internal_.Response.md#body)
- [bodyUsed](axes_lines._internal_.Response.md#bodyused)
- [headers](axes_lines._internal_.Response.md#headers)
- [ok](axes_lines._internal_.Response.md#ok)
- [redirected](axes_lines._internal_.Response.md#redirected)
- [status](axes_lines._internal_.Response.md#status)
- [statusText](axes_lines._internal_.Response.md#statustext)
- [type](axes_lines._internal_.Response.md#type)
- [url](axes_lines._internal_.Response.md#url)

### Methods

- [arrayBuffer](axes_lines._internal_.Response.md#arraybuffer)
- [blob](axes_lines._internal_.Response.md#blob)
- [clone](axes_lines._internal_.Response.md#clone)
- [formData](axes_lines._internal_.Response.md#formdata)
- [json](axes_lines._internal_.Response.md#json)
- [text](axes_lines._internal_.Response.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`Uint8Array`\>

#### Inherited from

[Body](axes_lines._internal_.Body.md).[body](axes_lines._internal_.Body.md#body)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2501

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

[Body](axes_lines._internal_.Body.md).[bodyUsed](axes_lines._internal_.Body.md#bodyused)

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

• `Readonly` **type**: [`ResponseType`](../modules/axes_lines._internal_.md#responsetype)

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

[Body](axes_lines._internal_.Body.md).[arrayBuffer](axes_lines._internal_.Body.md#arraybuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2503

___

### blob

▸ **blob**(): `Promise`<[`Blob`](../modules/axes_lines._internal_.md#blob)\>

#### Returns

`Promise`<[`Blob`](../modules/axes_lines._internal_.md#blob)\>

#### Inherited from

[Body](axes_lines._internal_.Body.md).[blob](axes_lines._internal_.Body.md#blob)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2504

___

### clone

▸ **clone**(): [`Response`](../modules/axes_lines._internal_.md#response)

#### Returns

[`Response`](../modules/axes_lines._internal_.md#response)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11624

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

[Body](axes_lines._internal_.Body.md).[formData](axes_lines._internal_.Body.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2505

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

[Body](axes_lines._internal_.Body.md).[json](axes_lines._internal_.Body.md#json)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2506

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[Body](axes_lines._internal_.Body.md).[text](axes_lines._internal_.Body.md#text)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2507
