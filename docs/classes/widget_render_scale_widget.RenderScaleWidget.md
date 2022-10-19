[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/render\_scale\_widget](../modules/widget_render_scale_widget.md) / RenderScaleWidget

# Class: RenderScaleWidget

[widget/render_scale_widget](../modules/widget_render_scale_widget.md).RenderScaleWidget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`RenderScaleWidget`**

## Table of contents

### Constructors

- [constructor](widget_render_scale_widget.RenderScaleWidget.md#constructor)

### Properties

- [canvas](widget_render_scale_widget.RenderScaleWidget.md#canvas)
- [ctx](widget_render_scale_widget.RenderScaleWidget.md#ctx)
- [debouncedUpdateView](widget_render_scale_widget.RenderScaleWidget.md#debouncedupdateview)
- [disposedStacks](widget_render_scale_widget.RenderScaleWidget.md#disposedstacks)
- [element](widget_render_scale_widget.RenderScaleWidget.md#element)
- [histogram](widget_render_scale_widget.RenderScaleWidget.md#histogram)
- [hoverTarget](widget_render_scale_widget.RenderScaleWidget.md#hovertarget)
- [label](widget_render_scale_widget.RenderScaleWidget.md#label)
- [legend](widget_render_scale_widget.RenderScaleWidget.md#legend)
- [legendChunks](widget_render_scale_widget.RenderScaleWidget.md#legendchunks)
- [legendRenderScale](widget_render_scale_widget.RenderScaleWidget.md#legendrenderscale)
- [legendSpatialScale](widget_render_scale_widget.RenderScaleWidget.md#legendspatialscale)
- [refCount](widget_render_scale_widget.RenderScaleWidget.md#refcount)
- [target](widget_render_scale_widget.RenderScaleWidget.md#target)
- [throttledUpdateView](widget_render_scale_widget.RenderScaleWidget.md#throttledupdateview)
- [wasDisposed](widget_render_scale_widget.RenderScaleWidget.md#wasdisposed)

### Methods

- [addRef](widget_render_scale_widget.RenderScaleWidget.md#addref)
- [adjustViaWheel](widget_render_scale_widget.RenderScaleWidget.md#adjustviawheel)
- [dispose](widget_render_scale_widget.RenderScaleWidget.md#dispose)
- [disposed](widget_render_scale_widget.RenderScaleWidget.md#disposed)
- [refCountReachedZero](widget_render_scale_widget.RenderScaleWidget.md#refcountreachedzero)
- [registerCancellable](widget_render_scale_widget.RenderScaleWidget.md#registercancellable)
- [registerDisposer](widget_render_scale_widget.RenderScaleWidget.md#registerdisposer)
- [registerEventListener](widget_render_scale_widget.RenderScaleWidget.md#registereventlistener)
- [reset](widget_render_scale_widget.RenderScaleWidget.md#reset)
- [unregisterDisposer](widget_render_scale_widget.RenderScaleWidget.md#unregisterdisposer)
- [updateView](widget_render_scale_widget.RenderScaleWidget.md#updateview)

## Constructors

### constructor

• **new RenderScaleWidget**(`histogram`, `target`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `histogram` | [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md) |
| `target` | [`TrackableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md)<`number`\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L81)

## Properties

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlcanvaselement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L60)

___

### ctx

• `Private` **ctx**: [`CanvasRenderingContext2D`](../modules/annotation_annotation_layer_state._internal_.md#canvasrenderingcontext2d)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L65)

___

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L69)

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

[src/neuroglancer/widget/render_scale_widget.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L59)

___

### histogram

• **histogram**: [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md)

___

### hoverTarget

• **hoverTarget**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| [`number`, `number`]\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L66)

___

### label

• **label**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L58)

___

### legend

• **legend**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L61)

___

### legendChunks

• **legendChunks**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L64)

___

### legendRenderScale

• **legendRenderScale**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L62)

___

### legendSpatialScale

• **legendSpatialScale**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L63)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### target

• **target**: [`TrackableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md)<`number`\>

___

### throttledUpdateView

• `Private` **throttledUpdateView**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `undefined` \| `void`\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L67)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RenderScaleWidget`](widget_render_scale_widget.RenderScaleWidget.md)

#### Returns

[`RenderScaleWidget`](widget_render_scale_widget.RenderScaleWidget.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### adjustViaWheel

▸ **adjustViaWheel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L71)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L137)

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

▸ **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L142)
