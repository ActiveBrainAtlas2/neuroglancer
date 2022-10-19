[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / RTCRtpReceiver

# Interface: RTCRtpReceiver

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).RTCRtpReceiver

This WebRTC API interface manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

## Table of contents

### Properties

- [track](annotation_annotation_layer_state._internal_.RTCRtpReceiver.md#track)
- [transport](annotation_annotation_layer_state._internal_.RTCRtpReceiver.md#transport)

### Methods

- [getContributingSources](annotation_annotation_layer_state._internal_.RTCRtpReceiver.md#getcontributingsources)
- [getParameters](annotation_annotation_layer_state._internal_.RTCRtpReceiver.md#getparameters)
- [getStats](annotation_annotation_layer_state._internal_.RTCRtpReceiver.md#getstats)
- [getSynchronizationSources](annotation_annotation_layer_state._internal_.RTCRtpReceiver.md#getsynchronizationsources)

## Properties

### track

• `Readonly` **track**: [`MediaStreamTrack`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11322

___

### transport

• `Readonly` **transport**: ``null`` \| [`RTCDtlsTransport`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtlstransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11323

## Methods

### getContributingSources

▸ **getContributingSources**(): [`RTCRtpContributingSource`](annotation_annotation_layer_state._internal_.RTCRtpContributingSource.md)[]

#### Returns

[`RTCRtpContributingSource`](annotation_annotation_layer_state._internal_.RTCRtpContributingSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11324

___

### getParameters

▸ **getParameters**(): [`RTCRtpReceiveParameters`](annotation_annotation_layer_state._internal_.RTCRtpReceiveParameters.md)

#### Returns

[`RTCRtpReceiveParameters`](annotation_annotation_layer_state._internal_.RTCRtpReceiveParameters.md)

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

▸ **getSynchronizationSources**(): [`RTCRtpSynchronizationSource`](annotation_annotation_layer_state._internal_.RTCRtpSynchronizationSource.md)[]

#### Returns

[`RTCRtpSynchronizationSource`](annotation_annotation_layer_state._internal_.RTCRtpSynchronizationSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11327
