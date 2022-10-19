[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / AnnotationTab

# Class: AnnotationTab

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).AnnotationTab

## Hierarchy

- [`Tab`](neuroglancer_widget_tab_view.Tab.md)

  ↳ **`AnnotationTab`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations.AnnotationTab.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_annotations.AnnotationTab.md#disposedstacks)
- [element](neuroglancer_ui_annotations.AnnotationTab.md#element)
- [layer](neuroglancer_ui_annotations.AnnotationTab.md#layer)
- [layerView](neuroglancer_ui_annotations.AnnotationTab.md#layerview)
- [refCount](neuroglancer_ui_annotations.AnnotationTab.md#refcount)
- [visibility](neuroglancer_ui_annotations.AnnotationTab.md#visibility)
- [wasDisposed](neuroglancer_ui_annotations.AnnotationTab.md#wasdisposed)

### Accessors

- [visible](neuroglancer_ui_annotations.AnnotationTab.md#visible)

### Methods

- [addRef](neuroglancer_ui_annotations.AnnotationTab.md#addref)
- [dispose](neuroglancer_ui_annotations.AnnotationTab.md#dispose)
- [disposed](neuroglancer_ui_annotations.AnnotationTab.md#disposed)
- [refCountReachedZero](neuroglancer_ui_annotations.AnnotationTab.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations.AnnotationTab.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations.AnnotationTab.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations.AnnotationTab.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_annotations.AnnotationTab.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationTab**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[constructor](neuroglancer_widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1183)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposedStacks](neuroglancer_widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[element](neuroglancer_widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L32)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

___

### layerView

• `Private` **layerView**: [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1181)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCount](neuroglancer_widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[visibility](neuroglancer_widget_tab_view.Tab.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[wasDisposed](neuroglancer_widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addRef

▸ **addRef**(): [`AnnotationTab`](neuroglancer_ui_annotations.AnnotationTab.md)

#### Returns

[`AnnotationTab`](neuroglancer_ui_annotations.AnnotationTab.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[addRef](neuroglancer_widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[dispose](neuroglancer_widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposed](neuroglancer_widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L45)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCountReachedZero](neuroglancer_widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerCancellable](neuroglancer_widget_tab_view.Tab.md#registercancellable)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerDisposer](neuroglancer_widget_tab_view.Tab.md#registerdisposer)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerEventListener](neuroglancer_widget_tab_view.Tab.md#registereventlistener)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[unregisterDisposer](neuroglancer_widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
