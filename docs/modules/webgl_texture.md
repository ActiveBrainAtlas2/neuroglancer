[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/texture

# Module: webgl/texture

## Table of contents

### Functions

- [resizeTexture](webgl_texture.md#resizetexture)
- [setRawTexture3DParameters](webgl_texture.md#setrawtexture3dparameters)
- [setRawTextureParameters](webgl_texture.md#setrawtextureparameters)
- [setTextureFromCanvas](webgl_texture.md#settexturefromcanvas)

## Functions

### resizeTexture

▸ **resizeTexture**(`gl`, `texture`, `width`, `height`, `internalFormat?`, `format?`, `dataType?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) | `undefined` |
| `texture` | ``null`` \| [`WebGLTexture`](annotation_annotation_layer_state._internal_.md#webgltexture) | `undefined` |
| `width` | `number` | `undefined` |
| `height` | `number` | `undefined` |
| `internalFormat` | `number` | `WebGL2RenderingContext.RGBA8` |
| `format` | `number` | `WebGL2RenderingContext.RGBA` |
| `dataType` | `number` | `WebGL2RenderingContext.UNSIGNED_BYTE` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture.ts#L46)

___

### setRawTexture3DParameters

▸ **setRawTexture3DParameters**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture.ts#L34)

___

### setRawTextureParameters

▸ **setRawTextureParameters**(`gl`): `void`

Sets parameters to make a texture suitable for use as a raw array: NEAREST
filtering, clamping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture.ts#L23)

___

### setTextureFromCanvas

▸ **setTextureFromCanvas**(`gl`, `texture`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `texture` | ``null`` \| [`WebGLTexture`](annotation_annotation_layer_state._internal_.md#webgltexture) |
| `canvas` | [`HTMLCanvasElement`](annotation_annotation_layer_state._internal_.md#htmlcanvaselement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture.ts#L63)
