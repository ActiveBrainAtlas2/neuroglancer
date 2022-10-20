[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/layer\_control

# Module: neuroglancer/widget/layer\_control

## Table of contents

### Classes

- [LayerControlTool](../classes/neuroglancer_widget_layer_control.LayerControlTool.md)

### Interfaces

- [LayerControlDefinition](../interfaces/neuroglancer_widget_layer_control.LayerControlDefinition.md)
- [LayerControlFactory](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)
- [LayerControlLabelOptions](../interfaces/neuroglancer_widget_layer_control.LayerControlLabelOptions.md)

### Functions

- [addLayerControlToOptionsTab](neuroglancer_widget_layer_control.md#addlayercontroltooptionstab)
- [registerLayerControl](neuroglancer_widget_layer_control.md#registerlayercontrol)

## Functions

### addLayerControlToOptionsTab

▸ **addLayerControlToOptionsTab**<`LayerType`\>(`context`, `layer`, `visibility`, `options`): [`HTMLElement`](main_module._internal_.md#htmlelement)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `layer` | `LayerType` |
| `visibility` | [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |
| `options` | [`LayerControlDefinition`](../interfaces/neuroglancer_widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\> |

#### Returns

[`HTMLElement`](main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L113)

___

### registerLayerControl

▸ **registerLayerControl**<`LayerType`\>(`layerType`, `options`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerType` | [`UserLayerConstructor`](neuroglancer_layer.md#userlayerconstructor)<`LayerType`\> |
| `options` | [`LayerControlDefinition`](../interfaces/neuroglancer_widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/layer_control.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L131)
