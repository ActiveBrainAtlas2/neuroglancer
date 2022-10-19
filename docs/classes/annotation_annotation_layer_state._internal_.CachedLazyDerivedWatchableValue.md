[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CachedLazyDerivedWatchableValue

# Class: CachedLazyDerivedWatchableValue<U\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CachedLazyDerivedWatchableValue

## Type parameters

| Name |
| :------ |
| `U` |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`CachedLazyDerivedWatchableValue`**

## Implements

- [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`U`\>

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#changed)
- [disposedStacks](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#disposedstacks)
- [f](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#f)
- [refCount](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#refcount)
- [valueGeneration](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#valuegeneration)
- [value\_](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#value_)
- [wasDisposed](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#wasdisposed)
- [ws](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#ws)

### Accessors

- [value](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#value)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#registereventlistener)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md#unregisterdisposer)

## Constructors

### constructor

• **new CachedLazyDerivedWatchableValue**<`U`\>(`f`, `ws`)

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (...`v`: `any`[]) => `U` |
| `ws` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`any`\>[] |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L111)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L97)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### f

• `Private` **f**: (...`v`: `any`[]) => `U`

#### Type declaration

▸ (...`v`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...v` | `any`[] |

##### Returns

`U`

#### Defined in

[src/neuroglancer/trackable_value.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L108)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### valueGeneration

• `Private` **valueGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/trackable_value.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L99)

___

### value\_

• `Private` **value\_**: `undefined` \| `U`

#### Defined in

[src/neuroglancer/trackable_value.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L98)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### ws

• `Private` **ws**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`any`\>[]

#### Defined in

[src/neuroglancer/trackable_value.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L109)

## Accessors

### value

• `get` **value**(): `U`

#### Returns

`U`

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L100)

## Methods

### addRef

▸ **addRef**(): [`CachedLazyDerivedWatchableValue`](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`U`\>

#### Returns

[`CachedLazyDerivedWatchableValue`](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`U`\>

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
