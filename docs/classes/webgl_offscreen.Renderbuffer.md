[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/offscreen](../modules/webgl_offscreen.md) / Renderbuffer

# Class: Renderbuffer

[webgl/offscreen](../modules/webgl_offscreen.md).Renderbuffer

## Hierarchy

- [`SizeManaged`](webgl_offscreen.SizeManaged.md)

  ↳ **`Renderbuffer`**

  ↳↳ [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md)

## Table of contents

### Constructors

- [constructor](webgl_offscreen.Renderbuffer.md#constructor)

### Properties

- [disposedStacks](webgl_offscreen.Renderbuffer.md#disposedstacks)
- [gl](webgl_offscreen.Renderbuffer.md#gl)
- [height](webgl_offscreen.Renderbuffer.md#height)
- [internalformat](webgl_offscreen.Renderbuffer.md#internalformat)
- [refCount](webgl_offscreen.Renderbuffer.md#refcount)
- [renderbuffer](webgl_offscreen.Renderbuffer.md#renderbuffer)
- [wasDisposed](webgl_offscreen.Renderbuffer.md#wasdisposed)
- [width](webgl_offscreen.Renderbuffer.md#width)

### Methods

- [addRef](webgl_offscreen.Renderbuffer.md#addref)
- [attachToFramebuffer](webgl_offscreen.Renderbuffer.md#attachtoframebuffer)
- [dispose](webgl_offscreen.Renderbuffer.md#dispose)
- [disposed](webgl_offscreen.Renderbuffer.md#disposed)
- [hasSize](webgl_offscreen.Renderbuffer.md#hassize)
- [performResize](webgl_offscreen.Renderbuffer.md#performresize)
- [refCountReachedZero](webgl_offscreen.Renderbuffer.md#refcountreachedzero)
- [registerCancellable](webgl_offscreen.Renderbuffer.md#registercancellable)
- [registerDisposer](webgl_offscreen.Renderbuffer.md#registerdisposer)
- [registerEventListener](webgl_offscreen.Renderbuffer.md#registereventlistener)
- [resize](webgl_offscreen.Renderbuffer.md#resize)
- [unregisterDisposer](webgl_offscreen.Renderbuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new Renderbuffer**(`gl`, `internalformat`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `internalformat` | `number` |

#### Overrides

[SizeManaged](webgl_offscreen.SizeManaged.md).[constructor](webgl_offscreen.SizeManaged.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L49)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[disposedStacks](webgl_offscreen.SizeManaged.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

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

### internalformat

• **internalformat**: `number`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SizeManaged](webgl_offscreen.SizeManaged.md).[refCount](webgl_offscreen.SizeManaged.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderbuffer

• **renderbuffer**: ``null`` \| [`WebGLRenderbuffer`](../modules/annotation_annotation_layer_state._internal_.md#webglrenderbuffer) = `null`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L47)

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

▸ **addRef**(): [`Renderbuffer`](webgl_offscreen.Renderbuffer.md)

#### Returns

[`Renderbuffer`](webgl_offscreen.Renderbuffer.md)

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

[src/neuroglancer/webgl/offscreen.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L65)

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

[src/neuroglancer/webgl/offscreen.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L61)

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

[src/neuroglancer/webgl/offscreen.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L54)

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
