[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewChunkSource

# Interface: SliceViewChunkSource<Spec\>

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewChunkSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md) = [`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md) |

## Hierarchy

- [`Disposable`](neuroglancer_util_disposable.Disposable.md)

  ↳ **`SliceViewChunkSource`**

  ↳↳ [`VolumeChunkSource`](neuroglancer_sliceview_volume_base.VolumeChunkSource.md)

## Implemented by

- [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)
- [`SliceViewChunkSourceBackend`](../classes/neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)

## Table of contents

### Properties

- [spec](neuroglancer_sliceview_base.SliceViewChunkSource.md#spec)

### Methods

- [dispose](neuroglancer_sliceview_base.SliceViewChunkSource.md#dispose)

## Properties

### spec

• **spec**: `Spec`

#### Defined in

[src/neuroglancer/sliceview/base.ts:674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L674)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Disposable](neuroglancer_util_disposable.Disposable.md).[dispose](neuroglancer_util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L17)
