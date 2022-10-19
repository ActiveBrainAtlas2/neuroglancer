[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_user\_layer](../modules/neuroglancer_segmentation_user_layer.md) / SegmentationUserLayer

# Class: SegmentationUserLayer

[neuroglancer/segmentation_user_layer](../modules/neuroglancer_segmentation_user_layer.md).SegmentationUserLayer

## Hierarchy

- [`Base`](../modules/neuroglancer_segmentation_user_layer._internal_.md#base)

  ↳ **`SegmentationUserLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#constructor)

### Properties

- [anchorSegment](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#anchorsegment)
- [annotationColorPicker](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#annotationcolorpicker)
- [annotationCrossSectionRenderScaleHistogram](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#annotationcrosssectionrenderscalehistogram)
- [annotationCrossSectionRenderScaleTarget](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#annotationcrosssectionrenderscaletarget)
- [annotationDisplayState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#annotationdisplaystate)
- [annotationProjectionRenderScaleHistogram](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#annotationprojectionrenderscalehistogram)
- [annotationProjectionRenderScaleTarget](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#annotationprojectionrenderscaletarget)
- [annotationStates](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#annotationstates)
- [dataSources](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#datasources)
- [dataSourcesChanged](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#datasourceschanged)
- [displayState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#displaystate)
- [disposedStacks](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#disposedstacks)
- [graphConnection](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#graphconnection)
- [has2dLayer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#has2dlayer)
- [has3dLayer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#has3dlayer)
- [hasSkeletonsLayer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#hasskeletonslayer)
- [layersChanged](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#layerschanged)
- [managedLayer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#managedlayer)
- [panels](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#panels)
- [pick](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#pick)
- [readyStateChanged](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#readystatechanged)
- [refCount](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#refcount)
- [renderLayers](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#renderlayers)
- [segmentQueryFocusTime](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#segmentqueryfocustime)
- [selectionState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#selectionstate)
- [sliceViewRenderScaleHistogram](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#sliceviewrenderscalehistogram)
- [sliceViewRenderScaleTarget](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#sliceviewrenderscaletarget)
- [specificationChanged](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#specificationchanged)
- [tabs](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#tabs)
- [tool](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#tool)
- [toolBinder](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#toolbinder)
- [wasDisposed](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#wasdisposed)
- [supportsPickOption](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#supportspickoption)
- [type](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#type)
- [typeAbbreviation](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#typeabbreviation)

### Accessors

- [isReady](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#isready)
- [localCoordinateSpace](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#localcoordinatespacecombiner)
- [localPosition](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#localposition)
- [manager](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#manager)
- [type](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#type-1)
- [volumeOptions](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#volumeoptions)

### Methods

- [activateDataSubsources](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#activatedatasubsources)
- [addAnnotationLayerState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addannotationlayerstate)
- [addCategoryText](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addcategorytext)
- [addCoordinateSpace](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addcoordinatespace)
- [addDataSource](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#adddatasource)
- [addLocalAnnotations](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addlocalannotations)
- [addRef](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addref)
- [addRenderLayer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addrenderlayer)
- [addStaticAnnotations](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addstaticannotations)
- [addText](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#addtext)
- [bindSegmentListWidth](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#bindsegmentlistwidth)
- [canAddDataSource](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#canadddatasource)
- [captureSelectionState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#captureselectionstate)
- [copySelectionState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#copyselectionstate)
- [displayAnnotationState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#displayannotationstate)
- [displaySegmentationSelection](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#displaysegmentationselection)
- [displaySelectionState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#displayselectionstate)
- [dispose](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#dispose)
- [disposed](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#disposed)
- [filterBySegmentLabel](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#filterbysegmentlabel)
- [filterSegments](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#filtersegments)
- [getDataSourceSpecifications](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#getlegacydatasourcespecifications)
- [getValueAt](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#getvalueat)
- [handleAction](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#handleaction)
- [initializationDone](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#initializationdone)
- [initializeAnnotationLayerViewTab](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#initializeannotationlayerviewtab)
- [initializeSelectionState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#initializeselectionstate)
- [markLoading](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#markloading)
- [moveToSegment](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#movetosegment)
- [refCountReachedZero](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#registercancellable)
- [registerDisposer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#registereventlistener)
- [removeRenderLayer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#removerenderlayer)
- [resetSelectionState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#resetselectionstate)
- [restoreState](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#restorestate)
- [selectAnnotation](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#selectannotation)
- [selectSegment](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#selectsegment)
- [selectedValueFromJson](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#selectionstatefromjson)
- [selectionStateToJson](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#selectionstatetojson)
- [setAnnotationColorPicker](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#setannotationcolorpicker)
- [setLayerPosition](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#setlayerposition)
- [toJSON](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#tojson)
- [transformPickedValue](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new SegmentationUserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Overrides

Base.constructor

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L372)

## Properties

### anchorSegment

• **anchorSegment**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`undefined` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:369](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L369)

___

### annotationColorPicker

• **annotationColorPicker**: `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md) = `undefined`

