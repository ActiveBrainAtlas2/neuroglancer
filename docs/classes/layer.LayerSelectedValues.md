[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerSelectedValues

# Class: LayerSelectedValues

[layer](../modules/layer.md).LayerSelectedValues

## Hierarchy

- `RefCounted`

  ↳ **`LayerSelectedValues`**

## Table of contents

### Constructors

- [constructor](layer.LayerSelectedValues.md#constructor)

### Properties

- [changed](layer.LayerSelectedValues.md#changed)
- [disposedStacks](layer.LayerSelectedValues.md#disposedstacks)
- [layerManager](layer.LayerSelectedValues.md#layermanager)
- [mouseState](layer.LayerSelectedValues.md#mousestate)
- [needsUpdate](layer.LayerSelectedValues.md#needsupdate)
- [refCount](layer.LayerSelectedValues.md#refcount)
- [wasDisposed](layer.LayerSelectedValues.md#wasdisposed)

### Methods

- [addRef](layer.LayerSelectedValues.md#addref)
- [dispose](layer.LayerSelectedValues.md#dispose)
- [disposed](layer.LayerSelectedValues.md#disposed)
- [get](layer.LayerSelectedValues.md#get)
- [handleChange](layer.LayerSelectedValues.md#handlechange)
- [handleLayerChange](layer.LayerSelectedValues.md#handlelayerchange)
- [refCountReachedZero](layer.LayerSelectedValues.md#refcountreachedzero)
- [registerCancellable](layer.LayerSelectedValues.md#registercancellable)
- [registerDisposer](layer.LayerSelectedValues.md#registerdisposer)
- [registerEventListener](layer.LayerSelectedValues.md#registereventlistener)
- [toJSON](layer.LayerSelectedValues.md#tojson)
- [unregisterDisposer](layer.LayerSelectedValues.md#unregisterdisposer)
- [update](layer.LayerSelectedValues.md#update)

## Constructors

### constructor

• **new LayerSelectedValues**(`layerManager`, `mouseState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](layer.LayerManager.md) |
| `mouseState` | [`MouseSelectionState`](layer.MouseSelectionState.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L961)

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:959](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L959)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](layer.MouseSelectionState.md)

___

### needsUpdate

• **needsUpdate**: `boolean` = `true`

#### Defined in

[src/neuroglancer/layer.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Returns

[`LayerSelectedValues`](layer.LayerSelectedValues.md)

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

### get

▸ **get**<`T`\>(`userLayer`): `undefined` \| `T`[``"selectionState"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UserLayer`](layer.UserLayer.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `userLayer` | `T` |

#### Returns

`undefined` \| `T`[``"selectionState"``]

#### Defined in

[src/neuroglancer/layer.ts:1006](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1006)

___

### handleChange

▸ **handleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:981](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L981)

___

### handleLayerChange

▸ **handleLayerChange**(): `void`

This should be called when the layer data may have changed, due to the set of managed layers
changing or new data having been received.

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L975)

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

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Defined in

[src/neuroglancer/layer.ts:1013](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L1013)

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

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L986)
