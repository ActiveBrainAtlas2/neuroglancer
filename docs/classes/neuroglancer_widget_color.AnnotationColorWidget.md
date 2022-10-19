[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/color](../modules/neuroglancer_widget_color.md) / AnnotationColorWidget

# Class: AnnotationColorWidget

[neuroglancer/widget/color](../modules/neuroglancer_widget_color.md).AnnotationColorWidget

AnnotationColorWidget creates an color HTML element for
selecting the color while annotating.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AnnotationColorWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_color.AnnotationColorWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_color.AnnotationColorWidget.md#disposedstacks)
- [element](neuroglancer_widget_color.AnnotationColorWidget.md#element)
- [refCount](neuroglancer_widget_color.AnnotationColorWidget.md#refcount)
- [wasDisposed](neuroglancer_widget_color.AnnotationColorWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_color.AnnotationColorWidget.md#addref)
- [dispose](neuroglancer_widget_color.AnnotationColorWidget.md#dispose)
- [disposed](neuroglancer_widget_color.AnnotationColorWidget.md#disposed)
- [getColor](neuroglancer_widget_color.AnnotationColorWidget.md#getcolor)
- [refCountReachedZero](neuroglancer_widget_color.AnnotationColorWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_color.AnnotationColorWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_color.AnnotationColorWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_color.AnnotationColorWidget.md#registereventlistener)
- [setColor](neuroglancer_widget_color.AnnotationColorWidget.md#setcolor)
- [unregisterDisposer](neuroglancer_widget_color.AnnotationColorWidget.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationColorWidget**()

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/color.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/color.ts#L75)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/color.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/color.ts#L73)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

[`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

Delets the element from the HTML element it was embedded in.

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/color.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/color.ts#L98)

___

### getColor

▸ **getColor**(): `string`

#### Returns

`string`

returns the element color

#### Defined in

[src/neuroglancer/widget/color.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/color.ts#L92)

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

### setColor

▸ **setColor**(`color`): `void`

Sets the color of the widget element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | input color to be set |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/color.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/color.ts#L85)

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
