[neuroglancer](../README.md) / [Modules](../modules.md) / [render\_layer\_backend](../modules/render_layer_backend.md) / RenderLayerBackendAttachment

# Class: RenderLayerBackendAttachment<ViewBackend, AttachmentState\>

[render_layer_backend](../modules/render_layer_backend.md).RenderLayerBackendAttachment

## Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- `RefCounted`

  ↳ **`RenderLayerBackendAttachment`**

## Table of contents

### Constructors

- [constructor](render_layer_backend.RenderLayerBackendAttachment.md#constructor)

### Properties

- [disposedStacks](render_layer_backend.RenderLayerBackendAttachment.md#disposedstacks)
- [refCount](render_layer_backend.RenderLayerBackendAttachment.md#refcount)
- [state](render_layer_backend.RenderLayerBackendAttachment.md#state)
- [view](render_layer_backend.RenderLayerBackendAttachment.md#view)
- [wasDisposed](render_layer_backend.RenderLayerBackendAttachment.md#wasdisposed)

### Methods

- [addRef](render_layer_backend.RenderLayerBackendAttachment.md#addref)
- [dispose](render_layer_backend.RenderLayerBackendAttachment.md#dispose)
- [disposed](render_layer_backend.RenderLayerBackendAttachment.md#disposed)
- [refCountReachedZero](render_layer_backend.RenderLayerBackendAttachment.md#refcountreachedzero)
- [registerCancellable](render_layer_backend.RenderLayerBackendAttachment.md#registercancellable)
- [registerDisposer](render_layer_backend.RenderLayerBackendAttachment.md#registerdisposer)
- [registerEventListener](render_layer_backend.RenderLayerBackendAttachment.md#registereventlistener)
- [unregisterDisposer](render_layer_backend.RenderLayerBackendAttachment.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderLayerBackendAttachment**<`ViewBackend`, `AttachmentState`\>(`view`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `ViewBackend` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/render_layer_backend.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/render_layer_backend.ts#L34)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: `undefined` \| `AttachmentState` = `undefined`

#### Defined in

[src/neuroglancer/render_layer_backend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/render_layer_backend.ts#L33)

___

### view

• **view**: `ViewBackend`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RenderLayerBackendAttachment`](render_layer_backend.RenderLayerBackendAttachment.md)<`ViewBackend`, `AttachmentState`\>

#### Returns

[`RenderLayerBackendAttachment`](render_layer_backend.RenderLayerBackendAttachment.md)<`ViewBackend`, `AttachmentState`\>

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)
