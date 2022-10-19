[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / SpeechSynthesisUtterance

# Interface: SpeechSynthesisUtterance

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).SpeechSynthesisUtterance

This Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`SpeechSynthesisUtterance`**

## Table of contents

### Properties

- [lang](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#lang)
- [onboundary](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#onboundary)
- [onend](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#onend)
- [onerror](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#onerror)
- [onmark](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#onmark)
- [onpause](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#onpause)
- [onresume](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#onresume)
- [onstart](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#onstart)
- [pitch](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#pitch)
- [rate](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#rate)
- [text](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#text)
- [voice](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#voice)
- [volume](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#volume)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#addeventlistener)
- [dispatchEvent](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#dispatchevent)
- [removeEventListener](annotation_annotation_layer_state._internal_.SpeechSynthesisUtterance.md#removeeventlistener)

## Properties

### lang

• **lang**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13750

___

### onboundary

• **onboundary**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13751

___

### onend

• **onend**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13752

___

### onerror

• **onerror**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesiserrorevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13753

___

### onmark

• **onmark**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13754

___

### onpause

• **onpause**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13755

___

### onresume

• **onresume**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13756

___

### onstart

• **onstart**: ``null`` \| (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)) => `any`

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

• **voice**: ``null`` \| [`SpeechSynthesisVoice`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisvoice)

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
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](annotation_annotation_layer_state._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisUtteranceEventMap`](annotation_annotation_layer_state._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](annotation_annotation_layer_state._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance), `ev`: [`SpeechSynthesisUtteranceEventMap`](annotation_annotation_layer_state._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13766
