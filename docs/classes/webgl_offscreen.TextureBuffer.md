[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/offscreen](../modules/webgl_offscreen.md) / TextureBuffer

# Class: TextureBuffer

[webgl/offscreen](../modules/webgl_offscreen.md).TextureBuffer

## Hierarchy

- [`SizeManaged`](webgl_offscreen.SizeManaged.md)

  ↳ **`TextureBuffer`**

  ↳↳ [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)

## Table of contents

### Constructors

- [constructor](webgl_offscreen.TextureBuffer.md#constructor)

### Properties

- [dataType](webgl_offscreen.TextureBuffer.md#datatype)
- [disposedStacks](webgl_offscreen.TextureBuffer.md#disposedstacks)
- [format](webgl_offscreen.TextureBuffer.md#format)
- [gl](webgl_offscreen.TextureBuffer.md#gl)
- [height](webgl_offscreen.TextureBuffer.md#height)
- [internalFormat](webgl_offscreen.TextureBuffer.md#internalformat)
- [refCount](webgl_offscreen.TextureBuffer.md#refcount)
- [texture](webgl_offscreen.TextureBuffer.md#texture)
- [wasDisposed](webgl_offscreen.TextureBuffer.md#wasdisposed)
- [width](webgl_offscreen.TextureBuffer.md#width)

### Methods

- [addRef](webgl_offscreen.TextureBuffer.md#addref)
- [attachToFramebuffer](webgl_offscreen.TextureBuffer.md#attachtoframebuffer)
- [dispose](webgl_offscreen.TextureBuffer.md#dispose)
- [disposed](webgl_offscreen.TextureBuffer.md#disposed)
- [hasSize](webgl_offscreen.TextureBuffer.md#hassize)
- [performResize](webgl_offscreen.TextureBuffer.md#performresize)
- [refCountReachedZero](webgl_offscreen.TextureBuffer.md#refcountreachedzero)
- [registerCancellable](webgl_offscreen.TextureBuffer.md#registercancellable)
- [registerDisposer](webgl_offscreen.TextureBuffer.md#registerdisposer)
- [registerEventListener](webgl_offscreen.TextureBuffer.md#registereventlistener)
- [resize](webgl_offscreen.TextureBuffer.md#resize)
- [unregisterDisposer](webgl_offscreen.TextureBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new TextureBuffer**(`gl`, `internalFormat`, `format`, `dataType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `internalFormat` | `number` |
| `format` | `number` |
| `dataType` | `number` |

#### Overrides

[SizeManaged](webgl_offscreen.SizeManaged.md).[constructor](webgl_offscreen.SizeManaged.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L112)

## Properties

### dataType

• **dataType**: `number`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[disposedStacks](webgl_offscreen.SizeManaged.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### format

• **format**: `number`

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[height](webgl_offscreen.SizeManaged.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L28)

___

### internalFormat

• **internalFormat**: `number`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[refCount](webgl_offscreen.SizeManaged.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[wasDisposed](webgl_offscreen.SizeManaged.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[width](webgl_offscreen.SizeManaged.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`TextureBuffer`](webgl_offscreen.TextureBuffer.md)

#### Returns

[`TextureBuffer`](webgl_offscreen.TextureBuffer.md)

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[addRef](webgl_offscreen.SizeManaged.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L125)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[dispose](webgl_offscreen.SizeManaged.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](webgl_offscreen.SizeManaged.md).[disposed](webgl_offscreen.SizeManaged.md#disposed)

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

[SizeManaged](webgl_offscreen.SizeManaged.md).[hasSize](webgl_offscreen.SizeManaged.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](webgl_offscreen.SizeManaged.md).[performResize](webgl_offscreen.SizeManaged.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L117)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[refCountReachedZero](webgl_offscreen.SizeManaged.md#refcountreachedzero)

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

[SizeManaged](webgl_offscreen.SizeManaged.md).[registerCancellable](webgl_offscreen.SizeManaged.md#registercancellable)

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

[SizeManaged](webgl_offscreen.SizeManaged.md).[registerDisposer](webgl_offscreen.SizeManaged.md#registerdisposer)

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

[SizeManaged](webgl_offscreen.SizeManaged.md).[registerEventListener](webgl_offscreen.SizeManaged.md#registereventlistener)

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

[SizeManaged](webgl_offscreen.SizeManaged.md).[resize](webgl_offscreen.SizeManaged.md#resize)

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

[SizeManaged](webgl_offscreen.SizeManaged.md).[unregisterDisposer](webgl_offscreen.SizeManaged.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
