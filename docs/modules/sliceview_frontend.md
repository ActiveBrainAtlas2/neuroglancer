[neuroglancer](../README.md) / [Modules](../modules.md) / sliceview/frontend

# Module: sliceview/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](sliceview_frontend._internal_.md)

### Classes

- [MultiscaleSliceViewChunkSource](../classes/sliceview_frontend.MultiscaleSliceViewChunkSource.md)
- [SliceView](../classes/sliceview_frontend.SliceView.md)
- [SliceViewChunk](../classes/sliceview_frontend.SliceViewChunk.md)
- [SliceViewChunkSource](../classes/sliceview_frontend.SliceViewChunkSource.md)
- [SliceViewRenderHelper](../classes/sliceview_frontend.SliceViewRenderHelper.md)

### Interfaces

- [FrontendTransformedSource](../interfaces/sliceview_frontend.FrontendTransformedSource.md)
- [SliceViewChunkSourceOptions](../interfaces/sliceview_frontend.SliceViewChunkSourceOptions.md)
- [SliceViewSingleResolutionSource](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)

### Type Aliases

- [GenericChunkKey](sliceview_frontend.md#genericchunkkey)

### Functions

- [getVolumetricTransformedSources](sliceview_frontend.md#getvolumetrictransformedsources)
- [serializeAllTransformedSources](sliceview_frontend.md#serializealltransformedsources)

## Type Aliases

### GenericChunkKey

Ƭ **GenericChunkKey**: `string`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L43)

## Functions

### getVolumetricTransformedSources

▸ **getVolumetricTransformedSources**(`displayDimensionRenderInfo`, `transform`, `getSources`, `messages`, `layer`): [`FrontendTransformedSource`](../interfaces/sliceview_frontend.FrontendTransformedSource.md)[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayDimensionRenderInfo` | [`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md) |
| `transform` | [`RenderLayerTransformOrError`](annotation_annotation_layer_state._internal_.md#renderlayertransformorerror) |
| `getSources` | (`options`: [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)) => [`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<[`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>\>[][] |
| `messages` | [`MessageList`](../classes/util_message_list.MessageList.md) |
| `layer` | `any` |

#### Returns

[`FrontendTransformedSource`](../interfaces/sliceview_frontend.FrontendTransformedSource.md)[][]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:612](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L612)

___

### serializeAllTransformedSources

▸ **serializeAllTransformedSources**(`allSources`): { `chunkDisplayDimensionIndices`: `number`[] = tsource.chunkDisplayDimensionIndices; `chunkLayout`: { `finiteRank`: `number` ; `size`: [`vec3`](../classes/util_geom.vec3.md) ; `transform`: [`mat4`](../classes/util_geom.mat4.md)  } ; `combinedGlobalLocalToChunkTransform`: `Float32Array` = tsource.combinedGlobalLocalToChunkTransform; `effectiveVoxelSize`: [`vec3`](../classes/util_geom.vec3.md) = tsource.effectiveVoxelSize; `fixedLayerToChunkTransform`: `Float32Array` = tsource.fixedLayerToChunkTransform; `layerRank`: `number` = tsource.layerRank; `lowerChunkDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.lowerChunkDisplayBound; `lowerClipBound`: `Float32Array` = tsource.lowerClipBound; `lowerClipDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.lowerClipDisplayBound; `nonDisplayLowerClipBound`: `Float32Array` = tsource.nonDisplayLowerClipBound; `nonDisplayUpperClipBound`: `Float32Array` = tsource.nonDisplayUpperClipBound; `source`: { `gen`: `number` = ++this.referencedGeneration; `id`: ``null`` \| `number`  } ; `upperChunkDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.upperChunkDisplayBound; `upperClipBound`: `Float32Array` = tsource.upperClipBound; `upperClipDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.upperClipDisplayBound }[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `allSources` | [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../classes/sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>\>[][] |

#### Returns

{ `chunkDisplayDimensionIndices`: `number`[] = tsource.chunkDisplayDimensionIndices; `chunkLayout`: { `finiteRank`: `number` ; `size`: [`vec3`](../classes/util_geom.vec3.md) ; `transform`: [`mat4`](../classes/util_geom.mat4.md)  } ; `combinedGlobalLocalToChunkTransform`: `Float32Array` = tsource.combinedGlobalLocalToChunkTransform; `effectiveVoxelSize`: [`vec3`](../classes/util_geom.vec3.md) = tsource.effectiveVoxelSize; `fixedLayerToChunkTransform`: `Float32Array` = tsource.fixedLayerToChunkTransform; `layerRank`: `number` = tsource.layerRank; `lowerChunkDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.lowerChunkDisplayBound; `lowerClipBound`: `Float32Array` = tsource.lowerClipBound; `lowerClipDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.lowerClipDisplayBound; `nonDisplayLowerClipBound`: `Float32Array` = tsource.nonDisplayLowerClipBound; `nonDisplayUpperClipBound`: `Float32Array` = tsource.nonDisplayUpperClipBound; `source`: { `gen`: `number` = ++this.referencedGeneration; `id`: ``null`` \| `number`  } ; `upperChunkDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.upperChunkDisplayBound; `upperClipBound`: `Float32Array` = tsource.upperClipBound; `upperClipDisplayBound`: [`vec3`](../classes/util_geom.vec3.md) = tsource.upperClipDisplayBound }[][]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L85)
