[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/renderlayer](../modules/sliceview_renderlayer.md) / SliceViewRenderLayerOptions

# Interface: SliceViewRenderLayerOptions

[sliceview/renderlayer](../modules/sliceview_renderlayer.md).SliceViewRenderLayerOptions

## Table of contents

### Properties

- [dataHistogramSpecifications](sliceview_renderlayer.SliceViewRenderLayerOptions.md#datahistogramspecifications)
- [localPosition](sliceview_renderlayer.SliceViewRenderLayerOptions.md#localposition)
- [renderScaleHistogram](sliceview_renderlayer.SliceViewRenderLayerOptions.md#renderscalehistogram)
- [renderScaleTarget](sliceview_renderlayer.SliceViewRenderLayerOptions.md#renderscaletarget)
- [transform](sliceview_renderlayer.SliceViewRenderLayerOptions.md#transform)

## Properties

### dataHistogramSpecifications

• `Optional` **dataHistogramSpecifications**: [`HistogramSpecifications`](../classes/webgl_empirical_cdf.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L47)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\>

Specifies the position within the "local" coordinate space.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L46)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L41)

___

### renderScaleTarget

• `Optional` **renderScaleTarget**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L40)

___

### transform

• **transform**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

Specifies the transform from the "model" coordinate space (specified by the multiscale source)
to the "render layer" coordinate space.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L39)
