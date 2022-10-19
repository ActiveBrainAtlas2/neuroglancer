[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/shader](../modules/webgl_shader.md) / ShaderLinkError

# Class: ShaderLinkError

[webgl/shader](../modules/webgl_shader.md).ShaderLinkError

## Hierarchy

- [`Error`](../modules/annotation_annotation_layer_state._internal_.md#error)

  ↳ **`ShaderLinkError`**

## Table of contents

### Constructors

- [constructor](webgl_shader.ShaderLinkError.md#constructor)

### Properties

- [fragmentSource](webgl_shader.ShaderLinkError.md#fragmentsource)
- [log](webgl_shader.ShaderLinkError.md#log)
- [message](webgl_shader.ShaderLinkError.md#message)
- [name](webgl_shader.ShaderLinkError.md#name)
- [stack](webgl_shader.ShaderLinkError.md#stack)
- [vertexSource](webgl_shader.ShaderLinkError.md#vertexsource)
- [stackTraceLimit](webgl_shader.ShaderLinkError.md#stacktracelimit)

### Methods

- [captureStackTrace](webgl_shader.ShaderLinkError.md#capturestacktrace)
- [prepareStackTrace](webgl_shader.ShaderLinkError.md#preparestacktrace)

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

[src/neuroglancer/webgl/shader.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L80)

## Properties

### fragmentSource

• **fragmentSource**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L78)

___

### log

• **log**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L79)

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

[src/neuroglancer/webgl/shader.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L77)

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
