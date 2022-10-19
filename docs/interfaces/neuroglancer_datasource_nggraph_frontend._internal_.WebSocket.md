[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nggraph/frontend](../modules/neuroglancer_datasource_nggraph_frontend.md) / [<internal\>](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md) / WebSocket

# Interface: WebSocket

[neuroglancer/datasource/nggraph/frontend](../modules/neuroglancer_datasource_nggraph_frontend.md).[<internal>](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md).WebSocket

Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`WebSocket`**

## Table of contents

### Properties

- [CLOSED](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#closed)
- [CLOSING](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#closing)
- [CONNECTING](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#connecting)
- [OPEN](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#open)
- [binaryType](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#binarytype)
- [bufferedAmount](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#bufferedamount)
- [extensions](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#extensions)
- [onclose](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#onclose)
- [onerror](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#onerror)
- [onmessage](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#onmessage)
- [onopen](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#onopen)
- [protocol](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#protocol)
- [readyState](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#readystate)
- [url](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#url)

### Methods

- [addEventListener](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#addeventlistener)
- [close](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#close)
- [dispatchEvent](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#dispatchevent)
- [removeEventListener](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#removeeventlistener)
- [send](neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md#send)

## Properties

### CLOSED

• `Readonly` **CLOSED**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16570

___

### CLOSING

• `Readonly` **CLOSING**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16571

___

### CONNECTING

• `Readonly` **CONNECTING**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16572

___

### OPEN

• `Readonly` **OPEN**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16573

___

### binaryType

• **binaryType**: [`BinaryType`](../modules/main_module._internal_.md#binarytype)

Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:

Can be set, to change how binary data is returned. The default is "blob".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16547

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.

If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16553

___

### extensions

• `Readonly` **extensions**: `string`

Returns the extensions selected by the server, if any.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16555

___

### onclose

• **onclose**: ``null`` \| (`this`: [`WebSocket`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#websocket), `ev`: [`CloseEvent`](../modules/main_module._internal_.md#closeevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16556

___

### onerror

• **onerror**: ``null`` \| (`this`: [`WebSocket`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#websocket), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16557

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`WebSocket`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#websocket), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16558

___

### onopen

• **onopen**: ``null`` \| (`this`: [`WebSocket`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#websocket), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16559

___

### protocol

• `Readonly` **protocol**: `string`

Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16561

___

### readyState

• `Readonly` **readyState**: `number`

Returns the state of the WebSocket object's connection. It can have the values described below.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16563

___

### url

• `Readonly` **url**: `string`

Returns the URL that was used to establish the WebSocket connection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16565

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](neuroglancer_datasource_nggraph_frontend._internal_.WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#websocket), `ev`: [`WebSocketEventMap`](neuroglancer_datasource_nggraph_frontend._internal_.WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16574

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

node_modules/typescript/lib/lib.dom.d.ts:16575

___

### close

▸ **close**(`code?`, `reason?`): `void`

Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16567

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
| `K` | extends keyof [`WebSocketEventMap`](neuroglancer_datasource_nggraph_frontend._internal_.WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#websocket), `ev`: [`WebSocketEventMap`](neuroglancer_datasource_nggraph_frontend._internal_.WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16576

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

node_modules/typescript/lib/lib.dom.d.ts:16577

___

### send

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| [`ArrayBufferLike`](../modules/main_module._internal_.md#arraybufferlike) \| [`ArrayBufferView`](main_module._internal_.ArrayBufferView.md) \| [`Blob`](../modules/main_module._internal_.md#blob) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16569
