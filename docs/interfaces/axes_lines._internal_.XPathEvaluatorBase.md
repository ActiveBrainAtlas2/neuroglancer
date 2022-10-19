[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / XPathEvaluatorBase

# Interface: XPathEvaluatorBase

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).XPathEvaluatorBase

## Hierarchy

- **`XPathEvaluatorBase`**

  ↳ [`Document`](axes_lines._internal_.Document.md)

## Table of contents

### Methods

- [createExpression](axes_lines._internal_.XPathEvaluatorBase.md#createexpression)
- [createNSResolver](axes_lines._internal_.XPathEvaluatorBase.md#creatensresolver)
- [evaluate](axes_lines._internal_.XPathEvaluatorBase.md#evaluate)

## Methods

### createExpression

▸ **createExpression**(`expression`, `resolver?`): [`XPathExpression`](../modules/axes_lines._internal_.md#xpathexpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/axes_lines._internal_.md#xpathnsresolver) |

#### Returns

[`XPathExpression`](../modules/axes_lines._internal_.md#xpathexpression)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17084

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): [`XPathNSResolver`](../modules/axes_lines._internal_.md#xpathnsresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

[`XPathNSResolver`](../modules/axes_lines._internal_.md#xpathnsresolver)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17085

___

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](../modules/axes_lines._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/axes_lines._internal_.md#xpathnsresolver) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/axes_lines._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/axes_lines._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17086
