[neuroglancer](../README.md) / [Modules](../modules.md) / ui/layer\_drag\_and\_drop

# Module: ui/layer\_drag\_and\_drop

## Table of contents

### Modules

- [&lt;internal\&gt;](ui_layer_drag_and_drop._internal_.md)

### Classes

- [DropLayers](../classes/ui_layer_drag_and_drop.DropLayers.md)

### Interfaces

- [GetDropLayersOptions](../interfaces/ui_layer_drag_and_drop.GetDropLayersOptions.md)
- [LayerBarDropInterface](../interfaces/ui_layer_drag_and_drop.LayerBarDropInterface.md)
- [LayerDragSourceInfo](../interfaces/ui_layer_drag_and_drop.LayerDragSourceInfo.md)

### Functions

- [endLayerDrag](ui_layer_drag_and_drop.md#endlayerdrag)
- [getDropEffectFromModifiers](ui_layer_drag_and_drop.md#getdropeffectfrommodifiers)
- [getDropLayers](ui_layer_drag_and_drop.md#getdroplayers)
- [getLayerDragInfo](ui_layer_drag_and_drop.md#getlayerdraginfo)
- [getLayerDropEffect](ui_layer_drag_and_drop.md#getlayerdropeffect)
- [registerLayerBarDragLeaveHandler](ui_layer_drag_and_drop.md#registerlayerbardragleavehandler)
- [registerLayerBarDropHandlers](ui_layer_drag_and_drop.md#registerlayerbardrophandlers)
- [registerLayerDragHandlers](ui_layer_drag_and_drop.md#registerlayerdraghandlers)
- [startLayerDrag](ui_layer_drag_and_drop.md#startlayerdrag)
- [updateLayerDropEffect](ui_layer_drag_and_drop.md#updatelayerdropeffect)

## Functions

### endLayerDrag

▸ **endLayerDrag**(`dropEffect?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dropEffect` | `string` | `'none'` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L69)

___

### getDropEffectFromModifiers

▸ **getDropEffectFromModifiers**<`DropEffect`\>(`event`, `defaultDropEffect`, `moveAllowed`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DropEffect` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](annotation_annotation_layer_state._internal_.md#dragevent) |
| `defaultDropEffect` | `DropEffect` |
| `moveAllowed` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dropEffect` | `DropEffect` \| ``"move"`` \| ``"copy"`` |
| `dropEffectMessage` | `string` |

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L193)

___

### getDropLayers

▸ **getDropLayers**(`event`, `manager`, `options`): [`DropLayers`](../classes/ui_layer_drag_and_drop.DropLayers.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](annotation_annotation_layer_state._internal_.md#dragevent) |
| `manager` | [`LayerListSpecification`](../classes/annotation_annotation_layer_state._internal_.LayerListSpecification.md) |
| `options` | [`GetDropLayersOptions`](../interfaces/ui_layer_drag_and_drop.GetDropLayersOptions.md) |

#### Returns

[`DropLayers`](../classes/ui_layer_drag_and_drop.DropLayers.md) \| `undefined`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L280)

___

### getLayerDragInfo

▸ **getLayerDragInfo**(`event`): [`DragInfo`](../interfaces/util_drag_and_drop.DragInfo.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](annotation_annotation_layer_state._internal_.md#dragevent) |

#### Returns

[`DragInfo`](../interfaces/util_drag_and_drop.DragInfo.md) \| `undefined`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L81)

___

### getLayerDropEffect

▸ **getLayerDropEffect**(`event`, `manager`, `targetIsLayerListPanel`, `newTarget`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](annotation_annotation_layer_state._internal_.md#dragevent) |
| `manager` | [`LayerListSpecification`](../classes/annotation_annotation_layer_state._internal_.LayerListSpecification.md) |
| `targetIsLayerListPanel` | `boolean` |
| `newTarget` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dropEffect` | [`LayerDropEffect`](ui_layer_drag_and_drop._internal_.md#layerdropeffect) |
| `dropEffectMessage` | `string` |

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L226)

___

### registerLayerBarDragLeaveHandler

▸ **registerLayerBarDragLeaveHandler**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`LayerBarDropInterface`](../interfaces/ui_layer_drag_and_drop.LayerBarDropInterface.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L512)

___

### registerLayerBarDropHandlers

▸ **registerLayerBarDropHandlers**(`panel`, `target`, `targetLayer`, `isLayerListPanel?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `panel` | [`LayerBarDropInterface`](../interfaces/ui_layer_drag_and_drop.LayerBarDropInterface.md) | `undefined` |
| `target` | [`EventTarget`](annotation_annotation_layer_state._internal_.md#eventtarget) | `undefined` |
| `targetLayer` | `undefined` \| [`ManagedUserLayer`](../classes/annotation_annotation_layer_state._internal_.ManagedUserLayer.md) | `undefined` |
| `isLayerListPanel` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L356)

___

### registerLayerDragHandlers

▸ **registerLayerDragHandlers**(`panel`, `element`, `layer`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`LayerBarDropInterface`](../interfaces/ui_layer_drag_and_drop.LayerBarDropInterface.md) |
| `element` | [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement) |
| `layer` | [`ManagedUserLayer`](../classes/annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |
| `options` | `Object` |
| `options.isLayerListPanel?` | `boolean` |
| `options.getLayoutSpec` | () => `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:482](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L482)

___

### startLayerDrag

▸ **startLayerDrag**(`event`, `sourceInfo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](annotation_annotation_layer_state._internal_.md#dragevent) |
| `sourceInfo` | [`LayerDragSourceInfo`](../interfaces/ui_layer_drag_and_drop.LayerDragSourceInfo.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L39)

___

### updateLayerDropEffect

▸ **updateLayerDropEffect**(`event`, `manager`, `targetIsLayerListPanel`, `newTarget`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](annotation_annotation_layer_state._internal_.md#dragevent) |
| `manager` | [`LayerListSpecification`](../classes/annotation_annotation_layer_state._internal_.LayerListSpecification.md) |
| `targetIsLayerListPanel` | `boolean` |
| `newTarget` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dropEffect` | [`LayerDropEffect`](ui_layer_drag_and_drop._internal_.md#layerdropeffect) |
| `dropEffectMessage` | `string` |

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L258)
