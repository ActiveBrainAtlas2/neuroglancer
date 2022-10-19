[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md) / PythonMultiscaleVolumeChunkSource

# Class: PythonMultiscaleVolumeChunkSource

[neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md).PythonMultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

  ↳ **`PythonMultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#constructor)

### Properties

- [chunkLayoutPreference](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#chunklayoutpreference)
- [chunkManager](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#chunkmanager)
- [dataSource](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#datasource)
- [dataType](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#datatype)
- [downsamplingLayout](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#downsamplinglayout)
- [encoding](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#encoding)
- [generation](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#generation)
- [key](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#key)
- [maxDownsampledSize](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#maxdownsampledsize)
- [maxDownsampling](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#maxdownsampling)
- [maxDownsamplingScales](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#maxdownsamplingscales)
- [maxVoxelsPerChunkLog2](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#maxvoxelsperchunklog2)
- [modelSpace](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#modelspace)
- [response](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#response)
- [shape](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#shape)
- [skeletonVertexAttributes](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#skeletonvertexattributes)
- [subsourceToModelTransform](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#subsourcetomodeltransform)
- [volumeType](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#volumetype)

### Accessors

- [rank](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#rank)

### Methods

- [getMeshSource](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#getmeshsource)
- [getSources](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new PythonMultiscaleVolumeChunkSource**(`dataSource`, `chunkManager`, `key`, `response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataSource` | [`PythonDataSource`](neuroglancer_datasource_python_frontend.PythonDataSource.md) |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `key` | `string` |
| `response` | `any` |

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[constructor](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L169)

## Properties

### chunkLayoutPreference

• **chunkLayoutPreference**: [`ChunkLayoutPreference`](../enums/neuroglancer_sliceview_base.ChunkLayoutPreference.md)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L155)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[chunkManager](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)

___

### dataSource

• **dataSource**: [`PythonDataSource`](neuroglancer_datasource_python_frontend.PythonDataSource.md)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[dataType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#datatype)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L149)

___

### downsamplingLayout

• **downsamplingLayout**: [`ChunkLayoutPreference`](../enums/neuroglancer_sliceview_base.ChunkLayoutPreference.md)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L154)

___

### encoding

• **encoding**: [`VolumeChunkEncoding`](../enums/neuroglancer_datasource_python_base.VolumeChunkEncoding.md)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L151)

___

### generation

• **generation**: `number`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L152)

___

### key

• **key**: `string`

___

### maxDownsampledSize

• **maxDownsampledSize**: `number`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L158)

___

### maxDownsampling

• **maxDownsampling**: `number`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L157)

___

### maxDownsamplingScales

• **maxDownsamplingScales**: `number`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L159)

___

### maxVoxelsPerChunkLog2

• **maxVoxelsPerChunkLog2**: `number`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L160)

___

### modelSpace

• **modelSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L153)

___

### response

• **response**: `any`

___

### shape

• **shape**: `Float32Array`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L156)

___

### skeletonVertexAttributes

• **skeletonVertexAttributes**: `undefined` \| `Map`<`string`, [`VertexAttributeInfo`](../interfaces/neuroglancer_skeleton_base.VertexAttributeInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L166)

___

### subsourceToModelTransform

• **subsourceToModelTransform**: `Float32Array`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L161)

___

### volumeType

• **volumeType**: [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[volumeType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#volumetype)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L150)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Overrides

MultiscaleVolumeChunkSource.rank

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L163)

## Methods

### getMeshSource

▸ **getMeshSource**(): [`PythonMeshSource`](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md) \| [`PythonSkeletonSource`](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md)

#### Returns

[`PythonMeshSource`](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md) \| [`PythonSkeletonSource`](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L309)

___

### getSources

▸ **getSources**(`volumeSourceOptions`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeSourceOptions` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[getSources](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L220)
