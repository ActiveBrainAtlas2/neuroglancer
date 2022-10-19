[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / TextureBuffer

# Class: TextureBuffer

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).TextureBuffer

## Hierarchy

- [`SizeManaged`](data_panel_layout._internal_.SizeManaged.md)

  ↳ **`TextureBuffer`**

  ↳↳ [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.TextureBuffer.md#constructor)

### Properties

- [dataType](data_panel_layout._internal_.TextureBuffer.md#datatype)
- [disposedStacks](data_panel_layout._internal_.TextureBuffer.md#disposedstacks)
- [format](data_panel_layout._internal_.TextureBuffer.md#format)
- [gl](data_panel_layout._internal_.TextureBuffer.md#gl)
- [height](data_panel_layout._internal_.TextureBuffer.md#height)
- [internalFormat](data_panel_layout._internal_.TextureBuffer.md#internalformat)
- [refCount](data_panel_layout._internal_.TextureBuffer.md#refcount)
- [texture](data_panel_layout._internal_.TextureBuffer.md#texture)
- [wasDisposed](data_panel_layout._internal_.TextureBuffer.md#wasdisposed)
- [width](data_panel_layout._internal_.TextureBuffer.md#width)

### Methods

- [addRef](data_panel_layout._internal_.TextureBuffer.md#addref)
- [attachToFramebuffer](data_panel_layout._internal_.TextureBuffer.md#attachtoframebuffer)
- [dispose](data_panel_layout._internal_.TextureBuffer.md#dispose)
- [disposed](data_panel_layout._internal_.TextureBuffer.md#disposed)
- [hasSize](data_panel_layout._internal_.TextureBuffer.md#hassize)
- [performResize](data_panel_layout._internal_.TextureBuffer.md#performresize)
- [refCountReachedZero](data_panel_layout._internal_.TextureBuffer.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.TextureBuffer.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.TextureBuffer.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.TextureBuffer.md#registereventlistener)
- [resize](data_panel_layout._internal_.TextureBuffer.md#resize)
- [unregisterDisposer](data_panel_layout._internal_.TextureBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new TextureBuffer**(`gl`, `internalFormat`, `format`, `dataType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `internalFormat` | `number` |
| `format` | `number` |
| `dataType` | `number` |

#### Overrides

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[constructor](data_panel_layout._internal_.SizeManaged.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L112)

## Properties

### dataType

• **dataType**: `number`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[disposedStacks](data_panel_layout._internal_.SizeManaged.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### format

• **format**: `number`

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[height](data_panel_layout._internal_.SizeManaged.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L28)

___

### internalFormat

• **internalFormat**: `number`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[refCount](data_panel_layout._internal_.SizeManaged.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### texture

• **texture**: ``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[wasDisposed](data_panel_layout._internal_.SizeManaged.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[width](data_panel_layout._internal_.SizeManaged.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md)

#### Returns

[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md)

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[addRef](data_panel_layout._internal_.SizeManaged.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/webgl/offscreen.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L125)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[dispose](data_panel_layout._internal_.SizeManaged.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[disposed](data_panel_layout._internal_.SizeManaged.md#disposed)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[hasSize](data_panel_layout._internal_.SizeManaged.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[performResize](data_panel_layout._internal_.SizeManaged.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L117)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[refCountReachedZero](data_panel_layout._internal_.SizeManaged.md#refcountreachedzero)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[registerCancellable](data_panel_layout._internal_.SizeManaged.md#registercancellable)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[registerDisposer](data_panel_layout._internal_.SizeManaged.md#registerdisposer)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[registerEventListener](data_panel_layout._internal_.SizeManaged.md#registereventlistener)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[resize](data_panel_layout._internal_.SizeManaged.md#resize)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[unregisterDisposer](data_panel_layout._internal_.SizeManaged.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
