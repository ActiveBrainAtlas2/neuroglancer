[neuroglancer](../README.md) / [Modules](../modules.md) / widget/layer\_control

# Module: widget/layer\_control

## Table of contents

### Classes

- [LayerControlTool](../classes/widget_layer_control.LayerControlTool.md)

### Interfaces

- [LayerControlDefinition](../interfaces/widget_layer_control.LayerControlDefinition.md)
- [LayerControlFactory](../interfaces/widget_layer_control.LayerControlFactory.md)
- [LayerControlLabelOptions](../interfaces/widget_layer_control.LayerControlLabelOptions.md)

### Functions

- [addLayerControlToOptionsTab](widget_layer_control.md#addlayercontroltooptionstab)
- [registerLayerControl](widget_layer_control.md#registerlayercontrol)

## Functions

### addLayerControlToOptionsTab

▸ **addLayerControlToOptionsTab**<`LayerType`\>(`context`, `layer`, `visibility`, `options`): [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |
| `layer` | `LayerType` |
| `visibility` | [`WatchableVisibilityPriority`](../classes/visibility_priority_frontend.WatchableVisibilityPriority.md) |
| `options` | [`LayerControlDefinition`](../interfaces/widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\> |

#### Returns

[`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L113)

___

### registerLayerControl

▸ **registerLayerControl**<`LayerType`\>(`layerType`, `options`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerType` | [`UserLayerConstructor`](ui_layer_data_sources_tab._internal_.md#userlayerconstructor)<`LayerType`\> |
| `options` | [`LayerControlDefinition`](../interfaces/widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L131)
