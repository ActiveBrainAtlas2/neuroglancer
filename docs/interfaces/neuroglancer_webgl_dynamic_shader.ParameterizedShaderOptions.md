[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/dynamic\_shader](../modules/neuroglancer_webgl_dynamic_shader.md) / ParameterizedShaderOptions

# Interface: ParameterizedShaderOptions<Parameters, ExtraParameters\>

[neuroglancer/webgl/dynamic_shader](../modules/neuroglancer_webgl_dynamic_shader.md).ParameterizedShaderOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

## Hierarchy

- **`ParameterizedShaderOptions`**

  ↳ [`ParameterizedEmitterDependentShaderOptions`](neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)

## Table of contents

### Properties

- [encodeExtraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeextraparameters)
- [encodeParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#encodeparameters)
- [extraParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#extraparameters)
- [fallbackParameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#fallbackparameters)
- [memoizeKey](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#memoizekey)
- [parameters](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#parameters)
- [shaderError](neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md#shadererror)

## Properties

### encodeExtraParameters

• `Optional` **encodeExtraParameters**: (`p`: `ExtraParameters`) => `any`

#### Type declaration

▸ (`p`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `ExtraParameters` |

##### Returns

`any`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/dynamic_shader.ts#L60)

___

### encodeParameters

• `Optional` **encodeParameters**: (`p`: `Parameters`) => `any`

#### Type declaration

▸ (`p`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Parameters` |

##### Returns

`any`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/dynamic_shader.ts#L58)

___

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`ExtraParameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/dynamic_shader.ts#L57)
