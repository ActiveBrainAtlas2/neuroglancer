[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / VolumeChunkSource

# Interface: VolumeChunkSource

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).VolumeChunkSource

## Hierarchy

- [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md)

  ↳ **`VolumeChunkSource`**

## Implemented by

- [`VolumeChunkSource`](../classes/datasource._internal_.VolumeChunkSource.md)

## Table of contents

### Properties

- [spec](datasource._internal_.VolumeChunkSource-1.md#spec)

### Methods

- [dispose](datasource._internal_.VolumeChunkSource-1.md#dispose)

## Properties

### spec

• **spec**: [`VolumeChunkSpecification`](datasource._internal_.VolumeChunkSpecification.md)

#### Overrides

[SliceViewChunkSource](sliceview_base.SliceViewChunkSource.md).[spec](sliceview_base.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/base.ts#L249)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](sliceview_base.SliceViewChunkSource.md).[dispose](sliceview_base.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L17)
