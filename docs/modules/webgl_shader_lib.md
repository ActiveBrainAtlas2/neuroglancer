[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/shader\_lib

# Module: webgl/shader\_lib

## Table of contents

### Variables

- [dataTypeShaderDefinition](webgl_shader_lib.md#datatypeshaderdefinition)
- [glsl\_addSaturateInt32](webgl_shader_lib.md#glsl_addsaturateint32)
- [glsl\_addSaturateUint32](webgl_shader_lib.md#glsl_addsaturateuint32)
- [glsl\_addSaturateUint64](webgl_shader_lib.md#glsl_addsaturateuint64)
- [glsl\_addUint64](webgl_shader_lib.md#glsl_adduint64)
- [glsl\_clipLineToDepthRange](webgl_shader_lib.md#glsl_cliplinetodepthrange)
- [glsl\_compareLessThanUint64](webgl_shader_lib.md#glsl_comparelessthanuint64)
- [glsl\_equalUint64](webgl_shader_lib.md#glsl_equaluint64)
- [glsl\_float](webgl_shader_lib.md#glsl_float)
- [glsl\_getFortranOrderIndex](webgl_shader_lib.md#glsl_getfortranorderindex)
- [glsl\_hsvToRgb](webgl_shader_lib.md#glsl_hsvtorgb)
- [glsl\_int16](webgl_shader_lib.md#glsl_int16)
- [glsl\_int32](webgl_shader_lib.md#glsl_int32)
- [glsl\_int8](webgl_shader_lib.md#glsl_int8)
- [glsl\_log2Exact](webgl_shader_lib.md#glsl_log2exact)
- [glsl\_mixLinear](webgl_shader_lib.md#glsl_mixlinear)
- [glsl\_shiftLeftSaturateUint32](webgl_shader_lib.md#glsl_shiftleftsaturateuint32)
- [glsl\_shiftLeftUint64](webgl_shader_lib.md#glsl_shiftleftuint64)
- [glsl\_shiftRightUint64](webgl_shader_lib.md#glsl_shiftrightuint64)
- [glsl\_simpleFloatHash](webgl_shader_lib.md#glsl_simplefloathash)
- [glsl\_subtractSaturateInt32](webgl_shader_lib.md#glsl_subtractsaturateint32)
- [glsl\_subtractSaturateUint32](webgl_shader_lib.md#glsl_subtractsaturateuint32)
- [glsl\_subtractSaturateUint64](webgl_shader_lib.md#glsl_subtractsaturateuint64)
- [glsl\_subtractUint64](webgl_shader_lib.md#glsl_subtractuint64)
- [glsl\_uint16](webgl_shader_lib.md#glsl_uint16)
- [glsl\_uint32](webgl_shader_lib.md#glsl_uint32)
- [glsl\_uint64](webgl_shader_lib.md#glsl_uint64)
- [glsl\_uint8](webgl_shader_lib.md#glsl_uint8)
- [glsl\_unpackUint64leFromUint32](webgl_shader_lib.md#glsl_unpackuint64lefromuint32)
- [webglTypeSizeInBytes](webgl_shader_lib.md#webgltypesizeinbytes)

### Functions

- [defineVectorArrayVertexShaderInput](webgl_shader_lib.md#definevectorarrayvertexshaderinput)
- [getShaderType](webgl_shader_lib.md#getshadertype)
- [getShaderVectorType](webgl_shader_lib.md#getshadervectortype)

## Variables

### dataTypeShaderDefinition

• `Const` **dataTypeShaderDefinition**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), [`ShaderCodePart`](webgl_shader.md#shadercodepart)\>

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L474)

___

### glsl\_addSaturateInt32

• `Const` **glsl\_addSaturateInt32**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:415](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L415)

___

### glsl\_addSaturateUint32

• `Const` **glsl\_addSaturateUint32**: ``"\nhighp uint addSaturate(highp uint x, highp uint y) {\n  highp uint result = x + y;\n  if (result < x) return 0xffffffffu;\n  return result;\n}\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L399)

___

### glsl\_addSaturateUint64

• `Const` **glsl\_addSaturateUint64**: (`string` \| `string`[])[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L109)

___

### glsl\_addUint64

• `Const` **glsl\_addUint64**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L96)

___

### glsl\_clipLineToDepthRange

• `Const` **glsl\_clipLineToDepthRange**: ``"\nbool clipLineToDepthRange(inout highp vec4 a, inout highp vec4 b) {\n  highp float tmin = 0.0, tmax = 1.0;\n  highp float k1 = b.w - a.w + a.z - b.z;\n  highp float k2 = a.w - b.w + a.z - b.z;\n  highp float q1 = (a.z - a.w) / k1;\n  highp float q2 = (a.z + a.w) / k2;\n  if (k1 > 0.0) tmin = max(tmin, q1);\n  else if (k1 < 0.0) tmax = min(tmax, q1);\n  if (k2 > 0.0) tmax = min(tmax, q2);\n  else if (k2 < 0.0) tmin = max(tmin, q2);\n  if (tmin <= tmax) {\n    highp vec4 tempA = a;\n    highp vec4 tempB = b;\n    a = mix(tempA, tempB, tmin);\n    b = mix(tempA, tempB, tmax);\n    return true;\n  }\n  return false;\n}\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L362)

___

### glsl\_compareLessThanUint64

• `Const` **glsl\_compareLessThanUint64**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L75)

___

### glsl\_equalUint64

• `Const` **glsl\_equalUint64**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L67)

___

### glsl\_float

• `Const` **glsl\_float**: ``"\nhighp float toRaw(highp float x) { return x; }\nhighp float toNormalized(highp float x) { return x; }\nvec2 toRaw(vec2 x) { return x; }\nvec2 toNormalized(vec2 x) { return x; }\nvec3 toRaw(vec3 x) { return x; }\nvec3 toNormalized(vec3 x) { return x; }\nvec4 toRaw(vec4 x) { return x; }\nvec4 toNormalized(vec4 x) { return x; }\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L233)

___

### glsl\_getFortranOrderIndex

• **glsl\_getFortranOrderIndex**: `string`

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L339)

___

### glsl\_hsvToRgb

• **glsl\_hsvToRgb**: `string`

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L25)

___

### glsl\_int16

• `Const` **glsl\_int16**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L271)

___

### glsl\_int32

• `Const` **glsl\_int32**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L318)

___

### glsl\_int8

• `Const` **glsl\_int8**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L199)

___

### glsl\_log2Exact

• `Const` **glsl\_log2Exact**: ``"\nhighp uint log2Exact(highp uint i) {\n  highp uint r;\n  r = uint((i & 0xAAAAAAAAu) != 0u);\n  r |= uint((i & 0xFFFF0000u) != 0u) << 4;\n  r |= uint((i & 0xFF00FF00u) != 0u) << 3;\n  r |= uint((i & 0xF0F0F0F0u) != 0u) << 2;\n  r |= uint((i & 0xCCCCCCCCu) != 0u) << 1;\n  return r;\n}\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L345)

___

### glsl\_mixLinear

• `Const` **glsl\_mixLinear**: ``"\nfloat mixLinear(float x, float y, float a) { return mix(x, y, a); }\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L20)

___

### glsl\_shiftLeftSaturateUint32

• `Const` **glsl\_shiftLeftSaturateUint32**: ``"\nhighp uint shiftLeftSaturate(highp uint x, int shiftAmount) {\n  highp uint result = x << shiftAmount;\n  if ((result >> shiftAmount) != x) return 0xffffffffu;\n  return result;\n}\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L391)

___

### glsl\_shiftLeftUint64

• `Const` **glsl\_shiftLeftUint64**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L147)

___

### glsl\_shiftRightUint64

• `Const` **glsl\_shiftRightUint64**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L133)

___

### glsl\_simpleFloatHash

• `Const` **glsl\_simpleFloatHash**: ``"\nhighp float simpleFloatHash(highp vec2 co) {\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:385](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L385)

___

### glsl\_subtractSaturateInt32

• `Const` **glsl\_subtractSaturateInt32**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L429)

___

### glsl\_subtractSaturateUint32

• `Const` **glsl\_subtractSaturateUint32**: ``"\nhighp uint subtractSaturate(highp uint x, highp uint y) {\n  highp uint result = x - y;\n  if (result > x) return 0u;\n  return result;\n}\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L407)

___

### glsl\_subtractSaturateUint64

• `Const` **glsl\_subtractSaturateUint64**: (`string` \| `string`[])[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L121)

___

### glsl\_subtractUint64

• `Const` **glsl\_subtractUint64**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L84)

___

### glsl\_uint16

• `Const` **glsl\_uint16**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L244)

___

### glsl\_uint32

• `Const` **glsl\_uint32**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L296)

___

### glsl\_uint64

• `Const` **glsl\_uint64**: ``"\nstruct uint64_t {\n  highp uvec2 value;\n};\nstruct uint64x2_t {\n  highp uvec4 value;\n};\nuint64_t mixLinear(uint64_t x, uint64_t y, float a) {\n  return x;\n}\nuint64_t toUint64(uint64_t x) { return x; }\n"``

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L39)

___

### glsl\_uint8

• `Const` **glsl\_uint8**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L161)

___

### glsl\_unpackUint64leFromUint32

• `Const` **glsl\_unpackUint64leFromUint32**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L52)

___

### webglTypeSizeInBytes

• `Const` **webglTypeSizeInBytes**: `Object`

#### Index signature

▪ [webglType: `number`]: `number`

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:491](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L491)

## Functions

### defineVectorArrayVertexShaderInput

▸ **defineVectorArrayVertexShaderInput**(`builder`, `typeName`, `attributeType`, `normalized`, `name`, `vectorRank`, `arraySize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) | `undefined` |
| `typeName` | ``"float"`` \| ``"int"`` \| ``"uint"`` | `undefined` |
| `attributeType` | `number` | `undefined` |
| `normalized` | `boolean` | `undefined` |
| `name` | `string` | `undefined` |
| `vectorRank` | `number` | `undefined` |
| `arraySize` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:501](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L501)

___

### getShaderType

▸ **getShaderType**(`dataType`, `numComponents?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) | `undefined` |
| `numComponents` | `number` | `1` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L443)

___

### getShaderVectorType

▸ **getShaderVectorType**(`typeName`, `n`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | ``"float"`` \| ``"int"`` \| ``"uint"`` |
| `n` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/shader_lib.ts:485](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_lib.ts#L485)
