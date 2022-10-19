[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / MediaStreamTrack

# Interface: MediaStreamTrack

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).MediaStreamTrack

A single media track within a stream; typically, these are audio or video tracks, but other track types may exist as well.

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`MediaStreamTrack`**

## Table of contents

### Properties

- [contentHint](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#contenthint)
- [enabled](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#enabled)
- [id](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#id)
- [kind](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#kind)
- [label](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#label)
- [muted](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#muted)
- [onended](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#onended)
- [onmute](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#onmute)
- [onunmute](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#onunmute)
- [readyState](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#readystate)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#addeventlistener)
- [applyConstraints](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#applyconstraints)
- [clone](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#clone)
- [dispatchEvent](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#dispatchevent)
- [getCapabilities](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#getcapabilities)
- [getConstraints](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#getconstraints)
- [getSettings](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#getsettings)
- [removeEventListener](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#removeeventlistener)
- [stop](annotation_annotation_layer_state._internal_.MediaStreamTrack.md#stop)

## Properties

### contentHint

• **contentHint**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9633

___

### enabled

• **enabled**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9634

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9635

___

### kind

• `Readonly` **kind**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9636

___

### label

• `Readonly` **label**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9637

___

### muted

• `Readonly` **muted**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9638

___

### onended

• **onended**: ``null`` \| (`this`: [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9639

___

### onmute

• **onmute**: ``null`` \| (`this`: [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9640

___

### onunmute

• **onunmute**: ``null`` \| (`this`: [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9641

___

### readyState

• `Readonly` **readyState**: [`MediaStreamTrackState`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrackstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9642

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamTrackEventMap`](annotation_annotation_layer_state._internal_.MediaStreamTrackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack), `ev`: [`MediaStreamTrackEventMap`](annotation_annotation_layer_state._internal_.MediaStreamTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9649

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

node_modules/typescript/lib/lib.dom.d.ts:9650

___

### applyConstraints

▸ **applyConstraints**(`constraints?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints?` | [`MediaTrackConstraints`](annotation_annotation_layer_state._internal_.MediaTrackConstraints.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9643

___

### clone

▸ **clone**(): [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)

#### Returns

[`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9644

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

### getCapabilities

▸ **getCapabilities**(): [`MediaTrackCapabilities`](annotation_annotation_layer_state._internal_.MediaTrackCapabilities.md)

#### Returns

[`MediaTrackCapabilities`](annotation_annotation_layer_state._internal_.MediaTrackCapabilities.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9645

___

### getConstraints

▸ **getConstraints**(): [`MediaTrackConstraints`](annotation_annotation_layer_state._internal_.MediaTrackConstraints.md)

#### Returns

[`MediaTrackConstraints`](annotation_annotation_layer_state._internal_.MediaTrackConstraints.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9646

___

### getSettings

▸ **getSettings**(): [`MediaTrackSettings`](annotation_annotation_layer_state._internal_.MediaTrackSettings.md)

#### Returns

[`MediaTrackSettings`](annotation_annotation_layer_state._internal_.MediaTrackSettings.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9647

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamTrackEventMap`](annotation_annotation_layer_state._internal_.MediaStreamTrackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack), `ev`: [`MediaStreamTrackEventMap`](annotation_annotation_layer_state._internal_.MediaStreamTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9651

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

node_modules/typescript/lib/lib.dom.d.ts:9652

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9648
