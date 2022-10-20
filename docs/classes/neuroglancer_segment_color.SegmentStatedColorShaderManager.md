[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segment\_color](../modules/neuroglancer_segment_color.md) / SegmentStatedColorShaderManager

# Class: SegmentStatedColorShaderManager

[neuroglancer/segment_color](../modules/neuroglancer_segment_color.md).SegmentStatedColorShaderManager

Adds the shader code to get a segment's color if it is present in the map.

## Table of contents

### Constructors

- [constructor](neuroglancer_segment_color.SegmentStatedColorShaderManager.md#constructor)

### Properties

- [hashMapShaderManager](neuroglancer_segment_color.SegmentStatedColorShaderManager.md#hashmapshadermanager)
- [prefix](neuroglancer_segment_color.SegmentStatedColorShaderManager.md#prefix)

### Accessors

- [getFunctionName](neuroglancer_segment_color.SegmentStatedColorShaderManager.md#getfunctionname)

### Methods

- [defineShader](neuroglancer_segment_color.SegmentStatedColorShaderManager.md#defineshader)
- [disable](neuroglancer_segment_color.SegmentStatedColorShaderManager.md#disable)
- [enable](neuroglancer_segment_color.SegmentStatedColorShaderManager.md#enable)

## Constructors

### constructor

• **new SegmentStatedColorShaderManager**(`prefix`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Defined in

[src/neuroglancer/segment_color.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L138)

## Properties

### hashMapShaderManager

• `Private` **hashMapShaderManager**: [`HashMapShaderManager`](neuroglancer_gpu_hash_shader.HashMapShaderManager.md)

#### Defined in

[src/neuroglancer/segment_color.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L136)

___

### prefix

• **prefix**: `string`

#### Defined in

[src/neuroglancer/segment_color.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L138)

## Accessors

### getFunctionName

• `get` **getFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L158)

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

[src/neuroglancer/segment_color.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L140)

___

### disable

▸ **disable**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L167)

___

### enable

▸ **enable**<`HashTable`\>(`gl`, `shader`, `hashTable`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](neuroglancer_gpu_hash_hash_table.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `hashTable` | [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<`HashTable`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L162)
