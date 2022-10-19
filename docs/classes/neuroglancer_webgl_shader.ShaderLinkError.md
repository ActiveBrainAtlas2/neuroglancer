[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md) / ShaderLinkError

# Class: ShaderLinkError

[neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md).ShaderLinkError

## Hierarchy

- [`Error`](../modules/main_module._internal_.md#error)

  ↳ **`ShaderLinkError`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_shader.ShaderLinkError.md#constructor)

### Properties

- [fragmentSource](neuroglancer_webgl_shader.ShaderLinkError.md#fragmentsource)
- [log](neuroglancer_webgl_shader.ShaderLinkError.md#log)
- [message](neuroglancer_webgl_shader.ShaderLinkError.md#message)
- [name](neuroglancer_webgl_shader.ShaderLinkError.md#name)
- [stack](neuroglancer_webgl_shader.ShaderLinkError.md#stack)
- [vertexSource](neuroglancer_webgl_shader.ShaderLinkError.md#vertexsource)
- [stackTraceLimit](neuroglancer_webgl_shader.ShaderLinkError.md#stacktracelimit)

### Methods

- [captureStackTrace](neuroglancer_webgl_shader.ShaderLinkError.md#capturestacktrace)
- [prepareStackTrace](neuroglancer_webgl_shader.ShaderLinkError.md#preparestacktrace)

## Constructors

### constructor

• **new ShaderLinkError**(`vertexSource`, `fragmentSource`, `log`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexSource` | `string` |
| `fragmentSource` | `string` |
| `log` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/neuroglancer/webgl/shader.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L80)

## Properties

### fragmentSource

• **fragmentSource**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L78)

___

### log

• **log**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L79)

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

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### vertexSource

• **vertexSource**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L77)

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
