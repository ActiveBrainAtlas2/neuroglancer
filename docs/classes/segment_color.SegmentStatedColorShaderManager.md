[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / SegmentStatedColorShaderManager

# Class: SegmentStatedColorShaderManager

[segment_color](../modules/segment_color.md).SegmentStatedColorShaderManager

Adds the shader code to get a segment's color if it is present in the map.

## Table of contents

### Constructors

- [constructor](segment_color.SegmentStatedColorShaderManager.md#constructor)

### Properties

- [hashMapShaderManager](segment_color.SegmentStatedColorShaderManager.md#hashmapshadermanager)
- [prefix](segment_color.SegmentStatedColorShaderManager.md#prefix)

### Accessors

- [getFunctionName](segment_color.SegmentStatedColorShaderManager.md#getfunctionname)

### Methods

- [defineShader](segment_color.SegmentStatedColorShaderManager.md#defineshader)
- [disable](segment_color.SegmentStatedColorShaderManager.md#disable)
- [enable](segment_color.SegmentStatedColorShaderManager.md#enable)

## Constructors

### constructor

• **new SegmentStatedColorShaderManager**(`prefix`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Defined in

[src/neuroglancer/segment_color.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/segment_color.ts#L138)

## Properties

### hashMapShaderManager

• `Private` **hashMapShaderManager**: `HashMapShaderManager`

#### Defined in

[src/neuroglancer/segment_color.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/segment_color.ts#L136)

___

### prefix

• **prefix**: `string`

## Accessors

### getFunctionName

• `get` **getFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/segment_color.ts#L158)

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

[src/neuroglancer/segment_color.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/segment_color.ts#L140)

___

### disable

▸ **disable**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `GL` |
| `shader` | `ShaderProgram` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/segment_color.ts#L167)

___

### enable

▸ **enable**<`HashTable`\>(`gl`, `shader`, `hashTable`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends `HashTableBase`<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `GL` |
| `shader` | `ShaderProgram` |
| `hashTable` | `GPUHashTable`<`HashTable`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/segment_color.ts#L162)
