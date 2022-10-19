[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / MediaKeys

# Interface: MediaKeys

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).MediaKeys

This EncryptedMediaExtensions API interface the represents a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.
Available only in secure contexts.

## Table of contents

### Methods

- [createSession](annotation_annotation_layer_state._internal_.MediaKeys.md#createsession)
- [setServerCertificate](annotation_annotation_layer_state._internal_.MediaKeys.md#setservercertificate)

## Methods

### createSession

▸ **createSession**(`sessionType?`): [`MediaKeySession`](../modules/annotation_annotation_layer_state._internal_.md#mediakeysession)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionType?` | [`MediaKeySessionType`](../modules/annotation_annotation_layer_state._internal_.md#mediakeysessiontype) |

#### Returns

[`MediaKeySession`](../modules/annotation_annotation_layer_state._internal_.md#mediakeysession)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9414

___

### setServerCertificate

▸ **setServerCertificate**(`serverCertificate`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverCertificate` | [`BufferSource`](../modules/annotation_annotation_layer_state._internal_.md#buffersource) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9415
