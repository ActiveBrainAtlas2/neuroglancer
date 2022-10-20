[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/position\_widget](../modules/neuroglancer_widget_position_widget.md) / [<internal\>](../modules/neuroglancer_widget_position_widget._internal_.md) / DimensionWidget

# Class: DimensionWidget

[neuroglancer/widget/position_widget](../modules/neuroglancer_widget_position_widget.md).[<internal>](../modules/neuroglancer_widget_position_widget._internal_.md).DimensionWidget

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#constructor)

### Properties

- [container](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#container)
- [coordinate](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#coordinate)
- [coordinateLabel](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#coordinatelabel)
- [coordinateLabelWidth](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#coordinatelabelwidth)
- [coordinateSpace](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#coordinatespace)
- [draggingPosition](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#draggingposition)
- [dropdownOwner](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#dropdownowner)
- [hasFocus](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#hasfocus)
- [modified](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#modified)
- [nameContainer](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#namecontainer)
- [nameElement](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#nameelement)
- [scaleContainer](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#scalecontainer)
- [scaleElement](neuroglancer_widget_position_widget._internal_.DimensionWidget.md#scaleelement)

## Constructors

### constructor

• **new DimensionWidget**(`coordinateSpace`, `initialDimensionIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |
| `initialDimensionIndex` | `number` |

#### Defined in

[src/neuroglancer/widget/position_widget.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L88)

## Properties

### container

• **container**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L75)

___

### coordinate

• **coordinate**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L80)

___

### coordinateLabel

• **coordinateLabel**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L81)

___

### coordinateLabelWidth

• **coordinateLabelWidth**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L82)

___

### coordinateSpace

• **coordinateSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L88)

___

### draggingPosition

• **draggingPosition**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L85)

___

### dropdownOwner

• **dropdownOwner**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L83)

___

### hasFocus

• **hasFocus**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L86)

___

### modified

• **modified**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L84)

___

### nameContainer

• **nameContainer**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L76)

___

### nameElement

• **nameElement**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L77)

___

### scaleContainer

• **scaleContainer**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L78)

___

### scaleElement

• **scaleElement**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L79)
