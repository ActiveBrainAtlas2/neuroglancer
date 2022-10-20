[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md) / OffscreenCopyHelper

# Class: OffscreenCopyHelper

[neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md).OffscreenCopyHelper

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

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`OffscreenCopyHelper`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#constructor)

### Properties

- [copyTexCoordsBuffer](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#copytexcoordsbuffer)
- [copyVertexPositionsBuffer](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#copyvertexpositionsbuffer)
- [disposedStacks](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#disposedstacks)
- [gl](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#gl)
- [refCount](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#refcount)
- [shader](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#shader)
- [wasDisposed](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#wasdisposed)

### Methods

- [addRef](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#addref)
- [dispose](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#dispose)
- [disposed](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#disposed)
- [draw](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#draw)
- [refCountReachedZero](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#registereventlistener)
- [unregisterDisposer](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#unregisterdisposer)
- [get](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md#get)

## Constructors

### constructor

• **new OffscreenCopyHelper**(`gl`, `shader`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L268)

## Properties

### copyTexCoordsBuffer

• `Private` **copyTexCoordsBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L273)

___

### copyVertexPositionsBuffer

• `Private` **copyVertexPositionsBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L272)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L268)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### shader

• **shader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L268)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Returns

[`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(...`textures`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...textures` | (``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture))[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L275)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### get

▸ `Static` **get**(`gl`, `shaderModule?`, `numTextures?`): [`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `shaderModule` | [`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule) | `defineCopyFragmentShader` |
| `numTextures` | `number` | `1` |

#### Returns

[`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L304)
