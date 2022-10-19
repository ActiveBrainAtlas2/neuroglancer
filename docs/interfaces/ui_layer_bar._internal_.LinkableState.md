[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LinkableState

# Interface: LinkableState<T\>

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LinkableState

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RefCounted`](../classes/util_disposable.RefCounted.md)

- [`Trackable`](util_trackable.Trackable.md)

  ↳ **`LinkableState`**

## Table of contents

### Properties

- [changed](ui_layer_bar._internal_.LinkableState.md#changed)
- [disposedStacks](ui_layer_bar._internal_.LinkableState.md#disposedstacks)
- [refCount](ui_layer_bar._internal_.LinkableState.md#refcount)
- [wasDisposed](ui_layer_bar._internal_.LinkableState.md#wasdisposed)

### Methods

- [addRef](ui_layer_bar._internal_.LinkableState.md#addref)
- [assign](ui_layer_bar._internal_.LinkableState.md#assign)
- [dispose](ui_layer_bar._internal_.LinkableState.md#dispose)
- [disposed](ui_layer_bar._internal_.LinkableState.md#disposed)
- [refCountReachedZero](ui_layer_bar._internal_.LinkableState.md#refcountreachedzero)
- [registerCancellable](ui_layer_bar._internal_.LinkableState.md#registercancellable)
- [registerDisposer](ui_layer_bar._internal_.LinkableState.md#registerdisposer)
- [registerEventListener](ui_layer_bar._internal_.LinkableState.md#registereventlistener)
- [reset](ui_layer_bar._internal_.LinkableState.md#reset)
- [restoreState](ui_layer_bar._internal_.LinkableState.md#restorestate)
- [toJSON](ui_layer_bar._internal_.LinkableState.md#tojson)
- [unregisterDisposer](ui_layer_bar._internal_.LinkableState.md#unregisterdisposer)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Inherited from

[Trackable](util_trackable.Trackable.md).[changed](util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L37)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[disposedStacks](../classes/util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[refCount](../classes/util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[wasDisposed](../classes/util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkableState`](ui_layer_bar._internal_.LinkableState.md)<`T`\>

#### Returns

[`LinkableState`](ui_layer_bar._internal_.LinkableState.md)<`T`\>

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[addRef](../classes/util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L317)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[dispose](../classes/util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[disposed](../classes/util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[refCountReachedZero](../classes/util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](../classes/util_disposable.RefCounted.md).[registerCancellable](../classes/util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](../classes/util_disposable.RefCounted.md).[registerDisposer](../classes/util_disposable.RefCounted.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[registerEventListener](../classes/util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Trackable](util_trackable.Trackable.md).[reset](util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L36)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Inherited from

[Trackable](util_trackable.Trackable.md).[restoreState](util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[Trackable](util_trackable.Trackable.md).[toJSON](util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L38)

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

[RefCounted](../classes/util_disposable.RefCounted.md).[unregisterDisposer](../classes/util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
