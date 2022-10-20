[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/circles

# Module: neuroglancer/webgl/circles

## Table of contents

### Variables

- [VERTICES\_PER\_CIRCLE](neuroglancer_webgl_circles.md#vertices_per_circle)

### Functions

- [defineCircleShader](neuroglancer_webgl_circles.md#definecircleshader)
- [drawCircles](neuroglancer_webgl_circles.md#drawcircles)
- [initializeCircleShader](neuroglancer_webgl_circles.md#initializecircleshader)

## Variables

### VERTICES\_PER\_CIRCLE

• `Const` **VERTICES\_PER\_CIRCLE**: ``6``

#### Defined in

[src/neuroglancer/webgl/circles.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/circles.ts#L24)

## Functions

### defineCircleShader

▸ **defineCircleShader**(`builder`, `crossSectionFade`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |
| `crossSectionFade` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/circles.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/circles.ts#L26)

___

### drawCircles

▸ **drawCircles**(`gl`, `circlesPerInstance`, `numInstances`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](main_module._internal_.md#webgl2renderingcontext) |
| `circlesPerInstance` | `number` |
| `numInstances` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/circles.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/circles.ts#L90)

___

### initializeCircleShader

▸ **initializeCircleShader**(`shader`, `projectionParameters`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |
| `projectionParameters` | `Object` |
| `projectionParameters.height` | `number` |
| `projectionParameters.width` | `number` |
| `options` | `Object` |
| `options.featherWidthInPixels` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/circles.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/circles.ts#L81)
