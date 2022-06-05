[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / CachedWatchableValue

# Class: CachedWatchableValue<T\>

[trackable_value](../modules/trackable_value.md).CachedWatchableValue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `RefCounted`

  ↳ **`CachedWatchableValue`**

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](trackable_value.CachedWatchableValue.md#constructor)

### Properties

- [changed](trackable_value.CachedWatchableValue.md#changed)
- [disposedStacks](trackable_value.CachedWatchableValue.md#disposedstacks)
- [refCount](trackable_value.CachedWatchableValue.md#refcount)
- [value](trackable_value.CachedWatchableValue.md#value)
- [wasDisposed](trackable_value.CachedWatchableValue.md#wasdisposed)

### Methods

- [addRef](trackable_value.CachedWatchableValue.md#addref)
- [dispose](trackable_value.CachedWatchableValue.md#dispose)
- [disposed](trackable_value.CachedWatchableValue.md#disposed)
- [refCountReachedZero](trackable_value.CachedWatchableValue.md#refcountreachedzero)
- [registerCancellable](trackable_value.CachedWatchableValue.md#registercancellable)
- [registerDisposer](trackable_value.CachedWatchableValue.md#registerdisposer)
- [registerEventListener](trackable_value.CachedWatchableValue.md#registereventlistener)
- [unregisterDisposer](trackable_value.CachedWatchableValue.md#unregisterdisposer)

## Constructors

### constructor

• **new CachedWatchableValue**<`T`\>(`base`, `isEqual?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\> |
| `isEqual` | (`a`: `T`, `b`: `T`) => `boolean` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/trackable_value.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L129)

## Properties

### changed

• **changed**: `Signal`<() => `void`\>

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L127)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### value

• **value**: `T`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L128)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CachedWatchableValue`](trackable_value.CachedWatchableValue.md)<`T`\>

#### Returns

[`CachedWatchableValue`](trackable_value.CachedWatchableValue.md)<`T`\>

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L85)
