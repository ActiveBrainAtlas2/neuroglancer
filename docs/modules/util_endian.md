[neuroglancer](../README.md) / [Modules](../modules.md) / util/endian

# Module: util/endian

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Enumerations

- [Endianness](../enums/util_endian.Endianness.md)

### Variables

- [ENDIANNESS](util_endian.md#endianness)

### Functions

- [convertEndian](util_endian.md#convertendian)
- [convertEndian16](util_endian.md#convertendian16)
- [convertEndian32](util_endian.md#convertendian32)
- [convertEndian64](util_endian.md#convertendian64)
- [determineEndianness](util_endian.md#determineendianness)
- [swapEndian16](util_endian.md#swapendian16)
- [swapEndian32](util_endian.md#swapendian32)
- [swapEndian64](util_endian.md#swapendian64)

## Variables

### ENDIANNESS

• `Const` **ENDIANNESS**: `Endianness`

The native endianness of the runtime.

#### Defined in

[src/neuroglancer/util/endian.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L35)

## Functions

### convertEndian

▸ **convertEndian**(`array`, `source`, `elementBytes`, `target?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) | `undefined` |
| `source` | [`Endianness`](../enums/util_endian.Endianness.md) | `undefined` |
| `elementBytes` | `number` | `undefined` |
| `target` | [`Endianness`](../enums/util_endian.Endianness.md) | `ENDIANNESS` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/endian.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L120)

___

### convertEndian16

▸ **convertEndian16**(`array`, `source`, `target?`): `void`

Converts the endianness of an array assumed to contain 16-bit values from source to target.

This does nothing if source === target.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) | `undefined` |
| `source` | [`Endianness`](../enums/util_endian.Endianness.md) | `undefined` |
| `target` | [`Endianness`](../enums/util_endian.Endianness.md) | `ENDIANNESS` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/endian.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L87)

___

### convertEndian32

▸ **convertEndian32**(`array`, `source`, `target?`): `void`

Converts the endianness of an array assumed to contain 32-bit values from source to target.

This does nothing if source === target.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) | `undefined` |
| `source` | [`Endianness`](../enums/util_endian.Endianness.md) | `undefined` |
| `target` | [`Endianness`](../enums/util_endian.Endianness.md) | `ENDIANNESS` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/endian.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L100)

___

### convertEndian64

▸ **convertEndian64**(`array`, `source`, `target?`): `void`

Converts the endianness of an array assumed to contain 64-bit values from source to target.

This does nothing if source === target.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) | `undefined` |
| `source` | [`Endianness`](../enums/util_endian.Endianness.md) | `undefined` |
| `target` | [`Endianness`](../enums/util_endian.Endianness.md) | `ENDIANNESS` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/endian.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L113)

___

### determineEndianness

▸ **determineEndianness**(): `Endianness`

#### Returns

`Endianness`

#### Defined in

[src/neuroglancer/util/endian.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L26)

___

### swapEndian16

▸ **swapEndian16**(`array`): `void`

Swaps the endianness of an array assumed to contain 16-bit values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/endian.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L40)

___

### swapEndian32

▸ **swapEndian32**(`array`): `void`

Swaps the endianness of an array assumed to contain 32-bit values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/endian.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L52)

___

### swapEndian64

▸ **swapEndian64**(`array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/endian.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/endian.ts#L64)
