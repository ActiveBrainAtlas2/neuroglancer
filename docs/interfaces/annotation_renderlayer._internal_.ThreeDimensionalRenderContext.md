[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / ThreeDimensionalRenderContext

# Interface: ThreeDimensionalRenderContext

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).ThreeDimensionalRenderContext

## Hierarchy

- [`ThreeDimensionalReadyRenderContext`](annotation_renderlayer._internal_.ThreeDimensionalReadyRenderContext.md)

  ↳ **`ThreeDimensionalRenderContext`**

  ↳↳ [`PerspectiveViewRenderContext`](perspective_view_render_layer.PerspectiveViewRenderContext.md)

  ↳↳ [`SliceViewPanelRenderContext`](sliceview_renderlayer.SliceViewPanelRenderContext.md)

## Table of contents

### Properties

- [pickIDs](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md#pickids)
- [projectionParameters](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md#projectionparameters)
- [wireFrame](annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md#wireframe)

## Properties

### pickIDs

• **pickIDs**: [`PickIDManager`](../classes/annotation_renderlayer._internal_.PickIDManager.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L96)

___

### projectionParameters

• **projectionParameters**: [`ProjectionParameters`](../classes/annotation_base._internal_.ProjectionParameters.md)

#### Inherited from

[ThreeDimensionalReadyRenderContext](annotation_renderlayer._internal_.ThreeDimensionalReadyRenderContext.md).[projectionParameters](annotation_renderlayer._internal_.ThreeDimensionalReadyRenderContext.md#projectionparameters)

#### Defined in

[src/neuroglancer/renderlayer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L92)

___

### wireFrame

• **wireFrame**: `boolean`

#### Defined in

[src/neuroglancer/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L97)
