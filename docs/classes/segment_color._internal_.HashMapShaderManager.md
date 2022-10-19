[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / [<internal\>](../modules/segment_color._internal_.md) / HashMapShaderManager

# Class: HashMapShaderManager

[segment_color](../modules/segment_color.md).[<internal>](../modules/segment_color._internal_.md).HashMapShaderManager

## Hierarchy

- [`HashSetShaderManager`](segment_color._internal_.HashSetShaderManager.md)

  ↳ **`HashMapShaderManager`**

## Table of contents

### Constructors

- [constructor](segment_color._internal_.HashMapShaderManager.md#constructor)

### Properties

- [hashKeyMask](segment_color._internal_.HashMapShaderManager.md#hashkeymask)
- [hashSeedsName](segment_color._internal_.HashMapShaderManager.md#hashseedsname)
- [numAlternatives](segment_color._internal_.HashMapShaderManager.md#numalternatives)
- [prefix](segment_color._internal_.HashMapShaderManager.md#prefix)
- [readTable](segment_color._internal_.HashMapShaderManager.md#readtable)
- [samplerName](segment_color._internal_.HashMapShaderManager.md#samplername)
- [textureUnitSymbol](segment_color._internal_.HashMapShaderManager.md#textureunitsymbol)

### Accessors

- [getFunctionName](segment_color._internal_.HashMapShaderManager.md#getfunctionname)
- [hasFunctionName](segment_color._internal_.HashMapShaderManager.md#hasfunctionname)

### Methods

- [defineShader](segment_color._internal_.HashMapShaderManager.md#defineshader)
- [disable](segment_color._internal_.HashMapShaderManager.md#disable)
- [enable](segment_color._internal_.HashMapShaderManager.md#enable)

## Constructors

### constructor

• **new HashMapShaderManager**(`prefix`, `numAlternatives?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `undefined` |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[constructor](segment_color._internal_.HashSetShaderManager.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L94)

## Properties

### hashKeyMask

• **hashKeyMask**: `string`

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[hashKeyMask](segment_color._internal_.HashSetShaderManager.md#hashkeymask)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L91)

___

### hashSeedsName

• **hashSeedsName**: `string`

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[hashSeedsName](segment_color._internal_.HashSetShaderManager.md#hashseedsname)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L90)

___

### numAlternatives

• **numAlternatives**: `number` = `NUM_ALTERNATIVES`

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[numAlternatives](segment_color._internal_.HashSetShaderManager.md#numalternatives)

___

### prefix

• **prefix**: `string`

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[prefix](segment_color._internal_.HashSetShaderManager.md#prefix)

___

### readTable

• **readTable**: `string`

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[readTable](segment_color._internal_.HashSetShaderManager.md#readtable)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L92)

___

### samplerName

• **samplerName**: `string`

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[samplerName](segment_color._internal_.HashSetShaderManager.md#samplername)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L89)

___

### textureUnitSymbol

• **textureUnitSymbol**: `symbol`

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[textureUnitSymbol](segment_color._internal_.HashSetShaderManager.md#textureunitsymbol)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L87)

## Accessors

### getFunctionName

• `get` **getFunctionName**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L176)

___

### hasFunctionName

• `get` **hasFunctionName**(): `string`

#### Returns

`string`

#### Inherited from

HashSetShaderManager.hasFunctionName

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

#### Overrides

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[defineShader](segment_color._internal_.HashSetShaderManager.md#defineshader)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L151)

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

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[disable](segment_color._internal_.HashSetShaderManager.md#disable)

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

#### Inherited from

[HashSetShaderManager](segment_color._internal_.HashSetShaderManager.md).[enable](segment_color._internal_.HashSetShaderManager.md#enable)

#### Defined in

[src/neuroglancer/gpu_hash/shader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/shader.ts#L133)
