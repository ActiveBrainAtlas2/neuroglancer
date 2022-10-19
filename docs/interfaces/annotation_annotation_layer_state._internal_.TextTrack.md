[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TextTrack

# Interface: TextTrack

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TextTrack

This interface also inherits properties from EventTarget.

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`TextTrack`**

## Table of contents

### Properties

- [activeCues](annotation_annotation_layer_state._internal_.TextTrack.md#activecues)
- [cues](annotation_annotation_layer_state._internal_.TextTrack.md#cues)
- [id](annotation_annotation_layer_state._internal_.TextTrack.md#id)
- [inBandMetadataTrackDispatchType](annotation_annotation_layer_state._internal_.TextTrack.md#inbandmetadatatrackdispatchtype)
- [kind](annotation_annotation_layer_state._internal_.TextTrack.md#kind)
- [label](annotation_annotation_layer_state._internal_.TextTrack.md#label)
- [language](annotation_annotation_layer_state._internal_.TextTrack.md#language)
- [mode](annotation_annotation_layer_state._internal_.TextTrack.md#mode)
- [oncuechange](annotation_annotation_layer_state._internal_.TextTrack.md#oncuechange)

### Methods

- [addCue](annotation_annotation_layer_state._internal_.TextTrack.md#addcue)
- [addEventListener](annotation_annotation_layer_state._internal_.TextTrack.md#addeventlistener)
- [dispatchEvent](annotation_annotation_layer_state._internal_.TextTrack.md#dispatchevent)
- [removeCue](annotation_annotation_layer_state._internal_.TextTrack.md#removecue)
- [removeEventListener](annotation_annotation_layer_state._internal_.TextTrack.md#removeeventlistener)

## Properties

### activeCues

• `Readonly` **activeCues**: ``null`` \| `TextTrackCueList`

Returns the text track cues from the text track list of cues that are currently active (i.e. that start before the current playback position and end after it), as a TextTrackCueList object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14060

___

### cues

• `Readonly` **cues**: ``null`` \| `TextTrackCueList`

Returns the text track list of cues, as a TextTrackCueList object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14062

___

### id

• `Readonly` **id**: `string`

Returns the ID of the given track.

For in-band tracks, this is the ID that can be used with a fragment if the format supports media fragment syntax, and that can be used with the getTrackById() method.

For TextTrack objects corresponding to track elements, this is the ID of the track element.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14070

___

### inBandMetadataTrackDispatchType

• `Readonly` **inBandMetadataTrackDispatchType**: `string`

Returns the text track in-band metadata track dispatch type string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14072

___

### kind

• `Readonly` **kind**: [`TextTrackKind`](../modules/annotation_annotation_layer_state._internal_.md#texttrackkind)

Returns the text track kind string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14074

___

### label

• `Readonly` **label**: `string`

Returns the text track label, if there is one, or the empty string otherwise (indicating that a custom label probably needs to be generated from the other attributes of the object if the object is exposed to the user).

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14076

___

### language

• `Readonly` **language**: `string`

Returns the text track language string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14078

___

### mode

• **mode**: [`TextTrackMode`](../modules/annotation_annotation_layer_state._internal_.md#texttrackmode)

Returns the text track mode, represented by a string from the following list:

Can be set, to change the mode.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14084

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: [`TextTrack`](../modules/annotation_annotation_layer_state._internal_.md#texttrack), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14085

## Methods

### addCue

▸ **addCue**(`cue`): `void`

Adds the given cue to textTrack's text track list of cues.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cue` | [`TextTrackCue`](../modules/annotation_annotation_layer_state._internal_.md#texttrackcue) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14087

___

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`TextTrack`](../modules/annotation_annotation_layer_state._internal_.md#texttrack), `ev`: [`TextTrackEventMap`](annotation_annotation_layer_state._internal_.TextTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14090

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

node_modules/typescript/lib/lib.dom.d.ts:14091

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

### removeCue

▸ **removeCue**(`cue`): `void`

Removes the given cue from textTrack's text track list of cues.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cue` | [`TextTrackCue`](../modules/annotation_annotation_layer_state._internal_.md#texttrackcue) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14089

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`TextTrack`](../modules/annotation_annotation_layer_state._internal_.md#texttrack), `ev`: [`TextTrackEventMap`](annotation_annotation_layer_state._internal_.TextTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14092

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

node_modules/typescript/lib/lib.dom.d.ts:14093
