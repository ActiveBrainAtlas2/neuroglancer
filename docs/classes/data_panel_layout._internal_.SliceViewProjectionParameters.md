[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewProjectionParameters

# Class: SliceViewProjectionParameters

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewProjectionParameters

## Hierarchy

- [`ProjectionParameters`](projection_parameters.ProjectionParameters.md)

  ↳ **`SliceViewProjectionParameters`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.SliceViewProjectionParameters.md#constructor)

### Properties

- [centerDataPosition](data_panel_layout._internal_.SliceViewProjectionParameters.md#centerdataposition)
- [displayDimensionRenderInfo](data_panel_layout._internal_.SliceViewProjectionParameters.md#displaydimensionrenderinfo)
- [globalPosition](data_panel_layout._internal_.SliceViewProjectionParameters.md#globalposition)
- [height](data_panel_layout._internal_.SliceViewProjectionParameters.md#height)
- [invViewMatrix](data_panel_layout._internal_.SliceViewProjectionParameters.md#invviewmatrix)
- [invViewProjectionMat](data_panel_layout._internal_.SliceViewProjectionParameters.md#invviewprojectionmat)
- [logicalHeight](data_panel_layout._internal_.SliceViewProjectionParameters.md#logicalheight)
- [logicalWidth](data_panel_layout._internal_.SliceViewProjectionParameters.md#logicalwidth)
- [pixelSize](data_panel_layout._internal_.SliceViewProjectionParameters.md#pixelsize)
- [projectionMat](data_panel_layout._internal_.SliceViewProjectionParameters.md#projectionmat)
- [viewMatrix](data_panel_layout._internal_.SliceViewProjectionParameters.md#viewmatrix)
- [viewProjectionMat](data_panel_layout._internal_.SliceViewProjectionParameters.md#viewprojectionmat)
- [viewportNormalInCanonicalCoordinates](data_panel_layout._internal_.SliceViewProjectionParameters.md#viewportnormalincanonicalcoordinates)
- [viewportNormalInGlobalCoordinates](data_panel_layout._internal_.SliceViewProjectionParameters.md#viewportnormalinglobalcoordinates)
- [visibleHeightFraction](data_panel_layout._internal_.SliceViewProjectionParameters.md#visibleheightfraction)
- [visibleLeftFraction](data_panel_layout._internal_.SliceViewProjectionParameters.md#visibleleftfraction)
- [visibleTopFraction](data_panel_layout._internal_.SliceViewProjectionParameters.md#visibletopfraction)
- [visibleWidthFraction](data_panel_layout._internal_.SliceViewProjectionParameters.md#visiblewidthfraction)
- [width](data_panel_layout._internal_.SliceViewProjectionParameters.md#width)

## Constructors

### constructor

• **new SliceViewProjectionParameters**()

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[constructor](projection_parameters.ProjectionParameters.md#constructor)

## Properties

### centerDataPosition

• **centerDataPosition**: [`vec3`](axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L237)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md)

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[displayDimensionRenderInfo](projection_parameters.ProjectionParameters.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/projection_parameters.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/projection_parameters.ts#L24)

___

### globalPosition

• **globalPosition**: `Float32Array` = `kEmptyFloat32Vec`

Global position.

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[globalPosition](projection_parameters.ProjectionParameters.md#globalposition)

#### Defined in

[src/neuroglancer/projection_parameters.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/projection_parameters.ts#L29)

___

### height

• **height**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[height](projection_parameters.ProjectionParameters.md#height)

#### Defined in

[src/neuroglancer/display_context.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L32)

___

### invViewMatrix

• **invViewMatrix**: [`mat4`](axes_lines._internal_.mat4.md)

Inverse of `viewMat`.

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[invViewMatrix](projection_parameters.ProjectionParameters.md#invviewmatrix)

#### Defined in

[src/neuroglancer/projection_parameters.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/projection_parameters.ts#L44)

___

### invViewProjectionMat

• **invViewProjectionMat**: [`mat4`](axes_lines._internal_.mat4.md)

Inverse of `viewProjectionMat`.

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[invViewProjectionMat](projection_parameters.ProjectionParameters.md#invviewprojectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/projection_parameters.ts#L55)

___

### logicalHeight

• **logicalHeight**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[logicalHeight](projection_parameters.ProjectionParameters.md#logicalheight)

#### Defined in

[src/neuroglancer/display_context.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L40)

___

### logicalWidth

• **logicalWidth**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[logicalWidth](projection_parameters.ProjectionParameters.md#logicalwidth)

#### Defined in

[src/neuroglancer/display_context.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L36)

___

### pixelSize

• **pixelSize**: `number` = `0`

Size in physical units of a single pixel.

#### Defined in

[src/neuroglancer/sliceview/base.ts:242](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L242)

___

### projectionMat

• **projectionMat**: [`mat4`](axes_lines._internal_.mat4.md)

Transform from camera coordinates to OpenGL clip coordinates.

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[projectionMat](projection_parameters.ProjectionParameters.md#projectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/projection_parameters.ts#L34)

___

### viewMatrix

• **viewMatrix**: [`mat4`](axes_lines._internal_.mat4.md)

Transform from world coordinates to camera coordinates.

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[viewMatrix](projection_parameters.ProjectionParameters.md#viewmatrix)

#### Defined in

[src/neuroglancer/projection_parameters.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/projection_parameters.ts#L39)

___

### viewProjectionMat

• **viewProjectionMat**: [`mat4`](axes_lines._internal_.mat4.md)

Transform from world coordinates to OpenGL clip coordinates.  Equal to:
`projectionMat * viewMat`.

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[viewProjectionMat](projection_parameters.ProjectionParameters.md#viewprojectionmat)

#### Defined in

[src/neuroglancer/projection_parameters.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/projection_parameters.ts#L50)

___

### viewportNormalInCanonicalCoordinates

• **viewportNormalInCanonicalCoordinates**: [`vec3`](axes_lines._internal_.vec3.md)

Normal vector of cross section in isotropic global canonical voxel coordinates.

#### Defined in

[src/neuroglancer/sliceview/base.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L235)

___

### viewportNormalInGlobalCoordinates

• **viewportNormalInGlobalCoordinates**: [`vec3`](axes_lines._internal_.vec3.md)

Normal vector of cross section in (non-isotropic) global voxel coordinates.

#### Defined in

[src/neuroglancer/sliceview/base.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L230)

___

### visibleHeightFraction

• **visibleHeightFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[visibleHeightFraction](projection_parameters.ProjectionParameters.md#visibleheightfraction)

#### Defined in

[src/neuroglancer/display_context.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L52)

___

### visibleLeftFraction

• **visibleLeftFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[visibleLeftFraction](projection_parameters.ProjectionParameters.md#visibleleftfraction)

#### Defined in

[src/neuroglancer/display_context.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L43)

___

### visibleTopFraction

• **visibleTopFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[visibleTopFraction](projection_parameters.ProjectionParameters.md#visibletopfraction)

#### Defined in

[src/neuroglancer/display_context.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L46)

___

### visibleWidthFraction

• **visibleWidthFraction**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[visibleWidthFraction](projection_parameters.ProjectionParameters.md#visiblewidthfraction)

#### Defined in

[src/neuroglancer/display_context.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L49)

___

### width

• **width**: `number` = `0`

#### Inherited from

[ProjectionParameters](projection_parameters.ProjectionParameters.md).[width](projection_parameters.ProjectionParameters.md#width)

#### Defined in

[src/neuroglancer/display_context.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L29)
