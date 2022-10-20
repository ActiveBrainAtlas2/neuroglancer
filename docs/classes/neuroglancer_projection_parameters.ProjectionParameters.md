[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/projection\_parameters](../modules/neuroglancer_projection_parameters.md) / ProjectionParameters

# Class: ProjectionParameters

[neuroglancer/projection_parameters](../modules/neuroglancer_projection_parameters.md).ProjectionParameters

## Hierarchy

- [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

  ↳ **`ProjectionParameters`**

  ↳↳ [`SliceViewProjectionParameters`](neuroglancer_sliceview_base.SliceViewProjectionParameters.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_projection_parameters.ProjectionParameters.md#constructor)

### Properties

- [displayDimensionRenderInfo](neuroglancer_projection_parameters.ProjectionParameters.md#displaydimensionrenderinfo)
- [globalPosition](neuroglancer_projection_parameters.ProjectionParameters.md#globalposition)
- [height](neuroglancer_projection_parameters.ProjectionParameters.md#height)
- [invViewMatrix](neuroglancer_projection_parameters.ProjectionParameters.md#invviewmatrix)
- [invViewProjectionMat](neuroglancer_projection_parameters.ProjectionParameters.md#invviewprojectionmat)
- [logicalHeight](neuroglancer_projection_parameters.ProjectionParameters.md#logicalheight)
- [logicalWidth](neuroglancer_projection_parameters.ProjectionParameters.md#logicalwidth)
- [projectionMat](neuroglancer_projection_parameters.ProjectionParameters.md#projectionmat)
- [viewMatrix](neuroglancer_projection_parameters.ProjectionParameters.md#viewmatrix)
- [viewProjectionMat](neuroglancer_projection_parameters.ProjectionParameters.md#viewprojectionmat)
- [visibleHeightFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visibleheightfraction)
- [visibleLeftFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visibleleftfraction)
- [visibleTopFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visibletopfraction)
- [visibleWidthFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visiblewidthfraction)
- [width](neuroglancer_projection_parameters.ProjectionParameters.md#width)

## Constructors

### constructor

• **new ProjectionParameters**()

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[constructor](neuroglancer_display_context.RenderViewport.md#constructor)

## Properties

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/projection_parameters.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L24)

___

### globalPosition

• **globalPosition**: `Float32Array` = `kEmptyFloat32Vec`

Global position.

#### Defined in

[src/neuroglancer/projection_parameters.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L29)

___

### height

• **height**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[height](neuroglancer_display_context.RenderViewport.md#height)

#### Defined in

[src/neuroglancer/display_context.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L32)

___

### invViewMatrix

• **invViewMatrix**: [`mat4`](neuroglancer_util_geom.mat4.md)

Inverse of `viewMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L44)

___

### invViewProjectionMat

• **invViewProjectionMat**: [`mat4`](neuroglancer_util_geom.mat4.md)

Inverse of `viewProjectionMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L55)

___

### logicalHeight

• **logicalHeight**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[logicalHeight](neuroglancer_display_context.RenderViewport.md#logicalheight)

#### Defined in

[src/neuroglancer/display_context.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L40)

___

### logicalWidth

• **logicalWidth**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[logicalWidth](neuroglancer_display_context.RenderViewport.md#logicalwidth)

#### Defined in

[src/neuroglancer/display_context.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L36)

___

### projectionMat

• **projectionMat**: [`mat4`](neuroglancer_util_geom.mat4.md)

Transform from camera coordinates to OpenGL clip coordinates.

#### Defined in

[src/neuroglancer/projection_parameters.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L34)

___

### viewMatrix

• **viewMatrix**: [`mat4`](neuroglancer_util_geom.mat4.md)

Transform from world coordinates to camera coordinates.

#### Defined in

[src/neuroglancer/projection_parameters.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L39)

___

### viewProjectionMat

• **viewProjectionMat**: [`mat4`](neuroglancer_util_geom.mat4.md)

Transform from world coordinates to OpenGL clip coordinates.  Equal to:
`projectionMat * viewMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L50)

___

### visibleHeightFraction

• **visibleHeightFraction**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[visibleHeightFraction](neuroglancer_display_context.RenderViewport.md#visibleheightfraction)

#### Defined in

[src/neuroglancer/display_context.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L52)

___

### visibleLeftFraction

• **visibleLeftFraction**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[visibleLeftFraction](neuroglancer_display_context.RenderViewport.md#visibleleftfraction)

#### Defined in

[src/neuroglancer/display_context.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L43)

___

### visibleTopFraction

• **visibleTopFraction**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[visibleTopFraction](neuroglancer_display_context.RenderViewport.md#visibletopfraction)

#### Defined in

[src/neuroglancer/display_context.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L46)

___

### visibleWidthFraction

• **visibleWidthFraction**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[visibleWidthFraction](neuroglancer_display_context.RenderViewport.md#visiblewidthfraction)

#### Defined in

[src/neuroglancer/display_context.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L49)

___

### width

• **width**: `number` = `0`

#### Inherited from

[RenderViewport](neuroglancer_display_context.RenderViewport.md).[width](neuroglancer_display_context.RenderViewport.md#width)

#### Defined in

[src/neuroglancer/display_context.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L29)
