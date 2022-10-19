[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_boolean](../modules/trackable_boolean.md) / ElementVisibilityFromTrackableBoolean

# Class: ElementVisibilityFromTrackableBoolean

[trackable_boolean](../modules/trackable_boolean.md).ElementVisibilityFromTrackableBoolean

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`ElementVisibilityFromTrackableBoolean`**

## Table of contents

### Constructors

- [constructor](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#constructor)

### Properties

- [disposedStacks](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#disposedstacks)
- [element](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#element)
- [initialDisplay](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#initialdisplay)
- [model](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#model)
- [refCount](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#refcount)
- [wasDisposed](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#wasdisposed)

### Methods

- [addRef](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#addref)
- [dispose](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#dispose)
- [disposed](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#disposed)
- [refCountReachedZero](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#refcountreachedzero)
- [registerCancellable](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#registercancellable)
- [registerDisposer](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#registerdisposer)
- [registerEventListener](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#registereventlistener)
- [unregisterDisposer](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#unregisterdisposer)
- [updateVisibility](trackable_boolean.ElementVisibilityFromTrackableBoolean.md#updatevisibility)

## Constructors

### constructor

• **new ElementVisibilityFromTrackableBoolean**(`model`, `element`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |
| `element` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_boolean.ts#L99)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

___

### initialDisplay

• `Private` **initialDisplay**: `string`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_boolean.ts#L98)

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

▸ **addRef**(): [`ElementVisibilityFromTrackableBoolean`](trackable_boolean.ElementVisibilityFromTrackableBoolean.md)

#### Returns

[`ElementVisibilityFromTrackableBoolean`](trackable_boolean.ElementVisibilityFromTrackableBoolean.md)

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

___

### updateVisibility

▸ **updateVisibility**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_boolean.ts#L106)
