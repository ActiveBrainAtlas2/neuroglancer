[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/side\_panel](../modules/neuroglancer_ui_side_panel.md) / DragSource

# Interface: DragSource

[neuroglancer/ui/side_panel](../modules/neuroglancer_ui_side_panel.md).DragSource

## Table of contents

### Methods

- [canDropAsTabs](neuroglancer_ui_side_panel.DragSource.md#candropastabs)
- [dropAsNewPanel](neuroglancer_ui_side_panel.DragSource.md#dropasnewpanel)
- [dropAsTab](neuroglancer_ui_side_panel.DragSource.md#dropastab)

## Methods

### canDropAsTabs

▸ `Optional` **canDropAsTabs**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SidePanel`](../classes/neuroglancer_ui_side_panel.SidePanel.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L186)

___

### dropAsNewPanel

▸ **dropAsNewPanel**(`location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | [`SidePanelDropLocation`](neuroglancer_ui_side_panel.SidePanelDropLocation.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L188)

___

### dropAsTab

▸ `Optional` **dropAsTab**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SidePanel`](../classes/neuroglancer_ui_side_panel.SidePanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L187)
