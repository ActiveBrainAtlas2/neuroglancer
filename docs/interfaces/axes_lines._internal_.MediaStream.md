[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / MediaStream

# Interface: MediaStream

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).MediaStream

A stream of media content. A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of MediaStreamTrack.

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`MediaStream`**

## Table of contents

### Properties

- [active](axes_lines._internal_.MediaStream.md#active)
- [id](axes_lines._internal_.MediaStream.md#id)
- [onaddtrack](axes_lines._internal_.MediaStream.md#onaddtrack)
- [onremovetrack](axes_lines._internal_.MediaStream.md#onremovetrack)

### Methods

- [addEventListener](axes_lines._internal_.MediaStream.md#addeventlistener)
- [addTrack](axes_lines._internal_.MediaStream.md#addtrack)
- [clone](axes_lines._internal_.MediaStream.md#clone)
- [dispatchEvent](axes_lines._internal_.MediaStream.md#dispatchevent)
- [getAudioTracks](axes_lines._internal_.MediaStream.md#getaudiotracks)
- [getTrackById](axes_lines._internal_.MediaStream.md#gettrackbyid)
- [getTracks](axes_lines._internal_.MediaStream.md#gettracks)
- [getVideoTracks](axes_lines._internal_.MediaStream.md#getvideotracks)
- [removeEventListener](axes_lines._internal_.MediaStream.md#removeeventlistener)
- [removeTrack](axes_lines._internal_.MediaStream.md#removetrack)

## Properties

### active

• `Readonly` **active**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9582

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9583

___

### onaddtrack

• **onaddtrack**: ``null`` \| (`this`: [`MediaStream`](../modules/axes_lines._internal_.md#mediastream), `ev`: [`MediaStreamTrackEvent`](../modules/axes_lines._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9584

___

### onremovetrack

• **onremovetrack**: ``null`` \| (`this`: [`MediaStream`](../modules/axes_lines._internal_.md#mediastream), `ev`: [`MediaStreamTrackEvent`](../modules/axes_lines._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9585

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](axes_lines._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStream`](../modules/axes_lines._internal_.md#mediastream), `ev`: [`MediaStreamEventMap`](axes_lines._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9593

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

node_modules/typescript/lib/lib.dom.d.ts:9594

___

### addTrack

▸ **addTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9586

___

### clone

▸ **clone**(): [`MediaStream`](../modules/axes_lines._internal_.md#mediastream)

#### Returns

[`MediaStream`](../modules/axes_lines._internal_.md#mediastream)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9587

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

### getAudioTracks

▸ **getAudioTracks**(): [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9588

___

### getTrackById

▸ **getTrackById**(`trackId`): ``null`` \| [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackId` | `string` |

#### Returns

``null`` \| [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9589

___

### getTracks

▸ **getTracks**(): [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9590

___

### getVideoTracks

▸ **getVideoTracks**(): [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9591

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](axes_lines._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStream`](../modules/axes_lines._internal_.md#mediastream), `ev`: [`MediaStreamEventMap`](axes_lines._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9595

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

node_modules/typescript/lib/lib.dom.d.ts:9596

___

### removeTrack

▸ **removeTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9592
