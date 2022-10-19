[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / SourceBuffer

# Interface: SourceBuffer

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).SourceBuffer

A chunk of media to be passed into an HTMLMediaElement and played, via a MediaSource object. This can be made up of one or several media segments.

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`SourceBuffer`**

## Table of contents

### Properties

- [appendWindowEnd](main_module._internal_.SourceBuffer.md#appendwindowend)
- [appendWindowStart](main_module._internal_.SourceBuffer.md#appendwindowstart)
- [buffered](main_module._internal_.SourceBuffer.md#buffered)
- [mode](main_module._internal_.SourceBuffer.md#mode)
- [onabort](main_module._internal_.SourceBuffer.md#onabort)
- [onerror](main_module._internal_.SourceBuffer.md#onerror)
- [onupdate](main_module._internal_.SourceBuffer.md#onupdate)
- [onupdateend](main_module._internal_.SourceBuffer.md#onupdateend)
- [onupdatestart](main_module._internal_.SourceBuffer.md#onupdatestart)
- [timestampOffset](main_module._internal_.SourceBuffer.md#timestampoffset)
- [updating](main_module._internal_.SourceBuffer.md#updating)

### Methods

- [abort](main_module._internal_.SourceBuffer.md#abort)
- [addEventListener](main_module._internal_.SourceBuffer.md#addeventlistener)
- [appendBuffer](main_module._internal_.SourceBuffer.md#appendbuffer)
- [changeType](main_module._internal_.SourceBuffer.md#changetype)
- [dispatchEvent](main_module._internal_.SourceBuffer.md#dispatchevent)
- [remove](main_module._internal_.SourceBuffer.md#remove)
- [removeEventListener](main_module._internal_.SourceBuffer.md#removeeventlistener)

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

• `Readonly` **buffered**: [`TimeRanges`](../modules/main_module._internal_.md#timeranges)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13610

___

### mode

• **mode**: [`AppendMode`](../modules/main_module._internal_.md#appendmode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13611

___

### onabort

• **onabort**: ``null`` \| (`this`: [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13612

___

### onerror

• **onerror**: ``null`` \| (`this`: [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13613

___

### onupdate

• **onupdate**: ``null`` \| (`this`: [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13614

___

### onupdateend

• **onupdateend**: ``null`` \| (`this`: [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13615

___

### onupdatestart

• **onupdatestart**: ``null`` \| (`this`: [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

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
| `K` | extends keyof [`SourceBufferEventMap`](main_module._internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer), `ev`: [`SourceBufferEventMap`](main_module._internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `data` | [`BufferSource`](../modules/main_module._internal_.md#buffersource) |

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
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

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
| `K` | extends keyof [`SourceBufferEventMap`](main_module._internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SourceBuffer`](../modules/main_module._internal_.md#sourcebuffer), `ev`: [`SourceBufferEventMap`](main_module._internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13626
