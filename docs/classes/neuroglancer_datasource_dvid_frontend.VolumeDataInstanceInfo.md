[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/dvid/frontend](../modules/neuroglancer_datasource_dvid_frontend.md) / VolumeDataInstanceInfo

# Class: VolumeDataInstanceInfo

[neuroglancer/datasource/dvid/frontend](../modules/neuroglancer_datasource_dvid_frontend.md).VolumeDataInstanceInfo

## Hierarchy

- [`DataInstanceInfo`](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md)

  ↳ **`VolumeDataInstanceInfo`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#constructor)

### Properties

- [base](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#base)
- [blockSize](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#blocksize)
- [dataType](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#datatype)
- [encoding](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#encoding)
- [lowerVoxelBound](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#lowervoxelbound)
- [meshSrc](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#meshsrc)
- [name](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#name)
- [numLevels](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#numlevels)
- [obj](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#obj)
- [skeletonSrc](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#skeletonsrc)
- [upperVoxelBoundInclusive](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#uppervoxelboundinclusive)
- [voxelSize](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#voxelsize)

### Accessors

- [volumeType](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#volumetype)

### Methods

- [getSources](neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md#getsources)

## Constructors

### constructor

• **new VolumeDataInstanceInfo**(`obj`, `name`, `base`, `encoding`, `instanceNames`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `name` | `string` |
| `base` | [`DataInstanceBaseInfo`](neuroglancer_datasource_dvid_frontend.DataInstanceBaseInfo.md) |
| `encoding` | [`VolumeChunkEncoding`](../enums/neuroglancer_datasource_dvid_base.VolumeChunkEncoding.md) |
| `instanceNames` | `string`[] |

#### Overrides

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[constructor](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#constructor)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L85)

## Properties

### base

• **base**: [`DataInstanceBaseInfo`](neuroglancer_datasource_dvid_frontend.DataInstanceBaseInfo.md)

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[base](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#base)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L68)

___

### blockSize

• **blockSize**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[blockSize](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#blocksize)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L65)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L81)

___

### encoding

• **encoding**: [`VolumeChunkEncoding`](../enums/neuroglancer_datasource_dvid_base.VolumeChunkEncoding.md)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L86)

___

### lowerVoxelBound

• **lowerVoxelBound**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[lowerVoxelBound](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L62)

___

### meshSrc

• **meshSrc**: `string`

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L82)

___

### name

• **name**: `string`

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[name](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#name)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L68)

___

### numLevels

• **numLevels**: `number`

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[numLevels](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#numlevels)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L66)

___

### obj

• **obj**: `any`

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[obj](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#obj)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L68)

___

### skeletonSrc

• **skeletonSrc**: `string`

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L83)

___

### upperVoxelBoundInclusive

• **upperVoxelBoundInclusive**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[upperVoxelBoundInclusive](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#uppervoxelboundinclusive)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L63)

___

### voxelSize

• **voxelSize**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[DataInstanceInfo](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md).[voxelSize](neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md#voxelsize)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L64)

## Accessors

### volumeType

• `get` **volumeType**(): [`IMAGE`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md#image) \| [`SEGMENTATION`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md#segmentation)

#### Returns

[`IMAGE`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md#image) \| [`SEGMENTATION`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md#segmentation)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L138)

## Methods

### getSources

▸ **getSources**(`chunkManager`, `parameters`, `volumeSourceOptions`, `credentialsProvider`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `parameters` | [`DVIDSourceParameters`](neuroglancer_datasource_dvid_base.DVIDSourceParameters.md) |
| `volumeSourceOptions` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |
| `credentialsProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\> |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/dvid/frontend.ts#L146)
