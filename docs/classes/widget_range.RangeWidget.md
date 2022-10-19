[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/range](../modules/widget_range.md) / RangeWidget

# Class: RangeWidget

[widget/range](../modules/widget_range.md).RangeWidget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`RangeWidget`**

## Table of contents

### Constructors

- [constructor](widget_range.RangeWidget.md#constructor)

### Properties

- [disposedStacks](widget_range.RangeWidget.md#disposedstacks)
- [element](widget_range.RangeWidget.md#element)
- [inputElement](widget_range.RangeWidget.md#inputelement)
- [numericInputElement](widget_range.RangeWidget.md#numericinputelement)
- [refCount](widget_range.RangeWidget.md#refcount)
- [value](widget_range.RangeWidget.md#value)
- [wasDisposed](widget_range.RangeWidget.md#wasdisposed)

### Methods

- [addRef](widget_range.RangeWidget.md#addref)
- [adjustViaWheel](widget_range.RangeWidget.md#adjustviawheel)
- [dispose](widget_range.RangeWidget.md#dispose)
- [disposed](widget_range.RangeWidget.md#disposed)
- [inputValueChanged](widget_range.RangeWidget.md#inputvaluechanged)
- [refCountReachedZero](widget_range.RangeWidget.md#refcountreachedzero)
- [registerCancellable](widget_range.RangeWidget.md#registercancellable)
- [registerDisposer](widget_range.RangeWidget.md#registerdisposer)
- [registerEventListener](widget_range.RangeWidget.md#registereventlistener)
- [unregisterDisposer](widget_range.RangeWidget.md#unregisterdisposer)

## Constructors

### constructor

• **new RangeWidget**(`value`, `__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\> |
| `__namedParameters` | [`RangeWidgetOptions`](../interfaces/widget_range.RangeWidgetOptions.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/range.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/range.ts#L34)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLLabelElement`](../modules/annotation_annotation_layer_state._internal_.md#htmllabelelement)

#### Defined in

[src/neuroglancer/widget/range.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/range.ts#L30)

___

### inputElement

• **inputElement**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/range.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/range.ts#L31)

___

### numericInputElement

• **numericInputElement**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/range.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/range.ts#L32)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### value

• **value**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RangeWidget`](widget_range.RangeWidget.md)

#### Returns

[`RangeWidget`](widget_range.RangeWidget.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### adjustViaWheel

▸ **adjustViaWheel**(`element`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement) |
| `event` | [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/range.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/range.ts#L71)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/range.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/range.ts#L83)

___

### inputValueChanged

▸ `Private` **inputValueChanged**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/range.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/range.ts#L67)

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
