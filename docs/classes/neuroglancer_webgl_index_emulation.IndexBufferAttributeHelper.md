[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/index\_emulation](../modules/neuroglancer_webgl_index_emulation.md) / IndexBufferAttributeHelper

# Class: IndexBufferAttributeHelper

[neuroglancer/webgl/index_emulation](../modules/neuroglancer_webgl_index_emulation.md).IndexBufferAttributeHelper

Helper class for using a buffer containing uint32 index values as a vertex attribute.

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_index_emulation.IndexBufferAttributeHelper.md#constructor)

### Properties

- [name](neuroglancer_webgl_index_emulation.IndexBufferAttributeHelper.md#name)

### Methods

- [bind](neuroglancer_webgl_index_emulation.IndexBufferAttributeHelper.md#bind)
- [defineShader](neuroglancer_webgl_index_emulation.IndexBufferAttributeHelper.md#defineshader)
- [disable](neuroglancer_webgl_index_emulation.IndexBufferAttributeHelper.md#disable)

## Constructors

### constructor

• **new IndexBufferAttributeHelper**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L108)

## Properties

### name

• **name**: `string`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L108)

## Methods

### bind

▸ **bind**(`buffer`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`Buffer`](neuroglancer_webgl_buffer.Buffer.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L114)

___

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L110)

___

### disable

▸ **disable**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/index_emulation.ts#L119)
