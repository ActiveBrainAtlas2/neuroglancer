[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/segmentation\_display\_state/backend

# Module: neuroglancer/segmentation\_display\_state/backend

## Table of contents

### Classes

- [IndexedSegmentPropertySourceBackend](../classes/neuroglancer_segmentation_display_state_backend.IndexedSegmentPropertySourceBackend.md)

### Functions

- [receiveVisibleSegmentsState](neuroglancer_segmentation_display_state_backend.md#receivevisiblesegmentsstate)
- [withSegmentationLayerBackendState](neuroglancer_segmentation_display_state_backend.md#withsegmentationlayerbackendstate)

## Functions

### receiveVisibleSegmentsState

▸ **receiveVisibleSegmentsState**(`rpc`, `options`, `target?`): [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |
| `target` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

[`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L31)

___

### withSegmentationLayerBackendState

▸ **withSegmentationLayerBackendState**<`TBase`\>(`Base`): (...`args`: `any`[]) => `SegmentationLayerState`<`TBase`\> & `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](neuroglancer_util_mixin.md#anyconstructor)<[`ChunkRequester`](../interfaces/neuroglancer_chunk_manager_backend.ChunkRequester.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

#### Returns

(...`args`: `any`[]) => `SegmentationLayerState`<`TBase`\> & `TBase`

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L43)
