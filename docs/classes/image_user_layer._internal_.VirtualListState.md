[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / VirtualListState

# Class: VirtualListState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).VirtualListState

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.VirtualListState.md#constructor)

### Properties

- [anchorClientOffset](image_user_layer._internal_.VirtualListState.md#anchorclientoffset)
- [anchorIndex](image_user_layer._internal_.VirtualListState.md#anchorindex)

### Methods

- [splice](image_user_layer._internal_.VirtualListState.md#splice)

## Constructors

### constructor

• **new VirtualListState**()

## Properties

### anchorClientOffset

• **anchorClientOffset**: `number` = `0`

Offset of start of anchor item in pixels from the top of the visible content.  May be negative
to indicate that the anchor item starts before the visible viewport.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L38)

___

### anchorIndex

• **anchorIndex**: `number` = `0`

Index of list element that serves as an anchor for positioning the rendered elements relative
to the scroll container.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L32)

## Methods

### splice

▸ **splice**(`splices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `splices` | readonly [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`ArraySpliceOp`](../interfaces/image_user_layer._internal_.ArraySpliceOp.md)\>[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L40)
