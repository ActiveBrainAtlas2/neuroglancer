[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / SourceBuffer

# Interface: SourceBuffer

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).SourceBuffer

A chunk of media to be passed into an HTMLMediaElement and played, via a MediaSource object. This can be made up of one or several media segments.

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`SourceBuffer`**

## Table of contents

### Properties

- [appendWindowEnd](axes_lines._internal_.SourceBuffer.md#appendwindowend)
- [appendWindowStart](axes_lines._internal_.SourceBuffer.md#appendwindowstart)
- [buffered](axes_lines._internal_.SourceBuffer.md#buffered)
- [mode](axes_lines._internal_.SourceBuffer.md#mode)
- [onabort](axes_lines._internal_.SourceBuffer.md#onabort)
- [onerror](axes_lines._internal_.SourceBuffer.md#onerror)
- [onupdate](axes_lines._internal_.SourceBuffer.md#onupdate)
- [onupdateend](axes_lines._internal_.SourceBuffer.md#onupdateend)
- [onupdatestart](axes_lines._internal_.SourceBuffer.md#onupdatestart)
- [timestampOffset](axes_lines._internal_.SourceBuffer.md#timestampoffset)
- [updating](axes_lines._internal_.SourceBuffer.md#updating)

### Methods

- [abort](axes_lines._internal_.SourceBuffer.md#abort)
- [addEventListener](axes_lines._internal_.SourceBuffer.md#addeventlistener)
- [appendBuffer](axes_lines._internal_.SourceBuffer.md#appendbuffer)
- [changeType](axes_lines._internal_.SourceBuffer.md#changetype)
- [dispatchEvent](axes_lines._internal_.SourceBuffer.md#dispatchevent)
- [remove](axes_lines._internal_.SourceBuffer.md#remove)
- [removeEventListener](axes_lines._internal_.SourceBuffer.md#removeeventlistener)

## Properties

### appendWindowEnd

• **appendWindowEnd**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13608

___

### appendWindowStart

• **appendWindowStart**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13609

___

### buffered

• `Readonly` **buffered**: [`TimeRanges`](../modules/axes_lines._internal_.md#timeranges)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13610

___

### mode

• **mode**: [`AppendMode`](../modules/axes_lines._internal_.md#appendmode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13611

___

### onabort

• **onabort**: ``null`` \| (`this`: [`SourceBuffer`](../modules/axes_lines._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13612

___

### onerror

• **onerror**: ``null`` \| (`this`: [`SourceBuffer`](../modules/axes_lines._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13613

___

### onupdate

• **onupdate**: ``null`` \| (`this`: [`SourceBuffer`](../modules/axes_lines._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13614

___

### onupdateend

• **onupdateend**: ``null`` \| (`this`: [`SourceBuffer`](../modules/axes_lines._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13615

___

### onupdatestart

• **onupdatestart**: ``null`` \| (`this`: [`SourceBuffer`](../modules/axes_lines._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13616

___

### timestampOffset

• **timestampOffset**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13617

___

### updating

• `Readonly` **updating**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13618

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13619

___

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferEventMap`](axes_lines._internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SourceBuffer`](../modules/axes_lines._internal_.md#sourcebuffer), `ev`: [`SourceBufferEventMap`](axes_lines._internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13623

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

node_modules/typescript/lib/lib.dom.d.ts:13624

___

### appendBuffer

▸ **appendBuffer**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BufferSource`](../modules/axes_lines._internal_.md#buffersource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13620

___

### changeType

▸ **changeType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13621

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

### remove

▸ **remove**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13622

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferEventMap`](axes_lines._internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SourceBuffer`](../modules/axes_lines._internal_.md#sourcebuffer), `ev`: [`SourceBufferEventMap`](axes_lines._internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13625

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

node_modules/typescript/lib/lib.dom.d.ts:13626
