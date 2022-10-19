[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / SpatiallyIndexedValidAttachmentState

# Interface: SpatiallyIndexedValidAttachmentState

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).SpatiallyIndexedValidAttachmentState

## Hierarchy

- [`AttachmentState`](annotation_renderlayer._internal_.AttachmentState.md)

  ↳ **`SpatiallyIndexedValidAttachmentState`**

## Table of contents

### Properties

- [chunkRenderParameters](annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#chunkrenderparameters)
- [chunkTransform](annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#chunktransform)
- [displayDimensionRenderInfo](annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#displaydimensionrenderinfo)
- [sources](annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md#sources)

## Properties

### chunkRenderParameters

• **chunkRenderParameters**: `undefined` \| [`AnnotationChunkRenderParameters`](annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Inherited from

[AttachmentState](annotation_renderlayer._internal_.AttachmentState.md).[chunkRenderParameters](annotation_renderlayer._internal_.AttachmentState.md#chunkrenderparameters)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L262)

___

### chunkTransform

• **chunkTransform**: [`ValueOrError`](../modules/util_error.md#valueorerror)<[`ChunkTransformParameters`](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)\>

#### Inherited from

[AttachmentState](annotation_renderlayer._internal_.AttachmentState.md).[chunkTransform](annotation_renderlayer._internal_.AttachmentState.md#chunktransform)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L260)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Inherited from

[AttachmentState](annotation_renderlayer._internal_.AttachmentState.md).[displayDimensionRenderInfo](annotation_renderlayer._internal_.AttachmentState.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L261)

___

### sources

• `Optional` **sources**: [`NestedStateManager`](annotation_renderlayer._internal_.NestedStateManager.md)<[`TransformedAnnotationSource`](annotation_renderlayer._internal_.TransformedAnnotationSource.md)[][]\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L269)
