[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/offscreen](../modules/webgl_offscreen.md) / FramebufferConfiguration

# Class: FramebufferConfiguration<ColorBuffer, DepthBuffer\>

[webgl/offscreen](../modules/webgl_offscreen.md).FramebufferConfiguration

## Type parameters

| Name | Type |
| :------ | :------ |
| `ColorBuffer` | extends [`TextureBuffer`](webgl_offscreen.TextureBuffer.md) \| [`Renderbuffer`](webgl_offscreen.Renderbuffer.md) = [`TextureBuffer`](webgl_offscreen.TextureBuffer.md) \| [`Renderbuffer`](webgl_offscreen.Renderbuffer.md) |
| `DepthBuffer` | extends [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md) \| [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) = [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md) \| [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`FramebufferConfiguration`**

## Table of contents

### Constructors

- [constructor](webgl_offscreen.FramebufferConfiguration.md#constructor)

### Properties

- [attachmentVerified](webgl_offscreen.FramebufferConfiguration.md#attachmentverified)
- [colorBuffers](webgl_offscreen.FramebufferConfiguration.md#colorbuffers)
- [depthBuffer](webgl_offscreen.FramebufferConfiguration.md#depthbuffer)
- [disposedStacks](webgl_offscreen.FramebufferConfiguration.md#disposedstacks)
- [framebuffer](webgl_offscreen.FramebufferConfiguration.md#framebuffer)
- [fullAttachmentList](webgl_offscreen.FramebufferConfiguration.md#fullattachmentlist)
- [gl](webgl_offscreen.FramebufferConfiguration.md#gl)
- [height](webgl_offscreen.FramebufferConfiguration.md#height)
- [refCount](webgl_offscreen.FramebufferConfiguration.md#refcount)
- [singleAttachmentList](webgl_offscreen.FramebufferConfiguration.md#singleattachmentlist)
- [wasDisposed](webgl_offscreen.FramebufferConfiguration.md#wasdisposed)
- [width](webgl_offscreen.FramebufferConfiguration.md#width)

### Methods

- [addRef](webgl_offscreen.FramebufferConfiguration.md#addref)
- [bind](webgl_offscreen.FramebufferConfiguration.md#bind)
- [bindSingle](webgl_offscreen.FramebufferConfiguration.md#bindsingle)
- [dispose](webgl_offscreen.FramebufferConfiguration.md#dispose)
- [disposed](webgl_offscreen.FramebufferConfiguration.md#disposed)
- [hasSize](webgl_offscreen.FramebufferConfiguration.md#hassize)
- [readPixelFloat32IntoBuffer](webgl_offscreen.FramebufferConfiguration.md#readpixelfloat32intobuffer)
- [refCountReachedZero](webgl_offscreen.FramebufferConfiguration.md#refcountreachedzero)
- [registerCancellable](webgl_offscreen.FramebufferConfiguration.md#registercancellable)
- [registerDisposer](webgl_offscreen.FramebufferConfiguration.md#registerdisposer)
- [registerEventListener](webgl_offscreen.FramebufferConfiguration.md#registereventlistener)
- [unbind](webgl_offscreen.FramebufferConfiguration.md#unbind)
- [unregisterDisposer](webgl_offscreen.FramebufferConfiguration.md#unregisterdisposer)
- [verifyAttachment](webgl_offscreen.FramebufferConfiguration.md#verifyattachment)

## Constructors

### constructor

• **new FramebufferConfiguration**<`ColorBuffer`, `DepthBuffer`\>(`gl`, `configuration`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ColorBuffer` | extends [`Renderbuffer`](webgl_offscreen.Renderbuffer.md) \| [`TextureBuffer`](webgl_offscreen.TextureBuffer.md) = [`Renderbuffer`](webgl_offscreen.Renderbuffer.md) \| [`TextureBuffer`](webgl_offscreen.TextureBuffer.md) |
| `DepthBuffer` | extends [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md) = [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `configuration` | `Object` |
| `configuration.colorBuffers` | `ColorBuffer`[] |
| `configuration.depthBuffer?` | `DepthBuffer` |
| `configuration.framebuffer?` | [`Framebuffer`](webgl_offscreen.Framebuffer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L172)

## Properties

### attachmentVerified

• `Private` **attachmentVerified**: `boolean` = `false`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L169)

___

### colorBuffers

• **colorBuffers**: `ColorBuffer`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L165)

___

### depthBuffer

• **depthBuffer**: `undefined` \| `DepthBuffer`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L167)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### framebuffer

• **framebuffer**: [`Framebuffer`](webgl_offscreen.Framebuffer.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L166)

___

### fullAttachmentList

• `Private` **fullAttachmentList**: `number`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L168)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### height

• **height**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L163)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### singleAttachmentList

• `Private` **singleAttachmentList**: `number`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L170)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L162)

## Methods

### addRef

▸ **addRef**(): [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<`ColorBuffer`, `DepthBuffer`\>

#### Returns

[`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<`ColorBuffer`, `DepthBuffer`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/webgl/offscreen.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L195)

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

[src/neuroglancer/webgl/offscreen.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L217)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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

[src/neuroglancer/webgl/offscreen.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L191)

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

[src/neuroglancer/webgl/offscreen.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L238)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L234)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### verifyAttachment

▸ **verifyAttachment**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/offscreen.ts#L254)
