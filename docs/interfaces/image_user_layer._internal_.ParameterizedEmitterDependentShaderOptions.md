[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ParameterizedEmitterDependentShaderOptions

# Interface: ParameterizedEmitterDependentShaderOptions<Parameters, ExtraParameters\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ParameterizedEmitterDependentShaderOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

## Hierarchy

- [`ParameterizedShaderOptions`](image_user_layer._internal_.ParameterizedShaderOptions.md)<`Parameters`, `ExtraParameters`\>

  ↳ **`ParameterizedEmitterDependentShaderOptions`**

  ↳↳ [`LegendShaderOptions`](image_user_layer._internal_.LegendShaderOptions.md)

## Table of contents

### Properties

- [extraParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#extraparameters)
- [fallbackParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#fallbackparameters)
- [memoizeKey](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#memoizekey)
- [parameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#parameters)
- [shaderError](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#shadererror)

### Methods

- [defineShader](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#defineshader)
- [encodeExtraParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#encodeextraparameters)
- [encodeParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#encodeparameters)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`ExtraParameters`\>

#### Inherited from

[ParameterizedShaderOptions](image_user_layer._internal_.ParameterizedShaderOptions.md).[extraParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#extraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Inherited from

[ParameterizedShaderOptions](image_user_layer._internal_.ParameterizedShaderOptions.md).[fallbackParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#fallbackparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Inherited from

[ParameterizedShaderOptions](image_user_layer._internal_.ParameterizedShaderOptions.md).[memoizeKey](image_user_layer._internal_.ParameterizedShaderOptions.md#memoizekey)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Inherited from

[ParameterizedShaderOptions](image_user_layer._internal_.ParameterizedShaderOptions.md).[parameters](image_user_layer._internal_.ParameterizedShaderOptions.md#parameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/image_user_layer._internal_.md#watchableshadererror)

#### Inherited from

[ParameterizedShaderOptions](image_user_layer._internal_.ParameterizedShaderOptions.md).[shaderError](image_user_layer._internal_.ParameterizedShaderOptions.md#shadererror)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L57)

## Methods

### defineShader

▸ **defineShader**(`builder`, `parameters`, `extraParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/image_user_layer._internal_.ShaderBuilder.md) |
| `parameters` | `Parameters` |
| `extraParameters` | `ExtraParameters` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L176)

___

### encodeExtraParameters

▸ `Optional` **encodeExtraParameters**(`p`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `ExtraParameters` |

#### Returns

`any`

#### Inherited from

[ParameterizedShaderOptions](image_user_layer._internal_.ParameterizedShaderOptions.md).[encodeExtraParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#encodeextraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L60)

___

### encodeParameters

▸ `Optional` **encodeParameters**(`p`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Parameters` |

#### Returns

`any`

#### Inherited from

[ParameterizedShaderOptions](image_user_layer._internal_.ParameterizedShaderOptions.md).[encodeParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#encodeparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L58)
