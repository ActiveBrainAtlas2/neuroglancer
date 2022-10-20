[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/blosc](../modules/neuroglancer_util_blosc.md) / Blosc

# Class: Blosc

[neuroglancer/util/blosc](../modules/neuroglancer_util_blosc.md).Blosc

## Implements

- [`Codec`](neuroglancer_util_blosc._internal_.Codec.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_blosc.Blosc.md#constructor)

### Properties

- [blocksize](neuroglancer_util_blosc.Blosc.md#blocksize)
- [clevel](neuroglancer_util_blosc.Blosc.md#clevel)
- [cname](neuroglancer_util_blosc.Blosc.md#cname)
- [shuffle](neuroglancer_util_blosc.Blosc.md#shuffle)
- [AUTOSHUFFLE](neuroglancer_util_blosc.Blosc.md#autoshuffle)
- [BITSHUFFLE](neuroglancer_util_blosc.Blosc.md#bitshuffle)
- [COMPRESSORS](neuroglancer_util_blosc.Blosc.md#compressors)
- [NOSHUFFLE](neuroglancer_util_blosc.Blosc.md#noshuffle)
- [SHUFFLE](neuroglancer_util_blosc.Blosc.md#shuffle-1)
- [codecId](neuroglancer_util_blosc.Blosc.md#codecid)

### Methods

- [decode](neuroglancer_util_blosc.Blosc.md#decode)
- [encode](neuroglancer_util_blosc.Blosc.md#encode)
- [fromConfig](neuroglancer_util_blosc.Blosc.md#fromconfig)

## Constructors

### constructor

• **new Blosc**(`clevel?`, `cname?`, `shuffle?`, `blocksize?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clevel?` | `number` |
| `cname?` | `string` |
| `shuffle?` | [`BloscShuffle`](../enums/neuroglancer_util_blosc._internal_.BloscShuffle.md) |
| `blocksize?` | `number` |

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:21

## Properties

### blocksize

• **blocksize**: `number`

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:20

___

### clevel

• **clevel**: [`BloscCompressionLevel`](../modules/neuroglancer_util_blosc._internal_.md#blosccompressionlevel)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:17

___

### cname

• **cname**: [`BloscCompressor`](../modules/neuroglancer_util_blosc._internal_.md#blosccompressor)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:18

___

### shuffle

• **shuffle**: [`BloscShuffle`](../enums/neuroglancer_util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:19

___

### AUTOSHUFFLE

▪ `Static` **AUTOSHUFFLE**: [`BloscShuffle`](../enums/neuroglancer_util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:16

___

### BITSHUFFLE

▪ `Static` **BITSHUFFLE**: [`BloscShuffle`](../enums/neuroglancer_util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:15

___

### COMPRESSORS

▪ `Static` **COMPRESSORS**: `string`[]

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:12

___

### NOSHUFFLE

▪ `Static` **NOSHUFFLE**: [`BloscShuffle`](../enums/neuroglancer_util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:13

___

### SHUFFLE

▪ `Static` **SHUFFLE**: [`BloscShuffle`](../enums/neuroglancer_util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:14

___

### codecId

▪ `Static` **codecId**: `string`

#### Implementation of

[Codec](neuroglancer_util_blosc._internal_.Codec.md).[codecId](neuroglancer_util_blosc._internal_.Codec.md#codecid)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:11

## Methods

### decode

▸ **decode**(`data`, `out?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `out?` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[Codec](neuroglancer_util_blosc._internal_.Codec.md).[decode](neuroglancer_util_blosc._internal_.Codec.md#decode)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:29

___

### encode

▸ **encode**(`data`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[Codec](neuroglancer_util_blosc._internal_.Codec.md).[encode](neuroglancer_util_blosc._internal_.Codec.md#encode)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:28

___

### fromConfig

▸ `Static` **fromConfig**(`__namedParameters`): [`Blosc`](neuroglancer_util_blosc.Blosc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | { `blocksize?`: `number` ; `clevel?`: `number` ; `cname?`: `string` ; `shuffle?`: [`BloscShuffle`](../enums/neuroglancer_util_blosc._internal_.BloscShuffle.md)  } & [`CompressorConfig`](../interfaces/neuroglancer_util_blosc._internal_.CompressorConfig.md) |

#### Returns

[`Blosc`](neuroglancer_util_blosc.Blosc.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:22
