[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / XPathExpression

# Interface: XPathExpression

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).XPathExpression

This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information its DOM tree.

## Table of contents

### Methods

- [evaluate](axes_lines._internal_.XPathExpression.md#evaluate)

## Methods

### evaluate

▸ **evaluate**(`contextNode`, `type?`, `result?`): [`XPathResult`](../modules/axes_lines._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextNode` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/axes_lines._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/axes_lines._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17091
