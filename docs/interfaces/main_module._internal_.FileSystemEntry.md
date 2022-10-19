[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / FileSystemEntry

# Interface: FileSystemEntry

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).FileSystemEntry

## Table of contents

### Properties

- [filesystem](main_module._internal_.FileSystemEntry.md#filesystem)
- [fullPath](main_module._internal_.FileSystemEntry.md#fullpath)
- [isDirectory](main_module._internal_.FileSystemEntry.md#isdirectory)
- [isFile](main_module._internal_.FileSystemEntry.md#isfile)
- [name](main_module._internal_.FileSystemEntry.md#name)

### Methods

- [getParent](main_module._internal_.FileSystemEntry.md#getparent)

## Properties

### filesystem

• `Readonly` **filesystem**: [`FileSystem`](../modules/main_module._internal_.md#filesystem)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5273

___

### fullPath

• `Readonly` **fullPath**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5274

___

### isDirectory

• `Readonly` **isDirectory**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5275

___

### isFile

• `Readonly` **isFile**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5276

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5277

## Methods

### getParent

▸ **getParent**(`successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `successCallback?` | [`FileSystemEntryCallback`](main_module._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](main_module._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5278
