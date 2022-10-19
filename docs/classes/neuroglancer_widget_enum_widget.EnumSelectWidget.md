[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/enum\_widget](../modules/neuroglancer_widget_enum_widget.md) / EnumSelectWidget

# Class: EnumSelectWidget<T\>

[neuroglancer/widget/enum_widget](../modules/neuroglancer_widget_enum_widget.md).EnumSelectWidget

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`EnumSelectWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_enum_widget.EnumSelectWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_enum_widget.EnumSelectWidget.md#disposedstacks)
- [element](neuroglancer_widget_enum_widget.EnumSelectWidget.md#element)
- [model](neuroglancer_widget_enum_widget.EnumSelectWidget.md#model)
- [refCount](neuroglancer_widget_enum_widget.EnumSelectWidget.md#refcount)
- [valueIndexMap](neuroglancer_widget_enum_widget.EnumSelectWidget.md#valueindexmap)
- [wasDisposed](neuroglancer_widget_enum_widget.EnumSelectWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_enum_widget.EnumSelectWidget.md#addref)
- [adjustViaWheel](neuroglancer_widget_enum_widget.EnumSelectWidget.md#adjustviawheel)
- [dispose](neuroglancer_widget_enum_widget.EnumSelectWidget.md#dispose)
- [disposed](neuroglancer_widget_enum_widget.EnumSelectWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_enum_widget.EnumSelectWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_enum_widget.EnumSelectWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_enum_widget.EnumSelectWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_enum_widget.EnumSelectWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_enum_widget.EnumSelectWidget.md#unregisterdisposer)
- [updateModel](neuroglancer_widget_enum_widget.EnumSelectWidget.md#updatemodel)
- [updateView](neuroglancer_widget_enum_widget.EnumSelectWidget.md#updateview)

## Constructors

### constructor

• **new EnumSelectWidget**<`T`\>(`model`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`TrackableEnum`](neuroglancer_util_trackable_enum.TrackableEnum.md)<`T`\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/enum_widget.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/enum_widget.ts#L23)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/enum_widget.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/enum_widget.ts#L21)

___

### model

• **model**: [`TrackableEnum`](neuroglancer_util_trackable_enum.TrackableEnum.md)<`T`\>

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### valueIndexMap

• `Private` **valueIndexMap**: `Map`<`T`, `number`\>

#### Defined in

[src/neuroglancer/widget/enum_widget.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/enum_widget.ts#L22)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`EnumSelectWidget`](neuroglancer_widget_enum_widget.EnumSelectWidget.md)<`T`\>

#### Returns

[`EnumSelectWidget`](neuroglancer_widget_enum_widget.EnumSelectWidget.md)<`T`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### adjustViaWheel

▸ **adjustViaWheel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WheelEvent`](../modules/main_module._internal_.md#wheelevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/enum_widget.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/enum_widget.ts#L46)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateModel

▸ `Private` **updateModel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/enum_widget.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/enum_widget.ts#L65)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/enum_widget.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/enum_widget.ts#L60)
