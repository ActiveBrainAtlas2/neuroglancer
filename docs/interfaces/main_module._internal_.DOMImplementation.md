[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / DOMImplementation

# Interface: DOMImplementation

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).DOMImplementation

An object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.

## Table of contents

### Methods

- [createDocument](main_module._internal_.DOMImplementation.md#createdocument)
- [createDocumentType](main_module._internal_.DOMImplementation.md#createdocumenttype)
- [createHTMLDocument](main_module._internal_.DOMImplementation.md#createhtmldocument)
- [hasFeature](main_module._internal_.DOMImplementation.md#hasfeature)

## Methods

### createDocument

▸ **createDocument**(`namespace`, `qualifiedName`, `doctype?`): [`XMLDocument`](../modules/main_module._internal_.md#xmldocument)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | ``null`` \| `string` |
| `doctype?` | ``null`` \| [`DocumentType`](../modules/main_module._internal_.md#documenttype) |

#### Returns

[`XMLDocument`](../modules/main_module._internal_.md#xmldocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3842

___

### createDocumentType

▸ **createDocumentType**(`qualifiedName`, `publicId`, `systemId`): [`DocumentType`](../modules/main_module._internal_.md#documenttype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `publicId` | `string` |
| `systemId` | `string` |

#### Returns

[`DocumentType`](../modules/main_module._internal_.md#documenttype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3843

___

### createHTMLDocument

▸ **createHTMLDocument**(`title?`): [`Document`](../modules/main_module._internal_.md#document)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |

#### Returns

[`Document`](../modules/main_module._internal_.md#document)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3844

___

### hasFeature

▸ **hasFeature**(...`args`): ``true``

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

``true``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3846
