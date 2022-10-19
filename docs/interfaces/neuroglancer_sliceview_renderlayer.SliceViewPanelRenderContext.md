[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md) / SliceViewPanelRenderContext

# Interface: SliceViewPanelRenderContext

[neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md).SliceViewPanelRenderContext

## Hierarchy

- [`SliceViewPanelReadyRenderContext`](neuroglancer_sliceview_renderlayer.SliceViewPanelReadyRenderContext.md)

- [`ThreeDimensionalRenderContext`](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md)

  ↳ **`SliceViewPanelRenderContext`**

## Table of contents

### Properties

- [emitColor](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md#emitcolor)
- [emitPickID](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md#emitpickid)
- [emitter](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md#emitter)
- [pickIDs](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md#pickids)
- [projectionParameters](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md#projectionparameters)
- [sliceView](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md#sliceview)
- [wireFrame](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md#wireframe)

## Properties

### emitColor

• **emitColor**: `boolean`

Specifies whether the emitted color value will be used.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L211)

___

### emitPickID

• **emitPickID**: `boolean`

Specifies whether the emitted pick ID will be used.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L216)

___

### emitter

• **emitter**: [`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L206)

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

### sliceView

• **sliceView**: [`SliceView`](../classes/neuroglancer_sliceview_frontend.SliceView.md)

#### Inherited from

[SliceViewPanelReadyRenderContext](neuroglancer_sliceview_renderlayer.SliceViewPanelReadyRenderContext.md).[sliceView](neuroglancer_sliceview_renderlayer.SliceViewPanelReadyRenderContext.md#sliceview)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L201)

___

### wireFrame

• **wireFrame**: `boolean`

#### Inherited from

[ThreeDimensionalRenderContext](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md).[wireFrame](neuroglancer_renderlayer.ThreeDimensionalRenderContext.md#wireframe)

#### Defined in

[src/neuroglancer/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L97)
