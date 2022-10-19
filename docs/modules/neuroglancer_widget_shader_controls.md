[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/shader\_controls

# Module: neuroglancer/widget/shader\_controls

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_widget_shader_controls._internal_.md)

### Classes

- [ShaderControls](../classes/neuroglancer_widget_shader_controls.ShaderControls.md)

### Interfaces

- [LegendShaderOptions](../interfaces/neuroglancer_widget_shader_controls.LegendShaderOptions.md)
- [ShaderControlsOptions](../interfaces/neuroglancer_widget_shader_controls.ShaderControlsOptions.md)

### Variables

- [SHADER\_CONTROL\_TOOL\_ID](neuroglancer_widget_shader_controls.md#shader_control_tool_id)

### Functions

- [registerLayerShaderControlsTool](neuroglancer_widget_shader_controls.md#registerlayershadercontrolstool)

## Variables

### SHADER\_CONTROL\_TOOL\_ID

• `Const` **SHADER\_CONTROL\_TOOL\_ID**: ``"shaderControl"``

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L147)

## Functions

### registerLayerShaderControlsTool

▸ **registerLayerShaderControlsTool**<`LayerType`\>(`layerType`, `getter`, `toolId?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layerType` | typeof [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) & [`AnyConstructor`](neuroglancer_util_mixin.md#anyconstructor)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\> & [`AnyConstructor`](neuroglancer_util_mixin.md#anyconstructor)<`LayerType`\> | `undefined` |
| `getter` | (`layer`: `LayerType`) => [`LayerShaderControls`](../interfaces/neuroglancer_widget_shader_controls._internal_.LayerShaderControls.md) | `undefined` |
| `toolId` | `string` | `SHADER_CONTROL_TOOL_ID` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L174)
