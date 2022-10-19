[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md) / ShaderCompilationError

# Class: ShaderCompilationError

[neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md).ShaderCompilationError

## Hierarchy

- [`Error`](../modules/main_module._internal_.md#error)

  ↳ **`ShaderCompilationError`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_shader.ShaderCompilationError.md#constructor)

### Properties

- [errorMessages](neuroglancer_webgl_shader.ShaderCompilationError.md#errormessages)
- [log](neuroglancer_webgl_shader.ShaderCompilationError.md#log)
- [message](neuroglancer_webgl_shader.ShaderCompilationError.md#message)
- [name](neuroglancer_webgl_shader.ShaderCompilationError.md#name)
- [shaderType](neuroglancer_webgl_shader.ShaderCompilationError.md#shadertype)
- [source](neuroglancer_webgl_shader.ShaderCompilationError.md#source)
- [stack](neuroglancer_webgl_shader.ShaderCompilationError.md#stack)
- [stackTraceLimit](neuroglancer_webgl_shader.ShaderCompilationError.md#stacktracelimit)

### Methods

- [captureStackTrace](neuroglancer_webgl_shader.ShaderCompilationError.md#capturestacktrace)
- [prepareStackTrace](neuroglancer_webgl_shader.ShaderCompilationError.md#preparestacktrace)

## Constructors

### constructor

• **new ShaderCompilationError**(`shaderType`, `source`, `log`, `errorMessages`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderType` | [`ShaderType`](../enums/neuroglancer_webgl_shader.ShaderType.md) |
| `source` | `string` |
| `log` | `string` |
| `errorMessages` | [`ShaderErrorMessage`](../interfaces/neuroglancer_webgl_shader.ShaderErrorMessage.md)[] |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/webgl/shader.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L63)

## Properties

### errorMessages

• **errorMessages**: [`ShaderErrorMessage`](../interfaces/neuroglancer_webgl_shader.ShaderErrorMessage.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L62)

___

### log

• **log**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L61)

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

• **shaderType**: [`ShaderType`](../enums/neuroglancer_webgl_shader.ShaderType.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L59)

___

### source

• **source**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L60)

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
| `err` | [`Error`](../modules/main_module._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/neuroglancer_datasource._internal_.CallSite.md)[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
