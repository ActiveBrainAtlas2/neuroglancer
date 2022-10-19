[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/shader](../modules/webgl_shader.md) / ShaderCompilationError

# Class: ShaderCompilationError

[webgl/shader](../modules/webgl_shader.md).ShaderCompilationError

## Hierarchy

- [`Error`](../modules/annotation_annotation_layer_state._internal_.md#error)

  ↳ **`ShaderCompilationError`**

## Table of contents

### Constructors

- [constructor](webgl_shader.ShaderCompilationError.md#constructor)

### Properties

- [errorMessages](webgl_shader.ShaderCompilationError.md#errormessages)
- [log](webgl_shader.ShaderCompilationError.md#log)
- [message](webgl_shader.ShaderCompilationError.md#message)
- [name](webgl_shader.ShaderCompilationError.md#name)
- [shaderType](webgl_shader.ShaderCompilationError.md#shadertype)
- [source](webgl_shader.ShaderCompilationError.md#source)
- [stack](webgl_shader.ShaderCompilationError.md#stack)
- [stackTraceLimit](webgl_shader.ShaderCompilationError.md#stacktracelimit)

### Methods

- [captureStackTrace](webgl_shader.ShaderCompilationError.md#capturestacktrace)
- [prepareStackTrace](webgl_shader.ShaderCompilationError.md#preparestacktrace)

## Constructors

### constructor

• **new ShaderCompilationError**(`shaderType`, `source`, `log`, `errorMessages`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderType` | [`ShaderType`](../enums/webgl_shader.ShaderType.md) |
| `source` | `string` |
| `log` | `string` |
| `errorMessages` | [`ShaderErrorMessage`](../interfaces/webgl_shader.ShaderErrorMessage.md)[] |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/webgl/shader.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L63)

## Properties

### errorMessages

• **errorMessages**: [`ShaderErrorMessage`](../interfaces/webgl_shader.ShaderErrorMessage.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L62)

___

### log

• **log**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L61)

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

• **shaderType**: [`ShaderType`](../enums/webgl_shader.ShaderType.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L59)

___

### source

• **source**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L60)

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
