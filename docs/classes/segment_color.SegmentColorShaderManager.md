[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / SegmentColorShaderManager

# Class: SegmentColorShaderManager

[segment_color](../modules/segment_color.md).SegmentColorShaderManager

## Table of contents

### Constructors

- [constructor](segment_color.SegmentColorShaderManager.md#constructor)

### Properties

- [prefix](segment_color.SegmentColorShaderManager.md#prefix)
- [seedName](segment_color.SegmentColorShaderManager.md#seedname)

### Methods

- [defineShader](segment_color.SegmentColorShaderManager.md#defineshader)
- [enable](segment_color.SegmentColorShaderManager.md#enable)

## Constructors

### constructor

• **new SegmentColorShaderManager**(`prefix`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Defined in

[src/neuroglancer/segment_color.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/segment_color.ts#L34)

## Properties

### prefix

• **prefix**: `string`

___

### seedName

• **seedName**: `string`

#### Defined in

[src/neuroglancer/segment_color.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/segment_color.ts#L32)

## Methods

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | `ShaderBuilder` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/segment_color.ts#L36)

___

### enable

▸ **enable**(`gl`, `shader`, `segmentColorHash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `GL` |
| `shader` | `ShaderProgram` |
| `segmentColorHash` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/segment_color.ts#L61)
