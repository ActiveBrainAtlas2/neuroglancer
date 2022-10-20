[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/quad

# Module: neuroglancer/webgl/quad

## Table of contents

### Variables

- [TRIANGLES\_PER\_QUAD](neuroglancer_webgl_quad.md#triangles_per_quad)
- [VERTICES\_PER\_QUAD](neuroglancer_webgl_quad.md#vertices_per_quad)
- [glsl\_getQuadVertexPosition](neuroglancer_webgl_quad.md#glsl_getquadvertexposition)

### Functions

- [drawQuads](neuroglancer_webgl_quad.md#drawquads)

## Variables

### TRIANGLES\_PER\_QUAD

• `Const` **TRIANGLES\_PER\_QUAD**: ``2``

#### Defined in

[src/neuroglancer/webgl/quad.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/quad.ts#L22)

___

### VERTICES\_PER\_QUAD

• `Const` **VERTICES\_PER\_QUAD**: ``6``

**`File`**

Facilities for drawing quads in WebGL as two triangles.

#### Defined in

[src/neuroglancer/webgl/quad.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/quad.ts#L21)

___

### glsl\_getQuadVertexPosition

• `Const` **glsl\_getQuadVertexPosition**: ``"\nvec2 getQuadVertexPosition(vec2 lower, vec2 upper) {\n  const vec2 coeffs[] = vec2[](\n    vec2(0.0, 0.0),\n    vec2(0.0, 1.0),\n    vec2(1.0, 1.0),\n    vec2(1.0, 1.0),\n    vec2(1.0, 0.0),\n    vec2(0.0, 0.0)\n  );\n  int v = gl_VertexID % 6;\n  return mix(lower, upper, coeffs[v]);\n}\n"``

#### Defined in

[src/neuroglancer/webgl/quad.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/quad.ts#L25)

## Functions

### drawQuads

▸ **drawQuads**(`gl`, `quadsPerInstance`, `numInstances`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](main_module._internal_.md#webgl2renderingcontext) |
| `quadsPerInstance` | `number` |
| `numInstances` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/quad.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/quad.ts#L40)
