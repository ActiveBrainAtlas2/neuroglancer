[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/axes\_lines](../modules/neuroglancer_axes_lines.md) / AxesLineHelper

# Class: AxesLineHelper

[neuroglancer/axes_lines](../modules/neuroglancer_axes_lines.md).AxesLineHelper

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

  ↳ **`AxesLineHelper`**

## Table of contents

### Constructors

- [constructor](neuroglancer_axes_lines.AxesLineHelper.md#constructor)

### Properties

- [colorBuffer](neuroglancer_axes_lines.AxesLineHelper.md#colorbuffer)
- [disposedStacks](neuroglancer_axes_lines.AxesLineHelper.md#disposedstacks)
- [gl](neuroglancer_axes_lines.AxesLineHelper.md#gl)
- [refCount](neuroglancer_axes_lines.AxesLineHelper.md#refcount)
- [trivialColorShader](neuroglancer_axes_lines.AxesLineHelper.md#trivialcolorshader)
- [vertexBuffer](neuroglancer_axes_lines.AxesLineHelper.md#vertexbuffer)
- [wasDisposed](neuroglancer_axes_lines.AxesLineHelper.md#wasdisposed)

### Methods

- [addRef](neuroglancer_axes_lines.AxesLineHelper.md#addref)
- [dispose](neuroglancer_axes_lines.AxesLineHelper.md#dispose)
- [disposed](neuroglancer_axes_lines.AxesLineHelper.md#disposed)
- [draw](neuroglancer_axes_lines.AxesLineHelper.md#draw)
- [refCountReachedZero](neuroglancer_axes_lines.AxesLineHelper.md#refcountreachedzero)
- [registerCancellable](neuroglancer_axes_lines.AxesLineHelper.md#registercancellable)
- [registerDisposer](neuroglancer_axes_lines.AxesLineHelper.md#registerdisposer)
- [registerEventListener](neuroglancer_axes_lines.AxesLineHelper.md#registereventlistener)
- [unregisterDisposer](neuroglancer_axes_lines.AxesLineHelper.md#unregisterdisposer)
- [get](neuroglancer_axes_lines.AxesLineHelper.md#get)

## Constructors

### constructor

• **new AxesLineHelper**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/axes_lines.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/axes_lines.ts#L48)

## Properties

### colorBuffer

• **colorBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/axes_lines.ts#L45)

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

[src/neuroglancer/axes_lines.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/axes_lines.ts#L48)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### trivialColorShader

• **trivialColorShader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/axes_lines.ts#L46)

___

### vertexBuffer

• **vertexBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/axes_lines.ts#L44)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AxesLineHelper`](neuroglancer_axes_lines.AxesLineHelper.md)

#### Returns

[`AxesLineHelper`](neuroglancer_axes_lines.AxesLineHelper.md)

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

▸ **draw**(`mat`, `blend?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | [`mat4`](neuroglancer_util_geom.mat4.md) | `undefined` |
| `blend` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/axes_lines.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/axes_lines.ts#L79)

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

▸ `Static` **get**(`gl`): [`AxesLineHelper`](neuroglancer_axes_lines.AxesLineHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`AxesLineHelper`](neuroglancer_axes_lines.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/axes_lines.ts#L75)
