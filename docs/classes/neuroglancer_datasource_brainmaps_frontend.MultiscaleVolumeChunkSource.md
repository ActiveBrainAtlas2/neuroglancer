[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md) / MultiscaleVolumeChunkSource

# Class: MultiscaleVolumeChunkSource

[neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md).MultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

  ↳ **`MultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#constructor)

### Properties

- [changeSpec](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#changespec)
- [chunkLayoutPreference](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#chunklayoutpreference)
- [chunkManager](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)
- [credentialsProvider](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#credentialsprovider)
- [encoding](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#encoding)
- [instance](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#instance)
- [jpegQuality](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#jpegquality)
- [multiscaleVolumeInfo](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#multiscalevolumeinfo)
- [volumeId](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#volumeid)
- [volumeType](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#volumetype)

### Accessors

- [dataType](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#datatype)
- [rank](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#rank)
- [scales](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#scales)

### Methods

- [getSources](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleVolumeChunkSource**(`chunkManager`, `instance`, `credentialsProvider`, `volumeId`, `changeSpec`, `multiscaleVolumeInfo`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `instance` | [`BrainmapsInstance`](../interfaces/neuroglancer_datasource_brainmaps_api.BrainmapsInstance.md) |
| `credentialsProvider` | [`BrainmapsCredentialsProvider`](../modules/neuroglancer_datasource_brainmaps_api.md#brainmapscredentialsprovider) |
| `volumeId` | `string` |
| `changeSpec` | `undefined` \| [`ChangeSpec`](neuroglancer_datasource_brainmaps_base.ChangeSpec.md) |
| `multiscaleVolumeInfo` | [`MultiscaleVolumeInfo`](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md) |
| `options` | [`GetBrainmapsVolumeOptions`](../interfaces/neuroglancer_datasource_brainmaps_frontend.GetBrainmapsVolumeOptions.md) |

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[constructor](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L314)

## Properties

### changeSpec

• **changeSpec**: `undefined` \| [`ChangeSpec`](neuroglancer_datasource_brainmaps_base.ChangeSpec.md)

___

### chunkLayoutPreference

• **chunkLayoutPreference**: `undefined` \| [`ChunkLayoutPreference`](../enums/neuroglancer_sliceview_base.ChunkLayoutPreference.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L313)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[chunkManager](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)

___

### credentialsProvider

• **credentialsProvider**: [`BrainmapsCredentialsProvider`](../modules/neuroglancer_datasource_brainmaps_api.md#brainmapscredentialsprovider)

___

### encoding

• **encoding**: `undefined` \| [`VolumeChunkEncoding`](../enums/neuroglancer_datasource_brainmaps_base.VolumeChunkEncoding.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L311)

___

### instance

• **instance**: [`BrainmapsInstance`](../interfaces/neuroglancer_datasource_brainmaps_api.BrainmapsInstance.md)

___

### jpegQuality

• **jpegQuality**: `number`

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L312)

___

### multiscaleVolumeInfo

• **multiscaleVolumeInfo**: [`MultiscaleVolumeInfo`](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md)

___

### volumeId

• **volumeId**: `string`

___

### volumeType

• **volumeType**: [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[volumeType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#volumetype)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L300)

## Accessors

### dataType

• `get` **dataType**(): [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Returns

[`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Overrides

GenericMultiscaleVolumeChunkSource.dataType

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L304)

___

### rank

• `get` **rank**(): ``3`` \| ``4``

#### Returns

``3`` \| ``4``

#### Overrides

GenericMultiscaleVolumeChunkSource.rank

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L307)

___

### scales

• `get` **scales**(): [`VolumeInfo`](neuroglancer_datasource_brainmaps_frontend.VolumeInfo.md)[]

#### Returns

[`VolumeInfo`](neuroglancer_datasource_brainmaps_frontend.VolumeInfo.md)[]

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L301)

## Methods

### getSources

▸ **getSources**(`volumeSourceOptions`): { `chunkSource`: [`BrainmapsVolumeChunkSource`](neuroglancer_datasource_brainmaps_frontend._internal_.BrainmapsVolumeChunkSource.md) ; `chunkToMultiscaleTransform`: `Float32Array` = transform; `upperClipBound`: `Float32Array`  }[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeSourceOptions` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |

#### Returns

{ `chunkSource`: [`BrainmapsVolumeChunkSource`](neuroglancer_datasource_brainmaps_frontend._internal_.BrainmapsVolumeChunkSource.md) ; `chunkToMultiscaleTransform`: `Float32Array` = transform; `upperClipBound`: `Float32Array`  }[][]

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[getSources](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L332)
