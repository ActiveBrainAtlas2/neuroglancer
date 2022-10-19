[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / RTCDtlsTransport

# Interface: RTCDtlsTransport

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).RTCDtlsTransport

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`RTCDtlsTransport`**

## Table of contents

### Properties

- [iceTransport](axes_lines._internal_.RTCDtlsTransport.md#icetransport)
- [onerror](axes_lines._internal_.RTCDtlsTransport.md#onerror)
- [onstatechange](axes_lines._internal_.RTCDtlsTransport.md#onstatechange)
- [state](axes_lines._internal_.RTCDtlsTransport.md#state)

### Methods

- [addEventListener](axes_lines._internal_.RTCDtlsTransport.md#addeventlistener)
- [dispatchEvent](axes_lines._internal_.RTCDtlsTransport.md#dispatchevent)
- [getRemoteCertificates](axes_lines._internal_.RTCDtlsTransport.md#getremotecertificates)
- [removeEventListener](axes_lines._internal_.RTCDtlsTransport.md#removeeventlistener)

## Properties

### iceTransport

• `Readonly` **iceTransport**: [`RTCIceTransport`](../modules/axes_lines._internal_.md#rtcicetransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11116

___

### onerror

• **onerror**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/axes_lines._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11117

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/axes_lines._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11118

___

### state

• `Readonly` **state**: [`RTCDtlsTransportState`](../modules/axes_lines._internal_.md#rtcdtlstransportstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11119

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDtlsTransportEventMap`](axes_lines._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/axes_lines._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](axes_lines._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11121

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

node_modules/typescript/lib/lib.dom.d.ts:11122

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

### getRemoteCertificates

▸ **getRemoteCertificates**(): `ArrayBuffer`[]

#### Returns

`ArrayBuffer`[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11120

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDtlsTransportEventMap`](axes_lines._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/axes_lines._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](axes_lines._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11123

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

node_modules/typescript/lib/lib.dom.d.ts:11124
