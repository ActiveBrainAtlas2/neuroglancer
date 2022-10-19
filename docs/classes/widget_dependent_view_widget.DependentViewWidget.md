[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/dependent\_view\_widget](../modules/widget_dependent_view_widget.md) / DependentViewWidget

# Class: DependentViewWidget<T\>

[widget/dependent_view_widget](../modules/widget_dependent_view_widget.md).DependentViewWidget

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DependentViewWidget`**

## Table of contents

### Constructors

- [constructor](widget_dependent_view_widget.DependentViewWidget.md#constructor)

### Properties

- [currentViewDisposer](widget_dependent_view_widget.DependentViewWidget.md#currentviewdisposer)
- [debouncedUpdateView](widget_dependent_view_widget.DependentViewWidget.md#debouncedupdateview)
- [disposedStacks](widget_dependent_view_widget.DependentViewWidget.md#disposedstacks)
- [element](widget_dependent_view_widget.DependentViewWidget.md#element)
- [generation](widget_dependent_view_widget.DependentViewWidget.md#generation)
- [model](widget_dependent_view_widget.DependentViewWidget.md#model)
- [refCount](widget_dependent_view_widget.DependentViewWidget.md#refcount)
- [render](widget_dependent_view_widget.DependentViewWidget.md#render)
- [visibility](widget_dependent_view_widget.DependentViewWidget.md#visibility)
- [wasDisposed](widget_dependent_view_widget.DependentViewWidget.md#wasdisposed)

### Accessors

- [visible](widget_dependent_view_widget.DependentViewWidget.md#visible)

### Methods

- [addRef](widget_dependent_view_widget.DependentViewWidget.md#addref)
- [dispose](widget_dependent_view_widget.DependentViewWidget.md#dispose)
- [disposeCurrentView](widget_dependent_view_widget.DependentViewWidget.md#disposecurrentview)
- [disposed](widget_dependent_view_widget.DependentViewWidget.md#disposed)
- [refCountReachedZero](widget_dependent_view_widget.DependentViewWidget.md#refcountreachedzero)
- [registerCancellable](widget_dependent_view_widget.DependentViewWidget.md#registercancellable)
- [registerDisposer](widget_dependent_view_widget.DependentViewWidget.md#registerdisposer)
- [registerEventListener](widget_dependent_view_widget.DependentViewWidget.md#registereventlistener)
- [unregisterDisposer](widget_dependent_view_widget.DependentViewWidget.md#unregisterdisposer)
- [updateView](widget_dependent_view_widget.DependentViewWidget.md#updateview)

## Constructors

### constructor

• **new DependentViewWidget**<`T`\>(`model`, `render`, `visibility?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`T`\> |
| `render` | (`value`: `T`, `parent`: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), `context`: [`DependentViewContext`](widget_dependent_view_widget.DependentViewContext.md)) => `void` |
| `visibility` | [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L37)

## Properties

### currentViewDisposer

• `Private` **currentViewDisposer**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L33)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L34)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L30)

___

### generation

• `Private` **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L32)

___

### model

• **model**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`T`\>

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### render

• **render**: (`value`: `T`, `parent`: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), `context`: [`DependentViewContext`](widget_dependent_view_widget.DependentViewContext.md)) => `void`

#### Type declaration

▸ (`value`, `parent`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `parent` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `context` | [`DependentViewContext`](widget_dependent_view_widget.DependentViewContext.md) |

##### Returns

`void`

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L50)

## Methods

### addRef

▸ **addRef**(): [`DependentViewWidget`](widget_dependent_view_widget.DependentViewWidget.md)<`T`\>

#### Returns

[`DependentViewWidget`](widget_dependent_view_widget.DependentViewWidget.md)<`T`\>

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

### disposeCurrentView

▸ `Private` **disposeCurrentView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L65)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L73)

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

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/dependent_view_widget.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/dependent_view_widget.ts#L54)
