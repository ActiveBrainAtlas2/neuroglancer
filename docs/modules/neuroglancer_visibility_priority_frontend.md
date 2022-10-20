[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/visibility\_priority/frontend

# Module: neuroglancer/visibility\_priority/frontend

## Table of contents

### Classes

- [VisibilityPriorityAggregator](../classes/neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)
- [WatchableVisibilityPriority](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

### Interfaces

- [VisibilityPrioritySpecification](../interfaces/neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md)

### Type Aliases

- [VisibilityPriority](neuroglancer_visibility_priority_frontend.md#visibilitypriority)

### Functions

- [withSharedVisibility](neuroglancer_visibility_priority_frontend.md#withsharedvisibility)

## Type Aliases

### VisibilityPriority

Ƭ **VisibilityPriority**: `number`

Numeric value specifying a visibility or prefetch priority.

A value of `Number.POSITIVE_INFINITY` means visible.

Any other finite value means not visible, and specifies the prefetch priority (higher means
higher priority); this should always be a small integer.

A value of `Number.NEGATIVE_INFINITY` means ignored (not visible, and not prefetched).

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/frontend.ts#L32)

## Functions

### withSharedVisibility

▸ **withSharedVisibility**<`T`\>(`Base`): (...`args`: `any`[]) => `__class`<`T`\> & `T`

Mixin that adds a `visibility` property which is shared with the counterpart.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => [`SharedObject`](../classes/neuroglancer_worker_rpc.SharedObject.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `T` |

#### Returns

(...`args`: `any`[]) => `__class`<`T`\> & `T`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/frontend.ts#L90)
