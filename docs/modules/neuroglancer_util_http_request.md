[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/http\_request

# Module: neuroglancer/util/http\_request

## Table of contents

### Classes

- [HttpError](../classes/neuroglancer_util_http_request.HttpError.md)

### Type Aliases

- [ResponseTransform](neuroglancer_util_http_request.md#responsetransform)

### Functions

- [cancellableFetchOk](neuroglancer_util_http_request.md#cancellablefetchok)
- [fetchOk](neuroglancer_util_http_request.md#fetchok)
- [getByteRangeHeader](neuroglancer_util_http_request.md#getbyterangeheader)
- [isNotFoundError](neuroglancer_util_http_request.md#isnotfounderror)
- [parseUrl](neuroglancer_util_http_request.md#parseurl)
- [responseArrayBuffer](neuroglancer_util_http_request.md#responsearraybuffer)
- [responseJson](neuroglancer_util_http_request.md#responsejson)

## Type Aliases

### ResponseTransform

Ƭ **ResponseTransform**<`T`\>: (`response`: [`Response`](main_module._internal_.md#response)) => `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`response`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`Response`](main_module._internal_.md#response) |

##### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/util/http_request.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L82)

## Functions

### cancellableFetchOk

▸ **cancellableFetchOk**<`T`\>(`input`, `init`, `transformResponse`, `cancellationToken?`): `Promise`<`T`\>

Issues a `fetch` request in the same way as `fetchOk`, and returns the result of the promise
returned by `transformResponse`.

Additionally, the request may be cancelled through `cancellationToken`.

The `transformResponse` function should not do anything with the `Response` object after its
result becomes ready; otherwise, cancellation may not work as expected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | [`RequestInfo`](main_module._internal_.md#requestinfo) | `undefined` |
| `init` | [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](neuroglancer_util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/util/http_request.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L93)

___

### fetchOk

▸ **fetchOk**(`input`, `init?`): `Promise`<[`Response`](main_module._internal_.md#response)\>

Issues a `fetch` request.

If the request fails due to an HTTP status outside `[200, 300)`, throws an `HttpError`.  If the
request fails due to a network or CORS restriction, throws an `HttpError` with a `status` of `0`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RequestInfo`](main_module._internal_.md#requestinfo) |
| `init?` | [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) |

#### Returns

`Promise`<[`Response`](main_module._internal_.md#response)\>

#### Defined in

[src/neuroglancer/util/http_request.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L63)

___

### getByteRangeHeader

▸ **getByteRangeHeader**(`startOffset`, `endOffset`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startOffset` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |
| `endOffset` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Range` | `string` |

#### Defined in

[src/neuroglancer/util/http_request.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L112)

___

### isNotFoundError

▸ **isNotFoundError**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/http_request.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L132)

___

### parseUrl

▸ **parseUrl**(`url`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `path` | `string` |
| `protocol` | `string` |

#### Defined in

[src/neuroglancer/util/http_request.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L123)

___

### responseArrayBuffer

▸ **responseArrayBuffer**(`response`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`Response`](main_module._internal_.md#response) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[src/neuroglancer/util/http_request.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L74)

___

### responseJson

▸ **responseJson**(`response`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`Response`](main_module._internal_.md#response) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/util/http_request.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L78)
