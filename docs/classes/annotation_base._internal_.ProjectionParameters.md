[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/base](../modules/annotation_base.md) / [<internal\>](../modules/annotation_base._internal_.md) / ProjectionParameters

# Class: ProjectionParameters

[annotation/base](../modules/annotation_base.md).[<internal>](../modules/annotation_base._internal_.md).ProjectionParameters

## Hierarchy

- [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md)

  ↳ **`ProjectionParameters`**

  ↳↳ [`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)

## Table of contents

### Constructors

- [constructor](annotation_base._internal_.ProjectionParameters.md#constructor)

### Properties

- [displayDimensionRenderInfo](annotation_base._internal_.ProjectionParameters.md#displaydimensionrenderinfo)
- [globalPosition](annotation_base._internal_.ProjectionParameters.md#globalposition)
- [height](annotation_base._internal_.ProjectionParameters.md#height)
- [invViewMatrix](annotation_base._internal_.ProjectionParameters.md#invviewmatrix)
- [invViewProjectionMat](annotation_base._internal_.ProjectionParameters.md#invviewprojectionmat)
- [logicalHeight](annotation_base._internal_.ProjectionParameters.md#logicalheight)
- [logicalWidth](annotation_base._internal_.ProjectionParameters.md#logicalwidth)
- [projectionMat](annotation_base._internal_.ProjectionParameters.md#projectionmat)
- [viewMatrix](annotation_base._internal_.ProjectionParameters.md#viewmatrix)
- [viewProjectionMat](annotation_base._internal_.ProjectionParameters.md#viewprojectionmat)
- [visibleHeightFraction](annotation_base._internal_.ProjectionParameters.md#visibleheightfraction)
- [visibleLeftFraction](annotation_base._internal_.ProjectionParameters.md#visibleleftfraction)
- [visibleTopFraction](annotation_base._internal_.ProjectionParameters.md#visibletopfraction)
- [visibleWidthFraction](annotation_base._internal_.ProjectionParameters.md#visiblewidthfraction)
- [width](annotation_base._internal_.ProjectionParameters.md#width)

## Constructors

### constructor

• **new ProjectionParameters**()

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[constructor](annotation_annotation_layer_state._internal_.RenderViewport.md#constructor)

## Properties

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/projection_parameters.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L24)

___

### globalPosition

• **globalPosition**: `Float32Array` = `kEmptyFloat32Vec`

Global position.

#### Defined in

[src/neuroglancer/projection_parameters.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L29)

___

### height

• **height**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[height](annotation_annotation_layer_state._internal_.RenderViewport.md#height)

#### Defined in

[src/neuroglancer/display_context.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L32)

___

### invViewMatrix

• **invViewMatrix**: [`mat4`](util_geom.mat4.md)

Inverse of `viewMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L44)

___

### invViewProjectionMat

• **invViewProjectionMat**: [`mat4`](util_geom.mat4.md)

Inverse of `viewProjectionMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L55)

___

### logicalHeight

• **logicalHeight**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[logicalHeight](annotation_annotation_layer_state._internal_.RenderViewport.md#logicalheight)

#### Defined in

[src/neuroglancer/display_context.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L40)

___

### logicalWidth

• **logicalWidth**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[logicalWidth](annotation_annotation_layer_state._internal_.RenderViewport.md#logicalwidth)

#### Defined in

[src/neuroglancer/display_context.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L36)

___

### projectionMat

• **projectionMat**: [`mat4`](util_geom.mat4.md)

Transform from camera coordinates to OpenGL clip coordinates.

#### Defined in

[src/neuroglancer/projection_parameters.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L34)

___

### viewMatrix

• **viewMatrix**: [`mat4`](util_geom.mat4.md)

Transform from world coordinates to camera coordinates.

#### Defined in

[src/neuroglancer/projection_parameters.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L39)

___

### viewProjectionMat

• **viewProjectionMat**: [`mat4`](util_geom.mat4.md)

Transform from world coordinates to OpenGL clip coordinates.  Equal to:
`projectionMat * viewMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L50)

___

### visibleHeightFraction

• **visibleHeightFraction**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[visibleHeightFraction](annotation_annotation_layer_state._internal_.RenderViewport.md#visibleheightfraction)

#### Defined in

[src/neuroglancer/display_context.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L52)

___

### visibleLeftFraction

• **visibleLeftFraction**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[visibleLeftFraction](annotation_annotation_layer_state._internal_.RenderViewport.md#visibleleftfraction)

#### Defined in

[src/neuroglancer/display_context.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L43)

___

### visibleTopFraction

• **visibleTopFraction**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[visibleTopFraction](annotation_annotation_layer_state._internal_.RenderViewport.md#visibletopfraction)

#### Defined in

[src/neuroglancer/display_context.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L46)

___

### visibleWidthFraction

• **visibleWidthFraction**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[visibleWidthFraction](annotation_annotation_layer_state._internal_.RenderViewport.md#visiblewidthfraction)

#### Defined in

[src/neuroglancer/display_context.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L49)

___

### width

• **width**: `number` = `0`

#### Inherited from

[RenderViewport](annotation_annotation_layer_state._internal_.RenderViewport.md).[width](annotation_annotation_layer_state._internal_.RenderViewport.md#width)

#### Defined in

[src/neuroglancer/display_context.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L29)
