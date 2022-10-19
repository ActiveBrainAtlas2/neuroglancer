[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/user\_layer](../modules/neuroglancer_annotation_user_layer.md) / AnnotationUserLayer

# Class: AnnotationUserLayer

[neuroglancer/annotation/user_layer](../modules/neuroglancer_annotation_user_layer.md).AnnotationUserLayer

## Hierarchy

- [`Base`](../modules/neuroglancer_annotation_user_layer._internal_.md#base)

  ↳ **`AnnotationUserLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#constructor)

### Properties

- [annotationColorPicker](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationcolorpicker)
- [annotationCrossSectionRenderScaleHistogram](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationcrosssectionrenderscalehistogram)
- [annotationCrossSectionRenderScaleTarget](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationcrosssectionrenderscaletarget)
- [annotationDisplayState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationdisplaystate)
- [annotationProjectionRenderScaleHistogram](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationprojectionrenderscalehistogram)
- [annotationProjectionRenderScaleTarget](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationprojectionrenderscaletarget)
- [annotationProperties](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationproperties)
- [annotationStates](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#annotationstates)
- [dataSources](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#datasources)
- [dataSourcesChanged](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#datasourceschanged)
- [disposedStacks](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#disposedstacks)
- [layersChanged](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#layerschanged)
- [linkedSegmentationLayers](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#linkedsegmentationlayers)
- [localAnnotationProperties](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#localannotationproperties)
- [localAnnotationRelationships](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#localannotationrelationships)
- [localAnnotations](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#localannotations)
- [localAnnotationsJson](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#localannotationsjson)
- [managedLayer](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#managedlayer)
- [map](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#map)
- [panels](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#panels)
- [pick](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#pick)
- [pointAnnotationsJson](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#pointannotationsjson)
- [readyStateChanged](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#readystatechanged)
- [refCount](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#refcount)
- [renderLayers](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#renderlayers)
- [selectionState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#selectionstate)
- [specificationChanged](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#specificationchanged)
- [tabs](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#tabs)
- [tool](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#tool)
- [toolBinder](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#toolbinder)
- [wasDisposed](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#wasdisposed)
- [supportsPickOption](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#supportspickoption)
- [type](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#type)
- [typeAbbreviation](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#typeabbreviation)

### Accessors

- [isReady](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#isready)
- [localCoordinateSpace](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#localcoordinatespacecombiner)
- [localPosition](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#localposition)
- [manager](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#manager)
- [type](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#type-1)

### Methods

- [activateDataSubsources](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#activatedatasubsources)
- [addAnnotationLayerState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addannotationlayerstate)
- [addCategoryText](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addcategorytext)
- [addCoordinateSpace](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addcoordinatespace)
- [addDataSource](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#adddatasource)
- [addLocalAnnotations](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addlocalannotations)
- [addRef](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addref)
- [addRenderLayer](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addrenderlayer)
- [addStaticAnnotations](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addstaticannotations)
- [addText](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#addtext)
- [canAddDataSource](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#canadddatasource)
- [captureSelectionState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#captureselectionstate)
- [copySelectionState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#copyselectionstate)
- [displayAnnotationState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#displayannotationstate)
- [displaySelectionState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#displayselectionstate)
- [dispose](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#dispose)
- [disposed](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#disposed)
- [getDataSourceSpecifications](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#getlegacydatasourcespecifications)
- [getValueAt](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#getvalueat)
- [handleAction](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#handleaction)
- [initializationDone](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#initializationdone)
- [initializeAnnotationLayerViewTab](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#initializeannotationlayerviewtab)
- [initializeSelectionState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#initializeselectionstate)
- [markLoading](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#markloading)
- [refCountReachedZero](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#registereventlistener)
- [removeRenderLayer](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#removerenderlayer)
- [resetSelectionState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#resetselectionstate)
- [restoreState](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#restorestate)
- [selectAnnotation](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#selectannotation)
- [selectedValueFromJson](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#selectionstatefromjson)
- [selectionStateToJson](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#selectionstatetojson)
- [setAnnotationColorPicker](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#setannotationcolorpicker)
- [setLayerPosition](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#setlayerposition)
- [toJSON](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#tojson)
- [transformPickedValue](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](neuroglancer_annotation_user_layer.AnnotationUserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new AnnotationUserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |

#### Overrides

Base.constructor

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L335)

## Properties

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

### annotationProperties

• **annotationProperties**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)[]\>

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L321)

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

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

Base.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layersChanged

• **layersChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

Base.layersChanged

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L223)

___

### linkedSegmentationLayers

• **linkedSegmentationLayers**: [`LinkedSegmentationLayers`](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L324)

___

### localAnnotationProperties

• `Private` **localAnnotationProperties**: `undefined` \| [`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)[]

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L319)

___

### localAnnotationRelationships

• `Private` **localAnnotationRelationships**: `string`[]

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L320)

___

### localAnnotations

• **localAnnotations**: `undefined` \| [`LocalAnnotationSource`](neuroglancer_annotation.LocalAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L318)

___

### localAnnotationsJson

• `Private` **localAnnotationsJson**: `any` = `undefined`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L322)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Inherited from

Base.managedLayer

___

### map

• `Private` **map**: `Map`<`string`, [`LinkedSegmentationLayer`](../interfaces/neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayer.md)\>

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L530)

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

### pointAnnotationsJson

• `Private` **pointAnnotationsJson**: `any` = `undefined`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L323)

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

### selectionState

• **selectionState**: [`UserLayerSelectionState`](../interfaces/neuroglancer_layer.UserLayerSelectionState.md)

#### Inherited from

Base.selectionState

#### Defined in

[src/neuroglancer/layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L110)

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

▪ `Static` **supportsPickOption**: `boolean` = `false`

#### Inherited from

Base.supportsPickOption

#### Defined in

[src/neuroglancer/layer.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L106)

___

### type

▪ `Static` **type**: `string` = `'annotation'`

#### Overrides

Base.type

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L556)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string` = `'ann'`

#### Overrides

Base.typeAbbreviation

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:557](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L557)

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

[src/neuroglancer/annotation/user_layer.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L408)

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

▸ **addRef**(): [`AnnotationUserLayer`](neuroglancer_annotation_user_layer.AnnotationUserLayer.md)

#### Returns

[`AnnotationUserLayer`](neuroglancer_annotation_user_layer.AnnotationUserLayer.md)

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

Base.displaySelectionState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3575](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L3575)

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

#### Overrides

Base.disposed

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L327)

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

[src/neuroglancer/annotation/user_layer.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L372)

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

▸ **handleAction**(`_action`, `_context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `string` |
| `_context` | [`LayerActionContext`](neuroglancer_layer.LayerActionContext.md) |

#### Returns

`void`

#### Inherited from

Base.handleAction

#### Defined in

[src/neuroglancer/layer.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L453)

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

#### Overrides

Base.initializeAnnotationLayerViewTab

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L492)

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

[src/neuroglancer/annotation/user_layer.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L347)

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

#### Inherited from

Base.selectionStateFromJson

#### Defined in

[src/neuroglancer/layer.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L132)

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

Base.selectionStateToJson

#### Defined in

[src/neuroglancer/layer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L169)

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

[src/neuroglancer/annotation/user_layer.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L532)

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

Base.transformPickedValue

#### Defined in

[src/neuroglancer/layer.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L435)

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
