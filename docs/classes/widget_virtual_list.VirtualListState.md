[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/virtual\_list](../modules/widget_virtual_list.md) / VirtualListState

# Class: VirtualListState

[widget/virtual_list](../modules/widget_virtual_list.md).VirtualListState

## Table of contents

### Constructors

- [constructor](widget_virtual_list.VirtualListState.md#constructor)

### Properties

- [anchorClientOffset](widget_virtual_list.VirtualListState.md#anchorclientoffset)
- [anchorIndex](widget_virtual_list.VirtualListState.md#anchorindex)

### Methods

- [splice](widget_virtual_list.VirtualListState.md#splice)

## Constructors

### constructor

• **new VirtualListState**()

## Properties

### anchorClientOffset

• **anchorClientOffset**: `number` = `0`

Offset of start of anchor item in pixels from the top of the visible content.  May be negative
to indicate that the anchor item starts before the visible viewport.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L38)

___

### anchorIndex

• **anchorIndex**: `number` = `0`

Index of list element that serves as an anchor for positioning the rendered elements relative
to the scroll container.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L32)

## Methods

### splice

▸ **splice**(`splices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `splices` | readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`ArraySpliceOp`](../interfaces/util_array.ArraySpliceOp.md)\>[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L40)
