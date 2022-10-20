[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/trackable

# Module: neuroglancer/util/trackable

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

[src/neuroglancer/util/trackable.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L165)

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

[src/neuroglancer/util/trackable.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L29)
