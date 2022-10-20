[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/mixin

# Module: neuroglancer/util/mixin

## Table of contents

### Type Aliases

- [AnyConstructor](neuroglancer_util_mixin.md#anyconstructor)
- [MixinConstructor](neuroglancer_util_mixin.md#mixinconstructor)

## Type Aliases

### AnyConstructor

Ƭ **AnyConstructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• **new AnyConstructor**(...`args`): `T`

**`License`**

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

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

[src/neuroglancer/util/mixin.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/mixin.ts#L17)

___

### MixinConstructor

Ƭ **MixinConstructor**<`TMixin`, `TBase`\>: [`TMixin`, `TBase`] extends [(...`a`: infer O1) => infer R1, (...`b`: `any`[]) => infer R2] ? (...`a`: `O1`) => `R1` & `R2` & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<`TMixin`, keyof `TMixin`\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<`TBase`, keyof `TBase`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TMixin` |
| `TBase` |

#### Defined in

[src/neuroglancer/util/mixin.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/mixin.ts#L21)
