[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ShaderCode

# Class: ShaderCode

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ShaderCode

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.ShaderCode.md#constructor)

### Properties

- [code](image_user_layer._internal_.ShaderCode.md#code)
- [parts](image_user_layer._internal_.ShaderCode.md#parts)

### Methods

- [add](image_user_layer._internal_.ShaderCode.md#add)
- [toString](image_user_layer._internal_.ShaderCode.md#tostring)

## Constructors

### constructor

• **new ShaderCode**()

#### Defined in

[src/neuroglancer/webgl/shader.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L293)

## Properties

### code

• **code**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L291)

___

### parts

• **parts**: `Set`<[`ShaderCodePart`](../modules/image_user_layer._internal_.md#shadercodepart)\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L292)

## Methods

### add

▸ **add**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ShaderCodePart`](../modules/image_user_layer._internal_.md#shadercodepart) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L295)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L319)
