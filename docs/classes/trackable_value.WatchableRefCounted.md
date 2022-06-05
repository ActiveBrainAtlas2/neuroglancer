[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / WatchableRefCounted

# Class: WatchableRefCounted<T\>

[trackable_value](../modules/trackable_value.md).WatchableRefCounted

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `RefCounted` |

## Hierarchy

- `RefCounted`

  ↳ **`WatchableRefCounted`**

  ↳↳ [`TrackableRefCounted`](trackable_value.TrackableRefCounted.md)

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T` \| `undefined`\>

## Table of contents

### Constructors

- [constructor](trackable_value.WatchableRefCounted.md#constructor)

### Properties

- [changed](trackable_value.WatchableRefCounted.md#changed)
- [disposedStacks](trackable_value.WatchableRefCounted.md#disposedstacks)
- [refCount](trackable_value.WatchableRefCounted.md#refcount)
- [valueHandler](trackable_value.WatchableRefCounted.md#valuehandler)
- [value\_](trackable_value.WatchableRefCounted.md#value_)
- [wasDisposed](trackable_value.WatchableRefCounted.md#wasdisposed)

### Accessors

- [value](trackable_value.WatchableRefCounted.md#value)

### Methods

- [addRef](trackable_value.WatchableRefCounted.md#addref)
- [dispose](trackable_value.WatchableRefCounted.md#dispose)
- [disposed](trackable_value.WatchableRefCounted.md#disposed)
- [refCountReachedZero](trackable_value.WatchableRefCounted.md#refcountreachedzero)
- [registerCancellable](trackable_value.WatchableRefCounted.md#registercancellable)
- [registerDisposer](trackable_value.WatchableRefCounted.md#registerdisposer)
- [registerEventListener](trackable_value.WatchableRefCounted.md#registereventlistener)
- [reset](trackable_value.WatchableRefCounted.md#reset)
- [unregisterDisposer](trackable_value.WatchableRefCounted.md#unregisterdisposer)

## Constructors

### constructor

• **new WatchableRefCounted**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `RefCounted`<`T`\> |

#### Inherited from

RefCounted.constructor

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L193)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### valueHandler

• `Private` **valueHandler**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/trackable_value.ts:196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L196)

___

### value\_

• `Private` **value\_**: `undefined` \| `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L195)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L198)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L202)

## Methods

### addRef

▸ **addRef**(): [`WatchableRefCounted`](trackable_value.WatchableRefCounted.md)<`T`\>

#### Returns

[`WatchableRefCounted`](trackable_value.WatchableRefCounted.md)<`T`\>

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/trackable_value.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L229)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L225)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
