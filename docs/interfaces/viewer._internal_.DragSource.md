[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / DragSource

# Interface: DragSource

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).DragSource

## Table of contents

### Methods

- [canDropAsTabs](viewer._internal_.DragSource.md#candropastabs)
- [dropAsNewPanel](viewer._internal_.DragSource.md#dropasnewpanel)
- [dropAsTab](viewer._internal_.DragSource.md#dropastab)

## Methods

### canDropAsTabs

▸ `Optional` **canDropAsTabs**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SidePanel`](../classes/viewer._internal_.SidePanel.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L186)

___

### dropAsNewPanel

▸ **dropAsNewPanel**(`location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | [`SidePanelDropLocation`](viewer._internal_.SidePanelDropLocation.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L188)

___

### dropAsTab

▸ `Optional` **dropAsTab**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SidePanel`](../classes/viewer._internal_.SidePanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L187)
