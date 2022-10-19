[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / MultiscaleSliceViewChunkSource

# Class: MultiscaleSliceViewChunkSource<Source, SourceOptions\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).MultiscaleSliceViewChunkSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md) = [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md) |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) |

## Hierarchy

- **`MultiscaleSliceViewChunkSource`**

  ↳ [`MultiscaleVolumeChunkSource`](layer._internal_.MultiscaleVolumeChunkSource.md)

## Implemented by

- [`MultiscaleAnnotationSource`](image_user_layer._internal_.MultiscaleAnnotationSource.md)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md#constructor)

### Properties

- [chunkManager](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md#chunkmanager)

### Accessors

- [rank](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md#rank)

### Methods

- [getSources](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleSliceViewChunkSource**<`Source`, `SourceOptions`\>(`chunkManager`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md), `Source`\> = [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\> |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L609)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

## Accessors

### rank

• `Abstract` `get` **rank**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L599)

## Methods

### getSources

▸ `Abstract` **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SourceOptions` |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<`Source`\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:607](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L607)
