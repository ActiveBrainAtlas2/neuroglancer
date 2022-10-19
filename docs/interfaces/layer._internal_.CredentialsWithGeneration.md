[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / CredentialsWithGeneration

# Interface: CredentialsWithGeneration<T\>

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).CredentialsWithGeneration

Wraps an arbitrary JSON credentials object with a generation number.

The generation number is used for tracking whether the credentials have been updated/renewed.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [credentials](layer._internal_.CredentialsWithGeneration.md#credentials)
- [generation](layer._internal_.CredentialsWithGeneration.md#generation)

## Properties

### credentials

• **credentials**: `T`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/credentials_provider/index.ts#L32)

___

### generation

• **generation**: `number`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/credentials_provider/index.ts#L31)
