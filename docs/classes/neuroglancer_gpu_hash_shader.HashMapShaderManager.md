[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/gpu\_hash/shader](../modules/neuroglancer_gpu_hash_shader.md) / HashMapShaderManager

# Class: HashMapShaderManager

[neuroglancer/gpu_hash/shader](../modules/neuroglancer_gpu_hash_shader.md).HashMapShaderManager

## Hierarchy

- [`HashSetShaderManager`](neuroglancer_gpu_hash_shader.HashSetShaderManager.md)

  ↳ **`HashMapShaderManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#constructor)

### Properties

- [hashKeyMask](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#hashkeymask)
- [hashSeedsName](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#hashseedsname)
- [numAlternatives](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#numalternatives)
- [prefix](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#prefix)
- [readTable](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#readtable)
- [samplerName](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#samplername)
- [textureUnitSymbol](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#textureunitsymbol)

### Accessors

- [getFunctionName](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#getfunctionname)
- [hasFunctionName](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#hasfunctionname)

### Methods

- [defineShader](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#defineshader)
- [disable](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#disable)
- [enable](neuroglancer_gpu_hash_shader.HashMapShaderManager.md#enable)

## Constructors

### constructor

• **new HashMapShaderManager**(`prefix`, `numAlternatives?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `undefined` |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[constructor](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L94)

## Properties

### hashKeyMask

• **hashKeyMask**: `string`

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[hashKeyMask](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#hashkeymask)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L91)

___

### hashSeedsName

• **hashSeedsName**: `string`

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[hashSeedsName](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#hashseedsname)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L90)

___

### numAlternatives

• **numAlternatives**: `number` = `NUM_ALTERNATIVES`

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[numAlternatives](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#numalternatives)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L94)

___

### prefix

• **prefix**: `string`

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[prefix](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#prefix)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L94)

___

### readTable

• **readTable**: `string`

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[readTable](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#readtable)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L92)

___

### samplerName

• **samplerName**: `string`

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[samplerName](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#samplername)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L89)

___

### textureUnitSymbol

• **textureUnitSymbol**: `symbol`

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[textureUnitSymbol](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#textureunitsymbol)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L87)

## Accessors

### getFunctionName

• `get` **getFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L176)

___

### hasFunctionName

• `get` **hasFunctionName**(): `string`

#### Returns

`string`

#### Inherited from

HashSetShaderManager.hasFunctionName

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

#### Overrides

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[defineShader](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#defineshader)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L151)

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

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[disable](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#disable)

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

#### Inherited from

[HashSetShaderManager](neuroglancer_gpu_hash_shader.HashSetShaderManager.md).[enable](neuroglancer_gpu_hash_shader.HashSetShaderManager.md#enable)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/shader.ts#L133)
