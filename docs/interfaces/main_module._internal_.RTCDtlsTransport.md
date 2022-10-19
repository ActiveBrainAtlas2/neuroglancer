[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / RTCDtlsTransport

# Interface: RTCDtlsTransport

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).RTCDtlsTransport

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`RTCDtlsTransport`**

## Table of contents

### Properties

- [iceTransport](main_module._internal_.RTCDtlsTransport.md#icetransport)
- [onerror](main_module._internal_.RTCDtlsTransport.md#onerror)
- [onstatechange](main_module._internal_.RTCDtlsTransport.md#onstatechange)
- [state](main_module._internal_.RTCDtlsTransport.md#state)

### Methods

- [addEventListener](main_module._internal_.RTCDtlsTransport.md#addeventlistener)
- [dispatchEvent](main_module._internal_.RTCDtlsTransport.md#dispatchevent)
- [getRemoteCertificates](main_module._internal_.RTCDtlsTransport.md#getremotecertificates)
- [removeEventListener](main_module._internal_.RTCDtlsTransport.md#removeeventlistener)

## Properties

### iceTransport

• `Readonly` **iceTransport**: [`RTCIceTransport`](../modules/main_module._internal_.md#rtcicetransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11116

___

### onerror

• **onerror**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/main_module._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11117

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/main_module._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11118

___

### state

• `Readonly` **state**: [`RTCDtlsTransportState`](../modules/main_module._internal_.md#rtcdtlstransportstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11119

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDtlsTransportEventMap`](main_module._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/main_module._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](main_module._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

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
| `K` | extends keyof [`RTCDtlsTransportEventMap`](main_module._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/main_module._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](main_module._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11124
