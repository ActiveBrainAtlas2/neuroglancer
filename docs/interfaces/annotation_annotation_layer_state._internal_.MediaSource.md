[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / MediaSource

# Interface: MediaSource

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).MediaSource

This Media Source Extensions API interface represents a source of media data for an HTMLMediaElement object. A MediaSource object can be attached to a HTMLMediaElement to be played in the user agent.

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`MediaSource`**

## Table of contents

### Properties

- [activeSourceBuffers](annotation_annotation_layer_state._internal_.MediaSource.md#activesourcebuffers)
- [duration](annotation_annotation_layer_state._internal_.MediaSource.md#duration)
- [onsourceclose](annotation_annotation_layer_state._internal_.MediaSource.md#onsourceclose)
- [onsourceended](annotation_annotation_layer_state._internal_.MediaSource.md#onsourceended)
- [onsourceopen](annotation_annotation_layer_state._internal_.MediaSource.md#onsourceopen)
- [readyState](annotation_annotation_layer_state._internal_.MediaSource.md#readystate)
- [sourceBuffers](annotation_annotation_layer_state._internal_.MediaSource.md#sourcebuffers)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.MediaSource.md#addeventlistener)
- [addSourceBuffer](annotation_annotation_layer_state._internal_.MediaSource.md#addsourcebuffer)
- [clearLiveSeekableRange](annotation_annotation_layer_state._internal_.MediaSource.md#clearliveseekablerange)
- [dispatchEvent](annotation_annotation_layer_state._internal_.MediaSource.md#dispatchevent)
- [endOfStream](annotation_annotation_layer_state._internal_.MediaSource.md#endofstream)
- [removeEventListener](annotation_annotation_layer_state._internal_.MediaSource.md#removeeventlistener)
- [removeSourceBuffer](annotation_annotation_layer_state._internal_.MediaSource.md#removesourcebuffer)
- [setLiveSeekableRange](annotation_annotation_layer_state._internal_.MediaSource.md#setliveseekablerange)

## Properties

### activeSourceBuffers

• `Readonly` **activeSourceBuffers**: `SourceBufferList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9551

___

### duration

• **duration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9552

___

### onsourceclose

• **onsourceclose**: ``null`` \| (`this`: [`MediaSource`](../modules/annotation_annotation_layer_state._internal_.md#mediasource), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9553

___

### onsourceended

• **onsourceended**: ``null`` \| (`this`: [`MediaSource`](../modules/annotation_annotation_layer_state._internal_.md#mediasource), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9554

___

### onsourceopen

• **onsourceopen**: ``null`` \| (`this`: [`MediaSource`](../modules/annotation_annotation_layer_state._internal_.md#mediasource), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9555

___

### readyState

• `Readonly` **readyState**: [`ReadyState`](../modules/annotation_annotation_layer_state._internal_.md#readystate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9556

___

### sourceBuffers

• `Readonly` **sourceBuffers**: `SourceBufferList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9557

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaSourceEventMap`](annotation_annotation_layer_state._internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaSource`](../modules/annotation_annotation_layer_state._internal_.md#mediasource), `ev`: [`MediaSourceEventMap`](annotation_annotation_layer_state._internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9563

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

node_modules/typescript/lib/lib.dom.d.ts:9564

___

### addSourceBuffer

▸ **addSourceBuffer**(`type`): [`SourceBuffer`](../modules/annotation_annotation_layer_state._internal_.md#sourcebuffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`SourceBuffer`](../modules/annotation_annotation_layer_state._internal_.md#sourcebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9558

___

### clearLiveSeekableRange

▸ **clearLiveSeekableRange**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9559

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

### endOfStream

▸ **endOfStream**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | [`EndOfStreamError`](../modules/annotation_annotation_layer_state._internal_.md#endofstreamerror) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9560

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaSourceEventMap`](annotation_annotation_layer_state._internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaSource`](../modules/annotation_annotation_layer_state._internal_.md#mediasource), `ev`: [`MediaSourceEventMap`](annotation_annotation_layer_state._internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9565

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

node_modules/typescript/lib/lib.dom.d.ts:9566

___

### removeSourceBuffer

▸ **removeSourceBuffer**(`sourceBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceBuffer` | [`SourceBuffer`](../modules/annotation_annotation_layer_state._internal_.md#sourcebuffer) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9561

___

### setLiveSeekableRange

▸ **setLiveSeekableRange**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9562
