[neuroglancer](../README.md) / [Modules](../modules.md) / ui/drag\_and\_drop

# Module: ui/drag\_and\_drop

## Table of contents

### Type Aliases

- [DragStatusRenderer](ui_drag_and_drop.md#dragstatusrenderer)
- [DragStatusType](ui_drag_and_drop.md#dragstatustype)

### Functions

- [popDragStatus](ui_drag_and_drop.md#popdragstatus)
- [pushDragStatus](ui_drag_and_drop.md#pushdragstatus)

## Type Aliases

### DragStatusRenderer

Ƭ **DragStatusRenderer**: `string` \| () => [`Node`](annotation_annotation_layer_state._internal_.md#node)

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/drag_and_drop.ts#L25)

___

### DragStatusType

Ƭ **DragStatusType**: ``"drag"`` \| ``"drop"``

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/drag_and_drop.ts#L27)

## Functions

### popDragStatus

▸ **popDragStatus**(`target`, `operation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](annotation_annotation_layer_state._internal_.md#eventtarget) |
| `operation` | [`DragStatusType`](ui_drag_and_drop.md#dragstatustype) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/drag_and_drop.ts#L71)

___

### pushDragStatus

▸ **pushDragStatus**(`target`, `operation`, `status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](annotation_annotation_layer_state._internal_.md#eventtarget) |
| `operation` | [`DragStatusType`](ui_drag_and_drop.md#dragstatustype) |
| `status` | [`DragStatusRenderer`](ui_drag_and_drop.md#dragstatusrenderer) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/drag_and_drop.ts#L64)
