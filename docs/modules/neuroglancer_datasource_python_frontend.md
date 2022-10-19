[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/python/frontend

# Module: neuroglancer/datasource/python/frontend

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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

[src/neuroglancer/datasource/python/frontend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L84)
