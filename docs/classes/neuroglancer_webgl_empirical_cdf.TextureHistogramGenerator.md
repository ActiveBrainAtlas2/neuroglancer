[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/empirical\_cdf](../modules/neuroglancer_webgl_empirical_cdf.md) / TextureHistogramGenerator

# Class: TextureHistogramGenerator

[neuroglancer/webgl/empirical_cdf](../modules/neuroglancer_webgl_empirical_cdf.md).TextureHistogramGenerator

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TextureHistogramGenerator`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#constructor)

### Properties

- [disposedStacks](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#disposedstacks)
- [gl](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#gl)
- [inputIndexBuffer](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#inputindexbuffer)
- [refCount](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#refcount)
- [shader](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#shader)
- [wasDisposed](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#wasdisposed)

### Methods

- [addRef](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#addref)
- [compute](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#compute)
- [dispose](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#dispose)
- [disposed](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#disposed)
- [refCountReachedZero](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#registereventlistener)
- [unregisterDisposer](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#unregisterdisposer)
- [get](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md#get)

## Constructors

### constructor

• **new TextureHistogramGenerator**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L119)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

___

### inputIndexBuffer

• `Private` **inputIndexBuffer**: [`RefCountedValue`](neuroglancer_util_disposable.RefCountedValue.md)<[`Buffer`](neuroglancer_webgl_buffer.Buffer.md)\>

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L115)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### shader

• `Private` **shader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L88)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TextureHistogramGenerator`](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Returns

[`TextureHistogramGenerator`](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### compute

▸ **compute**(`count`, `depthTexture`, `inputTextures`, `histogramSpecifications`, `frameNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `depthTexture` | ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture) |
| `inputTextures` | [`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md)[] |
| `histogramSpecifications` | [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md) |
| `frameNumber` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L127)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### get

▸ `Static` **get**(`gl`): [`TextureHistogramGenerator`](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`TextureHistogramGenerator`](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L123)
