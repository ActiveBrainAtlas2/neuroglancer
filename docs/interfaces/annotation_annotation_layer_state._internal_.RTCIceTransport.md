[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / RTCIceTransport

# Interface: RTCIceTransport

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).RTCIceTransport

Provides access to information about the ICE transport layer over which the data is being sent and received.

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`RTCIceTransport`**

## Table of contents

### Properties

- [gatheringState](annotation_annotation_layer_state._internal_.RTCIceTransport.md#gatheringstate)
- [ongatheringstatechange](annotation_annotation_layer_state._internal_.RTCIceTransport.md#ongatheringstatechange)
- [onstatechange](annotation_annotation_layer_state._internal_.RTCIceTransport.md#onstatechange)
- [state](annotation_annotation_layer_state._internal_.RTCIceTransport.md#state)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.RTCIceTransport.md#addeventlistener)
- [dispatchEvent](annotation_annotation_layer_state._internal_.RTCIceTransport.md#dispatchevent)
- [removeEventListener](annotation_annotation_layer_state._internal_.RTCIceTransport.md#removeeventlistener)

## Properties

### gatheringState

• `Readonly` **gatheringState**: [`RTCIceGathererState`](../modules/annotation_annotation_layer_state._internal_.md#rtcicegathererstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11208

___

### ongatheringstatechange

• **ongatheringstatechange**: ``null`` \| (`this`: [`RTCIceTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcicetransport), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11209

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`RTCIceTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcicetransport), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11210

___

### state

• `Readonly` **state**: [`RTCIceTransportState`](../modules/annotation_annotation_layer_state._internal_.md#rtcicetransportstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11211

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCIceTransportEventMap`](annotation_annotation_layer_state._internal_.RTCIceTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCIceTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcicetransport), `ev`: [`RTCIceTransportEventMap`](annotation_annotation_layer_state._internal_.RTCIceTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11212

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

node_modules/typescript/lib/lib.dom.d.ts:11213

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

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCIceTransportEventMap`](annotation_annotation_layer_state._internal_.RTCIceTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCIceTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcicetransport), `ev`: [`RTCIceTransportEventMap`](annotation_annotation_layer_state._internal_.RTCIceTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11214

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

node_modules/typescript/lib/lib.dom.d.ts:11215
