[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/display\_context

# Module: neuroglancer/display\_context

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_display_context._internal_.md)

### Classes

- [DisplayContext](../classes/neuroglancer_display_context.DisplayContext.md)
- [IndirectRenderedPanel](../classes/neuroglancer_display_context.IndirectRenderedPanel.md)
- [RenderViewport](../classes/neuroglancer_display_context.RenderViewport.md)
- [RenderedPanel](../classes/neuroglancer_display_context.RenderedPanel.md)
- [TrackableWindowedViewport](../classes/neuroglancer_display_context.TrackableWindowedViewport.md)

### Functions

- [applyRenderViewportToProjectionMatrix](neuroglancer_display_context.md#applyrenderviewporttoprojectionmatrix)
- [renderViewportsEqual](neuroglancer_display_context.md#renderviewportsequal)

## Functions

### applyRenderViewportToProjectionMatrix

▸ **applyRenderViewportToProjectionMatrix**(`viewport`, `projectionMatrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`RenderViewport`](../classes/neuroglancer_display_context.RenderViewport.md) |
| `projectionMatrix` | [`mat4`](../classes/neuroglancer_util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L55)

___

### renderViewportsEqual

▸ **renderViewportsEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RenderViewport`](../classes/neuroglancer_display_context.RenderViewport.md) |
| `b` | [`RenderViewport`](../classes/neuroglancer_display_context.RenderViewport.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L73)
