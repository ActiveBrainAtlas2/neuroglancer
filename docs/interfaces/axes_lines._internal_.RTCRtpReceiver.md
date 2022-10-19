[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / RTCRtpReceiver

# Interface: RTCRtpReceiver

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).RTCRtpReceiver

This WebRTC API interface manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

## Table of contents

### Properties

- [track](axes_lines._internal_.RTCRtpReceiver.md#track)
- [transport](axes_lines._internal_.RTCRtpReceiver.md#transport)

### Methods

- [getContributingSources](axes_lines._internal_.RTCRtpReceiver.md#getcontributingsources)
- [getParameters](axes_lines._internal_.RTCRtpReceiver.md#getparameters)
- [getStats](axes_lines._internal_.RTCRtpReceiver.md#getstats)
- [getSynchronizationSources](axes_lines._internal_.RTCRtpReceiver.md#getsynchronizationsources)

## Properties

### track

• `Readonly` **track**: [`MediaStreamTrack`](../modules/axes_lines._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11322

___

### transport

• `Readonly` **transport**: ``null`` \| [`RTCDtlsTransport`](../modules/axes_lines._internal_.md#rtcdtlstransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11323

## Methods

### getContributingSources

▸ **getContributingSources**(): [`RTCRtpContributingSource`](axes_lines._internal_.RTCRtpContributingSource.md)[]

#### Returns

[`RTCRtpContributingSource`](axes_lines._internal_.RTCRtpContributingSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11324

___

### getParameters

▸ **getParameters**(): [`RTCRtpReceiveParameters`](axes_lines._internal_.RTCRtpReceiveParameters.md)

#### Returns

[`RTCRtpReceiveParameters`](axes_lines._internal_.RTCRtpReceiveParameters.md)

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

▸ **getSynchronizationSources**(): [`RTCRtpSynchronizationSource`](axes_lines._internal_.RTCRtpSynchronizationSource.md)[]

#### Returns

[`RTCRtpSynchronizationSource`](axes_lines._internal_.RTCRtpSynchronizationSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11327
