[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / XPathEvaluatorBase

# Interface: XPathEvaluatorBase

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).XPathEvaluatorBase

## Hierarchy

- **`XPathEvaluatorBase`**

  ↳ [`Document`](main_module._internal_.Document.md)

## Table of contents

### Methods

- [createExpression](main_module._internal_.XPathEvaluatorBase.md#createexpression)
- [createNSResolver](main_module._internal_.XPathEvaluatorBase.md#creatensresolver)
- [evaluate](main_module._internal_.XPathEvaluatorBase.md#evaluate)

## Methods

### createExpression

▸ **createExpression**(`expression`, `resolver?`): [`XPathExpression`](../modules/main_module._internal_.md#xpathexpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver) |

#### Returns

[`XPathExpression`](../modules/main_module._internal_.md#xpathexpression)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17084

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): [`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

[`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17085

___

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](../modules/main_module._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | [`Node`](../modules/main_module._internal_.md#node) |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/main_module._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/main_module._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17086
