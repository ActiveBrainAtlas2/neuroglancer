[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerSelectedValues

# Class: LayerSelectedValues

[layer](../modules/layer.md).LayerSelectedValues

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L961)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:959](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L959)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

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

[src/neuroglancer/layer.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Returns

[`LayerSelectedValues`](layer.LayerSelectedValues.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/layer.ts:1006](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1006)

___

### handleChange

▸ **handleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:981](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L981)

___

### handleLayerChange

▸ **handleLayerChange**(): `void`

This should be called when the layer data may have changed, due to the set of managed layers
changing or new data having been received.

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L975)

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

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Defined in

[src/neuroglancer/layer.ts:1013](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1013)

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

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L986)
