[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_boolean](../modules/trackable_boolean.md) / TrackableBooleanCheckbox

# Class: TrackableBooleanCheckbox

[trackable_boolean](../modules/trackable_boolean.md).TrackableBooleanCheckbox

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_boolean.ts#L59)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLInputElement`](../modules/axes_lines._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_boolean.ts#L58)

___

### model

• **model**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\>

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

▸ **addRef**(): [`TrackableBooleanCheckbox`](trackable_boolean.TrackableBooleanCheckbox.md)

#### Returns

[`TrackableBooleanCheckbox`](trackable_boolean.TrackableBooleanCheckbox.md)

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

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_boolean.ts#L87)

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
