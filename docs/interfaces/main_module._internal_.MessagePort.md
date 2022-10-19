[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / MessagePort

# Interface: MessagePort

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).MessagePort

This Channel Messaging API interface represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`MessagePort`**

## Table of contents

### Properties

- [onmessage](main_module._internal_.MessagePort.md#onmessage)
- [onmessageerror](main_module._internal_.MessagePort.md#onmessageerror)

### Methods

- [addEventListener](main_module._internal_.MessagePort.md#addeventlistener)
- [close](main_module._internal_.MessagePort.md#close)
- [dispatchEvent](main_module._internal_.MessagePort.md#dispatchevent)
- [postMessage](main_module._internal_.MessagePort.md#postmessage)
- [removeEventListener](main_module._internal_.MessagePort.md#removeeventlistener)
- [start](main_module._internal_.MessagePort.md#start)

## Properties

### onmessage

• **onmessage**: ``null`` \| (`this`: [`MessagePort`](../modules/main_module._internal_.md#messageport), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9711

___

### onmessageerror

• **onmessageerror**: ``null`` \| (`this`: [`MessagePort`](../modules/main_module._internal_.md#messageport), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9712

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MessagePortEventMap`](main_module._internal_.MessagePortEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MessagePort`](../modules/main_module._internal_.md#messageport), `ev`: [`MessagePortEventMap`](main_module._internal_.MessagePortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

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
| `transfer` | [`Transferable`](../modules/main_module._internal_.md#transferable)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9720

▸ **postMessage**(`message`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | [`StructuredSerializeOptions`](main_module._internal_.StructuredSerializeOptions.md) |

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
| `K` | extends keyof [`MessagePortEventMap`](main_module._internal_.MessagePortEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MessagePort`](../modules/main_module._internal_.md#messageport), `ev`: [`MessagePortEventMap`](main_module._internal_.MessagePortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
