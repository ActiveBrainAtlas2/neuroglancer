[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / NestedStateManager

# Interface: NestedStateManager<T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).NestedStateManager

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

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `undefined` |

## Hierarchy

- [`Disposable`](neuroglancer_util_disposable.Disposable.md)

  ↳ **`NestedStateManager`**

## Table of contents

### Properties

- [dispose](neuroglancer_trackable_value.NestedStateManager.md#dispose)
- [flush](neuroglancer_trackable_value.NestedStateManager.md#flush)
- [value](neuroglancer_trackable_value.NestedStateManager.md#value)

## Properties

### dispose

• **dispose**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Disposable](neuroglancer_util_disposable.Disposable.md).[dispose](neuroglancer_util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L17)

___

### flush

• **flush**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L303)

___

### value

• **value**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L304)
