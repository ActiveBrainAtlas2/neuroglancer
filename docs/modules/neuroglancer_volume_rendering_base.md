[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/volume\_rendering/base

# Module: neuroglancer/volume\_rendering/base

## Table of contents

### Variables

- [VOLUME\_RENDERING\_RENDER\_LAYER\_RPC\_ID](neuroglancer_volume_rendering_base.md#volume_rendering_render_layer_rpc_id)
- [VOLUME\_RENDERING\_RENDER\_LAYER\_UPDATE\_SOURCES\_RPC\_ID](neuroglancer_volume_rendering_base.md#volume_rendering_render_layer_update_sources_rpc_id)
- [volumeRenderingDepthSamples](neuroglancer_volume_rendering_base.md#volumerenderingdepthsamples)

### Functions

- [forEachVisibleVolumeRenderingChunk](neuroglancer_volume_rendering_base.md#foreachvisiblevolumerenderingchunk)
- [getVolumeRenderingNearFarBounds](neuroglancer_volume_rendering_base.md#getvolumerenderingnearfarbounds)

## Variables

### VOLUME\_RENDERING\_RENDER\_LAYER\_RPC\_ID

• `Const` **VOLUME\_RENDERING\_RENDER\_LAYER\_RPC\_ID**: ``"volume_rendering/VolumeRenderingRenderLayer"``

#### Defined in

[src/neuroglancer/volume_rendering/base.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/base.ts#L22)

___

### VOLUME\_RENDERING\_RENDER\_LAYER\_UPDATE\_SOURCES\_RPC\_ID

• `Const` **VOLUME\_RENDERING\_RENDER\_LAYER\_UPDATE\_SOURCES\_RPC\_ID**: ``"volume_rendering/VolumeRenderingRenderLayer/update"``

#### Defined in

[src/neuroglancer/volume_rendering/base.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/base.ts#L23)

___

### volumeRenderingDepthSamples

• `Const` **volumeRenderingDepthSamples**: ``64``

#### Defined in

[src/neuroglancer/volume_rendering/base.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/base.ts#L27)

## Functions

### forEachVisibleVolumeRenderingChunk

▸ **forEachVisibleVolumeRenderingChunk**<`RLayer`, `Source`, `Transformed`\>(`projectionParameters`, `localPosition`, `renderScaleTarget`, `transformedSources`, `beginScale`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](../interfaces/neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |
| `Source` | extends [`VolumeChunkSource`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSource.md)<`Source`\> |
| `Transformed` | extends [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, `Source`, `Transformed`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md) |
| `localPosition` | `Float32Array` |
| `renderScaleTarget` | `number` |
| `transformedSources` | readonly `Transformed`[] |
| `beginScale` | (`source`: `Transformed`, `index`: `number`, `physicalSpacing`: `number`, `pixelSpacing`: `number`, `clippingPlanes`: `Float32Array`) => `void` |
| `callback` | (`source`: `Transformed`, `index`: `number`, `positionInChunks`: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/volume_rendering/base.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/base.ts#L67)

___

### getVolumeRenderingNearFarBounds

▸ **getVolumeRenderingNearFarBounds**(`clippingPlanes`, `displayLowerBound`, `displayUpperBound`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clippingPlanes` | `Float32Array` |
| `displayLowerBound` | `Float32Array` |
| `displayUpperBound` | `Float32Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adjustedFar` | `number` |
| `adjustedNear` | `number` |
| `far` | `number` |
| `near` | `number` |

#### Defined in

[src/neuroglancer/volume_rendering/base.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/base.ts#L33)
