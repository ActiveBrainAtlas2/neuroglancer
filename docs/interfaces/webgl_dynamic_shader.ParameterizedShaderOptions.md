[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/dynamic\_shader](../modules/webgl_dynamic_shader.md) / ParameterizedShaderOptions

# Interface: ParameterizedShaderOptions<Parameters, ExtraParameters\>

[webgl/dynamic_shader](../modules/webgl_dynamic_shader.md).ParameterizedShaderOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

## Hierarchy

- **`ParameterizedShaderOptions`**

  ↳ [`ParameterizedEmitterDependentShaderOptions`](webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)

## Table of contents

### Properties

- [extraParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#extraparameters)
- [fallbackParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#fallbackparameters)
- [memoizeKey](webgl_dynamic_shader.ParameterizedShaderOptions.md#memoizekey)
- [parameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#parameters)
- [shaderError](webgl_dynamic_shader.ParameterizedShaderOptions.md#shadererror)

### Methods

- [encodeExtraParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeextraparameters)
- [encodeParameters](webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeparameters)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`ExtraParameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Parameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Parameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L57)

## Methods

### encodeExtraParameters

▸ `Optional` **encodeExtraParameters**(`p`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `ExtraParameters` |

#### Returns

`any`

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

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L58)
