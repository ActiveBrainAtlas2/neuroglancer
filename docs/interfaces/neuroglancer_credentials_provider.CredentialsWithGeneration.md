[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/credentials\_provider](../modules/neuroglancer_credentials_provider.md) / CredentialsWithGeneration

# Interface: CredentialsWithGeneration<T\>

[neuroglancer/credentials_provider](../modules/neuroglancer_credentials_provider.md).CredentialsWithGeneration

Wraps an arbitrary JSON credentials object with a generation number.

The generation number is used for tracking whether the credentials have been updated/renewed.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [credentials](neuroglancer_credentials_provider.CredentialsWithGeneration.md#credentials)
- [generation](neuroglancer_credentials_provider.CredentialsWithGeneration.md#generation)

## Properties

### credentials

• **credentials**: `T`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L32)

___

### generation

• **generation**: `number`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/index.ts#L31)
