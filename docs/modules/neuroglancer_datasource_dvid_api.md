[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/dvid/api

# Module: neuroglancer/datasource/dvid/api

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_datasource_dvid_api._internal_.md)

### Classes

- [DVIDInstance](../classes/neuroglancer_datasource_dvid_api.DVIDInstance.md)

### Interfaces

- [DVIDToken](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)

### Variables

- [credentialsKey](neuroglancer_datasource_dvid_api.md#credentialskey)

### Functions

- [appendQueryStringForDvid](neuroglancer_datasource_dvid_api.md#appendquerystringfordvid)
- [fetchWithDVIDCredentials](neuroglancer_datasource_dvid_api.md#fetchwithdvidcredentials)
- [makeRequest](neuroglancer_datasource_dvid_api.md#makerequest)
- [makeRequestWithCredentials](neuroglancer_datasource_dvid_api.md#makerequestwithcredentials)
- [responseText](neuroglancer_datasource_dvid_api.md#responsetext)

## Variables

### credentialsKey

• `Const` **credentialsKey**: ``"DVID"``

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L31)

## Functions

### appendQueryStringForDvid

▸ **appendQueryStringForDvid**(`url`, `user`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `user` | `undefined` \| ``null`` \| `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L63)

___

### fetchWithDVIDCredentials

▸ **fetchWithDVIDCredentials**<`T`\>(`credentialsProvider`, `input`, `init`, `transformResponse`, `cancellationToken?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\> | `undefined` |
| `input` | `string` | `undefined` |
| `init` | [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](neuroglancer_util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L128)

___

### makeRequest

▸ **makeRequest**(`httpCall`, `cancellationToken?`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_dvid_api._internal_.HttpCall.md) & { `responseType`: ``"arraybuffer"``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L80)

▸ **makeRequest**(`httpCall`, `cancellationToken?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_dvid_api._internal_.HttpCall.md) & { `responseType`: ``"json"``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L84)

▸ **makeRequest**(`httpCall`, `cancellationToken?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_dvid_api._internal_.HttpCall.md) & { `responseType`: ``""``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L87)

___

### makeRequestWithCredentials

▸ **makeRequestWithCredentials**(`credentialsProvider`, `httpCall`, `cancellationToken?`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\> |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_dvid_api._internal_.HttpCall.md) & { `responseType`: ``"arraybuffer"``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L103)

▸ **makeRequestWithCredentials**(`credentialsProvider`, `httpCall`, `cancellationToken?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\> |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_dvid_api._internal_.HttpCall.md) & { `responseType`: ``"json"``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L108)

▸ **makeRequestWithCredentials**(`credentialsProvider`, `httpCall`, `cancellationToken?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\> |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_dvid_api._internal_.HttpCall.md) & { `responseType`: ``""``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L112)

___

### responseText

▸ **responseText**(`response`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`Response`](main_module._internal_.md#response) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/api.ts#L76)
