[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/ellipse

# Module: neuroglancer/webgl/ellipse

## Table of contents

### Variables

- [glsl\_CenterOrientEllipse](neuroglancer_webgl_ellipse.md#glsl_centerorientellipse)
- [glsl\_EllipseQuadraticForm](neuroglancer_webgl_ellipse.md#glsl_ellipsequadraticform)
- [glsl\_computeCenterOrientEllipse](neuroglancer_webgl_ellipse.md#glsl_computecenterorientellipse)
- [glsl\_computeCrossSectionEllipse](neuroglancer_webgl_ellipse.md#glsl_computecrosssectionellipse)

### Functions

- [computeCenterOrientEllipseDebug](neuroglancer_webgl_ellipse.md#computecenterorientellipsedebug)
- [computeCrossSectionEllipseDebug](neuroglancer_webgl_ellipse.md#computecrosssectionellipsedebug)

## Variables

### glsl\_CenterOrientEllipse

• `Const` **glsl\_CenterOrientEllipse**: ``"\nstruct CenterOrientEllipse {\n  vec2 k;   // center\n  vec2 u1;  // minor axis direction\n  vec2 u2;  // major axis direction\n  float a;  // semimajor axis\n  float b;  // semiminor axis\n  bool valid; // indicates if the ellipse is valid\n};\n"``

#### Defined in

[src/neuroglancer/webgl/ellipse.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/ellipse.ts#L73)

___

### glsl\_EllipseQuadraticForm

• `Const` **glsl\_EllipseQuadraticForm**: ``"\nstruct EllipseQuadraticForm {\n  highp float A;  // x*x coefficient\n  highp float B;  // x*y coefficient\n  highp float C;  // y*y coefficient\n  highp float D;  // x coefficient\n  highp float E;  // y coefficient\n  highp float F;  // 1 coefficient\n};\n"``

Specifies the parameters of an ellipse in quadratic form.

#### Defined in

[src/neuroglancer/webgl/ellipse.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/ellipse.ts#L26)

___

### glsl\_computeCenterOrientEllipse

• `Const` **glsl\_computeCenterOrientEllipse**: `string`[]

Compute the center-orient parameterization of an ellipse from the quadratic parameterization.

See: https://www.geometrictools.com/Documentation/InformationAboutEllipses.pdf

#### Defined in

[src/neuroglancer/webgl/ellipse.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/ellipse.ts#L89)

___

### glsl\_computeCrossSectionEllipse

• `Const` **glsl\_computeCrossSectionEllipse**: `string`[]

Given a 3-d ellipsoid, finds the ellipse corresponding to the z=0 cross-section.

**`Param`**

The positive semi-definite matrix defining the ellipsoid shape.

**`Param`**

The centroid.

#### Defined in

[src/neuroglancer/webgl/ellipse.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/ellipse.ts#L42)

## Functions

### computeCenterOrientEllipseDebug

▸ **computeCenterOrientEllipseDebug**(`p`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |
| `p.A` | `number` |
| `p.B` | `number` |
| `p.C` | `number` |
| `p.D` | `number` |
| `p.E` | `number` |
| `p.F` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `k` | [`vec2`](../classes/neuroglancer_util_geom.vec2.md) |
| `lambda1` | `number` |
| `lambda2` | `number` |
| `m11` | `number` |
| `m12` | `number` |
| `m22` | `number` |
| `u1` | [`vec2`](../classes/neuroglancer_util_geom.vec2.md) |
| `u2` | [`vec2`](../classes/neuroglancer_util_geom.vec2.md) |
| `valid` | `boolean` |

#### Defined in

[src/neuroglancer/webgl/ellipse.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/ellipse.ts#L126)

___

### computeCrossSectionEllipseDebug

▸ **computeCrossSectionEllipseDebug**(`Ao`, `c`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Ao` | [`mat3`](../classes/neuroglancer_util_geom.mat3.md) |
| `c` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `A` | `number` |
| `B` | `number` |
| `C` | `number` |
| `D` | `number` |
| `E` | `number` |
| `F` | `number` |

#### Defined in

[src/neuroglancer/webgl/ellipse.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/ellipse.ts#L59)
