[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / LayerControlFactory

# Interface: LayerControlFactory<LayerType, ControlType\>

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).LayerControlFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/layer.UserLayer.md) |
| `ControlType` | `unknown` |

## Hierarchy

- **`LayerControlFactory`**

  ↳ [`LayerControlDefinition`](segmentation_user_layer._internal_.LayerControlDefinition.md)

## Table of contents

### Methods

- [activateTool](segmentation_user_layer._internal_.LayerControlFactory.md#activatetool)
- [makeControl](segmentation_user_layer._internal_.LayerControlFactory.md#makecontrol)

## Methods

### activateTool

▸ **activateTool**(`activation`, `control`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/image_user_layer._internal_.ToolActivation.md)<[`LayerControlTool`](../classes/segmentation_user_layer._internal_.LayerControlTool.md)<`LayerType`\>\> |
| `control` | `ControlType` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L45)

___

### makeControl

▸ **makeControl**(`layer`, `context`, `options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `context` | [`RefCounted`](../classes/axes_lines._internal_.RefCounted.md) |
| `options` | `Object` |
| `options.display` | [`DisplayContext`](../classes/display_context.DisplayContext.md) |
| `options.labelContainer` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |
| `options.labelTextContainer` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |
| `options.visibility` | [`WatchableVisibilityPriority`](../classes/data_panel_layout._internal_.WatchableVisibilityPriority.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `control` | `ControlType` |
| `controlElement` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |

#### Defined in

[src/neuroglancer/widget/layer_control.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L36)