#### Inherited from

Base.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:3106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3106)

___

### annotationCrossSectionRenderScaleHistogram

• **annotationCrossSectionRenderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

Base.annotationCrossSectionRenderScaleHistogram

#### Defined in

[src/neuroglancer/ui/annotations.ts:3102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3102)

___

### annotationCrossSectionRenderScaleTarget

• **annotationCrossSectionRenderScaleTarget**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

Base.annotationCrossSectionRenderScaleTarget

#### Defined in

[src/neuroglancer/ui/annotations.ts:3103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3103)

___

### annotationDisplayState

• **annotationDisplayState**: [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md)

#### Inherited from

Base.annotationDisplayState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3101)

___

### annotationProjectionRenderScaleHistogram

• **annotationProjectionRenderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

Base.annotationProjectionRenderScaleHistogram

#### Defined in

[src/neuroglancer/ui/annotations.ts:3104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3104)

___

### annotationProjectionRenderScaleTarget

• **annotationProjectionRenderScaleTarget**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

Base.annotationProjectionRenderScaleTarget

#### Defined in

[src/neuroglancer/ui/annotations.ts:3105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3105)

___

### annotationStates

• **annotationStates**: [`MergedAnnotationStates`](neuroglancer_ui_annotations.MergedAnnotationStates.md)

#### Inherited from

Base.annotationStates

#### Defined in

[src/neuroglancer/ui/annotations.ts:3100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3100)

___

### dataSources

• **dataSources**: [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)[] = `[]`

#### Inherited from

Base.dataSources

#### Defined in

[src/neuroglancer/layer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L238)

___

### dataSourcesChanged

• **dataSourcesChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

Base.dataSourcesChanged

#### Defined in

[src/neuroglancer/layer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L237)

___

### displayState

• **displayState**: [`SegmentationUserLayerDisplayState`](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L367)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

Base.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### graphConnection

• **graphConnection**: `undefined` \| [`SegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L338)

___

### has2dLayer

• `Readonly` **has2dLayer**: [`CachedLazyDerivedWatchableValue`](neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:409](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L409)

___

### has3dLayer

• `Readonly` **has3dLayer**: [`CachedLazyDerivedWatchableValue`](neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:413](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L413)

___

### hasSkeletonsLayer

• `Readonly` **hasSkeletonsLayer**: [`CachedLazyDerivedWatchableValue`](neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:421](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L421)

___

### layersChanged

• **layersChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

Base.layersChanged

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L223)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Inherited from

Base.managedLayer

___

### panels

• **panels**: [`UserLayerSidePanelsState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md)

#### Inherited from

Base.panels

#### Defined in

[src/neuroglancer/layer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L233)

___

### pick

• **pick**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Inherited from

Base.pick

#### Defined in

[src/neuroglancer/layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L108)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

Base.readyStateChanged

#### Defined in

[src/neuroglancer/layer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L224)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

Base.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayers

• **renderLayers**: [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md)[]

#### Inherited from

Base.renderLayers

#### Defined in

[src/neuroglancer/layer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L226)

___

### segmentQueryFocusTime

• **segmentQueryFocusTime**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L344)

___

### selectionState

• **selectionState**: [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md)

#### Inherited from

Base.selectionState

#### Defined in

[src/neuroglancer/layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L110)

___

### sliceViewRenderScaleHistogram

• **sliceViewRenderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L335)

___

### sliceViewRenderScaleTarget

• **sliceViewRenderScaleTarget**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L336)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

Base.specificationChanged

#### Defined in

[src/neuroglancer/layer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L225)

___

### tabs

• **tabs**: [`TabSpecification`](neuroglancer_widget_tab_view.TabSpecification.md)

#### Inherited from

Base.tabs

#### Defined in

[src/neuroglancer/layer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L232)

___

### tool

• **tool**: [`SelectedLegacyTool`](neuroglancer_ui_tool.SelectedLegacyTool.md)

#### Inherited from

