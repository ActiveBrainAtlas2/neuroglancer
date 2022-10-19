[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / IDBCursorWithValue

# Interface: IDBCursorWithValue

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).IDBCursorWithValue

This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database. It is the same as the IDBCursor, except that it includes the value property.

## Hierarchy

- [`IDBCursor`](../modules/axes_lines._internal_.md#idbcursor)

  ↳ **`IDBCursorWithValue`**

## Table of contents

### Properties

- [direction](axes_lines._internal_.IDBCursorWithValue.md#direction)
- [key](axes_lines._internal_.IDBCursorWithValue.md#key)
- [primaryKey](axes_lines._internal_.IDBCursorWithValue.md#primarykey)
- [request](axes_lines._internal_.IDBCursorWithValue.md#request)
- [source](axes_lines._internal_.IDBCursorWithValue.md#source)
- [value](axes_lines._internal_.IDBCursorWithValue.md#value)

### Methods

- [advance](axes_lines._internal_.IDBCursorWithValue.md#advance)
- [continue](axes_lines._internal_.IDBCursorWithValue.md#continue)
- [continuePrimaryKey](axes_lines._internal_.IDBCursorWithValue.md#continueprimarykey)
- [delete](axes_lines._internal_.IDBCursorWithValue.md#delete)
- [update](axes_lines._internal_.IDBCursorWithValue.md#update)

## Properties

### direction

• `Readonly` **direction**: [`IDBCursorDirection`](../modules/axes_lines._internal_.md#idbcursordirection)

Returns the direction ("next", "nextunique", "prev" or "prevunique") of the cursor.

#### Inherited from

IDBCursor.direction

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8440

___

### key

• `Readonly` **key**: [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)

Returns the key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.

#### Inherited from

IDBCursor.key

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8442

___

### primaryKey

• `Readonly` **primaryKey**: [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)

Returns the effective key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.

#### Inherited from

IDBCursor.primaryKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8444

___

### request

• `Readonly` **request**: [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`any`\>

#### Inherited from

IDBCursor.request

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8445

___

### source

• `Readonly` **source**: `IDBObjectStore` \| [`IDBIndex`](../modules/axes_lines._internal_.md#idbindex)

Returns the IDBObjectStore or IDBIndex the cursor was opened from.

#### Inherited from

IDBCursor.source

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8447

___

### value

• `Readonly` **value**: `any`

Returns the cursor's current value.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8478

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

#### Inherited from

IDBCursor.advance

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

#### Inherited from

IDBCursor.continue

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

#### Inherited from

IDBCursor.continuePrimaryKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8453

___

### delete

▸ **delete**(): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`undefined`\>

Delete the record pointed at by the cursor with a new value.

If successful, request's result will be undefined.

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`undefined`\>

#### Inherited from

IDBCursor.delete

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

#### Inherited from

IDBCursor.update

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8467
