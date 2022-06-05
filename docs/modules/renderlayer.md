[neuroglancer](../README.md) / [Modules](../modules.md) / renderlayer

# Module: renderlayer

## Table of contents

### Enumerations

- [RenderLayerRole](../enums/renderlayer.RenderLayerRole.md)

### Classes

- [DerivedProjectionParameters](../classes/renderlayer.DerivedProjectionParameters.md)
- [RenderLayer](../classes/renderlayer.RenderLayer.md)
- [SharedProjectionParameters](../classes/renderlayer.SharedProjectionParameters.md)
- [VisibilityTrackedRenderLayer](../classes/renderlayer.VisibilityTrackedRenderLayer.md)

### Interfaces

- [ThreeDimensionalReadyRenderContext](../interfaces/renderlayer.ThreeDimensionalReadyRenderContext.md)
- [ThreeDimensionalRenderContext](../interfaces/renderlayer.ThreeDimensionalRenderContext.md)
- [ThreeDimensionalRenderLayerAttachmentState](../interfaces/renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)

### Functions

- [allRenderLayerRoles](renderlayer.md#allrenderlayerroles)
- [update3dRenderLayerAttachment](renderlayer.md#update3drenderlayerattachment)

## Functions

### allRenderLayerRoles

▸ **allRenderLayerRoles**(): [`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Returns

[`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/renderlayer.ts#L41)

___

### update3dRenderLayerAttachment

▸ **update3dRenderLayerAttachment**(`transform`, `displayDimensionRenderInfo`, `attachment`): `mat4` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`RenderLayerTransformOrError`](render_coordinate_transform.md#renderlayertransformorerror) |
| `displayDimensionRenderInfo` | [`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md) |
| `attachment` | [`VisibleLayerInfo`](../classes/layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/layer.LayerView.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`mat4` \| `undefined`

#### Defined in

[src/neuroglancer/renderlayer.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/renderlayer.ts#L107)
