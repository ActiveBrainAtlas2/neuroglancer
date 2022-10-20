[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/layer\_control](../modules/neuroglancer_widget_layer_control.md) / LayerControlFactory

# Interface: LayerControlFactory<LayerType, ControlType\>

[neuroglancer/widget/layer_control](../modules/neuroglancer_widget_layer_control.md).LayerControlFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |
| `ControlType` | `unknown` |

## Hierarchy

- **`LayerControlFactory`**

  ↳ [`LayerControlDefinition`](neuroglancer_widget_layer_control.LayerControlDefinition.md)

## Table of contents

### Properties

- [activateTool](neuroglancer_widget_layer_control.LayerControlFactory.md#activatetool)
- [makeControl](neuroglancer_widget_layer_control.LayerControlFactory.md#makecontrol)

## Properties

### activateTool

• **activateTool**: (`activation`: [`ToolActivation`](../classes/neuroglancer_ui_tool.ToolActivation.md)<[`LayerControlTool`](../classes/neuroglancer_widget_layer_control.LayerControlTool.md)<`LayerType`\>\>, `control`: `ControlType`) => `void`

#### Type declaration

▸ (`activation`, `control`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/neuroglancer_ui_tool.ToolActivation.md)<[`LayerControlTool`](../classes/neuroglancer_widget_layer_control.LayerControlTool.md)<`LayerType`\>\> |
| `control` | `ControlType` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L44)

___

### makeControl

• **makeControl**: (`layer`: `LayerType`, `context`: [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md), `options`: { `display`: [`DisplayContext`](../classes/neuroglancer_display_context.DisplayContext.md) ; `labelContainer`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) ; `labelTextContainer`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) ; `visibility`: [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)  }) => { `control`: `ControlType` ; `controlElement`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)  }

#### Type declaration

▸ (`layer`, `context`, `options`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `options` | `Object` |
| `options.display` | [`DisplayContext`](../classes/neuroglancer_display_context.DisplayContext.md) |
| `options.labelContainer` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `options.labelTextContainer` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `options.visibility` | [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `control` | `ControlType` |
| `controlElement` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Defined in

[src/neuroglancer/widget/layer_control.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L36)
