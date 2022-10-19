[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / AnnotationLayerView

# Class: AnnotationLayerView

[ui/annotations](../modules/ui_annotations.md).AnnotationLayerView

## Hierarchy

- [`Tab`](widget_tab_view.Tab.md)

  ↳ **`AnnotationLayerView`**

## Table of contents

### Constructors

- [constructor](ui_annotations.AnnotationLayerView.md#constructor)

### Properties

- [annotationColorPicker](ui_annotations.AnnotationLayerView.md#annotationcolorpicker)
- [attachedAnnotationStates](ui_annotations.AnnotationLayerView.md#attachedannotationstates)
- [cellButton](ui_annotations.AnnotationLayerView.md#cellbutton)
- [cellSession](ui_annotations.AnnotationLayerView.md#cellsession)
- [columnWidths](ui_annotations.AnnotationLayerView.md#columnwidths)
- [comButton](ui_annotations.AnnotationLayerView.md#combutton)
- [comSession](ui_annotations.AnnotationLayerView.md#comsession)
- [curCoordinateSpaceGeneration](ui_annotations.AnnotationLayerView.md#curcoordinatespacegeneration)
- [displayState](ui_annotations.AnnotationLayerView.md#displaystate)
- [disposedStacks](ui_annotations.AnnotationLayerView.md#disposedstacks)
- [element](ui_annotations.AnnotationLayerView.md#element)
- [globalDimensionIndices](ui_annotations.AnnotationLayerView.md#globaldimensionindices)
- [gridTemplate](ui_annotations.AnnotationLayerView.md#gridtemplate)
- [headerRow](ui_annotations.AnnotationLayerView.md#headerrow)
- [layer](ui_annotations.AnnotationLayerView.md#layer)
- [listElements](ui_annotations.AnnotationLayerView.md#listelements)
- [localDimensionIndices](ui_annotations.AnnotationLayerView.md#localdimensionindices)
- [mutableControls](ui_annotations.AnnotationLayerView.md#mutablecontrols)
- [prevCoordinateSpaceGeneration](ui_annotations.AnnotationLayerView.md#prevcoordinatespacegeneration)
- [previousHoverAnnotationLayerState](ui_annotations.AnnotationLayerView.md#previoushoverannotationlayerstate)
- [previousHoverId](ui_annotations.AnnotationLayerView.md#previoushoverid)
- [previousSelectedState](ui_annotations.AnnotationLayerView.md#previousselectedstate)
- [refCount](ui_annotations.AnnotationLayerView.md#refcount)
- [selectedAnnotationState](ui_annotations.AnnotationLayerView.md#selectedannotationstate)
- [updated](ui_annotations.AnnotationLayerView.md#updated)
- [virtualList](ui_annotations.AnnotationLayerView.md#virtuallist)
- [virtualListSource](ui_annotations.AnnotationLayerView.md#virtuallistsource)
- [visibility](ui_annotations.AnnotationLayerView.md#visibility)
- [volumeButton](ui_annotations.AnnotationLayerView.md#volumebutton)
- [volumeSession](ui_annotations.AnnotationLayerView.md#volumesession)
- [wasDisposed](ui_annotations.AnnotationLayerView.md#wasdisposed)

### Accessors

- [annotationStates](ui_annotations.AnnotationLayerView.md#annotationstates)
- [visible](ui_annotations.AnnotationLayerView.md#visible)

### Methods

- [addAnnotationElement](ui_annotations.AnnotationLayerView.md#addannotationelement)
- [addRef](ui_annotations.AnnotationLayerView.md#addref)
- [clearHoverClass](ui_annotations.AnnotationLayerView.md#clearhoverclass)
- [clearSelectionClass](ui_annotations.AnnotationLayerView.md#clearselectionclass)
- [deleteAnnotationElement](ui_annotations.AnnotationLayerView.md#deleteannotationelement)
- [dispose](ui_annotations.AnnotationLayerView.md#dispose)
- [disposed](ui_annotations.AnnotationLayerView.md#disposed)
- [forceUpdateView](ui_annotations.AnnotationLayerView.md#forceupdateview)
- [getAllAnnotationsUnderRoot](ui_annotations.AnnotationLayerView.md#getallannotationsunderroot)
- [getAnnotationLevel](ui_annotations.AnnotationLayerView.md#getannotationlevel)
- [getRenderedAnnotationListElement](ui_annotations.AnnotationLayerView.md#getrenderedannotationlistelement)
- [getSortedIndexBasedOnPolygonSection](ui_annotations.AnnotationLayerView.md#getsortedindexbasedonpolygonsection)
- [makeAnnotationListElement](ui_annotations.AnnotationLayerView.md#makeannotationlistelement)
- [refCountReachedZero](ui_annotations.AnnotationLayerView.md#refcountreachedzero)
- [registerCancellable](ui_annotations.AnnotationLayerView.md#registercancellable)
- [registerDisposer](ui_annotations.AnnotationLayerView.md#registerdisposer)
- [registerEventListener](ui_annotations.AnnotationLayerView.md#registereventlistener)
- [render](ui_annotations.AnnotationLayerView.md#render)
- [resetOnUpdate](ui_annotations.AnnotationLayerView.md#resetonupdate)
- [setColumnWidth](ui_annotations.AnnotationLayerView.md#setcolumnwidth)
- [unregisterDisposer](ui_annotations.AnnotationLayerView.md#unregisterdisposer)
- [updateAnnotationElement](ui_annotations.AnnotationLayerView.md#updateannotationelement)
- [updateAttachedAnnotationLayerStates](ui_annotations.AnnotationLayerView.md#updateattachedannotationlayerstates)
- [updateCoordinateSpace](ui_annotations.AnnotationLayerView.md#updatecoordinatespace)
- [updateHoverView](ui_annotations.AnnotationLayerView.md#updatehoverview)
- [updateListLength](ui_annotations.AnnotationLayerView.md#updatelistlength)
- [updateSelectionView](ui_annotations.AnnotationLayerView.md#updateselectionview)
- [updateView](ui_annotations.AnnotationLayerView.md#updateview)

## Constructors

### constructor

• **new AnnotationLayerView**(`layer`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |
| `displayState` | [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md) |

#### Overrides

[Tab](widget_tab_view.Tab.md).[constructor](widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L349)

## Properties

### annotationColorPicker

• `Private` **annotationColorPicker**: `undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md) = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L241)

___

### attachedAnnotationStates

• `Private` **attachedAnnotationStates**: `Map`<[`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md), [`AnnotationLayerViewAttachedState`](../interfaces/ui_annotations._internal_.AnnotationLayerViewAttachedState.md)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L264)

___

### cellButton

• **cellButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L257)

___

### cellSession

• **cellSession**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L254)

___

### columnWidths

• `Private` **columnWidths**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L313)

___

### comButton

• **comButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L258)

___

### comSession

• **comSession**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L255)

___

### curCoordinateSpaceGeneration

• `Private` **curCoordinateSpaceGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/annotations.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L311)

___

### displayState

• **displayState**: [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[disposedStacks](widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[element](widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L32)

___

### globalDimensionIndices

• `Private` **globalDimensionIndices**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L309)

___

### gridTemplate

• `Private` **gridTemplate**: `string` = `''`

#### Defined in

[src/neuroglancer/ui/annotations.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L314)

___

### headerRow

• `Private` **headerRow**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L252)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

___

### listElements

• `Private` **listElements**: { `annotation`: [`Annotation`](../modules/annotation.md#annotation) ; `state`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)  }[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L249)

___

### localDimensionIndices

• `Private` **localDimensionIndices**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L310)

___

### mutableControls

• `Private` **mutableControls**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L251)

___

### prevCoordinateSpaceGeneration

• `Private` **prevCoordinateSpaceGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/annotations.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L312)

___

### previousHoverAnnotationLayerState

• `Private` **previousHoverAnnotationLayerState**: `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L239)

___

### previousHoverId

• `Private` **previousHoverId**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L238)

___

### previousSelectedState

• `Private` **previousSelectedState**: `undefined` \| { `annotationId`: `string` ; `annotationLayerState`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `pin`: `boolean`  } = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L235)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCount](widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectedAnnotationState

• `Private` **selectedAnnotationState**: [`CachedLazyDerivedWatchableValue`](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`undefined` \| { `annotationId`: `string` ; `annotationLayerState`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `pin`: `boolean`  }\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L631)

___

### updated

• `Private` **updated**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/annotations.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L250)

___

### virtualList

• `Private` **virtualList**: [`VirtualList`](widget_virtual_list.VirtualList.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L248)

___

### virtualListSource

• `Private` **virtualListSource**: [`VirtualListSource`](../interfaces/widget_virtual_list.VirtualListSource.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:243](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L243)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[visibility](widget_tab_view.Tab.md#visibility)

___

### volumeButton

• **volumeButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L256)

___

### volumeSession

• **volumeSession**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L253)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[wasDisposed](widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationStates

• `get` **annotationStates**(): [`MergedAnnotationStates`](ui_annotations.MergedAnnotationStates.md)

#### Returns

[`MergedAnnotationStates`](ui_annotations.MergedAnnotationStates.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L260)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addAnnotationElement

▸ `Private` **addAnnotationElement**(`annotation`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:811](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L811)

___

### addRef

▸ **addRef**(): [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md)

#### Returns

[`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[addRef](widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### clearHoverClass

▸ `Private` **clearHoverClass**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L618)

___

### clearSelectionClass

▸ `Private` **clearSelectionClass**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:604](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L604)

___

### deleteAnnotationElement

▸ `Private` **deleteAnnotationElement**(`annotationId`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:926](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L926)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[dispose](widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[disposed](widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L45)

___

### forceUpdateView

▸ `Private` **forceUpdateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L304)

___

### getAllAnnotationsUnderRoot

▸ `Private` **getAllAnnotationsUnderRoot**(`annotationId`, `state`): [`Annotation`](../modules/annotation.md#annotation)[]

Returns all the descendants of the input annotation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)[]

Array of annotations that are descendants of the input annotation.

#### Defined in

[src/neuroglancer/ui/annotations.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L986)

___

### getAnnotationLevel

▸ `Private` **getAnnotationLevel**(`annotationId`, `state`): `number`

Returns the level of the annotation id based on heirarchy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`number`

a number indicating the level,
eg: if the annotation doesn't have parent
level is 0, if the annotation has a parent and if the parent does not have any parent
then level is 1 etc.

#### Defined in

[src/neuroglancer/ui/annotations.ts:965](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L965)

___

### getRenderedAnnotationListElement

▸ `Private` **getRenderedAnnotationListElement**(`state`, `id`, `scrollIntoView?`): `undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) | `undefined` |
| `id` | `string` | `undefined` |
| `scrollIntoView` | `boolean` | `false` |

#### Returns

`undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:590](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L590)

___

### getSortedIndexBasedOnPolygonSection

▸ `Private` **getSortedIndexBasedOnPolygonSection**(`annotation`, `info`, `state`): `undefined` \| `number`

Returns the index at which the annotation should be located based on its z-coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) | annotation input id. |
| `info` | [`AnnotationLayerViewAttachedState`](../interfaces/ui_annotations._internal_.AnnotationLayerViewAttachedState.md) |  |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |  |

#### Returns

`undefined` \| `number`

index at which the annotation should be located in its parent list based on its z-coordinate.

#### Defined in

[src/neuroglancer/ui/annotations.ts:855](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L855)

___

### makeAnnotationListElement

▸ `Private` **makeAnnotationListElement**(`annotation`, `state`): [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1028](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1028)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCountReachedZero](widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](widget_tab_view.Tab.md).[registerCancellable](widget_tab_view.Tab.md#registercancellable)

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

[Tab](widget_tab_view.Tab.md).[registerDisposer](widget_tab_view.Tab.md#registerdisposer)

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

[Tab](widget_tab_view.Tab.md).[registerEventListener](widget_tab_view.Tab.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### render

▸ `Private` **render**(`index`): [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:696](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L696)

___

### resetOnUpdate

▸ `Private` **resetOnUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1020](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1020)

___

### setColumnWidth

▸ `Private` **setColumnWidth**(`column`, `width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `column` | `number` |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:701](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L701)

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

[Tab](widget_tab_view.Tab.md).[unregisterDisposer](widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateAnnotationElement

▸ `Private` **updateAnnotationElement**(`annotation`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L902)

___

### updateAttachedAnnotationLayerStates

▸ `Private` **updateAttachedAnnotationLayerStates**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L267)

___

### updateCoordinateSpace

▸ `Private` **updateCoordinateSpace**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L316)

___

### updateHoverView

▸ `Private` **updateHoverView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L674)

___

### updateListLength

▸ `Private` **updateListLength**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:802](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L802)

___

### updateSelectionView

▸ `Private` **updateSelectionView**(`selectionStateUpdate?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selectionStateUpdate` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:646](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L646)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:713](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L713)
