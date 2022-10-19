[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / VirtualList

# Class: VirtualList

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).VirtualList

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`VirtualList`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.VirtualList.md#constructor)

### Properties

- [body](image_user_layer._internal_.VirtualList.md#body)
- [bottomItems](image_user_layer._internal_.VirtualList.md#bottomitems)
- [debouncedUpdateView](image_user_layer._internal_.VirtualList.md#debouncedupdateview)
- [disposedStacks](image_user_layer._internal_.VirtualList.md#disposedstacks)
- [element](image_user_layer._internal_.VirtualList.md#element)
- [header](image_user_layer._internal_.VirtualList.md#header)
- [listGeneration](image_user_layer._internal_.VirtualList.md#listgeneration)
- [newRenderParams](image_user_layer._internal_.VirtualList.md#newrenderparams)
- [newRenderedItems](image_user_layer._internal_.VirtualList.md#newrendereditems)
- [refCount](image_user_layer._internal_.VirtualList.md#refcount)
- [renderGeneration](image_user_layer._internal_.VirtualList.md#rendergeneration)
- [renderParams](image_user_layer._internal_.VirtualList.md#renderparams)
- [renderedItems](image_user_layer._internal_.VirtualList.md#rendereditems)
- [resizeObserver](image_user_layer._internal_.VirtualList.md#resizeobserver)
- [scrollContent](image_user_layer._internal_.VirtualList.md#scrollcontent)
- [sizes](image_user_layer._internal_.VirtualList.md#sizes)
- [source](image_user_layer._internal_.VirtualList.md#source)
- [state](image_user_layer._internal_.VirtualList.md#state)
- [topItems](image_user_layer._internal_.VirtualList.md#topitems)
- [wasDisposed](image_user_layer._internal_.VirtualList.md#wasdisposed)

### Methods

- [addRef](image_user_layer._internal_.VirtualList.md#addref)
- [dispose](image_user_layer._internal_.VirtualList.md#dispose)
- [disposed](image_user_layer._internal_.VirtualList.md#disposed)
- [forEachRenderedItem](image_user_layer._internal_.VirtualList.md#foreachrendereditem)
- [getItemElement](image_user_layer._internal_.VirtualList.md#getitemelement)
- [refCountReachedZero](image_user_layer._internal_.VirtualList.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.VirtualList.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.VirtualList.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.VirtualList.md#registereventlistener)
- [scrollItemIntoView](image_user_layer._internal_.VirtualList.md#scrollitemintoview)
- [scrollToTop](image_user_layer._internal_.VirtualList.md#scrolltotop)
- [unregisterDisposer](image_user_layer._internal_.VirtualList.md#unregisterdisposer)
- [updateView](image_user_layer._internal_.VirtualList.md#updateview)

## Constructors

### constructor

• **new VirtualList**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.horizontalScroll?` | `boolean` |
| `options.selectedIndex?` | `number` |
| `options.source` | [`VirtualListSource`](../interfaces/image_user_layer._internal_.VirtualListSource.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L252)

## Properties

### body

• **body**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L233)

___

### bottomItems

• `Private` **bottomItems**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L235)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunction`](../interfaces/display_context._internal_.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L248)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L228)

___

### header

• **header**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L231)

___

### listGeneration

• `Private` **listGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L238)

___

### newRenderParams

• `Private` **newRenderParams**: [`RenderParameters`](image_user_layer._internal_.RenderParameters.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L244)

___

### newRenderedItems

• `Private` **newRenderedItems**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L239)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### renderGeneration

• `Private` **renderGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L237)

___

### renderParams

• `Private` **renderParams**: [`RenderParameters`](image_user_layer._internal_.RenderParameters.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:243](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L243)

___

### renderedItems

• `Private` **renderedItems**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L236)

___

### resizeObserver

• `Private` **resizeObserver**: [`ResizeObserver`](../modules/display_context._internal_.md#resizeobserver)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L250)

___

### scrollContent

• **scrollContent**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L230)

___

### sizes

• `Private` **sizes**: [`SizeEstimates`](image_user_layer._internal_.SizeEstimates.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L246)

___

### source

• `Private` **source**: [`VirtualListSource`](../interfaces/image_user_layer._internal_.VirtualListSource.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L247)

___

### state

• **state**: [`VirtualListState`](image_user_layer._internal_.VirtualListState.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L241)

___

### topItems

• `Private` **topItems**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L234)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VirtualList`](image_user_layer._internal_.VirtualList.md)

#### Returns

[`VirtualList`](image_user_layer._internal_.VirtualList.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L434)

___

### forEachRenderedItem

▸ **forEachRenderedItem**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement), `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:401](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L401)

___

### getItemElement

▸ **getItemElement**(`index`): `undefined` \| [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L397)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/widget/virtual_list.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L417)

___

### scrollToTop

▸ **scrollToTop**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L411)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/virtual_list.ts#L312)
