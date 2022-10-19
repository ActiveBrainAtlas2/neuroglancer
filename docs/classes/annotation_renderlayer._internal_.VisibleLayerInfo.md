[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / VisibleLayerInfo

# Class: VisibleLayerInfo<View, AttachmentState\>

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).VisibleLayerInfo

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) = [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`VisibleLayerInfo`**

## Table of contents

### Constructors

- [constructor](annotation_renderlayer._internal_.VisibleLayerInfo.md#constructor)

### Properties

- [disposedStacks](annotation_renderlayer._internal_.VisibleLayerInfo.md#disposedstacks)
- [messages](annotation_renderlayer._internal_.VisibleLayerInfo.md#messages)
- [refCount](annotation_renderlayer._internal_.VisibleLayerInfo.md#refcount)
- [seenGeneration](annotation_renderlayer._internal_.VisibleLayerInfo.md#seengeneration)
- [state](annotation_renderlayer._internal_.VisibleLayerInfo.md#state)
- [view](annotation_renderlayer._internal_.VisibleLayerInfo.md#view)
- [wasDisposed](annotation_renderlayer._internal_.VisibleLayerInfo.md#wasdisposed)

### Methods

- [addRef](annotation_renderlayer._internal_.VisibleLayerInfo.md#addref)
- [dispose](annotation_renderlayer._internal_.VisibleLayerInfo.md#dispose)
- [disposed](annotation_renderlayer._internal_.VisibleLayerInfo.md#disposed)
- [refCountReachedZero](annotation_renderlayer._internal_.VisibleLayerInfo.md#refcountreachedzero)
- [registerCancellable](annotation_renderlayer._internal_.VisibleLayerInfo.md#registercancellable)
- [registerDisposer](annotation_renderlayer._internal_.VisibleLayerInfo.md#registerdisposer)
- [registerEventListener](annotation_renderlayer._internal_.VisibleLayerInfo.md#registereventlistener)
- [unregisterDisposer](annotation_renderlayer._internal_.VisibleLayerInfo.md#unregisterdisposer)

## Constructors

### constructor

• **new VisibleLayerInfo**<`View`, `AttachmentState`\>(`view`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) = [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1278)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/layer.ts:1275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1275)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### seenGeneration

• **seenGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:1276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1276)

___

### state

• **state**: `undefined` \| `AttachmentState` = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:1277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1277)

___

### view

• **view**: `View`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<`View`, `AttachmentState`\>

#### Returns

[`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<`View`, `AttachmentState`\>

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
