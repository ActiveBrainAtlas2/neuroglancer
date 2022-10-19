[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ShaderCompilationError

# Class: ShaderCompilationError

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ShaderCompilationError

## Hierarchy

- [`Error`](../modules/axes_lines._internal_.md#error)

  ↳ **`ShaderCompilationError`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.ShaderCompilationError.md#constructor)

### Properties

- [errorMessages](image_user_layer._internal_.ShaderCompilationError.md#errormessages)
- [log](image_user_layer._internal_.ShaderCompilationError.md#log)
- [message](image_user_layer._internal_.ShaderCompilationError.md#message)
- [name](image_user_layer._internal_.ShaderCompilationError.md#name)
- [shaderType](image_user_layer._internal_.ShaderCompilationError.md#shadertype)
- [source](image_user_layer._internal_.ShaderCompilationError.md#source)
- [stack](image_user_layer._internal_.ShaderCompilationError.md#stack)
- [stackTraceLimit](image_user_layer._internal_.ShaderCompilationError.md#stacktracelimit)

### Methods

- [captureStackTrace](image_user_layer._internal_.ShaderCompilationError.md#capturestacktrace)
- [prepareStackTrace](image_user_layer._internal_.ShaderCompilationError.md#preparestacktrace)

## Constructors

### constructor

• **new ShaderCompilationError**(`shaderType`, `source`, `log`, `errorMessages`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderType` | [`ShaderType`](../enums/image_user_layer._internal_.ShaderType.md) |
| `source` | `string` |
| `log` | `string` |
| `errorMessages` | [`ShaderErrorMessage`](../interfaces/image_user_layer._internal_.ShaderErrorMessage.md)[] |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/webgl/shader.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L63)

## Properties

### errorMessages

• **errorMessages**: [`ShaderErrorMessage`](../interfaces/image_user_layer._internal_.ShaderErrorMessage.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L62)

___

### log

• **log**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L61)

___

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

### shaderType

• **shaderType**: [`ShaderType`](../enums/image_user_layer._internal_.ShaderType.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L59)

___

### source

• **source**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L60)

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
| `err` | [`Error`](../modules/axes_lines._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/image_user_layer._internal_.CallSite.md)[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
