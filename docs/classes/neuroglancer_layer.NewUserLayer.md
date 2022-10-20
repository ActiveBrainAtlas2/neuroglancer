[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / NewUserLayer

# Class: NewUserLayer

[neuroglancer/layer](../modules/neuroglancer_layer.md).NewUserLayer

Special UserLayer type used when creating a new layer in the UI.

## Hierarchy

- [`UserLayer`](neuroglancer_layer.UserLayer.md)

  ↳ **`NewUserLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.NewUserLayer.md#constructor)

### Properties

- [dataSources](neuroglancer_layer.NewUserLayer.md#datasources)
- [dataSourcesChanged](neuroglancer_layer.NewUserLayer.md#datasourceschanged)
- [detectedLayerConstructor](neuroglancer_layer.NewUserLayer.md#detectedlayerconstructor)
- [disposedStacks](neuroglancer_layer.NewUserLayer.md#disposedstacks)
- [layersChanged](neuroglancer_layer.NewUserLayer.md#layerschanged)
- [managedLayer](neuroglancer_layer.NewUserLayer.md#managedlayer)
- [panels](neuroglancer_layer.NewUserLayer.md#panels)
- [pick](neuroglancer_layer.NewUserLayer.md#pick)
- [readyStateChanged](neuroglancer_layer.NewUserLayer.md#readystatechanged)
- [refCount](neuroglancer_layer.NewUserLayer.md#refcount)
- [renderLayers](neuroglancer_layer.NewUserLayer.md#renderlayers)
- [selectionState](neuroglancer_layer.NewUserLayer.md#selectionstate)
- [specificationChanged](neuroglancer_layer.NewUserLayer.md#specificationchanged)
- [tabs](neuroglancer_layer.NewUserLayer.md#tabs)
- [tool](neuroglancer_layer.NewUserLayer.md#tool)
- [toolBinder](neuroglancer_layer.NewUserLayer.md#toolbinder)
- [wasDisposed](neuroglancer_layer.NewUserLayer.md#wasdisposed)
- [supportsPickOption](neuroglancer_layer.NewUserLayer.md#supportspickoption)
- [type](neuroglancer_layer.NewUserLayer.md#type)
- [typeAbbreviation](neuroglancer_layer.NewUserLayer.md#typeabbreviation)

### Accessors

- [isReady](neuroglancer_layer.NewUserLayer.md#isready)
- [localCoordinateSpace](neuroglancer_layer.NewUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](neuroglancer_layer.NewUserLayer.md#localcoordinatespacecombiner)
- [localPosition](neuroglancer_layer.NewUserLayer.md#localposition)
- [manager](neuroglancer_layer.NewUserLayer.md#manager)
- [type](neuroglancer_layer.NewUserLayer.md#type-1)

### Methods

- [activateDataSubsources](neuroglancer_layer.NewUserLayer.md#activatedatasubsources)
- [addCoordinateSpace](neuroglancer_layer.NewUserLayer.md#addcoordinatespace)
- [addDataSource](neuroglancer_layer.NewUserLayer.md#adddatasource)
- [addRef](neuroglancer_layer.NewUserLayer.md#addref)
- [addRenderLayer](neuroglancer_layer.NewUserLayer.md#addrenderlayer)
- [canAddDataSource](neuroglancer_layer.NewUserLayer.md#canadddatasource)
- [captureSelectionState](neuroglancer_layer.NewUserLayer.md#captureselectionstate)
- [copySelectionState](neuroglancer_layer.NewUserLayer.md#copyselectionstate)
- [displaySelectionState](neuroglancer_layer.NewUserLayer.md#displayselectionstate)
- [dispose](neuroglancer_layer.NewUserLayer.md#dispose)
- [disposed](neuroglancer_layer.NewUserLayer.md#disposed)
- [getDataSourceSpecifications](neuroglancer_layer.NewUserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](neuroglancer_layer.NewUserLayer.md#getlegacydatasourcespecifications)
- [getValueAt](neuroglancer_layer.NewUserLayer.md#getvalueat)
- [handleAction](neuroglancer_layer.NewUserLayer.md#handleaction)
- [initializationDone](neuroglancer_layer.NewUserLayer.md#initializationdone)
- [initializeSelectionState](neuroglancer_layer.NewUserLayer.md#initializeselectionstate)
- [markLoading](neuroglancer_layer.NewUserLayer.md#markloading)
- [refCountReachedZero](neuroglancer_layer.NewUserLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.NewUserLayer.md#registercancellable)
- [registerDisposer](neuroglancer_layer.NewUserLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.NewUserLayer.md#registereventlistener)
- [removeRenderLayer](neuroglancer_layer.NewUserLayer.md#removerenderlayer)
- [resetSelectionState](neuroglancer_layer.NewUserLayer.md#resetselectionstate)
- [restoreState](neuroglancer_layer.NewUserLayer.md#restorestate)
- [selectedValueFromJson](neuroglancer_layer.NewUserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](neuroglancer_layer.NewUserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](neuroglancer_layer.NewUserLayer.md#selectionstatefromjson)
- [selectionStateToJson](neuroglancer_layer.NewUserLayer.md#selectionstatetojson)
- [setLayerPosition](neuroglancer_layer.NewUserLayer.md#setlayerposition)
- [toJSON](neuroglancer_layer.NewUserLayer.md#tojson)
- [transformPickedValue](neuroglancer_layer.NewUserLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_layer.NewUserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](neuroglancer_layer.NewUserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new NewUserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[constructor](neuroglancer_layer.UserLayer.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L244)

## Properties

### dataSources

• **dataSources**: [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)[] = `[]`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[dataSources](neuroglancer_layer.UserLayer.md#datasources)

#### Defined in

[src/neuroglancer/layer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L238)

___

### dataSourcesChanged

• **dataSourcesChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[dataSourcesChanged](neuroglancer_layer.UserLayer.md#datasourceschanged)

#### Defined in

[src/neuroglancer/layer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L237)

___

### detectedLayerConstructor

• **detectedLayerConstructor**: `undefined` \| [`UserLayerConstructor`](../modules/neuroglancer_layer.md#userlayerconstructor)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:2098](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2098)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[disposedStacks](neuroglancer_layer.UserLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### layersChanged

• **layersChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[layersChanged](neuroglancer_layer.UserLayer.md#layerschanged)

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L223)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[managedLayer](neuroglancer_layer.UserLayer.md#managedlayer)

#### Defined in

[src/neuroglancer/layer.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L244)

___

### panels

• **panels**: [`UserLayerSidePanelsState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[panels](neuroglancer_layer.UserLayer.md#panels)

#### Defined in

[src/neuroglancer/layer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L233)

___

### pick

• **pick**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[pick](neuroglancer_layer.UserLayer.md#pick)

#### Defined in

[src/neuroglancer/layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L108)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[readyStateChanged](neuroglancer_layer.UserLayer.md#readystatechanged)

#### Defined in

[src/neuroglancer/layer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L224)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[refCount](neuroglancer_layer.UserLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayers

• **renderLayers**: [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md)[]

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[renderLayers](neuroglancer_layer.UserLayer.md#renderlayers)

#### Defined in

[src/neuroglancer/layer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L226)

___

### selectionState

• **selectionState**: [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[selectionState](neuroglancer_layer.UserLayer.md#selectionstate)

#### Defined in

[src/neuroglancer/layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L110)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[specificationChanged](neuroglancer_layer.UserLayer.md#specificationchanged)

#### Defined in

[src/neuroglancer/layer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L225)

___

### tabs

• **tabs**: [`TabSpecification`](neuroglancer_widget_tab_view.TabSpecification.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[tabs](neuroglancer_layer.UserLayer.md#tabs)

#### Defined in

[src/neuroglancer/layer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L232)

___

### tool

• **tool**: [`SelectedLegacyTool`](neuroglancer_ui_tool.SelectedLegacyTool.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[tool](neuroglancer_layer.UserLayer.md#tool)

#### Defined in

[src/neuroglancer/layer.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L234)

___

### toolBinder

• **toolBinder**: [`LayerToolBinder`](neuroglancer_ui_tool.LayerToolBinder.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[toolBinder](neuroglancer_layer.UserLayer.md#toolbinder)

#### Defined in

[src/neuroglancer/layer.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L235)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[wasDisposed](neuroglancer_layer.UserLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### supportsPickOption

▪ `Static` **supportsPickOption**: `boolean` = `false`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[supportsPickOption](neuroglancer_layer.UserLayer.md#supportspickoption)

#### Defined in

[src/neuroglancer/layer.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L106)

___

### type

▪ `Static` **type**: `string` = `'new'`

#### Overrides

[UserLayer](neuroglancer_layer.UserLayer.md).[type](neuroglancer_layer.UserLayer.md#type)

#### Defined in

[src/neuroglancer/layer.ts:2096](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2096)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string` = `'new'`

#### Overrides

[UserLayer](neuroglancer_layer.UserLayer.md).[typeAbbreviation](neuroglancer_layer.UserLayer.md#typeabbreviation)

#### Defined in

[src/neuroglancer/layer.ts:2097](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2097)

## Accessors

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UserLayer.isReady

#### Defined in

[src/neuroglancer/layer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L228)

___

### localCoordinateSpace

• `get` **localCoordinateSpace**(): [`TrackableCoordinateSpace`](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)

#### Returns

[`TrackableCoordinateSpace`](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)

#### Inherited from

UserLayer.localCoordinateSpace

#### Defined in

[src/neuroglancer/layer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L95)

___

### localCoordinateSpaceCombiner

• `get` **localCoordinateSpaceCombiner**(): [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Returns

[`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Inherited from

UserLayer.localCoordinateSpaceCombiner

#### Defined in

[src/neuroglancer/layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L91)

___

### localPosition

• `get` **localPosition**(): [`Position`](neuroglancer_navigation_state.Position.md)

#### Returns

[`Position`](neuroglancer_navigation_state.Position.md)

#### Inherited from

UserLayer.localPosition

#### Defined in

[src/neuroglancer/layer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L87)

___

### manager

• `get` **manager**(): [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Inherited from

UserLayer.manager

#### Defined in

[src/neuroglancer/layer.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L240)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

UserLayer.type

#### Defined in

[src/neuroglancer/layer.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L102)

## Methods

### activateDataSubsources

▸ **activateDataSubsources**(`subsources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subsources` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`LoadedDataSubsource`](neuroglancer_layer_data_source.LoadedDataSubsource.md)\> |

#### Returns

`void`

#### Overrides

[UserLayer](neuroglancer_layer.UserLayer.md).[activateDataSubsources](neuroglancer_layer.UserLayer.md#activatedatasubsources)

#### Defined in

[src/neuroglancer/layer.ts:2100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2100)

___

### addCoordinateSpace

▸ **addCoordinateSpace**(`coordinateSpace`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[addCoordinateSpace](neuroglancer_layer.UserLayer.md#addcoordinatespace)

#### Defined in

[src/neuroglancer/layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L322)

___

### addDataSource

▸ **addDataSource**(`spec`): [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `undefined` \| [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md) |

#### Returns

[`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[addDataSource](neuroglancer_layer.UserLayer.md#adddatasource)

#### Defined in

[src/neuroglancer/layer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L267)

___

### addRef

▸ **addRef**(): [`NewUserLayer`](neuroglancer_layer.NewUserLayer.md)

#### Returns

[`NewUserLayer`](neuroglancer_layer.NewUserLayer.md)

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[addRef](neuroglancer_layer.UserLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### addRenderLayer

▸ **addRenderLayer**(`layer`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[addRenderLayer](neuroglancer_layer.UserLayer.md#addrenderlayer)

#### Defined in

[src/neuroglancer/layer.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L384)

___

### canAddDataSource

▸ **canAddDataSource**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[canAddDataSource](neuroglancer_layer.UserLayer.md#canadddatasource)

#### Defined in

[src/neuroglancer/layer.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L263)

___

### captureSelectionState

▸ **captureSelectionState**(`state`, `mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[captureSelectionState](neuroglancer_layer.UserLayer.md#captureselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L190)

___

### copySelectionState

▸ **copySelectionState**(`dest`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |
| `source` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[copySelectionState](neuroglancer_layer.UserLayer.md#copyselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L203)

___

### displaySelectionState

▸ **displaySelectionState**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `context` | [`DependentViewContext`](neuroglancer_widget_dependent_view_widget.DependentViewContext.md) |

#### Returns

`boolean`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[displaySelectionState](neuroglancer_layer.UserLayer.md#displayselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L161)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[dispose](neuroglancer_layer.UserLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[disposed](neuroglancer_layer.UserLayer.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L406)

___

### getDataSourceSpecifications

▸ **getDataSourceSpecifications**(`layerSpec`): [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSpec` | `any` |

#### Returns

[`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[]

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[getDataSourceSpecifications](neuroglancer_layer.UserLayer.md#getdatasourcespecifications)

#### Defined in

[src/neuroglancer/layer.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L347)

___

### getLegacyDataSourceSpecifications

▸ **getLegacyDataSourceSpecifications**(`sourceSpec`, `layerSpec`, `legacyTransform`, `explicitSpecs`): [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceSpec` | `undefined` \| `string` |
| `layerSpec` | `any` |
| `legacyTransform` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) |
| `explicitSpecs` | [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[] |

#### Returns

[`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[]

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[getLegacyDataSourceSpecifications](neuroglancer_layer.UserLayer.md#getlegacydatasourcespecifications)

#### Defined in

[src/neuroglancer/layer.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L337)

___

### getValueAt

▸ **getValueAt**(`position`, `pickState`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Float32Array` |
| `pickState` | [`PickState`](../interfaces/neuroglancer_layer.PickState.md) |

#### Returns

`any`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[getValueAt](neuroglancer_layer.UserLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/layer.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L417)

___

### handleAction

▸ **handleAction**(`_action`, `_context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `string` |
| `_context` | [`LayerActionContext`](neuroglancer_layer.LayerActionContext.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[handleAction](neuroglancer_layer.UserLayer.md#handleaction)

#### Defined in

[src/neuroglancer/layer.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L453)

___

### initializationDone

▸ **initializationDone**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[initializationDone](neuroglancer_layer.UserLayer.md#initializationdone)

#### Defined in

[src/neuroglancer/layer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L331)

___

### initializeSelectionState

▸ **initializeSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[initializeSelectionState](neuroglancer_layer.UserLayer.md#initializeselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L112)

___

### markLoading

▸ **markLoading**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[markLoading](neuroglancer_layer.UserLayer.md#markloading)

#### Defined in

[src/neuroglancer/layer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L308)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[refCountReachedZero](neuroglancer_layer.UserLayer.md#refcountreachedzero)

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

[UserLayer](neuroglancer_layer.UserLayer.md).[registerCancellable](neuroglancer_layer.UserLayer.md#registercancellable)

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

[UserLayer](neuroglancer_layer.UserLayer.md).[registerDisposer](neuroglancer_layer.UserLayer.md#registerdisposer)

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

[UserLayer](neuroglancer_layer.UserLayer.md).[registerEventListener](neuroglancer_layer.UserLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### removeRenderLayer

▸ **removeRenderLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[removeRenderLayer](neuroglancer_layer.UserLayer.md#removerenderlayer)

#### Defined in

[src/neuroglancer/layer.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L393)

___

### resetSelectionState

▸ **resetSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[resetSelectionState](neuroglancer_layer.UserLayer.md#resetselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L126)

___

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `any` |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[restoreState](neuroglancer_layer.UserLayer.md#restorestate)

#### Defined in

[src/neuroglancer/layer.ts:370](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L370)

___

### selectedValueFromJson

▸ **selectedValueFromJson**(`json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

`any`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[selectedValueFromJson](neuroglancer_layer.UserLayer.md#selectedvaluefromjson)

#### Defined in

[src/neuroglancer/layer.ts:459](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L459)

___

### selectedValueToJson

▸ **selectedValueToJson**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[selectedValueToJson](neuroglancer_layer.UserLayer.md#selectedvaluetojson)

#### Defined in

[src/neuroglancer/layer.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L455)

___

### selectionStateFromJson

▸ **selectionStateFromJson**(`state`, `json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |
| `json` | `any` |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[selectionStateFromJson](neuroglancer_layer.UserLayer.md#selectionstatefromjson)

#### Defined in

[src/neuroglancer/layer.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L132)

___

### selectionStateToJson

▸ **selectionStateToJson**(`state`, `forPython`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |
| `forPython` | `boolean` |

#### Returns

`any`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[selectionStateToJson](neuroglancer_layer.UserLayer.md#selectionstatetojson)

#### Defined in

[src/neuroglancer/layer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L169)

___

### setLayerPosition

▸ **setLayerPosition**(`modelTransform`, `layerPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/neuroglancer_render_coordinate_transform.RenderLayerTransform.md) |
| `layerPosition` | `Float32Array` |

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[setLayerPosition](neuroglancer_layer.UserLayer.md#setlayerposition)

#### Defined in

[src/neuroglancer/layer.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L463)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[toJSON](neuroglancer_layer.UserLayer.md#tojson)

#### Defined in

[src/neuroglancer/layer.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L439)

___

### transformPickedValue

▸ **transformPickedValue**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[transformPickedValue](neuroglancer_layer.UserLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/layer.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L435)

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

[UserLayer](neuroglancer_layer.UserLayer.md).[unregisterDisposer](neuroglancer_layer.UserLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateDataSubsourceActivations

▸ **updateDataSubsourceActivations**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](neuroglancer_layer.UserLayer.md).[updateDataSubsourceActivations](neuroglancer_layer.UserLayer.md#updatedatasubsourceactivations)

#### Defined in

[src/neuroglancer/layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L279)
