[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / IDBOpenDBRequest

# Interface: IDBOpenDBRequest

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).IDBOpenDBRequest

Also inherits methods from its parents IDBRequest and EventTarget.

## Hierarchy

- [`IDBRequest`](../modules/annotation_annotation_layer_state._internal_.md#idbrequest)<`IDBDatabase`\>

  ↳ **`IDBOpenDBRequest`**

## Table of contents

### Properties

- [error](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#error)
- [onblocked](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#onblocked)
- [onerror](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#onerror)
- [onsuccess](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#onsuccess)
- [onupgradeneeded](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#onupgradeneeded)
- [readyState](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#readystate)
- [result](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#result)
- [source](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#source)
- [transaction](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#transaction)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#addeventlistener)
- [dispatchEvent](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#dispatchevent)
- [removeEventListener](annotation_annotation_layer_state._internal_.IDBOpenDBRequest.md#removeeventlistener)

## Properties

### error

• `Readonly` **error**: ``null`` \| [`DOMException`](../modules/annotation_annotation_layer_state._internal_.md#domexception)

When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws a "InvalidStateError" DOMException if the request is still pending.

#### Inherited from

IDBRequest.error

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8771

___

### onblocked

• **onblocked**: ``null`` \| (`this`: [`IDBOpenDBRequest`](../modules/annotation_annotation_layer_state._internal_.md#idbopendbrequest), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8750

___

### onerror

• **onerror**: ``null`` \| (`this`: [`IDBRequest`](../modules/annotation_annotation_layer_state._internal_.md#idbrequest)<`IDBDatabase`\>, `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

IDBRequest.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8772

___

### onsuccess

• **onsuccess**: ``null`` \| (`this`: [`IDBRequest`](../modules/annotation_annotation_layer_state._internal_.md#idbrequest)<`IDBDatabase`\>, `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

IDBRequest.onsuccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8773

___

### onupgradeneeded

• **onupgradeneeded**: ``null`` \| (`this`: [`IDBOpenDBRequest`](../modules/annotation_annotation_layer_state._internal_.md#idbopendbrequest), `ev`: [`IDBVersionChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#idbversionchangeevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8751

___

### readyState

• `Readonly` **readyState**: [`IDBRequestReadyState`](../modules/annotation_annotation_layer_state._internal_.md#idbrequestreadystate)

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

• `Readonly` **source**: [`IDBCursor`](../modules/annotation_annotation_layer_state._internal_.md#idbcursor) \| `IDBObjectStore` \| [`IDBIndex`](../modules/annotation_annotation_layer_state._internal_.md#idbindex)

Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open request.

#### Inherited from

IDBRequest.source

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8779

___

### transaction

• `Readonly` **transaction**: ``null`` \| [`IDBTransaction`](../modules/annotation_annotation_layer_state._internal_.md#idbtransaction)

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
| `K` | extends keyof [`IDBOpenDBRequestEventMap`](annotation_annotation_layer_state._internal_.IDBOpenDBRequestEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBOpenDBRequest`](../modules/annotation_annotation_layer_state._internal_.md#idbopendbrequest), `ev`: [`IDBOpenDBRequestEventMap`](annotation_annotation_layer_state._internal_.IDBOpenDBRequestEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |

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
| `K` | extends keyof [`IDBOpenDBRequestEventMap`](annotation_annotation_layer_state._internal_.IDBOpenDBRequestEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBOpenDBRequest`](../modules/annotation_annotation_layer_state._internal_.md#idbopendbrequest), `ev`: [`IDBOpenDBRequestEventMap`](annotation_annotation_layer_state._internal_.IDBOpenDBRequestEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

IDBRequest.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8755
