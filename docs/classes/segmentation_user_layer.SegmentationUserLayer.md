[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / SegmentationUserLayer

# Class: SegmentationUserLayer

[segmentation_user_layer](../modules/segmentation_user_layer.md).SegmentationUserLayer

## Hierarchy

- `Base`

  ↳ **`SegmentationUserLayer`**

## Table of contents

### Constructors

- [constructor](segmentation_user_layer.SegmentationUserLayer.md#constructor)

### Properties

- [anchorSegment](segmentation_user_layer.SegmentationUserLayer.md#anchorsegment)
- [annotationColorPicker](segmentation_user_layer.SegmentationUserLayer.md#annotationcolorpicker)
- [annotationCrossSectionRenderScaleHistogram](segmentation_user_layer.SegmentationUserLayer.md#annotationcrosssectionrenderscalehistogram)
- [annotationCrossSectionRenderScaleTarget](segmentation_user_layer.SegmentationUserLayer.md#annotationcrosssectionrenderscaletarget)
- [annotationDisplayState](segmentation_user_layer.SegmentationUserLayer.md#annotationdisplaystate)
- [annotationProjectionRenderScaleHistogram](segmentation_user_layer.SegmentationUserLayer.md#annotationprojectionrenderscalehistogram)
- [annotationProjectionRenderScaleTarget](segmentation_user_layer.SegmentationUserLayer.md#annotationprojectionrenderscaletarget)
- [annotationStates](segmentation_user_layer.SegmentationUserLayer.md#annotationstates)
- [dataSources](segmentation_user_layer.SegmentationUserLayer.md#datasources)
- [dataSourcesChanged](segmentation_user_layer.SegmentationUserLayer.md#datasourceschanged)
- [displayState](segmentation_user_layer.SegmentationUserLayer.md#displaystate)
- [disposedStacks](segmentation_user_layer.SegmentationUserLayer.md#disposedstacks)
- [graphConnection](segmentation_user_layer.SegmentationUserLayer.md#graphconnection)
- [has2dLayer](segmentation_user_layer.SegmentationUserLayer.md#has2dlayer)
- [has3dLayer](segmentation_user_layer.SegmentationUserLayer.md#has3dlayer)
- [hasSkeletonsLayer](segmentation_user_layer.SegmentationUserLayer.md#hasskeletonslayer)
- [layersChanged](segmentation_user_layer.SegmentationUserLayer.md#layerschanged)
- [managedLayer](segmentation_user_layer.SegmentationUserLayer.md#managedlayer)
- [panels](segmentation_user_layer.SegmentationUserLayer.md#panels)
- [pick](segmentation_user_layer.SegmentationUserLayer.md#pick)
- [readyStateChanged](segmentation_user_layer.SegmentationUserLayer.md#readystatechanged)
- [refCount](segmentation_user_layer.SegmentationUserLayer.md#refcount)
- [renderLayers](segmentation_user_layer.SegmentationUserLayer.md#renderlayers)
- [segmentQueryFocusTime](segmentation_user_layer.SegmentationUserLayer.md#segmentqueryfocustime)
- [selectionState](segmentation_user_layer.SegmentationUserLayer.md#selectionstate)
- [sliceViewRenderScaleHistogram](segmentation_user_layer.SegmentationUserLayer.md#sliceviewrenderscalehistogram)
- [sliceViewRenderScaleTarget](segmentation_user_layer.SegmentationUserLayer.md#sliceviewrenderscaletarget)
- [specificationChanged](segmentation_user_layer.SegmentationUserLayer.md#specificationchanged)
- [tabs](segmentation_user_layer.SegmentationUserLayer.md#tabs)
- [tool](segmentation_user_layer.SegmentationUserLayer.md#tool)
- [toolBinder](segmentation_user_layer.SegmentationUserLayer.md#toolbinder)
- [wasDisposed](segmentation_user_layer.SegmentationUserLayer.md#wasdisposed)
- [supportsPickOption](segmentation_user_layer.SegmentationUserLayer.md#supportspickoption)
- [type](segmentation_user_layer.SegmentationUserLayer.md#type)
- [typeAbbreviation](segmentation_user_layer.SegmentationUserLayer.md#typeabbreviation)

### Accessors

- [isReady](segmentation_user_layer.SegmentationUserLayer.md#isready)
- [localCoordinateSpace](segmentation_user_layer.SegmentationUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](segmentation_user_layer.SegmentationUserLayer.md#localcoordinatespacecombiner)
- [localPosition](segmentation_user_layer.SegmentationUserLayer.md#localposition)
- [manager](segmentation_user_layer.SegmentationUserLayer.md#manager)
- [type](segmentation_user_layer.SegmentationUserLayer.md#type-1)
- [volumeOptions](segmentation_user_layer.SegmentationUserLayer.md#volumeoptions)

### Methods

- [activateDataSubsources](segmentation_user_layer.SegmentationUserLayer.md#activatedatasubsources)
- [addAnnotationLayerState](segmentation_user_layer.SegmentationUserLayer.md#addannotationlayerstate)
- [addCategoryText](segmentation_user_layer.SegmentationUserLayer.md#addcategorytext)
- [addCoordinateSpace](segmentation_user_layer.SegmentationUserLayer.md#addcoordinatespace)
- [addDataSource](segmentation_user_layer.SegmentationUserLayer.md#adddatasource)
- [addLocalAnnotations](segmentation_user_layer.SegmentationUserLayer.md#addlocalannotations)
- [addRef](segmentation_user_layer.SegmentationUserLayer.md#addref)
- [addRenderLayer](segmentation_user_layer.SegmentationUserLayer.md#addrenderlayer)
- [addStaticAnnotations](segmentation_user_layer.SegmentationUserLayer.md#addstaticannotations)
- [addText](segmentation_user_layer.SegmentationUserLayer.md#addtext)
- [bindSegmentListWidth](segmentation_user_layer.SegmentationUserLayer.md#bindsegmentlistwidth)
- [canAddDataSource](segmentation_user_layer.SegmentationUserLayer.md#canadddatasource)
- [captureSelectionState](segmentation_user_layer.SegmentationUserLayer.md#captureselectionstate)
- [copySelectionState](segmentation_user_layer.SegmentationUserLayer.md#copyselectionstate)
- [displayAnnotationState](segmentation_user_layer.SegmentationUserLayer.md#displayannotationstate)
- [displaySegmentationSelection](segmentation_user_layer.SegmentationUserLayer.md#displaysegmentationselection)
- [displaySelectionState](segmentation_user_layer.SegmentationUserLayer.md#displayselectionstate)
- [dispose](segmentation_user_layer.SegmentationUserLayer.md#dispose)
- [disposed](segmentation_user_layer.SegmentationUserLayer.md#disposed)
- [filterBySegmentLabel](segmentation_user_layer.SegmentationUserLayer.md#filterbysegmentlabel)
- [filterSegments](segmentation_user_layer.SegmentationUserLayer.md#filtersegments)
- [getDataSourceSpecifications](segmentation_user_layer.SegmentationUserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](segmentation_user_layer.SegmentationUserLayer.md#getlegacydatasourcespecifications)
- [getValueAt](segmentation_user_layer.SegmentationUserLayer.md#getvalueat)
- [handleAction](segmentation_user_layer.SegmentationUserLayer.md#handleaction)
- [initializationDone](segmentation_user_layer.SegmentationUserLayer.md#initializationdone)
- [initializeAnnotationLayerViewTab](segmentation_user_layer.SegmentationUserLayer.md#initializeannotationlayerviewtab)
- [initializeSelectionState](segmentation_user_layer.SegmentationUserLayer.md#initializeselectionstate)
- [markLoading](segmentation_user_layer.SegmentationUserLayer.md#markloading)
- [moveToSegment](segmentation_user_layer.SegmentationUserLayer.md#movetosegment)
- [refCountReachedZero](segmentation_user_layer.SegmentationUserLayer.md#refcountreachedzero)
- [registerCancellable](segmentation_user_layer.SegmentationUserLayer.md#registercancellable)
- [registerDisposer](segmentation_user_layer.SegmentationUserLayer.md#registerdisposer)
- [registerEventListener](segmentation_user_layer.SegmentationUserLayer.md#registereventlistener)
- [removeRenderLayer](segmentation_user_layer.SegmentationUserLayer.md#removerenderlayer)
- [resetSelectionState](segmentation_user_layer.SegmentationUserLayer.md#resetselectionstate)
- [restoreState](segmentation_user_layer.SegmentationUserLayer.md#restorestate)
- [selectAnnotation](segmentation_user_layer.SegmentationUserLayer.md#selectannotation)
- [selectSegment](segmentation_user_layer.SegmentationUserLayer.md#selectsegment)
- [selectedValueFromJson](segmentation_user_layer.SegmentationUserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](segmentation_user_layer.SegmentationUserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](segmentation_user_layer.SegmentationUserLayer.md#selectionstatefromjson)
- [selectionStateToJson](segmentation_user_layer.SegmentationUserLayer.md#selectionstatetojson)
- [setAnnotationColorPicker](segmentation_user_layer.SegmentationUserLayer.md#setannotationcolorpicker)
- [setLayerPosition](segmentation_user_layer.SegmentationUserLayer.md#setlayerposition)
- [toJSON](segmentation_user_layer.SegmentationUserLayer.md#tojson)
- [transformPickedValue](segmentation_user_layer.SegmentationUserLayer.md#transformpickedvalue)
- [unregisterDisposer](segmentation_user_layer.SegmentationUserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](segmentation_user_layer.SegmentationUserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new SegmentationUserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Overrides

Base.constructor

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L372)

## Properties

### anchorSegment

• **anchorSegment**: [`TrackableValue`](trackable_value.TrackableValue.md)<`undefined` \| `Uint64`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:369](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L369)

___

### annotationColorPicker

• **annotationColorPicker**: `undefined` \| `AnnotationColorWidget` = `undefined`

#### Inherited from

Base.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:3105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3105)

___

### annotationCrossSectionRenderScaleHistogram

• **annotationCrossSectionRenderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

Base.annotationCrossSectionRenderScaleHistogram

#### Defined in

[src/neuroglancer/ui/annotations.ts:3101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3101)

___

### annotationCrossSectionRenderScaleTarget

• **annotationCrossSectionRenderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

Base.annotationCrossSectionRenderScaleTarget

#### Defined in

[src/neuroglancer/ui/annotations.ts:3102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3102)

___

### annotationDisplayState

• **annotationDisplayState**: `AnnotationDisplayState`

#### Inherited from

Base.annotationDisplayState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3100)

___

### annotationProjectionRenderScaleHistogram

• **annotationProjectionRenderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

Base.annotationProjectionRenderScaleHistogram

#### Defined in

[src/neuroglancer/ui/annotations.ts:3103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3103)

___

### annotationProjectionRenderScaleTarget

• **annotationProjectionRenderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

Base.annotationProjectionRenderScaleTarget

#### Defined in

[src/neuroglancer/ui/annotations.ts:3104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3104)

___

### annotationStates

• **annotationStates**: `MergedAnnotationStates`

#### Inherited from

Base.annotationStates

#### Defined in

[src/neuroglancer/ui/annotations.ts:3099](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3099)

___

### dataSources

• **dataSources**: [`LayerDataSource`](layer_data_source.LayerDataSource.md)[] = `[]`

#### Inherited from

Base.dataSources

#### Defined in

[src/neuroglancer/layer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L238)

___

### dataSourcesChanged

• **dataSourcesChanged**: `NullarySignal`

#### Inherited from

Base.dataSourcesChanged

#### Defined in

[src/neuroglancer/layer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L237)

___

### displayState

• **displayState**: `SegmentationUserLayerDisplayState`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L367)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

Base.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### graphConnection

• **graphConnection**: `undefined` \| `SegmentationGraphSourceConnection`<`SegmentationGraphSource`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L338)

___

### has2dLayer

• `Readonly` **has2dLayer**: `CachedLazyDerivedWatchableValue`<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:409](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L409)

___

### has3dLayer

• `Readonly` **has3dLayer**: `CachedLazyDerivedWatchableValue`<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:413](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L413)

___

### hasSkeletonsLayer

• `Readonly` **hasSkeletonsLayer**: `CachedLazyDerivedWatchableValue`<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:421](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L421)

___

### layersChanged

• **layersChanged**: `NullarySignal`

#### Inherited from

Base.layersChanged

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L223)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Inherited from

Base.managedLayer

___

### panels

• **panels**: `UserLayerSidePanelsState`

#### Inherited from

Base.panels

#### Defined in

[src/neuroglancer/layer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L233)

___

### pick

• **pick**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Inherited from

Base.pick

#### Defined in

[src/neuroglancer/layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L108)

___

### readyStateChanged

• **readyStateChanged**: `NullarySignal`

#### Inherited from

Base.readyStateChanged

#### Defined in

[src/neuroglancer/layer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L224)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

Base.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayers

• **renderLayers**: [`RenderLayer`](renderlayer.RenderLayer.md)[]

#### Inherited from

Base.renderLayers

#### Defined in

[src/neuroglancer/layer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L226)

___

### segmentQueryFocusTime

• **segmentQueryFocusTime**: [`WatchableValue`](trackable_value.WatchableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L344)

___

### selectionState

• **selectionState**: [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md)

#### Inherited from

Base.selectionState

#### Defined in

[src/neuroglancer/layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L110)

___

### sliceViewRenderScaleHistogram

• **sliceViewRenderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L335)

___

### sliceViewRenderScaleTarget

• **sliceViewRenderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L336)

___

### specificationChanged

• **specificationChanged**: `NullarySignal`

#### Inherited from

Base.specificationChanged

#### Defined in

[src/neuroglancer/layer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L225)

___

### tabs

• **tabs**: `TabSpecification`

#### Inherited from

Base.tabs

#### Defined in

[src/neuroglancer/layer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L232)

___

### tool

• **tool**: `SelectedLegacyTool`

#### Inherited from

Base.tool

#### Defined in

[src/neuroglancer/layer.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L234)

___

### toolBinder

• **toolBinder**: `LayerToolBinder`

#### Inherited from

Base.toolBinder

#### Defined in

[src/neuroglancer/layer.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L235)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

Base.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

___

### supportsPickOption

▪ `Static` **supportsPickOption**: `boolean` = `true`

#### Overrides

Base.supportsPickOption

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:786](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L786)

___

### type

▪ `Static` **type**: `string` = `'segmentation'`

#### Overrides

Base.type

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:784](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L784)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string` = `'seg'`

#### Overrides

Base.typeAbbreviation

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:785](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L785)

## Accessors

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Base.isReady

#### Defined in

[src/neuroglancer/layer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L228)

___

### localCoordinateSpace

• `get` **localCoordinateSpace**(): [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Returns

[`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Inherited from

Base.localCoordinateSpace

#### Defined in

[src/neuroglancer/layer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L95)

___

### localCoordinateSpaceCombiner

• `get` **localCoordinateSpaceCombiner**(): [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Returns

[`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Inherited from

Base.localCoordinateSpaceCombiner

#### Defined in

[src/neuroglancer/layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L91)

___

### localPosition

• `get` **localPosition**(): [`Position`](navigation_state.Position.md)

#### Returns

[`Position`](navigation_state.Position.md)

#### Inherited from

Base.localPosition

#### Defined in

[src/neuroglancer/layer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L87)

___

### manager

• `get` **manager**(): [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](layer.LayerListSpecification.md)

#### Inherited from

Base.manager

#### Defined in

[src/neuroglancer/layer.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L240)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Base.type

#### Defined in

[src/neuroglancer/layer.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L102)

___

### volumeOptions

• `get` **volumeOptions**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `volumeType` | `VolumeType` |

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:405](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L405)

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

Base.activateDataSubsources

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L425)

___

### addAnnotationLayerState

▸ **addAnnotationLayerState**(`state`, `loadedSubsource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `AnnotationLayerState` |
| `loadedSubsource` | [`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md) |

#### Returns

`void`

#### Inherited from

Base.addAnnotationLayerState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3609)

___

### addCategoryText

▸ **addCategoryText**(`parent`, `select`, `annotationLayer`, `reference`, `annotation`): `Promise`<`void`\>

Adds the category text to the annotation on selecting a new category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `HTMLElement` | parent HTML Element |
| `select` | `HTMLSelectElement` | select dropdown |
| `annotationLayer` | `AnnotationLayerState` | annotation layer in which annotation is present |
| `reference` | `AnnotationReference` | annotation reference |
| `annotation` | `Annotation` | annotation value |

#### Returns

`Promise`<`void`\>

void

#### Inherited from

Base.addCategoryText

#### Defined in

[src/neuroglancer/ui/annotations.ts:3232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3232)

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

Base.addCoordinateSpace

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

Base.addDataSource

#### Defined in

[src/neuroglancer/layer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L267)

___

### addLocalAnnotations

▸ **addLocalAnnotations**(`loadedSubsource`, `source`, `role`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loadedSubsource` | [`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md) |
| `source` | `AnnotationSource` |
| `role` | [`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md) |

#### Returns

`void`

#### Inherited from

Base.addLocalAnnotations

#### Defined in

[src/neuroglancer/ui/annotations.ts:3582](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3582)

___

### addRef

▸ **addRef**(): [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md)

#### Returns

[`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md)

#### Inherited from

Base.addRef

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

Base.addRenderLayer

#### Defined in

[src/neuroglancer/layer.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L384)

___

### addStaticAnnotations

▸ **addStaticAnnotations**(`loadedSubsource`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loadedSubsource` | [`LoadedDataSubsource`](layer_data_source.LoadedDataSubsource.md) |

#### Returns

`boolean`

#### Inherited from

Base.addStaticAnnotations

#### Defined in

[src/neuroglancer/ui/annotations.ts:3598](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3598)

___

### addText

▸ **addText**(`parent`, `select`, `annotationLayer`, `reference`, `annotation`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLElement` |
| `select` | `HTMLSelectElement` |
| `annotationLayer` | `AnnotationLayerState` |
| `reference` | `AnnotationReference` |
| `annotation` | `Annotation` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Base.addText

#### Defined in

[src/neuroglancer/ui/annotations.ts:3198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3198)

___

### bindSegmentListWidth

▸ **bindSegmentListWidth**(`element`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L340)

___

### canAddDataSource

▸ **canAddDataSource**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Base.canAddDataSource

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

Base.captureSelectionState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3181)

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

Base.copySelectionState

#### Defined in

[src/neuroglancer/layer.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L203)

___

### displayAnnotationState

▸ **displayAnnotationState**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |
| `parent` | `HTMLElement` |
| `context` | `RefCounted` |

#### Returns

`boolean`

#### Inherited from

Base.displayAnnotationState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3258)

___

### displaySegmentationSelection

▸ `Private` **displaySegmentationSelection**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/layer.UserLayerSelectionState.md) |
| `parent` | `HTMLElement` |
| `context` | `DependentViewContext` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:697](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L697)

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

#### Overrides

Base.displaySelectionState

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L765)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

Base.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

Base.disposed

#### Defined in

[src/neuroglancer/layer.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L406)

___

### filterBySegmentLabel

▸ **filterBySegmentLabel**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Uint64` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L353)

___

### filterSegments

▸ **filterSegments**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L360)

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

Base.getDataSourceSpecifications

#### Defined in

[src/neuroglancer/layer.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L347)

___

### getLegacyDataSourceSpecifications

▸ **getLegacyDataSourceSpecifications**(`sourceSpec`, `layerSpec`, `legacyTransform`, `explicitSpecs`): `DataSourceSpecification`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceSpec` | `any` |
| `layerSpec` | `any` |
| `legacyTransform` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) |
| `explicitSpecs` | `DataSourceSpecification`[] |

#### Returns

`DataSourceSpecification`[]

#### Overrides

Base.getLegacyDataSourceSpecifications

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:517](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L517)

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

Base.getValueAt

#### Defined in

[src/neuroglancer/layer.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L417)

___

### handleAction

▸ **handleAction**(`action`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `context` | `SegmentationActionContext` |

#### Returns

`void`

#### Overrides

Base.handleAction

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:636](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L636)

___

### initializationDone

▸ **initializationDone**(): `void`

#### Returns

`void`

#### Inherited from

Base.initializationDone

#### Defined in

[src/neuroglancer/layer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L331)

___

### initializeAnnotationLayerViewTab

▸ **initializeAnnotationLayerViewTab**(`tab`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `AnnotationLayerView` |

#### Returns

`void`

#### Inherited from

Base.initializeAnnotationLayerViewTab

#### Defined in

[src/neuroglancer/ui/annotations.ts:3172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3172)

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

Base.initializeSelectionState

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

Base.markLoading

#### Defined in

[src/neuroglancer/layer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L308)

___

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Uint64` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:772](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L772)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

Base.refCountReachedZero

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

Base.registerCancellable

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

Base.registerDisposer

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

Base.registerEventListener

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

Base.removeRenderLayer

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

Base.resetSelectionState

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

#### Overrides

Base.restoreState

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L561)

___

### selectAnnotation

▸ **selectAnnotation**(`annotationLayer`, `id`, `pin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayer` | `AnnotationLayerState` |
| `id` | `string` |
| `pin` | `boolean` \| ``"toggle"`` |

#### Returns

`void`

#### Inherited from

Base.selectAnnotation

#### Defined in

[src/neuroglancer/ui/annotations.ts:3651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3651)

___

### selectSegment

▸ **selectSegment**(`id`, `pin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Uint64` |
| `pin` | `boolean` \| ``"toggle"`` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:346](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L346)

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

Base.selectedValueFromJson

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

Base.selectedValueToJson

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

#### Overrides

Base.selectionStateFromJson

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:667](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L667)

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

#### Overrides

Base.selectionStateToJson

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:678](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L678)

___

### setAnnotationColorPicker

▸ **setAnnotationColorPicker**(): `void`

Sets the annotation picker color based on the annotation property value.

#### Returns

`void`

#### Inherited from

Base.setAnnotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:3158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/ui/annotations.ts#L3158)

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

Base.setLayerPosition

#### Defined in

[src/neuroglancer/layer.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L463)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

Base.toJSON

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L599)

___

### transformPickedValue

▸ **transformPickedValue**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Overrides

Base.transformPickedValue

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L628)

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

Base.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### updateDataSubsourceActivations

▸ **updateDataSubsourceActivations**(): `void`

#### Returns

`void`

#### Inherited from

Base.updateDataSubsourceActivations

#### Defined in

[src/neuroglancer/layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer.ts#L279)
