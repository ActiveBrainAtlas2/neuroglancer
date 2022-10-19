[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / IDBIndex

# Interface: IDBIndex

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).IDBIndex

IDBIndex interface of the IndexedDB API provides asynchronous access to an index in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data.

## Table of contents

### Properties

- [keyPath](axes_lines._internal_.IDBIndex.md#keypath)
- [multiEntry](axes_lines._internal_.IDBIndex.md#multientry)
- [name](axes_lines._internal_.IDBIndex.md#name)
- [objectStore](axes_lines._internal_.IDBIndex.md#objectstore)
- [unique](axes_lines._internal_.IDBIndex.md#unique)

### Methods

- [count](axes_lines._internal_.IDBIndex.md#count)
- [get](axes_lines._internal_.IDBIndex.md#get)
- [getAll](axes_lines._internal_.IDBIndex.md#getall)
- [getAllKeys](axes_lines._internal_.IDBIndex.md#getallkeys)
- [getKey](axes_lines._internal_.IDBIndex.md#getkey)
- [openCursor](axes_lines._internal_.IDBIndex.md#opencursor)
- [openKeyCursor](axes_lines._internal_.IDBIndex.md#openkeycursor)

## Properties

### keyPath

• `Readonly` **keyPath**: `string` \| `string`[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8554

___

### multiEntry

• `Readonly` **multiEntry**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8555

___

### name

• **name**: `string`

Returns the name of the index.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8557

___

### objectStore

• `Readonly` **objectStore**: `IDBObjectStore`

Returns the IDBObjectStore the index belongs to.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8559

___

### unique

• `Readonly` **unique**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8560

## Methods

### count

▸ **count**(`query?`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`number`\>

Retrieves the number of records matching the given key or key range in query.

If successful, request's result will be the count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/axes_lines._internal_.md#idbkeyrange) |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`number`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8566

___

### get

▸ **get**(`query`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`any`\>

Retrieves the value of the first record matching the given key or key range in query.

If successful, request's result will be the value, or undefined if there was no matching record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/axes_lines._internal_.md#idbkeyrange) |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8572

___

### getAll

▸ **getAll**(`query?`, `count?`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`any`[]\>

Retrieves the values of the records matching the given key or key range in query (up to count if given).

If successful, request's result will be an Array of the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/axes_lines._internal_.md#idbkeyrange) |
| `count?` | `number` |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`any`[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8578

___

### getAllKeys

▸ **getAllKeys**(`query?`, `count?`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<[`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)[]\>

Retrieves the keys of records matching the given key or key range in query (up to count if given).

If successful, request's result will be an Array of the keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/axes_lines._internal_.md#idbkeyrange) |
| `count?` | `number` |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<[`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8584

___

### getKey

▸ **getKey**(`query`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`undefined` \| [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)\>

Retrieves the key of the first record matching the given key or key range in query.

If successful, request's result will be the key, or undefined if there was no matching record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/axes_lines._internal_.md#idbkeyrange) |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`undefined` \| [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8590

___

### openCursor

▸ **openCursor**(`query?`, `direction?`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<``null`` \| [`IDBCursorWithValue`](../modules/axes_lines._internal_.md#idbcursorwithvalue)\>

Opens a cursor over the records matching query, ordered by direction. If query is null, all records in index are matched.

If successful, request's result will be an IDBCursorWithValue, or null if there were no matching records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/axes_lines._internal_.md#idbkeyrange) |
| `direction?` | [`IDBCursorDirection`](../modules/axes_lines._internal_.md#idbcursordirection) |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<``null`` \| [`IDBCursorWithValue`](../modules/axes_lines._internal_.md#idbcursorwithvalue)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8596

___

### openKeyCursor

▸ **openKeyCursor**(`query?`, `direction?`): [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<``null`` \| [`IDBCursor`](../modules/axes_lines._internal_.md#idbcursor)\>

Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in index are matched.

If successful, request's result will be an IDBCursor, or null if there were no matching records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/axes_lines._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/axes_lines._internal_.md#idbkeyrange) |
| `direction?` | [`IDBCursorDirection`](../modules/axes_lines._internal_.md#idbcursordirection) |

#### Returns

[`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<``null`` \| [`IDBCursor`](../modules/axes_lines._internal_.md#idbcursor)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8602
