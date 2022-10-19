[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/scale\_bar](../modules/widget_scale_bar.md) / ScaleBarTexture

# Class: ScaleBarTexture

[widget/scale_bar](../modules/widget_scale_bar.md).ScaleBarTexture

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ScaleBarTexture`**

## Table of contents

### Constructors

- [constructor](widget_scale_bar.ScaleBarTexture.md#constructor)

### Properties

- [dimensions](widget_scale_bar.ScaleBarTexture.md#dimensions)
- [disposedStacks](widget_scale_bar.ScaleBarTexture.md#disposedstacks)
- [factor](widget_scale_bar.ScaleBarTexture.md#factor)
- [gl](widget_scale_bar.ScaleBarTexture.md#gl)
- [height](widget_scale_bar.ScaleBarTexture.md#height)
- [label](widget_scale_bar.ScaleBarTexture.md#label)
- [prevLabel](widget_scale_bar.ScaleBarTexture.md#prevlabel)
- [priorOptions](widget_scale_bar.ScaleBarTexture.md#prioroptions)
- [refCount](widget_scale_bar.ScaleBarTexture.md#refcount)
- [texture](widget_scale_bar.ScaleBarTexture.md#texture)
- [wasDisposed](widget_scale_bar.ScaleBarTexture.md#wasdisposed)
- [width](widget_scale_bar.ScaleBarTexture.md#width)

### Methods

- [addRef](widget_scale_bar.ScaleBarTexture.md#addref)
- [dispose](widget_scale_bar.ScaleBarTexture.md#dispose)
- [disposed](widget_scale_bar.ScaleBarTexture.md#disposed)
- [refCountReachedZero](widget_scale_bar.ScaleBarTexture.md#refcountreachedzero)
- [registerCancellable](widget_scale_bar.ScaleBarTexture.md#registercancellable)
- [registerDisposer](widget_scale_bar.ScaleBarTexture.md#registerdisposer)
- [registerEventListener](widget_scale_bar.ScaleBarTexture.md#registereventlistener)
- [unregisterDisposer](widget_scale_bar.ScaleBarTexture.md#unregisterdisposer)
- [update](widget_scale_bar.ScaleBarTexture.md#update)

## Constructors

### constructor

• **new ScaleBarTexture**(`gl`, `dimensions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `dimensions` | [`ScaleBarDimensions`](widget_scale_bar.ScaleBarDimensions.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L216)

## Properties

### dimensions

• **dimensions**: [`ScaleBarDimensions`](widget_scale_bar.ScaleBarDimensions.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### factor

• **factor**: `number` = `1`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L212)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### height

• **height**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L210)

___

### label

• **label**: `string` = `''`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L211)

___

### prevLabel

• `Private` **prevLabel**: `string` = `''`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L214)

___

### priorOptions

• `Private` **priorOptions**: `undefined` \| [`ScaleBarTextureOptions`](../interfaces/widget_scale_bar.ScaleBarTextureOptions.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L213)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture) = `null`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L208)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L209)

## Methods

### addRef

▸ **addRef**(): [`ScaleBarTexture`](widget_scale_bar.ScaleBarTexture.md)

#### Returns

[`ScaleBarTexture`](widget_scale_bar.ScaleBarTexture.md)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L237)

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

___

### update

▸ **update**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ScaleBarTextureOptions`](../interfaces/widget_scale_bar.ScaleBarTextureOptions.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L220)
