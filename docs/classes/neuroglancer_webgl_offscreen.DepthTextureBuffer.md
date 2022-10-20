[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md) / DepthTextureBuffer

# Class: DepthTextureBuffer

[neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md).DepthTextureBuffer

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md)

  ↳ **`DepthTextureBuffer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#constructor)

### Properties

- [dataType](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#datatype)
- [disposedStacks](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#disposedstacks)
- [format](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#format)
- [gl](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#gl)
- [height](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#height)
- [internalFormat](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#internalformat)
- [refCount](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#refcount)
- [texture](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#texture)
- [wasDisposed](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#wasdisposed)
- [width](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#width)

### Methods

- [addRef](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#addref)
- [attachToFramebuffer](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#attachtoframebuffer)
- [dispose](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#dispose)
- [disposed](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#disposed)
- [hasSize](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#hassize)
- [performResize](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#performresize)
- [refCountReachedZero](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#registereventlistener)
- [resize](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#resize)
- [unregisterDisposer](neuroglancer_webgl_offscreen.DepthTextureBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new DepthTextureBuffer**(`gl`, `internalFormat?`, `format?`, `dataType?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `internalFormat` | `number` | `WebGL2RenderingContext.DEPTH_COMPONENT16` |
| `format` | `number` | `WebGL2RenderingContext.DEPTH_COMPONENT` |
| `dataType` | `number` | `WebGL2RenderingContext.UNSIGNED_SHORT` |

#### Overrides

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[constructor](neuroglancer_webgl_offscreen.TextureBuffer.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L132)

## Properties

### dataType

• **dataType**: `number`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[dataType](neuroglancer_webgl_offscreen.TextureBuffer.md#datatype)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[disposedStacks](neuroglancer_webgl_offscreen.TextureBuffer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### format

• **format**: `number`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[format](neuroglancer_webgl_offscreen.TextureBuffer.md#format)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[gl](neuroglancer_webgl_offscreen.TextureBuffer.md#gl)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[height](neuroglancer_webgl_offscreen.TextureBuffer.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L28)

___

### internalFormat

• **internalFormat**: `number`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[internalFormat](neuroglancer_webgl_offscreen.TextureBuffer.md#internalformat)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[refCount](neuroglancer_webgl_offscreen.TextureBuffer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture)

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[texture](neuroglancer_webgl_offscreen.TextureBuffer.md#texture)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[wasDisposed](neuroglancer_webgl_offscreen.TextureBuffer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[width](neuroglancer_webgl_offscreen.TextureBuffer.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)

#### Returns

[`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[addRef](neuroglancer_webgl_offscreen.TextureBuffer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(): `void`

#### Returns

`void`

#### Overrides

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[attachToFramebuffer](neuroglancer_webgl_offscreen.TextureBuffer.md#attachtoframebuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L139)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[dispose](neuroglancer_webgl_offscreen.TextureBuffer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[disposed](neuroglancer_webgl_offscreen.TextureBuffer.md#disposed)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L121)

___

### hasSize

▸ **hasSize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[hasSize](neuroglancer_webgl_offscreen.TextureBuffer.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[performResize](neuroglancer_webgl_offscreen.TextureBuffer.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L117)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[refCountReachedZero](neuroglancer_webgl_offscreen.TextureBuffer.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[registerCancellable](neuroglancer_webgl_offscreen.TextureBuffer.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[registerDisposer](neuroglancer_webgl_offscreen.TextureBuffer.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[registerEventListener](neuroglancer_webgl_offscreen.TextureBuffer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### resize

▸ **resize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[resize](neuroglancer_webgl_offscreen.TextureBuffer.md#resize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L34)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[TextureBuffer](neuroglancer_webgl_offscreen.TextureBuffer.md).[unregisterDisposer](neuroglancer_webgl_offscreen.TextureBuffer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
