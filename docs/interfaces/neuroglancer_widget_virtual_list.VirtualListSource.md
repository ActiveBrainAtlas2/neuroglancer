[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/virtual\_list](../modules/neuroglancer_widget_virtual_list.md) / VirtualListSource

# Interface: VirtualListSource

[neuroglancer/widget/virtual_list](../modules/neuroglancer_widget_virtual_list.md).VirtualListSource

## Table of contents

### Properties

- [changed](neuroglancer_widget_virtual_list.VirtualListSource.md#changed)
- [length](neuroglancer_widget_virtual_list.VirtualListSource.md#length)
- [renderChanged](neuroglancer_widget_virtual_list.VirtualListSource.md#renderchanged)

### Methods

- [render](neuroglancer_widget_virtual_list.VirtualListSource.md#render)

## Properties

### changed

• `Optional` **changed**: [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<(`splices`: [`ArraySpliceOp`](neuroglancer_util_array.ArraySpliceOp.md)[]) => `void`\>

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L62)

___

### length

• **length**: `number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L60)

___

### renderChanged

• `Optional` **renderChanged**: [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L63)

## Methods

### render

▸ **render**(`index`): [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L61)
