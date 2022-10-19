[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / IDBTransaction

# Interface: IDBTransaction

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).IDBTransaction

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`IDBTransaction`**

## Table of contents

### Properties

- [db](axes_lines._internal_.IDBTransaction.md#db)
- [durability](axes_lines._internal_.IDBTransaction.md#durability)
- [error](axes_lines._internal_.IDBTransaction.md#error)
- [mode](axes_lines._internal_.IDBTransaction.md#mode)
- [objectStoreNames](axes_lines._internal_.IDBTransaction.md#objectstorenames)
- [onabort](axes_lines._internal_.IDBTransaction.md#onabort)
- [oncomplete](axes_lines._internal_.IDBTransaction.md#oncomplete)
- [onerror](axes_lines._internal_.IDBTransaction.md#onerror)

### Methods

- [abort](axes_lines._internal_.IDBTransaction.md#abort)
- [addEventListener](axes_lines._internal_.IDBTransaction.md#addeventlistener)
- [commit](axes_lines._internal_.IDBTransaction.md#commit)
- [dispatchEvent](axes_lines._internal_.IDBTransaction.md#dispatchevent)
- [objectStore](axes_lines._internal_.IDBTransaction.md#objectstore)
- [removeEventListener](axes_lines._internal_.IDBTransaction.md#removeeventlistener)

## Properties

### db

• `Readonly` **db**: `IDBDatabase`

Returns the transaction's connection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8801

___

### durability

• `Readonly` **durability**: [`IDBTransactionDurability`](../modules/axes_lines._internal_.md#idbtransactiondurability)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8802

___

### error

• `Readonly` **error**: ``null`` \| [`DOMException`](../modules/axes_lines._internal_.md#domexception)

If the transaction was aborted, returns the error (a DOMException) providing the reason.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8804

___

### mode

• `Readonly` **mode**: [`IDBTransactionMode`](../modules/axes_lines._internal_.md#idbtransactionmode)

Returns the mode the transaction was created with ("readonly" or "readwrite"), or "versionchange" for an upgrade transaction.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8806

___

### objectStoreNames

• `Readonly` **objectStoreNames**: `DOMStringList`

Returns a list of the names of object stores in the transaction's scope. For an upgrade transaction this is all object stores in the database.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8808

___

### onabort

• **onabort**: ``null`` \| (`this`: [`IDBTransaction`](../modules/axes_lines._internal_.md#idbtransaction), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8809

___

### oncomplete

• **oncomplete**: ``null`` \| (`this`: [`IDBTransaction`](../modules/axes_lines._internal_.md#idbtransaction), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8810

___

### onerror

• **onerror**: ``null`` \| (`this`: [`IDBTransaction`](../modules/axes_lines._internal_.md#idbtransaction), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8811

## Methods

### abort

▸ **abort**(): `void`

Aborts the transaction. All pending requests will fail with a "AbortError" DOMException and all changes made to the database will be reverted.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8813

___

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBTransactionEventMap`](axes_lines._internal_.IDBTransactionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBTransaction`](../modules/axes_lines._internal_.md#idbtransaction), `ev`: [`IDBTransactionEventMap`](axes_lines._internal_.IDBTransactionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8817

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8818

___

### commit

▸ **commit**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8814

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/axes_lines._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### objectStore

▸ **objectStore**(`name`): `IDBObjectStore`

Returns an IDBObjectStore in the transaction's scope.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`IDBObjectStore`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8816

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBTransactionEventMap`](axes_lines._internal_.IDBTransactionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBTransaction`](../modules/axes_lines._internal_.md#idbtransaction), `ev`: [`IDBTransactionEventMap`](axes_lines._internal_.IDBTransactionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8819

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8820
