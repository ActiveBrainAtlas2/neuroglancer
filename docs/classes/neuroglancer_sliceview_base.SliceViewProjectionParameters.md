[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewProjectionParameters

# Class: SliceViewProjectionParameters

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewProjectionParameters

## Hierarchy

- [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md)

  ↳ **`SliceViewProjectionParameters`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#constructor)

### Properties

- [centerDataPosition](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#centerdataposition)
- [displayDimensionRenderInfo](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#displaydimensionrenderinfo)
- [globalPosition](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#globalposition)
- [height](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#height)
- [invViewMatrix](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#invviewmatrix)
- [invViewProjectionMat](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#invviewprojectionmat)
- [logicalHeight](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#logicalheight)
- [logicalWidth](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#logicalwidth)
- [pixelSize](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#pixelsize)
- [projectionMat](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#projectionmat)
- [viewMatrix](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#viewmatrix)
- [viewProjectionMat](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#viewprojectionmat)
- [viewportNormalInCanonicalCoordinates](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#viewportnormalincanonicalcoordinates)
- [viewportNormalInGlobalCoordinates](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#viewportnormalinglobalcoordinates)
- [visibleHeightFraction](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#visibleheightfraction)
- [visibleLeftFraction](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#visibleleftfraction)
- [visibleTopFraction](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#visibletopfraction)
- [visibleWidthFraction](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#visiblewidthfraction)
- [width](neuroglancer_sliceview_base.SliceViewProjectionParameters.md#width)

## Constructors

### constructor

• **new SliceViewProjectionParameters**()

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[constructor](neuroglancer_projection_parameters.ProjectionParameters.md#constructor)

## Properties

### centerDataPosition

• **centerDataPosition**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L237)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[displayDimensionRenderInfo](neuroglancer_projection_parameters.ProjectionParameters.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/projection_parameters.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L24)

___

### globalPosition

• **globalPosition**: `Float32Array` = `kEmptyFloat32Vec`

Global position.

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[globalPosition](neuroglancer_projection_parameters.ProjectionParameters.md#globalposition)

#### Defined in

[src/neuroglancer/projection_parameters.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L29)

___

### height

• **height**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[height](neuroglancer_projection_parameters.ProjectionParameters.md#height)

#### Defined in

[src/neuroglancer/display_context.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L32)

___

### invViewMatrix

• **invViewMatrix**: [`mat4`](neuroglancer_util_geom.mat4.md)

Inverse of `viewMat`.

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[invViewMatrix](neuroglancer_projection_parameters.ProjectionParameters.md#invviewmatrix)

#### Defined in

[src/neuroglancer/projection_parameters.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L44)

___

### invViewProjectionMat

• **invViewProjectionMat**: [`mat4`](neuroglancer_util_geom.mat4.md)

Inverse of `viewProjectionMat`.

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[invViewProjectionMat](neuroglancer_projection_parameters.ProjectionParameters.md#invviewprojectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L55)

___

### logicalHeight

• **logicalHeight**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[logicalHeight](neuroglancer_projection_parameters.ProjectionParameters.md#logicalheight)

#### Defined in

[src/neuroglancer/display_context.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L40)

___

### logicalWidth

• **logicalWidth**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[logicalWidth](neuroglancer_projection_parameters.ProjectionParameters.md#logicalwidth)

#### Defined in

[src/neuroglancer/display_context.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L36)

___

### pixelSize

• **pixelSize**: `number` = `0`

Size in physical units of a single pixel.

#### Defined in

[src/neuroglancer/sliceview/base.ts:242](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L242)

___

### projectionMat

• **projectionMat**: [`mat4`](neuroglancer_util_geom.mat4.md)

Transform from camera coordinates to OpenGL clip coordinates.

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[projectionMat](neuroglancer_projection_parameters.ProjectionParameters.md#projectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L34)

___

### viewMatrix

• **viewMatrix**: [`mat4`](neuroglancer_util_geom.mat4.md)

Transform from world coordinates to camera coordinates.

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[viewMatrix](neuroglancer_projection_parameters.ProjectionParameters.md#viewmatrix)

#### Defined in

[src/neuroglancer/projection_parameters.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L39)

___

### viewProjectionMat

• **viewProjectionMat**: [`mat4`](neuroglancer_util_geom.mat4.md)

Transform from world coordinates to OpenGL clip coordinates.  Equal to:
`projectionMat * viewMat`.

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[viewProjectionMat](neuroglancer_projection_parameters.ProjectionParameters.md#viewprojectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/projection_parameters.ts#L50)

___

### viewportNormalInCanonicalCoordinates

• **viewportNormalInCanonicalCoordinates**: [`vec3`](neuroglancer_util_geom.vec3.md)

Normal vector of cross section in isotropic global canonical voxel coordinates.

#### Defined in

[src/neuroglancer/sliceview/base.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L235)

___

### viewportNormalInGlobalCoordinates

• **viewportNormalInGlobalCoordinates**: [`vec3`](neuroglancer_util_geom.vec3.md)

Normal vector of cross section in (non-isotropic) global voxel coordinates.

#### Defined in

[src/neuroglancer/sliceview/base.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L230)

___

### visibleHeightFraction

• **visibleHeightFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[visibleHeightFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visibleheightfraction)

#### Defined in

[src/neuroglancer/display_context.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L52)

___

### visibleLeftFraction

• **visibleLeftFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[visibleLeftFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visibleleftfraction)

#### Defined in

[src/neuroglancer/display_context.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L43)

___

### visibleTopFraction

• **visibleTopFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[visibleTopFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visibletopfraction)

#### Defined in

[src/neuroglancer/display_context.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L46)

___

### visibleWidthFraction

• **visibleWidthFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[visibleWidthFraction](neuroglancer_projection_parameters.ProjectionParameters.md#visiblewidthfraction)

#### Defined in

[src/neuroglancer/display_context.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L49)

___

### width

• **width**: `number` = `0`

#### Inherited from

[ProjectionParameters](neuroglancer_projection_parameters.ProjectionParameters.md).[width](neuroglancer_projection_parameters.ProjectionParameters.md#width)

#### Defined in

[src/neuroglancer/display_context.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L29)
