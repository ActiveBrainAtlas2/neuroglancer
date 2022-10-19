[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/middleauth/credentials\_provider](../modules/neuroglancer_datasource_middleauth_credentials_provider.md) / UnverifiedApp

# Class: UnverifiedApp

[neuroglancer/datasource/middleauth/credentials_provider](../modules/neuroglancer_datasource_middleauth_credentials_provider.md).UnverifiedApp

## Hierarchy

- [`Error`](../modules/main_module._internal_.md#error)

  ↳ **`UnverifiedApp`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#constructor)

### Properties

- [message](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#message)
- [name](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#name)
- [stack](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#stack)
- [url](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#url)
- [stackTraceLimit](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#stacktracelimit)

### Methods

- [captureStackTrace](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#capturestacktrace)
- [prepareStackTrace](neuroglancer_datasource_middleauth_credentials_provider.UnverifiedApp.md#preparestacktrace)

## Constructors

### constructor

• **new UnverifiedApp**(`url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/datasource/middleauth/credentials_provider.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/middleauth/credentials_provider.ts#L135)

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

### url

• **url**: `string`

#### Defined in

[src/neuroglancer/datasource/middleauth/credentials_provider.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/middleauth/credentials_provider.ts#L133)

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

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/main_module._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/neuroglancer_datasource._internal_.CallSite.md)[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
