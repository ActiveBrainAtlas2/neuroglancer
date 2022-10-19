[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / AnnotationTab

# Class: AnnotationTab

[ui/annotations](../modules/ui_annotations.md).AnnotationTab

## Hierarchy

- [`Tab`](widget_tab_view.Tab.md)

  ↳ **`AnnotationTab`**

## Table of contents

### Constructors

- [constructor](ui_annotations.AnnotationTab.md#constructor)

### Properties

- [disposedStacks](ui_annotations.AnnotationTab.md#disposedstacks)
- [element](ui_annotations.AnnotationTab.md#element)
- [layer](ui_annotations.AnnotationTab.md#layer)
- [layerView](ui_annotations.AnnotationTab.md#layerview)
- [refCount](ui_annotations.AnnotationTab.md#refcount)
- [visibility](ui_annotations.AnnotationTab.md#visibility)
- [wasDisposed](ui_annotations.AnnotationTab.md#wasdisposed)

### Accessors

- [visible](ui_annotations.AnnotationTab.md#visible)

### Methods

- [addRef](ui_annotations.AnnotationTab.md#addref)
- [dispose](ui_annotations.AnnotationTab.md#dispose)
- [disposed](ui_annotations.AnnotationTab.md#disposed)
- [refCountReachedZero](ui_annotations.AnnotationTab.md#refcountreachedzero)
- [registerCancellable](ui_annotations.AnnotationTab.md#registercancellable)
- [registerDisposer](ui_annotations.AnnotationTab.md#registerdisposer)
- [registerEventListener](ui_annotations.AnnotationTab.md#registereventlistener)
- [unregisterDisposer](ui_annotations.AnnotationTab.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationTab**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Overrides

[Tab](widget_tab_view.Tab.md).[constructor](widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1183)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[disposedStacks](widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[element](widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L32)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

___

### layerView

• `Private` **layerView**: [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1181)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCount](widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[visibility](widget_tab_view.Tab.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[wasDisposed](widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addRef

▸ **addRef**(): [`AnnotationTab`](ui_annotations.AnnotationTab.md)

#### Returns

[`AnnotationTab`](ui_annotations.AnnotationTab.md)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[addRef](widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[dispose](widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[disposed](widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L45)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCountReachedZero](widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](widget_tab_view.Tab.md).[registerCancellable](widget_tab_view.Tab.md#registercancellable)

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

[Tab](widget_tab_view.Tab.md).[registerDisposer](widget_tab_view.Tab.md#registerdisposer)

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

[Tab](widget_tab_view.Tab.md).[registerEventListener](widget_tab_view.Tab.md#registereventlistener)

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

[Tab](widget_tab_view.Tab.md).[unregisterDisposer](widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
