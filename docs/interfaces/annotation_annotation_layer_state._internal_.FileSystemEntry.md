[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / FileSystemEntry

# Interface: FileSystemEntry

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).FileSystemEntry

## Table of contents

### Properties

- [filesystem](annotation_annotation_layer_state._internal_.FileSystemEntry.md#filesystem)
- [fullPath](annotation_annotation_layer_state._internal_.FileSystemEntry.md#fullpath)
- [isDirectory](annotation_annotation_layer_state._internal_.FileSystemEntry.md#isdirectory)
- [isFile](annotation_annotation_layer_state._internal_.FileSystemEntry.md#isfile)
- [name](annotation_annotation_layer_state._internal_.FileSystemEntry.md#name)

### Methods

- [getParent](annotation_annotation_layer_state._internal_.FileSystemEntry.md#getparent)

## Properties

### filesystem

• `Readonly` **filesystem**: [`FileSystem`](../modules/annotation_annotation_layer_state._internal_.md#filesystem)

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
| `successCallback?` | [`FileSystemEntryCallback`](annotation_annotation_layer_state._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](annotation_annotation_layer_state._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5278
