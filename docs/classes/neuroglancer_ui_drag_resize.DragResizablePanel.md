[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/drag\_resize](../modules/neuroglancer_ui_drag_resize.md) / DragResizablePanel

# Class: DragResizablePanel

[neuroglancer/ui/drag_resize](../modules/neuroglancer_ui_drag_resize.md).DragResizablePanel

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

  ↳ **`DragResizablePanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_drag_resize.DragResizablePanel.md#constructor)

### Properties

- [direction](neuroglancer_ui_drag_resize.DragResizablePanel.md#direction)
- [disposedStacks](neuroglancer_ui_drag_resize.DragResizablePanel.md#disposedstacks)
- [element](neuroglancer_ui_drag_resize.DragResizablePanel.md#element)
- [gutter](neuroglancer_ui_drag_resize.DragResizablePanel.md#gutter)
- [minSize](neuroglancer_ui_drag_resize.DragResizablePanel.md#minsize)
- [refCount](neuroglancer_ui_drag_resize.DragResizablePanel.md#refcount)
- [size](neuroglancer_ui_drag_resize.DragResizablePanel.md#size)
- [sizeProp](neuroglancer_ui_drag_resize.DragResizablePanel.md#sizeprop)
- [visible](neuroglancer_ui_drag_resize.DragResizablePanel.md#visible)
- [wasDisposed](neuroglancer_ui_drag_resize.DragResizablePanel.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_drag_resize.DragResizablePanel.md#addref)
- [dispose](neuroglancer_ui_drag_resize.DragResizablePanel.md#dispose)
- [disposed](neuroglancer_ui_drag_resize.DragResizablePanel.md#disposed)
- [refCountReachedZero](neuroglancer_ui_drag_resize.DragResizablePanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_drag_resize.DragResizablePanel.md#registercancellable)
- [registerDisposer](neuroglancer_ui_drag_resize.DragResizablePanel.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_drag_resize.DragResizablePanel.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_drag_resize.DragResizablePanel.md#unregisterdisposer)
- [updateView](neuroglancer_ui_drag_resize.DragResizablePanel.md#updateview)

## Constructors

### constructor

• **new DragResizablePanel**(`element`, `visible`, `size`, `direction`, `minSize?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | `undefined` |
| `visible` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> | `undefined` |
| `size` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\> | `undefined` |
| `direction` | ``"horizontal"`` \| ``"vertical"`` | `undefined` |
| `minSize` | `number` | `0` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/drag_resize.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L30)

## Properties

### direction

• **direction**: ``"horizontal"`` \| ``"vertical"``

#### Defined in

[src/neuroglancer/ui/drag_resize.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L32)

___

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

[src/neuroglancer/ui/drag_resize.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L31)

___

### gutter

• **gutter**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/drag_resize.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L26)

___

### minSize

• **minSize**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/drag_resize.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L33)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### size

• **size**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/ui/drag_resize.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L32)

___

### sizeProp

• `Private` **sizeProp**: ``"height"`` \| ``"width"``

#### Defined in

[src/neuroglancer/ui/drag_resize.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L28)

___

### visible

• **visible**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/ui/drag_resize.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L31)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DragResizablePanel`](neuroglancer_ui_drag_resize.DragResizablePanel.md)

#### Returns

[`DragResizablePanel`](neuroglancer_ui_drag_resize.DragResizablePanel.md)

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

[src/neuroglancer/ui/drag_resize.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L76)

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

[src/neuroglancer/ui/drag_resize.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/drag_resize.ts#L63)
