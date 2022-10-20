[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/type\_handler](../modules/neuroglancer_annotation_type_handler.md) / AnnotationRenderContext

# Interface: AnnotationRenderContext

[neuroglancer/annotation/type_handler](../modules/neuroglancer_annotation_type_handler.md).AnnotationRenderContext

## Table of contents

### Properties

- [annotationLayer](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#annotationlayer)
- [basePickId](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#basepickid)
- [buffer](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#buffer)
- [bufferOffset](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#bufferoffset)
- [chunkDisplayTransform](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#chunkdisplaytransform)
- [count](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#count)
- [modelClipBounds](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#modelclipbounds)
- [modelViewProjectionMatrix](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#modelviewprojectionmatrix)
- [renderContext](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#rendercontext)
- [renderSubspaceInvModelMatrix](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#rendersubspaceinvmodelmatrix)
- [renderSubspaceModelMatrix](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#rendersubspacemodelmatrix)
- [selectedIndex](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#selectedindex)
- [subspaceMatrix](neuroglancer_annotation_type_handler.AnnotationRenderContext.md#subspacematrix)

## Properties

### annotationLayer

• **annotationLayer**: [`AnnotationLayer`](../classes/neuroglancer_annotation_renderlayer.AnnotationLayer.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L37)

___

### basePickId

• **basePickId**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L41)

___

### buffer

• **buffer**: [`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L36)

___

### bufferOffset

• **bufferOffset**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L39)

___

### chunkDisplayTransform

• **chunkDisplayTransform**: [`ChunkDisplayTransformParameters`](neuroglancer_render_coordinate_transform.ChunkDisplayTransformParameters.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L48)

___

### count

• **count**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L40)

___

### modelClipBounds

• **modelClipBounds**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L47)

___

### modelViewProjectionMatrix

• **modelViewProjectionMatrix**: [`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L43)

___

### renderContext

• **renderContext**: [`PerspectiveViewRenderContext`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L38)

___

### renderSubspaceInvModelMatrix

• **renderSubspaceInvModelMatrix**: [`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L46)

___

### renderSubspaceModelMatrix

• **renderSubspaceModelMatrix**: [`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L45)

___

### selectedIndex

• **selectedIndex**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L42)

___

### subspaceMatrix

• **subspaceMatrix**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L44)
