[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/side\_panel](../modules/ui_side_panel.md) / DragSource

# Interface: DragSource

[ui/side_panel](../modules/ui_side_panel.md).DragSource

## Table of contents

### Methods

- [canDropAsTabs](ui_side_panel.DragSource.md#candropastabs)
- [dropAsNewPanel](ui_side_panel.DragSource.md#dropasnewpanel)
- [dropAsTab](ui_side_panel.DragSource.md#dropastab)

## Methods

### canDropAsTabs

▸ `Optional` **canDropAsTabs**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SidePanel`](../classes/ui_side_panel.SidePanel.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L186)

___

### dropAsNewPanel

▸ **dropAsNewPanel**(`location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | [`SidePanelDropLocation`](ui_side_panel.SidePanelDropLocation.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L188)

___

### dropAsTab

▸ `Optional` **dropAsTab**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SidePanel`](../classes/ui_side_panel.SidePanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel.ts#L187)
