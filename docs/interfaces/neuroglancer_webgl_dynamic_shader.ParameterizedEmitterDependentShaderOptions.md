[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/dynamic\_shader](../modules/neuroglancer_webgl_dynamic_shader.md) / ParameterizedEmitterDependentShaderOptions

# Interface: ParameterizedEmitterDependentShaderOptions<Parameters, ExtraParameters\>

[neuroglancer/webgl/dynamic_shader](../modules/neuroglancer_webgl_dynamic_shader.md).ParameterizedEmitterDependentShaderOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

## Hierarchy

- [`ParameterizedShaderOptions`](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md)<`Parameters`, `ExtraParameters`\>

  ↳ **`ParameterizedEmitterDependentShaderOptions`**

  ↳↳ [`LegendShaderOptions`](neuroglancer_widget_shader_controls.LegendShaderOptions.md)

## Table of contents

### Properties

- [extraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#extraparameters)
- [fallbackParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#fallbackparameters)
- [memoizeKey](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#memoizekey)
- [parameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#parameters)
- [shaderError](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#shadererror)

### Methods

- [defineShader](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#defineshader)
- [encodeExtraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeextraparameters)
- [encodeParameters](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md#encodeparameters)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`ExtraParameters`\>

#### Inherited from

[ParameterizedShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md).[extraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#extraparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Inherited from

[ParameterizedShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md).[fallbackParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#fallbackparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Inherited from

[ParameterizedShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md).[memoizeKey](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#memoizekey)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Inherited from

[ParameterizedShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md).[parameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#parameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Inherited from

[ParameterizedShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md).[shaderError](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#shadererror)

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

[ParameterizedShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md).[encodeExtraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeextraparameters)

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

[ParameterizedShaderOptions](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md).[encodeParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeparameters)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L58)
