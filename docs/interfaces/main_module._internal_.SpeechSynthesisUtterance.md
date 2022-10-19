[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / SpeechSynthesisUtterance

# Interface: SpeechSynthesisUtterance

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).SpeechSynthesisUtterance

This Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`SpeechSynthesisUtterance`**

## Table of contents

### Properties

- [lang](main_module._internal_.SpeechSynthesisUtterance.md#lang)
- [onboundary](main_module._internal_.SpeechSynthesisUtterance.md#onboundary)
- [onend](main_module._internal_.SpeechSynthesisUtterance.md#onend)
- [onerror](main_module._internal_.SpeechSynthesisUtterance.md#onerror)
- [onmark](main_module._internal_.SpeechSynthesisUtterance.md#onmark)
- [onpause](main_module._internal_.SpeechSynthesisUtterance.md#onpause)
- [onresume](main_module._internal_.SpeechSynthesisUtterance.md#onresume)
- [onstart](main_module._internal_.SpeechSynthesisUtterance.md#onstart)
- [pitch](main_module._internal_.SpeechSynthesisUtterance.md#pitch)
- [rate](main_module._internal_.SpeechSynthesisUtterance.md#rate)
- [text](main_module._internal_.SpeechSynthesisUtterance.md#text)
- [voice](main_module._internal_.SpeechSynthesisUtterance.md#voice)
- [volume](main_module._internal_.SpeechSynthesisUtterance.md#volume)

### Methods

- [addEventListener](main_module._internal_.SpeechSynthesisUtterance.md#addeventlistener)
- [dispatchEvent](main_module._internal_.SpeechSynthesisUtterance.md#dispatchevent)
- [removeEventListener](main_module._internal_.SpeechSynthesisUtterance.md#removeeventlistener)

## Properties

### lang

• **lang**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13750

___

### onboundary

• **onboundary**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13751

___

### onend

• **onend**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13752

___

### onerror

• **onerror**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisErrorEvent`](../modules/main_module._internal_.md#speechsynthesiserrorevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13753

___

### onmark

• **onmark**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13754

___

### onpause

• **onpause**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13755

___

### onresume

• **onresume**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13756

___

### onstart

• **onstart**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13757

___

### pitch

• **pitch**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13758

___

### rate

• **rate**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13759

___

### text

• **text**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13760

___

### voice

• **voice**: ``null`` \| [`SpeechSynthesisVoice`](../modules/main_module._internal_.md#speechsynthesisvoice)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13761

___

### volume

• **volume**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13762

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](main_module._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisUtteranceEventMap`](main_module._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13763

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

node_modules/typescript/lib/lib.dom.d.ts:13764

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
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](main_module._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesisUtterance`](../modules/main_module._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisUtteranceEventMap`](main_module._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13765

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

node_modules/typescript/lib/lib.dom.d.ts:13766
