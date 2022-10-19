[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/scale\_bar](../modules/widget_scale_bar.md) / MultipleScaleBarTextures

# Class: MultipleScaleBarTextures

[widget/scale_bar](../modules/widget_scale_bar.md).MultipleScaleBarTextures

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`MultipleScaleBarTextures`**

## Table of contents

### Constructors

- [constructor](widget_scale_bar.MultipleScaleBarTextures.md#constructor)

### Properties

- [disposedStacks](widget_scale_bar.MultipleScaleBarTextures.md#disposedstacks)
- [gl](widget_scale_bar.MultipleScaleBarTextures.md#gl)
- [refCount](widget_scale_bar.MultipleScaleBarTextures.md#refcount)
- [scaleBarCopyHelper](widget_scale_bar.MultipleScaleBarTextures.md#scalebarcopyhelper)
- [scaleBars](widget_scale_bar.MultipleScaleBarTextures.md#scalebars)
- [wasDisposed](widget_scale_bar.MultipleScaleBarTextures.md#wasdisposed)

### Methods

- [addRef](widget_scale_bar.MultipleScaleBarTextures.md#addref)
- [dispose](widget_scale_bar.MultipleScaleBarTextures.md#dispose)
- [disposed](widget_scale_bar.MultipleScaleBarTextures.md#disposed)
- [draw](widget_scale_bar.MultipleScaleBarTextures.md#draw)
- [refCountReachedZero](widget_scale_bar.MultipleScaleBarTextures.md#refcountreachedzero)
- [registerCancellable](widget_scale_bar.MultipleScaleBarTextures.md#registercancellable)
- [registerDisposer](widget_scale_bar.MultipleScaleBarTextures.md#registerdisposer)
- [registerEventListener](widget_scale_bar.MultipleScaleBarTextures.md#registereventlistener)
- [unregisterDisposer](widget_scale_bar.MultipleScaleBarTextures.md#unregisterdisposer)

## Constructors

### constructor

• **new MultipleScaleBarTextures**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L248)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### scaleBarCopyHelper

• `Private` **scaleBarCopyHelper**: [`OffscreenCopyHelper`](webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L245)

___

### scaleBars

• `Private` **scaleBars**: [`ScaleBarTexture`](widget_scale_bar.ScaleBarTexture.md)[] = `[]`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L246)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`MultipleScaleBarTextures`](widget_scale_bar.MultipleScaleBarTextures.md)

#### Returns

[`MultipleScaleBarTextures`](widget_scale_bar.MultipleScaleBarTextures.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`viewport`, `displayDimensionRenderInfo`, `relativeDisplayScales`, `effectiveZoom`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md) |
| `displayDimensionRenderInfo` | [`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md) |
| `relativeDisplayScales` | [`RelativeDisplayScales`](../interfaces/annotation_polygon._internal_.RelativeDisplayScales.md) |
| `effectiveZoom` | `number` |
| `options` | [`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L255)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
