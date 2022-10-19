[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/lerp

# Module: webgl/lerp

**`license`**
Copyright 2020 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Variables

- [dataTypeShaderLerpParametersType](webgl_lerp.md#datatypeshaderlerpparameterstype)
- [defaultDataTypeRange](webgl_lerp.md#defaultdatatyperange)
- [glsl\_dataTypeComputeInvlerp](webgl_lerp.md#glsl_datatypecomputeinvlerp)
- [glsl\_dataTypeComputeLerp](webgl_lerp.md#glsl_datatypecomputelerp)

### Functions

- [computeInvlerp](webgl_lerp.md#computeinvlerp)
- [computeLerp](webgl_lerp.md#computelerp)
- [defineInvlerpShaderFunction](webgl_lerp.md#defineinvlerpshaderfunction)
- [defineLerpShaderFunction](webgl_lerp.md#definelerpshaderfunction)
- [enableLerpShaderFunction](webgl_lerp.md#enablelerpshaderfunction)
- [getIntervalBoundsEffectiveFraction](webgl_lerp.md#getintervalboundseffectivefraction)

## Variables

### dataTypeShaderLerpParametersType

• `Const` **dataTypeShaderLerpParametersType**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), `string`\>

#### Defined in

[src/neuroglancer/webgl/lerp.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L27)

___

### defaultDataTypeRange

• `Const` **defaultDataTypeRange**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), [`DataTypeInterval`](util_lerp.md#datatypeinterval)\>

#### Defined in

[src/neuroglancer/webgl/lerp.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L328)

___

### glsl\_dataTypeComputeInvlerp

• `Const` **glsl\_dataTypeComputeInvlerp**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), [`ShaderCodePart`](webgl_shader.md#shadercodepart)\>

#### Defined in

[src/neuroglancer/webgl/lerp.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L106)

___

### glsl\_dataTypeComputeLerp

• `Const` **glsl\_dataTypeComputeLerp**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), [`ShaderCodePart`](webgl_shader.md#shadercodepart)\>

#### Defined in

[src/neuroglancer/webgl/lerp.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L176)

## Functions

### computeInvlerp

▸ **computeInvlerp**(`range`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `value` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/lerp.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L397)

___

### computeLerp

▸ **computeLerp**(`range`, `dataType`, `value`): `number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `value` | `number` |

#### Returns

`number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/webgl/lerp.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L339)

___

### defineInvlerpShaderFunction

▸ **defineInvlerpShaderFunction**(`builder`, `name`, `dataType`, `clamp?`): [`ShaderCodePart`](webgl_shader.md#shadercodepart)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) | `undefined` |
| `name` | `string` | `undefined` |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) | `undefined` |
| `clamp` | `boolean` | `false` |

#### Returns

[`ShaderCodePart`](webgl_shader.md#shadercodepart)

#### Defined in

[src/neuroglancer/webgl/lerp.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L249)

___

### defineLerpShaderFunction

▸ **defineLerpShaderFunction**(`builder`, `name`, `dataType`): [`ShaderCodePart`](webgl_shader.md#shadercodepart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |
| `name` | `string` |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |

#### Returns

[`ShaderCodePart`](webgl_shader.md#shadercodepart)

#### Defined in

[src/neuroglancer/webgl/lerp.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L265)

___

### enableLerpShaderFunction

▸ **enableLerpShaderFunction**(`shader`, `name`, `dataType`, `interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |
| `name` | `string` |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `interval` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/lerp.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L281)

___

### getIntervalBoundsEffectiveFraction

▸ **getIntervalBoundsEffectiveFraction**(`dataType`, `interval`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `interval` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/lerp.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/lerp.ts#L381)
