[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / IDBCursor

# Interface: IDBCursor

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).IDBCursor

This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database.

## Table of contents

### Properties

- [direction](axes_lines._internal_.IDBCursor.md#direction)
- [key](axes_lines._internal_.IDBCursor.md#key)
- [primaryKey](axes_lines._internal_.IDBCursor.md#primarykey)
- [request](axes_lines._internal_.IDBCursor.md#request)
- [source](axes_lines._internal_.IDBCursor.md#source)

### Methods

- [advance](axes_lines._internal_.IDBCursor.md#advance)
- [continue](axes_lines._internal_.IDBCursor.md#continue)
- [continuePrimaryKey](axes_lines._internal_.IDBCursor.md#continueprimarykey)
- [delete](axes_lines._internal_.IDBCursor.md#delete)
- [update](axes_lines._internal_.IDBCursor.md#update)

## Properties

### direction

• `Readonly` **direction**: [`IDBCursorDirection`](../modules/axes_lines._internal_.md#idbcursordirection)

Returns the direction ("next", "nextunique", "prev" or "prevunique") of the cursor.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8440

___

### key

• `Readonly` **key**: [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)

Returns the key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8442

___

### primaryKey

• `Readonly` **primaryKey**: [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)

Returns the effective key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8444

___

### request

• `Readonly` **request**: [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8445

___

### source

• `Readonly` **source**: `IDBObjectStore` \| [`IDBIndex`](../modules/axes_lines._internal_.md#idbindex)

Returns the IDBObjectStore or IDBIndex the cursor was opened from.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8447

## Methods

### advance

▸ **advance**(`count`): `void`

Advances the cursor through the next count records in range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8449

___

### continue

▸ **continue**(`key?`): `void`

Advances the cursor to the next record in range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8451

___

### continuePrimaryKey

▸ **continuePrimaryKey**(`key`, `primaryKey`): `void`

Advances the cursor to the next record in range matching or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) |
| `primaryKey` | [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8453

___

### delete

▸ **delete**(): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`undefined`\>

Delete the record pointed at by the cursor with a new value.

If successful, request's result will be undefined.

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`undefined`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8459

___

### update

▸ **update**(`value`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<[`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)\>

Updated the record pointed at by the cursor with a new value.

Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.

If successful, request's result will be the record's key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<[`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8467
