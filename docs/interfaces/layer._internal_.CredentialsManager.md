[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / CredentialsManager

# Interface: CredentialsManager

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).CredentialsManager

Interface for obtaining a CredentialsProvider based on a string key.

## Table of contents

### Methods

- [getCredentialsProvider](layer._internal_.CredentialsManager.md#getcredentialsprovider)

## Methods

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](../classes/layer._internal_.CredentialsProvider.md)<`Credentials`\>

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

[`CredentialsProvider`](../classes/layer._internal_.CredentialsProvider.md)<`Credentials`\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/credentials_provider/index.ts#L97)
