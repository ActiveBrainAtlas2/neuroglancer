[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_data\_sources\_tab](../modules/neuroglancer_ui_layer_data_sources_tab.md) / LayerDataSourcesTab

# Class: LayerDataSourcesTab

[neuroglancer/ui/layer_data_sources_tab](../modules/neuroglancer_ui_layer_data_sources_tab.md).LayerDataSourcesTab

## Hierarchy

- [`Tab`](neuroglancer_widget_tab_view.Tab.md)

  ↳ **`LayerDataSourcesTab`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#constructor)

### Properties

- [addDataSourceIcon](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#adddatasourceicon)
- [dataSourcesContainer](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#datasourcescontainer)
- [detectedLayerConstructor](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#detectedlayerconstructor)
- [disposedStacks](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#disposedstacks)
- [element](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#element)
- [generation](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#generation)
- [layer](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#layer)
- [layerTypeDetection](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#layertypedetection)
- [layerTypeElement](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#layertypeelement)
- [reRender](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#rerender)
- [refCount](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#refcount)
- [sourceViews](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#sourceviews)
- [visibility](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#visibility)
- [wasDisposed](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#wasdisposed)

### Accessors

- [visible](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#visible)

### Methods

- [addRef](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#addref)
- [dispose](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#dispose)
- [disposed](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#disposed)
- [refCountReachedZero](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#unregisterdisposer)
- [updateLayerTypeDetection](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#updatelayertypedetection)
- [updateView](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md#updateview)

## Constructors

### constructor

• **new LayerDataSourcesTab**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[constructor](neuroglancer_widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L345)

## Properties

### addDataSourceIcon

• `Private` **addDataSourceIcon**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L339)

___

### dataSourcesContainer

• `Private` **dataSourcesContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:342](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L342)

___

### detectedLayerConstructor

• **detectedLayerConstructor**: `undefined` \| [`UserLayerConstructor`](../modules/neuroglancer_layer.md#userlayerconstructor)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\> = `undefined`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:379](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L379)

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

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L337)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

___

### layerTypeDetection

• `Private` **layerTypeDetection**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L340)

___

### layerTypeElement

• `Private` **layerTypeElement**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L341)

___

### reRender

• `Private` **reRender**: [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L343)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCount](neuroglancer_widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### sourceViews

• `Private` **sourceViews**: `Map`<[`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md), [`DataSourceView`](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md)\>

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L338)

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

▸ **addRef**(): [`LayerDataSourcesTab`](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md)

#### Returns

[`LayerDataSourcesTab`](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md)

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

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposed](neuroglancer_widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L407)

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

### updateLayerTypeDetection

▸ **updateLayerTypeDetection**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L381)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_data_sources_tab.ts#L416)
