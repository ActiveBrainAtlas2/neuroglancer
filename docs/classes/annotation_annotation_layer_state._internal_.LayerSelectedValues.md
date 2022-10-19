[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LayerSelectedValues

# Class: LayerSelectedValues

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LayerSelectedValues

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LayerSelectedValues`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#changed)
- [disposedStacks](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#disposedstacks)
- [layerManager](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#layermanager)
- [mouseState](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#mousestate)
- [needsUpdate](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#needsupdate)
- [refCount](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#refcount)
- [wasDisposed](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#wasdisposed)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#disposed)
- [get](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#get)
- [handleChange](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#handlechange)
- [handleLayerChange](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#handlelayerchange)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#registereventlistener)
- [toJSON](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#tojson)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#unregisterdisposer)
- [update](annotation_annotation_layer_state._internal_.LayerSelectedValues.md#update)

## Constructors

### constructor

• **new LayerSelectedValues**(`layerManager`, `mouseState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md) |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L961)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:959](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L959)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

___

### needsUpdate

• **needsUpdate**: `boolean` = `true`

#### Defined in

[src/neuroglancer/layer.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

#### Returns

[`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

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

### get

▸ **get**<`T`\>(`userLayer`): `undefined` \| `T`[``"selectionState"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `userLayer` | `T` |

#### Returns

`undefined` \| `T`[``"selectionState"``]

#### Defined in

[src/neuroglancer/layer.ts:1006](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1006)

___

### handleChange

▸ **handleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:981](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L981)

___

### handleLayerChange

▸ **handleLayerChange**(): `void`

This should be called when the layer data may have changed, due to the set of managed layers
changing or new data having been received.

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L975)

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

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Defined in

[src/neuroglancer/layer.ts:1013](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1013)

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

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L986)
