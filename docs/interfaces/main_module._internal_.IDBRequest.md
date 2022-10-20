[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / IDBRequest

# Interface: IDBRequest<T\>

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).IDBRequest

The request object does not initially contain any information about the result of the operation, but once information becomes available, an event is fired on the request, and the information becomes available through the properties of the IDBRequest instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`IDBRequest`**

## Table of contents

### Properties

- [error](main_module._internal_.IDBRequest.md#error)
- [onerror](main_module._internal_.IDBRequest.md#onerror)
- [onsuccess](main_module._internal_.IDBRequest.md#onsuccess)
- [readyState](main_module._internal_.IDBRequest.md#readystate)
- [result](main_module._internal_.IDBRequest.md#result)
- [source](main_module._internal_.IDBRequest.md#source)
- [transaction](main_module._internal_.IDBRequest.md#transaction)

### Methods

- [addEventListener](main_module._internal_.IDBRequest.md#addeventlistener)
- [dispatchEvent](main_module._internal_.IDBRequest.md#dispatchevent)
- [removeEventListener](main_module._internal_.IDBRequest.md#removeeventlistener)

## Properties

### error

• `Readonly` **error**: ``null`` \| [`DOMException`](../modules/main_module._internal_.md#domexception)

When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws a "InvalidStateError" DOMException if the request is still pending.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8771

___

### onerror

• **onerror**: ``null`` \| (`this`: [`IDBRequest`](../modules/main_module._internal_.md#idbrequest)<`T`\>, `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8772

___

### onsuccess

• **onsuccess**: ``null`` \| (`this`: [`IDBRequest`](../modules/main_module._internal_.md#idbrequest)<`T`\>, `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8773

___

### readyState

• `Readonly` **readyState**: [`IDBRequestReadyState`](../modules/main_module._internal_.md#idbrequestreadystate)

Returns "pending" until a request is complete, then returns "done".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8775

___

### result

• `Readonly` **result**: `T`

When a request is completed, returns the result, or undefined if the request failed. Throws a "InvalidStateError" DOMException if the request is still pending.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8777

___

### source

• `Readonly` **source**: [`IDBCursor`](../modules/main_module._internal_.md#idbcursor) \| `IDBObjectStore` \| [`IDBIndex`](../modules/main_module._internal_.md#idbindex)

Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open request.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8779

___

### transaction

• `Readonly` **transaction**: ``null`` \| [`IDBTransaction`](../modules/main_module._internal_.md#idbtransaction)

Returns the IDBTransaction the request was made within. If this as an open request, then it returns an upgrade transaction while it is running, or null otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8781

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBRequestEventMap`](main_module._internal_.IDBRequestEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBRequest`](../modules/main_module._internal_.md#idbrequest)<`T`\>, `ev`: [`IDBRequestEventMap`](main_module._internal_.IDBRequestEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8782

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8783

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBRequestEventMap`](main_module._internal_.IDBRequestEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBRequest`](../modules/main_module._internal_.md#idbrequest)<`T`\>, `ev`: [`IDBRequestEventMap`](main_module._internal_.IDBRequestEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8784

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8785
