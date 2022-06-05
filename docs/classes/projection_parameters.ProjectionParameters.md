[neuroglancer](../README.md) / [Modules](../modules.md) / [projection\_parameters](../modules/projection_parameters.md) / ProjectionParameters

# Class: ProjectionParameters

[projection_parameters](../modules/projection_parameters.md).ProjectionParameters

## Hierarchy

- [`RenderViewport`](display_context.RenderViewport.md)

  ↳ **`ProjectionParameters`**

## Table of contents

### Constructors

- [constructor](projection_parameters.ProjectionParameters.md#constructor)

### Properties

- [displayDimensionRenderInfo](projection_parameters.ProjectionParameters.md#displaydimensionrenderinfo)
- [globalPosition](projection_parameters.ProjectionParameters.md#globalposition)
- [height](projection_parameters.ProjectionParameters.md#height)
- [invViewMatrix](projection_parameters.ProjectionParameters.md#invviewmatrix)
- [invViewProjectionMat](projection_parameters.ProjectionParameters.md#invviewprojectionmat)
- [logicalHeight](projection_parameters.ProjectionParameters.md#logicalheight)
- [logicalWidth](projection_parameters.ProjectionParameters.md#logicalwidth)
- [projectionMat](projection_parameters.ProjectionParameters.md#projectionmat)
- [viewMatrix](projection_parameters.ProjectionParameters.md#viewmatrix)
- [viewProjectionMat](projection_parameters.ProjectionParameters.md#viewprojectionmat)
- [visibleHeightFraction](projection_parameters.ProjectionParameters.md#visibleheightfraction)
- [visibleLeftFraction](projection_parameters.ProjectionParameters.md#visibleleftfraction)
- [visibleTopFraction](projection_parameters.ProjectionParameters.md#visibletopfraction)
- [visibleWidthFraction](projection_parameters.ProjectionParameters.md#visiblewidthfraction)
- [width](projection_parameters.ProjectionParameters.md#width)

## Constructors

### constructor

• **new ProjectionParameters**()

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[constructor](display_context.RenderViewport.md#constructor)

## Properties

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/projection_parameters.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/projection_parameters.ts#L24)

___

### globalPosition

• **globalPosition**: `Float32Array` = `kEmptyFloat32Vec`

Global position.

#### Defined in

[src/neuroglancer/projection_parameters.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/projection_parameters.ts#L29)

___

### height

• **height**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[height](display_context.RenderViewport.md#height)

#### Defined in

[src/neuroglancer/display_context.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L32)

___

### invViewMatrix

• **invViewMatrix**: `mat4`

Inverse of `viewMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/projection_parameters.ts#L44)

___

### invViewProjectionMat

• **invViewProjectionMat**: `mat4`

Inverse of `viewProjectionMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/projection_parameters.ts#L55)

___

### logicalHeight

• **logicalHeight**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[logicalHeight](display_context.RenderViewport.md#logicalheight)

#### Defined in

[src/neuroglancer/display_context.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L40)

___

### logicalWidth

• **logicalWidth**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[logicalWidth](display_context.RenderViewport.md#logicalwidth)

#### Defined in

[src/neuroglancer/display_context.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L36)

___

### projectionMat

• **projectionMat**: `mat4`

Transform from camera coordinates to OpenGL clip coordinates.

#### Defined in

[src/neuroglancer/projection_parameters.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/projection_parameters.ts#L34)

___

### viewMatrix

• **viewMatrix**: `mat4`

Transform from world coordinates to camera coordinates.

#### Defined in

[src/neuroglancer/projection_parameters.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/projection_parameters.ts#L39)

___

### viewProjectionMat

• **viewProjectionMat**: `mat4`

Transform from world coordinates to OpenGL clip coordinates.  Equal to:
`projectionMat * viewMat`.

#### Defined in

[src/neuroglancer/projection_parameters.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/projection_parameters.ts#L50)

___

### visibleHeightFraction

• **visibleHeightFraction**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[visibleHeightFraction](display_context.RenderViewport.md#visibleheightfraction)

#### Defined in

[src/neuroglancer/display_context.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L52)

___

### visibleLeftFraction

• **visibleLeftFraction**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[visibleLeftFraction](display_context.RenderViewport.md#visibleleftfraction)

#### Defined in

[src/neuroglancer/display_context.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L43)

___

### visibleTopFraction

• **visibleTopFraction**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[visibleTopFraction](display_context.RenderViewport.md#visibletopfraction)

#### Defined in

[src/neuroglancer/display_context.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L46)

___

### visibleWidthFraction

• **visibleWidthFraction**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[visibleWidthFraction](display_context.RenderViewport.md#visiblewidthfraction)

#### Defined in

[src/neuroglancer/display_context.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L49)

___

### width

• **width**: `number` = `0`

#### Inherited from

[RenderViewport](display_context.RenderViewport.md).[width](display_context.RenderViewport.md#width)

#### Defined in

[src/neuroglancer/display_context.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L29)
