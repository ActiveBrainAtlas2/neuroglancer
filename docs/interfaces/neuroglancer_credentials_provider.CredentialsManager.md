[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/credentials\_provider](../modules/neuroglancer_credentials_provider.md) / CredentialsManager

# Interface: CredentialsManager

[neuroglancer/credentials_provider](../modules/neuroglancer_credentials_provider.md).CredentialsManager

Interface for obtaining a CredentialsProvider based on a string key.

## Implemented by

- [`CachingCredentialsManager`](../classes/neuroglancer_credentials_provider.CachingCredentialsManager.md)
- [`MapBasedCredentialsManager`](../classes/neuroglancer_credentials_provider.MapBasedCredentialsManager.md)
- [`PythonCredentialsManager`](../classes/neuroglancer_python_integration_credentials_provider.PythonCredentialsManager.md)

## Table of contents

### Methods

- [getCredentialsProvider](neuroglancer_credentials_provider.CredentialsManager.md#getcredentialsprovider)

## Methods

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

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

[`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L97)
