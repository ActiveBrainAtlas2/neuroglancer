[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/credentials\_provider](../modules/neuroglancer_python_integration_credentials_provider.md) / PythonCredentialsManager

# Class: PythonCredentialsManager

[neuroglancer/python_integration/credentials_provider](../modules/neuroglancer_python_integration_credentials_provider.md).PythonCredentialsManager

## Implements

- [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_credentials_provider.PythonCredentialsManager.md#constructor)

### Properties

- [memoize](neuroglancer_python_integration_credentials_provider.PythonCredentialsManager.md#memoize)

### Methods

- [getCredentialsProvider](neuroglancer_python_integration_credentials_provider.PythonCredentialsManager.md#getcredentialsprovider)

## Constructors

### constructor

• **new PythonCredentialsManager**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](neuroglancer_python_integration_api.Client.md) |

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/credentials_provider.ts#L56)

## Properties

### memoize

• `Private` **memoize**: [`Memoize`](neuroglancer_util_memoize.Memoize.md)<`string`, [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>\>

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/credentials_provider.ts#L57)

## Methods

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`GcsCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md) \| [`PythonCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.PythonCredentialsProvider.md)<`Credentials`\>

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `parameters?` | `any` |

#### Returns

[`GcsCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.GcsCredentialsProvider.md) \| [`PythonCredentialsProvider`](neuroglancer_python_integration_credentials_provider._internal_.PythonCredentialsProvider.md)<`Credentials`\>

#### Implementation of

[CredentialsManager](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md).[getCredentialsProvider](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/credentials_provider.ts#L59)
