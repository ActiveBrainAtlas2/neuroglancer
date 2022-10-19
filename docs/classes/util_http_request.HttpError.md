[neuroglancer](../README.md) / [Modules](../modules.md) / [util/http\_request](../modules/util_http_request.md) / HttpError

# Class: HttpError

[util/http_request](../modules/util_http_request.md).HttpError

## Hierarchy

- [`Error`](../modules/annotation_annotation_layer_state._internal_.md#error)

  ↳ **`HttpError`**

## Table of contents

### Constructors

- [constructor](util_http_request.HttpError.md#constructor)

### Properties

- [message](util_http_request.HttpError.md#message)
- [name](util_http_request.HttpError.md#name)
- [stack](util_http_request.HttpError.md#stack)
- [status](util_http_request.HttpError.md#status)
- [statusText](util_http_request.HttpError.md#statustext)
- [url](util_http_request.HttpError.md#url)
- [stackTraceLimit](util_http_request.HttpError.md#stacktracelimit)

### Methods

- [captureStackTrace](util_http_request.HttpError.md#capturestacktrace)
- [fromRequestError](util_http_request.HttpError.md#fromrequesterror)
- [fromResponse](util_http_request.HttpError.md#fromresponse)
- [prepareStackTrace](util_http_request.HttpError.md#preparestacktrace)

## Constructors

### constructor

• **new HttpError**(`url`, `status`, `statusText`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `status` | `number` |
| `statusText` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/util/http_request.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_request.ts#L25)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### status

• **status**: `number`

#### Defined in

[src/neuroglancer/util/http_request.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_request.ts#L22)

___

### statusText

• **statusText**: `string`

#### Defined in

[src/neuroglancer/util/http_request.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_request.ts#L23)

___

### url

• **url**: `string`

#### Defined in

[src/neuroglancer/util/http_request.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_request.ts#L21)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### fromRequestError

▸ `Static` **fromRequestError**(`input`, `error`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RequestInfo`](../modules/annotation_annotation_layer_state._internal_.md#requestinfo) |
| `error` | `unknown` |

#### Returns

`unknown`

#### Defined in

[src/neuroglancer/util/http_request.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_request.ts#L43)

___

### fromResponse

▸ `Static` **fromResponse**(`response`): [`HttpError`](util_http_request.HttpError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`Response`](../modules/annotation_annotation_layer_state._internal_.md#response) |

#### Returns

[`HttpError`](util_http_request.HttpError.md)

#### Defined in

[src/neuroglancer/util/http_request.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_request.ts#L39)

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/annotation_annotation_layer_state._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/datasource._internal_.CallSite.md)[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
