[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md) / DepthStencilRenderbuffer

# Class: DepthStencilRenderbuffer

[neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md).DepthStencilRenderbuffer

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

- [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md)

  ↳ **`DepthStencilRenderbuffer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#constructor)

### Properties

- [disposedStacks](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#disposedstacks)
- [gl](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#gl)
- [height](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#height)
- [includeStencilBuffer](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#includestencilbuffer)
- [internalformat](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#internalformat)
- [refCount](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#refcount)
- [renderbuffer](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#renderbuffer)
- [wasDisposed](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#wasdisposed)
- [width](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#width)

### Methods

- [addRef](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#addref)
- [attachToFramebuffer](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#attachtoframebuffer)
- [dispose](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#dispose)
- [disposed](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#disposed)
- [hasSize](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#hassize)
- [performResize](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#performresize)
- [refCountReachedZero](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#registereventlistener)
- [resize](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#resize)
- [unregisterDisposer](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new DepthStencilRenderbuffer**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Overrides

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[constructor](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L83)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[disposedStacks](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[gl](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#gl)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L72)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[height](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L28)

___

### includeStencilBuffer

• **includeStencilBuffer**: `boolean` = `false`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[includeStencilBuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#includestencilbuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L72)

___

### internalformat

• **internalformat**: `number`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[internalformat](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#internalformat)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L49)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[refCount](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderbuffer

• **renderbuffer**: ``null`` \| [`WebGLRenderbuffer`](../modules/main_module._internal_.md#webglrenderbuffer) = `null`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[renderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#renderbuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L47)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[wasDisposed](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[width](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`DepthStencilRenderbuffer`](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md)

#### Returns

[`DepthStencilRenderbuffer`](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md)

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[addRef](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(): `void`

#### Returns

`void`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[attachToFramebuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#attachtoframebuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L75)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[dispose](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[disposed](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#disposed)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L61)

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

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[hasSize](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[performResize](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/offscreen.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[refCountReachedZero](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#refcountreachedzero)

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

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[registerCancellable](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#registercancellable)

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

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[registerDisposer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#registerdisposer)

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

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[registerEventListener](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#registereventlistener)

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

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[resize](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#resize)

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

[DepthRenderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md).[unregisterDisposer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
