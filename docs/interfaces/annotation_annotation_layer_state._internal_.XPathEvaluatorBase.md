[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / XPathEvaluatorBase

# Interface: XPathEvaluatorBase

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).XPathEvaluatorBase

## Hierarchy

- **`XPathEvaluatorBase`**

  ↳ [`Document`](annotation_annotation_layer_state._internal_.Document.md)

## Table of contents

### Methods

- [createExpression](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md#createexpression)
- [createNSResolver](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md#creatensresolver)
- [evaluate](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md#evaluate)

## Methods

### createExpression

▸ **createExpression**(`expression`, `resolver?`): [`XPathExpression`](../modules/annotation_annotation_layer_state._internal_.md#xpathexpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver) |

#### Returns

[`XPathExpression`](../modules/annotation_annotation_layer_state._internal_.md#xpathexpression)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17084

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): [`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

[`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17085

___

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17086
