[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_data\_sources\_tab](../modules/ui_layer_data_sources_tab.md) / DataSourceView

# Class: DataSourceView

[ui/layer_data_sources_tab](../modules/ui_layer_data_sources_tab.md).DataSourceView

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DataSourceView`**

## Table of contents

### Constructors

- [constructor](ui_layer_data_sources_tab.DataSourceView.md#constructor)

### Properties

- [disposedStacks](ui_layer_data_sources_tab.DataSourceView.md#disposedstacks)
- [element](ui_layer_data_sources_tab.DataSourceView.md#element)
- [fetchMatrixWidget](ui_layer_data_sources_tab.DataSourceView.md#fetchmatrixwidget)
- [generation](ui_layer_data_sources_tab.DataSourceView.md#generation)
- [loadedView](ui_layer_data_sources_tab.DataSourceView.md#loadedview)
- [refCount](ui_layer_data_sources_tab.DataSourceView.md#refcount)
- [seenGeneration](ui_layer_data_sources_tab.DataSourceView.md#seengeneration)
- [source](ui_layer_data_sources_tab.DataSourceView.md#source)
- [tab](ui_layer_data_sources_tab.DataSourceView.md#tab)
- [urlInput](ui_layer_data_sources_tab.DataSourceView.md#urlinput)
- [wasDisposed](ui_layer_data_sources_tab.DataSourceView.md#wasdisposed)

### Methods

- [addRef](ui_layer_data_sources_tab.DataSourceView.md#addref)
- [dispose](ui_layer_data_sources_tab.DataSourceView.md#dispose)
- [disposed](ui_layer_data_sources_tab.DataSourceView.md#disposed)
- [refCountReachedZero](ui_layer_data_sources_tab.DataSourceView.md#refcountreachedzero)
- [registerCancellable](ui_layer_data_sources_tab.DataSourceView.md#registercancellable)
- [registerDisposer](ui_layer_data_sources_tab.DataSourceView.md#registerdisposer)
- [registerEventListener](ui_layer_data_sources_tab.DataSourceView.md#registereventlistener)
- [unregisterDisposer](ui_layer_data_sources_tab.DataSourceView.md#unregisterdisposer)
- [updateView](ui_layer_data_sources_tab.DataSourceView.md#updateview)

## Constructors

### constructor

• **new DataSourceView**(`tab`, `source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | [`LayerDataSourcesTab`](ui_layer_data_sources_tab.LayerDataSourcesTab.md) |
| `source` | [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L241)

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

[src/neuroglancer/ui/layer_data_sources_tab.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L231)

___

### fetchMatrixWidget

• `Private` **fetchMatrixWidget**: `undefined` \| [`FetchTransformationWidget`](widget_fetch_transformation.FetchTransformationWidget.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L238)

___

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L235)

___

### loadedView

• `Private` **loadedView**: `undefined` \| [`LoadedDataSourceView`](ui_layer_data_sources_tab.LoadedDataSourceView.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L236)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### seenGeneration

• **seenGeneration**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L234)

___

### source

• **source**: [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

___

### tab

• **tab**: [`LayerDataSourcesTab`](ui_layer_data_sources_tab.LayerDataSourcesTab.md)

___

### urlInput

• **urlInput**: [`SourceUrlAutocomplete`](ui_layer_data_sources_tab._internal_.SourceUrlAutocomplete.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L232)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DataSourceView`](ui_layer_data_sources_tab.DataSourceView.md)

#### Returns

[`DataSourceView`](ui_layer_data_sources_tab.DataSourceView.md)

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

[src/neuroglancer/ui/layer_data_sources_tab.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L315)

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

[src/neuroglancer/ui/layer_data_sources_tab.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_data_sources_tab.ts#L284)
