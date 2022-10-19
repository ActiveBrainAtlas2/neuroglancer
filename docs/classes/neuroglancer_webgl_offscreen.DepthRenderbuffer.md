[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md) / DepthRenderbuffer

# Class: DepthRenderbuffer

[neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md).DepthRenderbuffer

## Hierarchy

- [`Renderbuffer`](neuroglancer_webgl_offscreen.Renderbuffer.md)

  ↳ **`DepthRenderbuffer`**

  ↳↳ [`DepthStencilRenderbuffer`](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#constructor)

### Properties

- [disposedStacks](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#disposedstacks)
- [gl](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#gl)
- [height](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#height)
- [includeStencilBuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#includestencilbuffer)
- [internalformat](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#internalformat)
- [refCount](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#refcount)
- [renderbuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#renderbuffer)
- [wasDisposed](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#wasdisposed)
- [width](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#width)

### Methods

- [addRef](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#addref)
- [attachToFramebuffer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#attachtoframebuffer)
- [dispose](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#dispose)
- [disposed](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#disposed)
- [hasSize](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#hassize)
- [performResize](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#performresize)
- [refCountReachedZero](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#registereventlistener)
- [resize](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#resize)
- [unregisterDisposer](neuroglancer_webgl_offscreen.DepthRenderbuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new DepthRenderbuffer**(`gl`, `includeStencilBuffer?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `includeStencilBuffer` | `boolean` | `false` |

#### Overrides

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[constructor](neuroglancer_webgl_offscreen.Renderbuffer.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L72)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[disposedStacks](neuroglancer_webgl_offscreen.Renderbuffer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[gl](neuroglancer_webgl_offscreen.Renderbuffer.md#gl)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[height](neuroglancer_webgl_offscreen.Renderbuffer.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L28)

___

### includeStencilBuffer

• **includeStencilBuffer**: `boolean` = `false`

___

### internalformat

• **internalformat**: `number`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[internalformat](neuroglancer_webgl_offscreen.Renderbuffer.md#internalformat)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[refCount](neuroglancer_webgl_offscreen.Renderbuffer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderbuffer

• **renderbuffer**: ``null`` \| [`WebGLRenderbuffer`](../modules/main_module._internal_.md#webglrenderbuffer) = `null`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md#renderbuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L47)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[wasDisposed](neuroglancer_webgl_offscreen.Renderbuffer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[width](neuroglancer_webgl_offscreen.Renderbuffer.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md)

#### Returns

[`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md)

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[addRef](neuroglancer_webgl_offscreen.Renderbuffer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(): `void`

#### Returns

`void`

#### Overrides

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[attachToFramebuffer](neuroglancer_webgl_offscreen.Renderbuffer.md#attachtoframebuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L75)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[dispose](neuroglancer_webgl_offscreen.Renderbuffer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[disposed](neuroglancer_webgl_offscreen.Renderbuffer.md#disposed)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L61)

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

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[hasSize](neuroglancer_webgl_offscreen.Renderbuffer.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[performResize](neuroglancer_webgl_offscreen.Renderbuffer.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[refCountReachedZero](neuroglancer_webgl_offscreen.Renderbuffer.md#refcountreachedzero)

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

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[registerCancellable](neuroglancer_webgl_offscreen.Renderbuffer.md#registercancellable)

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

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[registerDisposer](neuroglancer_webgl_offscreen.Renderbuffer.md#registerdisposer)

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

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[registerEventListener](neuroglancer_webgl_offscreen.Renderbuffer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[resize](neuroglancer_webgl_offscreen.Renderbuffer.md#resize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L34)

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

[Renderbuffer](neuroglancer_webgl_offscreen.Renderbuffer.md).[unregisterDisposer](neuroglancer_webgl_offscreen.Renderbuffer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
