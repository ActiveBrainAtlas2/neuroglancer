[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / RTCDtlsTransport

# Interface: RTCDtlsTransport

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).RTCDtlsTransport

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`RTCDtlsTransport`**

## Table of contents

### Properties

- [iceTransport](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#icetransport)
- [onerror](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#onerror)
- [onstatechange](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#onstatechange)
- [state](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#state)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#addeventlistener)
- [dispatchEvent](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#dispatchevent)
- [getRemoteCertificates](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#getremotecertificates)
- [removeEventListener](annotation_annotation_layer_state._internal_.RTCDtlsTransport.md#removeeventlistener)

## Properties

### iceTransport

• `Readonly` **iceTransport**: [`RTCIceTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcicetransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11116

___

### onerror

• **onerror**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11117

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11118

___

### state

• `Readonly` **state**: [`RTCDtlsTransportState`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtlstransportstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11119

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDtlsTransportEventMap`](annotation_annotation_layer_state._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](annotation_annotation_layer_state._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |

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
| `K` | extends keyof [`RTCDtlsTransportEventMap`](annotation_annotation_layer_state._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](annotation_annotation_layer_state._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11124