Base.tool

#### Defined in

[src/neuroglancer/layer.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L234)

___

### toolBinder

• **toolBinder**: [`LayerToolBinder`](neuroglancer_ui_tool.LayerToolBinder.md)

#### Inherited from

Base.toolBinder

#### Defined in

[src/neuroglancer/layer.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L235)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

Base.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### supportsPickOption

▪ `Static` **supportsPickOption**: `boolean` = `true`

#### Overrides

Base.supportsPickOption

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:786](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L786)

___

### type

▪ `Static` **type**: `string` = `'segmentation'`

#### Overrides

Base.type

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:784](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L784)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string` = `'seg'`

#### Overrides

Base.typeAbbreviation

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:785](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L785)

## Accessors

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Base.isReady

#### Defined in

[src/neuroglancer/layer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L228)

___

### localCoordinateSpace

• `get` **localCoordinateSpace**(): [`TrackableCoordinateSpace`](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)

#### Returns

[`TrackableCoordinateSpace`](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)

#### Inherited from

Base.localCoordinateSpace

#### Defined in

[src/neuroglancer/layer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L95)

___

### localCoordinateSpaceCombiner

• `get` **localCoordinateSpaceCombiner**(): [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Returns

[`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Inherited from

Base.localCoordinateSpaceCombiner

#### Defined in

[src/neuroglancer/layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L91)

___

### localPosition

• `get` **localPosition**(): [`Position`](neuroglancer_navigation_state.Position.md)

#### Returns

[`Position`](neuroglancer_navigation_state.Position.md)

#### Inherited from

Base.localPosition

#### Defined in

[src/neuroglancer/layer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L87)

___

### manager

• `get` **manager**(): [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Inherited from

Base.manager

#### Defined in

[src/neuroglancer/layer.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L240)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Base.type

#### Defined in

[src/neuroglancer/layer.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L102)

___

### volumeOptions

• `get` **volumeOptions**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `volumeType` | [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md) |

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:405](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L405)

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

Base.activateDataSubsources

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L425)

___

### addAnnotationLayerState

