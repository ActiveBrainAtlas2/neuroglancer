[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/empirical\_cdf](../modules/webgl_empirical_cdf.md) / TextureHistogramGenerator

# Class: TextureHistogramGenerator

[webgl/empirical_cdf](../modules/webgl_empirical_cdf.md).TextureHistogramGenerator

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TextureHistogramGenerator`**

## Table of contents

### Constructors

- [constructor](webgl_empirical_cdf.TextureHistogramGenerator.md#constructor)

### Properties

- [disposedStacks](webgl_empirical_cdf.TextureHistogramGenerator.md#disposedstacks)
- [gl](webgl_empirical_cdf.TextureHistogramGenerator.md#gl)
- [inputIndexBuffer](webgl_empirical_cdf.TextureHistogramGenerator.md#inputindexbuffer)
- [refCount](webgl_empirical_cdf.TextureHistogramGenerator.md#refcount)
- [shader](webgl_empirical_cdf.TextureHistogramGenerator.md#shader)
- [wasDisposed](webgl_empirical_cdf.TextureHistogramGenerator.md#wasdisposed)

### Methods

- [addRef](webgl_empirical_cdf.TextureHistogramGenerator.md#addref)
- [compute](webgl_empirical_cdf.TextureHistogramGenerator.md#compute)
- [dispose](webgl_empirical_cdf.TextureHistogramGenerator.md#dispose)
- [disposed](webgl_empirical_cdf.TextureHistogramGenerator.md#disposed)
- [refCountReachedZero](webgl_empirical_cdf.TextureHistogramGenerator.md#refcountreachedzero)
- [registerCancellable](webgl_empirical_cdf.TextureHistogramGenerator.md#registercancellable)
- [registerDisposer](webgl_empirical_cdf.TextureHistogramGenerator.md#registerdisposer)
- [registerEventListener](webgl_empirical_cdf.TextureHistogramGenerator.md#registereventlistener)
- [unregisterDisposer](webgl_empirical_cdf.TextureHistogramGenerator.md#unregisterdisposer)
- [get](webgl_empirical_cdf.TextureHistogramGenerator.md#get)

## Constructors

### constructor

• **new TextureHistogramGenerator**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L119)

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

### inputIndexBuffer

• `Private` **inputIndexBuffer**: [`RefCountedValue`](util_disposable.RefCountedValue.md)<[`Buffer`](webgl_buffer.Buffer.md)\>

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L115)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### shader

• `Private` **shader**: [`ShaderProgram`](webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L88)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TextureHistogramGenerator`](webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Returns

[`TextureHistogramGenerator`](webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### compute

▸ **compute**(`count`, `depthTexture`, `inputTextures`, `histogramSpecifications`, `frameNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `depthTexture` | ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture) |
| `inputTextures` | [`TextureBuffer`](webgl_offscreen.TextureBuffer.md)[] |
| `histogramSpecifications` | [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md) |
| `frameNumber` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L127)

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

### get

▸ `Static` **get**(`gl`): [`TextureHistogramGenerator`](webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`TextureHistogramGenerator`](webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L123)
