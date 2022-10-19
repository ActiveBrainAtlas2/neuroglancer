[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](layer.md) / <internal\>

# Module: <internal\>

## Table of contents

### Enumerations

- [LocalDataSource](../enums/layer._internal_.LocalDataSource.md)
- [VertexPositionFormat](../enums/layer._internal_.VertexPositionFormat.md)
- [VolumeType](../enums/layer._internal_.VolumeType.md)

### Classes

- [C](../classes/layer._internal_.C.md)
- [CredentialsProvider](../classes/layer._internal_.CredentialsProvider.md)
- [DataSourceProvider](../classes/layer._internal_.DataSourceProvider.md)
- [DataSourceProviderRegistry](../classes/layer._internal_.DataSourceProviderRegistry.md)
- [FragmentChunk](../classes/layer._internal_.FragmentChunk.md)
- [FragmentSource](../classes/layer._internal_.FragmentSource.md)
- [ManifestChunk](../classes/layer._internal_.ManifestChunk.md)
- [MeshSource](../classes/layer._internal_.MeshSource.md)
- [MultiscaleFragmentChunk](../classes/layer._internal_.MultiscaleFragmentChunk.md)
- [MultiscaleFragmentSource](../classes/layer._internal_.MultiscaleFragmentSource.md)
- [MultiscaleManifestChunk](../classes/layer._internal_.MultiscaleManifestChunk.md)
- [MultiscaleMeshSource](../classes/layer._internal_.MultiscaleMeshSource.md)
- [MultiscaleVolumeChunkSource](../classes/layer._internal_.MultiscaleVolumeChunkSource.md)
- [SegmentationGraphSource](../classes/layer._internal_.SegmentationGraphSource.md)
- [SegmentationGraphSourceConnection](../classes/layer._internal_.SegmentationGraphSourceConnection.md)
- [SingleMeshChunk](../classes/layer._internal_.SingleMeshChunk.md)
- [SingleMeshSource](../classes/layer._internal_.SingleMeshSource.md)
- [SingleMeshSourceParameters](../classes/layer._internal_.SingleMeshSourceParameters.md)
- [SingleMeshSourceParametersWithInfo](../classes/layer._internal_.SingleMeshSourceParametersWithInfo.md)
- [SkeletonChunk](../classes/layer._internal_.SkeletonChunk.md)
- [SkeletonSource](../classes/layer._internal_.SkeletonSource.md)
- [TextureFormat](../classes/layer._internal_.TextureFormat.md)
- [VertexChunkData](../classes/layer._internal_.VertexChunkData.md)
- [VolumeChunk](../classes/layer._internal_.VolumeChunk.md)
- [VolumeChunkSource](../classes/layer._internal_.VolumeChunkSource.md)

### Interfaces

