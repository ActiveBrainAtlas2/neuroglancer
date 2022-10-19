[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / LayerSelectedValues

# Class: LayerSelectedValues

[neuroglancer/layer](../modules/neuroglancer_layer.md).LayerSelectedValues

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LayerSelectedValues`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.LayerSelectedValues.md#constructor)

### Properties

- [changed](neuroglancer_layer.LayerSelectedValues.md#changed)
- [disposedStacks](neuroglancer_layer.LayerSelectedValues.md#disposedstacks)
- [layerManager](neuroglancer_layer.LayerSelectedValues.md#layermanager)
- [mouseState](neuroglancer_layer.LayerSelectedValues.md#mousestate)
- [needsUpdate](neuroglancer_layer.LayerSelectedValues.md#needsupdate)
- [refCount](neuroglancer_layer.LayerSelectedValues.md#refcount)
- [wasDisposed](neuroglancer_layer.LayerSelectedValues.md#wasdisposed)

### Methods

- [addRef](neuroglancer_layer.LayerSelectedValues.md#addref)
- [dispose](neuroglancer_layer.LayerSelectedValues.md#dispose)
- [disposed](neuroglancer_layer.LayerSelectedValues.md#disposed)
- [get](neuroglancer_layer.LayerSelectedValues.md#get)
- [handleChange](neuroglancer_layer.LayerSelectedValues.md#handlechange)
- [handleLayerChange](neuroglancer_layer.LayerSelectedValues.md#handlelayerchange)
- [refCountReachedZero](neuroglancer_layer.LayerSelectedValues.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.LayerSelectedValues.md#registercancellable)
- [registerDisposer](neuroglancer_layer.LayerSelectedValues.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.LayerSelectedValues.md#registereventlistener)
- [toJSON](neuroglancer_layer.LayerSelectedValues.md#tojson)
- [unregisterDisposer](neuroglancer_layer.LayerSelectedValues.md#unregisterdisposer)
- [update](neuroglancer_layer.LayerSelectedValues.md#update)

## Constructors

### constructor

• **new LayerSelectedValues**(`layerManager`, `mouseState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](neuroglancer_layer.LayerManager.md) |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L961)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:959](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L959)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

___

### needsUpdate

• **needsUpdate**: `boolean` = `true`

#### Defined in

[src/neuroglancer/layer.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Returns

[`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

### get

▸ **get**<`T`\>(`userLayer`): `undefined` \| `T`[``"selectionState"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UserLayer`](neuroglancer_layer.UserLayer.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `userLayer` | `T` |

#### Returns

`undefined` \| `T`[``"selectionState"``]

#### Defined in

[src/neuroglancer/layer.ts:1006](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1006)

___

### handleChange

▸ **handleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:981](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L981)

___

### handleLayerChange

▸ **handleLayerChange**(): `void`

This should be called when the layer data may have changed, due to the set of managed layers
changing or new data having been received.

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L975)

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

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Defined in

[src/neuroglancer/layer.ts:1013](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L1013)

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

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L986)
