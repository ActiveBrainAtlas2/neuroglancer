[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/layer\_control](../modules/neuroglancer_widget_layer_control.md) / LayerControlDefinition

# Interface: LayerControlDefinition<LayerType, ControlType\>

[neuroglancer/widget/layer_control](../modules/neuroglancer_widget_layer_control.md).LayerControlDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |
| `ControlType` | `unknown` |

## Hierarchy

- [`LayerControlLabelOptions`](neuroglancer_widget_layer_control.LayerControlLabelOptions.md)<`LayerType`\>

- [`LayerControlFactory`](neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, `ControlType`\>

  ↳ **`LayerControlDefinition`**

## Table of contents

### Properties

- [label](neuroglancer_widget_layer_control.LayerControlDefinition.md#label)
- [title](neuroglancer_widget_layer_control.LayerControlDefinition.md#title)
- [toolDescription](neuroglancer_widget_layer_control.LayerControlDefinition.md#tooldescription)
- [toolJson](neuroglancer_widget_layer_control.LayerControlDefinition.md#tooljson)

### Methods

- [activateTool](neuroglancer_widget_layer_control.LayerControlDefinition.md#activatetool)
- [isValid](neuroglancer_widget_layer_control.LayerControlDefinition.md#isvalid)
- [makeControl](neuroglancer_widget_layer_control.LayerControlDefinition.md#makecontrol)

## Properties

### label

• **label**: `string`

#### Inherited from

[LayerControlLabelOptions](neuroglancer_widget_layer_control.LayerControlLabelOptions.md).[label](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#label)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L28)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[LayerControlLabelOptions](neuroglancer_widget_layer_control.LayerControlLabelOptions.md).[title](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#title)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L29)

___

### toolDescription

• `Optional` **toolDescription**: `string`

#### Inherited from

[LayerControlLabelOptions](neuroglancer_widget_layer_control.LayerControlLabelOptions.md).[toolDescription](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#tooldescription)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L30)

___

### toolJson

• **toolJson**: `any`

#### Inherited from

[LayerControlLabelOptions](neuroglancer_widget_layer_control.LayerControlLabelOptions.md).[toolJson](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#tooljson)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L31)

## Methods

### activateTool

▸ **activateTool**(`activation`, `control`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/neuroglancer_ui_tool.ToolActivation.md)<[`LayerControlTool`](../classes/neuroglancer_widget_layer_control.LayerControlTool.md)<`LayerType`\>\> |
| `control` | `ControlType` |

#### Returns

`void`

#### Inherited from

[LayerControlFactory](neuroglancer_widget_layer_control.LayerControlFactory.md).[activateTool](neuroglancer_widget_layer_control.LayerControlFactory.md#activatetool)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L45)

___

### isValid

▸ `Optional` **isValid**(`layer`): [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |

#### Returns

[`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[LayerControlLabelOptions](neuroglancer_widget_layer_control.LayerControlLabelOptions.md).[isValid](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#isvalid)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L32)

___

### makeControl

▸ **makeControl**(`layer`, `context`, `options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `options` | `Object` |
| `options.display` | [`DisplayContext`](../classes/neuroglancer_display_context.DisplayContext.md) |
| `options.labelContainer` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `options.labelTextContainer` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `options.visibility` | [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `control` | `ControlType` |
| `controlElement` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Inherited from

[LayerControlFactory](neuroglancer_widget_layer_control.LayerControlFactory.md).[makeControl](neuroglancer_widget_layer_control.LayerControlFactory.md#makecontrol)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L36)
