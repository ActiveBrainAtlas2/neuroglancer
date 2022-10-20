[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/visibility\_priority/backend

# Module: neuroglancer/visibility\_priority/backend

## Table of contents

### Functions

- [getBasePriority](neuroglancer_visibility_priority_backend.md#getbasepriority)
- [getPriorityTier](neuroglancer_visibility_priority_backend.md#getprioritytier)
- [withSharedVisibility](neuroglancer_visibility_priority_backend.md#withsharedvisibility)

## Functions

### getBasePriority

▸ **getBasePriority**(`visibility`): `number`

Computes the base priority for the given `visibility` value.  If the value is
`Number.POSTIVE_INFINITY`, corresponding to actual visibility, the base priority is 0.
Otherwise, the value is interpreted as the prefetch priority (higher means higher priority), and
the base priority is equal to the product of this value and `PREFETCH_PRIORITY_MULTIPLIER`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `visibility` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/backend.ts#L59)

___

### getPriorityTier

▸ **getPriorityTier**(`visibility`): [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md)

Computes the ChunkPriorityTier for the given `visibility` value.

A value of `Number.POSITIVE_INFINITY` means `VISIBLE`.  Any other value means `PREFETCH`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `visibility` | `number` |

#### Returns

[`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md)

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/backend.ts#L48)

___

### withSharedVisibility

▸ **withSharedVisibility**<`T`\>(`Base`): (...`args`: `any`[]) => `__class`<`T`\> & `T`

Mixin for adding a visibility shared property to a ChunkRequester.  Calls
`this.chunkManager.scheduleUpdateChunkPriorities()` when visibility changes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => [`ChunkRequester`](../interfaces/neuroglancer_chunk_manager_backend.ChunkRequester.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `T` |

#### Returns

(...`args`: `any`[]) => `__class`<`T`\> & `T`

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/backend.ts#L28)
