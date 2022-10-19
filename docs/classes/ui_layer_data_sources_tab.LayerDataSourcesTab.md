[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_data\_sources\_tab](../modules/ui_layer_data_sources_tab.md) / LayerDataSourcesTab

# Class: LayerDataSourcesTab

[ui/layer_data_sources_tab](../modules/ui_layer_data_sources_tab.md).LayerDataSourcesTab

## Hierarchy

- [`Tab`](widget_tab_view.Tab.md)

  ↳ **`LayerDataSourcesTab`**

## Table of contents

### Constructors

- [constructor](ui_layer_data_sources_tab.LayerDataSourcesTab.md#constructor)

### Properties

- [addDataSourceIcon](ui_layer_data_sources_tab.LayerDataSourcesTab.md#adddatasourceicon)
- [dataSourcesContainer](ui_layer_data_sources_tab.LayerDataSourcesTab.md#datasourcescontainer)
- [detectedLayerConstructor](ui_layer_data_sources_tab.LayerDataSourcesTab.md#detectedlayerconstructor)
- [disposedStacks](ui_layer_data_sources_tab.LayerDataSourcesTab.md#disposedstacks)
- [element](ui_layer_data_sources_tab.LayerDataSourcesTab.md#element)
- [generation](ui_layer_data_sources_tab.LayerDataSourcesTab.md#generation)
- [layer](ui_layer_data_sources_tab.LayerDataSourcesTab.md#layer)
- [layerTypeDetection](ui_layer_data_sources_tab.LayerDataSourcesTab.md#layertypedetection)
- [layerTypeElement](ui_layer_data_sources_tab.LayerDataSourcesTab.md#layertypeelement)
- [reRender](ui_layer_data_sources_tab.LayerDataSourcesTab.md#rerender)
- [refCount](ui_layer_data_sources_tab.LayerDataSourcesTab.md#refcount)
- [sourceViews](ui_layer_data_sources_tab.LayerDataSourcesTab.md#sourceviews)
- [visibility](ui_layer_data_sources_tab.LayerDataSourcesTab.md#visibility)
- [wasDisposed](ui_layer_data_sources_tab.LayerDataSourcesTab.md#wasdisposed)

### Accessors

- [visible](ui_layer_data_sources_tab.LayerDataSourcesTab.md#visible)

### Methods

- [addRef](ui_layer_data_sources_tab.LayerDataSourcesTab.md#addref)
- [dispose](ui_layer_data_sources_tab.LayerDataSourcesTab.md#dispose)
- [disposed](ui_layer_data_sources_tab.LayerDataSourcesTab.md#disposed)
- [refCountReachedZero](ui_layer_data_sources_tab.LayerDataSourcesTab.md#refcountreachedzero)
- [registerCancellable](ui_layer_data_sources_tab.LayerDataSourcesTab.md#registercancellable)
- [registerDisposer](ui_layer_data_sources_tab.LayerDataSourcesTab.md#registerdisposer)
- [registerEventListener](ui_layer_data_sources_tab.LayerDataSourcesTab.md#registereventlistener)
- [unregisterDisposer](ui_layer_data_sources_tab.LayerDataSourcesTab.md#unregisterdisposer)
- [updateLayerTypeDetection](ui_layer_data_sources_tab.LayerDataSourcesTab.md#updatelayertypedetection)
- [updateView](ui_layer_data_sources_tab.LayerDataSourcesTab.md#updateview)

## Constructors

### constructor

• **new LayerDataSourcesTab**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Overrides

[Tab](widget_tab_view.Tab.md).[constructor](widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L345)

## Properties

### addDataSourceIcon

• `Private` **addDataSourceIcon**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L339)

___

### dataSourcesContainer

• `Private` **dataSourcesContainer**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:342](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L342)

___

### detectedLayerConstructor

• **detectedLayerConstructor**: `undefined` \| [`UserLayerConstructor`](../modules/ui_layer_data_sources_tab._internal_.md#userlayerconstructor)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> = `undefined`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:379](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L379)

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

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L337)

___

### layer

• **layer**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

___

### layerTypeDetection

• `Private` **layerTypeDetection**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L340)

___

### layerTypeElement

• `Private` **layerTypeElement**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L341)

___

### reRender

• `Private` **reRender**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L343)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCount](widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### sourceViews

• `Private` **sourceViews**: `Map`<[`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md), [`DataSourceView`](ui_layer_data_sources_tab.DataSourceView.md)\>

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L338)

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

▸ **addRef**(): [`LayerDataSourcesTab`](ui_layer_data_sources_tab.LayerDataSourcesTab.md)

#### Returns

[`LayerDataSourcesTab`](ui_layer_data_sources_tab.LayerDataSourcesTab.md)

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

#### Overrides

[Tab](widget_tab_view.Tab.md).[disposed](widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L407)

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

### updateLayerTypeDetection

▸ **updateLayerTypeDetection**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L381)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L416)
