[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / ImageUserLayer

# Class: ImageUserLayer

[image_user_layer](../modules/image_user_layer.md).ImageUserLayer

## Hierarchy

- `Base`

  ↳ **`ImageUserLayer`**

## Table of contents

### Constructors

- [constructor](image_user_layer.ImageUserLayer.md#constructor)

### Properties

- [annotationColorPicker](image_user_layer.ImageUserLayer.md#annotationcolorpicker)
- [annotationCrossSectionRenderScaleHistogram](image_user_layer.ImageUserLayer.md#annotationcrosssectionrenderscalehistogram)
- [annotationCrossSectionRenderScaleTarget](image_user_layer.ImageUserLayer.md#annotationcrosssectionrenderscaletarget)
- [annotationDisplayState](image_user_layer.ImageUserLayer.md#annotationdisplaystate)
- [annotationProjectionRenderScaleHistogram](image_user_layer.ImageUserLayer.md#annotationprojectionrenderscalehistogram)
- [annotationProjectionRenderScaleTarget](image_user_layer.ImageUserLayer.md#annotationprojectionrenderscaletarget)
- [annotationStates](image_user_layer.ImageUserLayer.md#annotationstates)
- [blendMode](image_user_layer.ImageUserLayer.md#blendmode)
- [channelCoordinateSpace](image_user_layer.ImageUserLayer.md#channelcoordinatespace)
- [channelCoordinateSpaceCombiner](image_user_layer.ImageUserLayer.md#channelcoordinatespacecombiner)
- [channelSpace](image_user_layer.ImageUserLayer.md#channelspace)
- [dataSources](image_user_layer.ImageUserLayer.md#datasources)
- [dataSourcesChanged](image_user_layer.ImageUserLayer.md#datasourceschanged)
- [dataType](image_user_layer.ImageUserLayer.md#datatype)
- [disposedStacks](image_user_layer.ImageUserLayer.md#disposedstacks)
- [fragmentMain](image_user_layer.ImageUserLayer.md#fragmentmain)
- [layersChanged](image_user_layer.ImageUserLayer.md#layerschanged)
- [managedLayer](image_user_layer.ImageUserLayer.md#managedlayer)
- [opacity](image_user_layer.ImageUserLayer.md#opacity)
- [panels](image_user_layer.ImageUserLayer.md#panels)
- [pick](image_user_layer.ImageUserLayer.md#pick)
- [readyStateChanged](image_user_layer.ImageUserLayer.md#readystatechanged)
- [refCount](image_user_layer.ImageUserLayer.md#refcount)
- [renderLayers](image_user_layer.ImageUserLayer.md#renderlayers)
- [selectionState](image_user_layer.ImageUserLayer.md#selectionstate)
- [shaderControlState](image_user_layer.ImageUserLayer.md#shadercontrolstate)
- [shaderError](image_user_layer.ImageUserLayer.md#shadererror)
- [sliceViewRenderScaleHistogram](image_user_layer.ImageUserLayer.md#sliceviewrenderscalehistogram)
- [sliceViewRenderScaleTarget](image_user_layer.ImageUserLayer.md#sliceviewrenderscaletarget)
- [specificationChanged](image_user_layer.ImageUserLayer.md#specificationchanged)
- [tabs](image_user_layer.ImageUserLayer.md#tabs)
- [tool](image_user_layer.ImageUserLayer.md#tool)
- [toolBinder](image_user_layer.ImageUserLayer.md#toolbinder)
- [volumeRendering](image_user_layer.ImageUserLayer.md#volumerendering)
- [volumeRenderingRenderScaleHistogram](image_user_layer.ImageUserLayer.md#volumerenderingrenderscalehistogram)
- [volumeRenderingRenderScaleTarget](image_user_layer.ImageUserLayer.md#volumerenderingrenderscaletarget)
- [wasDisposed](image_user_layer.ImageUserLayer.md#wasdisposed)
- [supportsPickOption](image_user_layer.ImageUserLayer.md#supportspickoption)
- [type](image_user_layer.ImageUserLayer.md#type)
- [typeAbbreviation](image_user_layer.ImageUserLayer.md#typeabbreviation)

### Accessors

- [isReady](image_user_layer.ImageUserLayer.md#isready)
- [localCoordinateSpace](image_user_layer.ImageUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](image_user_layer.ImageUserLayer.md#localcoordinatespacecombiner)
- [localPosition](image_user_layer.ImageUserLayer.md#localposition)
- [manager](image_user_layer.ImageUserLayer.md#manager)
- [type](image_user_layer.ImageUserLayer.md#type-1)

### Methods

- [activateDataSubsources](image_user_layer.ImageUserLayer.md#activatedatasubsources)
- [addAnnotationLayerState](image_user_layer.ImageUserLayer.md#addannotationlayerstate)
- [addCategoryText](image_user_layer.ImageUserLayer.md#addcategorytext)
- [addCoordinateSpace](image_user_layer.ImageUserLayer.md#addcoordinatespace)
- [addDataSource](image_user_layer.ImageUserLayer.md#adddatasource)
- [addLocalAnnotations](image_user_layer.ImageUserLayer.md#addlocalannotations)
- [addRef](image_user_layer.ImageUserLayer.md#addref)
- [addRenderLayer](image_user_layer.ImageUserLayer.md#addrenderlayer)
- [addStaticAnnotations](image_user_layer.ImageUserLayer.md#addstaticannotations)
- [addText](image_user_layer.ImageUserLayer.md#addtext)
- [canAddDataSource](image_user_layer.ImageUserLayer.md#canadddatasource)
- [captureSelectionState](image_user_layer.ImageUserLayer.md#captureselectionstate)
- [copySelectionState](image_user_layer.ImageUserLayer.md#copyselectionstate)
- [displayAnnotationState](image_user_layer.ImageUserLayer.md#displayannotationstate)
- [displayImageSelectionState](image_user_layer.ImageUserLayer.md#displayimageselectionstate)
- [displaySelectionState](image_user_layer.ImageUserLayer.md#displayselectionstate)
- [dispose](image_user_layer.ImageUserLayer.md#dispose)
- [disposed](image_user_layer.ImageUserLayer.md#disposed)
- [getDataSourceSpecifications](image_user_layer.ImageUserLayer.md#getdatasourcespecifications)
- [getLegacyDataSourceSpecifications](image_user_layer.ImageUserLayer.md#getlegacydatasourcespecifications)
- [getLegendShaderOptions](image_user_layer.ImageUserLayer.md#getlegendshaderoptions)
- [getValueAt](image_user_layer.ImageUserLayer.md#getvalueat)
- [handleAction](image_user_layer.ImageUserLayer.md#handleaction)
- [initializationDone](image_user_layer.ImageUserLayer.md#initializationdone)
- [initializeAnnotationLayerViewTab](image_user_layer.ImageUserLayer.md#initializeannotationlayerviewtab)
- [initializeSelectionState](image_user_layer.ImageUserLayer.md#initializeselectionstate)
- [markLoading](image_user_layer.ImageUserLayer.md#markloading)
- [refCountReachedZero](image_user_layer.ImageUserLayer.md#refcountreachedzero)
- [registerCancellable](image_user_layer.ImageUserLayer.md#registercancellable)
- [registerDisposer](image_user_layer.ImageUserLayer.md#registerdisposer)
- [registerEventListener](image_user_layer.ImageUserLayer.md#registereventlistener)
- [removeRenderLayer](image_user_layer.ImageUserLayer.md#removerenderlayer)
- [resetSelectionState](image_user_layer.ImageUserLayer.md#resetselectionstate)
- [restoreState](image_user_layer.ImageUserLayer.md#restorestate)
- [selectAnnotation](image_user_layer.ImageUserLayer.md#selectannotation)
- [selectedValueFromJson](image_user_layer.ImageUserLayer.md#selectedvaluefromjson)
- [selectedValueToJson](image_user_layer.ImageUserLayer.md#selectedvaluetojson)
- [selectionStateFromJson](image_user_layer.ImageUserLayer.md#selectionstatefromjson)
- [selectionStateToJson](image_user_layer.ImageUserLayer.md#selectionstatetojson)
- [setAnnotationColorPicker](image_user_layer.ImageUserLayer.md#setannotationcolorpicker)
- [setLayerPosition](image_user_layer.ImageUserLayer.md#setlayerposition)
- [toJSON](image_user_layer.ImageUserLayer.md#tojson)
- [transformPickedValue](image_user_layer.ImageUserLayer.md#transformpickedvalue)
- [unregisterDisposer](image_user_layer.ImageUserLayer.md#unregisterdisposer)
- [updateDataSubsourceActivations](image_user_layer.ImageUserLayer.md#updatedatasubsourceactivations)

## Constructors

### constructor

• **new ImageUserLayer**(`managedLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Overrides

Base.constructor

#### Defined in

[src/neuroglancer/image_user_layer.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L119)

## Properties

### annotationColorPicker

• **annotationColorPicker**: `undefined` \| `AnnotationColorWidget` = `undefined`

#### Inherited from

Base.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:2925](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2925)

___

### annotationCrossSectionRenderScaleHistogram

• **annotationCrossSectionRenderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

Base.annotationCrossSectionRenderScaleHistogram

#### Defined in

[src/neuroglancer/ui/annotations.ts:2921](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2921)

___

### annotationCrossSectionRenderScaleTarget

• **annotationCrossSectionRenderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

Base.annotationCrossSectionRenderScaleTarget

#### Defined in

[src/neuroglancer/ui/annotations.ts:2922](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2922)

___

### annotationDisplayState

• **annotationDisplayState**: `AnnotationDisplayState`

#### Inherited from

Base.annotationDisplayState

#### Defined in

[src/neuroglancer/ui/annotations.ts:2920](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2920)

___

### annotationProjectionRenderScaleHistogram

• **annotationProjectionRenderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

Base.annotationProjectionRenderScaleHistogram

#### Defined in

[src/neuroglancer/ui/annotations.ts:2923](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2923)

___

### annotationProjectionRenderScaleTarget

• **annotationProjectionRenderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

Base.annotationProjectionRenderScaleTarget

#### Defined in

[src/neuroglancer/ui/annotations.ts:2924](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2924)

___

### annotationStates

• **annotationStates**: `MergedAnnotationStates`

#### Inherited from

Base.annotationStates

#### Defined in

[src/neuroglancer/ui/annotations.ts:2919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2919)

___

### blendMode

• **blendMode**: `TrackableEnum`<[`BLEND_MODES`](../enums/trackable_blend.BLEND_MODES.md)\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L70)

___

### channelCoordinateSpace

• **channelCoordinateSpace**: [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/image_user_layer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L80)

___

### channelCoordinateSpaceCombiner

• **channelCoordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/image_user_layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L81)

___

### channelSpace

• **channelSpace**: `CachedLazyDerivedWatchableValue`<`ValueOrError`<[`ChannelSpace`](../interfaces/render_coordinate_transform.ChannelSpace.md)\>\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L83)

___

### dataSources

• **dataSources**: [`LayerDataSource`](layer_data_source.LayerDataSource.md)[] = `[]`

#### Inherited from

Base.dataSources

#### Defined in

[src/neuroglancer/layer.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L238)

___

### dataSourcesChanged

• **dataSourcesChanged**: `NullarySignal`

#### Inherited from

Base.dataSourcesChanged

#### Defined in

[src/neuroglancer/layer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L237)

___

### dataType

• **dataType**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| `DataType`\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L73)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

Base.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentMain

• **fragmentMain**: [`TrackableValue`](trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L71)

___

### layersChanged

• **layersChanged**: `NullarySignal`

#### Inherited from

Base.layersChanged

#### Defined in

[src/neuroglancer/layer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L223)

___

### managedLayer

• **managedLayer**: [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Inherited from

Base.managedLayer

___

### opacity

• **opacity**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L69)

___

### panels

• **panels**: `UserLayerSidePanelsState`

#### Inherited from

Base.panels

#### Defined in

[src/neuroglancer/layer.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L233)

___

### pick

• **pick**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Inherited from

Base.pick

#### Defined in

[src/neuroglancer/layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L108)

___

### readyStateChanged

• **readyStateChanged**: `NullarySignal`

#### Inherited from

Base.readyStateChanged

#### Defined in

[src/neuroglancer/layer.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L224)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

Base.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### renderLayers

• **renderLayers**: [`RenderLayer`](renderlayer.RenderLayer.md)[]

#### Inherited from

Base.renderLayers

#### Defined in

[src/neuroglancer/layer.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L226)

___

### selectionState

• **selectionState**: [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md)

#### Overrides

Base.selectionState

#### Defined in

[src/neuroglancer/image_user_layer.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L117)

___

### shaderControlState

• **shaderControlState**: `ShaderControlState`

#### Defined in

[src/neuroglancer/image_user_layer.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L88)

___

### shaderError

• **shaderError**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| `ShaderCompilationError` \| `ShaderLinkError`\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L72)

___

### sliceViewRenderScaleHistogram

• **sliceViewRenderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/image_user_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L74)

___

### sliceViewRenderScaleTarget

• **sliceViewRenderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L75)

___

### specificationChanged

• **specificationChanged**: `NullarySignal`

#### Inherited from

Base.specificationChanged

#### Defined in

[src/neuroglancer/layer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L225)

___

### tabs

• **tabs**: `TabSpecification`

#### Inherited from

Base.tabs

#### Defined in

[src/neuroglancer/layer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L232)

___

### tool

• **tool**: `SelectedLegacyTool`

#### Inherited from

Base.tool

#### Defined in

[src/neuroglancer/layer.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L234)

___

### toolBinder

• **toolBinder**: `LayerToolBinder`

#### Inherited from

Base.toolBinder

#### Defined in

[src/neuroglancer/layer.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L235)

___

### volumeRendering

• **volumeRendering**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/image_user_layer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L86)

___

### volumeRenderingRenderScaleHistogram

• **volumeRenderingRenderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/image_user_layer.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L76)

___

### volumeRenderingRenderScaleTarget

• **volumeRenderingRenderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/image_user_layer.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L78)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

Base.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

___

### supportsPickOption

▪ `Static` **supportsPickOption**: `boolean` = `false`

#### Inherited from

Base.supportsPickOption

#### Defined in

[src/neuroglancer/layer.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L106)

___

### type

▪ `Static` **type**: `string` = `'image'`

#### Overrides

Base.type

#### Defined in

[src/neuroglancer/image_user_layer.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L280)

___

### typeAbbreviation

▪ `Static` **typeAbbreviation**: `string` = `'img'`

#### Overrides

Base.typeAbbreviation

#### Defined in

[src/neuroglancer/image_user_layer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L281)

## Accessors

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Base.isReady

#### Defined in

[src/neuroglancer/layer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L228)

___

### localCoordinateSpace

• `get` **localCoordinateSpace**(): [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Returns

[`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Inherited from

Base.localCoordinateSpace

#### Defined in

[src/neuroglancer/layer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L95)

___

### localCoordinateSpaceCombiner

• `get` **localCoordinateSpaceCombiner**(): [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Returns

[`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Inherited from

Base.localCoordinateSpaceCombiner

#### Defined in

[src/neuroglancer/layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L91)

___

### localPosition

• `get` **localPosition**(): [`Position`](navigation_state.Position.md)

#### Returns

[`Position`](navigation_state.Position.md)

#### Inherited from

Base.localPosition

#### Defined in

[src/neuroglancer/layer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L87)

___

### manager

• `get` **manager**(): [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](layer.LayerListSpecification.md)

#### Inherited from

Base.manager

#### Defined in

[src/neuroglancer/layer.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L240)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Base.type

#### Defined in

[src/neuroglancer/layer.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L102)

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

[src/neuroglancer/image_user_layer.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L134)

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

[src/neuroglancer/ui/annotations.ts:3419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L3419)

___

### addCategoryText

▸ **addCategoryText**(`parent`, `select`, `annotationLayer`, `reference`, `annotation`): `Promise`<`void`\>

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

Base.addCategoryText

#### Defined in

[src/neuroglancer/ui/annotations.ts:3042](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L3042)

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

#### Overrides

Base.addCoordinateSpace

#### Defined in

[src/neuroglancer/image_user_layer.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L108)

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

[src/neuroglancer/layer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L267)

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

[src/neuroglancer/ui/annotations.ts:3392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L3392)

___

### addRef

▸ **addRef**(): [`ImageUserLayer`](image_user_layer.ImageUserLayer.md)

#### Returns

[`ImageUserLayer`](image_user_layer.ImageUserLayer.md)

#### Inherited from

Base.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/layer.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L384)

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

[src/neuroglancer/ui/annotations.ts:3408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L3408)

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

[src/neuroglancer/ui/annotations.ts:3016](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L3016)

___

### canAddDataSource

▸ **canAddDataSource**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Base.canAddDataSource

#### Defined in

[src/neuroglancer/layer.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L263)

___

### captureSelectionState

▸ **captureSelectionState**(`state`, `mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |
| `mouseState` | [`MouseSelectionState`](layer.MouseSelectionState.md) |

#### Returns

`void`

#### Inherited from

Base.captureSelectionState

#### Defined in

[src/neuroglancer/ui/annotations.ts:2999](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2999)

___

### copySelectionState

▸ **copySelectionState**(`dest`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |
| `source` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

Base.copySelectionState

#### Defined in

[src/neuroglancer/layer.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L203)

___

### displayAnnotationState

▸ **displayAnnotationState**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |
| `parent` | `HTMLElement` |
| `context` | `RefCounted` |

#### Returns

`boolean`

#### Inherited from

Base.displayAnnotationState

#### Defined in

[src/neuroglancer/ui/annotations.ts:3068](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L3068)

___

### displayImageSelectionState

▸ **displayImageSelectionState**(`state`, `parent`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |
| `parent` | `HTMLElement` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/image_user_layer.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L207)

___

### displaySelectionState

▸ **displaySelectionState**(`state`, `parent`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |
| `parent` | `HTMLElement` |
| `context` | `DependentViewContext` |

#### Returns

`boolean`

#### Overrides

Base.displaySelectionState

#### Defined in

[src/neuroglancer/image_user_layer.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L251)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

Base.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

Base.disposed

#### Defined in

[src/neuroglancer/layer.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L406)

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

[src/neuroglancer/layer.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L347)

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

Base.getLegacyDataSourceSpecifications

#### Defined in

[src/neuroglancer/layer.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L337)

___

### getLegendShaderOptions

▸ **getLegendShaderOptions**(): `LegendShaderOptions`

#### Returns

`LegendShaderOptions`

#### Defined in

[src/neuroglancer/image_user_layer.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L258)

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

[src/neuroglancer/layer.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L417)

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

Base.handleAction

#### Defined in

[src/neuroglancer/layer.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L453)

___

### initializationDone

▸ **initializationDone**(): `void`

#### Returns

`void`

#### Inherited from

Base.initializationDone

#### Defined in

[src/neuroglancer/layer.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L331)

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

[src/neuroglancer/ui/annotations.ts:2990](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2990)

___

### initializeSelectionState

▸ **initializeSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

Base.initializeSelectionState

#### Defined in

[src/neuroglancer/layer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L112)

___

### markLoading

▸ **markLoading**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Overrides

Base.markLoading

#### Defined in

[src/neuroglancer/image_user_layer.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L99)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

Base.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/layer.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L393)

___

### resetSelectionState

▸ **resetSelectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |

#### Returns

`void`

#### Inherited from

Base.resetSelectionState

#### Defined in

[src/neuroglancer/layer.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L126)

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

[src/neuroglancer/image_user_layer.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L183)

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

[src/neuroglancer/ui/annotations.ts:3461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L3461)

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

[src/neuroglancer/layer.ts:459](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L459)

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

[src/neuroglancer/layer.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L455)

___

### selectionStateFromJson

▸ **selectionStateFromJson**(`state`, `json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |
| `json` | `any` |

#### Returns

`void`

#### Inherited from

Base.selectionStateFromJson

#### Defined in

[src/neuroglancer/layer.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L132)

___

### selectionStateToJson

▸ **selectionStateToJson**(`state`, `forPython`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ImageLayerSelectionState`](../interfaces/image_user_layer.ImageLayerSelectionState.md) |
| `forPython` | `boolean` |

#### Returns

`any`

#### Inherited from

Base.selectionStateToJson

#### Defined in

[src/neuroglancer/layer.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L169)

___

### setAnnotationColorPicker

▸ **setAnnotationColorPicker**(): `void`

#### Returns

`void`

#### Inherited from

Base.setAnnotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:2976](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/ui/annotations.ts#L2976)

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

[src/neuroglancer/layer.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L463)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

Base.toJSON

#### Defined in

[src/neuroglancer/image_user_layer.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/image_user_layer.ts#L195)

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

[src/neuroglancer/layer.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L435)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)

___

### updateDataSubsourceActivations

▸ **updateDataSubsourceActivations**(): `void`

#### Returns

`void`

#### Inherited from

Base.updateDataSubsourceActivations

#### Defined in

[src/neuroglancer/layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L279)
