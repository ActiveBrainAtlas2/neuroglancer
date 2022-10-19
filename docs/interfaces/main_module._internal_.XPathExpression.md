[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / XPathExpression

# Interface: XPathExpression

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).XPathExpression

This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information its DOM tree.

## Table of contents

### Methods

- [evaluate](main_module._internal_.XPathExpression.md#evaluate)

## Methods

### evaluate

▸ **evaluate**(`contextNode`, `type?`, `result?`): [`XPathResult`](../modules/main_module._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextNode` | [`Node`](../modules/main_module._internal_.md#node) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/main_module._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/main_module._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17091
