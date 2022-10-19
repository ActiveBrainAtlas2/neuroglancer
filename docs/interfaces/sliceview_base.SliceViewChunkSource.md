[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / SliceViewChunkSource

# Interface: SliceViewChunkSource<Spec\>

[sliceview/base](../modules/sliceview_base.md).SliceViewChunkSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md) = [`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md) |

## Hierarchy

- [`Disposable`](util_disposable.Disposable.md)

  ↳ **`SliceViewChunkSource`**

  ↳↳ [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource-1.md)

## Implemented by

- [`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)
- [`SliceViewChunkSourceBackend`](../classes/sliceview_backend.SliceViewChunkSourceBackend.md)

## Table of contents

### Properties

- [spec](sliceview_base.SliceViewChunkSource.md#spec)

### Methods

- [dispose](sliceview_base.SliceViewChunkSource.md#dispose)

## Properties

### spec

• **spec**: `Spec`

#### Defined in

[src/neuroglancer/sliceview/base.ts:674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L674)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Disposable](util_disposable.Disposable.md).[dispose](util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L17)
