[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/volume/base

# Module: neuroglancer/sliceview/volume/base

## Table of contents

### References

- [DATA\_TYPE\_BYTES](neuroglancer_sliceview_volume_base.md#data_type_bytes)
- [DataType](neuroglancer_sliceview_volume_base.md#datatype)

### Enumerations

- [VolumeType](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

### Interfaces

- [RenderLayer](../interfaces/neuroglancer_sliceview_volume_base.RenderLayer.md)
- [VolumeChunkSource](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSource.md)
- [VolumeChunkSpecification](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)
- [VolumeChunkSpecificationBaseOptions](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md)
- [VolumeChunkSpecificationDefaultCompressionOptions](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md)
- [VolumeChunkSpecificationGetDefaultsOptions](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md)
- [VolumeChunkSpecificationOptions](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationOptions.md)
- [VolumeChunkSpecificationVolumeSourceOptions](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationVolumeSourceOptions.md)
- [VolumeSourceOptions](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md)

### Variables

- [DEFAULT\_MAX\_VOXELS\_PER\_CHUNK\_LOG2](neuroglancer_sliceview_volume_base.md#default_max_voxels_per_chunk_log2)
- [VOLUME\_RPC\_ID](neuroglancer_sliceview_volume_base.md#volume_rpc_id)

### Functions

- [makeDefaultVolumeChunkSpecifications](neuroglancer_sliceview_volume_base.md#makedefaultvolumechunkspecifications)
- [makeVolumeChunkSpecification](neuroglancer_sliceview_volume_base.md#makevolumechunkspecification)
- [makeVolumeChunkSpecificationWithDefaultCompression](neuroglancer_sliceview_volume_base.md#makevolumechunkspecificationwithdefaultcompression)

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

[src/neuroglancer/sliceview/volume/base.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L41)

___

### VOLUME\_RPC\_ID

• `Const` **VOLUME\_RPC\_ID**: ``"volume"``

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L252)

## Functions

### makeDefaultVolumeChunkSpecifications

▸ **makeDefaultVolumeChunkSpecifications**(`options`): [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeChunkSpecificationGetDefaultsOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md) |

#### Returns

[`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)[]

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L207)

___

### makeVolumeChunkSpecification

▸ **makeVolumeChunkSpecification**(`options`): [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeChunkSpecificationOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationOptions.md) |

#### Returns

[`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L119)

___

### makeVolumeChunkSpecificationWithDefaultCompression

▸ **makeVolumeChunkSpecificationWithDefaultCompression**(`options`): [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

Returns a VolumeChunkSpecification with default compression specified if suitable for the
volumeType.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeChunkSpecificationDefaultCompressionOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md) & [`VolumeChunkSpecificationOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationOptions.md) & [`VolumeChunkSpecificationVolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecificationVolumeSourceOptions.md) |

#### Returns

[`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L167)
