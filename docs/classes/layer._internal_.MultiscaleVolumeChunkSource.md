[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / MultiscaleVolumeChunkSource

# Class: MultiscaleVolumeChunkSource

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).MultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleSliceViewChunkSource`](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md)<[`VolumeChunkSource`](layer._internal_.VolumeChunkSource.md), [`VolumeSourceOptions`](../interfaces/layer._internal_.VolumeSourceOptions.md)\>

  ↳ **`MultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](layer._internal_.MultiscaleVolumeChunkSource.md#constructor)

### Properties

- [chunkManager](layer._internal_.MultiscaleVolumeChunkSource.md#chunkmanager)
- [dataType](layer._internal_.MultiscaleVolumeChunkSource.md#datatype)
- [volumeType](layer._internal_.MultiscaleVolumeChunkSource.md#volumetype)

### Accessors

- [rank](layer._internal_.MultiscaleVolumeChunkSource.md#rank)

### Methods

- [getSources](layer._internal_.MultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleVolumeChunkSource**(`chunkManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |

#### Inherited from

[MultiscaleSliceViewChunkSource](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md).[constructor](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L609)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

[MultiscaleSliceViewChunkSource](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md).[chunkManager](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md#chunkmanager)

___

### dataType

• `Abstract` **dataType**: [`DataType`](../enums/image_user_layer._internal_.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L244)

___

### volumeType

• `Abstract` **volumeType**: [`VolumeType`](../enums/layer._internal_.VolumeType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L245)

## Accessors

### rank

• `Abstract` `get` **rank**(): `number`

#### Returns

`number`

#### Inherited from

MultiscaleSliceViewChunkSource.rank

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L599)

## Methods

### getSources

▸ `Abstract` **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](layer._internal_.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeSourceOptions`](../interfaces/layer._internal_.VolumeSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](layer._internal_.VolumeChunkSource.md)\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Inherited from

[MultiscaleSliceViewChunkSource](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md).[getSources](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:607](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L607)
