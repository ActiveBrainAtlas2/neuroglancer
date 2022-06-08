[neuroglancer](../README.md) / [Modules](../modules.md) / display\_context

# Module: display\_context

## Table of contents

### Classes

- [DisplayContext](../classes/display_context.DisplayContext.md)
- [IndirectRenderedPanel](../classes/display_context.IndirectRenderedPanel.md)
- [RenderViewport](../classes/display_context.RenderViewport.md)
- [RenderedPanel](../classes/display_context.RenderedPanel.md)
- [TrackableWindowedViewport](../classes/display_context.TrackableWindowedViewport.md)

### Functions

- [applyRenderViewportToProjectionMatrix](display_context.md#applyrenderviewporttoprojectionmatrix)
- [renderViewportsEqual](display_context.md#renderviewportsequal)

## Functions

### applyRenderViewportToProjectionMatrix

▸ **applyRenderViewportToProjectionMatrix**(`viewport`, `projectionMatrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`RenderViewport`](../classes/display_context.RenderViewport.md) |
| `projectionMatrix` | `mat4` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/display_context.ts#L55)

___

### renderViewportsEqual

▸ **renderViewportsEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RenderViewport`](../classes/display_context.RenderViewport.md) |
| `b` | [`RenderViewport`](../classes/display_context.RenderViewport.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/display_context.ts#L73)
