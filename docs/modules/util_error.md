[neuroglancer](../README.md) / [Modules](../modules.md) / util/error

# Module: util/error

## Table of contents

### Type Aliases

- [ValueOrError](util_error.md#valueorerror)

### Functions

- [makeValueOrError](util_error.md#makevalueorerror)
- [valueOrThrow](util_error.md#valueorthrow)

## Type Aliases

### ValueOrError

Ƭ **ValueOrError**<`T`\>: `T` & { `error?`: `undefined`  } \| { `error`: `string`  }

**`license`**
Copyright 2019 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/neuroglancer/util/error.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/error.ts#L17)

## Functions

### makeValueOrError

▸ **makeValueOrError**<`T`\>(`f`): [`ValueOrError`](util_error.md#valueorerror)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |

#### Returns

[`ValueOrError`](util_error.md#valueorerror)<`T`\>

#### Defined in

[src/neuroglancer/util/error.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/error.ts#L19)

___

### valueOrThrow

▸ **valueOrThrow**<`T`\>(`x`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ValueOrError`](util_error.md#valueorerror)<`T`\> |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/error.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/error.ts#L27)
