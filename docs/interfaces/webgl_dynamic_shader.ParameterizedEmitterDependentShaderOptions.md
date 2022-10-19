[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/dynamic\_shader](../modules/webgl_dynamic_shader.md) / ParameterizedEmitterDependentShaderOptions

# Interface: ParameterizedEmitterDependentShaderOptions<Parameters, ExtraParameters\>

[webgl/dynamic_shader](../modules/webgl_dynamic_shader.md).ParameterizedEmitterDependentShaderOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

## Hierarchy

- [`ParameterizedShaderOptions`](webgl_dynamic_shader.ParameterizedShaderOptions.md)<`Parameters`, `ExtraParameters`\>

  ↳ **`ParameterizedEmitterDependentShaderOptions`**

  ↳↳ [`LegendShaderOptions`](widget_shader_controls.LegendShaderOptions.md)

## Table of contents

### Properties

- [extraParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#extraparameters)
- [fallbackParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#fallbackparameters)
- [memoizeKey](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#memoizekey)
- [parameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#parameters)
- [shaderError](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#shadererror)

### Methods

- [defineShader](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#defineshader)
- [encodeExtraParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeextraparameters)
- [encodeParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeparameters)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`ExtraParameters`\>

#### Inherited from

[ParameterizedShaderOptions](webgl_dynamic_shader.ParameterizedShaderOptions.md).[extraParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#extraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Parameters`\>

#### Inherited from

[ParameterizedShaderOptions](webgl_dynamic_shader.ParameterizedShaderOptions.md).[fallbackParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#fallbackparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Inherited from

[ParameterizedShaderOptions](webgl_dynamic_shader.ParameterizedShaderOptions.md).[memoizeKey](webgl_dynamic_shader.ParameterizedShaderOptions.md#memoizekey)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Parameters`\>

#### Inherited from

[ParameterizedShaderOptions](webgl_dynamic_shader.ParameterizedShaderOptions.md).[parameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#parameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror)

#### Inherited from

[ParameterizedShaderOptions](webgl_dynamic_shader.ParameterizedShaderOptions.md).[shaderError](webgl_dynamic_shader.ParameterizedShaderOptions.md#shadererror)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L57)

## Methods

### defineShader

▸ **defineShader**(`builder`, `parameters`, `extraParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |
| `parameters` | `Parameters` |
| `extraParameters` | `ExtraParameters` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L176)

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

[ParameterizedShaderOptions](webgl_dynamic_shader.ParameterizedShaderOptions.md).[encodeExtraParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeextraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L60)

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

[ParameterizedShaderOptions](webgl_dynamic_shader.ParameterizedShaderOptions.md).[encodeParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L58)
