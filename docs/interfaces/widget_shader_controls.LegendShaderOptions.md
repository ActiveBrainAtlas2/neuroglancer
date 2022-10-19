[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/shader\_controls](../modules/widget_shader_controls.md) / LegendShaderOptions

# Interface: LegendShaderOptions

[widget/shader_controls](../modules/widget_shader_controls.md).LegendShaderOptions

## Hierarchy

- [`ParameterizedEmitterDependentShaderOptions`](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)

  ↳ **`LegendShaderOptions`**

## Table of contents

### Properties

- [extraParameters](widget_shader_controls.LegendShaderOptions.md#extraparameters)
- [fallbackParameters](widget_shader_controls.LegendShaderOptions.md#fallbackparameters)
- [memoizeKey](widget_shader_controls.LegendShaderOptions.md#memoizekey)
- [parameters](widget_shader_controls.LegendShaderOptions.md#parameters)
- [shaderError](widget_shader_controls.LegendShaderOptions.md#shadererror)

### Methods

- [defineShader](widget_shader_controls.LegendShaderOptions.md#defineshader)
- [encodeExtraParameters](widget_shader_controls.LegendShaderOptions.md#encodeextraparameters)
- [encodeParameters](widget_shader_controls.LegendShaderOptions.md#encodeparameters)
- [initializeShader](widget_shader_controls.LegendShaderOptions.md#initializeshader)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[extraParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#extraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[fallbackParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#fallbackparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[memoizeKey](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#memoizekey)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[parameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#parameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror)

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[shaderError](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#shadererror)

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

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[defineShader](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#defineshader)

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

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[encodeExtraParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeextraparameters)

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

[ParameterizedEmitterDependentShaderOptions](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[encodeParameters](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L58)

___

### initializeShader

▸ **initializeShader**(`shaderResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderResult` | [`ParameterizedShaderGetterResult`](webgl_dynamic_shader.ParameterizedShaderGetterResult.md)<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L36)
