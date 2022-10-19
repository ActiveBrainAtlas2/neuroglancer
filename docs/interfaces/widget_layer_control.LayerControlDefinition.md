[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/layer\_control](../modules/widget_layer_control.md) / LayerControlDefinition

# Interface: LayerControlDefinition<LayerType, ControlType\>

[widget/layer_control](../modules/widget_layer_control.md).LayerControlDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |
| `ControlType` | `unknown` |

## Hierarchy

- [`LayerControlLabelOptions`](widget_layer_control.LayerControlLabelOptions.md)<`LayerType`\>

- [`LayerControlFactory`](widget_layer_control.LayerControlFactory.md)<`LayerType`, `ControlType`\>

  ↳ **`LayerControlDefinition`**

## Table of contents

### Properties

- [label](widget_layer_control.LayerControlDefinition.md#label)
- [title](widget_layer_control.LayerControlDefinition.md#title)
- [toolDescription](widget_layer_control.LayerControlDefinition.md#tooldescription)
- [toolJson](widget_layer_control.LayerControlDefinition.md#tooljson)

### Methods

- [activateTool](widget_layer_control.LayerControlDefinition.md#activatetool)
- [isValid](widget_layer_control.LayerControlDefinition.md#isvalid)
- [makeControl](widget_layer_control.LayerControlDefinition.md#makecontrol)

## Properties

### label

• **label**: `string`

#### Inherited from

[LayerControlLabelOptions](widget_layer_control.LayerControlLabelOptions.md).[label](widget_layer_control.LayerControlLabelOptions.md#label)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L28)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[LayerControlLabelOptions](widget_layer_control.LayerControlLabelOptions.md).[title](widget_layer_control.LayerControlLabelOptions.md#title)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L29)

___

### toolDescription

• `Optional` **toolDescription**: `string`

#### Inherited from

[LayerControlLabelOptions](widget_layer_control.LayerControlLabelOptions.md).[toolDescription](widget_layer_control.LayerControlLabelOptions.md#tooldescription)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L30)

___

### toolJson

• **toolJson**: `any`

#### Inherited from

[LayerControlLabelOptions](widget_layer_control.LayerControlLabelOptions.md).[toolJson](widget_layer_control.LayerControlLabelOptions.md#tooljson)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L31)

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

#### Inherited from

[LayerControlFactory](widget_layer_control.LayerControlFactory.md).[activateTool](widget_layer_control.LayerControlFactory.md#activatetool)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L45)

___

### isValid

▸ `Optional` **isValid**(`layer`): [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |

#### Returns

[`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[LayerControlLabelOptions](widget_layer_control.LayerControlLabelOptions.md).[isValid](widget_layer_control.LayerControlLabelOptions.md#isvalid)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L32)

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

#### Inherited from

[LayerControlFactory](widget_layer_control.LayerControlFactory.md).[makeControl](widget_layer_control.LayerControlFactory.md#makecontrol)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L36)
