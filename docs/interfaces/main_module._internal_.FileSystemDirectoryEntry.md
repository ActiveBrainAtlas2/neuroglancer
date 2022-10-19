[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / FileSystemDirectoryEntry

# Interface: FileSystemDirectoryEntry

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).FileSystemDirectoryEntry

## Hierarchy

- [`FileSystemEntry`](../modules/main_module._internal_.md#filesystementry)

  ↳ **`FileSystemDirectoryEntry`**

## Table of contents

### Properties

- [filesystem](main_module._internal_.FileSystemDirectoryEntry.md#filesystem)
- [fullPath](main_module._internal_.FileSystemDirectoryEntry.md#fullpath)
- [isDirectory](main_module._internal_.FileSystemDirectoryEntry.md#isdirectory)
- [isFile](main_module._internal_.FileSystemDirectoryEntry.md#isfile)
- [name](main_module._internal_.FileSystemDirectoryEntry.md#name)

### Methods

- [createReader](main_module._internal_.FileSystemDirectoryEntry.md#createreader)
- [getDirectory](main_module._internal_.FileSystemDirectoryEntry.md#getdirectory)
- [getFile](main_module._internal_.FileSystemDirectoryEntry.md#getfile)
- [getParent](main_module._internal_.FileSystemDirectoryEntry.md#getparent)

## Properties

### filesystem

• `Readonly` **filesystem**: [`FileSystem`](../modules/main_module._internal_.md#filesystem)

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

▸ **createReader**(): [`FileSystemDirectoryReader`](../modules/main_module._internal_.md#filesystemdirectoryreader)

#### Returns

[`FileSystemDirectoryReader`](../modules/main_module._internal_.md#filesystemdirectoryreader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5239

___

### getDirectory

▸ **getDirectory**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | ``null`` \| `string` |
| `options?` | [`FileSystemFlags`](main_module._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](main_module._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](main_module._internal_.ErrorCallback.md) |

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
| `options?` | [`FileSystemFlags`](main_module._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](main_module._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](main_module._internal_.ErrorCallback.md) |

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
| `successCallback?` | [`FileSystemEntryCallback`](main_module._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](main_module._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Inherited from

FileSystemEntry.getParent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5278
