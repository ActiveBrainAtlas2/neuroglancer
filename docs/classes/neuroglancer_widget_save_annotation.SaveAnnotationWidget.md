[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/save\_annotation](../modules/neuroglancer_widget_save_annotation.md) / SaveAnnotationWidget

# Class: SaveAnnotationWidget

[neuroglancer/widget/save_annotation](../modules/neuroglancer_widget_save_annotation.md).SaveAnnotationWidget

This class is used to create a HTML widget on annotation tab which allows
to save annotations in a tab to the backend database.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SaveAnnotationWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#disposedstacks)
- [element](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#element)
- [layerView](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#layerview)
- [refCount](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#refcount)
- [saveButton](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#savebutton)
- [wasDisposed](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#addref)
- [dispose](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#dispose)
- [disposed](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#registereventlistener)
- [saveAnnotation](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#saveannotation)
- [unregisterDisposer](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md#unregisterdisposer)

## Constructors

### constructor

• **new SaveAnnotationWidget**(`layerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerView` | [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/save_annotation.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/save_annotation.ts#L19)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/save_annotation.ts:16](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/save_annotation.ts#L16)

___

### layerView

• `Private` **layerView**: [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md)

#### Defined in

[src/neuroglancer/widget/save_annotation.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/save_annotation.ts#L19)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### saveButton

• `Private` **saveButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/save_annotation.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/save_annotation.ts#L17)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SaveAnnotationWidget`](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md)

#### Returns

[`SaveAnnotationWidget`](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### saveAnnotation

▸ `Private` **saveAnnotation**(): `void`

Saves the annotation by calling the stateLoader with the layername.

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/save_annotation.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/save_annotation.ts#L39)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
