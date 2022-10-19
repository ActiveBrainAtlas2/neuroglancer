[neuroglancer](../README.md) / [Modules](../modules.md) / [gpu\_hash/shader](../modules/gpu_hash_shader.md) / HashSetShaderManager

# Class: HashSetShaderManager

[gpu_hash/shader](../modules/gpu_hash_shader.md).HashSetShaderManager

## Hierarchy

- **`HashSetShaderManager`**

  ↳ [`HashMapShaderManager`](gpu_hash_shader.HashMapShaderManager.md)

## Table of contents

### Constructors

- [constructor](gpu_hash_shader.HashSetShaderManager.md#constructor)

### Properties

- [accessHelper](gpu_hash_shader.HashSetShaderManager.md#accesshelper)
- [hashKeyMask](gpu_hash_shader.HashSetShaderManager.md#hashkeymask)
- [hashSeedsName](gpu_hash_shader.HashSetShaderManager.md#hashseedsname)
- [numAlternatives](gpu_hash_shader.HashSetShaderManager.md#numalternatives)
- [prefix](gpu_hash_shader.HashSetShaderManager.md#prefix)
- [readTable](gpu_hash_shader.HashSetShaderManager.md#readtable)
- [samplerName](gpu_hash_shader.HashSetShaderManager.md#samplername)
- [textureUnitSymbol](gpu_hash_shader.HashSetShaderManager.md#textureunitsymbol)

### Accessors

- [hasFunctionName](gpu_hash_shader.HashSetShaderManager.md#hasfunctionname)

### Methods

- [defineShader](gpu_hash_shader.HashSetShaderManager.md#defineshader)
- [disable](gpu_hash_shader.HashSetShaderManager.md#disable)
- [enable](gpu_hash_shader.HashSetShaderManager.md#enable)

## Constructors

### constructor

• **new HashSetShaderManager**(`prefix`, `numAlternatives?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `undefined` |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L94)

## Properties

### accessHelper

• `Private` **accessHelper**: [`OneDimensionalTextureAccessHelper`](webgl_texture_access.OneDimensionalTextureAccessHelper.md)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L88)

___

### hashKeyMask

• **hashKeyMask**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L91)

___

### hashSeedsName

• **hashSeedsName**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L90)

___

### numAlternatives

• **numAlternatives**: `number` = `NUM_ALTERNATIVES`

___

### prefix

• **prefix**: `string`

___

### readTable

• **readTable**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L92)

___

### samplerName

• **samplerName**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L89)

___

### textureUnitSymbol

• **textureUnitSymbol**: `symbol`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L87)

## Accessors

### hasFunctionName

• `get` **hasFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L129)

## Methods

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L96)

___

### disable

▸ **disable**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L143)

___

### enable

▸ **enable**<`HashTable`\>(`gl`, `shader`, `hashTable`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](gpu_hash_hash_table.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `hashTable` | [`GPUHashTable`](gpu_hash_shader.GPUHashTable.md)<`HashTable`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L133)
