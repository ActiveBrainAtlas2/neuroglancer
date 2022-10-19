[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / SpeechSynthesisUtterance

# Interface: SpeechSynthesisUtterance

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).SpeechSynthesisUtterance

This Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`SpeechSynthesisUtterance`**

## Table of contents

### Properties

- [lang](axes_lines._internal_.SpeechSynthesisUtterance.md#lang)
- [onboundary](axes_lines._internal_.SpeechSynthesisUtterance.md#onboundary)
- [onend](axes_lines._internal_.SpeechSynthesisUtterance.md#onend)
- [onerror](axes_lines._internal_.SpeechSynthesisUtterance.md#onerror)
- [onmark](axes_lines._internal_.SpeechSynthesisUtterance.md#onmark)
- [onpause](axes_lines._internal_.SpeechSynthesisUtterance.md#onpause)
- [onresume](axes_lines._internal_.SpeechSynthesisUtterance.md#onresume)
- [onstart](axes_lines._internal_.SpeechSynthesisUtterance.md#onstart)
- [pitch](axes_lines._internal_.SpeechSynthesisUtterance.md#pitch)
- [rate](axes_lines._internal_.SpeechSynthesisUtterance.md#rate)
- [text](axes_lines._internal_.SpeechSynthesisUtterance.md#text)
- [voice](axes_lines._internal_.SpeechSynthesisUtterance.md#voice)
- [volume](axes_lines._internal_.SpeechSynthesisUtterance.md#volume)

### Methods

- [addEventListener](axes_lines._internal_.SpeechSynthesisUtterance.md#addeventlistener)
- [dispatchEvent](axes_lines._internal_.SpeechSynthesisUtterance.md#dispatchevent)
- [removeEventListener](axes_lines._internal_.SpeechSynthesisUtterance.md#removeeventlistener)

## Properties

### lang

• **lang**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13750

___

### onboundary

• **onboundary**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/axes_lines._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13751

___

### onend

• **onend**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/axes_lines._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13752

___

### onerror

• **onerror**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisErrorEvent`](../modules/axes_lines._internal_.md#speechsynthesiserrorevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13753

___

### onmark

• **onmark**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/axes_lines._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13754

___

### onpause

• **onpause**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/axes_lines._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13755

___

### onresume

• **onresume**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/axes_lines._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13756

___

### onstart

• **onstart**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/axes_lines._internal_.md#speechsynthesisevent)) => `any`

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

• **voice**: ``null`` \| [`SpeechSynthesisVoice`](../modules/axes_lines._internal_.md#speechsynthesisvoice)

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
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](axes_lines._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisUtteranceEventMap`](axes_lines._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/axes_lines._internal_.md#event) |

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
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](axes_lines._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesisUtterance`](../modules/axes_lines._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisUtteranceEventMap`](axes_lines._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13766
