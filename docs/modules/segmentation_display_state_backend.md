[neuroglancer](../README.md) / [Modules](../modules.md) / segmentation\_display\_state/backend

# Module: segmentation\_display\_state/backend

## Table of contents

### Classes

- [IndexedSegmentPropertySourceBackend](../classes/segmentation_display_state_backend.IndexedSegmentPropertySourceBackend.md)

### Functions

- [receiveVisibleSegmentsState](segmentation_display_state_backend.md#receivevisiblesegmentsstate)
- [withSegmentationLayerBackendState](segmentation_display_state_backend.md#withsegmentationlayerbackendstate)

## Functions

### receiveVisibleSegmentsState

▸ **receiveVisibleSegmentsState**(`rpc`, `options`, `target?`): [`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |
| `target` | [`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

[`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L31)

___

### withSegmentationLayerBackendState

▸ **withSegmentationLayerBackendState**<`TBase`\>(`Base`): { `prototype`: `SegmentationLayerState`<`any`\>  } & `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](util_mixin.md#anyconstructor)<[`ChunkRequester`](../interfaces/chunk_manager_backend.ChunkRequester.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

#### Returns

{ `prototype`: `SegmentationLayerState`<`any`\>  } & `TBase`

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L42)
