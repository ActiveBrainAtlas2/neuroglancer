[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / FileSystemDirectoryEntry

# Interface: FileSystemDirectoryEntry

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).FileSystemDirectoryEntry

## Hierarchy

- [`FileSystemEntry`](../modules/axes_lines._internal_.md#filesystementry)

  ↳ **`FileSystemDirectoryEntry`**

## Table of contents

### Properties

- [filesystem](axes_lines._internal_.FileSystemDirectoryEntry.md#filesystem)
- [fullPath](axes_lines._internal_.FileSystemDirectoryEntry.md#fullpath)
- [isDirectory](axes_lines._internal_.FileSystemDirectoryEntry.md#isdirectory)
- [isFile](axes_lines._internal_.FileSystemDirectoryEntry.md#isfile)
- [name](axes_lines._internal_.FileSystemDirectoryEntry.md#name)

### Methods

- [createReader](axes_lines._internal_.FileSystemDirectoryEntry.md#createreader)
- [getDirectory](axes_lines._internal_.FileSystemDirectoryEntry.md#getdirectory)
- [getFile](axes_lines._internal_.FileSystemDirectoryEntry.md#getfile)
- [getParent](axes_lines._internal_.FileSystemDirectoryEntry.md#getparent)

## Properties

### filesystem

• `Readonly` **filesystem**: [`FileSystem`](../modules/axes_lines._internal_.md#filesystem)

#### Inherited from

FileSystemEntry.filesystem

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5273

___

### fullPath

• `Readonly` **fullPath**: `string`

#### Inherited from

FileSystemEntry.fullPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5274

___

### isDirectory

• `Readonly` **isDirectory**: `boolean`

#### Inherited from

FileSystemEntry.isDirectory

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5275

___

### isFile

• `Readonly` **isFile**: `boolean`

#### Inherited from

FileSystemEntry.isFile

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5276

___

### name

• `Readonly` **name**: `string`

#### Inherited from

FileSystemEntry.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5277

## Methods

### createReader

▸ **createReader**(): [`FileSystemDirectoryReader`](../modules/axes_lines._internal_.md#filesystemdirectoryreader)

#### Returns

[`FileSystemDirectoryReader`](../modules/axes_lines._internal_.md#filesystemdirectoryreader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5239

___

### getDirectory

▸ **getDirectory**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | ``null`` \| `string` |
| `options?` | [`FileSystemFlags`](axes_lines._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](axes_lines._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](axes_lines._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5240

___

### getFile

▸ **getFile**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | ``null`` \| `string` |
| `options?` | [`FileSystemFlags`](axes_lines._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](axes_lines._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](axes_lines._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5241

___

### getParent

▸ **getParent**(`successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `successCallback?` | [`FileSystemEntryCallback`](axes_lines._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](axes_lines._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Inherited from

FileSystemEntry.getParent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5278
