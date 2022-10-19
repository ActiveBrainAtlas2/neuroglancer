[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md) / ShaderBuilder

# Class: ShaderBuilder

[neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md).ShaderBuilder

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_shader.ShaderBuilder.md#constructor)

### Properties

- [attributes](neuroglancer_webgl_shader.ShaderBuilder.md#attributes)
- [attributesCode](neuroglancer_webgl_shader.ShaderBuilder.md#attributescode)
- [fragmentCode](neuroglancer_webgl_shader.ShaderBuilder.md#fragmentcode)
- [fragmentExtensions](neuroglancer_webgl_shader.ShaderBuilder.md#fragmentextensions)
- [fragmentExtensionsSet](neuroglancer_webgl_shader.ShaderBuilder.md#fragmentextensionsset)
- [fragmentMain](neuroglancer_webgl_shader.ShaderBuilder.md#fragmentmain)
- [gl](neuroglancer_webgl_shader.ShaderBuilder.md#gl)
- [initializers](neuroglancer_webgl_shader.ShaderBuilder.md#initializers)
- [nextSymbolID](neuroglancer_webgl_shader.ShaderBuilder.md#nextsymbolid)
- [nextTextureUnit](neuroglancer_webgl_shader.ShaderBuilder.md#nexttextureunit)
- [outputBufferCode](neuroglancer_webgl_shader.ShaderBuilder.md#outputbuffercode)
- [required](neuroglancer_webgl_shader.ShaderBuilder.md#required)
- [textureUnits](neuroglancer_webgl_shader.ShaderBuilder.md#textureunits)
- [uniforms](neuroglancer_webgl_shader.ShaderBuilder.md#uniforms)
- [uniformsCode](neuroglancer_webgl_shader.ShaderBuilder.md#uniformscode)
- [varyingsCodeFS](neuroglancer_webgl_shader.ShaderBuilder.md#varyingscodefs)
- [varyingsCodeVS](neuroglancer_webgl_shader.ShaderBuilder.md#varyingscodevs)
- [vertexCode](neuroglancer_webgl_shader.ShaderBuilder.md#vertexcode)
- [vertexDebugOutputs](neuroglancer_webgl_shader.ShaderBuilder.md#vertexdebugoutputs)
- [vertexMain](neuroglancer_webgl_shader.ShaderBuilder.md#vertexmain)

### Methods

- [addAttribute](neuroglancer_webgl_shader.ShaderBuilder.md#addattribute)
- [addFragmentCode](neuroglancer_webgl_shader.ShaderBuilder.md#addfragmentcode)
- [addFragmentExtension](neuroglancer_webgl_shader.ShaderBuilder.md#addfragmentextension)
- [addInitializer](neuroglancer_webgl_shader.ShaderBuilder.md#addinitializer)
- [addOutputBuffer](neuroglancer_webgl_shader.ShaderBuilder.md#addoutputbuffer)
- [addTextureSampler](neuroglancer_webgl_shader.ShaderBuilder.md#addtexturesampler)
- [addUniform](neuroglancer_webgl_shader.ShaderBuilder.md#adduniform)
- [addVarying](neuroglancer_webgl_shader.ShaderBuilder.md#addvarying)
- [addVertexCode](neuroglancer_webgl_shader.ShaderBuilder.md#addvertexcode)
- [addVertexDebugOutput](neuroglancer_webgl_shader.ShaderBuilder.md#addvertexdebugoutput)
- [addVertexMain](neuroglancer_webgl_shader.ShaderBuilder.md#addvertexmain)
- [addVertexPositionDebugOutput](neuroglancer_webgl_shader.ShaderBuilder.md#addvertexpositiondebugoutput)
- [allocateTextureUnit](neuroglancer_webgl_shader.ShaderBuilder.md#allocatetextureunit)
- [build](neuroglancer_webgl_shader.ShaderBuilder.md#build)
- [require](neuroglancer_webgl_shader.ShaderBuilder.md#require)
- [setFragmentMain](neuroglancer_webgl_shader.ShaderBuilder.md#setfragmentmain)
- [setFragmentMainFunction](neuroglancer_webgl_shader.ShaderBuilder.md#setfragmentmainfunction)
- [setVertexMain](neuroglancer_webgl_shader.ShaderBuilder.md#setvertexmain)
- [symbol](neuroglancer_webgl_shader.ShaderBuilder.md#symbol)

## Constructors

### constructor

• **new ShaderBuilder**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Defined in

[src/neuroglancer/webgl/shader.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L378)

## Properties

### attributes

• `Private` **attributes**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L374)

___

### attributesCode

• `Private` **attributesCode**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L362)

___

### fragmentCode

• `Private` **fragmentCode**: [`ShaderCode`](neuroglancer_webgl_shader.ShaderCode.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:369](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L369)

___

### fragmentExtensions

• `Private` **fragmentExtensions**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L366)

___

### fragmentExtensionsSet

• `Private` **fragmentExtensionsSet**: `Set`<`string`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:365](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L365)

___

### fragmentMain

• `Private` **fragmentMain**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L371)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

___

### initializers

• `Private` **initializers**: [`ShaderInitializer`](../modules/neuroglancer_webgl_shader.md#shaderinitializer)[] = `[]`

#### Defined in

[src/neuroglancer/webgl/shader.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L375)

___

### nextSymbolID

• `Private` **nextSymbolID**: `number` = `0`

#### Defined in

[src/neuroglancer/webgl/shader.ts:359](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L359)

___

### nextTextureUnit

• `Private` **nextTextureUnit**: `number` = `0`

#### Defined in

[src/neuroglancer/webgl/shader.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L360)

___

### outputBufferCode

• `Private` **outputBufferCode**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:370](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L370)

___

### required

• `Private` **required**: `Set`<[`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule)\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L372)

___

### textureUnits

• `Private` **textureUnits**: `Map`<`Symbol`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L376)

___

### uniforms

• `Private` **uniforms**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L373)

___

### uniformsCode

• `Private` **uniformsCode**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L361)

___

### varyingsCodeFS

• `Private` **varyingsCodeFS**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L364)

___

### varyingsCodeVS

• `Private` **varyingsCodeVS**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L363)

___

### vertexCode

• `Private` **vertexCode**: [`ShaderCode`](neuroglancer_webgl_shader.ShaderCode.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L367)

___

### vertexDebugOutputs

• `Private` **vertexDebugOutputs**: [`VertexDebugOutput`](../interfaces/neuroglancer_webgl_shader._internal_.VertexDebugOutput.md)[] = `[]`

#### Defined in

[src/neuroglancer/webgl/shader.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L377)

___

### vertexMain

• `Private` **vertexMain**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:368](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L368)

## Methods

### addAttribute

▸ **addAttribute**(`typeName`, `name`, `location?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |
| `name` | `string` |
| `location?` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L420)

___

### addFragmentCode

▸ **addFragmentCode**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L461)

___

### addFragmentExtension

▸ **addFragmentExtension**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:449](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L449)

___

### addInitializer

▸ **addInitializer**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`ShaderInitializer`](../modules/neuroglancer_webgl_shader.md#shaderinitializer) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:482](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L482)

___

### addOutputBuffer

▸ **addOutputBuffer**(`typeName`, `name`, `location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |
| `name` | `string` |
| `location` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L432)

___

### addTextureSampler

▸ **addTextureSampler**(`samplerType`, `name`, `symbol`, `extent?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `samplerType` | [`ShaderSamplerType`](../modules/neuroglancer_webgl_shader.md#shadersamplertype) |
| `name` | `string` |
| `symbol` | `Symbol` |
| `extent?` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L399)

___

### addUniform

▸ **addUniform**(`typeName`, `name`, `extent?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |
| `name` | `string` |
| `extent?` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L439)

___

### addVarying

▸ **addVarying**(`typeName`, `name`, `interpolationMode?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `typeName` | `string` | `undefined` |
| `name` | `string` | `undefined` |
| `interpolationMode` | [`ShaderInterpolationMode`](../modules/neuroglancer_webgl_shader.md#shaderinterpolationmode) | `''` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L427)

___

### addVertexCode

▸ **addVertexCode**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:457](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L457)

___

### addVertexDebugOutput

▸ **addVertexDebugOutput**(`typeName`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | [`DebugOutputType`](../modules/neuroglancer_webgl_shader.md#debugoutputtype) |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L384)

___

### addVertexMain

▸ **addVertexMain**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L468)

___

### addVertexPositionDebugOutput

▸ **addVertexPositionDebugOutput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L380)

___

### allocateTextureUnit

▸ **allocateTextureUnit**(`symbol`, `count?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `symbol` | `Symbol` | `undefined` |
| `count` | `number` | `1` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L389)

___

### build

▸ **build**(): [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Returns

[`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L494)

___

### require

▸ **require**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:486](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L486)

___

### setFragmentMain

▸ **setFragmentMain**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L472)

___

### setFragmentMainFunction

▸ **setFragmentMainFunction**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:478](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L478)

___

### setVertexMain

▸ **setVertexMain**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L465)

___

### symbol

▸ **symbol**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader.ts#L416)
