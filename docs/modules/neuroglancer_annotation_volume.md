[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/volume

# Module: neuroglancer/annotation/volume

## Table of contents

### Functions

- [isSectionValid](neuroglancer_annotation_volume.md#issectionvalid)

## Functions

### isSectionValid

▸ **isSectionValid**(`annotationLayer`, `id`, `zCoordinate`): `boolean`

This function takes a volume id as input and finds if there is a polygon already present at the input
zCoordiante, if the polygon is present returns false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `annotationLayer` | [`AnnotationLayerState`](../classes/neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |  |
| `id` | `string` | volume id |
| `zCoordinate` | `number` | z coordinate input. |

#### Returns

`boolean`

True, if polygon is not present otherwise false.

#### Defined in

[src/neuroglancer/annotation/volume.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/volume.ts#L59)
