[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / [<internal\>](../modules/layer_group_viewer._internal_.md) / DimensionWidget

# Class: DimensionWidget

[layer_group_viewer](../modules/layer_group_viewer.md).[<internal>](../modules/layer_group_viewer._internal_.md).DimensionWidget

## Table of contents

### Constructors

- [constructor](layer_group_viewer._internal_.DimensionWidget.md#constructor)

### Properties

- [container](layer_group_viewer._internal_.DimensionWidget.md#container)
- [coordinate](layer_group_viewer._internal_.DimensionWidget.md#coordinate)
- [coordinateLabel](layer_group_viewer._internal_.DimensionWidget.md#coordinatelabel)
- [coordinateLabelWidth](layer_group_viewer._internal_.DimensionWidget.md#coordinatelabelwidth)
- [coordinateSpace](layer_group_viewer._internal_.DimensionWidget.md#coordinatespace)
- [draggingPosition](layer_group_viewer._internal_.DimensionWidget.md#draggingposition)
- [dropdownOwner](layer_group_viewer._internal_.DimensionWidget.md#dropdownowner)
- [hasFocus](layer_group_viewer._internal_.DimensionWidget.md#hasfocus)
- [modified](layer_group_viewer._internal_.DimensionWidget.md#modified)
- [nameContainer](layer_group_viewer._internal_.DimensionWidget.md#namecontainer)
- [nameElement](layer_group_viewer._internal_.DimensionWidget.md#nameelement)
- [scaleContainer](layer_group_viewer._internal_.DimensionWidget.md#scalecontainer)
- [scaleElement](layer_group_viewer._internal_.DimensionWidget.md#scaleelement)

## Constructors

### constructor

• **new DimensionWidget**(`coordinateSpace`, `initialDimensionIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |
| `initialDimensionIndex` | `number` |

#### Defined in

[src/neuroglancer/widget/position_widget.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L88)

## Properties

### container

• **container**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L75)

___

### coordinate

• **coordinate**: [`HTMLInputElement`](../modules/axes_lines._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L80)

___

### coordinateLabel

• **coordinateLabel**: [`HTMLSpanElement`](../modules/axes_lines._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L81)

___

### coordinateLabelWidth

• **coordinateLabelWidth**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L82)

___

### coordinateSpace

• **coordinateSpace**: [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

___

### draggingPosition

• **draggingPosition**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L85)

___

### dropdownOwner

• **dropdownOwner**: `undefined` \| [`RefCounted`](axes_lines._internal_.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L83)

___

### hasFocus

• **hasFocus**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L86)

___

### modified

• **modified**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L84)

___

### nameContainer

• **nameContainer**: [`HTMLSpanElement`](../modules/axes_lines._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L76)

___

### nameElement

• **nameElement**: [`HTMLInputElement`](../modules/axes_lines._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L77)

___

### scaleContainer

• **scaleContainer**: [`HTMLSpanElement`](../modules/axes_lines._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L78)

___

### scaleElement

• **scaleElement**: [`HTMLInputElement`](../modules/axes_lines._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L79)
