[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/renderlayer](../modules/sliceview_renderlayer.md) / SliceViewPanelRenderContext

# Interface: SliceViewPanelRenderContext

[sliceview/renderlayer](../modules/sliceview_renderlayer.md).SliceViewPanelRenderContext

## Hierarchy

- [`SliceViewPanelReadyRenderContext`](sliceview_renderlayer.SliceViewPanelReadyRenderContext.md)

- [`ThreeDimensionalRenderContext`](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md)

  ↳ **`SliceViewPanelRenderContext`**

## Table of contents

### Properties

- [emitColor](sliceview_renderlayer.SliceViewPanelRenderContext.md#emitcolor)
- [emitPickID](sliceview_renderlayer.SliceViewPanelRenderContext.md#emitpickid)
- [emitter](sliceview_renderlayer.SliceViewPanelRenderContext.md#emitter)
- [pickIDs](sliceview_renderlayer.SliceViewPanelRenderContext.md#pickids)
- [projectionParameters](sliceview_renderlayer.SliceViewPanelRenderContext.md#projectionparameters)
- [sliceView](sliceview_renderlayer.SliceViewPanelRenderContext.md#sliceview)
- [wireFrame](sliceview_renderlayer.SliceViewPanelRenderContext.md#wireframe)

## Properties

### emitColor

• **emitColor**: `boolean`

Specifies whether the emitted color value will be used.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L211)

___

### emitPickID

• **emitPickID**: `boolean`

Specifies whether the emitted pick ID will be used.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L216)

___

### emitter

• **emitter**: [`ShaderModule`](../modules/webgl_shader.md#shadermodule)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L206)

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

### sliceView

• **sliceView**: [`SliceView`](../classes/sliceview_frontend.SliceView.md)

#### Inherited from

[SliceViewPanelReadyRenderContext](sliceview_renderlayer.SliceViewPanelReadyRenderContext.md).[sliceView](sliceview_renderlayer.SliceViewPanelReadyRenderContext.md#sliceview)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L201)

___

### wireFrame

• **wireFrame**: `boolean`

#### Inherited from

[ThreeDimensionalRenderContext](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md).[wireFrame](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md#wireframe)

#### Defined in

[src/neuroglancer/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L97)
