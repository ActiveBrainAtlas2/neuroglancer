[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / ComputedWatchableValue

# Class: ComputedWatchableValue<U\>

[trackable_value](../modules/trackable_value.md).ComputedWatchableValue

## Type parameters

| Name |
| :------ |
| `U` |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`ComputedWatchableValue`**

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`U`\>

## Table of contents

### Constructors

- [constructor](trackable_value.ComputedWatchableValue.md#constructor)

### Properties

- [changed](trackable_value.ComputedWatchableValue.md#changed)
- [disposedStacks](trackable_value.ComputedWatchableValue.md#disposedstacks)
- [f](trackable_value.ComputedWatchableValue.md#f)
- [refCount](trackable_value.ComputedWatchableValue.md#refcount)
- [wasDisposed](trackable_value.ComputedWatchableValue.md#wasdisposed)

### Accessors

- [value](trackable_value.ComputedWatchableValue.md#value)

### Methods

- [addRef](trackable_value.ComputedWatchableValue.md#addref)
- [dispose](trackable_value.ComputedWatchableValue.md#dispose)
- [disposed](trackable_value.ComputedWatchableValue.md#disposed)
- [refCountReachedZero](trackable_value.ComputedWatchableValue.md#refcountreachedzero)
- [registerCancellable](trackable_value.ComputedWatchableValue.md#registercancellable)
- [registerDisposer](trackable_value.ComputedWatchableValue.md#registerdisposer)
- [registerEventListener](trackable_value.ComputedWatchableValue.md#registereventlistener)
- [unregisterDisposer](trackable_value.ComputedWatchableValue.md#unregisterdisposer)

## Constructors

### constructor

• **new ComputedWatchableValue**<`U`\>(`f`, ...`signals`)

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `U` |
| `...signals` | [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)[] |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L183)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L182)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### f

• **f**: () => `U`

#### Type declaration

▸ (): `U`

##### Returns

`U`

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

## Accessors

### value

• `get` **value**(): `U`

#### Returns

`U`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L179)

## Methods

### addRef

▸ **addRef**(): [`ComputedWatchableValue`](trackable_value.ComputedWatchableValue.md)<`U`\>

#### Returns

[`ComputedWatchableValue`](trackable_value.ComputedWatchableValue.md)<`U`\>

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
