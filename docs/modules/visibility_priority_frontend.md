[neuroglancer](../README.md) / [Modules](../modules.md) / visibility\_priority/frontend

# Module: visibility\_priority/frontend

## Table of contents

### Classes

- [VisibilityPriorityAggregator](../classes/visibility_priority_frontend.VisibilityPriorityAggregator.md)
- [WatchableVisibilityPriority](../classes/visibility_priority_frontend.WatchableVisibilityPriority.md)

### Interfaces

- [VisibilityPrioritySpecification](../interfaces/visibility_priority_frontend.VisibilityPrioritySpecification.md)

### Type Aliases

- [VisibilityPriority](visibility_priority_frontend.md#visibilitypriority)

### Functions

- [withSharedVisibility](visibility_priority_frontend.md#withsharedvisibility)

## Type Aliases

### VisibilityPriority

Ƭ **VisibilityPriority**: `number`

Numeric value specifying a visibility or prefetch priority.

A value of `Number.POSITIVE_INFINITY` means visible.

Any other finite value means not visible, and specifies the prefetch priority (higher means
higher priority); this should always be a small integer.

A value of `Number.NEGATIVE_INFINITY` means ignored (not visible, and not prefetched).

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L32)

## Functions

### withSharedVisibility

▸ **withSharedVisibility**<`T`\>(`Base`): { `prototype`: `__class`<`any`\>  } & `T`

Mixin that adds a `visibility` property which is shared with the counterpart.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => [`SharedObject`](../classes/annotation_annotation_layer_state._internal_.SharedObject.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `T` |

#### Returns

{ `prototype`: `__class`<`any`\>  } & `T`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L90)
