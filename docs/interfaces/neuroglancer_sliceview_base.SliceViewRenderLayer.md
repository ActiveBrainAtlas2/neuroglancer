[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewRenderLayer

# Interface: SliceViewRenderLayer

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewRenderLayer

## Implemented by

- [`SliceViewRenderLayerBackend`](../classes/neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md)

## Table of contents

### Properties

- [localPosition](neuroglancer_sliceview_base.SliceViewRenderLayer.md#localposition)
- [renderScaleTarget](neuroglancer_sliceview_base.SliceViewRenderLayer.md#renderscaletarget)

### Methods

- [filterVisibleSources](neuroglancer_sliceview_base.SliceViewRenderLayer.md#filtervisiblesources)

## Properties

### localPosition

• **localPosition**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Current position of non-global layer dimensions.

#### Defined in

[src/neuroglancer/sliceview/base.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L153)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L154)

## Methods

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](main_module._internal_.Iterable.md)<[`TransformedSource`](neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](../classes/neuroglancer_sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`TransformedSource`](neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](main_module._internal_.Iterable.md)<[`TransformedSource`](neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L156)
