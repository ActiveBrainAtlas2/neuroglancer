[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / TextureHistogramGenerator

# Class: TextureHistogramGenerator

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).TextureHistogramGenerator

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`TextureHistogramGenerator`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.TextureHistogramGenerator.md#constructor)

### Properties

- [disposedStacks](data_panel_layout._internal_.TextureHistogramGenerator.md#disposedstacks)
- [gl](data_panel_layout._internal_.TextureHistogramGenerator.md#gl)
- [inputIndexBuffer](data_panel_layout._internal_.TextureHistogramGenerator.md#inputindexbuffer)
- [refCount](data_panel_layout._internal_.TextureHistogramGenerator.md#refcount)
- [shader](data_panel_layout._internal_.TextureHistogramGenerator.md#shader)
- [wasDisposed](data_panel_layout._internal_.TextureHistogramGenerator.md#wasdisposed)

### Methods

- [addRef](data_panel_layout._internal_.TextureHistogramGenerator.md#addref)
- [compute](data_panel_layout._internal_.TextureHistogramGenerator.md#compute)
- [dispose](data_panel_layout._internal_.TextureHistogramGenerator.md#dispose)
- [disposed](data_panel_layout._internal_.TextureHistogramGenerator.md#disposed)
- [refCountReachedZero](data_panel_layout._internal_.TextureHistogramGenerator.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.TextureHistogramGenerator.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.TextureHistogramGenerator.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.TextureHistogramGenerator.md#registereventlistener)
- [unregisterDisposer](data_panel_layout._internal_.TextureHistogramGenerator.md#unregisterdisposer)
- [get](data_panel_layout._internal_.TextureHistogramGenerator.md#get)

## Constructors

### constructor

• **new TextureHistogramGenerator**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L119)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### inputIndexBuffer

• `Private` **inputIndexBuffer**: [`RefCountedValue`](data_panel_layout._internal_.RefCountedValue.md)<[`Buffer`](axes_lines._internal_.Buffer.md)\>

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L115)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### shader

• `Private` **shader**: [`ShaderProgram`](axes_lines._internal_.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L88)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TextureHistogramGenerator`](data_panel_layout._internal_.TextureHistogramGenerator.md)

#### Returns

[`TextureHistogramGenerator`](data_panel_layout._internal_.TextureHistogramGenerator.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### compute

▸ **compute**(`count`, `depthTexture`, `inputTextures`, `histogramSpecifications`, `frameNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `depthTexture` | ``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture) |
| `inputTextures` | [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md)[] |
| `histogramSpecifications` | [`HistogramSpecifications`](data_panel_layout._internal_.HistogramSpecifications.md) |
| `frameNumber` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L127)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### get

▸ `Static` **get**(`gl`): [`TextureHistogramGenerator`](data_panel_layout._internal_.TextureHistogramGenerator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

[`TextureHistogramGenerator`](data_panel_layout._internal_.TextureHistogramGenerator.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L123)
