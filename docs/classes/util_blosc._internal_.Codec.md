[neuroglancer](../README.md) / [Modules](../modules.md) / [util/blosc](../modules/util_blosc.md) / [<internal\>](../modules/util_blosc._internal_.md) / Codec

# Class: Codec

[util/blosc](../modules/util_blosc.md).[<internal>](../modules/util_blosc._internal_.md).Codec

## Implemented by

- [`Blosc`](util_blosc.Blosc.md)

## Table of contents

### Constructors

- [constructor](util_blosc._internal_.Codec.md#constructor)

### Properties

- [codecId](util_blosc._internal_.Codec.md#codecid)

### Methods

- [decode](util_blosc._internal_.Codec.md#decode)
- [encode](util_blosc._internal_.Codec.md#encode)

## Constructors

### constructor

• **new Codec**()

## Properties

### codecId

▪ `Static` **codecId**: `string`

#### Defined in

node_modules/numcodecs/dist/types/src/types.d.ts:2

## Methods

### decode

▸ `Abstract` **decode**(`data`, `out?`): `Uint8Array` \| `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `out?` | `Uint8Array` |

#### Returns

`Uint8Array` \| `Promise`<`Uint8Array`\>

#### Defined in

node_modules/numcodecs/dist/types/src/types.d.ts:4

___

### encode

▸ `Abstract` **encode**(`data`): `Uint8Array` \| `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array` \| `Promise`<`Uint8Array`\>

#### Defined in

node_modules/numcodecs/dist/types/src/types.d.ts:3
