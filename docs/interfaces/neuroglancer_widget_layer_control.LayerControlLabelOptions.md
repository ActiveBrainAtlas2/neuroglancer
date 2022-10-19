[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/layer\_control](../modules/neuroglancer_widget_layer_control.md) / LayerControlLabelOptions

# Interface: LayerControlLabelOptions<LayerType\>

[neuroglancer/widget/layer_control](../modules/neuroglancer_widget_layer_control.md).LayerControlLabelOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) = [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |

## Hierarchy

- **`LayerControlLabelOptions`**

  ↳ [`LayerControlDefinition`](neuroglancer_widget_layer_control.LayerControlDefinition.md)

## Table of contents

### Properties

- [label](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#label)
- [title](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#title)
- [toolDescription](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#tooldescription)
- [toolJson](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#tooljson)

### Methods

- [isValid](neuroglancer_widget_layer_control.LayerControlLabelOptions.md#isvalid)

## Properties

### label

• **label**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L28)

___

### title

• `Optional` **title**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L29)

___

### toolDescription

• `Optional` **toolDescription**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L30)

___

### toolJson

• **toolJson**: `any`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L31)

## Methods

### isValid

▸ `Optional` **isValid**(`layer`): [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |

#### Returns

[`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/widget/layer_control.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control.ts#L32)
