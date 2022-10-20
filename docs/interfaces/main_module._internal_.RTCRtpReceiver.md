[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / RTCRtpReceiver

# Interface: RTCRtpReceiver

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).RTCRtpReceiver

This WebRTC API interface manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

## Table of contents

### Properties

- [track](main_module._internal_.RTCRtpReceiver.md#track)
- [transport](main_module._internal_.RTCRtpReceiver.md#transport)

### Methods

- [getContributingSources](main_module._internal_.RTCRtpReceiver.md#getcontributingsources)
- [getParameters](main_module._internal_.RTCRtpReceiver.md#getparameters)
- [getStats](main_module._internal_.RTCRtpReceiver.md#getstats)
- [getSynchronizationSources](main_module._internal_.RTCRtpReceiver.md#getsynchronizationsources)

## Properties

### track

• `Readonly` **track**: [`MediaStreamTrack`](../modules/main_module._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11322

___

### transport

• `Readonly` **transport**: ``null`` \| [`RTCDtlsTransport`](../modules/main_module._internal_.md#rtcdtlstransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11323

## Methods

### getContributingSources

▸ **getContributingSources**(): [`RTCRtpContributingSource`](main_module._internal_.RTCRtpContributingSource.md)[]

#### Returns

[`RTCRtpContributingSource`](main_module._internal_.RTCRtpContributingSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11324

___

### getParameters

▸ **getParameters**(): [`RTCRtpReceiveParameters`](main_module._internal_.RTCRtpReceiveParameters.md)

#### Returns

[`RTCRtpReceiveParameters`](main_module._internal_.RTCRtpReceiveParameters.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11325

___

### getStats

▸ **getStats**(): `Promise`<`RTCStatsReport`\>

#### Returns

`Promise`<`RTCStatsReport`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11326

___

### getSynchronizationSources

▸ **getSynchronizationSources**(): [`RTCRtpSynchronizationSource`](main_module._internal_.RTCRtpSynchronizationSource.md)[]

#### Returns

[`RTCRtpSynchronizationSource`](main_module._internal_.RTCRtpSynchronizationSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11327
