[neuroglancer](../README.md) / [Modules](../modules.md) / [gpu\_hash/shader](../modules/gpu_hash_shader.md) / HashMapShaderManager

# Class: HashMapShaderManager

[gpu_hash/shader](../modules/gpu_hash_shader.md).HashMapShaderManager

## Hierarchy

- [`HashSetShaderManager`](gpu_hash_shader.HashSetShaderManager.md)

  ↳ **`HashMapShaderManager`**

## Table of contents

### Constructors

- [constructor](gpu_hash_shader.HashMapShaderManager.md#constructor)

### Properties

- [hashKeyMask](gpu_hash_shader.HashMapShaderManager.md#hashkeymask)
- [hashSeedsName](gpu_hash_shader.HashMapShaderManager.md#hashseedsname)
- [numAlternatives](gpu_hash_shader.HashMapShaderManager.md#numalternatives)
- [prefix](gpu_hash_shader.HashMapShaderManager.md#prefix)
- [readTable](gpu_hash_shader.HashMapShaderManager.md#readtable)
- [samplerName](gpu_hash_shader.HashMapShaderManager.md#samplername)
- [textureUnitSymbol](gpu_hash_shader.HashMapShaderManager.md#textureunitsymbol)

### Accessors

- [getFunctionName](gpu_hash_shader.HashMapShaderManager.md#getfunctionname)
- [hasFunctionName](gpu_hash_shader.HashMapShaderManager.md#hasfunctionname)

### Methods

- [defineShader](gpu_hash_shader.HashMapShaderManager.md#defineshader)
- [disable](gpu_hash_shader.HashMapShaderManager.md#disable)
- [enable](gpu_hash_shader.HashMapShaderManager.md#enable)

## Constructors

### constructor

• **new HashMapShaderManager**(`prefix`, `numAlternatives?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `undefined` |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[constructor](gpu_hash_shader.HashSetShaderManager.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L94)

## Properties

### hashKeyMask

• **hashKeyMask**: `string`

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[hashKeyMask](gpu_hash_shader.HashSetShaderManager.md#hashkeymask)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L91)

___

### hashSeedsName

• **hashSeedsName**: `string`

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[hashSeedsName](gpu_hash_shader.HashSetShaderManager.md#hashseedsname)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L90)

___

### numAlternatives

• **numAlternatives**: `number` = `NUM_ALTERNATIVES`

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[numAlternatives](gpu_hash_shader.HashSetShaderManager.md#numalternatives)

___

### prefix

• **prefix**: `string`

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[prefix](gpu_hash_shader.HashSetShaderManager.md#prefix)

___

### readTable

• **readTable**: `string`

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[readTable](gpu_hash_shader.HashSetShaderManager.md#readtable)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L92)

___

### samplerName

• **samplerName**: `string`

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[samplerName](gpu_hash_shader.HashSetShaderManager.md#samplername)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L89)

___

### textureUnitSymbol

• **textureUnitSymbol**: `symbol`

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[textureUnitSymbol](gpu_hash_shader.HashSetShaderManager.md#textureunitsymbol)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L87)

## Accessors

### getFunctionName

• `get` **getFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L176)

___

### hasFunctionName

• `get` **hasFunctionName**(): `string`

#### Returns

`string`

#### Inherited from

HashSetShaderManager.hasFunctionName

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

#### Overrides

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[defineShader](gpu_hash_shader.HashSetShaderManager.md#defineshader)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L151)

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

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[disable](gpu_hash_shader.HashSetShaderManager.md#disable)

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

#### Inherited from

[HashSetShaderManager](gpu_hash_shader.HashSetShaderManager.md).[enable](gpu_hash_shader.HashSetShaderManager.md#enable)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/shader.ts#L133)
