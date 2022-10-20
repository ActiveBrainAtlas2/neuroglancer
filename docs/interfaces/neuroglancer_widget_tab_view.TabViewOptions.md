[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/tab\_view](../modules/neuroglancer_widget_tab_view.md) / TabViewOptions

# Interface: TabViewOptions

[neuroglancer/widget/tab_view](../modules/neuroglancer_widget_tab_view.md).TabViewOptions

## Table of contents

### Properties

- [handleTabElement](neuroglancer_widget_tab_view.TabViewOptions.md#handletabelement)
- [makeTab](neuroglancer_widget_tab_view.TabViewOptions.md#maketab)
- [selectedTab](neuroglancer_widget_tab_view.TabViewOptions.md#selectedtab)
- [tabs](neuroglancer_widget_tab_view.TabViewOptions.md#tabs)

## Properties

### handleTabElement

• `Optional` **handleTabElement**: (`id`: `string`, `element`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)) => `void`

#### Type declaration

▸ (`id`, `element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L268)

___

### makeTab

• **makeTab**: (`id`: `string`) => [`Tab`](../classes/neuroglancer_widget_tab_view.Tab.md)

#### Type declaration

▸ (`id`): [`Tab`](../classes/neuroglancer_widget_tab_view.Tab.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

[`Tab`](../classes/neuroglancer_widget_tab_view.Tab.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L265)

___

### selectedTab

• **selectedTab**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L266)

___

### tabs

• **tabs**: [`WatchableValueChangeInterface`](neuroglancer_trackable_value.WatchableValueChangeInterface.md)<{ `id`: `string` ; `label`: `string`  }[]\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L267)
