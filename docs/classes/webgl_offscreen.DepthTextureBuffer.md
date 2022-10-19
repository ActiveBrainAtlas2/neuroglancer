[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/offscreen](../modules/webgl_offscreen.md) / DepthTextureBuffer

# Class: DepthTextureBuffer

[webgl/offscreen](../modules/webgl_offscreen.md).DepthTextureBuffer

## Hierarchy

- [`TextureBuffer`](webgl_offscreen.TextureBuffer.md)

  ↳ **`DepthTextureBuffer`**

## Table of contents

### Constructors

- [constructor](webgl_offscreen.DepthTextureBuffer.md#constructor)

### Properties

- [dataType](webgl_offscreen.DepthTextureBuffer.md#datatype)
- [disposedStacks](webgl_offscreen.DepthTextureBuffer.md#disposedstacks)
- [format](webgl_offscreen.DepthTextureBuffer.md#format)
- [gl](webgl_offscreen.DepthTextureBuffer.md#gl)
- [height](webgl_offscreen.DepthTextureBuffer.md#height)
- [internalFormat](webgl_offscreen.DepthTextureBuffer.md#internalformat)
- [refCount](webgl_offscreen.DepthTextureBuffer.md#refcount)
- [texture](webgl_offscreen.DepthTextureBuffer.md#texture)
- [wasDisposed](webgl_offscreen.DepthTextureBuffer.md#wasdisposed)
- [width](webgl_offscreen.DepthTextureBuffer.md#width)

### Methods

- [addRef](webgl_offscreen.DepthTextureBuffer.md#addref)
- [attachToFramebuffer](webgl_offscreen.DepthTextureBuffer.md#attachtoframebuffer)
- [dispose](webgl_offscreen.DepthTextureBuffer.md#dispose)
- [disposed](webgl_offscreen.DepthTextureBuffer.md#disposed)
- [hasSize](webgl_offscreen.DepthTextureBuffer.md#hassize)
- [performResize](webgl_offscreen.DepthTextureBuffer.md#performresize)
- [refCountReachedZero](webgl_offscreen.DepthTextureBuffer.md#refcountreachedzero)
- [registerCancellable](webgl_offscreen.DepthTextureBuffer.md#registercancellable)
- [registerDisposer](webgl_offscreen.DepthTextureBuffer.md#registerdisposer)
- [registerEventListener](webgl_offscreen.DepthTextureBuffer.md#registereventlistener)
- [resize](webgl_offscreen.DepthTextureBuffer.md#resize)
- [unregisterDisposer](webgl_offscreen.DepthTextureBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new DepthTextureBuffer**(`gl`, `internalFormat?`, `format?`, `dataType?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) | `undefined` |
| `internalFormat` | `number` | `WebGL2RenderingContext.DEPTH_COMPONENT16` |
| `format` | `number` | `WebGL2RenderingContext.DEPTH_COMPONENT` |
| `dataType` | `number` | `WebGL2RenderingContext.UNSIGNED_SHORT` |

#### Overrides

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[constructor](webgl_offscreen.TextureBuffer.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L132)

## Properties

### dataType

• **dataType**: `number`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[dataType](webgl_offscreen.TextureBuffer.md#datatype)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[disposedStacks](webgl_offscreen.TextureBuffer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### format

• **format**: `number`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[format](webgl_offscreen.TextureBuffer.md#format)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[gl](webgl_offscreen.TextureBuffer.md#gl)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[height](webgl_offscreen.TextureBuffer.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L28)

___

### internalFormat

• **internalFormat**: `number`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[internalFormat](webgl_offscreen.TextureBuffer.md#internalformat)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[refCount](webgl_offscreen.TextureBuffer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture)

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[texture](webgl_offscreen.TextureBuffer.md#texture)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[wasDisposed](webgl_offscreen.TextureBuffer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[width](webgl_offscreen.TextureBuffer.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)

#### Returns

[`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[addRef](webgl_offscreen.TextureBuffer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(): `void`

#### Returns

`void`

#### Overrides

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[attachToFramebuffer](webgl_offscreen.TextureBuffer.md#attachtoframebuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L139)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[dispose](webgl_offscreen.TextureBuffer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[disposed](webgl_offscreen.TextureBuffer.md#disposed)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L121)

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

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[hasSize](webgl_offscreen.TextureBuffer.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[performResize](webgl_offscreen.TextureBuffer.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L117)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[refCountReachedZero](webgl_offscreen.TextureBuffer.md#refcountreachedzero)

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

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[registerCancellable](webgl_offscreen.TextureBuffer.md#registercancellable)

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

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[registerDisposer](webgl_offscreen.TextureBuffer.md#registerdisposer)

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

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[registerEventListener](webgl_offscreen.TextureBuffer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[resize](webgl_offscreen.TextureBuffer.md#resize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L34)

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

[TextureBuffer](webgl_offscreen.TextureBuffer.md).[unregisterDisposer](webgl_offscreen.TextureBuffer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
