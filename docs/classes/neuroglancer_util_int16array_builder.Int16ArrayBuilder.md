[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/int16array\_builder](../modules/neuroglancer_util_int16array_builder.md) / Int16ArrayBuilder

# Class: Int16ArrayBuilder

[neuroglancer/util/int16array_builder](../modules/neuroglancer_util_int16array_builder.md).Int16ArrayBuilder

**`License`**

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

### Constructors

- [constructor](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#constructor)

### Properties

- [data](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#data)
- [length](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#length)

### Accessors

- [view](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#view)

### Methods

- [appendArray](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#appendarray)
- [clear](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#clear)
- [eraseRange](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#eraserange)
- [resize](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#resize)
- [shrinkToFit](neuroglancer_util_int16array_builder.Int16ArrayBuilder.md#shrinktofit)

## Constructors

### constructor

• **new Int16ArrayBuilder**(`initialCapacity?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialCapacity` | `number` | `16` |

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L22)

## Properties

### data

• **data**: `Int16Array`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L20)

___

### length

• **length**: `number` = `0`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L19)

## Accessors

### view

• `get` **view**(): `Int16Array`

#### Returns

`Int16Array`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L36)

## Methods

### appendArray

▸ **appendArray**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L49)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L45)

___

### eraseRange

▸ **eraseRange**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L55)

___

### resize

▸ **resize**(`newLength`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newLength` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L26)

___

### shrinkToFit

▸ **shrinkToFit**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/int16array_builder.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/int16array_builder.ts#L41)
