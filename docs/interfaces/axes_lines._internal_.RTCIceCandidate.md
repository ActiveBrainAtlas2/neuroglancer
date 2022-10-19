[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / RTCIceCandidate

# Interface: RTCIceCandidate

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).RTCIceCandidate

The RTCIceCandidate interface—part of the WebRTC API—represents a candidate Internet Connectivity Establishment (ICE) configuration which may be used to establish an RTCPeerConnection.

## Table of contents

### Properties

- [address](axes_lines._internal_.RTCIceCandidate.md#address)
- [candidate](axes_lines._internal_.RTCIceCandidate.md#candidate)
- [component](axes_lines._internal_.RTCIceCandidate.md#component)
- [foundation](axes_lines._internal_.RTCIceCandidate.md#foundation)
- [port](axes_lines._internal_.RTCIceCandidate.md#port)
- [priority](axes_lines._internal_.RTCIceCandidate.md#priority)
- [protocol](axes_lines._internal_.RTCIceCandidate.md#protocol)
- [relatedAddress](axes_lines._internal_.RTCIceCandidate.md#relatedaddress)
- [relatedPort](axes_lines._internal_.RTCIceCandidate.md#relatedport)
- [sdpMLineIndex](axes_lines._internal_.RTCIceCandidate.md#sdpmlineindex)
- [sdpMid](axes_lines._internal_.RTCIceCandidate.md#sdpmid)
- [tcpType](axes_lines._internal_.RTCIceCandidate.md#tcptype)
- [type](axes_lines._internal_.RTCIceCandidate.md#type)
- [usernameFragment](axes_lines._internal_.RTCIceCandidate.md#usernamefragment)

### Methods

- [toJSON](axes_lines._internal_.RTCIceCandidate.md#tojson)

## Properties

### address

• `Readonly` **address**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11179

___

### candidate

• `Readonly` **candidate**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11180

___

### component

• `Readonly` **component**: ``null`` \| [`RTCIceComponent`](../modules/axes_lines._internal_.md#rtcicecomponent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11181

___

### foundation

• `Readonly` **foundation**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11182

___

### port

• `Readonly` **port**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11183

___

### priority

• `Readonly` **priority**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11184

___

### protocol

• `Readonly` **protocol**: ``null`` \| [`RTCIceProtocol`](../modules/axes_lines._internal_.md#rtciceprotocol)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11185

___

### relatedAddress

• `Readonly` **relatedAddress**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11186

___

### relatedPort

• `Readonly` **relatedPort**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11187

___

### sdpMLineIndex

• `Readonly` **sdpMLineIndex**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11188

___

### sdpMid

• `Readonly` **sdpMid**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11189

___

### tcpType

• `Readonly` **tcpType**: ``null`` \| [`RTCIceTcpCandidateType`](../modules/axes_lines._internal_.md#rtcicetcpcandidatetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11190

___

### type

• `Readonly` **type**: ``null`` \| [`RTCIceCandidateType`](../modules/axes_lines._internal_.md#rtcicecandidatetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11191

___

### usernameFragment

• `Readonly` **usernameFragment**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11192

## Methods

### toJSON

▸ **toJSON**(): [`RTCIceCandidateInit`](axes_lines._internal_.RTCIceCandidateInit.md)

#### Returns

[`RTCIceCandidateInit`](axes_lines._internal_.RTCIceCandidateInit.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11193
