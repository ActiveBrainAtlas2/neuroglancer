[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / VirtualListSource

# Interface: VirtualListSource

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).VirtualListSource

## Table of contents

### Properties

- [changed](image_user_layer._internal_.VirtualListSource.md#changed)
- [length](image_user_layer._internal_.VirtualListSource.md#length)
- [renderChanged](image_user_layer._internal_.VirtualListSource.md#renderchanged)

### Methods

- [render](image_user_layer._internal_.VirtualListSource.md#render)

## Properties

### changed

• `Optional` **changed**: [`Signal`](../classes/coordinate_transform._internal_.Signal.md)<(`splices`: [`ArraySpliceOp`](image_user_layer._internal_.ArraySpliceOp.md)[]) => `void`\>

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L62)

___

### length

• **length**: `number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L60)

___

### renderChanged

• `Optional` **renderChanged**: [`Signal`](../classes/coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L63)

## Methods

### render

▸ **render**(`index`): [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L61)
