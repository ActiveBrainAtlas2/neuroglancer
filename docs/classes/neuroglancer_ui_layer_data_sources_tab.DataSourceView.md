[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_data\_sources\_tab](../modules/neuroglancer_ui_layer_data_sources_tab.md) / DataSourceView

# Class: DataSourceView

[neuroglancer/ui/layer_data_sources_tab](../modules/neuroglancer_ui_layer_data_sources_tab.md).DataSourceView

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

  ↳ **`DataSourceView`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#disposedstacks)
- [element](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#element)
- [fetchMatrixWidget](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#fetchmatrixwidget)
- [generation](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#generation)
- [loadedView](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#loadedview)
- [refCount](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#refcount)
- [seenGeneration](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#seengeneration)
- [source](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#source)
- [tab](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#tab)
- [urlInput](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#urlinput)
- [wasDisposed](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#addref)
- [dispose](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#dispose)
- [disposed](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#disposed)
- [refCountReachedZero](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#unregisterdisposer)
- [updateView](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md#updateview)

## Constructors

### constructor

• **new DataSourceView**(`tab`, `source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | [`LayerDataSourcesTab`](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md) |
| `source` | [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L241)

## Properties

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

[src/neuroglancer/ui/layer_data_sources_tab.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L231)

___

### fetchMatrixWidget

• `Private` **fetchMatrixWidget**: `undefined` \| [`FetchTransformationWidget`](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L238)

___

### generation

• **generation**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L235)

___

### loadedView

• `Private` **loadedView**: `undefined` \| [`LoadedDataSourceView`](neuroglancer_ui_layer_data_sources_tab.LoadedDataSourceView.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L236)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### seenGeneration

• **seenGeneration**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L234)

___

### source

• **source**: [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L241)

___

### tab

• **tab**: [`LayerDataSourcesTab`](neuroglancer_ui_layer_data_sources_tab.LayerDataSourcesTab.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L241)

___

### urlInput

• **urlInput**: [`SourceUrlAutocomplete`](neuroglancer_ui_layer_data_sources_tab._internal_.SourceUrlAutocomplete.md)

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L232)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DataSourceView`](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md)

#### Returns

[`DataSourceView`](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md)

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

[src/neuroglancer/ui/layer_data_sources_tab.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L315)

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

▸ **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_data_sources_tab.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_data_sources_tab.ts#L284)
