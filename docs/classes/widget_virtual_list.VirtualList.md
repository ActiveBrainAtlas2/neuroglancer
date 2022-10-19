[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/virtual\_list](../modules/widget_virtual_list.md) / VirtualList

# Class: VirtualList

[widget/virtual_list](../modules/widget_virtual_list.md).VirtualList

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`VirtualList`**

## Table of contents

### Constructors

- [constructor](widget_virtual_list.VirtualList.md#constructor)

### Properties

- [body](widget_virtual_list.VirtualList.md#body)
- [bottomItems](widget_virtual_list.VirtualList.md#bottomitems)
- [debouncedUpdateView](widget_virtual_list.VirtualList.md#debouncedupdateview)
- [disposedStacks](widget_virtual_list.VirtualList.md#disposedstacks)
- [element](widget_virtual_list.VirtualList.md#element)
- [header](widget_virtual_list.VirtualList.md#header)
- [listGeneration](widget_virtual_list.VirtualList.md#listgeneration)
- [newRenderParams](widget_virtual_list.VirtualList.md#newrenderparams)
- [newRenderedItems](widget_virtual_list.VirtualList.md#newrendereditems)
- [refCount](widget_virtual_list.VirtualList.md#refcount)
- [renderGeneration](widget_virtual_list.VirtualList.md#rendergeneration)
- [renderParams](widget_virtual_list.VirtualList.md#renderparams)
- [renderedItems](widget_virtual_list.VirtualList.md#rendereditems)
- [resizeObserver](widget_virtual_list.VirtualList.md#resizeobserver)
- [scrollContent](widget_virtual_list.VirtualList.md#scrollcontent)
- [sizes](widget_virtual_list.VirtualList.md#sizes)
- [source](widget_virtual_list.VirtualList.md#source)
- [state](widget_virtual_list.VirtualList.md#state)
- [topItems](widget_virtual_list.VirtualList.md#topitems)
- [wasDisposed](widget_virtual_list.VirtualList.md#wasdisposed)

### Methods

- [addRef](widget_virtual_list.VirtualList.md#addref)
- [dispose](widget_virtual_list.VirtualList.md#dispose)
- [disposed](widget_virtual_list.VirtualList.md#disposed)
- [forEachRenderedItem](widget_virtual_list.VirtualList.md#foreachrendereditem)
- [getItemElement](widget_virtual_list.VirtualList.md#getitemelement)
- [refCountReachedZero](widget_virtual_list.VirtualList.md#refcountreachedzero)
- [registerCancellable](widget_virtual_list.VirtualList.md#registercancellable)
- [registerDisposer](widget_virtual_list.VirtualList.md#registerdisposer)
- [registerEventListener](widget_virtual_list.VirtualList.md#registereventlistener)
- [scrollItemIntoView](widget_virtual_list.VirtualList.md#scrollitemintoview)
- [scrollToTop](widget_virtual_list.VirtualList.md#scrolltotop)
- [unregisterDisposer](widget_virtual_list.VirtualList.md#unregisterdisposer)
- [updateView](widget_virtual_list.VirtualList.md#updateview)

## Constructors

### constructor

• **new VirtualList**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.horizontalScroll?` | `boolean` |
| `options.selectedIndex?` | `number` |
| `options.source` | [`VirtualListSource`](../interfaces/widget_virtual_list.VirtualListSource.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L252)

## Properties

### body

• **body**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L233)

___

### bottomItems

• `Private` **bottomItems**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L235)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L248)

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

[src/neuroglancer/widget/virtual_list.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L228)

___

### header

• **header**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L231)

___

### listGeneration

• `Private` **listGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L238)

___

### newRenderParams

• `Private` **newRenderParams**: [`RenderParameters`](widget_virtual_list._internal_.RenderParameters.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L244)

___

### newRenderedItems

• `Private` **newRenderedItems**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L239)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderGeneration

• `Private` **renderGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L237)

___

### renderParams

• `Private` **renderParams**: [`RenderParameters`](widget_virtual_list._internal_.RenderParameters.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:243](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L243)

___

### renderedItems

• `Private` **renderedItems**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L236)

___

### resizeObserver

• `Private` **resizeObserver**: [`ResizeObserver`](../modules/annotation_annotation_layer_state._internal_.md#resizeobserver)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L250)

___

### scrollContent

• **scrollContent**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L230)

___

### sizes

• `Private` **sizes**: [`SizeEstimates`](widget_virtual_list._internal_.SizeEstimates.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L246)

___

### source

• `Private` **source**: [`VirtualListSource`](../interfaces/widget_virtual_list.VirtualListSource.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L247)

___

### state

• **state**: [`VirtualListState`](widget_virtual_list.VirtualListState.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L241)

___

### topItems

• `Private` **topItems**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L234)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VirtualList`](widget_virtual_list.VirtualList.md)

#### Returns

[`VirtualList`](widget_virtual_list.VirtualList.md)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L434)

___

### forEachRenderedItem

▸ **forEachRenderedItem**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:401](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L401)

___

### getItemElement

▸ **getItemElement**(`index`): `undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L397)

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

### scrollItemIntoView

▸ **scrollItemIntoView**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L417)

___

### scrollToTop

▸ **scrollToTop**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L411)

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

[src/neuroglancer/widget/virtual_list.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L312)
