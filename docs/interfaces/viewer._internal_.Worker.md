[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / Worker

# Interface: Worker

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).Worker

This Web Workers API interface represents a background task that can be easily created and can send messages back to its creator. Creating a worker is as simple as calling the Worker() constructor and specifying a script to be run in the worker thread.

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

- [`AbstractWorker`](viewer._internal_.AbstractWorker.md)

  ↳ **`Worker`**

## Table of contents

### Properties

- [onerror](viewer._internal_.Worker.md#onerror)
- [onmessage](viewer._internal_.Worker.md#onmessage)
- [onmessageerror](viewer._internal_.Worker.md#onmessageerror)

### Methods

- [addEventListener](viewer._internal_.Worker.md#addeventlistener)
- [dispatchEvent](viewer._internal_.Worker.md#dispatchevent)
- [postMessage](viewer._internal_.Worker.md#postmessage)
- [removeEventListener](viewer._internal_.Worker.md#removeeventlistener)
- [terminate](viewer._internal_.Worker.md#terminate)

## Properties

### onerror

• **onerror**: ``null`` \| (`this`: [`AbstractWorker`](viewer._internal_.AbstractWorker.md), `ev`: [`ErrorEvent`](../modules/axes_lines._internal_.md#errorevent)) => `any`

#### Inherited from

[AbstractWorker](viewer._internal_.AbstractWorker.md).[onerror](viewer._internal_.AbstractWorker.md#onerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2021

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`Worker`](../modules/viewer._internal_.md#worker), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16828

___

### onmessageerror

• **onmessageerror**: ``null`` \| (`this`: [`Worker`](../modules/viewer._internal_.md#worker), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16829

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WorkerEventMap`](viewer._internal_.WorkerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Worker`](../modules/viewer._internal_.md#worker), `ev`: [`WorkerEventMap`](viewer._internal_.WorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[AbstractWorker](viewer._internal_.AbstractWorker.md).[addEventListener](viewer._internal_.AbstractWorker.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16835

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

[AbstractWorker](viewer._internal_.AbstractWorker.md).[addEventListener](viewer._internal_.AbstractWorker.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16836

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

### postMessage

▸ **postMessage**(`message`, `transfer`): `void`

Clones message and transmits it to worker's global environment. transfer can be passed as a list of objects that are to be transferred rather than cloned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `transfer` | [`Transferable`](../modules/axes_lines._internal_.md#transferable)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16831

▸ **postMessage**(`message`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | [`StructuredSerializeOptions`](axes_lines._internal_.StructuredSerializeOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16832

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WorkerEventMap`](viewer._internal_.WorkerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Worker`](../modules/viewer._internal_.md#worker), `ev`: [`WorkerEventMap`](viewer._internal_.WorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[AbstractWorker](viewer._internal_.AbstractWorker.md).[removeEventListener](viewer._internal_.AbstractWorker.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16837

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

[AbstractWorker](viewer._internal_.AbstractWorker.md).[removeEventListener](viewer._internal_.AbstractWorker.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16838

___

### terminate

▸ **terminate**(): `void`

Aborts worker's associated global environment.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16834
