[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/ui/annotations

# Module: neuroglancer/ui/annotations

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_ui_annotations._internal_.md)

### Enumerations

- [CellToolMode](../enums/neuroglancer_ui_annotations.CellToolMode.md)
- [ComToolMode](../enums/neuroglancer_ui_annotations.ComToolMode.md)
- [PolygonToolMode](../enums/neuroglancer_ui_annotations.PolygonToolMode.md)
- [VolumeToolMode](../enums/neuroglancer_ui_annotations.VolumeToolMode.md)

### Classes

- [AnnotationLayerView](../classes/neuroglancer_ui_annotations.AnnotationLayerView.md)
- [AnnotationTab](../classes/neuroglancer_ui_annotations.AnnotationTab.md)
- [MergedAnnotationStates](../classes/neuroglancer_ui_annotations.MergedAnnotationStates.md)
- [MultiStepAnnotationTool](../classes/neuroglancer_ui_annotations.MultiStepAnnotationTool.md)
- [PlaceBoundingBoxTool](../classes/neuroglancer_ui_annotations.PlaceBoundingBoxTool.md)
- [PlaceCellTool](../classes/neuroglancer_ui_annotations.PlaceCellTool.md)
- [PlaceComTool](../classes/neuroglancer_ui_annotations.PlaceComTool.md)
- [PlaceLineTool](../classes/neuroglancer_ui_annotations.PlaceLineTool.md)
- [PlacePointTool](../classes/neuroglancer_ui_annotations.PlacePointTool.md)
- [PlacePolygonTool](../classes/neuroglancer_ui_annotations.PlacePolygonTool.md)
- [PlaceVolumeTool](../classes/neuroglancer_ui_annotations.PlaceVolumeTool.md)

### Interfaces

- [COMSession](../interfaces/neuroglancer_ui_annotations.COMSession.md)
- [CategoryListJSON](../interfaces/neuroglancer_ui_annotations.CategoryListJSON.md)
- [CellSession](../interfaces/neuroglancer_ui_annotations.CellSession.md)
- [LandmarkListJSON](../interfaces/neuroglancer_ui_annotations.LandmarkListJSON.md)
- [VolumeSession](../interfaces/neuroglancer_ui_annotations.VolumeSession.md)

### Type Aliases

- [UserLayerWithAnnotations](neuroglancer_ui_annotations.md#userlayerwithannotations)

### Functions

- [UserLayerWithAnnotationsMixin](neuroglancer_ui_annotations.md#userlayerwithannotationsmixin)
- [getCategoryList](neuroglancer_ui_annotations.md#getcategorylist)
- [getLandmarkList](neuroglancer_ui_annotations.md#getlandmarklist)

## Type Aliases

### UserLayerWithAnnotations

Ƭ **UserLayerWithAnnotations**: [`InstanceType`](neuroglancer_annotation_renderlayer._internal_.md#instancetype)<[`ReturnType`](neuroglancer_annotation_renderlayer._internal_.md#returntype)<typeof [`UserLayerWithAnnotationsMixin`](neuroglancer_ui_annotations.md#userlayerwithannotationsmixin)\>\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:3671](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L3671)

## Functions

### UserLayerWithAnnotationsMixin

▸ **UserLayerWithAnnotationsMixin**<`TBase`\>(`Base`): (...`args`: `any`[]) => `C`<`TBase`\> & `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends (...`args`: `any`[]) => [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

#### Returns

(...`args`: `any`[]) => `C`<`TBase`\> & `TBase`

#### Defined in

[src/neuroglancer/ui/annotations.ts:3097](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L3097)

___

### getCategoryList

▸ **getCategoryList**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

A list of categories for cell annotations. eg: Positive, negative.

#### Defined in

[src/neuroglancer/ui/annotations.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L105)

___

### getLandmarkList

▸ **getLandmarkList**(`type`): `Promise`<`string`[]\>

Returns a list of landmarks from database based on annotation type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md) |

#### Returns

`Promise`<`string`[]\>

list of landmarks.

#### Defined in

[src/neuroglancer/ui/annotations.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L90)
