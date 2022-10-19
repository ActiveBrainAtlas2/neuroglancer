[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/perspective\_view/render\_layer](../modules/neuroglancer_perspective_view_render_layer.md) / PerspectiveViewRenderContext

# Interface: PerspectiveViewRenderContext

[neuroglancer/perspective_view/render_layer](../modules/neuroglancer_perspective_view_render_layer.md).PerspectiveViewRenderContext

## Hierarchy

- [`PerspectiveViewReadyRenderContext`](neuroglancer_perspective_view_render_layer.PerspectiveViewReadyRenderContext.md)

- [`ThreeDimensionalRenderContext`](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md)

  ↳ **`PerspectiveViewRenderContext`**

## Table of contents

### Properties

- [alreadyEmittedPickID](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#alreadyemittedpickid)
- [ambientLighting](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#ambientlighting)
- [directionalLighting](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#directionallighting)
- [emitColor](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#emitcolor)
- [emitPickID](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#emitpickid)
- [emitter](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#emitter)
- [lightDirection](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#lightdirection)
- [pickIDs](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#pickids)
- [projectionParameters](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#projectionparameters)
- [wireFrame](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md#wireframe)

## Properties

### alreadyEmittedPickID

• **alreadyEmittedPickID**: `boolean`

Specifies whether there was a previous pick ID pass.

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L46)

___

### ambientLighting

• **ambientLighting**: `number`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L29)

___

### directionalLighting

• **directionalLighting**: `number`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L30)

___

### emitColor

• **emitColor**: `boolean`

Specifies whether the emitted color value will be used.

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L36)

___

### emitPickID

• **emitPickID**: `boolean`

Specifies whether the emitted pick ID will be used.

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L41)

___

### emitter

• **emitter**: [`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L31)

___

### lightDirection

• **lightDirection**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L28)

___

### pickIDs

• **pickIDs**: [`PickIDManager`](../classes/neuroglancer_object_picking.PickIDManager.md)

#### Inherited from

[ThreeDimensionalRenderContext](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md).[pickIDs](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md#pickids)

#### Defined in

[src/neuroglancer/renderlayer.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L96)

___

### projectionParameters

• **projectionParameters**: [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md)

#### Inherited from

[ThreeDimensionalRenderContext](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md).[projectionParameters](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md#projectionparameters)

#### Defined in

[src/neuroglancer/renderlayer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L92)

___

### wireFrame

• **wireFrame**: `boolean`

#### Inherited from

[ThreeDimensionalRenderContext](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md).[wireFrame](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md#wireframe)

#### Defined in

[src/neuroglancer/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L97)
