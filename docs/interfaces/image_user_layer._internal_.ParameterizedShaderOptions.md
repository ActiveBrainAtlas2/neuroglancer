[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ParameterizedShaderOptions

# Interface: ParameterizedShaderOptions<Parameters, ExtraParameters\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ParameterizedShaderOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

## Hierarchy

- **`ParameterizedShaderOptions`**

  ↳ [`ParameterizedEmitterDependentShaderOptions`](image_user_layer._internal_.ParameterizedEmitterDependentShaderOptions.md)

## Table of contents

### Properties

- [extraParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#extraparameters)
- [fallbackParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#fallbackparameters)
- [memoizeKey](image_user_layer._internal_.ParameterizedShaderOptions.md#memoizekey)
- [parameters](image_user_layer._internal_.ParameterizedShaderOptions.md#parameters)
- [shaderError](image_user_layer._internal_.ParameterizedShaderOptions.md#shadererror)

### Methods

- [encodeExtraParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#encodeextraparameters)
- [encodeParameters](image_user_layer._internal_.ParameterizedShaderOptions.md#encodeparameters)

## Properties

### extraParameters

• `Optional` **extraParameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`ExtraParameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L59)

___

### fallbackParameters

• `Optional` **fallbackParameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L56)

___

### memoizeKey

• **memoizeKey**: `any`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L54)

___

### parameters

• **parameters**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`Parameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L55)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/image_user_layer._internal_.md#watchableshadererror)

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L57)

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

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/dynamic_shader.ts#L58)
