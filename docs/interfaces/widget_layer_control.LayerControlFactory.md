[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/layer\_control](../modules/widget_layer_control.md) / LayerControlFactory

# Interface: LayerControlFactory<LayerType, ControlType\>

[widget/layer_control](../modules/widget_layer_control.md).LayerControlFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |
| `ControlType` | `unknown` |

## Hierarchy

- **`LayerControlFactory`**

  ↳ [`LayerControlDefinition`](widget_layer_control.LayerControlDefinition.md)

## Table of contents

### Methods

- [activateTool](widget_layer_control.LayerControlFactory.md#activatetool)
- [makeControl](widget_layer_control.LayerControlFactory.md#makecontrol)

## Methods

### activateTool

▸ **activateTool**(`activation`, `control`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/ui_tool.ToolActivation.md)<[`LayerControlTool`](../classes/widget_layer_control.LayerControlTool.md)<`LayerType`\>\> |
| `control` | `ControlType` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L45)

___

### makeControl

▸ **makeControl**(`layer`, `context`, `options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `context` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |
| `options` | `Object` |
| `options.display` | [`DisplayContext`](../classes/annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `options.labelContainer` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `options.labelTextContainer` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `options.visibility` | [`WatchableVisibilityPriority`](../classes/visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `control` | `ControlType` |
| `controlElement` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Defined in

[src/neuroglancer/widget/layer_control.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L36)
