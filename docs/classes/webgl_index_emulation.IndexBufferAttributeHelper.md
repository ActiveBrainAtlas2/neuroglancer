[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/index\_emulation](../modules/webgl_index_emulation.md) / IndexBufferAttributeHelper

# Class: IndexBufferAttributeHelper

[webgl/index_emulation](../modules/webgl_index_emulation.md).IndexBufferAttributeHelper

Helper class for using a buffer containing uint32 index values as a vertex attribute.

## Table of contents

### Constructors

- [constructor](webgl_index_emulation.IndexBufferAttributeHelper.md#constructor)

### Properties

- [name](webgl_index_emulation.IndexBufferAttributeHelper.md#name)

### Methods

- [bind](webgl_index_emulation.IndexBufferAttributeHelper.md#bind)
- [defineShader](webgl_index_emulation.IndexBufferAttributeHelper.md#defineshader)
- [disable](webgl_index_emulation.IndexBufferAttributeHelper.md#disable)

## Constructors

### constructor

• **new IndexBufferAttributeHelper**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L108)

## Properties

### name

• **name**: `string`

## Methods

### bind

▸ **bind**(`buffer`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`Buffer`](webgl_buffer.Buffer.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L114)

___

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L110)

___

### disable

▸ **disable**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L119)
