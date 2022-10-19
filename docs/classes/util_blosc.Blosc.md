[neuroglancer](../README.md) / [Modules](../modules.md) / [util/blosc](../modules/util_blosc.md) / Blosc

# Class: Blosc

[util/blosc](../modules/util_blosc.md).Blosc

**`license`**
Copyright 2020 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Implements

- [`Codec`](util_blosc._internal_.Codec.md)

## Table of contents

### Constructors

- [constructor](util_blosc.Blosc.md#constructor)

### Properties

- [blocksize](util_blosc.Blosc.md#blocksize)
- [clevel](util_blosc.Blosc.md#clevel)
- [cname](util_blosc.Blosc.md#cname)
- [shuffle](util_blosc.Blosc.md#shuffle)
- [AUTOSHUFFLE](util_blosc.Blosc.md#autoshuffle)
- [BITSHUFFLE](util_blosc.Blosc.md#bitshuffle)
- [COMPRESSORS](util_blosc.Blosc.md#compressors)
- [NOSHUFFLE](util_blosc.Blosc.md#noshuffle)
- [SHUFFLE](util_blosc.Blosc.md#shuffle-1)
- [codecId](util_blosc.Blosc.md#codecid)

### Methods

- [decode](util_blosc.Blosc.md#decode)
- [encode](util_blosc.Blosc.md#encode)
- [fromConfig](util_blosc.Blosc.md#fromconfig)

## Constructors

### constructor

• **new Blosc**(`clevel?`, `cname?`, `shuffle?`, `blocksize?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clevel?` | `number` |
| `cname?` | `string` |
| `shuffle?` | [`BloscShuffle`](../enums/util_blosc._internal_.BloscShuffle.md) |
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

• **clevel**: [`BloscCompressionLevel`](../modules/util_blosc._internal_.md#blosccompressionlevel)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:17

___

### cname

• **cname**: [`BloscCompressor`](../modules/util_blosc._internal_.md#blosccompressor)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:18

___

### shuffle

• **shuffle**: [`BloscShuffle`](../enums/util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:19

___

### AUTOSHUFFLE

▪ `Static` **AUTOSHUFFLE**: [`BloscShuffle`](../enums/util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:16

___

### BITSHUFFLE

▪ `Static` **BITSHUFFLE**: [`BloscShuffle`](../enums/util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:15

___

### COMPRESSORS

▪ `Static` **COMPRESSORS**: `string`[]

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:12

___

### NOSHUFFLE

▪ `Static` **NOSHUFFLE**: [`BloscShuffle`](../enums/util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:13

___

### SHUFFLE

▪ `Static` **SHUFFLE**: [`BloscShuffle`](../enums/util_blosc._internal_.BloscShuffle.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:14

___

### codecId

▪ `Static` **codecId**: `string`

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

Codec.decode

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

Codec.encode

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:28

___

### fromConfig

▸ `Static` **fromConfig**(`__namedParameters`): [`Blosc`](util_blosc.Blosc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | { `blocksize?`: `number` ; `clevel?`: `number` ; `cname?`: `string` ; `shuffle?`: [`BloscShuffle`](../enums/util_blosc._internal_.BloscShuffle.md)  } & [`CompressorConfig`](../interfaces/util_blosc._internal_.CompressorConfig.md) |

#### Returns

[`Blosc`](util_blosc.Blosc.md)

#### Defined in

node_modules/numcodecs/dist/types/src/blosc.d.ts:22
