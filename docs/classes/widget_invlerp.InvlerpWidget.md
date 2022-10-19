[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/invlerp](../modules/widget_invlerp.md) / InvlerpWidget

# Class: InvlerpWidget

[widget/invlerp](../modules/widget_invlerp.md).InvlerpWidget

## Hierarchy

- [`Tab`](widget_tab_view.Tab.md)

  ↳ **`InvlerpWidget`**

## Table of contents

### Constructors

- [constructor](widget_invlerp.InvlerpWidget.md#constructor)

### Properties

- [boundElements](widget_invlerp.InvlerpWidget.md#boundelements)
- [cdfPanel](widget_invlerp.InvlerpWidget.md#cdfpanel)
- [dataType](widget_invlerp.InvlerpWidget.md#datatype)
- [display](widget_invlerp.InvlerpWidget.md#display)
- [disposedStacks](widget_invlerp.InvlerpWidget.md#disposedstacks)
- [element](widget_invlerp.InvlerpWidget.md#element)
- [histogramIndex](widget_invlerp.InvlerpWidget.md#histogramindex)
- [histogramPanel](widget_invlerp.InvlerpWidget.md#histogrampanel)
- [histogramSpecifications](widget_invlerp.InvlerpWidget.md#histogramspecifications)
- [invertArrows](widget_invlerp.InvlerpWidget.md#invertarrows)
- [legendShaderOptions](widget_invlerp.InvlerpWidget.md#legendshaderoptions)
- [refCount](widget_invlerp.InvlerpWidget.md#refcount)
- [trackable](widget_invlerp.InvlerpWidget.md#trackable)
- [visibility](widget_invlerp.InvlerpWidget.md#visibility)
- [wasDisposed](widget_invlerp.InvlerpWidget.md#wasdisposed)

### Accessors

- [texture](widget_invlerp.InvlerpWidget.md#texture)
- [visible](widget_invlerp.InvlerpWidget.md#visible)

### Methods

- [addRef](widget_invlerp.InvlerpWidget.md#addref)
- [dispose](widget_invlerp.InvlerpWidget.md#dispose)
- [disposed](widget_invlerp.InvlerpWidget.md#disposed)
- [invertRange](widget_invlerp.InvlerpWidget.md#invertrange)
- [refCountReachedZero](widget_invlerp.InvlerpWidget.md#refcountreachedzero)
- [registerCancellable](widget_invlerp.InvlerpWidget.md#registercancellable)
- [registerDisposer](widget_invlerp.InvlerpWidget.md#registerdisposer)
- [registerEventListener](widget_invlerp.InvlerpWidget.md#registereventlistener)
- [unregisterDisposer](widget_invlerp.InvlerpWidget.md#unregisterdisposer)
- [updateView](widget_invlerp.InvlerpWidget.md#updateview)

## Constructors

### constructor

• **new InvlerpWidget**(`visibility`, `display`, `dataType`, `trackable`, `histogramSpecifications`, `histogramIndex`, `legendShaderOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `visibility` | [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md) |
| `display` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `trackable` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)\> |
| `histogramSpecifications` | [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md) |
| `histogramIndex` | `number` |
| `legendShaderOptions` | `undefined` \| [`LegendShaderOptions`](../interfaces/widget_shader_controls.LegendShaderOptions.md) |

#### Overrides

[Tab](widget_tab_view.Tab.md).[constructor](widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L525)

## Properties

### boundElements

• **boundElements**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `range` | { `container`: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) ; `inputs`: [[`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)] ; `spacers`: `undefined` \| [[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)]  } |
| `range.container` | [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `range.inputs` | [[`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)] |
| `range.spacers` | `undefined` \| [[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)] |
| `window` | { `container`: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) ; `inputs`: [[`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)] ; `spacers`: `undefined` \| [[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)]  } |
| `window.container` | [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `window.inputs` | [[`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)] |
| `window.spacers` | `undefined` \| [[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)] |

#### Defined in

[src/neuroglancer/widget/invlerp.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L512)

___

### cdfPanel

• **cdfPanel**: [`CdfPanel`](widget_invlerp._internal_.CdfPanel.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:509](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L509)

___

### dataType

• **dataType**: [`DataType`](../enums/util_data_type.DataType.md)

___

### display

• **display**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

___

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

### histogramIndex

• **histogramIndex**: `number`

___

### histogramPanel

• **histogramPanel**: [`HistogramPanel`](widget_histogram.HistogramPanel.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:510](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L510)

___

### histogramSpecifications

• **histogramSpecifications**: [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md)

___

### invertArrows

• **invertArrows**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)[]

#### Defined in

[src/neuroglancer/widget/invlerp.ts:516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L516)

___

### legendShaderOptions

• **legendShaderOptions**: `undefined` \| [`LegendShaderOptions`](../interfaces/widget_shader_controls.LegendShaderOptions.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCount](widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### trackable

• **trackable**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)\>

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

### texture

• `get` **texture**(): ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture)

#### Returns

``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:517](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L517)

___

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

▸ **addRef**(): [`InvlerpWidget`](widget_invlerp.InvlerpWidget.md)

#### Returns

[`InvlerpWidget`](widget_invlerp.InvlerpWidget.md)

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

### invertRange

▸ `Private` **invertRange**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L522)

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

___

### updateView

▸ **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L559)
