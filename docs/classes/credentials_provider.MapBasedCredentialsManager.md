[neuroglancer](../README.md) / [Modules](../modules.md) / [credentials\_provider](../modules/credentials_provider.md) / MapBasedCredentialsManager

# Class: MapBasedCredentialsManager

[credentials_provider](../modules/credentials_provider.md).MapBasedCredentialsManager

CredentialsManager that supports registration.

## Implements

- [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md)

## Table of contents

### Constructors

- [constructor](credentials_provider.MapBasedCredentialsManager.md#constructor)

### Properties

- [providers](credentials_provider.MapBasedCredentialsManager.md#providers)
- [topLevelManager](credentials_provider.MapBasedCredentialsManager.md#toplevelmanager)

### Methods

- [getCredentialsProvider](credentials_provider.MapBasedCredentialsManager.md#getcredentialsprovider)
- [register](credentials_provider.MapBasedCredentialsManager.md#register)

## Constructors

### constructor

• **new MapBasedCredentialsManager**()

## Properties

### providers

• **providers**: `Map`<`string`, (`parameters`: `any`, `credentialsManager`: [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md)) => [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`any`\>\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L109)

___

### topLevelManager

• **topLevelManager**: [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L113)

## Methods

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

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

[`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Implementation of

[CredentialsManager](../interfaces/credentials_provider.CredentialsManager.md).[getCredentialsProvider](../interfaces/credentials_provider.CredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L118)

___

### register

▸ **register**<`Credentials`\>(`key`, `providerGetter`): `void`

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `providerGetter` | [`ProviderGetter`](../modules/credentials_provider.md#providergetter)<`Credentials`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L114)
