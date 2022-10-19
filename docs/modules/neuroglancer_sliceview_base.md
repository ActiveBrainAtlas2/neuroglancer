[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/base

# Module: neuroglancer/sliceview/base

## Table of contents

### References

- [DATA\_TYPE\_BYTES](neuroglancer_sliceview_base.md#data_type_bytes)
- [DataType](neuroglancer_sliceview_base.md#datatype)

### Enumerations

- [ChunkLayoutPreference](../enums/neuroglancer_sliceview_base.ChunkLayoutPreference.md)

### Classes

- [SliceViewBase](../classes/neuroglancer_sliceview_base.SliceViewBase.md)
- [SliceViewProjectionParameters](../classes/neuroglancer_sliceview_base.SliceViewProjectionParameters.md)

### Interfaces

- [BaseChunkLayoutOptions](../interfaces/neuroglancer_sliceview_base.BaseChunkLayoutOptions.md)
- [ChunkLayoutOptions](../interfaces/neuroglancer_sliceview_base.ChunkLayoutOptions.md)
- [GetNearIsotropicBlockSizeOptions](../interfaces/neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md)
- [MultiscaleVolumetricDataRenderLayer](../interfaces/neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md)
- [SliceViewChunkSource](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)
- [SliceViewChunkSpecification](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)
- [SliceViewChunkSpecificationBaseOptions](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md)
- [SliceViewChunkSpecificationOptions](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecificationOptions.md)
- [SliceViewRenderLayer](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md)
- [SliceViewSourceOptions](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md)
- [TransformedSource](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)
- [VisibleLayerSources](../interfaces/neuroglancer_sliceview_base.VisibleLayerSources.md)

### Variables

- [DEFAULT\_MAX\_VOXELS\_PER\_CHUNK\_LOG2](neuroglancer_sliceview_base.md#default_max_voxels_per_chunk_log2)
- [SLICEVIEW\_ADD\_VISIBLE\_LAYER\_RPC\_ID](neuroglancer_sliceview_base.md#sliceview_add_visible_layer_rpc_id)
- [SLICEVIEW\_REMOVE\_VISIBLE\_LAYER\_RPC\_ID](neuroglancer_sliceview_base.md#sliceview_remove_visible_layer_rpc_id)
- [SLICEVIEW\_RENDERLAYER\_RPC\_ID](neuroglancer_sliceview_base.md#sliceview_renderlayer_rpc_id)
- [SLICEVIEW\_RPC\_ID](neuroglancer_sliceview_base.md#sliceview_rpc_id)

### Functions

- [estimateSliceAreaPerChunk](neuroglancer_sliceview_base.md#estimatesliceareaperchunk)
- [filterVisibleSources](neuroglancer_sliceview_base.md#filtervisiblesources)
- [forEachPlaneIntersectingVolumetricChunk](neuroglancer_sliceview_base.md#foreachplaneintersectingvolumetricchunk)
- [forEachVisibleVolumetricChunk](neuroglancer_sliceview_base.md#foreachvisiblevolumetricchunk)
- [getChunkDataSizes](neuroglancer_sliceview_base.md#getchunkdatasizes)
- [getCombinedTransform](neuroglancer_sliceview_base.md#getcombinedtransform)
- [getNearIsotropicBlockSize](neuroglancer_sliceview_base.md#getnearisotropicblocksize)
- [getNormalizedChunkLayout](neuroglancer_sliceview_base.md#getnormalizedchunklayout)
- [getTwoDimensionalBlockSizes](neuroglancer_sliceview_base.md#gettwodimensionalblocksizes)
- [makeSliceViewChunkSpecification](neuroglancer_sliceview_base.md#makesliceviewchunkspecification)

## References

### DATA\_TYPE\_BYTES

Re-exports [DATA_TYPE_BYTES](neuroglancer_util_data_type.md#data_type_bytes)

___

### DataType

Re-exports [DataType](../enums/neuroglancer_util_data_type.DataType.md)

## Variables

### DEFAULT\_MAX\_VOXELS\_PER\_CHUNK\_LOG2

• `Const` **DEFAULT\_MAX\_VOXELS\_PER\_CHUNK\_LOG2**: ``18``

By default, choose a chunk size with at most 2^18 = 262144 voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L322)

___

### SLICEVIEW\_ADD\_VISIBLE\_LAYER\_RPC\_ID

• `Const` **SLICEVIEW\_ADD\_VISIBLE\_LAYER\_RPC\_ID**: ``"SliceView.addVisibleLayer"``

#### Defined in

[src/neuroglancer/sliceview/base.ts:679](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L679)

___

### SLICEVIEW\_REMOVE\_VISIBLE\_LAYER\_RPC\_ID

• `Const` **SLICEVIEW\_REMOVE\_VISIBLE\_LAYER\_RPC\_ID**: ``"SliceView.removeVisibleLayer"``

#### Defined in

[src/neuroglancer/sliceview/base.ts:680](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L680)

___

### SLICEVIEW\_RENDERLAYER\_RPC\_ID

• `Const` **SLICEVIEW\_RENDERLAYER\_RPC\_ID**: ``"sliceview/RenderLayer"``

#### Defined in

[src/neuroglancer/sliceview/base.ts:678](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L678)

___

### SLICEVIEW\_RPC\_ID

• `Const` **SLICEVIEW\_RPC\_ID**: ``"SliceView"``

#### Defined in

[src/neuroglancer/sliceview/base.ts:677](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L677)

## Functions

### estimateSliceAreaPerChunk

▸ **estimateSliceAreaPerChunk**(`chunkLayout`, `viewMatrix`): `number`

Average cross-sectional area contained within a chunk of the specified size and rotation.

This is estimated by taking the total volume of the chunk and dividing it by the total length of
the chunk along the z axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkLayout` | [`ChunkLayout`](../classes/neuroglancer_sliceview_chunk_layout.ChunkLayout.md) |
| `viewMatrix` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L42)

___

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `renderLayer`, `sources`): [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](../classes/neuroglancer_sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `renderLayer` | [`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md) |
| `sources` | readonly [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:590](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L590)

___

### forEachPlaneIntersectingVolumetricChunk

▸ **forEachPlaneIntersectingVolumetricChunk**<`RLayer`\>(`projectionParameters`, `localPosition`, `transformedSource`, `chunkLayout`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](../interfaces/neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md) |
| `localPosition` | `Float32Array` |
| `transformedSource` | [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\> |
| `chunkLayout` | [`ChunkLayout`](../classes/neuroglancer_sliceview_chunk_layout.ChunkLayout.md) |
| `callback` | (`positionInChunks`: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L768)

___

### forEachVisibleVolumetricChunk

▸ **forEachVisibleVolumetricChunk**<`RLayer`\>(`projectionParameters`, `localPosition`, `transformedSource`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](../interfaces/neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md) |
| `localPosition` | `Float32Array` |
| `transformedSource` | [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\> |
| `callback` | (`positionInChunks`: [`vec3`](../classes/neuroglancer_util_geom.vec3.md), `clippingPlanes`: `Float32Array`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:739](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L739)

___

### getChunkDataSizes

▸ **getChunkDataSizes**(`options`): `Uint32Array`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChunkLayoutOptions`](../interfaces/neuroglancer_sliceview_base.ChunkLayoutOptions.md) & [`BaseChunkLayoutOptions`](../interfaces/neuroglancer_sliceview_base.BaseChunkLayoutOptions.md) |

#### Returns

`Uint32Array`[]

#### Defined in

[src/neuroglancer/sliceview/base.ts:525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L525)

___

### getCombinedTransform

▸ **getCombinedTransform**(`rank`, `bToC`, `aToB`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |
| `bToC` | `Float32Array` |
| `aToB` | `undefined` \| `Float32Array` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L498)

___

### getNearIsotropicBlockSize

▸ **getNearIsotropicBlockSize**(`options`): `Uint32Array`

Determines a near-isotropic (in camera view space) block size.  All dimensions will be
powers of 2, and will not exceed upperVoxelBound - lowerVoxelBound.  The total number of voxels
will not exceed maxVoxelsPerChunkLog2.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetNearIsotropicBlockSizeOptions`](../interfaces/neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md) |

#### Returns

`Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L371)

___

### getNormalizedChunkLayout

▸ **getNormalizedChunkLayout**(`projectionParameters`, `chunkLayout`): [`ChunkLayout`](../classes/neuroglancer_sliceview_chunk_layout.ChunkLayout.md)

For chunk layouts with finiteRank < 3, returns an adjusted chunk layout where chunk 0 in each
non-finite dimension is guaranteed to cover the viewport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md) |
| `chunkLayout` | [`ChunkLayout`](../classes/neuroglancer_sliceview_chunk_layout.ChunkLayout.md) |

#### Returns

[`ChunkLayout`](../classes/neuroglancer_sliceview_chunk_layout.ChunkLayout.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:839](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L839)

___

### getTwoDimensionalBlockSizes

▸ **getTwoDimensionalBlockSizes**(`options`): `Uint32Array`[]

Returns an array of [xy, yz, xz] 2-dimensional block sizes, where [x, y, z] refer to the view
dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`BaseChunkLayoutOptions`](../interfaces/neuroglancer_sliceview_base.BaseChunkLayoutOptions.md) |

#### Returns

`Uint32Array`[]

#### Defined in

[src/neuroglancer/sliceview/base.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L453)

___

### makeSliceViewChunkSpecification

▸ **makeSliceViewChunkSpecification**<`ChunkDataSize`\>(`options`): [`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`ChunkDataSize`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChunkDataSize` | extends `Uint32Array` \| `Float32Array` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewChunkSpecificationOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecificationOptions.md)<`ChunkDataSize`\> |

#### Returns

[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`ChunkDataSize`\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L562)
