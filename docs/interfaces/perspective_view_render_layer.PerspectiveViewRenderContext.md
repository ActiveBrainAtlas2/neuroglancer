[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/render\_layer](../modules/perspective_view_render_layer.md) / PerspectiveViewRenderContext

# Interface: PerspectiveViewRenderContext

[perspective_view/render_layer](../modules/perspective_view_render_layer.md).PerspectiveViewRenderContext

## Hierarchy

- [`PerspectiveViewReadyRenderContext`](perspective_view_render_layer.PerspectiveViewReadyRenderContext.md)

- [`ThreeDimensionalRenderContext`](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md)

  ↳ **`PerspectiveViewRenderContext`**

## Table of contents

### Properties

- [alreadyEmittedPickID](perspective_view_render_layer.PerspectiveViewRenderContext.md#alreadyemittedpickid)
- [ambientLighting](perspective_view_render_layer.PerspectiveViewRenderContext.md#ambientlighting)
- [directionalLighting](perspective_view_render_layer.PerspectiveViewRenderContext.md#directionallighting)
- [emitColor](perspective_view_render_layer.PerspectiveViewRenderContext.md#emitcolor)
- [emitPickID](perspective_view_render_layer.PerspectiveViewRenderContext.md#emitpickid)
- [emitter](perspective_view_render_layer.PerspectiveViewRenderContext.md#emitter)
- [lightDirection](perspective_view_render_layer.PerspectiveViewRenderContext.md#lightdirection)
- [pickIDs](perspective_view_render_layer.PerspectiveViewRenderContext.md#pickids)
- [projectionParameters](perspective_view_render_layer.PerspectiveViewRenderContext.md#projectionparameters)
- [wireFrame](perspective_view_render_layer.PerspectiveViewRenderContext.md#wireframe)

## Properties

### alreadyEmittedPickID

• **alreadyEmittedPickID**: `boolean`

Specifies whether there was a previous pick ID pass.

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L46)

___

### ambientLighting

• **ambientLighting**: `number`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L29)

___

### directionalLighting

• **directionalLighting**: `number`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L30)

___

### emitColor

• **emitColor**: `boolean`

Specifies whether the emitted color value will be used.

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L36)

___

### emitPickID

• **emitPickID**: `boolean`

Specifies whether the emitted pick ID will be used.

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L41)

___

### emitter

• **emitter**: [`ShaderModule`](../modules/webgl_shader.md#shadermodule)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L31)

___

### lightDirection

• **lightDirection**: [`vec3`](../classes/util_geom.vec3.md)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L28)

___

### pickIDs

• **pickIDs**: [`PickIDManager`](../classes/annotation_renderlayer._internal_.PickIDManager.md)

#### Inherited from

[ThreeDimensionalRenderContext](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md).[pickIDs](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md#pickids)

#### Defined in

[src/neuroglancer/renderlayer.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L96)

___

### projectionParameters

• **projectionParameters**: [`ProjectionParameters`](../classes/annotation_base._internal_.ProjectionParameters.md)

#### Inherited from

[ThreeDimensionalRenderContext](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md).[projectionParameters](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md#projectionparameters)

#### Defined in

[src/neuroglancer/renderlayer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L92)

___

### wireFrame

• **wireFrame**: `boolean`

#### Inherited from

[ThreeDimensionalRenderContext](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md).[wireFrame](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md#wireframe)

#### Defined in

[src/neuroglancer/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L97)
