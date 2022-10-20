[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md) / [<internal\>](../modules/neuroglancer_annotation_renderlayer._internal_.md) / SpatiallyIndexedValidAttachmentState

# Interface: SpatiallyIndexedValidAttachmentState

[neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md).[<internal>](../modules/neuroglancer_annotation_renderlayer._internal_.md).SpatiallyIndexedValidAttachmentState

## Hierarchy

- [`AttachmentState`](neuroglancer_annotation_renderlayer._internal_.AttachmentState.md)

  ↳ **`SpatiallyIndexedValidAttachmentState`**

## Table of contents

### Properties

- [chunkRenderParameters](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#chunkrenderparameters)
- [chunkTransform](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#chunktransform)
- [displayDimensionRenderInfo](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#displaydimensionrenderinfo)
- [sources](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#sources)

## Properties

### chunkRenderParameters

• **chunkRenderParameters**: `undefined` \| [`AnnotationChunkRenderParameters`](neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Inherited from

[AttachmentState](neuroglancer_annotation_renderlayer._internal_.AttachmentState.md).[chunkRenderParameters](neuroglancer_annotation_renderlayer._internal_.AttachmentState.md#chunkrenderparameters)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L262)

___

### chunkTransform

• **chunkTransform**: [`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>

#### Inherited from

[AttachmentState](neuroglancer_annotation_renderlayer._internal_.AttachmentState.md).[chunkTransform](neuroglancer_annotation_renderlayer._internal_.AttachmentState.md#chunktransform)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L260)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Inherited from

[AttachmentState](neuroglancer_annotation_renderlayer._internal_.AttachmentState.md).[displayDimensionRenderInfo](neuroglancer_annotation_renderlayer._internal_.AttachmentState.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L261)

___

### sources

• `Optional` **sources**: [`NestedStateManager`](neuroglancer_trackable_value.NestedStateManager.md)<[`TransformedAnnotationSource`](neuroglancer_annotation_renderlayer._internal_.TransformedAnnotationSource.md)[][]\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L269)
