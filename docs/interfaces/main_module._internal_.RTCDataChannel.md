[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / RTCDataChannel

# Interface: RTCDataChannel

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).RTCDataChannel

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`RTCDataChannel`**

## Table of contents

### Properties

- [binaryType](main_module._internal_.RTCDataChannel.md#binarytype)
- [bufferedAmount](main_module._internal_.RTCDataChannel.md#bufferedamount)
- [bufferedAmountLowThreshold](main_module._internal_.RTCDataChannel.md#bufferedamountlowthreshold)
- [id](main_module._internal_.RTCDataChannel.md#id)
- [label](main_module._internal_.RTCDataChannel.md#label)
- [maxPacketLifeTime](main_module._internal_.RTCDataChannel.md#maxpacketlifetime)
- [maxRetransmits](main_module._internal_.RTCDataChannel.md#maxretransmits)
- [negotiated](main_module._internal_.RTCDataChannel.md#negotiated)
- [onbufferedamountlow](main_module._internal_.RTCDataChannel.md#onbufferedamountlow)
- [onclose](main_module._internal_.RTCDataChannel.md#onclose)
- [onclosing](main_module._internal_.RTCDataChannel.md#onclosing)
- [onerror](main_module._internal_.RTCDataChannel.md#onerror)
- [onmessage](main_module._internal_.RTCDataChannel.md#onmessage)
- [onopen](main_module._internal_.RTCDataChannel.md#onopen)
- [ordered](main_module._internal_.RTCDataChannel.md#ordered)
- [protocol](main_module._internal_.RTCDataChannel.md#protocol)
- [readyState](main_module._internal_.RTCDataChannel.md#readystate)

### Methods

- [addEventListener](main_module._internal_.RTCDataChannel.md#addeventlistener)
- [close](main_module._internal_.RTCDataChannel.md#close)
- [dispatchEvent](main_module._internal_.RTCDataChannel.md#dispatchevent)
- [removeEventListener](main_module._internal_.RTCDataChannel.md#removeeventlistener)
- [send](main_module._internal_.RTCDataChannel.md#send)

## Properties

### binaryType

• **binaryType**: [`BinaryType`](../modules/main_module._internal_.md#binarytype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11068

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11069

___

### bufferedAmountLowThreshold

• **bufferedAmountLowThreshold**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11070

___

### id

• `Readonly` **id**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11071

___

### label

• `Readonly` **label**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11072

___

### maxPacketLifeTime

• `Readonly` **maxPacketLifeTime**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11073

___

### maxRetransmits

• `Readonly` **maxRetransmits**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11074

___

### negotiated

• `Readonly` **negotiated**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11075

___

### onbufferedamountlow

• **onbufferedamountlow**: ``null`` \| (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11076

___

### onclose

• **onclose**: ``null`` \| (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11077

___

### onclosing

• **onclosing**: ``null`` \| (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11078

___

### onerror

• **onerror**: ``null`` \| (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11079

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: `MessageEvent`<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11080

___

### onopen

• **onopen**: ``null`` \| (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11081

___

### ordered

• `Readonly` **ordered**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11082

___

### protocol

• `Readonly` **protocol**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11083

___

### readyState

• `Readonly` **readyState**: [`RTCDataChannelState`](../modules/main_module._internal_.md#rtcdatachannelstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11084

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDataChannelEventMap`](main_module._internal_.RTCDataChannelEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: [`RTCDataChannelEventMap`](main_module._internal_.RTCDataChannelEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11090

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

node_modules/typescript/lib/lib.dom.d.ts:11091

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11085

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

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDataChannelEventMap`](main_module._internal_.RTCDataChannelEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDataChannel`](../modules/main_module._internal_.md#rtcdatachannel), `ev`: [`RTCDataChannelEventMap`](main_module._internal_.RTCDataChannelEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11092

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

node_modules/typescript/lib/lib.dom.d.ts:11093

___

### send

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11086

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Blob`](../modules/main_module._internal_.md#blob) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11087

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11088

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferView`](main_module._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11089
