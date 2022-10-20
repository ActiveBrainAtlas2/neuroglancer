[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/dvid/api](../modules/neuroglancer_datasource_dvid_api.md) / DVIDInstance

# Class: DVIDInstance

[neuroglancer/datasource/dvid/api](../modules/neuroglancer_datasource_dvid_api.md).DVIDInstance

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_dvid_api.DVIDInstance.md#constructor)

### Properties

- [baseUrl](neuroglancer_datasource_dvid_api.DVIDInstance.md#baseurl)
- [nodeKey](neuroglancer_datasource_dvid_api.DVIDInstance.md#nodekey)

### Methods

- [getKeyValueRangeUrl](neuroglancer_datasource_dvid_api.DVIDInstance.md#getkeyvaluerangeurl)
- [getKeyValueUrl](neuroglancer_datasource_dvid_api.DVIDInstance.md#getkeyvalueurl)
- [getKeyValuesUrl](neuroglancer_datasource_dvid_api.DVIDInstance.md#getkeyvaluesurl)
- [getNodeApiUrl](neuroglancer_datasource_dvid_api.DVIDInstance.md#getnodeapiurl)
- [getRepoInfoUrl](neuroglancer_datasource_dvid_api.DVIDInstance.md#getrepoinfourl)

## Constructors

### constructor

• **new DVIDInstance**(`baseUrl`, `nodeKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |
| `nodeKey` | `string` |

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L40)

## Properties

### baseUrl

• **baseUrl**: `string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L40)

___

### nodeKey

• **nodeKey**: `string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L40)

## Methods

### getKeyValueRangeUrl

▸ **getKeyValueRangeUrl**(`dataName`, `startKey`, `endKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataName` | `string` |
| `startKey` | `string` |
| `endKey` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L54)

___

### getKeyValueUrl

▸ **getKeyValueUrl**(`dataName`, `key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataName` | `string` |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L50)

___

### getKeyValuesUrl

▸ **getKeyValuesUrl**(`dataName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataName` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L58)

___

### getNodeApiUrl

▸ **getNodeApiUrl**(`path?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `''` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L42)

___

### getRepoInfoUrl

▸ **getRepoInfoUrl**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/dvid/api.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/api.ts#L46)
