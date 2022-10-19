[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/shader\_ui\_controls

# Module: webgl/shader\_ui\_controls

## Table of contents

### Modules

- [&lt;internal\&gt;](webgl_shader_ui_controls._internal_.md)

### Classes

- [ShaderControlState](../classes/webgl_shader_ui_controls.ShaderControlState.md)
- [WatchableShaderUiControls](../classes/webgl_shader_ui_controls.WatchableShaderUiControls.md)

### Interfaces

- [ImageDataSpecification](../interfaces/webgl_shader_ui_controls.ImageDataSpecification.md)
- [InvlerpParameters](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)
- [ShaderCheckboxControl](../interfaces/webgl_shader_ui_controls.ShaderCheckboxControl.md)
- [ShaderColorControl](../interfaces/webgl_shader_ui_controls.ShaderColorControl.md)
- [ShaderControlParseError](../interfaces/webgl_shader_ui_controls.ShaderControlParseError.md)
- [ShaderControlsBuilderState](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)
- [ShaderControlsParseResult](../interfaces/webgl_shader_ui_controls.ShaderControlsParseResult.md)
- [ShaderDataContext](../interfaces/webgl_shader_ui_controls.ShaderDataContext.md)
- [ShaderInvlerpControl](../interfaces/webgl_shader_ui_controls.ShaderInvlerpControl.md)
- [ShaderSliderControl](../interfaces/webgl_shader_ui_controls.ShaderSliderControl.md)
- [SingleShaderControlState](../interfaces/webgl_shader_ui_controls.SingleShaderControlState.md)

### Type Aliases

- [Controls](webgl_shader_ui_controls.md#controls)
- [ShaderBuilderValues](webgl_shader_ui_controls.md#shaderbuildervalues)
- [ShaderControlMap](webgl_shader_ui_controls.md#shadercontrolmap)
- [ShaderUiControl](webgl_shader_ui_controls.md#shaderuicontrol)

### Functions

- [addControlsToBuilder](webgl_shader_ui_controls.md#addcontrolstobuilder)
- [getFallbackBuilderState](webgl_shader_ui_controls.md#getfallbackbuilderstate)
- [parseDirectiveParameters](webgl_shader_ui_controls.md#parsedirectiveparameters)
- [parseShaderUiControls](webgl_shader_ui_controls.md#parseshaderuicontrols)
- [setControlsInShader](webgl_shader_ui_controls.md#setcontrolsinshader)
- [stripComments](webgl_shader_ui_controls.md#stripcomments)

## Type Aliases

### Controls

Ƭ **Controls**: `Map`<`string`, [`ShaderUiControl`](webgl_shader_ui_controls.md#shaderuicontrol)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L474)

___

### ShaderBuilderValues

Ƭ **ShaderBuilderValues**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L628)

___

### ShaderControlMap

Ƭ **ShaderControlMap**: `Map`<`string`, [`SingleShaderControlState`](../interfaces/webgl_shader_ui_controls.SingleShaderControlState.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L626)

___

### ShaderUiControl

Ƭ **ShaderUiControl**: [`ShaderSliderControl`](../interfaces/webgl_shader_ui_controls.ShaderSliderControl.md) \| [`ShaderColorControl`](../interfaces/webgl_shader_ui_controls.ShaderColorControl.md) \| [`ShaderInvlerpControl`](../interfaces/webgl_shader_ui_controls.ShaderInvlerpControl.md) \| [`ShaderCheckboxControl`](../interfaces/webgl_shader_ui_controls.ShaderCheckboxControl.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L63)

## Functions

### addControlsToBuilder

▸ **addControlsToBuilder**(`builderState`, `builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builderState` | [`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md) |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L480)

___

### getFallbackBuilderState

▸ **getFallbackBuilderState**(`parseResult`): [`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parseResult` | [`ShaderControlsParseResult`](../interfaces/webgl_shader_ui_controls.ShaderControlsParseResult.md) |

#### Returns

[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:637](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L637)

___

### parseDirectiveParameters

▸ **parseDirectiveParameters**(`input`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `string`[] |
| `parameters` | [`DirectiveParameters`](webgl_shader_ui_controls._internal_.md#directiveparameters) |

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L136)

___

### parseShaderUiControls

▸ **parseShaderUiControls**(`code`, `dataContext?`): [`ShaderControlsParseResult`](../interfaces/webgl_shader_ui_controls.ShaderControlsParseResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `dataContext` | [`ShaderDataContext`](../interfaces/webgl_shader_ui_controls.ShaderDataContext.md) |

#### Returns

[`ShaderControlsParseResult`](../interfaces/webgl_shader_ui_controls.ShaderControlsParseResult.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L419)

___

### setControlsInShader

▸ **setControlsInShader**(`gl`, `shader`, `shaderControlState`, `controls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |
| `shaderControlState` | [`ShaderControlState`](../classes/webgl_shader_ui_controls.ShaderControlState.md) |
| `controls` | [`Controls`](webgl_shader_ui_controls.md#controls) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L914)

___

### stripComments

▸ **stripComments**(`code`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L88)
