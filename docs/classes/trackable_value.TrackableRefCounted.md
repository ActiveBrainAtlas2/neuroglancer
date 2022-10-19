[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / TrackableRefCounted

# Class: TrackableRefCounted<T\>

[trackable_value](../modules/trackable_value.md).TrackableRefCounted

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md) |

## Hierarchy

- [`WatchableRefCounted`](trackable_value.WatchableRefCounted.md)<`T`\>

  ↳ **`TrackableRefCounted`**

## Implements

- [`TrackableValueInterface`](../interfaces/trackable_value.TrackableValueInterface.md)<`T` \| `undefined`\>

## Table of contents

### Constructors

- [constructor](trackable_value.TrackableRefCounted.md#constructor)

### Properties

- [changed](trackable_value.TrackableRefCounted.md#changed)
- [disposedStacks](trackable_value.TrackableRefCounted.md#disposedstacks)
- [jsonConverter](trackable_value.TrackableRefCounted.md#jsonconverter)
- [refCount](trackable_value.TrackableRefCounted.md#refcount)
- [validator](trackable_value.TrackableRefCounted.md#validator)
- [wasDisposed](trackable_value.TrackableRefCounted.md#wasdisposed)

### Accessors

- [value](trackable_value.TrackableRefCounted.md#value)

### Methods

- [addRef](trackable_value.TrackableRefCounted.md#addref)
- [dispose](trackable_value.TrackableRefCounted.md#dispose)
- [disposed](trackable_value.TrackableRefCounted.md#disposed)
- [refCountReachedZero](trackable_value.TrackableRefCounted.md#refcountreachedzero)
- [registerCancellable](trackable_value.TrackableRefCounted.md#registercancellable)
- [registerDisposer](trackable_value.TrackableRefCounted.md#registerdisposer)
- [registerEventListener](trackable_value.TrackableRefCounted.md#registereventlistener)
- [reset](trackable_value.TrackableRefCounted.md#reset)
- [restoreState](trackable_value.TrackableRefCounted.md#restorestate)
- [toJSON](trackable_value.TrackableRefCounted.md#tojson)
- [unregisterDisposer](trackable_value.TrackableRefCounted.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableRefCounted**<`T`\>(`validator`, `jsonConverter`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | (`value`: `any`) => `undefined` \| `T` |
| `jsonConverter` | (`value`: `T`) => `any` |

#### Overrides

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[constructor](trackable_value.WatchableRefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L244)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[changed](../interfaces/trackable_value.TrackableValueInterface.md#changed)

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[changed](trackable_value.WatchableRefCounted.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L193)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[disposedStacks](trackable_value.WatchableRefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### jsonConverter

• **jsonConverter**: (`value`: `T`) => `any`

#### Type declaration

▸ (`value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`any`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[refCount](trackable_value.WatchableRefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### validator

• **validator**: (`value`: `any`) => `undefined` \| `T`

#### Type declaration

▸ (`value`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`undefined` \| `T`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[wasDisposed](trackable_value.WatchableRefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[value](../interfaces/trackable_value.TrackableValueInterface.md#value)

#### Inherited from

WatchableRefCounted.value

#### Defined in

[src/neuroglancer/trackable_value.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L198)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[value](../interfaces/trackable_value.TrackableValueInterface.md#value)

#### Inherited from

WatchableRefCounted.value

#### Defined in

[src/neuroglancer/trackable_value.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L202)

## Methods

### addRef

▸ **addRef**(): [`TrackableRefCounted`](trackable_value.TrackableRefCounted.md)<`T`\>

#### Returns

[`TrackableRefCounted`](trackable_value.TrackableRefCounted.md)<`T`\>

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[addRef](trackable_value.WatchableRefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[dispose](trackable_value.WatchableRefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[disposed](trackable_value.WatchableRefCounted.md#disposed)

#### Defined in

[src/neuroglancer/trackable_value.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L229)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[refCountReachedZero](trackable_value.WatchableRefCounted.md#refcountreachedzero)

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

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[registerCancellable](trackable_value.WatchableRefCounted.md#registercancellable)

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

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[registerDisposer](trackable_value.WatchableRefCounted.md#registerdisposer)

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

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[registerEventListener](trackable_value.WatchableRefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[reset](../interfaces/trackable_value.TrackableValueInterface.md#reset)

#### Inherited from

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[reset](trackable_value.WatchableRefCounted.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L225)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[restoreState](../interfaces/trackable_value.TrackableValueInterface.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L253)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[toJSON](../interfaces/trackable_value.TrackableValueInterface.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L248)

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

[WatchableRefCounted](trackable_value.WatchableRefCounted.md).[unregisterDisposer](trackable_value.WatchableRefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
