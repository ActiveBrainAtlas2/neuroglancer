[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/credentials\_provider](../modules/neuroglancer_credentials_provider.md) / MapBasedCredentialsManager

# Class: MapBasedCredentialsManager

[neuroglancer/credentials_provider](../modules/neuroglancer_credentials_provider.md).MapBasedCredentialsManager

CredentialsManager that supports registration.

## Implements

- [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_credentials_provider.MapBasedCredentialsManager.md#constructor)

### Properties

- [providers](neuroglancer_credentials_provider.MapBasedCredentialsManager.md#providers)
- [topLevelManager](neuroglancer_credentials_provider.MapBasedCredentialsManager.md#toplevelmanager)

### Methods

- [getCredentialsProvider](neuroglancer_credentials_provider.MapBasedCredentialsManager.md#getcredentialsprovider)
- [register](neuroglancer_credentials_provider.MapBasedCredentialsManager.md#register)

## Constructors

### constructor

• **new MapBasedCredentialsManager**()

## Properties

### providers

• **providers**: `Map`<`string`, (`parameters`: `any`, `credentialsManager`: [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)) => [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L109)

___

### topLevelManager

• **topLevelManager**: [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L113)

## Methods

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

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

[`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Implementation of

[CredentialsManager](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md).[getCredentialsProvider](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L118)

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
| `providerGetter` | [`ProviderGetter`](../modules/neuroglancer_credentials_provider.md#providergetter)<`Credentials`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L114)
