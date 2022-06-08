[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / NewUserLayer

# Class: NewUserLayer

[layer](../modules/layer.md).NewUserLayer

Special UserLayer type used when creating a new layer in the UI.

## Hierarchy

- [`UserLayer`](layer.UserLayer.md)

  ↳ **`NewUserLayer`**

## Table of contents

### Constructors

- [constructor](layer.NewUserLayer.md#constructor)

### Properties

- [dataSources](layer.NewUserLayer.md#datasources)
- [dataSourcesChanged](layer.NewUserLayer.md#datasourceschanged)
- [detectedLayerConstructor](layer.NewUserLayer.md#detectedlayerconstructor)
- [disposedStacks](layer.NewUserLayer.md#disposedstacks)
- [layersChanged](layer.NewUserLayer.md#layerschanged)
- [managedLayer](layer.NewUserLayer.md#managedlayer)
- [panels](layer.NewUserLayer.md#panels)
- [pick](layer.NewUserLayer.md#pick)
- [readyStateChanged](layer.NewUserLayer.md#readystatechanged)
- [refCount](layer.NewUserLayer.md#refcount)
- [renderLayers](layer.NewUserLayer.md#renderlayers)
- [selectionState](layer.NewUserLayer.md#selectionstate)
- [specificationChanged](layer.NewUserLayer.md#specificationchanged)
- [tabs](layer.NewUserLayer.md#tabs)
- [tool](layer.NewUserLayer.md#tool)
- [toolBinder](layer.NewUserLayer.md#toolbinder)
- [wasDisposed](layer.NewUserLayer.md#wasdisposed)
- [supportsPickOption](layer.NewUserLayer.md#supportspickoption)
- [type](layer.NewUserLayer.md#type)
- [typeAbbreviation](layer.NewUserLayer.md#typeabbreviation)

### Accessors

- [isReady](layer.NewUserLayer.md#isready)
- [localCoordinateSpace](layer.NewUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](layer.NewUserLayer.md#localcoordinatespacecombiner)
- [localPosition](layer.NewUserLayer.md#localposition)
- [manager](layer.NewUserLayer.md#manager)
- [type](layer.NewUserLayer.md#type-1)

### Methods

- [activateDataSubsources](layer.NewUserLayer.md#activatedatasubsources)
- [addCoordinateSpace](layer.NewUserLayer.md#addcoordinatespace)
- [addDataSource](layer.NewUserLayer.md#adddatasource)
- [addRef](layer.NewUserLayer.md#addref)
- [addRenderLayer](layer.NewUserLayer.md#addrenderlayer)
- [canAddDataSource](layer.NewUserLayer.md#canadddatasource)
- [captureSelectionState](layer.NewUserLayer.md#captureselectionstate)
- [copySelectionState](layer.NewUserLayer.md#copyselectionstate)
- [displaySelectionState](layer.NewUserLayer.md#displayselectionstate)
- [dispose](layer.NewUserLayer.md#dispose)
- [disposed](layer.NewUserLayer.md#disposed)
- [getDataSourceSpecifications](layer.NewUserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](layer.NewUserLayer.md#getlegacydatasourcespecifications)
- [getValueAt](layer.NewUserLayer.md#getvalueat)
- [handleAction](layer.NewUserLayer.md#handleaction)
- [initializationDone](layer.NewUserLayer.md#initializationdone)
- [initializeSelectionState](layer.NewUserLayer.md#initializeselectionstate)
- [markLoading](layer.NewUserLayer.md#markloading)
- [refCountReachedZero](layer.NewUserLayer.md#refcountreachedzero)
- [registerCancellable](layer.NewUserLayer.md#registercancellable)
- [registerDisposer](layer.NewUserLayer.md#registerdisposer)
- [registerEventListener](layer.NewUserLayer.md#registereventlistener)
- [removeRenderLayer](layer.NewUserLayer.md#removerenderlayer)
- [resetSelectionState](layer.NewUserLayer.md#resetselectionstate)
- [restoreState](layer.NewUserLayer.md#restorestate)
- [selectedValueFromJson](layer.NewUserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](layer.NewUserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](layer.NewUserLayer.md#selectionstatefromjson)
- [selectionStateToJson](layer.NewUserLayer.md#selectionstatetojson)
- [setLayerPosition](layer.NewUserLayer.md#setlayerposition)
- [toJSON](layer.NewUserLayer.md#tojson)
- [transformPickedValue](layer.NewUserLayer.md#transformpickedvalue)
- [unregisterDisposer](layer.NewUserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](layer.NewUserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new NewUserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Inherited from

[UserLayer](layer.UserLayer.md).[constructor](layer.UserLayer.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L244)

## Properties

### dataSources

• **dataSources**: [`LayerDataSource`](layer_data_source.LayerDataSource.md)[] = `[]`

#### Inherited from

[UserLayer](layer.UserLayer.md).[dataSources](layer.UserLayer.md#datasources)

#### Defined in

[src/neuroglancer/layer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L238)

___

### dataSourcesChanged

• **dataSourcesChanged**: `NullarySignal`

#### Inherited from

[UserLayer](layer.UserLayer.md).[dataSourcesChanged](layer.UserLayer.md#datasourceschanged)

#### Defined in

[src/neuroglancer/layer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L237)

___

### detectedLayerConstructor

• **detectedLayerConstructor**: `undefined` \| [`UserLayerConstructor`](../modules/layer.md#userlayerconstructor)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:2098](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L2098)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[UserLayer](layer.UserLayer.md).[disposedStacks](layer.UserLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### layersChanged

• **layersChanged**: `NullarySignal`

#### Inherited from

[UserLayer](layer.UserLayer.md).[layersChanged](layer.UserLayer.md#layerschanged)

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L223)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Inherited from

[UserLayer](layer.UserLayer.md).[managedLayer](layer.UserLayer.md#managedlayer)

___

### panels

• **panels**: `UserLayerSidePanelsState`

#### Inherited from

[UserLayer](layer.UserLayer.md).[panels](layer.UserLayer.md#panels)

#### Defined in

[src/neuroglancer/layer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L233)

___

### pick

• **pick**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Inherited from

[UserLayer](layer.UserLayer.md).[pick](layer.UserLayer.md#pick)

#### Defined in

[src/neuroglancer/layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L108)

___

### readyStateChanged

• **readyStateChanged**: `NullarySignal`

#### Inherited from

[UserLayer](layer.UserLayer.md).[readyStateChanged](layer.UserLayer.md#readystatechanged)

#### Defined in

[src/neuroglancer/layer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L224)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[UserLayer](layer.UserLayer.md).[refCount](layer.UserLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayers

• **renderLayers**: [`RenderLayer`](renderlayer.RenderLayer.md)[]

#### Inherited from

[UserLayer](layer.UserLayer.md).[renderLayers](layer.UserLayer.md#renderlayers)

#### Defined in

[src/neuroglancer/layer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L226)

___

### selectionState

• **selectionState**: [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md)

#### Inherited from

[UserLayer](layer.UserLayer.md).[selectionState](layer.UserLayer.md#selectionstate)

#### Defined in

[src/neuroglancer/layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L110)

___

### specificationChanged

• **specificationChanged**: `NullarySignal`

#### Inherited from

[UserLayer](layer.UserLayer.md).[specificationChanged](layer.UserLayer.md#specificationchanged)

#### Defined in

[src/neuroglancer/layer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L225)

___

### tabs

• **tabs**: `TabSpecification`

#### Inherited from

[UserLayer](layer.UserLayer.md).[tabs](layer.UserLayer.md#tabs)

#### Defined in

[src/neuroglancer/layer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L232)

___

### tool

• **tool**: `SelectedLegacyTool`

#### Inherited from

[UserLayer](layer.UserLayer.md).[tool](layer.UserLayer.md#tool)

#### Defined in

[src/neuroglancer/layer.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L234)

___

### toolBinder

• **toolBinder**: `LayerToolBinder`

#### Inherited from

[UserLayer](layer.UserLayer.md).[toolBinder](layer.UserLayer.md#toolbinder)

#### Defined in

[src/neuroglancer/layer.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L235)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[UserLayer](layer.UserLayer.md).[wasDisposed](layer.UserLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

___

### supportsPickOption

▪ `Static` **supportsPickOption**: `boolean` = `false`

#### Inherited from

[UserLayer](layer.UserLayer.md).[supportsPickOption](layer.UserLayer.md#supportspickoption)

#### Defined in

[src/neuroglancer/layer.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L106)

___

### type

▪ `Static` **type**: `string` = `'new'`

#### Overrides

[UserLayer](layer.UserLayer.md).[type](layer.UserLayer.md#type)

#### Defined in

[src/neuroglancer/layer.ts:2096](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L2096)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string` = `'new'`

#### Overrides

[UserLayer](layer.UserLayer.md).[typeAbbreviation](layer.UserLayer.md#typeabbreviation)

#### Defined in

[src/neuroglancer/layer.ts:2097](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L2097)

## Accessors

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UserLayer.isReady

#### Defined in

[src/neuroglancer/layer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L228)

___

### localCoordinateSpace

• `get` **localCoordinateSpace**(): [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Returns

[`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Inherited from

UserLayer.localCoordinateSpace

#### Defined in

[src/neuroglancer/layer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L95)

___

### localCoordinateSpaceCombiner

• `get` **localCoordinateSpaceCombiner**(): [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Returns

[`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Inherited from

UserLayer.localCoordinateSpaceCombiner

#### Defined in

[src/neuroglancer/layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L91)

___

### localPosition

• `get` **localPosition**(): [`Position`](navigation_state.Position.md)

#### Returns

[`Position`](navigation_state.Position.md)

#### Inherited from

UserLayer.localPosition

#### Defined in

[src/neuroglancer/layer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L87)

___

### manager

• `get` **manager**(): [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](layer.LayerListSpecification.md)

#### Inherited from

UserLayer.manager

#### Defined in

[src/neuroglancer/layer.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L240)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

UserLayer.type

#### Defined in

[src/neuroglancer/layer.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L102)

## Methods

### activateDataSubsources

▸ **activateDataSubsources**(`subsources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subsources` | `Iterable`<[`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md)\> |

#### Returns

`void`

#### Overrides

[UserLayer](layer.UserLayer.md).[activateDataSubsources](layer.UserLayer.md#activatedatasubsources)

#### Defined in

[src/neuroglancer/layer.ts:2100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L2100)

___

### addCoordinateSpace

▸ **addCoordinateSpace**(`coordinateSpace`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[addCoordinateSpace](layer.UserLayer.md#addcoordinatespace)

#### Defined in

[src/neuroglancer/layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L322)

___

### addDataSource

▸ **addDataSource**(`spec`): [`LayerDataSource`](layer_data_source.LayerDataSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `undefined` \| `DataSourceSpecification` |

#### Returns

[`LayerDataSource`](layer_data_source.LayerDataSource.md)

#### Inherited from

[UserLayer](layer.UserLayer.md).[addDataSource](layer.UserLayer.md#adddatasource)

#### Defined in

[src/neuroglancer/layer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L267)

___

### addRef

▸ **addRef**(): [`NewUserLayer`](layer.NewUserLayer.md)

#### Returns

[`NewUserLayer`](layer.NewUserLayer.md)

#### Inherited from

[UserLayer](layer.UserLayer.md).[addRef](layer.UserLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### addRenderLayer

▸ **addRenderLayer**(`layer`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RenderLayer`](renderlayer.RenderLayer.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[addRenderLayer](layer.UserLayer.md#addrenderlayer)

#### Defined in

[src/neuroglancer/layer.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L384)

___

### canAddDataSource

▸ **canAddDataSource**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UserLayer](layer.UserLayer.md).[canAddDataSource](layer.UserLayer.md#canadddatasource)

#### Defined in

[src/neuroglancer/layer.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L263)

___

### captureSelectionState

▸ **captureSelectionState**(`state`, `mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |
| `mouseState` | [`MouseSelectionState`](layer.MouseSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[captureSelectionState](layer.UserLayer.md#captureselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L190)

___

### copySelectionState

▸ **copySelectionState**(`dest`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |
| `source` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[copySelectionState](layer.UserLayer.md#copyselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L203)

___

### displaySelectionState

▸ **displaySelectionState**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |
| `parent` | `HTMLElement` |
| `context` | `DependentViewContext` |

#### Returns

`boolean`

#### Inherited from

[UserLayer](layer.UserLayer.md).[displaySelectionState](layer.UserLayer.md#displayselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L161)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[dispose](layer.UserLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[disposed](layer.UserLayer.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L406)

___

### getDataSourceSpecifications

▸ **getDataSourceSpecifications**(`layerSpec`): `DataSourceSpecification`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSpec` | `any` |

#### Returns

`DataSourceSpecification`[]

#### Inherited from

[UserLayer](layer.UserLayer.md).[getDataSourceSpecifications](layer.UserLayer.md#getdatasourcespecifications)

#### Defined in

[src/neuroglancer/layer.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L347)

___

### getLegacyDataSourceSpecifications

▸ **getLegacyDataSourceSpecifications**(`sourceSpec`, `layerSpec`, `legacyTransform`, `explicitSpecs`): `DataSourceSpecification`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceSpec` | `undefined` \| `string` |
| `layerSpec` | `any` |
| `legacyTransform` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) |
| `explicitSpecs` | `DataSourceSpecification`[] |

#### Returns

`DataSourceSpecification`[]

#### Inherited from

[UserLayer](layer.UserLayer.md).[getLegacyDataSourceSpecifications](layer.UserLayer.md#getlegacydatasourcespecifications)

#### Defined in

[src/neuroglancer/layer.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L337)

___

### getValueAt

▸ **getValueAt**(`position`, `pickState`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Float32Array` |
| `pickState` | [`PickState`](../interfaces/layer.PickState.md) |

#### Returns

`any`

#### Inherited from

[UserLayer](layer.UserLayer.md).[getValueAt](layer.UserLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/layer.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L417)

___

### handleAction

▸ **handleAction**(`_action`, `_context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `string` |
| `_context` | [`LayerActionContext`](layer.LayerActionContext.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[handleAction](layer.UserLayer.md#handleaction)

#### Defined in

[src/neuroglancer/layer.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L453)

___

### initializationDone

▸ **initializationDone**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[initializationDone](layer.UserLayer.md#initializationdone)

#### Defined in

[src/neuroglancer/layer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L331)

___

### initializeSelectionState

▸ **initializeSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[initializeSelectionState](layer.UserLayer.md#initializeselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L112)

___

### markLoading

▸ **markLoading**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[markLoading](layer.UserLayer.md#markloading)

#### Defined in

[src/neuroglancer/layer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L308)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[refCountReachedZero](layer.UserLayer.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

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

[UserLayer](layer.UserLayer.md).[registerCancellable](layer.UserLayer.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[UserLayer](layer.UserLayer.md).[registerDisposer](layer.UserLayer.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[registerEventListener](layer.UserLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### removeRenderLayer

▸ **removeRenderLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RenderLayer`](renderlayer.RenderLayer.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[removeRenderLayer](layer.UserLayer.md#removerenderlayer)

#### Defined in

[src/neuroglancer/layer.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L393)

___

### resetSelectionState

▸ **resetSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[resetSelectionState](layer.UserLayer.md#resetselectionstate)

#### Defined in

[src/neuroglancer/layer.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L126)

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

[UserLayer](layer.UserLayer.md).[restoreState](layer.UserLayer.md#restorestate)

#### Defined in

[src/neuroglancer/layer.ts:370](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L370)

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

[UserLayer](layer.UserLayer.md).[selectedValueFromJson](layer.UserLayer.md#selectedvaluefromjson)

#### Defined in

[src/neuroglancer/layer.ts:459](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L459)

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

[UserLayer](layer.UserLayer.md).[selectedValueToJson](layer.UserLayer.md#selectedvaluetojson)

#### Defined in

[src/neuroglancer/layer.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L455)

___

### selectionStateFromJson

▸ **selectionStateFromJson**(`state`, `json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |
| `json` | `any` |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[selectionStateFromJson](layer.UserLayer.md#selectionstatefromjson)

#### Defined in

[src/neuroglancer/layer.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L132)

___

### selectionStateToJson

▸ **selectionStateToJson**(`state`, `forPython`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |
| `forPython` | `boolean` |

#### Returns

`any`

#### Inherited from

[UserLayer](layer.UserLayer.md).[selectionStateToJson](layer.UserLayer.md#selectionstatetojson)

#### Defined in

[src/neuroglancer/layer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L169)

___

### setLayerPosition

▸ **setLayerPosition**(`modelTransform`, `layerPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelTransform` | [`RenderLayerTransform`](../interfaces/render_coordinate_transform.RenderLayerTransform.md) |
| `layerPosition` | `Float32Array` |

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[setLayerPosition](layer.UserLayer.md#setlayerposition)

#### Defined in

[src/neuroglancer/layer.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L463)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[UserLayer](layer.UserLayer.md).[toJSON](layer.UserLayer.md#tojson)

#### Defined in

[src/neuroglancer/layer.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L439)

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

[UserLayer](layer.UserLayer.md).[transformPickedValue](layer.UserLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/layer.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L435)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[UserLayer](layer.UserLayer.md).[unregisterDisposer](layer.UserLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### updateDataSubsourceActivations

▸ **updateDataSubsourceActivations**(): `void`

#### Returns

`void`

#### Inherited from

[UserLayer](layer.UserLayer.md).[updateDataSubsourceActivations](layer.UserLayer.md#updatedatasubsourceactivations)

#### Defined in

[src/neuroglancer/layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L279)
