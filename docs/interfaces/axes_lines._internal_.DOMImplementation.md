[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / DOMImplementation

# Interface: DOMImplementation

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).DOMImplementation

An object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.

## Table of contents

### Methods

- [createDocument](axes_lines._internal_.DOMImplementation.md#createdocument)
- [createDocumentType](axes_lines._internal_.DOMImplementation.md#createdocumenttype)
- [createHTMLDocument](axes_lines._internal_.DOMImplementation.md#createhtmldocument)
- [hasFeature](axes_lines._internal_.DOMImplementation.md#hasfeature)

## Methods

### createDocument

▸ **createDocument**(`namespace`, `qualifiedName`, `doctype?`): [`XMLDocument`](../modules/axes_lines._internal_.md#xmldocument)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | ``null`` \| `string` |
| `doctype?` | ``null`` \| [`DocumentType`](../modules/axes_lines._internal_.md#documenttype) |

#### Returns

[`XMLDocument`](../modules/axes_lines._internal_.md#xmldocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3842

___

### createDocumentType

▸ **createDocumentType**(`qualifiedName`, `publicId`, `systemId`): [`DocumentType`](../modules/axes_lines._internal_.md#documenttype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `publicId` | `string` |
| `systemId` | `string` |

#### Returns

[`DocumentType`](../modules/axes_lines._internal_.md#documenttype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3843

___

### createHTMLDocument

▸ **createHTMLDocument**(`title?`): [`Document`](../modules/axes_lines._internal_.md#document)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |

#### Returns

[`Document`](../modules/axes_lines._internal_.md#document)

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
