[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/selection

# Module: neuroglancer/annotation/selection

## Table of contents

### Functions

- [getSelectedAnnotation](neuroglancer_annotation_selection.md#getselectedannotation)

## Functions

### getSelectedAnnotation

▸ **getSelectedAnnotation**(`mouseState`, `layerManager`): `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](../classes/neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` = mouseState.pickedAnnotationId; `layer`: [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md) = managedLayer; `partIndex`: `number` = mouseState.pickedOffset }

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](../classes/neuroglancer_layer.MouseSelectionState.md) |
| `layerManager` | [`LayerManager`](../classes/neuroglancer_layer.LayerManager.md) |

#### Returns

`undefined` \| { `annotationLayer`: [`AnnotationLayerState`](../classes/neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` = mouseState.pickedAnnotationId; `layer`: [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md) = managedLayer; `partIndex`: `number` = mouseState.pickedOffset }

#### Defined in

[src/neuroglancer/annotation/selection.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/selection.ts#L19)
