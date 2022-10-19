[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/offscreen

# Module: webgl/offscreen

## Table of contents

### Classes

- [DepthRenderbuffer](../classes/webgl_offscreen.DepthRenderbuffer.md)
- [DepthStencilRenderbuffer](../classes/webgl_offscreen.DepthStencilRenderbuffer.md)
- [DepthTextureBuffer](../classes/webgl_offscreen.DepthTextureBuffer.md)
- [Framebuffer](../classes/webgl_offscreen.Framebuffer.md)
- [FramebufferConfiguration](../classes/webgl_offscreen.FramebufferConfiguration.md)
- [OffscreenCopyHelper](../classes/webgl_offscreen.OffscreenCopyHelper.md)
- [Renderbuffer](../classes/webgl_offscreen.Renderbuffer.md)
- [SizeManaged](../classes/webgl_offscreen.SizeManaged.md)
- [TextureBuffer](../classes/webgl_offscreen.TextureBuffer.md)

### Variables

- [StencilRenderbuffer](webgl_offscreen.md#stencilrenderbuffer)

### Functions

- [makeTextureBuffers](webgl_offscreen.md#maketexturebuffers)

## Variables

### StencilRenderbuffer

• `Const` **StencilRenderbuffer**: typeof [`DepthStencilRenderbuffer`](../classes/webgl_offscreen.DepthStencilRenderbuffer.md) = `DepthStencilRenderbuffer`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L88)

## Functions

### makeTextureBuffers

▸ **makeTextureBuffers**(`gl`, `count`, `internalFormat?`, `format?`, `dataType?`): [`TextureBuffer`](../classes/webgl_offscreen.TextureBuffer.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) | `undefined` |
| `count` | `number` | `undefined` |
| `internalFormat` | `number` | `WebGL2RenderingContext.RGBA8` |
| `format` | `number` | `WebGL2RenderingContext.RGBA` |
| `dataType` | `number` | `WebGL2RenderingContext.UNSIGNED_BYTE` |

#### Returns

[`TextureBuffer`](../classes/webgl_offscreen.TextureBuffer.md)[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L147)
