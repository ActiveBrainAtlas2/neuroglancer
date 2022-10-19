[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / SliceViewRenderLayer

# Interface: SliceViewRenderLayer

[sliceview/base](../modules/sliceview_base.md).SliceViewRenderLayer

## Implemented by

- [`SliceViewRenderLayerBackend`](../classes/sliceview_backend.SliceViewRenderLayerBackend.md)

## Table of contents

### Properties

- [localPosition](sliceview_base.SliceViewRenderLayer.md#localposition)
- [renderScaleTarget](sliceview_base.SliceViewRenderLayer.md#renderscaletarget)

### Methods

- [filterVisibleSources](sliceview_base.SliceViewRenderLayer.md#filtervisiblesources)

## Properties

### localPosition

• **localPosition**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\>

Current position of non-global layer dimensions.

#### Defined in

[src/neuroglancer/sliceview/base.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L153)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L154)

## Methods

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](annotation_annotation_layer_state._internal_.Iterable.md)<[`TransformedSource`](sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](../classes/sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](sliceview_base.SliceViewRenderLayer.md), [`TransformedSource`](sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](annotation_annotation_layer_state._internal_.Iterable.md)<[`TransformedSource`](sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L156)
