[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / DOMImplementation

# Interface: DOMImplementation

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).DOMImplementation

An object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.

## Table of contents

### Methods

- [createDocument](annotation_annotation_layer_state._internal_.DOMImplementation.md#createdocument)
- [createDocumentType](annotation_annotation_layer_state._internal_.DOMImplementation.md#createdocumenttype)
- [createHTMLDocument](annotation_annotation_layer_state._internal_.DOMImplementation.md#createhtmldocument)
- [hasFeature](annotation_annotation_layer_state._internal_.DOMImplementation.md#hasfeature)

## Methods

### createDocument

▸ **createDocument**(`namespace`, `qualifiedName`, `doctype?`): [`XMLDocument`](../modules/annotation_annotation_layer_state._internal_.md#xmldocument)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | ``null`` \| `string` |
| `doctype?` | ``null`` \| [`DocumentType`](../modules/annotation_annotation_layer_state._internal_.md#documenttype) |

#### Returns

[`XMLDocument`](../modules/annotation_annotation_layer_state._internal_.md#xmldocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3842

___

### createDocumentType

▸ **createDocumentType**(`qualifiedName`, `publicId`, `systemId`): [`DocumentType`](../modules/annotation_annotation_layer_state._internal_.md#documenttype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `publicId` | `string` |
| `systemId` | `string` |

#### Returns

[`DocumentType`](../modules/annotation_annotation_layer_state._internal_.md#documenttype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3843

___

### createHTMLDocument

▸ **createHTMLDocument**(`title?`): [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |

#### Returns

[`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3844

___

### hasFeature

▸ **hasFeature**(...`args`): ``true``

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

``true``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3846
