[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/shader\_testing

# Module: neuroglancer/webgl/shader\_testing

## Table of contents

### Classes

- [FragmentShaderTester](../classes/neuroglancer_webgl_shader_testing.FragmentShaderTester.md)

### Interfaces

- [FragmentShaderTestOutputs](../interfaces/neuroglancer_webgl_shader_testing.FragmentShaderTestOutputs.md)

### Type Aliases

- [ShaderIoJavascriptType](neuroglancer_webgl_shader_testing.md#shaderiojavascripttype)
- [ShaderIoType](neuroglancer_webgl_shader_testing.md#shaderiotype)

### Functions

- [fragmentShaderTest](neuroglancer_webgl_shader_testing.md#fragmentshadertest)

## Type Aliases

### ShaderIoJavascriptType

Ƭ **ShaderIoJavascriptType**<`T`\>: `T` extends [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) ? `T` extends [`UINT64`](../enums/neuroglancer_util_data_type.DataType.md#uint64) ? [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) : `number` : `T` extends ``"bool"`` ? `boolean` : `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ShaderIoType`](neuroglancer_webgl_shader_testing.md#shaderiotype) |

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L33)

___

### ShaderIoType

Ƭ **ShaderIoType**: ``"int"`` \| ``"uint"`` \| ``"float"`` \| ``"bool"`` \| [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L27)

## Functions

### fragmentShaderTest

▸ **fragmentShaderTest**<`Inputs`, `Outputs`\>(`inputs`, `outputs`, `f`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Inputs` | extends [`FragmentShaderTestOutputs`](../interfaces/neuroglancer_webgl_shader_testing.FragmentShaderTestOutputs.md) |
| `Outputs` | extends [`FragmentShaderTestOutputs`](../interfaces/neuroglancer_webgl_shader_testing.FragmentShaderTestOutputs.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | `Inputs` |
| `outputs` | `Outputs` |
| `f` | (`tester`: [`FragmentShaderTester`](../classes/neuroglancer_webgl_shader_testing.FragmentShaderTester.md)<`Inputs`, `Outputs`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L281)
