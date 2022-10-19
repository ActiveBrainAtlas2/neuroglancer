[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/ui/drag\_and\_drop

# Module: neuroglancer/ui/drag\_and\_drop

## Table of contents

### Type Aliases

- [DragStatusRenderer](neuroglancer_ui_drag_and_drop.md#dragstatusrenderer)
- [DragStatusType](neuroglancer_ui_drag_and_drop.md#dragstatustype)

### Functions

- [popDragStatus](neuroglancer_ui_drag_and_drop.md#popdragstatus)
- [pushDragStatus](neuroglancer_ui_drag_and_drop.md#pushdragstatus)

## Type Aliases

### DragStatusRenderer

Ƭ **DragStatusRenderer**: `string` \| () => [`Node`](main_module._internal_.md#node)

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/drag_and_drop.ts#L25)

___

### DragStatusType

Ƭ **DragStatusType**: ``"drag"`` \| ``"drop"``

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/drag_and_drop.ts#L27)

## Functions

### popDragStatus

▸ **popDragStatus**(`target`, `operation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](main_module._internal_.md#eventtarget) |
| `operation` | [`DragStatusType`](neuroglancer_ui_drag_and_drop.md#dragstatustype) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/drag_and_drop.ts#L71)

___

### pushDragStatus

▸ **pushDragStatus**(`target`, `operation`, `status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](main_module._internal_.md#eventtarget) |
| `operation` | [`DragStatusType`](neuroglancer_ui_drag_and_drop.md#dragstatustype) |
| `status` | [`DragStatusRenderer`](neuroglancer_ui_drag_and_drop.md#dragstatusrenderer) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/drag_and_drop.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/drag_and_drop.ts#L64)