▸ **addAnnotationLayerState**(`state`, `loadedSubsource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |
| `loadedSubsource` | [`LoadedDataSubsource`](neuroglancer_layer_data_source.LoadedDataSubsource.md) |

#### Returns

`void`

#### Inherited from

Base.addAnnotationLayerState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3610](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3610)

___

### addCategoryText

▸ **addCategoryText**(`parent`, `select`, `annotationLayer`, `reference`, `annotation`): `Promise`<`void`\>

Adds the category text to the annotation on selecting a new category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | parent HTML Element |
| `select` | `HTMLSelectElement` | select dropdown |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) | annotation layer in which annotation is present |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) | annotation reference |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) | annotation value |

#### Returns

`Promise`<`void`\>

void

#### Inherited from

Base.addCategoryText

#### Defined in

[src/neuroglancer/ui/annotations.ts:3233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3233)

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

Base.addCoordinateSpace

#### Defined in

[src/neuroglancer/layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L322)

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

Base.addDataSource

#### Defined in

[src/neuroglancer/layer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L267)

___

### addLocalAnnotations

▸ **addLocalAnnotations**(`loadedSubsource`, `source`, `role`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loadedSubsource` | [`LoadedDataSubsource`](neuroglancer_layer_data_source.LoadedDataSubsource.md) |
| `source` | [`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md) |
| `role` | [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) |

#### Returns

`void`

#### Inherited from

Base.addLocalAnnotations

#### Defined in

[src/neuroglancer/ui/annotations.ts:3583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3583)

___

### addRef

▸ **addRef**(): [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)

#### Returns

[`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)

#### Inherited from

Base.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

Base.addRenderLayer

#### Defined in

[src/neuroglancer/layer.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L384)

___

### addStaticAnnotations

▸ **addStaticAnnotations**(`loadedSubsource`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loadedSubsource` | [`LoadedDataSubsource`](neuroglancer_layer_data_source.LoadedDataSubsource.md) |

#### Returns

`boolean`

#### Inherited from

Base.addStaticAnnotations

#### Defined in

[src/neuroglancer/ui/annotations.ts:3599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3599)

___

### addText

▸ **addText**(`parent`, `select`, `annotationLayer`, `reference`, `annotation`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `select` | `HTMLSelectElement` |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`Promise`<`void`\>

#### Inherited from

Base.addText

#### Defined in

[src/neuroglancer/ui/annotations.ts:3199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3199)

___

### bindSegmentListWidth

▸ **bindSegmentListWidth**(`element`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L340)

___

### canAddDataSource

▸ **canAddDataSource**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Base.canAddDataSource

#### Defined in

[src/neuroglancer/layer.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L263)

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

Base.captureSelectionState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3182)

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

Base.copySelectionState

#### Defined in

[src/neuroglancer/layer.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L203)

___

### displayAnnotationState

▸ **displayAnnotationState**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `context` | [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) |

#### Returns

`boolean`

#### Inherited from

Base.displayAnnotationState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3259](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3259)

___

### displaySegmentationSelection

▸ `Private` **displaySegmentationSelection**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md) |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `context` | [`DependentViewContext`](neuroglancer_widget_dependent_view_widget.DependentViewContext.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:697](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L697)

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

#### Overrides

Base.displaySelectionState

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L765)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

Base.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

Base.disposed

#### Defined in

[src/neuroglancer/layer.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L406)

___

### filterBySegmentLabel

▸ **filterBySegmentLabel**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L353)

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

[src/neuroglancer/segmentation_user_layer.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L360)

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

Base.getDataSourceSpecifications

#### Defined in

[src/neuroglancer/layer.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L347)

___

### getLegacyDataSourceSpecifications

▸ **getLegacyDataSourceSpecifications**(`sourceSpec`, `layerSpec`, `legacyTransform`, `explicitSpecs`): [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceSpec` | `any` |
| `layerSpec` | `any` |
| `legacyTransform` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) |
| `explicitSpecs` | [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[] |

#### Returns

[`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)[]

#### Overrides

Base.getLegacyDataSourceSpecifications

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:517](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L517)

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

Base.getValueAt

#### Defined in

[src/neuroglancer/layer.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L417)

___

### handleAction

▸ **handleAction**(`action`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `context` | [`SegmentationActionContext`](../interfaces/neuroglancer_segmentation_user_layer._internal_.SegmentationActionContext.md) |

#### Returns

`void`

#### Overrides

Base.handleAction

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:636](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L636)

___

### initializationDone

▸ **initializationDone**(): `void`

#### Returns

`void`

#### Inherited from

Base.initializationDone

#### Defined in

[src/neuroglancer/layer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L331)

___

### initializeAnnotationLayerViewTab

▸ **initializeAnnotationLayerViewTab**(`tab`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md) |

#### Returns

`void`

#### Inherited from

Base.initializeAnnotationLayerViewTab

#### Defined in

[src/neuroglancer/ui/annotations.ts:3173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3173)

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

Base.initializeSelectionState

#### Defined in

[src/neuroglancer/layer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L112)

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

[src/neuroglancer/layer.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L308)

___

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:772](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L772)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

Base.refCountReachedZero

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

Base.registerCancellable

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

Base.registerDisposer

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

Base.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

Base.removeRenderLayer

#### Defined in

[src/neuroglancer/layer.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L393)

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

Base.resetSelectionState

#### Defined in

[src/neuroglancer/layer.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L126)

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

[src/neuroglancer/segmentation_user_layer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L561)

___

### selectAnnotation

▸ **selectAnnotation**(`annotationLayer`, `id`, `pin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |
| `id` | `string` |
| `pin` | `boolean` \| ``"toggle"`` |

#### Returns

`void`

#### Inherited from

Base.selectAnnotation

#### Defined in

[src/neuroglancer/ui/annotations.ts:3652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3652)

___

### selectSegment

▸ **selectSegment**(`id`, `pin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:346](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L346)

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

[src/neuroglancer/layer.ts:459](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L459)

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

[src/neuroglancer/layer.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L455)

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

#### Overrides

Base.selectionStateFromJson

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:667](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L667)

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

#### Overrides

Base.selectionStateToJson

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:678](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L678)

___

### setAnnotationColorPicker

▸ **setAnnotationColorPicker**(): `void`

Sets the annotation picker color based on the annotation property value.

#### Returns

`void`

#### Inherited from

Base.setAnnotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:3159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3159)

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

Base.setLayerPosition

#### Defined in

[src/neuroglancer/layer.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L463)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

Base.toJSON

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L599)

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

[src/neuroglancer/segmentation_user_layer.ts:628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L628)

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

Base.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateDataSubsourceActivations

▸ **updateDataSubsourceActivations**(): `void`

#### Returns

`void`

#### Inherited from

Base.updateDataSubsourceActivations

#### Defined in

[src/neuroglancer/layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L279)
