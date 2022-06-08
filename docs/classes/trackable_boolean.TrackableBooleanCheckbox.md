[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_boolean](../modules/trackable_boolean.md) / TrackableBooleanCheckbox

# Class: TrackableBooleanCheckbox

[trackable_boolean](../modules/trackable_boolean.md).TrackableBooleanCheckbox

## Hierarchy

- `RefCounted`

  ↳ **`TrackableBooleanCheckbox`**

## Table of contents

### Constructors

- [constructor](trackable_boolean.TrackableBooleanCheckbox.md#constructor)

### Properties

- [disposedStacks](trackable_boolean.TrackableBooleanCheckbox.md#disposedstacks)
- [element](trackable_boolean.TrackableBooleanCheckbox.md#element)
- [model](trackable_boolean.TrackableBooleanCheckbox.md#model)
- [refCount](trackable_boolean.TrackableBooleanCheckbox.md#refcount)
- [wasDisposed](trackable_boolean.TrackableBooleanCheckbox.md#wasdisposed)

### Methods

- [addRef](trackable_boolean.TrackableBooleanCheckbox.md#addref)
- [dispose](trackable_boolean.TrackableBooleanCheckbox.md#dispose)
- [disposed](trackable_boolean.TrackableBooleanCheckbox.md#disposed)
- [refCountReachedZero](trackable_boolean.TrackableBooleanCheckbox.md#refcountreachedzero)
- [registerCancellable](trackable_boolean.TrackableBooleanCheckbox.md#registercancellable)
- [registerDisposer](trackable_boolean.TrackableBooleanCheckbox.md#registerdisposer)
- [registerEventListener](trackable_boolean.TrackableBooleanCheckbox.md#registereventlistener)
- [unregisterDisposer](trackable_boolean.TrackableBooleanCheckbox.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableBooleanCheckbox**(`model`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `options` | `Object` |
| `options.disableTitle?` | `string` |
| `options.enableTitle?` | `string` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/trackable_boolean.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_boolean.ts#L59)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLInputElement`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_boolean.ts#L58)

___

### model

• **model**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\>

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

▸ **addRef**(): [`TrackableBooleanCheckbox`](trackable_boolean.TrackableBooleanCheckbox.md)

#### Returns

[`TrackableBooleanCheckbox`](trackable_boolean.TrackableBooleanCheckbox.md)

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

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/trackable_boolean.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_boolean.ts#L87)

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
