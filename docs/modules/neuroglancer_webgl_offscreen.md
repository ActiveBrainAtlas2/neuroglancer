[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/offscreen

# Module: neuroglancer/webgl/offscreen

## Table of contents

### Classes

- [DepthRenderbuffer](../classes/neuroglancer_webgl_offscreen.DepthRenderbuffer.md)
- [DepthStencilRenderbuffer](../classes/neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md)
- [DepthTextureBuffer](../classes/neuroglancer_webgl_offscreen.DepthTextureBuffer.md)
- [Framebuffer](../classes/neuroglancer_webgl_offscreen.Framebuffer.md)
- [FramebufferConfiguration](../classes/neuroglancer_webgl_offscreen.FramebufferConfiguration.md)
- [OffscreenCopyHelper](../classes/neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)
- [Renderbuffer](../classes/neuroglancer_webgl_offscreen.Renderbuffer.md)
- [SizeManaged](../classes/neuroglancer_webgl_offscreen.SizeManaged.md)
- [TextureBuffer](../classes/neuroglancer_webgl_offscreen.TextureBuffer.md)

### Variables

- [StencilRenderbuffer](neuroglancer_webgl_offscreen.md#stencilrenderbuffer)

### Functions

- [makeTextureBuffers](neuroglancer_webgl_offscreen.md#maketexturebuffers)

## Variables

### StencilRenderbuffer

• `Const` **StencilRenderbuffer**: typeof [`DepthStencilRenderbuffer`](../classes/neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md) = `DepthStencilRenderbuffer`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L88)

## Functions

### makeTextureBuffers

▸ **makeTextureBuffers**(`gl`, `count`, `internalFormat?`, `format?`, `dataType?`): [`TextureBuffer`](../classes/neuroglancer_webgl_offscreen.TextureBuffer.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `count` | `number` | `undefined` |
| `internalFormat` | `number` | `WebGL2RenderingContext.RGBA8` |
| `format` | `number` | `WebGL2RenderingContext.RGBA` |
| `dataType` | `number` | `WebGL2RenderingContext.UNSIGNED_BYTE` |

#### Returns

[`TextureBuffer`](../classes/neuroglancer_webgl_offscreen.TextureBuffer.md)[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L147)
