[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / MessagePort

# Interface: MessagePort

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).MessagePort

This Channel Messaging API interface represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`MessagePort`**

## Table of contents

### Properties

- [onmessage](annotation_annotation_layer_state._internal_.MessagePort.md#onmessage)
- [onmessageerror](annotation_annotation_layer_state._internal_.MessagePort.md#onmessageerror)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.MessagePort.md#addeventlistener)
- [close](annotation_annotation_layer_state._internal_.MessagePort.md#close)
- [dispatchEvent](annotation_annotation_layer_state._internal_.MessagePort.md#dispatchevent)
- [postMessage](annotation_annotation_layer_state._internal_.MessagePort.md#postmessage)
- [removeEventListener](annotation_annotation_layer_state._internal_.MessagePort.md#removeeventlistener)
- [start](annotation_annotation_layer_state._internal_.MessagePort.md#start)

## Properties

### onmessage

• **onmessage**: ``null`` \| (`this`: [`MessagePort`](../modules/annotation_annotation_layer_state._internal_.md#messageport), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9711

___

### onmessageerror

• **onmessageerror**: ``null`` \| (`this`: [`MessagePort`](../modules/annotation_annotation_layer_state._internal_.md#messageport), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9712

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MessagePortEventMap`](annotation_annotation_layer_state._internal_.MessagePortEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MessagePort`](../modules/annotation_annotation_layer_state._internal_.md#messageport), `ev`: [`MessagePortEventMap`](annotation_annotation_layer_state._internal_.MessagePortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9724

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

node_modules/typescript/lib/lib.dom.d.ts:9725

___

### close

▸ **close**(): `void`

Disconnects the port, so that it is no longer active.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9714

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

### postMessage

▸ **postMessage**(`message`, `transfer`): `void`

Posts a message through the channel. Objects listed in transfer are transferred, not just cloned, meaning that they are no longer usable on the sending side.

Throws a "DataCloneError" DOMException if transfer contains duplicate objects or port, or if message could not be cloned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `transfer` | [`Transferable`](../modules/annotation_annotation_layer_state._internal_.md#transferable)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9720

▸ **postMessage**(`message`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | [`StructuredSerializeOptions`](annotation_annotation_layer_state._internal_.StructuredSerializeOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9721

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MessagePortEventMap`](annotation_annotation_layer_state._internal_.MessagePortEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MessagePort`](../modules/annotation_annotation_layer_state._internal_.md#messageport), `ev`: [`MessagePortEventMap`](annotation_annotation_layer_state._internal_.MessagePortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9726

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

node_modules/typescript/lib/lib.dom.d.ts:9727

___

### start

▸ **start**(): `void`

Begins dispatching messages received on the port.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9723
