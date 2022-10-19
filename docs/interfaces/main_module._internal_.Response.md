[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / Response

# Interface: Response

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).Response

This Fetch API interface represents the response to a request.

## Hierarchy

- [`Body`](main_module._internal_.Body.md)

  ↳ **`Response`**

## Table of contents

### Properties

- [body](main_module._internal_.Response.md#body)
- [bodyUsed](main_module._internal_.Response.md#bodyused)
- [headers](main_module._internal_.Response.md#headers)
- [ok](main_module._internal_.Response.md#ok)
- [redirected](main_module._internal_.Response.md#redirected)
- [status](main_module._internal_.Response.md#status)
- [statusText](main_module._internal_.Response.md#statustext)
- [type](main_module._internal_.Response.md#type)
- [url](main_module._internal_.Response.md#url)

### Methods

- [arrayBuffer](main_module._internal_.Response.md#arraybuffer)
- [blob](main_module._internal_.Response.md#blob)
- [clone](main_module._internal_.Response.md#clone)
- [formData](main_module._internal_.Response.md#formdata)
- [json](main_module._internal_.Response.md#json)
- [text](main_module._internal_.Response.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`Uint8Array`\>

#### Inherited from

[Body](main_module._internal_.Body.md).[body](main_module._internal_.Body.md#body)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2501

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

[Body](main_module._internal_.Body.md).[bodyUsed](main_module._internal_.Body.md#bodyused)

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

• `Readonly` **type**: [`ResponseType`](../modules/main_module._internal_.md#responsetype)

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

[Body](main_module._internal_.Body.md).[arrayBuffer](main_module._internal_.Body.md#arraybuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2503

___

### blob

▸ **blob**(): `Promise`<[`Blob`](../modules/main_module._internal_.md#blob)\>

#### Returns

`Promise`<[`Blob`](../modules/main_module._internal_.md#blob)\>

#### Inherited from

[Body](main_module._internal_.Body.md).[blob](main_module._internal_.Body.md#blob)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2504

___

### clone

▸ **clone**(): [`Response`](../modules/main_module._internal_.md#response)

#### Returns

[`Response`](../modules/main_module._internal_.md#response)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11624

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

[Body](main_module._internal_.Body.md).[formData](main_module._internal_.Body.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2505

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

[Body](main_module._internal_.Body.md).[json](main_module._internal_.Body.md#json)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2506

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[Body](main_module._internal_.Body.md).[text](main_module._internal_.Body.md#text)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2507
