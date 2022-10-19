[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/renderlayer

# Module: neuroglancer/renderlayer

## Table of contents

### Enumerations

- [RenderLayerRole](../enums/neuroglancer_renderlayer.RenderLayerRole.md)

### Classes

- [DerivedProjectionParameters](../classes/neuroglancer_renderlayer.DerivedProjectionParameters.md)
- [RenderLayer](../classes/neuroglancer_renderlayer.RenderLayer.md)
- [SharedProjectionParameters](../classes/neuroglancer_renderlayer.SharedProjectionParameters.md)
- [VisibilityTrackedRenderLayer](../classes/neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)

### Interfaces

- [ThreeDimensionalReadyRenderContext](../interfaces/neuroglancer_renderlayer.ThreeDimensionalReadyRenderContext.md)
- [ThreeDimensionalRenderContext](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderContext.md)
- [ThreeDimensionalRenderLayerAttachmentState](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)

### Functions

- [allRenderLayerRoles](neuroglancer_renderlayer.md#allrenderlayerroles)
- [update3dRenderLayerAttachment](neuroglancer_renderlayer.md#update3drenderlayerattachment)

## Functions

### allRenderLayerRoles

▸ **allRenderLayerRoles**(): [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Returns

[`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L41)

___

### update3dRenderLayerAttachment

▸ **update3dRenderLayerAttachment**(`transform`, `displayDimensionRenderInfo`, `attachment`): [`mat4`](../classes/neuroglancer_util_geom.mat4.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`RenderLayerTransformOrError`](neuroglancer_render_coordinate_transform.md#renderlayertransformorerror) |
| `displayDimensionRenderInfo` | [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md) |
| `attachment` | [`VisibleLayerInfo`](../classes/neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

[`mat4`](../classes/neuroglancer_util_geom.mat4.md) \| `undefined`

#### Defined in

[src/neuroglancer/renderlayer.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L107)
