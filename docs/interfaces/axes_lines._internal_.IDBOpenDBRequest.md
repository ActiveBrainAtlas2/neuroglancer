[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / IDBOpenDBRequest

# Interface: IDBOpenDBRequest

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).IDBOpenDBRequest

Also inherits methods from its parents IDBRequest and EventTarget.

## Hierarchy

- [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`IDBDatabase`\>

  ↳ **`IDBOpenDBRequest`**

## Table of contents

### Properties

- [error](axes_lines._internal_.IDBOpenDBRequest.md#error)
- [onblocked](axes_lines._internal_.IDBOpenDBRequest.md#onblocked)
- [onerror](axes_lines._internal_.IDBOpenDBRequest.md#onerror)
- [onsuccess](axes_lines._internal_.IDBOpenDBRequest.md#onsuccess)
- [onupgradeneeded](axes_lines._internal_.IDBOpenDBRequest.md#onupgradeneeded)
- [readyState](axes_lines._internal_.IDBOpenDBRequest.md#readystate)
- [result](axes_lines._internal_.IDBOpenDBRequest.md#result)
- [source](axes_lines._internal_.IDBOpenDBRequest.md#source)
- [transaction](axes_lines._internal_.IDBOpenDBRequest.md#transaction)

### Methods

- [addEventListener](axes_lines._internal_.IDBOpenDBRequest.md#addeventlistener)
- [dispatchEvent](axes_lines._internal_.IDBOpenDBRequest.md#dispatchevent)
- [removeEventListener](axes_lines._internal_.IDBOpenDBRequest.md#removeeventlistener)

## Properties

### error

• `Readonly` **error**: ``null`` \| [`DOMException`](../modules/axes_lines._internal_.md#domexception)

When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws a "InvalidStateError" DOMException if the request is still pending.

#### Inherited from

IDBRequest.error

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8771

___

### onblocked

• **onblocked**: ``null`` \| (`this`: [`IDBOpenDBRequest`](../modules/axes_lines._internal_.md#idbopendbrequest), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8750

___

### onerror

• **onerror**: ``null`` \| (`this`: [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`IDBDatabase`\>, `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

IDBRequest.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8772

___

### onsuccess

• **onsuccess**: ``null`` \| (`this`: [`IDBRequest`](../modules/axes_lines._internal_.md#idbrequest)<`IDBDatabase`\>, `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

IDBRequest.onsuccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8773

___

### onupgradeneeded

• **onupgradeneeded**: ``null`` \| (`this`: [`IDBOpenDBRequest`](../modules/axes_lines._internal_.md#idbopendbrequest), `ev`: [`IDBVersionChangeEvent`](../modules/axes_lines._internal_.md#idbversionchangeevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8751

___

### readyState

• `Readonly` **readyState**: [`IDBRequestReadyState`](../modules/axes_lines._internal_.md#idbrequestreadystate)

Returns "pending" until a request is complete, then returns "done".

#### Inherited from

IDBRequest.readyState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8775

___

### result

• `Readonly` **result**: `IDBDatabase`

When a request is completed, returns the result, or undefined if the request failed. Throws a "InvalidStateError" DOMException if the request is still pending.

#### Inherited from

IDBRequest.result

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8777

___

### source

• `Readonly` **source**: [`IDBCursor`](../modules/axes_lines._internal_.md#idbcursor) \| `IDBObjectStore` \| [`IDBIndex`](../modules/axes_lines._internal_.md#idbindex)

Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open request.

#### Inherited from

IDBRequest.source

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8779

___

### transaction

• `Readonly` **transaction**: ``null`` \| [`IDBTransaction`](../modules/axes_lines._internal_.md#idbtransaction)

Returns the IDBTransaction the request was made within. If this as an open request, then it returns an upgrade transaction while it is running, or null otherwise.

#### Inherited from

IDBRequest.transaction

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8781

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBOpenDBRequestEventMap`](axes_lines._internal_.IDBOpenDBRequestEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBOpenDBRequest`](../modules/axes_lines._internal_.md#idbopendbrequest), `ev`: [`IDBOpenDBRequestEventMap`](axes_lines._internal_.IDBOpenDBRequestEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

IDBRequest.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8752

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

IDBRequest.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8753

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

IDBRequest.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBOpenDBRequestEventMap`](axes_lines._internal_.IDBOpenDBRequestEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBOpenDBRequest`](../modules/axes_lines._internal_.md#idbopendbrequest), `ev`: [`IDBOpenDBRequestEventMap`](axes_lines._internal_.IDBOpenDBRequestEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

IDBRequest.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8754

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

IDBRequest.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8755
