[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segment\_color](../modules/neuroglancer_segment_color.md) / SegmentColorShaderManager

# Class: SegmentColorShaderManager

[neuroglancer/segment_color](../modules/neuroglancer_segment_color.md).SegmentColorShaderManager

## Table of contents

### Constructors

- [constructor](neuroglancer_segment_color.SegmentColorShaderManager.md#constructor)

### Properties

- [prefix](neuroglancer_segment_color.SegmentColorShaderManager.md#prefix)
- [seedName](neuroglancer_segment_color.SegmentColorShaderManager.md#seedname)

### Methods

- [defineShader](neuroglancer_segment_color.SegmentColorShaderManager.md#defineshader)
- [enable](neuroglancer_segment_color.SegmentColorShaderManager.md#enable)

## Constructors

### constructor

• **new SegmentColorShaderManager**(`prefix`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Defined in

[src/neuroglancer/segment_color.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L34)

## Properties

### prefix

• **prefix**: `string`

#### Defined in

[src/neuroglancer/segment_color.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L34)

___

### seedName

• **seedName**: `string`

#### Defined in

[src/neuroglancer/segment_color.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L32)

## Methods

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L36)

___

### enable

▸ **enable**(`gl`, `shader`, `segmentColorHash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `segmentColorHash` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L61)
