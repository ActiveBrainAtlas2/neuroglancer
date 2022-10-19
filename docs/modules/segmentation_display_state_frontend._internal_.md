[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](segmentation_display_state_frontend.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [LinkedLayerGroup](../classes/segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)
- [SegmentColorHash](../classes/segmentation_display_state_frontend._internal_.SegmentColorHash.md)
- [SegmentationUserLayer](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)
- [SegmentationUserLayerColorGroupState](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md)
- [SegmentationUserLayerDisplayState](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md)
- [SegmentationUserLayerGroupState](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md)

### Interfaces

- [SegmentWidgetWithExtraColumnsTemplate](../interfaces/segmentation_display_state_frontend._internal_.SegmentWidgetWithExtraColumnsTemplate.md)
- [SegmentationActionContext](../interfaces/segmentation_display_state_frontend._internal_.SegmentationActionContext.md)

### Variables

- [Base](segmentation_display_state_frontend._internal_.md#base)
- [Base](segmentation_display_state_frontend._internal_.md#base-1)
- [segmentWidgetTemplate](segmentation_display_state_frontend._internal_.md#segmentwidgettemplate)

## Variables

### Base

• `Const` **Base**: { `prototype`: `__class`<`any`\>  } & typeof [`ChunkRenderLayerFrontend`](../classes/chunk_manager_frontend.ChunkRenderLayerFrontend.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L765)

___

### Base

• `Const` **Base**: { `prototype`: `C`<`any`\>  } & typeof [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L333)

___

### segmentWidgetTemplate

• `Const` **segmentWidgetTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copyContainerIndex` | `number` |
| `copyIndex` | `number` |
| `filterIndex` | `number` |
| `idContainerIndex` | `number` |
| `idIndex` | `number` |
| `labelIndex` | `number` |
| `template` | [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `unmappedCopyIndex` | `number` |
| `unmappedIdIndex` | `number` |
| `visibleIndex` | `number` |

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L236)
