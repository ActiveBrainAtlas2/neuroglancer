[neuroglancer](../README.md) / [Modules](../modules.md) / [credentials\_provider](../modules/credentials_provider.md) / CredentialsWithGeneration

# Interface: CredentialsWithGeneration<T\>

[credentials_provider](../modules/credentials_provider.md).CredentialsWithGeneration

Wraps an arbitrary JSON credentials object with a generation number.

The generation number is used for tracking whether the credentials have been updated/renewed.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [credentials](credentials_provider.CredentialsWithGeneration.md#credentials)
- [generation](credentials_provider.CredentialsWithGeneration.md#generation)

## Properties

### credentials

• **credentials**: `T`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L32)

___

### generation

• **generation**: `number`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L31)
