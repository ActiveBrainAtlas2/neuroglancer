[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/position\_widget](../modules/widget_position_widget.md) / [<internal\>](../modules/widget_position_widget._internal_.md) / DimensionWidget

# Class: DimensionWidget

[widget/position_widget](../modules/widget_position_widget.md).[<internal>](../modules/widget_position_widget._internal_.md).DimensionWidget

## Table of contents

### Constructors

- [constructor](widget_position_widget._internal_.DimensionWidget.md#constructor)

### Properties

- [container](widget_position_widget._internal_.DimensionWidget.md#container)
- [coordinate](widget_position_widget._internal_.DimensionWidget.md#coordinate)
- [coordinateLabel](widget_position_widget._internal_.DimensionWidget.md#coordinatelabel)
- [coordinateLabelWidth](widget_position_widget._internal_.DimensionWidget.md#coordinatelabelwidth)
- [coordinateSpace](widget_position_widget._internal_.DimensionWidget.md#coordinatespace)
- [draggingPosition](widget_position_widget._internal_.DimensionWidget.md#draggingposition)
- [dropdownOwner](widget_position_widget._internal_.DimensionWidget.md#dropdownowner)
- [hasFocus](widget_position_widget._internal_.DimensionWidget.md#hasfocus)
- [modified](widget_position_widget._internal_.DimensionWidget.md#modified)
- [nameContainer](widget_position_widget._internal_.DimensionWidget.md#namecontainer)
- [nameElement](widget_position_widget._internal_.DimensionWidget.md#nameelement)
- [scaleContainer](widget_position_widget._internal_.DimensionWidget.md#scalecontainer)
- [scaleElement](widget_position_widget._internal_.DimensionWidget.md#scaleelement)

## Constructors

### constructor

• **new DimensionWidget**(`coordinateSpace`, `initialDimensionIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md) |
| `initialDimensionIndex` | `number` |

#### Defined in

[src/neuroglancer/widget/position_widget.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L88)

## Properties

### container

• **container**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L75)

___

### coordinate

• **coordinate**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L80)

___

### coordinateLabel

• **coordinateLabel**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L81)

___

### coordinateLabelWidth

• **coordinateLabelWidth**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L82)

___

### coordinateSpace

• **coordinateSpace**: [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

___

### draggingPosition

• **draggingPosition**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L85)

___

### dropdownOwner

• **dropdownOwner**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L83)

___

### hasFocus

• **hasFocus**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L86)

___

### modified

• **modified**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L84)

___

### nameContainer

• **nameContainer**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L76)

___

### nameElement

• **nameElement**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L77)

___

### scaleContainer

• **scaleContainer**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L78)

___

### scaleElement

• **scaleElement**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/position_widget.ts#L79)
