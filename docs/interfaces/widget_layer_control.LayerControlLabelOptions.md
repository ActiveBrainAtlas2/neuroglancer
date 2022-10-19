[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/layer\_control](../modules/widget_layer_control.md) / LayerControlLabelOptions

# Interface: LayerControlLabelOptions<LayerType\>

[widget/layer_control](../modules/widget_layer_control.md).LayerControlLabelOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) = [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |

## Hierarchy

- **`LayerControlLabelOptions`**

  ↳ [`LayerControlDefinition`](widget_layer_control.LayerControlDefinition.md)

## Table of contents

### Properties

- [label](widget_layer_control.LayerControlLabelOptions.md#label)
- [title](widget_layer_control.LayerControlLabelOptions.md#title)
- [toolDescription](widget_layer_control.LayerControlLabelOptions.md#tooldescription)
- [toolJson](widget_layer_control.LayerControlLabelOptions.md#tooljson)

### Methods

- [isValid](widget_layer_control.LayerControlLabelOptions.md#isvalid)

## Properties

### label

• **label**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L28)

___

### title

• `Optional` **title**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L29)

___

### toolDescription

• `Optional` **toolDescription**: `string`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L30)

___

### toolJson

• **toolJson**: `any`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L31)

## Methods

### isValid

▸ `Optional` **isValid**(`layer`): [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |

#### Returns

[`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/widget/layer_control.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L32)
