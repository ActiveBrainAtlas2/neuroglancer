[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/shader\_testing

# Module: webgl/shader\_testing

## Table of contents

### Classes

- [FragmentShaderTester](../classes/webgl_shader_testing.FragmentShaderTester.md)

### Interfaces

- [FragmentShaderTestOutputs](../interfaces/webgl_shader_testing.FragmentShaderTestOutputs.md)

### Type Aliases

- [ShaderIoJavascriptType](webgl_shader_testing.md#shaderiojavascripttype)
- [ShaderIoType](webgl_shader_testing.md#shaderiotype)

### Functions

- [fragmentShaderTest](webgl_shader_testing.md#fragmentshadertest)

## Type Aliases

### ShaderIoJavascriptType

Ƭ **ShaderIoJavascriptType**<`T`\>: `T` extends [`DataType`](../enums/util_data_type.DataType.md) ? `T` extends [`UINT64`](../enums/util_data_type.DataType.md#uint64) ? [`Uint64`](../classes/util_uint64.Uint64.md) : `number` : `T` extends ``"bool"`` ? `boolean` : `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ShaderIoType`](webgl_shader_testing.md#shaderiotype) |

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_testing.ts#L33)

___

### ShaderIoType

Ƭ **ShaderIoType**: ``"int"`` \| ``"uint"`` \| ``"float"`` \| ``"bool"`` \| [`DataType`](../enums/util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_testing.ts#L27)

## Functions

### fragmentShaderTest

▸ **fragmentShaderTest**<`Inputs`, `Outputs`\>(`inputs`, `outputs`, `f`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Inputs` | extends [`FragmentShaderTestOutputs`](../interfaces/webgl_shader_testing.FragmentShaderTestOutputs.md) |
| `Outputs` | extends [`FragmentShaderTestOutputs`](../interfaces/webgl_shader_testing.FragmentShaderTestOutputs.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | `Inputs` |
| `outputs` | `Outputs` |
| `f` | (`tester`: [`FragmentShaderTester`](../classes/webgl_shader_testing.FragmentShaderTester.md)<`Inputs`, `Outputs`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_testing.ts#L281)
