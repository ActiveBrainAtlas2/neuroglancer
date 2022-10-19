[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/backend](../modules/mesh_backend.md) / [<internal\>](../modules/mesh_backend._internal_.md) / RenderLayerBackendAttachment

# Class: RenderLayerBackendAttachment<ViewBackend, AttachmentState\>

[mesh/backend](../modules/mesh_backend.md).[<internal>](../modules/mesh_backend._internal_.md).RenderLayerBackendAttachment

## Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`RenderLayerBackendAttachment`**

## Table of contents

### Constructors

- [constructor](mesh_backend._internal_.RenderLayerBackendAttachment.md#constructor)

### Properties

- [disposedStacks](mesh_backend._internal_.RenderLayerBackendAttachment.md#disposedstacks)
- [refCount](mesh_backend._internal_.RenderLayerBackendAttachment.md#refcount)
- [state](mesh_backend._internal_.RenderLayerBackendAttachment.md#state)
- [view](mesh_backend._internal_.RenderLayerBackendAttachment.md#view)
- [wasDisposed](mesh_backend._internal_.RenderLayerBackendAttachment.md#wasdisposed)

### Methods

- [addRef](mesh_backend._internal_.RenderLayerBackendAttachment.md#addref)
- [dispose](mesh_backend._internal_.RenderLayerBackendAttachment.md#dispose)
- [disposed](mesh_backend._internal_.RenderLayerBackendAttachment.md#disposed)
- [refCountReachedZero](mesh_backend._internal_.RenderLayerBackendAttachment.md#refcountreachedzero)
- [registerCancellable](mesh_backend._internal_.RenderLayerBackendAttachment.md#registercancellable)
- [registerDisposer](mesh_backend._internal_.RenderLayerBackendAttachment.md#registerdisposer)
- [registerEventListener](mesh_backend._internal_.RenderLayerBackendAttachment.md#registereventlistener)
- [unregisterDisposer](mesh_backend._internal_.RenderLayerBackendAttachment.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderLayerBackendAttachment**<`ViewBackend`, `AttachmentState`\>(`view`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `ViewBackend` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_layer_backend.ts#L34)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: `undefined` \| `AttachmentState` = `undefined`

#### Defined in

[src/neuroglancer/render_layer_backend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_layer_backend.ts#L33)

___

### view

• **view**: `ViewBackend`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<`ViewBackend`, `AttachmentState`\>

#### Returns

[`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<`ViewBackend`, `AttachmentState`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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
