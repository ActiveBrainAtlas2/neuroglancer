[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / DataTransfer

# Interface: DataTransfer

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).DataTransfer

Used to hold the data that is being dragged during a drag and drop operation. It may hold one or more data items, each of one or more data types. For more information about drag and drop, see HTML Drag and Drop API.

## Table of contents

### Properties

- [dropEffect](axes_lines._internal_.DataTransfer.md#dropeffect)
- [effectAllowed](axes_lines._internal_.DataTransfer.md#effectallowed)
- [files](axes_lines._internal_.DataTransfer.md#files)
- [items](axes_lines._internal_.DataTransfer.md#items)
- [types](axes_lines._internal_.DataTransfer.md#types)

### Methods

- [clearData](axes_lines._internal_.DataTransfer.md#cleardata)
- [getData](axes_lines._internal_.DataTransfer.md#getdata)
- [setData](axes_lines._internal_.DataTransfer.md#setdata)
- [setDragImage](axes_lines._internal_.DataTransfer.md#setdragimage)

## Properties

### dropEffect

• **dropEffect**: ``"link"`` \| ``"none"`` \| ``"copy"`` \| ``"move"``

Returns the kind of operation that is currently selected. If the kind of operation isn't one of those that is allowed by the effectAllowed attribute, then the operation will fail.

Can be set, to change the selected operation.

The possible values are "none", "copy", "link", and "move".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4172

___

### effectAllowed

• **effectAllowed**: ``"link"`` \| ``"all"`` \| ``"none"`` \| ``"copy"`` \| ``"move"`` \| ``"copyLink"`` \| ``"copyMove"`` \| ``"linkMove"`` \| ``"uninitialized"``

Returns the kinds of operations that are to be allowed.

Can be set (during the dragstart event), to change the allowed operations.

The possible values are "none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all", and "uninitialized",

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4180

___

### files

• `Readonly` **files**: `FileList`

Returns a FileList of the files being dragged, if any.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4182

___

### items

• `Readonly` **items**: `DataTransferItemList`

Returns a DataTransferItemList object, with the drag data.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4184

___

### types

• `Readonly` **types**: readonly `string`[]

Returns a frozen array listing the formats that were set in the dragstart event. In addition, if any files are being dragged, then one of the types will be the string "Files".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4186

## Methods

### clearData

▸ **clearData**(`format?`): `void`

Removes the data of the specified formats. Removes all data if the argument is omitted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4188

___

### getData

▸ **getData**(`format`): `string`

Returns the specified data. If there is no such data, returns the empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4190

___

### setData

▸ **setData**(`format`, `data`): `void`

Adds the specified data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4192

___

### setDragImage

▸ **setDragImage**(`image`, `x`, `y`): `void`

Uses the given element to update the drag feedback, replacing any previously specified feedback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`Element`](../modules/axes_lines._internal_.md#element) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4194
