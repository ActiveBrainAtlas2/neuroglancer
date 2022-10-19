[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / CachedLazyDerivedWatchableValue

# Class: CachedLazyDerivedWatchableValue<U\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).CachedLazyDerivedWatchableValue

## Type parameters

| Name |
| :------ |
| `U` |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`CachedLazyDerivedWatchableValue`**

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`U`\>

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#constructor)

### Properties

- [changed](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#changed)
- [disposedStacks](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#disposedstacks)
- [f](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#f)
- [refCount](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#refcount)
- [valueGeneration](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#valuegeneration)
- [value\_](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#value_)
- [wasDisposed](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#wasdisposed)
- [ws](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#ws)

### Accessors

- [value](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#value)

### Methods

- [addRef](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#addref)
- [dispose](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#dispose)
- [disposed](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#registereventlistener)
- [unregisterDisposer](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md#unregisterdisposer)

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
| `ws` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`any`\>[] |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L111)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L97)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

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

[src/neuroglancer/trackable_value.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L108)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### valueGeneration

• `Private` **valueGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/trackable_value.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L99)

___

### value\_

• `Private` **value\_**: `undefined` \| `U`

#### Defined in

[src/neuroglancer/trackable_value.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L98)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### ws

• `Private` **ws**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`any`\>[]

#### Defined in

[src/neuroglancer/trackable_value.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L109)

## Accessors

### value

• `get` **value**(): `U`

#### Returns

`U`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L100)

## Methods

### addRef

▸ **addRef**(): [`CachedLazyDerivedWatchableValue`](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md)<`U`\>

#### Returns

[`CachedLazyDerivedWatchableValue`](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md)<`U`\>

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
