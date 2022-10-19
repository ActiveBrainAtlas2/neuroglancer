[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/invlerp](../modules/neuroglancer_widget_invlerp.md) / InvlerpWidget

# Class: InvlerpWidget

[neuroglancer/widget/invlerp](../modules/neuroglancer_widget_invlerp.md).InvlerpWidget

## Hierarchy

- [`Tab`](neuroglancer_widget_tab_view.Tab.md)

  ↳ **`InvlerpWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_invlerp.InvlerpWidget.md#constructor)

### Properties

- [boundElements](neuroglancer_widget_invlerp.InvlerpWidget.md#boundelements)
- [cdfPanel](neuroglancer_widget_invlerp.InvlerpWidget.md#cdfpanel)
- [dataType](neuroglancer_widget_invlerp.InvlerpWidget.md#datatype)
- [display](neuroglancer_widget_invlerp.InvlerpWidget.md#display)
- [disposedStacks](neuroglancer_widget_invlerp.InvlerpWidget.md#disposedstacks)
- [element](neuroglancer_widget_invlerp.InvlerpWidget.md#element)
- [histogramIndex](neuroglancer_widget_invlerp.InvlerpWidget.md#histogramindex)
- [histogramPanel](neuroglancer_widget_invlerp.InvlerpWidget.md#histogrampanel)
- [histogramSpecifications](neuroglancer_widget_invlerp.InvlerpWidget.md#histogramspecifications)
- [invertArrows](neuroglancer_widget_invlerp.InvlerpWidget.md#invertarrows)
- [legendShaderOptions](neuroglancer_widget_invlerp.InvlerpWidget.md#legendshaderoptions)
- [refCount](neuroglancer_widget_invlerp.InvlerpWidget.md#refcount)
- [trackable](neuroglancer_widget_invlerp.InvlerpWidget.md#trackable)
- [visibility](neuroglancer_widget_invlerp.InvlerpWidget.md#visibility)
- [wasDisposed](neuroglancer_widget_invlerp.InvlerpWidget.md#wasdisposed)

### Accessors

- [texture](neuroglancer_widget_invlerp.InvlerpWidget.md#texture)
- [visible](neuroglancer_widget_invlerp.InvlerpWidget.md#visible)

### Methods

- [addRef](neuroglancer_widget_invlerp.InvlerpWidget.md#addref)
- [dispose](neuroglancer_widget_invlerp.InvlerpWidget.md#dispose)
- [disposed](neuroglancer_widget_invlerp.InvlerpWidget.md#disposed)
- [invertRange](neuroglancer_widget_invlerp.InvlerpWidget.md#invertrange)
- [refCountReachedZero](neuroglancer_widget_invlerp.InvlerpWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_invlerp.InvlerpWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_invlerp.InvlerpWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_invlerp.InvlerpWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_invlerp.InvlerpWidget.md#unregisterdisposer)
- [updateView](neuroglancer_widget_invlerp.InvlerpWidget.md#updateview)

## Constructors

### constructor

• **new InvlerpWidget**(`visibility`, `display`, `dataType`, `trackable`, `histogramSpecifications`, `histogramIndex`, `legendShaderOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `visibility` | [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |
| `display` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `trackable` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)\> |
| `histogramSpecifications` | [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md) |
| `histogramIndex` | `number` |
| `legendShaderOptions` | `undefined` \| [`LegendShaderOptions`](../interfaces/neuroglancer_widget_shader_controls.LegendShaderOptions.md) |

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[constructor](neuroglancer_widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L525)

## Properties

### boundElements

• **boundElements**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `range` | { `container`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) ; `inputs`: [[`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)] ; `spacers`: `undefined` \| [[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)]  } |
| `range.container` | [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) |
| `range.inputs` | [[`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)] |
| `range.spacers` | `undefined` \| [[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)] |
| `window` | { `container`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) ; `inputs`: [[`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)] ; `spacers`: `undefined` \| [[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)]  } |
| `window.container` | [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) |
| `window.inputs` | [[`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement), [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)] |
| `window.spacers` | `undefined` \| [[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)] |

#### Defined in

[src/neuroglancer/widget/invlerp.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L512)

___

### cdfPanel

• **cdfPanel**: [`CdfPanel`](neuroglancer_widget_invlerp._internal_.CdfPanel.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:509](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L509)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

___

### display

• **display**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposedStacks](neuroglancer_widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[element](neuroglancer_widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L32)

___

### histogramIndex

• **histogramIndex**: `number`

___

### histogramPanel

• **histogramPanel**: [`HistogramPanel`](neuroglancer_widget_histogram.HistogramPanel.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:510](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L510)

___

### histogramSpecifications

• **histogramSpecifications**: [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

___

### invertArrows

• **invertArrows**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)[]

#### Defined in

[src/neuroglancer/widget/invlerp.ts:516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L516)

___

### legendShaderOptions

• **legendShaderOptions**: `undefined` \| [`LegendShaderOptions`](../interfaces/neuroglancer_widget_shader_controls.LegendShaderOptions.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCount](neuroglancer_widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### trackable

• **trackable**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)\>

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[visibility](neuroglancer_widget_tab_view.Tab.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[wasDisposed](neuroglancer_widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### texture

• `get` **texture**(): ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture)

#### Returns

``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:517](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L517)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addRef

▸ **addRef**(): [`InvlerpWidget`](neuroglancer_widget_invlerp.InvlerpWidget.md)

#### Returns

[`InvlerpWidget`](neuroglancer_widget_invlerp.InvlerpWidget.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[addRef](neuroglancer_widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[dispose](neuroglancer_widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposed](neuroglancer_widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L45)

___

### invertRange

▸ `Private` **invertRange**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L522)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCountReachedZero](neuroglancer_widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerCancellable](neuroglancer_widget_tab_view.Tab.md#registercancellable)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerDisposer](neuroglancer_widget_tab_view.Tab.md#registerdisposer)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerEventListener](neuroglancer_widget_tab_view.Tab.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[unregisterDisposer](neuroglancer_widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateView

▸ **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L559)
