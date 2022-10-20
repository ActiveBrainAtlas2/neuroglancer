[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/scale\_bar](../modules/neuroglancer_widget_scale_bar.md) / ScaleBarTexture

# Class: ScaleBarTexture

[neuroglancer/widget/scale_bar](../modules/neuroglancer_widget_scale_bar.md).ScaleBarTexture

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

  ↳ **`ScaleBarTexture`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_scale_bar.ScaleBarTexture.md#constructor)

### Properties

- [dimensions](neuroglancer_widget_scale_bar.ScaleBarTexture.md#dimensions)
- [disposedStacks](neuroglancer_widget_scale_bar.ScaleBarTexture.md#disposedstacks)
- [factor](neuroglancer_widget_scale_bar.ScaleBarTexture.md#factor)
- [gl](neuroglancer_widget_scale_bar.ScaleBarTexture.md#gl)
- [height](neuroglancer_widget_scale_bar.ScaleBarTexture.md#height)
- [label](neuroglancer_widget_scale_bar.ScaleBarTexture.md#label)
- [prevLabel](neuroglancer_widget_scale_bar.ScaleBarTexture.md#prevlabel)
- [priorOptions](neuroglancer_widget_scale_bar.ScaleBarTexture.md#prioroptions)
- [refCount](neuroglancer_widget_scale_bar.ScaleBarTexture.md#refcount)
- [texture](neuroglancer_widget_scale_bar.ScaleBarTexture.md#texture)
- [wasDisposed](neuroglancer_widget_scale_bar.ScaleBarTexture.md#wasdisposed)
- [width](neuroglancer_widget_scale_bar.ScaleBarTexture.md#width)

### Methods

- [addRef](neuroglancer_widget_scale_bar.ScaleBarTexture.md#addref)
- [dispose](neuroglancer_widget_scale_bar.ScaleBarTexture.md#dispose)
- [disposed](neuroglancer_widget_scale_bar.ScaleBarTexture.md#disposed)
- [refCountReachedZero](neuroglancer_widget_scale_bar.ScaleBarTexture.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_scale_bar.ScaleBarTexture.md#registercancellable)
- [registerDisposer](neuroglancer_widget_scale_bar.ScaleBarTexture.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_scale_bar.ScaleBarTexture.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_scale_bar.ScaleBarTexture.md#unregisterdisposer)
- [update](neuroglancer_widget_scale_bar.ScaleBarTexture.md#update)

## Constructors

### constructor

• **new ScaleBarTexture**(`gl`, `dimensions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `dimensions` | [`ScaleBarDimensions`](neuroglancer_widget_scale_bar.ScaleBarDimensions.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L216)

## Properties

### dimensions

• **dimensions**: [`ScaleBarDimensions`](neuroglancer_widget_scale_bar.ScaleBarDimensions.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L216)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### factor

• **factor**: `number` = `1`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L212)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L216)

___

### height

• **height**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L210)

___

### label

• **label**: `string` = `''`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L211)

___

### prevLabel

• `Private` **prevLabel**: `string` = `''`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L214)

___

### priorOptions

• `Private` **priorOptions**: `undefined` \| [`ScaleBarTextureOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarTextureOptions.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L213)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture) = `null`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L208)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L209)

## Methods

### addRef

▸ **addRef**(): [`ScaleBarTexture`](neuroglancer_widget_scale_bar.ScaleBarTexture.md)

#### Returns

[`ScaleBarTexture`](neuroglancer_widget_scale_bar.ScaleBarTexture.md)

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

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L237)

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

### update

▸ **update**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ScaleBarTextureOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarTextureOptions.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L220)
