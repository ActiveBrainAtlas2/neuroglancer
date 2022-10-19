[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/trackable

# Module: neuroglancer/util/trackable

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

### Classes

- [CompoundTrackable](../classes/neuroglancer_util_trackable.CompoundTrackable.md)
- [PersistentCompoundTrackable](../classes/neuroglancer_util_trackable.PersistentCompoundTrackable.md)

### Interfaces

- [JsonRestorable](../interfaces/neuroglancer_util_trackable.JsonRestorable.md)
- [Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md)

### Functions

- [getCachedJson](neuroglancer_util_trackable.md#getcachedjson)
- [optionallyRestoreFromJsonMember](neuroglancer_util_trackable.md#optionallyrestorefromjsonmember)

## Functions

### getCachedJson

▸ **getCachedJson**(`root`): `Object`

Returns a JSON representation of a Trackable object.

Recursively caches the result, such that it is only necessary to traverse the changed portions of
the object.

The returned value must not be modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `generation` | `number` |
| `value` | `any` |

#### Defined in

[src/neuroglancer/util/trackable.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L165)

___

### optionallyRestoreFromJsonMember

▸ **optionallyRestoreFromJsonMember**(`obj`, `member`, `restorable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `member` | `string` |
| `restorable` | [`JsonRestorable`](../interfaces/neuroglancer_util_trackable.JsonRestorable.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L29)
