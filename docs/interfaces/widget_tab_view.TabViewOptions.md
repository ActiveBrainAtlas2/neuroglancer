[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/tab\_view](../modules/widget_tab_view.md) / TabViewOptions

# Interface: TabViewOptions

[widget/tab_view](../modules/widget_tab_view.md).TabViewOptions

## Table of contents

### Properties

- [selectedTab](widget_tab_view.TabViewOptions.md#selectedtab)
- [tabs](widget_tab_view.TabViewOptions.md#tabs)

### Methods

- [handleTabElement](widget_tab_view.TabViewOptions.md#handletabelement)
- [makeTab](widget_tab_view.TabViewOptions.md#maketab)

## Properties

### selectedTab

• **selectedTab**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L266)

___

### tabs

• **tabs**: [`WatchableValueChangeInterface`](perspective_view_panel._internal_.WatchableValueChangeInterface.md)<{ `id`: `string` ; `label`: `string`  }[]\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L267)

## Methods

### handleTabElement

▸ `Optional` **handleTabElement**(`id`, `element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L268)

___

### makeTab

▸ **makeTab**(`id`): [`Tab`](../classes/widget_tab_view.Tab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Tab`](../classes/widget_tab_view.Tab.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L265)
