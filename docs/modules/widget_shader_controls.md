[neuroglancer](../README.md) / [Modules](../modules.md) / widget/shader\_controls

# Module: widget/shader\_controls

## Table of contents

### Modules

- [&lt;internal\&gt;](widget_shader_controls._internal_.md)

### Classes

- [ShaderControls](../classes/widget_shader_controls.ShaderControls.md)

### Interfaces

- [LegendShaderOptions](../interfaces/widget_shader_controls.LegendShaderOptions.md)
- [ShaderControlsOptions](../interfaces/widget_shader_controls.ShaderControlsOptions.md)

### Variables

- [SHADER\_CONTROL\_TOOL\_ID](widget_shader_controls.md#shader_control_tool_id)

### Functions

- [registerLayerShaderControlsTool](widget_shader_controls.md#registerlayershadercontrolstool)

## Variables

### SHADER\_CONTROL\_TOOL\_ID

• `Const` **SHADER\_CONTROL\_TOOL\_ID**: ``"shaderControl"``

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L147)

## Functions

### registerLayerShaderControlsTool

▸ **registerLayerShaderControlsTool**<`LayerType`\>(`layerType`, `getter`, `toolId?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layerType` | typeof [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) & [`AnyConstructor`](util_mixin.md#anyconstructor)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`AnyConstructor`](util_mixin.md#anyconstructor)<`LayerType`\> | `undefined` |
| `getter` | (`layer`: `LayerType`) => [`LayerShaderControls`](../interfaces/widget_shader_controls._internal_.LayerShaderControls.md) | `undefined` |
| `toolId` | `string` | `SHADER_CONTROL_TOOL_ID` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L174)
