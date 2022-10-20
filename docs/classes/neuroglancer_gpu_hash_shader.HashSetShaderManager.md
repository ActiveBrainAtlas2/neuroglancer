[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/gpu\_hash/shader](../modules/neuroglancer_gpu_hash_shader.md) / HashSetShaderManager

# Class: HashSetShaderManager

[neuroglancer/gpu_hash/shader](../modules/neuroglancer_gpu_hash_shader.md).HashSetShaderManager

## Hierarchy

- **`HashSetShaderManager`**

  ↳ [`HashMapShaderManager`](neuroglancer_gpu_hash_shader.HashMapShaderManager.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#constructor)

### Properties

- [accessHelper](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#accesshelper)
- [hashKeyMask](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#hashkeymask)
- [hashSeedsName](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#hashseedsname)
- [numAlternatives](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#numalternatives)
- [prefix](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#prefix)
- [readTable](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#readtable)
- [samplerName](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#samplername)
- [textureUnitSymbol](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#textureunitsymbol)

### Accessors

- [hasFunctionName](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#hasfunctionname)

### Methods

- [defineShader](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#defineshader)
- [disable](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#disable)
- [enable](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#enable)

## Constructors

### constructor

• **new HashSetShaderManager**(`prefix`, `numAlternatives?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `undefined` |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L94)

## Properties

### accessHelper

• `Private` **accessHelper**: [`OneDimensionalTextureAccessHelper`](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L88)

___

### hashKeyMask

• **hashKeyMask**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L91)

___

### hashSeedsName

• **hashSeedsName**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L90)

___

### numAlternatives

• **numAlternatives**: `number` = `NUM_ALTERNATIVES`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L94)

___

### prefix

• **prefix**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L94)

___

### readTable

• **readTable**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L92)

___

### samplerName

• **samplerName**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L89)

___

### textureUnitSymbol

• **textureUnitSymbol**: `symbol`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L87)

## Accessors

### hasFunctionName

• `get` **hasFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L129)

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

[src/neuroglancer/gpu_hash/shader.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L96)

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

[src/neuroglancer/gpu_hash/shader.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L143)

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

[src/neuroglancer/gpu_hash/shader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L133)
