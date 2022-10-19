[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md) / FramebufferConfiguration

# Class: FramebufferConfiguration<ColorBuffer, DepthBuffer\>

[neuroglancer/webgl/offscreen](../modules/neuroglancer_webgl_offscreen.md).FramebufferConfiguration

## Type parameters

| Name | Type |
| :------ | :------ |
| `ColorBuffer` | extends [`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md) \| [`Renderbuffer`](neuroglancer_webgl_offscreen.Renderbuffer.md) = [`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md) \| [`Renderbuffer`](neuroglancer_webgl_offscreen.Renderbuffer.md) |
| `DepthBuffer` | extends [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md) \| [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) = [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md) \| [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`FramebufferConfiguration`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#constructor)

### Properties

- [attachmentVerified](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#attachmentverified)
- [colorBuffers](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#colorbuffers)
- [depthBuffer](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#depthbuffer)
- [disposedStacks](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#disposedstacks)
- [framebuffer](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#framebuffer)
- [fullAttachmentList](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#fullattachmentlist)
- [gl](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#gl)
- [height](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#height)
- [refCount](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#refcount)
- [singleAttachmentList](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#singleattachmentlist)
- [wasDisposed](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#wasdisposed)
- [width](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#width)

### Methods

- [addRef](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#addref)
- [bind](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#bind)
- [bindSingle](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#bindsingle)
- [dispose](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#dispose)
- [disposed](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#disposed)
- [hasSize](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#hassize)
- [readPixelFloat32IntoBuffer](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#readpixelfloat32intobuffer)
- [refCountReachedZero](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#registereventlistener)
- [unbind](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#unbind)
- [unregisterDisposer](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#unregisterdisposer)
- [verifyAttachment](neuroglancer_webgl_offscreen.FramebufferConfiguration.md#verifyattachment)

## Constructors

### constructor

• **new FramebufferConfiguration**<`ColorBuffer`, `DepthBuffer`\>(`gl`, `configuration`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ColorBuffer` | extends [`Renderbuffer`](neuroglancer_webgl_offscreen.Renderbuffer.md) \| [`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md) = [`Renderbuffer`](neuroglancer_webgl_offscreen.Renderbuffer.md) \| [`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md) |
| `DepthBuffer` | extends [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md) = [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `configuration` | `Object` |
| `configuration.colorBuffers` | `ColorBuffer`[] |
| `configuration.depthBuffer?` | `DepthBuffer` |
| `configuration.framebuffer?` | [`Framebuffer`](neuroglancer_webgl_offscreen.Framebuffer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L172)

## Properties

### attachmentVerified

• `Private` **attachmentVerified**: `boolean` = `false`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L169)

___

### colorBuffers

• **colorBuffers**: `ColorBuffer`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L165)

___

### depthBuffer

• **depthBuffer**: `undefined` \| `DepthBuffer`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L167)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### framebuffer

• **framebuffer**: [`Framebuffer`](neuroglancer_webgl_offscreen.Framebuffer.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L166)

___

### fullAttachmentList

• `Private` **fullAttachmentList**: `number`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L168)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

___

### height

• **height**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L163)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### singleAttachmentList

• `Private` **singleAttachmentList**: `number`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L170)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L162)

## Methods

### addRef

▸ **addRef**(): [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<`ColorBuffer`, `DepthBuffer`\>

#### Returns

[`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<`ColorBuffer`, `DepthBuffer`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### bind

▸ **bind**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L195)

___

### bindSingle

▸ **bindSingle**(`textureIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `textureIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L217)

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

### hasSize

▸ **hasSize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L191)

___

### readPixelFloat32IntoBuffer

▸ **readPixelFloat32IntoBuffer**(`textureIndex`, `glWindowX`, `glWindowY`, `offset`, `width?`, `height?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `textureIndex` | `number` | `undefined` |
| `glWindowX` | `number` | `undefined` |
| `glWindowY` | `number` | `undefined` |
| `offset` | `number` | `undefined` |
| `width` | `number` | `1` |
| `height` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L238)

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

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L234)

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

### verifyAttachment

▸ **verifyAttachment**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/offscreen.ts#L254)
