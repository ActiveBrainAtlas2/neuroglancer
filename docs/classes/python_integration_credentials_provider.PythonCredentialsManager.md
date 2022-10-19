[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/credentials\_provider](../modules/python_integration_credentials_provider.md) / PythonCredentialsManager

# Class: PythonCredentialsManager

[python_integration/credentials_provider](../modules/python_integration_credentials_provider.md).PythonCredentialsManager

## Implements

- [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md)

## Table of contents

### Constructors

- [constructor](python_integration_credentials_provider.PythonCredentialsManager.md#constructor)

### Properties

- [memoize](python_integration_credentials_provider.PythonCredentialsManager.md#memoize)

### Methods

- [getCredentialsProvider](python_integration_credentials_provider.PythonCredentialsManager.md#getcredentialsprovider)

## Constructors

### constructor

• **new PythonCredentialsManager**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](python_integration_api.Client.md) |

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/credentials_provider.ts#L56)

## Properties

### memoize

• `Private` **memoize**: [`Memoize`](util_memoize.Memoize.md)<`string`, [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`any`\>\>

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/credentials_provider.ts#L57)

## Methods

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`GcsCredentialsProvider`](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md) \| [`PythonCredentialsProvider`](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md)<`Credentials`\>

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

[`GcsCredentialsProvider`](python_integration_credentials_provider._internal_.GcsCredentialsProvider.md) \| [`PythonCredentialsProvider`](python_integration_credentials_provider._internal_.PythonCredentialsProvider.md)<`Credentials`\>

#### Implementation of

[CredentialsManager](../interfaces/credentials_provider.CredentialsManager.md).[getCredentialsProvider](../interfaces/credentials_provider.CredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/python_integration/credentials_provider.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/credentials_provider.ts#L59)
