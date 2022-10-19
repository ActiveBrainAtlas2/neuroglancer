[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/fetch\_annotation](../modules/neuroglancer_widget_fetch_annotation.md) / FetchAnnotationWidget

# Class: FetchAnnotationWidget

[neuroglancer/widget/fetch_annotation](../modules/neuroglancer_widget_fetch_annotation.md).FetchAnnotationWidget

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`FetchAnnotationWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#constructor)

### Properties

- [annotationSelection](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#annotationselection)
- [annotationSelectionDefault](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#annotationselectiondefault)
- [annotationTypeSelection](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#annotationtypeselection)
- [disposedStacks](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#disposedstacks)
- [element](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#element)
- [fetchButton](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#fetchbutton)
- [refCount](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#refcount)
- [wasDisposed](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#addref)
- [dispose](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#dispose)
- [disposed](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#disposed)
- [fetchAnnotation](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#fetchannotation)
- [refCountReachedZero](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#registereventlistener)
- [setUpAnnotationList](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#setupannotationlist)
- [unregisterDisposer](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#unregisterdisposer)
- [updateAnnotationList](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#updateannotationlist)
- [updateElement](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md#updateelement)

## Constructors

### constructor

• **new FetchAnnotationWidget**(`layerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerView` | [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L61)

## Properties

### annotationSelection

• `Private` **annotationSelection**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L56)

___

### annotationSelectionDefault

• `Private` **annotationSelectionDefault**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L57)

___

### annotationTypeSelection

• `Private` **annotationTypeSelection**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L58)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L55)

___

### fetchButton

• `Private` **fetchButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L59)

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

▸ **addRef**(): [`FetchAnnotationWidget`](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md)

#### Returns

[`FetchAnnotationWidget`](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md)

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

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### fetchAnnotation

▸ **fetchAnnotation**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L202)

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

### setUpAnnotationList

▸ **setUpAnnotationList**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L182)

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

### updateAnnotationList

▸ **updateAnnotationList**(`type`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L102)

___

### updateElement

▸ **updateElement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/widget/fetch_annotation.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/fetch_annotation.ts#L88)
