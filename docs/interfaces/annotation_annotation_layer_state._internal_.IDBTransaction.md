[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / IDBTransaction

# Interface: IDBTransaction

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).IDBTransaction

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`IDBTransaction`**

## Table of contents

### Properties

- [db](annotation_annotation_layer_state._internal_.IDBTransaction.md#db)
- [durability](annotation_annotation_layer_state._internal_.IDBTransaction.md#durability)
- [error](annotation_annotation_layer_state._internal_.IDBTransaction.md#error)
- [mode](annotation_annotation_layer_state._internal_.IDBTransaction.md#mode)
- [objectStoreNames](annotation_annotation_layer_state._internal_.IDBTransaction.md#objectstorenames)
- [onabort](annotation_annotation_layer_state._internal_.IDBTransaction.md#onabort)
- [oncomplete](annotation_annotation_layer_state._internal_.IDBTransaction.md#oncomplete)
- [onerror](annotation_annotation_layer_state._internal_.IDBTransaction.md#onerror)

### Methods

- [abort](annotation_annotation_layer_state._internal_.IDBTransaction.md#abort)
- [addEventListener](annotation_annotation_layer_state._internal_.IDBTransaction.md#addeventlistener)
- [commit](annotation_annotation_layer_state._internal_.IDBTransaction.md#commit)
- [dispatchEvent](annotation_annotation_layer_state._internal_.IDBTransaction.md#dispatchevent)
- [objectStore](annotation_annotation_layer_state._internal_.IDBTransaction.md#objectstore)
- [removeEventListener](annotation_annotation_layer_state._internal_.IDBTransaction.md#removeeventlistener)

## Properties

### db

• `Readonly` **db**: `IDBDatabase`

Returns the transaction's connection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8801

___

### durability

• `Readonly` **durability**: [`IDBTransactionDurability`](../modules/annotation_annotation_layer_state._internal_.md#idbtransactiondurability)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8802

___

### error

• `Readonly` **error**: ``null`` \| [`DOMException`](../modules/annotation_annotation_layer_state._internal_.md#domexception)

If the transaction was aborted, returns the error (a DOMException) providing the reason.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8804

___

### mode

• `Readonly` **mode**: [`IDBTransactionMode`](../modules/annotation_annotation_layer_state._internal_.md#idbtransactionmode)

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

• **onabort**: ``null`` \| (`this`: [`IDBTransaction`](../modules/annotation_annotation_layer_state._internal_.md#idbtransaction), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8809

___

### oncomplete

• **oncomplete**: ``null`` \| (`this`: [`IDBTransaction`](../modules/annotation_annotation_layer_state._internal_.md#idbtransaction), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8810

___

### onerror

• **onerror**: ``null`` \| (`this`: [`IDBTransaction`](../modules/annotation_annotation_layer_state._internal_.md#idbtransaction), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

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
| `K` | extends keyof [`IDBTransactionEventMap`](annotation_annotation_layer_state._internal_.IDBTransactionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBTransaction`](../modules/annotation_annotation_layer_state._internal_.md#idbtransaction), `ev`: [`IDBTransactionEventMap`](annotation_annotation_layer_state._internal_.IDBTransactionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |

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
| `K` | extends keyof [`IDBTransactionEventMap`](annotation_annotation_layer_state._internal_.IDBTransactionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBTransaction`](../modules/annotation_annotation_layer_state._internal_.md#idbtransaction), `ev`: [`IDBTransactionEventMap`](annotation_annotation_layer_state._internal_.IDBTransactionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8820
