[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/geom

# Module: neuroglancer/util/geom

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_util_geom._internal_.md)

### Classes

- [mat2](../classes/neuroglancer_util_geom.mat2.md)
- [mat3](../classes/neuroglancer_util_geom.mat3.md)
- [mat4](../classes/neuroglancer_util_geom.mat4.md)
- [quat](../classes/neuroglancer_util_geom.quat.md)
- [vec2](../classes/neuroglancer_util_geom.vec2.md)
- [vec3](../classes/neuroglancer_util_geom.vec3.md)
- [vec4](../classes/neuroglancer_util_geom.vec4.md)

### Variables

- [AXES\_NAMES](neuroglancer_util_geom.md#axes_names)
- [identityMat4](neuroglancer_util_geom.md#identitymat4)
- [kAxes](neuroglancer_util_geom.md#kaxes)
- [kIdentityQuat](neuroglancer_util_geom.md#kidentityquat)
- [kInfinityVec](neuroglancer_util_geom.md#kinfinityvec)
- [kOneVec](neuroglancer_util_geom.md#konevec)
- [kZeroVec](neuroglancer_util_geom.md#kzerovec)
- [kZeroVec4](neuroglancer_util_geom.md#kzerovec4)

### Functions

- [disableZProjection](neuroglancer_util_geom.md#disablezprojection)
- [findClosestParameterizedLinePosition](neuroglancer_util_geom.md#findclosestparameterizedlineposition)
- [getDependentTransformInputDimensions](neuroglancer_util_geom.md#getdependenttransforminputdimensions)
- [getFrustrumPlanes](neuroglancer_util_geom.md#getfrustrumplanes)
- [getViewFrustrumDepthRange](neuroglancer_util_geom.md#getviewfrustrumdepthrange)
- [getViewFrustrumVolume](neuroglancer_util_geom.md#getviewfrustrumvolume)
- [getViewFrustrumWorldBounds](neuroglancer_util_geom.md#getviewfrustrumworldbounds)
- [isAABBIntersectingPlane](neuroglancer_util_geom.md#isaabbintersectingplane)
- [isAABBVisible](neuroglancer_util_geom.md#isaabbvisible)
- [mat3FromMat4](neuroglancer_util_geom.md#mat3frommat4)
- [prod3](neuroglancer_util_geom.md#prod3)
- [prod4](neuroglancer_util_geom.md#prod4)
- [projectPointToLineSegment](neuroglancer_util_geom.md#projectpointtolinesegment)
- [quatRotateX180](neuroglancer_util_geom.md#quatrotatex180)
- [quatRotateY180](neuroglancer_util_geom.md#quatrotatey180)
- [quatRotateZ180](neuroglancer_util_geom.md#quatrotatez180)
- [scaleMat3Input](neuroglancer_util_geom.md#scalemat3input)
- [scaleMat3Output](neuroglancer_util_geom.md#scalemat3output)
- [transformVectorByMat4](neuroglancer_util_geom.md#transformvectorbymat4)
- [transformVectorByMat4Transpose](neuroglancer_util_geom.md#transformvectorbymat4transpose)
- [translationRotationScaleZReflectionToMat4](neuroglancer_util_geom.md#translationrotationscalezreflectiontomat4)
- [vec3Key](neuroglancer_util_geom.md#vec3key)

## Variables

### AXES\_NAMES

• `Const` **AXES\_NAMES**: `string`[]

#### Defined in

[src/neuroglancer/util/geom.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L24)

___

### identityMat4

• `Const` **identityMat4**: [`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Defined in

[src/neuroglancer/util/geom.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L22)

___

### kAxes

• `Const` **kAxes**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)[]

#### Defined in

[src/neuroglancer/util/geom.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L26)

___

### kIdentityQuat

• `Const` **kIdentityQuat**: [`quat`](../classes/neuroglancer_util_geom.quat.md)

#### Defined in

[src/neuroglancer/util/geom.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L35)

___

### kInfinityVec

• `Const` **kInfinityVec**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L34)

___

### kOneVec

• `Const` **kOneVec**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L33)

___

### kZeroVec

• `Const` **kZeroVec**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L31)

___

### kZeroVec4

• `Const` **kZeroVec4**: [`vec4`](../classes/neuroglancer_util_geom.vec4.md)

#### Defined in

[src/neuroglancer/util/geom.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L32)

## Functions

### disableZProjection

▸ **disableZProjection**(`mat`): [`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

[`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Defined in

[src/neuroglancer/util/geom.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L360)

___

### findClosestParameterizedLinePosition

▸ **findClosestParameterizedLinePosition**(`a`, `b`, `p`): `number`

Returns the value of `t` that minimizes `(p - (a + t * (b - a)))`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Float32Array` |
| `b` | `Float32Array` |
| `p` | `Float32Array` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/geom.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L124)

___

### getDependentTransformInputDimensions

▸ **getDependentTransformInputDimensions**(`transform`, `rank`, `outputDimensions`, `transpose?`): `number`[]

Returns the list (in sorted order) of input dimensions that depend on any of the specified output
dimensions.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transform` | `Float32Array` \| `Float64Array` | `undefined` |
| `rank` | `number` | `undefined` |
| `outputDimensions` | readonly `number`[] | `undefined` |
| `transpose` | `boolean` | `false` |

#### Returns

`number`[]

#### Defined in

[src/neuroglancer/util/geom.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L284)

___

### getFrustrumPlanes

▸ **getFrustrumPlanes**(`out`, `m`): `Float32Array`

Extracts the left, right, bottom, top, near, far clipping planes from `projectionMat`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | `Float32Array` | Row-major array of shape `(6, 4)` specifying for each of the left, right, bottom, top,     near, far clipping planes the `a`, `b`, `c`, `d` coefficients such that     `0 < a * x + b * y + c * z + d` if the point `x, y, z` is inside the half-space of the clipping plane. |
| `m` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) | Projection matrix |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/util/geom.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L179)

___

### getViewFrustrumDepthRange

▸ **getViewFrustrumDepthRange**(`projectionMat`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionMat` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/geom.ts:342](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L342)

___

### getViewFrustrumVolume

▸ **getViewFrustrumVolume**(`projectionMat`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionMat` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/geom.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L322)

___

### getViewFrustrumWorldBounds

▸ **getViewFrustrumWorldBounds**(`invViewProjectionMat`, `bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invViewProjectionMat` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |
| `bounds` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/geom.ts:374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L374)

___

### isAABBIntersectingPlane

▸ **isAABBIntersectingPlane**(`xLower`, `yLower`, `zLower`, `xUpper`, `yUpper`, `zUpper`, `clippingPlanes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xLower` | `number` |
| `yLower` | `number` |
| `zLower` | `number` |
| `xUpper` | `number` |
| `yUpper` | `number` |
| `zUpper` | `number` |
| `clippingPlanes` | `Float32Array` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/geom.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L253)

___

### isAABBVisible

▸ **isAABBVisible**(`xLower`, `yLower`, `zLower`, `xUpper`, `yUpper`, `zUpper`, `clippingPlanes`): `boolean`

Checks whether the specified axis-aligned bounding box (AABB) intersects the view frustrum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xLower` | `number` | - |
| `yLower` | `number` | - |
| `zLower` | `number` | - |
| `xUpper` | `number` | - |
| `yUpper` | `number` | - |
| `zUpper` | `number` | - |
| `clippingPlanes` | `Float32Array` | Array of length 24 specifying the clipping planes of the view frustrum, as     computed by `getFrustrumPlanes` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/geom.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L238)

___

### mat3FromMat4

▸ **mat3FromMat4**(`out`, `m`): [`mat3`](../classes/neuroglancer_util_geom.mat3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`mat3`](../classes/neuroglancer_util_geom.mat3.md) |
| `m` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

[`mat3`](../classes/neuroglancer_util_geom.mat3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L156)

___

### prod3

▸ **prod3**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/geom.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L37)

___

### prod4

▸ **prod4**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/geom.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L41)

___

### projectPointToLineSegment

▸ **projectPointToLineSegment**(`out`, `a`, `b`, `p`): `Float32Array`

Sets `out` to the position on the line segment `[a, b]` closest to `p`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `a` | `Float32Array` |
| `b` | `Float32Array` |
| `p` | `Float32Array` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/util/geom.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L144)

___

### quatRotateX180

▸ **quatRotateX180**(`out`, `a`): `void`

Transforms `a` by a 180-degree rotation about X, stores result in `out`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |
| `a` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/geom.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L57)

___

### quatRotateY180

▸ **quatRotateY180**(`out`, `a`): `void`

Transforms `a` by a 180-degree rotation about Y, stores result in `out`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |
| `a` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/geom.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L68)

___

### quatRotateZ180

▸ **quatRotateZ180**(`out`, `a`): `void`

Transforms `a` by a 180-degree rotation about Z, stores result in `out`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |
| `a` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/geom.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L79)

___

### scaleMat3Input

▸ **scaleMat3Input**(`out`, `input`, `scales`): [`mat3`](../classes/neuroglancer_util_geom.mat3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`mat3`](../classes/neuroglancer_util_geom.mat3.md) |
| `input` | [`mat3`](../classes/neuroglancer_util_geom.mat3.md) |
| `scales` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Returns

[`mat3`](../classes/neuroglancer_util_geom.mat3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L302)

___

### scaleMat3Output

▸ **scaleMat3Output**(`out`, `input`, `scales`): [`mat3`](../classes/neuroglancer_util_geom.mat3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`mat3`](../classes/neuroglancer_util_geom.mat3.md) |
| `input` | [`mat3`](../classes/neuroglancer_util_geom.mat3.md) |
| `scales` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Returns

[`mat3`](../classes/neuroglancer_util_geom.mat3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L312)

___

### transformVectorByMat4

▸ **transformVectorByMat4**(`out`, `a`, `m`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

Transforms a vector `a` by a homogenous transformation matrix `m`.  The translation component of
`m` is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `a` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `m` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L92)

___

### transformVectorByMat4Transpose

▸ **transformVectorByMat4Transpose**(`out`, `a`, `m`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

Transforms a vector `a` by the transpose of a homogenous transformation matrix `m`.  The
translation component of `m` is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `a` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `m` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/geom.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L104)

___

### translationRotationScaleZReflectionToMat4

▸ **translationRotationScaleZReflectionToMat4**(`out`, `translation`, `rotation`, `scale`, `zReflection`): [`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |
| `translation` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `rotation` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |
| `scale` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |
| `zReflection` | `number` |

#### Returns

[`mat4`](../classes/neuroglancer_util_geom.mat4.md)

#### Defined in

[src/neuroglancer/util/geom.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L112)

___

### vec3Key

▸ **vec3Key**(`x`): `string`

Implements a one-to-one conversion from Vec3 to string, suitable for use a Map key.

Specifically, returns the string representation of the 3 values separated by commas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/geom.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/geom.ts#L50)
