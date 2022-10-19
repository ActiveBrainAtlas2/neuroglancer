[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/invlerp](../modules/widget_invlerp.md) / CdfController

# Class: CdfController<T\>

[widget/invlerp](../modules/widget_invlerp.md).CdfController

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RangeAndWindowIntervals`](../interfaces/widget_invlerp.RangeAndWindowIntervals.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`CdfController`**

## Table of contents

### Constructors

- [constructor](widget_invlerp.CdfController.md#constructor)

### Properties

- [dataType](widget_invlerp.CdfController.md#datatype)
- [disposedStacks](widget_invlerp.CdfController.md#disposedstacks)
- [element](widget_invlerp.CdfController.md#element)
- [getModel](widget_invlerp.CdfController.md#getmodel)
- [refCount](widget_invlerp.CdfController.md#refcount)
- [setModel](widget_invlerp.CdfController.md#setmodel)
- [wasDisposed](widget_invlerp.CdfController.md#wasdisposed)

### Methods

- [addRef](widget_invlerp.CdfController.md#addref)
- [dispose](widget_invlerp.CdfController.md#dispose)
- [disposed](widget_invlerp.CdfController.md#disposed)
- [getTargetFraction](widget_invlerp.CdfController.md#gettargetfraction)
- [getTargetValue](widget_invlerp.CdfController.md#gettargetvalue)
- [getWindowLerp](widget_invlerp.CdfController.md#getwindowlerp)
- [refCountReachedZero](widget_invlerp.CdfController.md#refcountreachedzero)
- [registerCancellable](widget_invlerp.CdfController.md#registercancellable)
- [registerDisposer](widget_invlerp.CdfController.md#registerdisposer)
- [registerEventListener](widget_invlerp.CdfController.md#registereventlistener)
- [unregisterDisposer](widget_invlerp.CdfController.md#unregisterdisposer)

## Constructors

### constructor

• **new CdfController**<`T`\>(`element`, `dataType`, `getModel`, `setModel`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RangeAndWindowIntervals`](../interfaces/widget_invlerp.RangeAndWindowIntervals.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `getModel` | () => `T` |
| `setModel` | (`value`: `T`) => `void` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L57)

## Properties

### dataType

• **dataType**: [`DataType`](../enums/util_data_type.DataType.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

___

### getModel

• **getModel**: () => `T`

#### Type declaration

▸ (): `T`

##### Returns

`T`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### setModel

• **setModel**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`void`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CdfController`](widget_invlerp.CdfController.md)<`T`\>

#### Returns

[`CdfController`](widget_invlerp.CdfController.md)<`T`\>

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

### getTargetFraction

▸ **getTargetFraction**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L129)

___

### getTargetValue

▸ **getTargetValue**(`event`): `undefined` \| `number` \| [`Uint64`](util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent) |

#### Returns

`undefined` \| `number` \| [`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L138)

___

### getWindowLerp

▸ **getWindowLerp**(`relativeX`): `number` \| [`Uint64`](util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeX` | `number` |

#### Returns

`number` \| [`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L134)

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
