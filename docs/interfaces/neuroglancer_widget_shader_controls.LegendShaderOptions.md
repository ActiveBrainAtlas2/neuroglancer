[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/shader\_controls](../modules/neuroglancer_widget_shader_controls.md) / LegendShaderOptions

# Interface: LegendShaderOptions

[neuroglancer/widget/shader_controls](../modules/neuroglancer_widget_shader_controls.md).LegendShaderOptions

## Hierarchy

- [`ParameterizedEmitterDependentShaderOptions`](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)

  ↳ **`LegendShaderOptions`**

## Table of contents

### Properties

- [extraParameters](neuroglancer_widget_shader_controls.LegendShaderOptions.md#extraparameters)
- [fallbackParameters](neuroglancer_widget_shader_controls.LegendShaderOptions.md#fallbackparameters)
- [memoizeKey](neuroglancer_widget_shader_controls.LegendShaderOptions.md#memoizekey)
- [parameters](neuroglancer_widget_shader_controls.LegendShaderOptions.md#parameters)
- [shaderError](neuroglancer_widget_shader_controls.LegendShaderOptions.md#shadererror)

### Methods

- [defineShader](neuroglancer_widget_shader_controls.LegendShaderOptions.md#defineshader)
- [encodeExtraParameters](neuroglancer_widget_shader_controls.LegendShaderOptions.md#encodeextraparameters)
- [encodeParameters](neuroglancer_widget_shader_controls.LegendShaderOptions.md#encodeparameters)
- [initializeShader](neuroglancer_widget_shader_controls.LegendShaderOptions.md#initializeshader)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[extraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#extraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[fallbackParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#fallbackparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[memoizeKey](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#memoizekey)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`any`\>

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[parameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#parameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[shaderError](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#shadererror)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L57)

## Methods

### defineShader

▸ **defineShader**(`builder`, `parameters`, `extraParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |
| `parameters` | `Parameters` |
| `extraParameters` | `ExtraParameters` |

#### Returns

`void`

#### Inherited from

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[defineShader](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#defineshader)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L176)

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

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[encodeExtraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeextraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L60)

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

[ParameterizedEmitterDependentShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md).[encodeParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L58)

___

### initializeShader

▸ **initializeShader**(`shaderResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderResult` | [`ParameterizedShaderGetterResult`](neuroglancer_webgl_dynamic_shader.ParameterizedShaderGetterResult.md)<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L36)
