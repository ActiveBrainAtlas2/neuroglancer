[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / MediaKeys

# Interface: MediaKeys

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).MediaKeys

This EncryptedMediaExtensions API interface the represents a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.
Available only in secure contexts.

## Table of contents

### Methods

- [createSession](axes_lines._internal_.MediaKeys.md#createsession)
- [setServerCertificate](axes_lines._internal_.MediaKeys.md#setservercertificate)

## Methods

### createSession

▸ **createSession**(`sessionType?`): [`MediaKeySession`](../modules/axes_lines._internal_.md#mediakeysession)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionType?` | [`MediaKeySessionType`](../modules/axes_lines._internal_.md#mediakeysessiontype) |

#### Returns

[`MediaKeySession`](../modules/axes_lines._internal_.md#mediakeysession)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9414

___

### setServerCertificate

▸ **setServerCertificate**(`serverCertificate`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverCertificate` | [`BufferSource`](../modules/axes_lines._internal_.md#buffersource) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9415
