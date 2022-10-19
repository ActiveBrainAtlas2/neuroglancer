[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / LegendShaderOptions

# Interface: LegendShaderOptions

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).LegendShaderOptions

## Hierarchy

- [`ParameterizedEmitterDependentShaderOptions`](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md)

  ↳ **`LegendShaderOptions`**

## Table of contents

### Properties

- [extraParameters](image_user_layer._internal_.LegendShaderOptions.md#extraparameters)
- [fallbackParameters](image_user_layer._internal_.LegendShaderOptions.md#fallbackparameters)
- [memoizeKey](image_user_layer._internal_.LegendShaderOptions.md#memoizekey)
- [parameters](image_user_layer._internal_.LegendShaderOptions.md#parameters)
- [shaderError](image_user_layer._internal_.LegendShaderOptions.md#shadererror)

### Methods

- [defineShader](image_user_layer._internal_.LegendShaderOptions.md#defineshader)
- [encodeExtraParameters](image_user_layer._internal_.LegendShaderOptions.md#encodeextraparameters)
- [encodeParameters](image_user_layer._internal_.LegendShaderOptions.md#encodeparameters)
- [initializeShader](image_user_layer._internal_.LegendShaderOptions.md#initializeshader)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[extraParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#extraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[fallbackParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#fallbackparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[memoizeKey](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#memoizekey)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[parameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#parameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/image_user_layer._internal_.md#watchableshadererror)

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[shaderError](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#shadererror)

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

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[defineShader](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#defineshader)

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

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[encodeExtraParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#encodeextraparameters)

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

[ParameterizedEmitterDependentShaderOptions](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md).[encodeParameters](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md#encodeparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L58)

___

### initializeShader

▸ **initializeShader**(`shaderResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderResult` | [`ParameterizedShaderGetterResult`](image_user_layer._internal_.ParameterizedShaderGetterResult.md)<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/shader_controls.ts#L36)
