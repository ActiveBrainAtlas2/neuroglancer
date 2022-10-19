[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / FramebufferConfiguration

# Class: FramebufferConfiguration<ColorBuffer, DepthBuffer\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).FramebufferConfiguration

## Type parameters

| Name | Type |
| :------ | :------ |
| `ColorBuffer` | extends [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md) \| [`Renderbuffer`](data_panel_layout._internal_.Renderbuffer.md) = [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md) \| [`Renderbuffer`](data_panel_layout._internal_.Renderbuffer.md) |
| `DepthBuffer` | extends [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md) \| [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md) = [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md) \| [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md) |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`FramebufferConfiguration`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.FramebufferConfiguration.md#constructor)

### Properties

- [attachmentVerified](data_panel_layout._internal_.FramebufferConfiguration.md#attachmentverified)
- [colorBuffers](data_panel_layout._internal_.FramebufferConfiguration.md#colorbuffers)
- [depthBuffer](data_panel_layout._internal_.FramebufferConfiguration.md#depthbuffer)
- [disposedStacks](data_panel_layout._internal_.FramebufferConfiguration.md#disposedstacks)
- [framebuffer](data_panel_layout._internal_.FramebufferConfiguration.md#framebuffer)
- [fullAttachmentList](data_panel_layout._internal_.FramebufferConfiguration.md#fullattachmentlist)
- [gl](data_panel_layout._internal_.FramebufferConfiguration.md#gl)
- [height](data_panel_layout._internal_.FramebufferConfiguration.md#height)
- [refCount](data_panel_layout._internal_.FramebufferConfiguration.md#refcount)
- [singleAttachmentList](data_panel_layout._internal_.FramebufferConfiguration.md#singleattachmentlist)
- [wasDisposed](data_panel_layout._internal_.FramebufferConfiguration.md#wasdisposed)
- [width](data_panel_layout._internal_.FramebufferConfiguration.md#width)

### Methods

- [addRef](data_panel_layout._internal_.FramebufferConfiguration.md#addref)
- [bind](data_panel_layout._internal_.FramebufferConfiguration.md#bind)
- [bindSingle](data_panel_layout._internal_.FramebufferConfiguration.md#bindsingle)
- [dispose](data_panel_layout._internal_.FramebufferConfiguration.md#dispose)
- [disposed](data_panel_layout._internal_.FramebufferConfiguration.md#disposed)
- [hasSize](data_panel_layout._internal_.FramebufferConfiguration.md#hassize)
- [readPixelFloat32IntoBuffer](data_panel_layout._internal_.FramebufferConfiguration.md#readpixelfloat32intobuffer)
- [refCountReachedZero](data_panel_layout._internal_.FramebufferConfiguration.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.FramebufferConfiguration.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.FramebufferConfiguration.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.FramebufferConfiguration.md#registereventlistener)
- [unbind](data_panel_layout._internal_.FramebufferConfiguration.md#unbind)
- [unregisterDisposer](data_panel_layout._internal_.FramebufferConfiguration.md#unregisterdisposer)
- [verifyAttachment](data_panel_layout._internal_.FramebufferConfiguration.md#verifyattachment)

## Constructors

### constructor

• **new FramebufferConfiguration**<`ColorBuffer`, `DepthBuffer`\>(`gl`, `configuration`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ColorBuffer` | extends [`Renderbuffer`](data_panel_layout._internal_.Renderbuffer.md) \| [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md) = [`Renderbuffer`](data_panel_layout._internal_.Renderbuffer.md) \| [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md) |
| `DepthBuffer` | extends [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md) = [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `configuration` | `Object` |
| `configuration.colorBuffers` | `ColorBuffer`[] |
| `configuration.depthBuffer?` | `DepthBuffer` |
| `configuration.framebuffer?` | [`Framebuffer`](data_panel_layout._internal_.Framebuffer.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L172)

## Properties

### attachmentVerified

• `Private` **attachmentVerified**: `boolean` = `false`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L169)

___

### colorBuffers

• **colorBuffers**: `ColorBuffer`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L165)

___

### depthBuffer

• **depthBuffer**: `undefined` \| `DepthBuffer`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L167)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### framebuffer

• **framebuffer**: [`Framebuffer`](data_panel_layout._internal_.Framebuffer.md)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L166)

___

### fullAttachmentList

• `Private` **fullAttachmentList**: `number`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L168)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### height

• **height**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L163)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### singleAttachmentList

• `Private` **singleAttachmentList**: `number`[]

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L170)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L162)

## Methods

### addRef

▸ **addRef**(): [`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<`ColorBuffer`, `DepthBuffer`\>

#### Returns

[`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<`ColorBuffer`, `DepthBuffer`\>

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/webgl/offscreen.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L195)

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

[src/neuroglancer/webgl/offscreen.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L217)

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

[src/neuroglancer/webgl/offscreen.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L191)

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

[src/neuroglancer/webgl/offscreen.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L238)

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

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L234)

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

### verifyAttachment

▸ **verifyAttachment**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L254)
