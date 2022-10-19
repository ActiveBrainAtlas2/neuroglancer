[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/api](../modules/python_integration_api.md) / [<internal\>](../modules/python_integration_api._internal_.md) / EventSource

# Interface: EventSource

[python_integration/api](../modules/python_integration_api.md).[<internal>](../modules/python_integration_api._internal_.md).EventSource

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`EventSource`**

## Table of contents

### Properties

- [CLOSED](python_integration_api._internal_.EventSource.md#closed)
- [CONNECTING](python_integration_api._internal_.EventSource.md#connecting)
- [OPEN](python_integration_api._internal_.EventSource.md#open)
- [onerror](python_integration_api._internal_.EventSource.md#onerror)
- [onmessage](python_integration_api._internal_.EventSource.md#onmessage)
- [onopen](python_integration_api._internal_.EventSource.md#onopen)
- [readyState](python_integration_api._internal_.EventSource.md#readystate)
- [url](python_integration_api._internal_.EventSource.md#url)
- [withCredentials](python_integration_api._internal_.EventSource.md#withcredentials)

### Methods

- [addEventListener](python_integration_api._internal_.EventSource.md#addeventlistener)
- [close](python_integration_api._internal_.EventSource.md#close)
- [dispatchEvent](python_integration_api._internal_.EventSource.md#dispatchevent)
- [removeEventListener](python_integration_api._internal_.EventSource.md#removeeventlistener)

## Properties

### CLOSED

• `Readonly` **CLOSED**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5100

___

### CONNECTING

• `Readonly` **CONNECTING**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5101

___

### OPEN

• `Readonly` **OPEN**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5102

___

### onerror

• **onerror**: ``null`` \| (`this`: [`EventSource`](../modules/python_integration_api._internal_.md#eventsource), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5089

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`EventSource`](../modules/python_integration_api._internal_.md#eventsource), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5090

___

### onopen

• **onopen**: ``null`` \| (`this`: [`EventSource`](../modules/python_integration_api._internal_.md#eventsource), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5091

___

### readyState

• `Readonly` **readyState**: `number`

Returns the state of this EventSource object's connection. It can have the values described below.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5093

___

### url

• `Readonly` **url**: `string`

Returns the URL providing the event stream.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5095

___

### withCredentials

• `Readonly` **withCredentials**: `boolean`

Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5097

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`EventSourceEventMap`](python_integration_api._internal_.EventSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`EventSource`](../modules/python_integration_api._internal_.md#eventsource), `ev`: [`EventSourceEventMap`](python_integration_api._internal_.EventSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5103

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (`this`: [`EventSource`](../modules/python_integration_api._internal_.md#eventsource), `event`: `MessageEvent`<`any`\>) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5104

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

node_modules/typescript/lib/lib.dom.d.ts:5105

___

### close

▸ **close**(): `void`

Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5099

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

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`EventSourceEventMap`](python_integration_api._internal_.EventSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`EventSource`](../modules/python_integration_api._internal_.md#eventsource), `ev`: [`EventSourceEventMap`](python_integration_api._internal_.EventSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5106

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (`this`: [`EventSource`](../modules/python_integration_api._internal_.md#eventsource), `event`: `MessageEvent`<`any`\>) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5107

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

node_modules/typescript/lib/lib.dom.d.ts:5108
