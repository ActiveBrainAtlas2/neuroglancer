[neuroglancer](../README.md) / [Modules](../modules.md) / [credentials\_provider](../modules/credentials_provider.md) / CredentialsManager

# Interface: CredentialsManager

[credentials_provider](../modules/credentials_provider.md).CredentialsManager

Interface for obtaining a CredentialsProvider based on a string key.

## Implemented by

- [`CachingCredentialsManager`](../classes/credentials_provider.CachingCredentialsManager.md)
- [`MapBasedCredentialsManager`](../classes/credentials_provider.MapBasedCredentialsManager.md)
- [`PythonCredentialsManager`](../classes/python_integration_credentials_provider.PythonCredentialsManager.md)

## Table of contents

### Methods

- [getCredentialsProvider](credentials_provider.CredentialsManager.md#getcredentialsprovider)

## Methods

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`Credentials`\>

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

[`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L97)
