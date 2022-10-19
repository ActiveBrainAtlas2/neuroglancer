[neuroglancer](../README.md) / [Modules](../modules.md) / ui/annotations

# Module: ui/annotations

**`license`**
Copyright 2018 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Modules

- [&lt;internal\&gt;](ui_annotations._internal_.md)

### Enumerations

- [CellToolMode](../enums/ui_annotations.CellToolMode.md)
- [ComToolMode](../enums/ui_annotations.ComToolMode.md)
- [PolygonToolMode](../enums/ui_annotations.PolygonToolMode.md)
- [VolumeToolMode](../enums/ui_annotations.VolumeToolMode.md)

### Classes

- [AnnotationLayerView](../classes/ui_annotations.AnnotationLayerView.md)
- [AnnotationTab](../classes/ui_annotations.AnnotationTab.md)
- [MergedAnnotationStates](../classes/ui_annotations.MergedAnnotationStates.md)
- [MultiStepAnnotationTool](../classes/ui_annotations.MultiStepAnnotationTool.md)
- [PlaceBoundingBoxTool](../classes/ui_annotations.PlaceBoundingBoxTool.md)
- [PlaceCellTool](../classes/ui_annotations.PlaceCellTool.md)
- [PlaceComTool](../classes/ui_annotations.PlaceComTool.md)
- [PlaceLineTool](../classes/ui_annotations.PlaceLineTool.md)
- [PlacePointTool](../classes/ui_annotations.PlacePointTool.md)
- [PlacePolygonTool](../classes/ui_annotations.PlacePolygonTool.md)
- [PlaceVolumeTool](../classes/ui_annotations.PlaceVolumeTool.md)

### Interfaces

- [COMSession](../interfaces/ui_annotations.COMSession.md)
- [CategoryListJSON](../interfaces/ui_annotations.CategoryListJSON.md)
- [CellSession](../interfaces/ui_annotations.CellSession.md)
- [LandmarkListJSON](../interfaces/ui_annotations.LandmarkListJSON.md)
- [VolumeSession](../interfaces/ui_annotations.VolumeSession.md)

### Type Aliases

- [UserLayerWithAnnotations](ui_annotations.md#userlayerwithannotations)

### Functions

- [UserLayerWithAnnotationsMixin](ui_annotations.md#userlayerwithannotationsmixin)
- [getCategoryList](ui_annotations.md#getcategorylist)
- [getLandmarkList](ui_annotations.md#getlandmarklist)

## Type Aliases

### UserLayerWithAnnotations

Ƭ **UserLayerWithAnnotations**: [`InstanceType`](annotation_renderlayer._internal_.md#instancetype)<[`ReturnType`](annotation_annotation_layer_state._internal_.md#returntype)<typeof [`UserLayerWithAnnotationsMixin`](ui_annotations.md#userlayerwithannotationsmixin)\>\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:3671](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L3671)

## Functions

### UserLayerWithAnnotationsMixin

▸ **UserLayerWithAnnotationsMixin**<`TBase`\>(`Base`): { `prototype`: `C`<`any`\>  } & `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends (...`args`: `any`[]) => [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

#### Returns

{ `prototype`: `C`<`any`\>  } & `TBase`

#### Defined in

[src/neuroglancer/ui/annotations.ts:3097](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L3097)

___

### getCategoryList

▸ **getCategoryList**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

A list of categories for cell annotations. eg: Positive, negative.

#### Defined in

[src/neuroglancer/ui/annotations.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L105)

___

### getLandmarkList

▸ **getLandmarkList**(`type`): `Promise`<`string`[]\>

Returns a list of landmarks from database based on annotation type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnotationType`](../enums/annotation.AnnotationType.md) |

#### Returns

`Promise`<`string`[]\>

list of landmarks.

#### Defined in

[src/neuroglancer/ui/annotations.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L90)
