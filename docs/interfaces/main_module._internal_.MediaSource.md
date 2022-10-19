[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / MediaSource

# Interface: MediaSource

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).MediaSource

This Media Source Extensions API interface represents a source of media data for an HTMLMediaElement object. A MediaSource object can be attached to a HTMLMediaElement to be played in the user agent.

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`MediaSource`**

## Table of contents

### Properties

- [activeSourceBuffers](main_module._internal_.MediaSource.md#activesourcebuffers)
- [duration](main_module._internal_.MediaSource.md#duration)
- [onsourceclose](main_module._internal_.MediaSource.md#onsourceclose)
- [onsourceended](main_module._internal_.MediaSource.md#onsourceended)
- [onsourceopen](main_module._internal_.MediaSource.md#onsourceopen)
- [readyState](main_module._internal_.MediaSource.md#readystate)
- [sourceBuffers](main_module._internal_.MediaSource.md#sourcebuffers)

### Methods

- [addEventListener](main_module._internal_.MediaSource.md#addeventlistener)
- [addSourceBuffer](main_module._internal_.MediaSource.md#addsourcebuffer)
- [clearLiveSeekableRange](main_module._internal_.MediaSource.md#clearliveseekablerange)
- [dispatchEvent](main_module._internal_.MediaSource.md#dispatchevent)
- [endOfStream](main_module._internal_.MediaSource.md#endofstream)
- [removeEventListener](main_module._internal_.MediaSource.md#removeeventlistener)
- [removeSourceBuffer](main_module._internal_.MediaSource.md#removesourcebuffer)
- [setLiveSeekableRange](main_module._internal_.MediaSource.md#setliveseekablerange)

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

• **onsourceclose**: ``null`` \| (`this`: [`MediaSource`](../modules/main_module._internal_.md#mediasource), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9553

___

### onsourceended

• **onsourceended**: ``null`` \| (`this`: [`MediaSource`](../modules/main_module._internal_.md#mediasource), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9554

___

### onsourceopen

• **onsourceopen**: ``null`` \| (`this`: [`MediaSource`](../modules/main_module._internal_.md#mediasource), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9555

___

### readyState

• `Readonly` **readyState**: [`ReadyState`](../modules/main_module._internal_.md#readystate)

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
| `K` | extends keyof [`MediaSourceEventMap`](main_module._internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaSource`](../modules/main_module._internal_.md#mediasource), `ev`: [`MediaSourceEventMap`](main_module._internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9564

___

### addSourceBuffer

▸ **addSourceBuffer**(`type`): [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer)

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
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

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
| `error?` | [`EndOfStreamError`](../modules/main_module._internal_.md#endofstreamerror) |

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
| `K` | extends keyof [`MediaSourceEventMap`](main_module._internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaSource`](../modules/main_module._internal_.md#mediasource), `ev`: [`MediaSourceEventMap`](main_module._internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
| `sourceBuffer` | [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer) |

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
