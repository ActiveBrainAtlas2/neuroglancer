[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/http\_request](../modules/neuroglancer_util_http_request.md) / HttpError

# Class: HttpError

[neuroglancer/util/http_request](../modules/neuroglancer_util_http_request.md).HttpError

## Hierarchy

- [`Error`](../modules/main_module._internal_.md#error)

  ↳ **`HttpError`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_http_request.HttpError.md#constructor)

### Properties

- [message](neuroglancer_util_http_request.HttpError.md#message)
- [name](neuroglancer_util_http_request.HttpError.md#name)
- [stack](neuroglancer_util_http_request.HttpError.md#stack)
- [status](neuroglancer_util_http_request.HttpError.md#status)
- [statusText](neuroglancer_util_http_request.HttpError.md#statustext)
- [url](neuroglancer_util_http_request.HttpError.md#url)
- [prepareStackTrace](neuroglancer_util_http_request.HttpError.md#preparestacktrace)
- [stackTraceLimit](neuroglancer_util_http_request.HttpError.md#stacktracelimit)

### Methods

- [captureStackTrace](neuroglancer_util_http_request.HttpError.md#capturestacktrace)
- [fromRequestError](neuroglancer_util_http_request.HttpError.md#fromrequesterror)
- [fromResponse](neuroglancer_util_http_request.HttpError.md#fromresponse)

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

[src/neuroglancer/util/http_request.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L25)

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

[src/neuroglancer/util/http_request.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L22)

___

### statusText

• **statusText**: `string`

#### Defined in

[src/neuroglancer/util/http_request.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L23)

___

### url

• **url**: `string`

#### Defined in

[src/neuroglancer/util/http_request.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L21)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: [`Error`](../modules/main_module._internal_.md#error), `stackTraces`: [`CallSite`](../interfaces/neuroglancer_datasource._internal_.CallSite.md)[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/main_module._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/neuroglancer_datasource._internal_.CallSite.md)[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

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
| `input` | [`RequestInfo`](../modules/main_module._internal_.md#requestinfo) |
| `error` | `unknown` |

#### Returns

`unknown`

#### Defined in

[src/neuroglancer/util/http_request.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L43)

___

### fromResponse

▸ `Static` **fromResponse**(`response`): [`HttpError`](neuroglancer_util_http_request.HttpError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`Response`](../modules/main_module._internal_.md#response) |

#### Returns

[`HttpError`](neuroglancer_util_http_request.HttpError.md)

#### Defined in

[src/neuroglancer/util/http_request.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/http_request.ts#L39)
