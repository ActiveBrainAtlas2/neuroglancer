[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / [<internal\>](../modules/segment_color._internal_.md) / HashSetShaderManager

# Class: HashSetShaderManager

[segment_color](../modules/segment_color.md).[<internal>](../modules/segment_color._internal_.md).HashSetShaderManager

## Hierarchy

- **`HashSetShaderManager`**

  ↳ [`HashMapShaderManager`](segment_color._internal_.HashMapShaderManager.md)

## Table of contents

### Constructors

- [constructor](segment_color._internal_.HashSetShaderManager.md#constructor)

### Properties

- [accessHelper](segment_color._internal_.HashSetShaderManager.md#accesshelper)
- [hashKeyMask](segment_color._internal_.HashSetShaderManager.md#hashkeymask)
- [hashSeedsName](segment_color._internal_.HashSetShaderManager.md#hashseedsname)
- [numAlternatives](segment_color._internal_.HashSetShaderManager.md#numalternatives)
- [prefix](segment_color._internal_.HashSetShaderManager.md#prefix)
- [readTable](segment_color._internal_.HashSetShaderManager.md#readtable)
- [samplerName](segment_color._internal_.HashSetShaderManager.md#samplername)
- [textureUnitSymbol](segment_color._internal_.HashSetShaderManager.md#textureunitsymbol)

### Accessors

- [hasFunctionName](segment_color._internal_.HashSetShaderManager.md#hasfunctionname)

### Methods

- [defineShader](segment_color._internal_.HashSetShaderManager.md#defineshader)
- [disable](segment_color._internal_.HashSetShaderManager.md#disable)
- [enable](segment_color._internal_.HashSetShaderManager.md#enable)

## Constructors

### constructor

• **new HashSetShaderManager**(`prefix`, `numAlternatives?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `undefined` |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L94)

## Properties

### accessHelper

• `Private` **accessHelper**: [`OneDimensionalTextureAccessHelper`](segment_color._internal_.OneDimensionalTextureAccessHelper.md)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L88)

___

### hashKeyMask

• **hashKeyMask**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L91)

___

### hashSeedsName

• **hashSeedsName**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L90)

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

[src/neuroglancer/gpu_hash/shader.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L92)

___

### samplerName

• **samplerName**: `string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L89)

___

### textureUnitSymbol

• **textureUnitSymbol**: `symbol`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L87)

## Accessors

### hasFunctionName

• `get` **hasFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L129)

## Methods

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](image_user_layer._internal_.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L96)

___

### disable

▸ **disable**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `shader` | [`ShaderProgram`](axes_lines._internal_.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L143)

___

### enable

▸ **enable**<`HashTable`\>(`gl`, `shader`, `hashTable`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashTable` | extends [`HashTableBase`](segment_color._internal_.HashTableBase.md)<`HashTable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `shader` | [`ShaderProgram`](axes_lines._internal_.ShaderProgram.md) |
| `hashTable` | [`GPUHashTable`](segment_color._internal_.GPUHashTable.md)<`HashTable`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L133)
