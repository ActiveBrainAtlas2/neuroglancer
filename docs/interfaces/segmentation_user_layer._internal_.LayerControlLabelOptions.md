[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / LayerControlLabelOptions

# Interface: LayerControlLabelOptions<LayerType\>

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).LayerControlLabelOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/layer.UserLayer.md) = [`UserLayer`](../classes/layer.UserLayer.md) |

## Hierarchy

- **`LayerControlLabelOptions`**

  ↳ [`LayerControlDefinition`](segmentation_user_layer._internal_.LayerControlDefinition.md)

## Table of contents

### Properties

- [label](segmentation_user_layer._internal_.LayerControlLabelOptions.md#label)
- [title](segmentation_user_layer._internal_.LayerControlLabelOptions.md#title)
- [toolDescription](segmentation_user_layer._internal_.LayerControlLabelOptions.md#tooldescription)
- [toolJson](segmentation_user_layer._internal_.LayerControlLabelOptions.md#tooljson)

### Methods

- [isValid](segmentation_user_layer._internal_.LayerControlLabelOptions.md#isvalid)

## Properties

### label

• **label**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L28)

___

### title

• `Optional` **title**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L29)

___

### toolDescription

• `Optional` **toolDescription**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L30)

___

### toolJson

• **toolJson**: `any`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L31)

## Methods

### isValid

▸ `Optional` **isValid**(`layer`): [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |

#### Returns

[`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/widget/layer_control.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L32)
