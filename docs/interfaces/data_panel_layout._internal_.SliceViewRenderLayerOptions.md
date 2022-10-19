[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewRenderLayerOptions

# Interface: SliceViewRenderLayerOptions

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewRenderLayerOptions

## Table of contents

### Properties

- [dataHistogramSpecifications](data_panel_layout._internal_.SliceViewRenderLayerOptions.md#datahistogramspecifications)
- [localPosition](data_panel_layout._internal_.SliceViewRenderLayerOptions.md#localposition)
- [renderScaleHistogram](data_panel_layout._internal_.SliceViewRenderLayerOptions.md#renderscalehistogram)
- [renderScaleTarget](data_panel_layout._internal_.SliceViewRenderLayerOptions.md#renderscaletarget)
- [transform](data_panel_layout._internal_.SliceViewRenderLayerOptions.md#transform)

## Properties

### dataHistogramSpecifications

• `Optional` **dataHistogramSpecifications**: [`HistogramSpecifications`](../classes/data_panel_layout._internal_.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L47)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Specifies the position within the "local" coordinate space.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L46)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L41)

___

### renderScaleTarget

• `Optional` **renderScaleTarget**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L40)

___

### transform

• **transform**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/render_coordinate_transform.md#renderlayertransformorerror)\>

Specifies the transform from the "model" coordinate space (specified by the multiscale source)
to the "render layer" coordinate space.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L39)
