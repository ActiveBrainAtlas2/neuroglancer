[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/blosc](../modules/neuroglancer_util_blosc.md) / [<internal\>](../modules/neuroglancer_util_blosc._internal_.md) / Codec

# Class: Codec

[neuroglancer/util/blosc](../modules/neuroglancer_util_blosc.md).[<internal>](../modules/neuroglancer_util_blosc._internal_.md).Codec

## Implemented by

- [`Blosc`](neuroglancer_util_blosc.Blosc.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_blosc._internal_.Codec.md#constructor)

### Properties

- [codecId](neuroglancer_util_blosc._internal_.Codec.md#codecid)

### Methods

- [decode](neuroglancer_util_blosc._internal_.Codec.md#decode)
- [encode](neuroglancer_util_blosc._internal_.Codec.md#encode)

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
