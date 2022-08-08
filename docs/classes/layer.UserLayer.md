[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / UserLayer

# Class: UserLayer

[layer](../modules/layer.md).UserLayer

## Hierarchy

- `RefCounted`

  ↳ **`UserLayer`**

  ↳↳ [`NewUserLayer`](layer.NewUserLayer.md)

  ↳↳ [`AutoUserLayer`](layer.AutoUserLayer.md)

  ↳↳ [`SingleMeshUserLayer`](single_mesh_user_layer.SingleMeshUserLayer.md)

## Table of contents

### Constructors

- [constructor](layer.UserLayer.md#constructor)

### Properties

- [dataSources](layer.UserLayer.md#datasources)
- [dataSourcesChanged](layer.UserLayer.md#datasourceschanged)
- [disposedStacks](layer.UserLayer.md#disposedstacks)
- [layersChanged](layer.UserLayer.md#layerschanged)
- [loadingCounter](layer.UserLayer.md#loadingcounter)
- [managedLayer](layer.UserLayer.md#managedlayer)
- [panels](layer.UserLayer.md#panels)
- [pick](layer.UserLayer.md#pick)
- [readyStateChanged](layer.UserLayer.md#readystatechanged)
- [refCount](layer.UserLayer.md#refcount)
- [renderLayers](layer.UserLayer.md#renderlayers)
- [selectionState](layer.UserLayer.md#selectionstate)
- [specificationChanged](layer.UserLayer.md#specificationchanged)
- [tabs](layer.UserLayer.md#tabs)
- [tool](layer.UserLayer.md#tool)
- [toolBinder](layer.UserLayer.md#toolbinder)
- [wasDisposed](layer.UserLayer.md#wasdisposed)
- [supportsPickOption](layer.UserLayer.md#supportspickoption)
- [type](layer.UserLayer.md#type)
- [typeAbbreviation](layer.UserLayer.md#typeabbreviation)

### Accessors

- [isReady](layer.UserLayer.md#isready)
- [localCoordinateSpace](layer.UserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](layer.UserLayer.md#localcoordinatespacecombiner)
- [localPosition](layer.UserLayer.md#localposition)
- [manager](layer.UserLayer.md#manager)
- [type](layer.UserLayer.md#type-1)

### Methods

- [activateDataSubsources](layer.UserLayer.md#activatedatasubsources)
- [addCoordinateSpace](layer.UserLayer.md#addcoordinatespace)
- [addDataSource](layer.UserLayer.md#adddatasource)
- [addRef](layer.UserLayer.md#addref)
- [addRenderLayer](layer.UserLayer.md#addrenderlayer)
- [canAddDataSource](layer.UserLayer.md#canadddatasource)
- [captureSelectionState](layer.UserLayer.md#captureselectionstate)
- [copySelectionState](layer.UserLayer.md#copyselectionstate)
- [decrementLoadingCounter](layer.UserLayer.md#decrementloadingcounter)
- [displaySelectionState](layer.UserLayer.md#displayselectionstate)
- [dispose](layer.UserLayer.md#dispose)
- [disposed](layer.UserLayer.md#disposed)
- [getDataSourceSpecifications](layer.UserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](layer.UserLayer.md#getlegacydatasourcespecifications)
- [getValueAt](layer.UserLayer.md#getvalueat)
- [handleAction](layer.UserLayer.md#handleaction)
- [initializationDone](layer.UserLayer.md#initializationdone)
- [initializeSelectionState](layer.UserLayer.md#initializeselectionstate)
- [markLoading](layer.UserLayer.md#markloading)
- [refCountReachedZero](layer.UserLayer.md#refcountreachedzero)
- [registerCancellable](layer.UserLayer.md#registercancellable)
- [registerDisposer](layer.UserLayer.md#registerdisposer)
- [registerEventListener](layer.UserLayer.md#registereventlistener)
- [removeRenderLayer](layer.UserLayer.md#removerenderlayer)
- [resetSelectionState](layer.UserLayer.md#resetselectionstate)
- [restoreState](layer.UserLayer.md#restorestate)
- [selectedValueFromJson](layer.UserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](layer.UserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](layer.UserLayer.md#selectionstatefromjson)
- [selectionStateToJson](layer.UserLayer.md#selectionstatetojson)
- [setLayerPosition](layer.UserLayer.md#setlayerposition)
- [toJSON](layer.UserLayer.md#tojson)
- [transformPickedValue](layer.UserLayer.md#transformpickedvalue)
- [unregisterDisposer](layer.UserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](layer.UserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new UserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L244)

## Properties

### dataSources

• **dataSources**: [`LayerDataSource`](layer_data_source.LayerDataSource.md)[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L238)

___

### dataSourcesChanged

• **dataSourcesChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L237)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### layersChanged

• **layersChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L223)

___

### loadingCounter

• `Private` **loadingCounter**: `number` = `1`

#### Defined in

[src/neuroglancer/layer.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L227)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](layer.ManagedUserLayer.md)

___

### panels

• **panels**: `UserLayerSidePanelsState`

#### Defined in

[src/neuroglancer/layer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L233)

___

### pick

• **pick**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L108)

___

### readyStateChanged

• **readyStateChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L224)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayers

• **renderLayers**: [`RenderLayer`](renderlayer.RenderLayer.md)[]

#### Defined in

[src/neuroglancer/layer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L226)

___

### selectionState

• **selectionState**: [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L110)

___

### specificationChanged

• **specificationChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L225)

___

### tabs

• **tabs**: `TabSpecification`

#### Defined in

[src/neuroglancer/layer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L232)

___

### tool

• **tool**: `SelectedLegacyTool`

#### Defined in

[src/neuroglancer/layer.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L234)

___

### toolBinder

• **toolBinder**: `LayerToolBinder`

#### Defined in

[src/neuroglancer/layer.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L235)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

___

### supportsPickOption

▪ `Static` **supportsPickOption**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L106)

___

### type

▪ `Static` **type**: `string`

#### Defined in

[src/neuroglancer/layer.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L99)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string`

#### Defined in

[src/neuroglancer/layer.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L100)

## Accessors

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L228)

___

### localCoordinateSpace

• `get` **localCoordinateSpace**(): [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Returns

[`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/layer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L95)

___

### localCoordinateSpaceCombiner

• `get` **localCoordinateSpaceCombiner**(): [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Returns

[`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L91)

___

### localPosition

• `get` **localPosition**(): [`Position`](navigation_state.Position.md)

#### Returns

[`Position`](navigation_state.Position.md)

#### Defined in

[src/neuroglancer/layer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L87)

___

### manager

• `get` **manager**(): [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L240)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

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

#### Defined in

[src/neuroglancer/layer.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L275)

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

#### Defined in

[src/neuroglancer/layer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L267)

___

### addRef

▸ **addRef**(): [`UserLayer`](layer.UserLayer.md)

#### Returns

[`UserLayer`](layer.UserLayer.md)

#### Inherited from

RefCounted.addRef

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

#### Defined in

[src/neuroglancer/layer.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L384)

___

### canAddDataSource

▸ **canAddDataSource**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

[src/neuroglancer/layer.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L203)

___

### decrementLoadingCounter

▸ `Private` **decrementLoadingCounter**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L302)

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

#### Defined in

[src/neuroglancer/layer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L161)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

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

#### Defined in

[src/neuroglancer/layer.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L453)

___

### initializationDone

▸ **initializationDone**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/layer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L308)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

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

RefCounted.registerCancellable

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

RefCounted.registerDisposer

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

RefCounted.registerEventListener

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

#### Defined in

[src/neuroglancer/layer.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L463)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

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

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### updateDataSubsourceActivations

▸ **updateDataSubsourceActivations**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L279)
