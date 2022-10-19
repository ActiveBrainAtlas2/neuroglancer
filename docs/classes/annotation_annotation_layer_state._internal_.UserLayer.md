[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / UserLayer

# Class: UserLayer

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).UserLayer

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`UserLayer`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.UserLayer.md#constructor)

### Properties

- [dataSources](annotation_annotation_layer_state._internal_.UserLayer.md#datasources)
- [dataSourcesChanged](annotation_annotation_layer_state._internal_.UserLayer.md#datasourceschanged)
- [disposedStacks](annotation_annotation_layer_state._internal_.UserLayer.md#disposedstacks)
- [layersChanged](annotation_annotation_layer_state._internal_.UserLayer.md#layerschanged)
- [loadingCounter](annotation_annotation_layer_state._internal_.UserLayer.md#loadingcounter)
- [managedLayer](annotation_annotation_layer_state._internal_.UserLayer.md#managedlayer)
- [panels](annotation_annotation_layer_state._internal_.UserLayer.md#panels)
- [pick](annotation_annotation_layer_state._internal_.UserLayer.md#pick)
- [readyStateChanged](annotation_annotation_layer_state._internal_.UserLayer.md#readystatechanged)
- [refCount](annotation_annotation_layer_state._internal_.UserLayer.md#refcount)
- [renderLayers](annotation_annotation_layer_state._internal_.UserLayer.md#renderlayers)
- [selectionState](annotation_annotation_layer_state._internal_.UserLayer.md#selectionstate)
- [specificationChanged](annotation_annotation_layer_state._internal_.UserLayer.md#specificationchanged)
- [tabs](annotation_annotation_layer_state._internal_.UserLayer.md#tabs)
- [tool](annotation_annotation_layer_state._internal_.UserLayer.md#tool)
- [toolBinder](annotation_annotation_layer_state._internal_.UserLayer.md#toolbinder)
- [wasDisposed](annotation_annotation_layer_state._internal_.UserLayer.md#wasdisposed)
- [supportsPickOption](annotation_annotation_layer_state._internal_.UserLayer.md#supportspickoption)
- [type](annotation_annotation_layer_state._internal_.UserLayer.md#type)
- [typeAbbreviation](annotation_annotation_layer_state._internal_.UserLayer.md#typeabbreviation)

### Accessors

- [isReady](annotation_annotation_layer_state._internal_.UserLayer.md#isready)
- [localCoordinateSpace](annotation_annotation_layer_state._internal_.UserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](annotation_annotation_layer_state._internal_.UserLayer.md#localcoordinatespacecombiner)
- [localPosition](annotation_annotation_layer_state._internal_.UserLayer.md#localposition)
- [manager](annotation_annotation_layer_state._internal_.UserLayer.md#manager)
- [type](annotation_annotation_layer_state._internal_.UserLayer.md#type-1)

### Methods

- [activateDataSubsources](annotation_annotation_layer_state._internal_.UserLayer.md#activatedatasubsources)
- [addCoordinateSpace](annotation_annotation_layer_state._internal_.UserLayer.md#addcoordinatespace)
- [addDataSource](annotation_annotation_layer_state._internal_.UserLayer.md#adddatasource)
- [addRef](annotation_annotation_layer_state._internal_.UserLayer.md#addref)
- [addRenderLayer](annotation_annotation_layer_state._internal_.UserLayer.md#addrenderlayer)
- [canAddDataSource](annotation_annotation_layer_state._internal_.UserLayer.md#canadddatasource)
- [captureSelectionState](annotation_annotation_layer_state._internal_.UserLayer.md#captureselectionstate)
- [copySelectionState](annotation_annotation_layer_state._internal_.UserLayer.md#copyselectionstate)
- [decrementLoadingCounter](annotation_annotation_layer_state._internal_.UserLayer.md#decrementloadingcounter)
- [displaySelectionState](annotation_annotation_layer_state._internal_.UserLayer.md#displayselectionstate)
- [dispose](annotation_annotation_layer_state._internal_.UserLayer.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.UserLayer.md#disposed)
- [getDataSourceSpecifications](annotation_annotation_layer_state._internal_.UserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](annotation_annotation_layer_state._internal_.UserLayer.md#getlegacydatasourcespecifications)
- [getValueAt](annotation_annotation_layer_state._internal_.UserLayer.md#getvalueat)
- [handleAction](annotation_annotation_layer_state._internal_.UserLayer.md#handleaction)
- [initializationDone](annotation_annotation_layer_state._internal_.UserLayer.md#initializationdone)
- [initializeSelectionState](annotation_annotation_layer_state._internal_.UserLayer.md#initializeselectionstate)
- [markLoading](annotation_annotation_layer_state._internal_.UserLayer.md#markloading)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.UserLayer.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.UserLayer.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.UserLayer.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.UserLayer.md#registereventlistener)
- [removeRenderLayer](annotation_annotation_layer_state._internal_.UserLayer.md#removerenderlayer)
- [resetSelectionState](annotation_annotation_layer_state._internal_.UserLayer.md#resetselectionstate)
- [restoreState](annotation_annotation_layer_state._internal_.UserLayer.md#restorestate)
- [selectedValueFromJson](annotation_annotation_layer_state._internal_.UserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](annotation_annotation_layer_state._internal_.UserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](annotation_annotation_layer_state._internal_.UserLayer.md#selectionstatefromjson)
- [selectionStateToJson](annotation_annotation_layer_state._internal_.UserLayer.md#selectionstatetojson)
- [setLayerPosition](annotation_annotation_layer_state._internal_.UserLayer.md#setlayerposition)
- [toJSON](annotation_annotation_layer_state._internal_.UserLayer.md#tojson)
- [transformPickedValue](annotation_annotation_layer_state._internal_.UserLayer.md#transformpickedvalue)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.UserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](annotation_annotation_layer_state._internal_.UserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new UserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L244)

## Properties

### dataSources

• **dataSources**: [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L238)

___

### dataSourcesChanged

• **dataSourcesChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L237)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layersChanged

• **layersChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L223)

___

### loadingCounter

• `Private` **loadingCounter**: `number` = `1`

#### Defined in

[src/neuroglancer/layer.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L227)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

___

### panels

• **panels**: [`UserLayerSidePanelsState`](ui_layer_side_panel_state.UserLayerSidePanelsState.md)

#### Defined in

[src/neuroglancer/layer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L233)

___

### pick

• **pick**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L108)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L224)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayers

• **renderLayers**: [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md)[]

#### Defined in

[src/neuroglancer/layer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L226)

___

### selectionState

• **selectionState**: [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L110)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L225)

___

### tabs

• **tabs**: [`TabSpecification`](widget_tab_view.TabSpecification.md)

#### Defined in

[src/neuroglancer/layer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L232)

___

### tool

• **tool**: [`SelectedLegacyTool`](ui_tool.SelectedLegacyTool.md)

#### Defined in

[src/neuroglancer/layer.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L234)

___

### toolBinder

• **toolBinder**: [`LayerToolBinder`](ui_tool.LayerToolBinder.md)

#### Defined in

[src/neuroglancer/layer.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L235)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### supportsPickOption

▪ `Static` **supportsPickOption**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L106)

___

### type

▪ `Static` **type**: `string`

#### Defined in

[src/neuroglancer/layer.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L99)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string`

#### Defined in

[src/neuroglancer/layer.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L100)

## Accessors

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L228)

___

### localCoordinateSpace

• `get` **localCoordinateSpace**(): [`TrackableCoordinateSpace`](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md)

#### Returns

[`TrackableCoordinateSpace`](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/layer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L95)

___

### localCoordinateSpaceCombiner

• `get` **localCoordinateSpaceCombiner**(): [`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md)

#### Returns

[`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L91)

___

### localPosition

• `get` **localPosition**(): [`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Returns

[`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Defined in

[src/neuroglancer/layer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L87)

___

### manager

• `get` **manager**(): [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L240)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/layer.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L102)

## Methods

### activateDataSubsources

▸ **activateDataSubsources**(`subsources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subsources` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<[`LoadedDataSubsource`](annotation_annotation_layer_state._internal_.LoadedDataSubsource.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L275)

___

### addCoordinateSpace

▸ **addCoordinateSpace**(`coordinateSpace`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L322)

___

### addDataSource

▸ **addDataSource**(`spec`): [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `undefined` \| [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md) |

#### Returns

[`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

#### Defined in

[src/neuroglancer/layer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L267)

___

### addRef

▸ **addRef**(): [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Returns

[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### addRenderLayer

▸ **addRenderLayer**(`layer`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L384)

___

### canAddDataSource

▸ **canAddDataSource**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L263)

___

### captureSelectionState

▸ **captureSelectionState**(`state`, `mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L190)

___

### copySelectionState

▸ **copySelectionState**(`dest`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |
| `source` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L203)

___

### decrementLoadingCounter

▸ `Private` **decrementLoadingCounter**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L302)

___

### displaySelectionState

▸ **displaySelectionState**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |
| `parent` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `context` | [`DependentViewContext`](widget_dependent_view_widget.DependentViewContext.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L161)

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

[src/neuroglancer/layer.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L406)

___

### getDataSourceSpecifications

▸ **getDataSourceSpecifications**(`layerSpec`): [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSpec` | `any` |

#### Returns

[`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)[]

#### Defined in

[src/neuroglancer/layer.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L347)

___

### getLegacyDataSourceSpecifications

▸ **getLegacyDataSourceSpecifications**(`sourceSpec`, `layerSpec`, `legacyTransform`, `explicitSpecs`): [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceSpec` | `undefined` \| `string` |
| `layerSpec` | `any` |
| `legacyTransform` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateTransformSpecification.md) |
| `explicitSpecs` | [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)[] |

#### Returns

[`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)[]

#### Defined in

[src/neuroglancer/layer.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L337)

___

### getValueAt

▸ **getValueAt**(`position`, `pickState`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Float32Array` |
| `pickState` | [`PickState`](../interfaces/annotation_annotation_layer_state._internal_.PickState.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L417)

___

### handleAction

▸ **handleAction**(`_action`, `_context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `string` |
| `_context` | [`LayerActionContext`](annotation_annotation_layer_state._internal_.LayerActionContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L453)

___

### initializationDone

▸ **initializationDone**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L331)

___

### initializeSelectionState

▸ **initializeSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L112)

___

### markLoading

▸ **markLoading**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L308)

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

### removeRenderLayer

▸ **removeRenderLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L393)

___

### resetSelectionState

▸ **resetSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L126)

___

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:370](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L370)

___

### selectedValueFromJson

▸ **selectedValueFromJson**(`json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:459](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L459)

___

### selectedValueToJson

▸ **selectedValueToJson**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L455)

___

### selectionStateFromJson

▸ **selectionStateFromJson**(`state`, `json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |
| `json` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L132)

___

### selectionStateToJson

▸ **selectionStateToJson**(`state`, `forPython`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.UserLayerSelectionState.md) |
| `forPython` | `boolean` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L169)

___

### setLayerPosition

▸ **setLayerPosition**(`modelTransform`, `layerPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/annotation_annotation_layer_state._internal_.RenderLayerTransform.md) |
| `layerPosition` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L463)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L439)

___

### transformPickedValue

▸ **transformPickedValue**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L435)

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

### updateDataSubsourceActivations

▸ **updateDataSubsourceActivations**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L279)
