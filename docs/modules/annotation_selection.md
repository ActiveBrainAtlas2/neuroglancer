[neuroglancer](../README.md) / [Modules](../modules.md) / annotation/selection

# Module: annotation/selection

## Table of contents

### Functions

- [getSelectedAnnotation](annotation_selection.md#getselectedannotation)

## Functions

### getSelectedAnnotation

▸ **getSelectedAnnotation**(`mouseState`, `layerManager`): `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](../classes/annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` = mouseState.pickedAnnotationId; `layer`: [`ManagedUserLayer`](../classes/annotation_annotation_layer_state._internal_.ManagedUserLayer.md) = managedLayer; `partIndex`: `number` = mouseState.pickedOffset }

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](../classes/annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `layerManager` | [`LayerManager`](../classes/annotation_annotation_layer_state._internal_.LayerManager.md) |

#### Returns

`undefined` \| { `annotationLayer`: [`AnnotationLayerState`](../classes/annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` = mouseState.pickedAnnotationId; `layer`: [`ManagedUserLayer`](../classes/annotation_annotation_layer_state._internal_.ManagedUserLayer.md) = managedLayer; `partIndex`: `number` = mouseState.pickedOffset }

#### Defined in

[src/neuroglancer/annotation/selection.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/selection.ts#L19)
