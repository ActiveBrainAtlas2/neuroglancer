[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / VisibleLayerInfo

# Class: VisibleLayerInfo<View, AttachmentState\>

[layer](../modules/layer.md).VisibleLayerInfo

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/layer.LayerView.md) = [`LayerView`](../interfaces/layer.LayerView.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- `RefCounted`

  ↳ **`VisibleLayerInfo`**

## Table of contents

### Constructors

- [constructor](layer.VisibleLayerInfo.md#constructor)

### Properties

- [disposedStacks](layer.VisibleLayerInfo.md#disposedstacks)
- [messages](layer.VisibleLayerInfo.md#messages)
- [refCount](layer.VisibleLayerInfo.md#refcount)
- [seenGeneration](layer.VisibleLayerInfo.md#seengeneration)
- [state](layer.VisibleLayerInfo.md#state)
- [view](layer.VisibleLayerInfo.md#view)
- [wasDisposed](layer.VisibleLayerInfo.md#wasdisposed)

### Methods

- [addRef](layer.VisibleLayerInfo.md#addref)
- [dispose](layer.VisibleLayerInfo.md#dispose)
- [disposed](layer.VisibleLayerInfo.md#disposed)
- [refCountReachedZero](layer.VisibleLayerInfo.md#refcountreachedzero)
- [registerCancellable](layer.VisibleLayerInfo.md#registercancellable)
- [registerDisposer](layer.VisibleLayerInfo.md#registerdisposer)
- [registerEventListener](layer.VisibleLayerInfo.md#registereventlistener)
- [unregisterDisposer](layer.VisibleLayerInfo.md#unregisterdisposer)

## Constructors

### constructor

• **new VisibleLayerInfo**<`View`, `AttachmentState`\>(`view`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/layer.LayerView.md) = [`LayerView`](../interfaces/layer.LayerView.md) |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:1274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1274)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### messages

• **messages**: `MessageList`

#### Defined in

[src/neuroglancer/layer.ts:1271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1271)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### seenGeneration

• **seenGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:1272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1272)

___

### state

• **state**: `undefined` \| `AttachmentState` = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:1273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1273)

___

### view

• **view**: `View`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `AttachmentState`\>

#### Returns

[`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `AttachmentState`\>

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)
