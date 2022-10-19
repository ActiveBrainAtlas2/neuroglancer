[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / RedirectError

# Class: RedirectError

[datasource](../modules/datasource.md).RedirectError

## Hierarchy

- [`Error`](../modules/annotation_annotation_layer_state._internal_.md#error)

  ↳ **`RedirectError`**

## Table of contents

### Constructors

- [constructor](datasource.RedirectError.md#constructor)

### Properties

- [message](datasource.RedirectError.md#message)
- [name](datasource.RedirectError.md#name)
- [redirectTarget](datasource.RedirectError.md#redirecttarget)
- [stack](datasource.RedirectError.md#stack)
- [stackTraceLimit](datasource.RedirectError.md#stacktracelimit)

### Methods

- [captureStackTrace](datasource.RedirectError.md#capturestacktrace)
- [prepareStackTrace](datasource.RedirectError.md#preparestacktrace)

## Constructors

### constructor

• **new RedirectError**(`redirectTarget`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `redirectTarget` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/datasource/index.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L37)

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

### redirectTarget

• **redirectTarget**: `string`

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

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
| `err` | [`Error`](../modules/annotation_annotation_layer_state._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/datasource._internal_.CallSite.md)[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
