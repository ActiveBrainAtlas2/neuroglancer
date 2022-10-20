[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/virtual\_list](../modules/neuroglancer_widget_virtual_list.md) / VirtualList

# Class: VirtualList

[neuroglancer/widget/virtual_list](../modules/neuroglancer_widget_virtual_list.md).VirtualList

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`VirtualList`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_virtual_list.VirtualList.md#constructor)

### Properties

- [body](neuroglancer_widget_virtual_list.VirtualList.md#body)
- [bottomItems](neuroglancer_widget_virtual_list.VirtualList.md#bottomitems)
- [debouncedUpdateView](neuroglancer_widget_virtual_list.VirtualList.md#debouncedupdateview)
- [disposedStacks](neuroglancer_widget_virtual_list.VirtualList.md#disposedstacks)
- [element](neuroglancer_widget_virtual_list.VirtualList.md#element)
- [header](neuroglancer_widget_virtual_list.VirtualList.md#header)
- [listGeneration](neuroglancer_widget_virtual_list.VirtualList.md#listgeneration)
- [newRenderParams](neuroglancer_widget_virtual_list.VirtualList.md#newrenderparams)
- [newRenderedItems](neuroglancer_widget_virtual_list.VirtualList.md#newrendereditems)
- [refCount](neuroglancer_widget_virtual_list.VirtualList.md#refcount)
- [renderGeneration](neuroglancer_widget_virtual_list.VirtualList.md#rendergeneration)
- [renderParams](neuroglancer_widget_virtual_list.VirtualList.md#renderparams)
- [renderedItems](neuroglancer_widget_virtual_list.VirtualList.md#rendereditems)
- [resizeObserver](neuroglancer_widget_virtual_list.VirtualList.md#resizeobserver)
- [scrollContent](neuroglancer_widget_virtual_list.VirtualList.md#scrollcontent)
- [sizes](neuroglancer_widget_virtual_list.VirtualList.md#sizes)
- [source](neuroglancer_widget_virtual_list.VirtualList.md#source)
- [state](neuroglancer_widget_virtual_list.VirtualList.md#state)
- [topItems](neuroglancer_widget_virtual_list.VirtualList.md#topitems)
- [wasDisposed](neuroglancer_widget_virtual_list.VirtualList.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_virtual_list.VirtualList.md#addref)
- [dispose](neuroglancer_widget_virtual_list.VirtualList.md#dispose)
- [disposed](neuroglancer_widget_virtual_list.VirtualList.md#disposed)
- [forEachRenderedItem](neuroglancer_widget_virtual_list.VirtualList.md#foreachrendereditem)
- [getItemElement](neuroglancer_widget_virtual_list.VirtualList.md#getitemelement)
- [refCountReachedZero](neuroglancer_widget_virtual_list.VirtualList.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_virtual_list.VirtualList.md#registercancellable)
- [registerDisposer](neuroglancer_widget_virtual_list.VirtualList.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_virtual_list.VirtualList.md#registereventlistener)
- [scrollItemIntoView](neuroglancer_widget_virtual_list.VirtualList.md#scrollitemintoview)
- [scrollToTop](neuroglancer_widget_virtual_list.VirtualList.md#scrolltotop)
- [unregisterDisposer](neuroglancer_widget_virtual_list.VirtualList.md#unregisterdisposer)
- [updateView](neuroglancer_widget_virtual_list.VirtualList.md#updateview)

## Constructors

### constructor

• **new VirtualList**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.horizontalScroll?` | `boolean` |
| `options.selectedIndex?` | `number` |
| `options.source` | [`VirtualListSource`](../interfaces/neuroglancer_widget_virtual_list.VirtualListSource.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L252)

## Properties

### body

• **body**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L233)

___

### bottomItems

• `Private` **bottomItems**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L235)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L248)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L228)

___

### header

• **header**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L231)

___

### listGeneration

• `Private` **listGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L238)

___

### newRenderParams

• `Private` **newRenderParams**: [`RenderParameters`](neuroglancer_widget_virtual_list._internal_.RenderParameters.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L244)

___

### newRenderedItems

• `Private` **newRenderedItems**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L239)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderGeneration

• `Private` **renderGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L237)

___

### renderParams

• `Private` **renderParams**: [`RenderParameters`](neuroglancer_widget_virtual_list._internal_.RenderParameters.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:243](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L243)

___

### renderedItems

• `Private` **renderedItems**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L236)

___

### resizeObserver

• `Private` **resizeObserver**: [`ResizeObserver`](../modules/neuroglancer_display_context._internal_.md#resizeobserver)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L250)

___

### scrollContent

• **scrollContent**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L230)

___

### sizes

• `Private` **sizes**: [`SizeEstimates`](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L246)

___

### source

• `Private` **source**: [`VirtualListSource`](../interfaces/neuroglancer_widget_virtual_list.VirtualListSource.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L247)

___

### state

• **state**: [`VirtualListState`](neuroglancer_widget_virtual_list.VirtualListState.md)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L241)

___

### topItems

• `Private` **topItems**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L234)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VirtualList`](neuroglancer_widget_virtual_list.VirtualList.md)

#### Returns

[`VirtualList`](neuroglancer_widget_virtual_list.VirtualList.md)

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

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L434)

___

### forEachRenderedItem

▸ **forEachRenderedItem**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:401](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L401)

___

### getItemElement

▸ **getItemElement**(`index`): `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L397)

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

### scrollItemIntoView

▸ **scrollItemIntoView**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L417)

___

### scrollToTop

▸ **scrollToTop**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L411)

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

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/virtual_list.ts#L312)
