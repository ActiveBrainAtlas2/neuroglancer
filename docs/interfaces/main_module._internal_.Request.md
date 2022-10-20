[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / Request

# Interface: Request

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).Request

This Fetch API interface represents a resource request.

## Hierarchy

- [`Body`](main_module._internal_.Body.md)

  ↳ **`Request`**

## Table of contents

### Properties

- [body](main_module._internal_.Request.md#body)
- [bodyUsed](main_module._internal_.Request.md#bodyused)
- [cache](main_module._internal_.Request.md#cache)
- [credentials](main_module._internal_.Request.md#credentials)
- [destination](main_module._internal_.Request.md#destination)
- [headers](main_module._internal_.Request.md#headers)
- [integrity](main_module._internal_.Request.md#integrity)
- [keepalive](main_module._internal_.Request.md#keepalive)
- [method](main_module._internal_.Request.md#method)
- [mode](main_module._internal_.Request.md#mode)
- [redirect](main_module._internal_.Request.md#redirect)
- [referrer](main_module._internal_.Request.md#referrer)
- [referrerPolicy](main_module._internal_.Request.md#referrerpolicy)
- [signal](main_module._internal_.Request.md#signal)
- [url](main_module._internal_.Request.md#url)

### Methods

- [arrayBuffer](main_module._internal_.Request.md#arraybuffer)
- [blob](main_module._internal_.Request.md#blob)
- [clone](main_module._internal_.Request.md#clone)
- [formData](main_module._internal_.Request.md#formdata)
- [json](main_module._internal_.Request.md#json)
- [text](main_module._internal_.Request.md#text)

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

### cache

• `Readonly` **cache**: [`RequestCache`](../modules/main_module._internal_.md#requestcache)

Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11548

___

### credentials

• `Readonly` **credentials**: [`RequestCredentials`](../modules/main_module._internal_.md#requestcredentials)

Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11550

___

### destination

• `Readonly` **destination**: [`RequestDestination`](../modules/main_module._internal_.md#requestdestination)

Returns the kind of resource requested by request, e.g., "document" or "script".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11552

___

### headers

• `Readonly` **headers**: `Headers`

Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11554

___

### integrity

• `Readonly` **integrity**: `string`

Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11556

___

### keepalive

• `Readonly` **keepalive**: `boolean`

Returns a boolean indicating whether or not request can outlive the global in which it was created.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11558

___

### method

• `Readonly` **method**: `string`

Returns request's HTTP method, which is "GET" by default.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11560

___

### mode

• `Readonly` **mode**: [`RequestMode`](../modules/main_module._internal_.md#requestmode)

Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11562

___

### redirect

• `Readonly` **redirect**: [`RequestRedirect`](../modules/main_module._internal_.md#requestredirect)

Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11564

___

### referrer

• `Readonly` **referrer**: `string`

Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the `Referer` header of the request being made.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11566

___

### referrerPolicy

• `Readonly` **referrerPolicy**: [`ReferrerPolicy`](../modules/main_module._internal_.md#referrerpolicy)

Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11568

___

### signal

• `Readonly` **signal**: `AbortSignal`

Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11570

___

### url

• `Readonly` **url**: `string`

Returns the URL of request as a string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11572

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

▸ **clone**(): [`Request`](../modules/main_module._internal_.md#request)

#### Returns

[`Request`](../modules/main_module._internal_.md#request)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11573

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
