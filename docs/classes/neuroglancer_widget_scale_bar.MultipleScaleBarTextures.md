[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/scale\_bar](../modules/neuroglancer_widget_scale_bar.md) / MultipleScaleBarTextures

# Class: MultipleScaleBarTextures

[neuroglancer/widget/scale_bar](../modules/neuroglancer_widget_scale_bar.md).MultipleScaleBarTextures

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

  ↳ **`MultipleScaleBarTextures`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#disposedstacks)
- [gl](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#gl)
- [refCount](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#refcount)
- [scaleBarCopyHelper](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#scalebarcopyhelper)
- [scaleBars](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#scalebars)
- [wasDisposed](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#addref)
- [dispose](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#dispose)
- [disposed](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#disposed)
- [draw](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#draw)
- [refCountReachedZero](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#registercancellable)
- [registerDisposer](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md#unregisterdisposer)

## Constructors

### constructor

• **new MultipleScaleBarTextures**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L248)

## Properties

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

[src/neuroglancer/widget/scale_bar.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L248)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### scaleBarCopyHelper

• `Private` **scaleBarCopyHelper**: [`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L245)

___

### scaleBars

• `Private` **scaleBars**: [`ScaleBarTexture`](neuroglancer_widget_scale_bar.ScaleBarTexture.md)[] = `[]`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L246)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`MultipleScaleBarTextures`](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md)

#### Returns

[`MultipleScaleBarTextures`](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md)

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

▸ **draw**(`viewport`, `displayDimensionRenderInfo`, `relativeDisplayScales`, `effectiveZoom`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`RenderViewport`](neuroglancer_display_context.RenderViewport.md) |
| `displayDimensionRenderInfo` | [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md) |
| `relativeDisplayScales` | [`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md) |
| `effectiveZoom` | `number` |
| `options` | [`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L255)

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
