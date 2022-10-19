[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / DepthTextureBuffer

# Class: DepthTextureBuffer

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).DepthTextureBuffer

## Hierarchy

- [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md)

  ↳ **`DepthTextureBuffer`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.DepthTextureBuffer.md#constructor)

### Properties

- [dataType](data_panel_layout._internal_.DepthTextureBuffer.md#datatype)
- [disposedStacks](data_panel_layout._internal_.DepthTextureBuffer.md#disposedstacks)
- [format](data_panel_layout._internal_.DepthTextureBuffer.md#format)
- [gl](data_panel_layout._internal_.DepthTextureBuffer.md#gl)
- [height](data_panel_layout._internal_.DepthTextureBuffer.md#height)
- [internalFormat](data_panel_layout._internal_.DepthTextureBuffer.md#internalformat)
- [refCount](data_panel_layout._internal_.DepthTextureBuffer.md#refcount)
- [texture](data_panel_layout._internal_.DepthTextureBuffer.md#texture)
- [wasDisposed](data_panel_layout._internal_.DepthTextureBuffer.md#wasdisposed)
- [width](data_panel_layout._internal_.DepthTextureBuffer.md#width)

### Methods

- [addRef](data_panel_layout._internal_.DepthTextureBuffer.md#addref)
- [attachToFramebuffer](data_panel_layout._internal_.DepthTextureBuffer.md#attachtoframebuffer)
- [dispose](data_panel_layout._internal_.DepthTextureBuffer.md#dispose)
- [disposed](data_panel_layout._internal_.DepthTextureBuffer.md#disposed)
- [hasSize](data_panel_layout._internal_.DepthTextureBuffer.md#hassize)
- [performResize](data_panel_layout._internal_.DepthTextureBuffer.md#performresize)
- [refCountReachedZero](data_panel_layout._internal_.DepthTextureBuffer.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.DepthTextureBuffer.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.DepthTextureBuffer.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.DepthTextureBuffer.md#registereventlistener)
- [resize](data_panel_layout._internal_.DepthTextureBuffer.md#resize)
- [unregisterDisposer](data_panel_layout._internal_.DepthTextureBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new DepthTextureBuffer**(`gl`, `internalFormat?`, `format?`, `dataType?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) | `undefined` |
| `internalFormat` | `number` | `WebGL2RenderingContext.DEPTH_COMPONENT16` |
| `format` | `number` | `WebGL2RenderingContext.DEPTH_COMPONENT` |
| `dataType` | `number` | `WebGL2RenderingContext.UNSIGNED_SHORT` |

#### Overrides

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[constructor](data_panel_layout._internal_.TextureBuffer.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L132)

## Properties

### dataType

• **dataType**: `number`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[dataType](data_panel_layout._internal_.TextureBuffer.md#datatype)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[disposedStacks](data_panel_layout._internal_.TextureBuffer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### format

• **format**: `number`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[format](data_panel_layout._internal_.TextureBuffer.md#format)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[gl](data_panel_layout._internal_.TextureBuffer.md#gl)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[height](data_panel_layout._internal_.TextureBuffer.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L28)

___

### internalFormat

• **internalFormat**: `number`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[internalFormat](data_panel_layout._internal_.TextureBuffer.md#internalformat)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[refCount](data_panel_layout._internal_.TextureBuffer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture)

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[texture](data_panel_layout._internal_.TextureBuffer.md#texture)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[wasDisposed](data_panel_layout._internal_.TextureBuffer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[width](data_panel_layout._internal_.TextureBuffer.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)

#### Returns

[`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[addRef](data_panel_layout._internal_.TextureBuffer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(): `void`

#### Returns

`void`

#### Overrides

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[attachToFramebuffer](data_panel_layout._internal_.TextureBuffer.md#attachtoframebuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L139)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[dispose](data_panel_layout._internal_.TextureBuffer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[disposed](data_panel_layout._internal_.TextureBuffer.md#disposed)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L121)

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

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[hasSize](data_panel_layout._internal_.TextureBuffer.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[performResize](data_panel_layout._internal_.TextureBuffer.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L117)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[refCountReachedZero](data_panel_layout._internal_.TextureBuffer.md#refcountreachedzero)

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

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[registerCancellable](data_panel_layout._internal_.TextureBuffer.md#registercancellable)

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

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[registerDisposer](data_panel_layout._internal_.TextureBuffer.md#registerdisposer)

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

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[registerEventListener](data_panel_layout._internal_.TextureBuffer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[resize](data_panel_layout._internal_.TextureBuffer.md#resize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L34)

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

[TextureBuffer](data_panel_layout._internal_.TextureBuffer.md).[unregisterDisposer](data_panel_layout._internal_.TextureBuffer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
