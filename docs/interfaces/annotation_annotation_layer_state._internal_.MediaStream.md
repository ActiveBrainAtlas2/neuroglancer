[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / MediaStream

# Interface: MediaStream

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).MediaStream

A stream of media content. A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of MediaStreamTrack.

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`MediaStream`**

## Table of contents

### Properties

- [active](annotation_annotation_layer_state._internal_.MediaStream.md#active)
- [id](annotation_annotation_layer_state._internal_.MediaStream.md#id)
- [onaddtrack](annotation_annotation_layer_state._internal_.MediaStream.md#onaddtrack)
- [onremovetrack](annotation_annotation_layer_state._internal_.MediaStream.md#onremovetrack)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.MediaStream.md#addeventlistener)
- [addTrack](annotation_annotation_layer_state._internal_.MediaStream.md#addtrack)
- [clone](annotation_annotation_layer_state._internal_.MediaStream.md#clone)
- [dispatchEvent](annotation_annotation_layer_state._internal_.MediaStream.md#dispatchevent)
- [getAudioTracks](annotation_annotation_layer_state._internal_.MediaStream.md#getaudiotracks)
- [getTrackById](annotation_annotation_layer_state._internal_.MediaStream.md#gettrackbyid)
- [getTracks](annotation_annotation_layer_state._internal_.MediaStream.md#gettracks)
- [getVideoTracks](annotation_annotation_layer_state._internal_.MediaStream.md#getvideotracks)
- [removeEventListener](annotation_annotation_layer_state._internal_.MediaStream.md#removeeventlistener)
- [removeTrack](annotation_annotation_layer_state._internal_.MediaStream.md#removetrack)

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

• **onaddtrack**: ``null`` \| (`this`: [`MediaStream`](../modules/annotation_annotation_layer_state._internal_.md#mediastream), `ev`: [`MediaStreamTrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9584

___

### onremovetrack

• **onremovetrack**: ``null`` \| (`this`: [`MediaStream`](../modules/annotation_annotation_layer_state._internal_.md#mediastream), `ev`: [`MediaStreamTrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9585

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](annotation_annotation_layer_state._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStream`](../modules/annotation_annotation_layer_state._internal_.md#mediastream), `ev`: [`MediaStreamEventMap`](annotation_annotation_layer_state._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `track` | [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9586

___

### clone

▸ **clone**(): [`MediaStream`](../modules/annotation_annotation_layer_state._internal_.md#mediastream)

#### Returns

[`MediaStream`](../modules/annotation_annotation_layer_state._internal_.md#mediastream)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9587

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

### getAudioTracks

▸ **getAudioTracks**(): [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9588

___

### getTrackById

▸ **getTrackById**(`trackId`): ``null`` \| [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackId` | `string` |

#### Returns

``null`` \| [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9589

___

### getTracks

▸ **getTracks**(): [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9590

___

### getVideoTracks

▸ **getVideoTracks**(): [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9591

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](annotation_annotation_layer_state._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStream`](../modules/annotation_annotation_layer_state._internal_.md#mediastream), `ev`: [`MediaStreamEventMap`](annotation_annotation_layer_state._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `track` | [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9592
