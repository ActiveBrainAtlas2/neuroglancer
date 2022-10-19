[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / LayerControlDefinition

# Interface: LayerControlDefinition<LayerType, ControlType\>

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).LayerControlDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/layer.UserLayer.md) |
| `ControlType` | `unknown` |

## Hierarchy

- [`LayerControlLabelOptions`](segmentation_user_layer._internal_.LayerControlLabelOptions.md)<`LayerType`\>

- [`LayerControlFactory`](segmentation_user_layer._internal_.LayerControlFactory.md)<`LayerType`, `ControlType`\>

  ↳ **`LayerControlDefinition`**

## Table of contents

### Properties

- [label](segmentation_user_layer._internal_.LayerControlDefinition.md#label)
- [title](segmentation_user_layer._internal_.LayerControlDefinition.md#title)
- [toolDescription](segmentation_user_layer._internal_.LayerControlDefinition.md#tooldescription)
- [toolJson](segmentation_user_layer._internal_.LayerControlDefinition.md#tooljson)

### Methods

- [activateTool](segmentation_user_layer._internal_.LayerControlDefinition.md#activatetool)
- [isValid](segmentation_user_layer._internal_.LayerControlDefinition.md#isvalid)
- [makeControl](segmentation_user_layer._internal_.LayerControlDefinition.md#makecontrol)

## Properties

### label

• **label**: `string`

#### Inherited from

[LayerControlLabelOptions](segmentation_user_layer._internal_.LayerControlLabelOptions.md).[label](segmentation_user_layer._internal_.LayerControlLabelOptions.md#label)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L28)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[LayerControlLabelOptions](segmentation_user_layer._internal_.LayerControlLabelOptions.md).[title](segmentation_user_layer._internal_.LayerControlLabelOptions.md#title)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L29)

___

### toolDescription

• `Optional` **toolDescription**: `string`

#### Inherited from

[LayerControlLabelOptions](segmentation_user_layer._internal_.LayerControlLabelOptions.md).[toolDescription](segmentation_user_layer._internal_.LayerControlLabelOptions.md#tooldescription)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L30)

___

### toolJson

• **toolJson**: `any`

#### Inherited from

[LayerControlLabelOptions](segmentation_user_layer._internal_.LayerControlLabelOptions.md).[toolJson](segmentation_user_layer._internal_.LayerControlLabelOptions.md#tooljson)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L31)

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

#### Inherited from

[LayerControlFactory](segmentation_user_layer._internal_.LayerControlFactory.md).[activateTool](segmentation_user_layer._internal_.LayerControlFactory.md#activatetool)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L45)

___

### isValid

▸ `Optional` **isValid**(`layer`): [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |

#### Returns

[`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[LayerControlLabelOptions](segmentation_user_layer._internal_.LayerControlLabelOptions.md).[isValid](segmentation_user_layer._internal_.LayerControlLabelOptions.md#isvalid)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L32)

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

#### Inherited from

[LayerControlFactory](segmentation_user_layer._internal_.LayerControlFactory.md).[makeControl](segmentation_user_layer._internal_.LayerControlFactory.md#makecontrol)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L36)