- [BasicCompletionResult](../interfaces/layer._internal_.BasicCompletionResult.md)
- [CancellationToken](../interfaces/layer._internal_.CancellationToken.md)
- [ChunkFormat](../interfaces/layer._internal_.ChunkFormat.md)
- [ChunkFormatHandler](../interfaces/layer._internal_.ChunkFormatHandler.md)
- [CompleteUrlOptions](../interfaces/layer._internal_.CompleteUrlOptions.md)
- [CompleteUrlOptionsBase](../interfaces/layer._internal_.CompleteUrlOptionsBase.md)
- [Completion](../interfaces/layer._internal_.Completion.md)
- [CompletionWithDescription](../interfaces/layer._internal_.CompletionWithDescription.md)
- [ComputedSplit](../interfaces/layer._internal_.ComputedSplit.md)
- [ConvertLegacyUrlOptions](../interfaces/layer._internal_.ConvertLegacyUrlOptions.md)
- [ConvertLegacyUrlOptionsBase](../interfaces/layer._internal_.ConvertLegacyUrlOptionsBase.md)
- [CredentialsManager](../interfaces/layer._internal_.CredentialsManager.md)
- [CredentialsWithGeneration](../interfaces/layer._internal_.CredentialsWithGeneration.md)
- [DataSource](../interfaces/layer._internal_.DataSource.md)
- [DataSubsource](../interfaces/layer._internal_.DataSubsource.md)
- [DataSubsourceEntry](../interfaces/layer._internal_.DataSubsourceEntry.md)
- [EncodedMeshData](../interfaces/layer._internal_.EncodedMeshData.md)
- [Generator](../interfaces/layer._internal_.Generator.md)
- [GetDataSourceOptions](../interfaces/layer._internal_.GetDataSourceOptions.md)
- [GetDataSourceOptionsBase](../interfaces/layer._internal_.GetDataSourceOptionsBase.md)
- [MeshSourceOptions](../interfaces/layer._internal_.MeshSourceOptions.md)
- [MultiscaleFragmentFormat](../interfaces/layer._internal_.MultiscaleFragmentFormat.md)
- [MultiscaleMeshManifest](../interfaces/layer._internal_.MultiscaleMeshManifest.md)
- [MultiscaleMeshSourceOptions](../interfaces/layer._internal_.MultiscaleMeshSourceOptions.md)
- [NormalizeUrlOptions](../interfaces/layer._internal_.NormalizeUrlOptions.md)
- [NormalizeUrlOptionsBase](../interfaces/layer._internal_.NormalizeUrlOptionsBase.md)
- [SignalBindingUpdater](../interfaces/layer._internal_.SignalBindingUpdater.md)
- [SingleMeshInfo](../interfaces/layer._internal_.SingleMeshInfo.md)
- [SkeletonSourceOptions](../interfaces/layer._internal_.SkeletonSourceOptions.md)
- [VertexAttributeInfo](../interfaces/layer._internal_.VertexAttributeInfo.md)
- [VertexAttributeInfo](../interfaces/layer._internal_.VertexAttributeInfo-1.md)
- [VolumeChunkSource](../interfaces/layer._internal_.VolumeChunkSource-1.md)
- [VolumeChunkSpecification](../interfaces/layer._internal_.VolumeChunkSpecification.md)
- [VolumeSourceOptions](../interfaces/layer._internal_.VolumeSourceOptions.md)

### Type Aliases

- [AnyConstructor](layer._internal_.md#anyconstructor)
- [CompletionResult](layer._internal_.md#completionresult)
- [EncodedVertexPositions](layer._internal_.md#encodedvertexpositions)
- [InstanceType](layer._internal_.md#instancetype)
- [MeshVertexIndices](layer._internal_.md#meshvertexindices)
- [ShaderSamplerPrefix](layer._internal_.md#shadersamplerprefix)
- [TypedArrayConstructor](layer._internal_.md#typedarrayconstructor)
- [WithParametersOptions](layer._internal_.md#withparametersoptions)

### Variables

- [Base](layer._internal_.md#base)

## Type Aliases

### AnyConstructor

Ƭ **AnyConstructor**<`T`\>: `Object`

**`license`**
Copyright 2019 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/neuroglancer/util/mixin.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/mixin.ts#L17)

___

### CompletionResult

Ƭ **CompletionResult**: [`BasicCompletionResult`](../interfaces/layer._internal_.BasicCompletionResult.md)<[`CompletionWithDescription`](../interfaces/layer._internal_.CompletionWithDescription.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L34)

___

### EncodedVertexPositions

Ƭ **EncodedVertexPositions**: `Float32Array` \| `Uint32Array` \| `Uint16Array`

#### Defined in

[src/neuroglancer/mesh/base.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/base.ts#L23)

___

### InstanceType

Ƭ **InstanceType**<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a constructor function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1607

___

### MeshVertexIndices

Ƭ **MeshVertexIndices**: `Uint16Array` \| `Uint32Array`

#### Defined in

[src/neuroglancer/mesh/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/base.ts#L24)

___

### ShaderSamplerPrefix

Ƭ **ShaderSamplerPrefix**: ``"i"`` \| ``"u"`` \| ``""``

#### Defined in

[src/neuroglancer/webgl/shader.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L327)

___

### TypedArrayConstructor

Ƭ **TypedArrayConstructor**: typeof `Int8Array` \| typeof `Uint8Array` \| typeof `Int16Array` \| typeof `Uint16Array` \| typeof `Int32Array` \| typeof `Uint32Array` \| typeof `Float32Array` \| typeof `Float64Array`

#### Defined in

[src/neuroglancer/util/array.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/array.ts#L60)

___

### WithParametersOptions

Ƭ **WithParametersOptions**: [`InstanceType`](layer._internal_.md#instancetype)<`TBase`\>[``"OPTIONS"``] & { `parameters`: `Parameters`  }

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:413](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L413)

## Variables

### Base

• **Base**: `TBase`
