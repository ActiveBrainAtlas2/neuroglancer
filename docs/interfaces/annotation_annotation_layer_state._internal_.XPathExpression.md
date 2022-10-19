[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / XPathExpression

# Interface: XPathExpression

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).XPathExpression

This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information its DOM tree.

## Table of contents

### Methods

- [evaluate](annotation_annotation_layer_state._internal_.XPathExpression.md#evaluate)

## Methods

### evaluate

▸ **evaluate**(`contextNode`, `type?`, `result?`): [`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextNode` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17091
