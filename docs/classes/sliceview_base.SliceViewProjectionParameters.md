[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / SliceViewProjectionParameters

# Class: SliceViewProjectionParameters

[sliceview/base](../modules/sliceview_base.md).SliceViewProjectionParameters

## Hierarchy

- [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md)

  ↳ **`SliceViewProjectionParameters`**

## Table of contents

### Constructors

- [constructor](sliceview_base.SliceViewProjectionParameters.md#constructor)

### Properties

- [centerDataPosition](sliceview_base.SliceViewProjectionParameters.md#centerdataposition)
- [displayDimensionRenderInfo](sliceview_base.SliceViewProjectionParameters.md#displaydimensionrenderinfo)
- [globalPosition](sliceview_base.SliceViewProjectionParameters.md#globalposition)
- [height](sliceview_base.SliceViewProjectionParameters.md#height)
- [invViewMatrix](sliceview_base.SliceViewProjectionParameters.md#invviewmatrix)
- [invViewProjectionMat](sliceview_base.SliceViewProjectionParameters.md#invviewprojectionmat)
- [logicalHeight](sliceview_base.SliceViewProjectionParameters.md#logicalheight)
- [logicalWidth](sliceview_base.SliceViewProjectionParameters.md#logicalwidth)
- [pixelSize](sliceview_base.SliceViewProjectionParameters.md#pixelsize)
- [projectionMat](sliceview_base.SliceViewProjectionParameters.md#projectionmat)
- [viewMatrix](sliceview_base.SliceViewProjectionParameters.md#viewmatrix)
- [viewProjectionMat](sliceview_base.SliceViewProjectionParameters.md#viewprojectionmat)
- [viewportNormalInCanonicalCoordinates](sliceview_base.SliceViewProjectionParameters.md#viewportnormalincanonicalcoordinates)
- [viewportNormalInGlobalCoordinates](sliceview_base.SliceViewProjectionParameters.md#viewportnormalinglobalcoordinates)
- [visibleHeightFraction](sliceview_base.SliceViewProjectionParameters.md#visibleheightfraction)
- [visibleLeftFraction](sliceview_base.SliceViewProjectionParameters.md#visibleleftfraction)
- [visibleTopFraction](sliceview_base.SliceViewProjectionParameters.md#visibletopfraction)
- [visibleWidthFraction](sliceview_base.SliceViewProjectionParameters.md#visiblewidthfraction)
- [width](sliceview_base.SliceViewProjectionParameters.md#width)

## Constructors

### constructor

• **new SliceViewProjectionParameters**()

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[constructor](annotation_base._internal_.ProjectionParameters.md#constructor)

## Properties

### centerDataPosition

• **centerDataPosition**: [`vec3`](util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L237)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[displayDimensionRenderInfo](annotation_base._internal_.ProjectionParameters.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/projection_parameters.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L24)

___

### globalPosition

• **globalPosition**: `Float32Array` = `kEmptyFloat32Vec`

Global position.

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[globalPosition](annotation_base._internal_.ProjectionParameters.md#globalposition)

#### Defined in

[src/neuroglancer/projection_parameters.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L29)

___

### height

• **height**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[height](annotation_base._internal_.ProjectionParameters.md#height)

#### Defined in

[src/neuroglancer/display_context.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L32)

___

### invViewMatrix

• **invViewMatrix**: [`mat4`](util_geom.mat4.md)

Inverse of `viewMat`.

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[invViewMatrix](annotation_base._internal_.ProjectionParameters.md#invviewmatrix)

#### Defined in

[src/neuroglancer/projection_parameters.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L44)

___

### invViewProjectionMat

• **invViewProjectionMat**: [`mat4`](util_geom.mat4.md)

Inverse of `viewProjectionMat`.

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[invViewProjectionMat](annotation_base._internal_.ProjectionParameters.md#invviewprojectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L55)

___

### logicalHeight

• **logicalHeight**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[logicalHeight](annotation_base._internal_.ProjectionParameters.md#logicalheight)

#### Defined in

[src/neuroglancer/display_context.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L40)

___

### logicalWidth

• **logicalWidth**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[logicalWidth](annotation_base._internal_.ProjectionParameters.md#logicalwidth)

#### Defined in

[src/neuroglancer/display_context.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L36)

___

### pixelSize

• **pixelSize**: `number` = `0`

Size in physical units of a single pixel.

#### Defined in

[src/neuroglancer/sliceview/base.ts:242](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L242)

___

### projectionMat

• **projectionMat**: [`mat4`](util_geom.mat4.md)

Transform from camera coordinates to OpenGL clip coordinates.

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[projectionMat](annotation_base._internal_.ProjectionParameters.md#projectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L34)

___

### viewMatrix

• **viewMatrix**: [`mat4`](util_geom.mat4.md)

Transform from world coordinates to camera coordinates.

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[viewMatrix](annotation_base._internal_.ProjectionParameters.md#viewmatrix)

#### Defined in

[src/neuroglancer/projection_parameters.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L39)

___

### viewProjectionMat

• **viewProjectionMat**: [`mat4`](util_geom.mat4.md)

Transform from world coordinates to OpenGL clip coordinates.  Equal to:
`projectionMat * viewMat`.

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[viewProjectionMat](annotation_base._internal_.ProjectionParameters.md#viewprojectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/projection_parameters.ts#L50)

___

### viewportNormalInCanonicalCoordinates

• **viewportNormalInCanonicalCoordinates**: [`vec3`](util_geom.vec3.md)

Normal vector of cross section in isotropic global canonical voxel coordinates.

#### Defined in

[src/neuroglancer/sliceview/base.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L235)

___

### viewportNormalInGlobalCoordinates

• **viewportNormalInGlobalCoordinates**: [`vec3`](util_geom.vec3.md)

Normal vector of cross section in (non-isotropic) global voxel coordinates.

#### Defined in

[src/neuroglancer/sliceview/base.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L230)

___

### visibleHeightFraction

• **visibleHeightFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[visibleHeightFraction](annotation_base._internal_.ProjectionParameters.md#visibleheightfraction)

#### Defined in

[src/neuroglancer/display_context.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L52)

___

### visibleLeftFraction

• **visibleLeftFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[visibleLeftFraction](annotation_base._internal_.ProjectionParameters.md#visibleleftfraction)

#### Defined in

[src/neuroglancer/display_context.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L43)

___

### visibleTopFraction

• **visibleTopFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[visibleTopFraction](annotation_base._internal_.ProjectionParameters.md#visibletopfraction)

#### Defined in

[src/neuroglancer/display_context.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L46)

___

### visibleWidthFraction

• **visibleWidthFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[visibleWidthFraction](annotation_base._internal_.ProjectionParameters.md#visiblewidthfraction)

#### Defined in

[src/neuroglancer/display_context.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L49)

___

### width

• **width**: `number` = `0`

#### Inherited from

[ProjectionParameters](annotation_base._internal_.ProjectionParameters.md).[width](annotation_base._internal_.ProjectionParameters.md#width)

#### Defined in

[src/neuroglancer/display_context.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L29)
