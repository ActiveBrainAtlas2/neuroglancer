[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/virtual\_list](../modules/widget_virtual_list.md) / VirtualListSource

# Interface: VirtualListSource

[widget/virtual_list](../modules/widget_virtual_list.md).VirtualListSource

## Table of contents

### Properties

- [changed](widget_virtual_list.VirtualListSource.md#changed)
- [length](widget_virtual_list.VirtualListSource.md#length)
- [renderChanged](widget_virtual_list.VirtualListSource.md#renderchanged)

### Methods

- [render](widget_virtual_list.VirtualListSource.md#render)

## Properties

### changed

• `Optional` **changed**: [`Signal`](../classes/util_signal.Signal.md)<(`splices`: [`ArraySpliceOp`](util_array.ArraySpliceOp.md)[]) => `void`\>

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L62)

___

### length

• **length**: `number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L60)

___

### renderChanged

• `Optional` **renderChanged**: [`Signal`](../classes/util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L63)

## Methods

### render

▸ **render**(`index`): [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L61)
