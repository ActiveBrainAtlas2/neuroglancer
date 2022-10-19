[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/shader\_ui\_controls

# Module: neuroglancer/webgl/shader\_ui\_controls

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_webgl_shader_ui_controls._internal_.md)

### Classes

- [ShaderControlState](../classes/neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)
- [WatchableShaderUiControls](../classes/neuroglancer_webgl_shader_ui_controls.WatchableShaderUiControls.md)

### Interfaces

- [ImageDataSpecification](../interfaces/neuroglancer_webgl_shader_ui_controls.ImageDataSpecification.md)
- [InvlerpParameters](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)
- [ShaderCheckboxControl](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderCheckboxControl.md)
- [ShaderColorControl](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderColorControl.md)
- [ShaderControlParseError](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlParseError.md)
- [ShaderControlsBuilderState](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)
- [ShaderControlsParseResult](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsParseResult.md)
- [ShaderDataContext](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderDataContext.md)
- [ShaderInvlerpControl](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderInvlerpControl.md)
- [ShaderSliderControl](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderSliderControl.md)
- [SingleShaderControlState](../interfaces/neuroglancer_webgl_shader_ui_controls.SingleShaderControlState.md)

### Type Aliases

- [Controls](neuroglancer_webgl_shader_ui_controls.md#controls)
- [ShaderBuilderValues](neuroglancer_webgl_shader_ui_controls.md#shaderbuildervalues)
- [ShaderControlMap](neuroglancer_webgl_shader_ui_controls.md#shadercontrolmap)
- [ShaderUiControl](neuroglancer_webgl_shader_ui_controls.md#shaderuicontrol)

### Functions

- [addControlsToBuilder](neuroglancer_webgl_shader_ui_controls.md#addcontrolstobuilder)
- [getFallbackBuilderState](neuroglancer_webgl_shader_ui_controls.md#getfallbackbuilderstate)
- [parseDirectiveParameters](neuroglancer_webgl_shader_ui_controls.md#parsedirectiveparameters)
- [parseShaderUiControls](neuroglancer_webgl_shader_ui_controls.md#parseshaderuicontrols)
- [setControlsInShader](neuroglancer_webgl_shader_ui_controls.md#setcontrolsinshader)
- [stripComments](neuroglancer_webgl_shader_ui_controls.md#stripcomments)

## Type Aliases

### Controls

Ƭ **Controls**: `Map`<`string`, [`ShaderUiControl`](neuroglancer_webgl_shader_ui_controls.md#shaderuicontrol)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L474)

___

### ShaderBuilderValues

Ƭ **ShaderBuilderValues**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L628)

___

### ShaderControlMap

Ƭ **ShaderControlMap**: `Map`<`string`, [`SingleShaderControlState`](../interfaces/neuroglancer_webgl_shader_ui_controls.SingleShaderControlState.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L626)

___

### ShaderUiControl

Ƭ **ShaderUiControl**: [`ShaderSliderControl`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderSliderControl.md) \| [`ShaderColorControl`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderColorControl.md) \| [`ShaderInvlerpControl`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderInvlerpControl.md) \| [`ShaderCheckboxControl`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderCheckboxControl.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L63)

## Functions

### addControlsToBuilder

▸ **addControlsToBuilder**(`builderState`, `builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builderState` | [`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md) |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L480)

___

### getFallbackBuilderState

▸ **getFallbackBuilderState**(`parseResult`): [`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parseResult` | [`ShaderControlsParseResult`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsParseResult.md) |

#### Returns

[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:637](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L637)

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
| `parameters` | [`DirectiveParameters`](neuroglancer_webgl_shader_ui_controls._internal_.md#directiveparameters) |

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L136)

___

### parseShaderUiControls

▸ **parseShaderUiControls**(`code`, `dataContext?`): [`ShaderControlsParseResult`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsParseResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `dataContext` | [`ShaderDataContext`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderDataContext.md) |

#### Returns

[`ShaderControlsParseResult`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsParseResult.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L419)

___

### setControlsInShader

▸ **setControlsInShader**(`gl`, `shader`, `shaderControlState`, `controls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |
| `shaderControlState` | [`ShaderControlState`](../classes/neuroglancer_webgl_shader_ui_controls.ShaderControlState.md) |
| `controls` | [`Controls`](neuroglancer_webgl_shader_ui_controls.md#controls) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L914)

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

[src/neuroglancer/webgl/shader_ui_controls.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L88)
