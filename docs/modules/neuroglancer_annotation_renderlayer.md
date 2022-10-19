[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/renderlayer

# Module: neuroglancer/annotation/renderlayer

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_annotation_renderlayer._internal_.md)

### Classes

- [AnnotationLayer](../classes/neuroglancer_annotation_renderlayer.AnnotationLayer.md)
- [PerspectiveViewAnnotationLayer](../classes/neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md)

### Variables

- [SliceViewAnnotationLayer](neuroglancer_annotation_renderlayer.md#sliceviewannotationlayer)
- [SpatiallyIndexedPerspectiveViewAnnotationLayer](neuroglancer_annotation_renderlayer.md#spatiallyindexedperspectiveviewannotationlayer)
- [SpatiallyIndexedSliceViewAnnotationLayer](neuroglancer_annotation_renderlayer.md#spatiallyindexedsliceviewannotationlayer)

## Variables

### SliceViewAnnotationLayer

• `Const` **SliceViewAnnotationLayer**: { `prototype`: `C`<`any`\>  } & (...`a`: [base: AnnotationLayer, renderScaleHistogram: RenderScaleHistogram]) => [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md)<typeof [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)\> & [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`unknown`\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md), ``"prototype"``\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md), ``"prototype"``\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:783](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L783)

___

### SpatiallyIndexedPerspectiveViewAnnotationLayer

• `Const` **SpatiallyIndexedPerspectiveViewAnnotationLayer**: (...`a`: [options: Object]) => [`SpatiallyIndexedAnnotationLayer`](../classes/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)<new (base: AnnotationLayer, renderScaleHistogram: RenderScaleHistogram) =\> AnnotationRenderLayer<typeof PerspectiveViewRenderLayer\>.C & PerspectiveViewRenderLayer<...\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md), ``"prototype"``\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`PerspectiveViewRenderLayer`](../classes/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md), ``"prototype"``\>\> & [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md)<typeof [`PerspectiveViewRenderLayer`](../classes/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)\> & [`PerspectiveViewRenderLayer`](../classes/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`unknown`\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`SpatiallyIndexedAnnotationLayer`](../classes/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md), ``"prototype"``\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<(...`a`: [base: AnnotationLayer, renderScaleHistogram: RenderScaleHistogram]) => [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md)<typeof [`PerspectiveViewRenderLayer`](../classes/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)\> & [`PerspectiveViewRenderLayer`](../classes/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`unknown`\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md), ``"prototype"``\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`PerspectiveViewRenderLayer`](../classes/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md), ``"prototype"``\>, ``"prototype"``\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:777](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L777)

___

### SpatiallyIndexedSliceViewAnnotationLayer

• `Const` **SpatiallyIndexedSliceViewAnnotationLayer**: (...`a`: [options: Object]) => [`SpatiallyIndexedAnnotationLayer`](../classes/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)<new (base: AnnotationLayer, renderScaleHistogram: RenderScaleHistogram) =\> AnnotationRenderLayer<typeof SliceViewPanelRenderLayer\>.C & SliceViewPanelRenderLayer<...\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md), ``"prototype"``\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md), ``"prototype"``\>\> & [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md)<typeof [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)\> & [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`unknown`\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`SpatiallyIndexedAnnotationLayer`](../classes/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md), ``"prototype"``\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<(...`a`: [base: AnnotationLayer, renderScaleHistogram: RenderScaleHistogram]) => [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md)<typeof [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)\> & [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`unknown`\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md), ``"prototype"``\> & [`Pick`](neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`SliceViewPanelRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md), ``"prototype"``\>, ``"prototype"``\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:780](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L780)
