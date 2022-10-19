[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / FileSystemDirectoryEntry

# Interface: FileSystemDirectoryEntry

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).FileSystemDirectoryEntry

## Hierarchy

- [`FileSystemEntry`](../modules/annotation_annotation_layer_state._internal_.md#filesystementry)

  ↳ **`FileSystemDirectoryEntry`**

## Table of contents

### Properties

- [filesystem](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#filesystem)
- [fullPath](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#fullpath)
- [isDirectory](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#isdirectory)
- [isFile](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#isfile)
- [name](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#name)

### Methods

- [createReader](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#createreader)
- [getDirectory](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#getdirectory)
- [getFile](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#getfile)
- [getParent](annotation_annotation_layer_state._internal_.FileSystemDirectoryEntry.md#getparent)

## Properties

### filesystem

• `Readonly` **filesystem**: [`FileSystem`](../modules/annotation_annotation_layer_state._internal_.md#filesystem)

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

▸ **createReader**(): [`FileSystemDirectoryReader`](../modules/annotation_annotation_layer_state._internal_.md#filesystemdirectoryreader)

#### Returns

[`FileSystemDirectoryReader`](../modules/annotation_annotation_layer_state._internal_.md#filesystemdirectoryreader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5239

___

### getDirectory

▸ **getDirectory**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | ``null`` \| `string` |
| `options?` | [`FileSystemFlags`](annotation_annotation_layer_state._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](annotation_annotation_layer_state._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](annotation_annotation_layer_state._internal_.ErrorCallback.md) |

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
| `options?` | [`FileSystemFlags`](annotation_annotation_layer_state._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](annotation_annotation_layer_state._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](annotation_annotation_layer_state._internal_.ErrorCallback.md) |

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
| `successCallback?` | [`FileSystemEntryCallback`](annotation_annotation_layer_state._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](annotation_annotation_layer_state._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Inherited from

FileSystemEntry.getParent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5278
