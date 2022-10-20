[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/python/frontend

# Module: neuroglancer/datasource/python/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_datasource_python_frontend._internal_.md)

### Classes

- [PythonDataSource](../classes/neuroglancer_datasource_python_frontend.PythonDataSource.md)
- [PythonMultiscaleVolumeChunkSource](../classes/neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md)
- [PythonSkeletonSource](../classes/neuroglancer_datasource_python_frontend.PythonSkeletonSource.md)

### Functions

- [computeNearIsotropicDownsamplingLevels](neuroglancer_datasource_python_frontend.md#computenearisotropicdownsamplinglevels)

## Functions

### computeNearIsotropicDownsamplingLevels

▸ **computeNearIsotropicDownsamplingLevels**(`shape`, `downsampleDims`, `effectiveVoxelSize`, `maxDownsampling`, `maxDownsamplingScales`, `maxDownsampledSize`): `Float32Array`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `Float32Array` |
| `downsampleDims` | readonly `number`[] |
| `effectiveVoxelSize` | `Float32Array` |
| `maxDownsampling` | `number` |
| `maxDownsamplingScales` | `number` |
| `maxDownsampledSize` | `number` |

#### Returns

`Float32Array`[]

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/python/frontend.ts#L84)
