[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/virtual\_list](../modules/neuroglancer_widget_virtual_list.md) / VirtualListState

# Class: VirtualListState

[neuroglancer/widget/virtual_list](../modules/neuroglancer_widget_virtual_list.md).VirtualListState

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_virtual_list.VirtualListState.md#constructor)

### Properties

- [anchorClientOffset](neuroglancer_widget_virtual_list.VirtualListState.md#anchorclientoffset)
- [anchorIndex](neuroglancer_widget_virtual_list.VirtualListState.md#anchorindex)

### Methods

- [splice](neuroglancer_widget_virtual_list.VirtualListState.md#splice)

## Constructors

### constructor

• **new VirtualListState**()

## Properties

### anchorClientOffset

• **anchorClientOffset**: `number` = `0`

Offset of start of anchor item in pixels from the top of the visible content.  May be negative
to indicate that the anchor item starts before the visible viewport.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L38)

___

### anchorIndex

• **anchorIndex**: `number` = `0`

Index of list element that serves as an anchor for positioning the rendered elements relative
to the scroll container.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L32)

## Methods

### splice

▸ **splice**(`splices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `splices` | readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`ArraySpliceOp`](../interfaces/neuroglancer_util_array.ArraySpliceOp.md)\>[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L40)
