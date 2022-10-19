[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/annotation\_tool\_status](../modules/widget_annotation_tool_status.md) / AnnotationToolStatusWidget

# Class: AnnotationToolStatusWidget

[widget/annotation_tool_status](../modules/widget_annotation_tool_status.md).AnnotationToolStatusWidget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AnnotationToolStatusWidget`**

## Table of contents

### Constructors

- [constructor](widget_annotation_tool_status.AnnotationToolStatusWidget.md#constructor)

### Properties

- [disposedStacks](widget_annotation_tool_status.AnnotationToolStatusWidget.md#disposedstacks)
- [element](widget_annotation_tool_status.AnnotationToolStatusWidget.md#element)
- [refCount](widget_annotation_tool_status.AnnotationToolStatusWidget.md#refcount)
- [selectedLayer](widget_annotation_tool_status.AnnotationToolStatusWidget.md#selectedlayer)
- [toolBinder](widget_annotation_tool_status.AnnotationToolStatusWidget.md#toolbinder)
- [unbindPreviousLayer](widget_annotation_tool_status.AnnotationToolStatusWidget.md#unbindpreviouslayer)
- [updateView](widget_annotation_tool_status.AnnotationToolStatusWidget.md#updateview)
- [viewContext](widget_annotation_tool_status.AnnotationToolStatusWidget.md#viewcontext)
- [wasDisposed](widget_annotation_tool_status.AnnotationToolStatusWidget.md#wasdisposed)

### Accessors

- [selectedTool](widget_annotation_tool_status.AnnotationToolStatusWidget.md#selectedtool)

### Methods

- [addRef](widget_annotation_tool_status.AnnotationToolStatusWidget.md#addref)
- [dispose](widget_annotation_tool_status.AnnotationToolStatusWidget.md#dispose)
- [disposed](widget_annotation_tool_status.AnnotationToolStatusWidget.md#disposed)
- [makeWidget](widget_annotation_tool_status.AnnotationToolStatusWidget.md#makewidget)
- [refCountReachedZero](widget_annotation_tool_status.AnnotationToolStatusWidget.md#refcountreachedzero)
- [registerCancellable](widget_annotation_tool_status.AnnotationToolStatusWidget.md#registercancellable)
- [registerDisposer](widget_annotation_tool_status.AnnotationToolStatusWidget.md#registerdisposer)
- [registerEventListener](widget_annotation_tool_status.AnnotationToolStatusWidget.md#registereventlistener)
- [selectedLayerChanged](widget_annotation_tool_status.AnnotationToolStatusWidget.md#selectedlayerchanged)
- [unregisterDisposer](widget_annotation_tool_status.AnnotationToolStatusWidget.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationToolStatusWidget**(`selectedLayer`, `toolBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectedLayer` | [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md) |
| `toolBinder` | [`ToolBinder`](ui_tool.ToolBinder.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L42)

## Properties

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

[src/neuroglancer/widget/annotation_tool_status.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L27)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

___

### toolBinder

• **toolBinder**: [`ToolBinder`](ui_tool.ToolBinder.md)

___

### unbindPreviousLayer

• `Private` **unbindPreviousLayer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L28)

___

### updateView

• `Private` **updateView**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L112)

___

### viewContext

• `Private` **viewContext**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### selectedTool

• `get` **selectedTool**(): `undefined` \| [`LegacyTool`](ui_tool.LegacyTool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Returns

`undefined` \| [`LegacyTool`](ui_tool.LegacyTool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L30)

## Methods

### addRef

▸ **addRef**(): [`AnnotationToolStatusWidget`](widget_annotation_tool_status.AnnotationToolStatusWidget.md)

#### Returns

[`AnnotationToolStatusWidget`](widget_annotation_tool_status.AnnotationToolStatusWidget.md)

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

[src/neuroglancer/widget/annotation_tool_status.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L66)

___

### makeWidget

▸ `Private` **makeWidget**(`context`, `tool`): [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](util_disposable.RefCounted.md) |
| `tool` | [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> \| [`LegacyTool`](ui_tool.LegacyTool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Returns

[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L74)

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

### selectedLayerChanged

▸ `Private` **selectedLayerChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/annotation_tool_status.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/annotation_tool_status.ts#L52)

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
