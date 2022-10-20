[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md) / TextureBuffer

# Class: TextureBuffer

[neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md).TextureBuffer

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

- [`SizeManaged`](neuroglancer_webgl_offscreen.SizeManaged.md)

  ↳ **`TextureBuffer`**

  ↳↳ [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_offscreen.TextureBuffer.md#constructor)

### Properties

- [dataType](neuroglancer_webgl_offscreen.TextureBuffer.md#datatype)
- [disposedStacks](neuroglancer_webgl_offscreen.TextureBuffer.md#disposedstacks)
- [format](neuroglancer_webgl_offscreen.TextureBuffer.md#format)
- [gl](neuroglancer_webgl_offscreen.TextureBuffer.md#gl)
- [height](neuroglancer_webgl_offscreen.TextureBuffer.md#height)
- [internalFormat](neuroglancer_webgl_offscreen.TextureBuffer.md#internalformat)
- [refCount](neuroglancer_webgl_offscreen.TextureBuffer.md#refcount)
- [texture](neuroglancer_webgl_offscreen.TextureBuffer.md#texture)
- [wasDisposed](neuroglancer_webgl_offscreen.TextureBuffer.md#wasdisposed)
- [width](neuroglancer_webgl_offscreen.TextureBuffer.md#width)

### Methods

- [addRef](neuroglancer_webgl_offscreen.TextureBuffer.md#addref)
- [attachToFramebuffer](neuroglancer_webgl_offscreen.TextureBuffer.md#attachtoframebuffer)
- [dispose](neuroglancer_webgl_offscreen.TextureBuffer.md#dispose)
- [disposed](neuroglancer_webgl_offscreen.TextureBuffer.md#disposed)
- [hasSize](neuroglancer_webgl_offscreen.TextureBuffer.md#hassize)
- [performResize](neuroglancer_webgl_offscreen.TextureBuffer.md#performresize)
- [refCountReachedZero](neuroglancer_webgl_offscreen.TextureBuffer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_offscreen.TextureBuffer.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_offscreen.TextureBuffer.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_offscreen.TextureBuffer.md#registereventlistener)
- [resize](neuroglancer_webgl_offscreen.TextureBuffer.md#resize)
- [unregisterDisposer](neuroglancer_webgl_offscreen.TextureBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new TextureBuffer**(`gl`, `internalFormat`, `format`, `dataType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `internalFormat` | `number` |
| `format` | `number` |
| `dataType` | `number` |

#### Overrides

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[constructor](neuroglancer_webgl_offscreen.SizeManaged.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

## Properties

### dataType

• **dataType**: `number`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[disposedStacks](neuroglancer_webgl_offscreen.SizeManaged.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### format

• **format**: `number`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[height](neuroglancer_webgl_offscreen.SizeManaged.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L28)

___

### internalFormat

• **internalFormat**: `number`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L112)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[refCount](neuroglancer_webgl_offscreen.SizeManaged.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[wasDisposed](neuroglancer_webgl_offscreen.SizeManaged.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[width](neuroglancer_webgl_offscreen.SizeManaged.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md)

#### Returns

[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md)

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[addRef](neuroglancer_webgl_offscreen.SizeManaged.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L125)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[dispose](neuroglancer_webgl_offscreen.SizeManaged.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[disposed](neuroglancer_webgl_offscreen.SizeManaged.md#disposed)

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

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[hasSize](neuroglancer_webgl_offscreen.SizeManaged.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[performResize](neuroglancer_webgl_offscreen.SizeManaged.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L117)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[refCountReachedZero](neuroglancer_webgl_offscreen.SizeManaged.md#refcountreachedzero)

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

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[registerCancellable](neuroglancer_webgl_offscreen.SizeManaged.md#registercancellable)

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

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[registerDisposer](neuroglancer_webgl_offscreen.SizeManaged.md#registerdisposer)

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

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[registerEventListener](neuroglancer_webgl_offscreen.SizeManaged.md#registereventlistener)

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

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[resize](neuroglancer_webgl_offscreen.SizeManaged.md#resize)

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

[SizeManaged](neuroglancer_webgl_offscreen.SizeManaged.md).[unregisterDisposer](neuroglancer_webgl_offscreen.SizeManaged.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
