[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ShaderBuilder

# Class: ShaderBuilder

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ShaderBuilder

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.ShaderBuilder.md#constructor)

### Properties

- [attributes](image_user_layer._internal_.ShaderBuilder.md#attributes)
- [attributesCode](image_user_layer._internal_.ShaderBuilder.md#attributescode)
- [fragmentCode](image_user_layer._internal_.ShaderBuilder.md#fragmentcode)
- [fragmentExtensions](image_user_layer._internal_.ShaderBuilder.md#fragmentextensions)
- [fragmentExtensionsSet](image_user_layer._internal_.ShaderBuilder.md#fragmentextensionsset)
- [fragmentMain](image_user_layer._internal_.ShaderBuilder.md#fragmentmain)
- [gl](image_user_layer._internal_.ShaderBuilder.md#gl)
- [initializers](image_user_layer._internal_.ShaderBuilder.md#initializers)
- [nextSymbolID](image_user_layer._internal_.ShaderBuilder.md#nextsymbolid)
- [nextTextureUnit](image_user_layer._internal_.ShaderBuilder.md#nexttextureunit)
- [outputBufferCode](image_user_layer._internal_.ShaderBuilder.md#outputbuffercode)
- [required](image_user_layer._internal_.ShaderBuilder.md#required)
- [textureUnits](image_user_layer._internal_.ShaderBuilder.md#textureunits)
- [uniforms](image_user_layer._internal_.ShaderBuilder.md#uniforms)
- [uniformsCode](image_user_layer._internal_.ShaderBuilder.md#uniformscode)
- [varyingsCodeFS](image_user_layer._internal_.ShaderBuilder.md#varyingscodefs)
- [varyingsCodeVS](image_user_layer._internal_.ShaderBuilder.md#varyingscodevs)
- [vertexCode](image_user_layer._internal_.ShaderBuilder.md#vertexcode)
- [vertexDebugOutputs](image_user_layer._internal_.ShaderBuilder.md#vertexdebugoutputs)
- [vertexMain](image_user_layer._internal_.ShaderBuilder.md#vertexmain)

### Methods

- [addAttribute](image_user_layer._internal_.ShaderBuilder.md#addattribute)
- [addFragmentCode](image_user_layer._internal_.ShaderBuilder.md#addfragmentcode)
- [addFragmentExtension](image_user_layer._internal_.ShaderBuilder.md#addfragmentextension)
- [addInitializer](image_user_layer._internal_.ShaderBuilder.md#addinitializer)
- [addOutputBuffer](image_user_layer._internal_.ShaderBuilder.md#addoutputbuffer)
- [addTextureSampler](image_user_layer._internal_.ShaderBuilder.md#addtexturesampler)
- [addUniform](image_user_layer._internal_.ShaderBuilder.md#adduniform)
- [addVarying](image_user_layer._internal_.ShaderBuilder.md#addvarying)
- [addVertexCode](image_user_layer._internal_.ShaderBuilder.md#addvertexcode)
- [addVertexDebugOutput](image_user_layer._internal_.ShaderBuilder.md#addvertexdebugoutput)
- [addVertexMain](image_user_layer._internal_.ShaderBuilder.md#addvertexmain)
- [addVertexPositionDebugOutput](image_user_layer._internal_.ShaderBuilder.md#addvertexpositiondebugoutput)
- [allocateTextureUnit](image_user_layer._internal_.ShaderBuilder.md#allocatetextureunit)
- [build](image_user_layer._internal_.ShaderBuilder.md#build)
- [require](image_user_layer._internal_.ShaderBuilder.md#require)
- [setFragmentMain](image_user_layer._internal_.ShaderBuilder.md#setfragmentmain)
- [setFragmentMainFunction](image_user_layer._internal_.ShaderBuilder.md#setfragmentmainfunction)
- [setVertexMain](image_user_layer._internal_.ShaderBuilder.md#setvertexmain)
- [symbol](image_user_layer._internal_.ShaderBuilder.md#symbol)

## Constructors

### constructor

• **new ShaderBuilder**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Defined in

[src/neuroglancer/webgl/shader.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L378)

## Properties

### attributes

• `Private` **attributes**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L374)

___

### attributesCode

• `Private` **attributesCode**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L362)

___

### fragmentCode

• `Private` **fragmentCode**: [`ShaderCode`](image_user_layer._internal_.ShaderCode.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:369](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L369)

___

### fragmentExtensions

• `Private` **fragmentExtensions**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L366)

___

### fragmentExtensionsSet

• `Private` **fragmentExtensionsSet**: `Set`<`string`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:365](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L365)

___

### fragmentMain

• `Private` **fragmentMain**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L371)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### initializers

• `Private` **initializers**: [`ShaderInitializer`](../modules/image_user_layer._internal_.md#shaderinitializer)[] = `[]`

#### Defined in

[src/neuroglancer/webgl/shader.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L375)

___

### nextSymbolID

• `Private` **nextSymbolID**: `number` = `0`

#### Defined in

[src/neuroglancer/webgl/shader.ts:359](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L359)

___

### nextTextureUnit

• `Private` **nextTextureUnit**: `number` = `0`

#### Defined in

[src/neuroglancer/webgl/shader.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L360)

___

### outputBufferCode

• `Private` **outputBufferCode**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:370](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L370)

___

### required

• `Private` **required**: `Set`<[`ShaderModule`](../modules/image_user_layer._internal_.md#shadermodule)\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L372)

___

### textureUnits

• `Private` **textureUnits**: `Map`<`Symbol`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L376)

___

### uniforms

• `Private` **uniforms**: `string`[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L373)

___

### uniformsCode

• `Private` **uniformsCode**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L361)

___

### varyingsCodeFS

• `Private` **varyingsCodeFS**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L364)

___

### varyingsCodeVS

• `Private` **varyingsCodeVS**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L363)

___

### vertexCode

• `Private` **vertexCode**: [`ShaderCode`](image_user_layer._internal_.ShaderCode.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L367)

___

### vertexDebugOutputs

• `Private` **vertexDebugOutputs**: [`VertexDebugOutput`](../interfaces/axes_lines._internal_.VertexDebugOutput.md)[] = `[]`

#### Defined in

[src/neuroglancer/webgl/shader.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L377)

___

### vertexMain

• `Private` **vertexMain**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader.ts:368](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L368)

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

[src/neuroglancer/webgl/shader.ts:420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L420)

___

### addFragmentCode

▸ **addFragmentCode**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ShaderCodePart`](../modules/image_user_layer._internal_.md#shadercodepart) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L461)

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

[src/neuroglancer/webgl/shader.ts:449](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L449)

___

### addInitializer

▸ **addInitializer**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`ShaderInitializer`](../modules/image_user_layer._internal_.md#shaderinitializer) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:482](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L482)

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

[src/neuroglancer/webgl/shader.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L432)

___

### addTextureSampler

▸ **addTextureSampler**(`samplerType`, `name`, `symbol`, `extent?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `samplerType` | [`ShaderSamplerType`](../modules/image_user_layer._internal_.md#shadersamplertype) |
| `name` | `string` |
| `symbol` | `Symbol` |
| `extent?` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L399)

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

[src/neuroglancer/webgl/shader.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L439)

___

### addVarying

▸ **addVarying**(`typeName`, `name`, `interpolationMode?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `typeName` | `string` | `undefined` |
| `name` | `string` | `undefined` |
| `interpolationMode` | [`ShaderInterpolationMode`](../modules/image_user_layer._internal_.md#shaderinterpolationmode) | `''` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L427)

___

### addVertexCode

▸ **addVertexCode**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ShaderCodePart`](../modules/image_user_layer._internal_.md#shadercodepart) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:457](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L457)

___

### addVertexDebugOutput

▸ **addVertexDebugOutput**(`typeName`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | [`DebugOutputType`](../modules/axes_lines._internal_.md#debugoutputtype) |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L384)

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

[src/neuroglancer/webgl/shader.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L468)

___

### addVertexPositionDebugOutput

▸ **addVertexPositionDebugOutput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L380)

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

[src/neuroglancer/webgl/shader.ts:389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L389)

___

### build

▸ **build**(): [`ShaderProgram`](axes_lines._internal_.ShaderProgram.md)

#### Returns

[`ShaderProgram`](axes_lines._internal_.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L494)

___

### require

▸ **require**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`ShaderModule`](../modules/image_user_layer._internal_.md#shadermodule) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:486](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L486)

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

[src/neuroglancer/webgl/shader.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L472)

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

[src/neuroglancer/webgl/shader.ts:478](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L478)

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

[src/neuroglancer/webgl/shader.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L465)

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

[src/neuroglancer/webgl/shader.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L416)
