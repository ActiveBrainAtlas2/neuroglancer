[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/render\_scale\_widget](../modules/neuroglancer_widget_render_scale_widget.md) / RenderScaleWidget

# Class: RenderScaleWidget

[neuroglancer/widget/render_scale_widget](../modules/neuroglancer_widget_render_scale_widget.md).RenderScaleWidget

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

  ↳ **`RenderScaleWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#constructor)

### Properties

- [canvas](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#canvas)
- [ctx](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#ctx)
- [debouncedUpdateView](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#debouncedupdateview)
- [disposedStacks](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#disposedstacks)
- [element](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#element)
- [histogram](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#histogram)
- [hoverTarget](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#hovertarget)
- [label](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#label)
- [legend](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#legend)
- [legendChunks](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#legendchunks)
- [legendRenderScale](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#legendrenderscale)
- [legendSpatialScale](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#legendspatialscale)
- [refCount](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#refcount)
- [target](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#target)
- [throttledUpdateView](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#throttledupdateview)
- [wasDisposed](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#addref)
- [adjustViaWheel](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#adjustviawheel)
- [dispose](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#dispose)
- [disposed](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#registereventlistener)
- [reset](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#reset)
- [unregisterDisposer](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#unregisterdisposer)
- [updateView](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md#updateview)

## Constructors

### constructor

• **new RenderScaleWidget**(`histogram`, `target`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `histogram` | [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md) |
| `target` | [`TrackableValueInterface`](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)<`number`\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L81)

## Properties

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/main_module._internal_.md#htmlcanvaselement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L60)

___

### ctx

• `Private` **ctx**: [`CanvasRenderingContext2D`](../modules/main_module._internal_.md#canvasrenderingcontext2d)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L65)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L69)

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

[src/neuroglancer/widget/render_scale_widget.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L59)

___

### histogram

• **histogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L82)

___

### hoverTarget

• **hoverTarget**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`number`, `number`]\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L66)

___

### label

• **label**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L58)

___

### legend

• **legend**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L61)

___

### legendChunks

• **legendChunks**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L64)

___

### legendRenderScale

• **legendRenderScale**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L62)

___

### legendSpatialScale

• **legendSpatialScale**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L63)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### target

• **target**: [`TrackableValueInterface`](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L82)

___

### throttledUpdateView

• `Private` **throttledUpdateView**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `undefined` \| `void`\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L67)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RenderScaleWidget`](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md)

#### Returns

[`RenderScaleWidget`](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### adjustViaWheel

▸ **adjustViaWheel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WheelEvent`](../modules/main_module._internal_.md#wheelevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L71)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L137)

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

▸ **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/render_scale_widget.ts#L142)
