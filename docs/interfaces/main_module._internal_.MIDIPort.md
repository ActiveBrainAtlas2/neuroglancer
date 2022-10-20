[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / MIDIPort

# Interface: MIDIPort

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).MIDIPort

Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`MIDIPort`**

## Table of contents

### Properties

- [connection](main_module._internal_.MIDIPort.md#connection)
- [id](main_module._internal_.MIDIPort.md#id)
- [manufacturer](main_module._internal_.MIDIPort.md#manufacturer)
- [name](main_module._internal_.MIDIPort.md#name)
- [onstatechange](main_module._internal_.MIDIPort.md#onstatechange)
- [state](main_module._internal_.MIDIPort.md#state)
- [type](main_module._internal_.MIDIPort.md#type)
- [version](main_module._internal_.MIDIPort.md#version)

### Methods

- [addEventListener](main_module._internal_.MIDIPort.md#addeventlistener)
- [close](main_module._internal_.MIDIPort.md#close)
- [dispatchEvent](main_module._internal_.MIDIPort.md#dispatchevent)
- [open](main_module._internal_.MIDIPort.md#open)
- [removeEventListener](main_module._internal_.MIDIPort.md#removeeventlistener)

## Properties

### connection

• `Readonly` **connection**: [`MIDIPortConnectionState`](../modules/main_module._internal_.md#midiportconnectionstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9205

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9206

___

### manufacturer

• `Readonly` **manufacturer**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9207

___

### name

• `Readonly` **name**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9208

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`MIDIPort`](../modules/main_module._internal_.md#midiport), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9209

___

### state

• `Readonly` **state**: [`MIDIPortDeviceState`](../modules/main_module._internal_.md#midiportdevicestate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9210

___

### type

• `Readonly` **type**: [`MIDIPortType`](../modules/main_module._internal_.md#midiporttype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9211

___

### version

• `Readonly` **version**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9212

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIPort`](../modules/main_module._internal_.md#midiport), `ev`: [`MIDIPortEventMap`](main_module._internal_.MIDIPortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9215

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

node_modules/typescript/lib/lib.dom.d.ts:9216

___

### close

▸ **close**(): `Promise`<[`MIDIPort`](../modules/main_module._internal_.md#midiport)\>

#### Returns

`Promise`<[`MIDIPort`](../modules/main_module._internal_.md#midiport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9213

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

### open

▸ **open**(): `Promise`<[`MIDIPort`](../modules/main_module._internal_.md#midiport)\>

#### Returns

`Promise`<[`MIDIPort`](../modules/main_module._internal_.md#midiport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9214

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIPort`](../modules/main_module._internal_.md#midiport), `ev`: [`MIDIPortEventMap`](main_module._internal_.MIDIPortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9217

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

node_modules/typescript/lib/lib.dom.d.ts:9218
