[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/offscreen](../modules/webgl_offscreen.md) / DepthRenderbuffer

# Class: DepthRenderbuffer

[webgl/offscreen](../modules/webgl_offscreen.md).DepthRenderbuffer

## Hierarchy

- [`Renderbuffer`](webgl_offscreen.Renderbuffer.md)

  ↳ **`DepthRenderbuffer`**

  ↳↳ [`DepthStencilRenderbuffer`](webgl_offscreen.DepthStencilRenderbuffer.md)

## Table of contents

### Constructors

- [constructor](webgl_offscreen.DepthRenderbuffer.md#constructor)

### Properties

- [disposedStacks](webgl_offscreen.DepthRenderbuffer.md#disposedstacks)
- [gl](webgl_offscreen.DepthRenderbuffer.md#gl)
- [height](webgl_offscreen.DepthRenderbuffer.md#height)
- [includeStencilBuffer](webgl_offscreen.DepthRenderbuffer.md#includestencilbuffer)
- [internalformat](webgl_offscreen.DepthRenderbuffer.md#internalformat)
- [refCount](webgl_offscreen.DepthRenderbuffer.md#refcount)
- [renderbuffer](webgl_offscreen.DepthRenderbuffer.md#renderbuffer)
- [wasDisposed](webgl_offscreen.DepthRenderbuffer.md#wasdisposed)
- [width](webgl_offscreen.DepthRenderbuffer.md#width)

### Methods

- [addRef](webgl_offscreen.DepthRenderbuffer.md#addref)
- [attachToFramebuffer](webgl_offscreen.DepthRenderbuffer.md#attachtoframebuffer)
- [dispose](webgl_offscreen.DepthRenderbuffer.md#dispose)
- [disposed](webgl_offscreen.DepthRenderbuffer.md#disposed)
- [hasSize](webgl_offscreen.DepthRenderbuffer.md#hassize)
- [performResize](webgl_offscreen.DepthRenderbuffer.md#performresize)
- [refCountReachedZero](webgl_offscreen.DepthRenderbuffer.md#refcountreachedzero)
- [registerCancellable](webgl_offscreen.DepthRenderbuffer.md#registercancellable)
- [registerDisposer](webgl_offscreen.DepthRenderbuffer.md#registerdisposer)
- [registerEventListener](webgl_offscreen.DepthRenderbuffer.md#registereventlistener)
- [resize](webgl_offscreen.DepthRenderbuffer.md#resize)
- [unregisterDisposer](webgl_offscreen.DepthRenderbuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new DepthRenderbuffer**(`gl`, `includeStencilBuffer?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) | `undefined` |
| `includeStencilBuffer` | `boolean` | `false` |

#### Overrides

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[constructor](webgl_offscreen.Renderbuffer.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L72)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[disposedStacks](webgl_offscreen.Renderbuffer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[gl](webgl_offscreen.Renderbuffer.md#gl)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[height](webgl_offscreen.Renderbuffer.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L28)

___

### includeStencilBuffer

• **includeStencilBuffer**: `boolean` = `false`

___

### internalformat

• **internalformat**: `number`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[internalformat](webgl_offscreen.Renderbuffer.md#internalformat)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[refCount](webgl_offscreen.Renderbuffer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderbuffer

• **renderbuffer**: ``null`` \| [`WebGLRenderbuffer`](../modules/annotation_annotation_layer_state._internal_.md#webglrenderbuffer) = `null`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[renderbuffer](webgl_offscreen.Renderbuffer.md#renderbuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L47)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[wasDisposed](webgl_offscreen.Renderbuffer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[width](webgl_offscreen.Renderbuffer.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md)

#### Returns

[`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md)

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[addRef](webgl_offscreen.Renderbuffer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(): `void`

#### Returns

`void`

#### Overrides

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[attachToFramebuffer](webgl_offscreen.Renderbuffer.md#attachtoframebuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L75)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[dispose](webgl_offscreen.Renderbuffer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[disposed](webgl_offscreen.Renderbuffer.md#disposed)

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

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[hasSize](webgl_offscreen.Renderbuffer.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[performResize](webgl_offscreen.Renderbuffer.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[refCountReachedZero](webgl_offscreen.Renderbuffer.md#refcountreachedzero)

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

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[registerCancellable](webgl_offscreen.Renderbuffer.md#registercancellable)

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

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[registerDisposer](webgl_offscreen.Renderbuffer.md#registerdisposer)

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

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[registerEventListener](webgl_offscreen.Renderbuffer.md#registereventlistener)

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

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[resize](webgl_offscreen.Renderbuffer.md#resize)

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

[Renderbuffer](webgl_offscreen.Renderbuffer.md).[unregisterDisposer](webgl_offscreen.Renderbuffer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
