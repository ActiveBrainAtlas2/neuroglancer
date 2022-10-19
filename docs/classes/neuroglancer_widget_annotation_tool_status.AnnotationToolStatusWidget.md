[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/annotation\_tool\_status](../modules/neuroglancer_widget_annotation_tool_status.md) / AnnotationToolStatusWidget

# Class: AnnotationToolStatusWidget

[neuroglancer/widget/annotation_tool_status](../modules/neuroglancer_widget_annotation_tool_status.md).AnnotationToolStatusWidget

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AnnotationToolStatusWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#disposedstacks)
- [element](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#element)
- [refCount](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#refcount)
- [selectedLayer](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#selectedlayer)
- [toolBinder](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#toolbinder)
- [unbindPreviousLayer](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#unbindpreviouslayer)
- [updateView](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#updateview)
- [viewContext](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#viewcontext)
- [wasDisposed](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#wasdisposed)

### Accessors

- [selectedTool](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#selectedtool)

### Methods

- [addRef](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#addref)
- [dispose](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#dispose)
- [disposed](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#disposed)
- [makeWidget](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#makewidget)
- [refCountReachedZero](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#registereventlistener)
- [selectedLayerChanged](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#selectedlayerchanged)
- [unregisterDisposer](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationToolStatusWidget**(`selectedLayer`, `toolBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectedLayer` | [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md) |
| `toolBinder` | [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L42)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L27)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

___

### toolBinder

• **toolBinder**: [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

___

### unbindPreviousLayer

• `Private` **unbindPreviousLayer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L28)

___

### updateView

• `Private` **updateView**: [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L112)

___

### viewContext

• `Private` **viewContext**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### selectedTool

• `get` **selectedTool**(): `undefined` \| [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Returns

`undefined` \| [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L30)

## Methods

### addRef

▸ **addRef**(): [`AnnotationToolStatusWidget`](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md)

#### Returns

[`AnnotationToolStatusWidget`](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md)

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

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L66)

___

### makeWidget

▸ `Private` **makeWidget**(`context`, `tool`): [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) |
| `tool` | [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\> \| [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\> |

#### Returns

[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L74)

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

### selectedLayerChanged

▸ `Private` **selectedLayerChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/annotation_tool_status.ts#L52)

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
