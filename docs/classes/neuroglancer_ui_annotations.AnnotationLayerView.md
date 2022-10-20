[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / AnnotationLayerView

# Class: AnnotationLayerView

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).AnnotationLayerView

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

- [`Tab`](neuroglancer_widget_tab_view.Tab.md)

  ↳ **`AnnotationLayerView`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations.AnnotationLayerView.md#constructor)

### Properties

- [annotationColorPicker](neuroglancer_ui_annotations.AnnotationLayerView.md#annotationcolorpicker)
- [attachedAnnotationStates](neuroglancer_ui_annotations.AnnotationLayerView.md#attachedannotationstates)
- [cellButton](neuroglancer_ui_annotations.AnnotationLayerView.md#cellbutton)
- [cellSession](neuroglancer_ui_annotations.AnnotationLayerView.md#cellsession)
- [columnWidths](neuroglancer_ui_annotations.AnnotationLayerView.md#columnwidths)
- [comButton](neuroglancer_ui_annotations.AnnotationLayerView.md#combutton)
- [comSession](neuroglancer_ui_annotations.AnnotationLayerView.md#comsession)
- [curCoordinateSpaceGeneration](neuroglancer_ui_annotations.AnnotationLayerView.md#curcoordinatespacegeneration)
- [displayState](neuroglancer_ui_annotations.AnnotationLayerView.md#displaystate)
- [disposedStacks](neuroglancer_ui_annotations.AnnotationLayerView.md#disposedstacks)
- [element](neuroglancer_ui_annotations.AnnotationLayerView.md#element)
- [globalDimensionIndices](neuroglancer_ui_annotations.AnnotationLayerView.md#globaldimensionindices)
- [gridTemplate](neuroglancer_ui_annotations.AnnotationLayerView.md#gridtemplate)
- [headerRow](neuroglancer_ui_annotations.AnnotationLayerView.md#headerrow)
- [layer](neuroglancer_ui_annotations.AnnotationLayerView.md#layer)
- [listElements](neuroglancer_ui_annotations.AnnotationLayerView.md#listelements)
- [localDimensionIndices](neuroglancer_ui_annotations.AnnotationLayerView.md#localdimensionindices)
- [mutableControls](neuroglancer_ui_annotations.AnnotationLayerView.md#mutablecontrols)
- [prevCoordinateSpaceGeneration](neuroglancer_ui_annotations.AnnotationLayerView.md#prevcoordinatespacegeneration)
- [previousHoverAnnotationLayerState](neuroglancer_ui_annotations.AnnotationLayerView.md#previoushoverannotationlayerstate)
- [previousHoverId](neuroglancer_ui_annotations.AnnotationLayerView.md#previoushoverid)
- [previousSelectedState](neuroglancer_ui_annotations.AnnotationLayerView.md#previousselectedstate)
- [refCount](neuroglancer_ui_annotations.AnnotationLayerView.md#refcount)
- [selectedAnnotationState](neuroglancer_ui_annotations.AnnotationLayerView.md#selectedannotationstate)
- [updated](neuroglancer_ui_annotations.AnnotationLayerView.md#updated)
- [virtualList](neuroglancer_ui_annotations.AnnotationLayerView.md#virtuallist)
- [virtualListSource](neuroglancer_ui_annotations.AnnotationLayerView.md#virtuallistsource)
- [visibility](neuroglancer_ui_annotations.AnnotationLayerView.md#visibility)
- [volumeButton](neuroglancer_ui_annotations.AnnotationLayerView.md#volumebutton)
- [volumeSession](neuroglancer_ui_annotations.AnnotationLayerView.md#volumesession)
- [wasDisposed](neuroglancer_ui_annotations.AnnotationLayerView.md#wasdisposed)

### Accessors

- [annotationStates](neuroglancer_ui_annotations.AnnotationLayerView.md#annotationstates)
- [visible](neuroglancer_ui_annotations.AnnotationLayerView.md#visible)

### Methods

- [addAnnotationElement](neuroglancer_ui_annotations.AnnotationLayerView.md#addannotationelement)
- [addRef](neuroglancer_ui_annotations.AnnotationLayerView.md#addref)
- [clearHoverClass](neuroglancer_ui_annotations.AnnotationLayerView.md#clearhoverclass)
- [clearSelectionClass](neuroglancer_ui_annotations.AnnotationLayerView.md#clearselectionclass)
- [deleteAnnotationElement](neuroglancer_ui_annotations.AnnotationLayerView.md#deleteannotationelement)
- [dispose](neuroglancer_ui_annotations.AnnotationLayerView.md#dispose)
- [disposed](neuroglancer_ui_annotations.AnnotationLayerView.md#disposed)
- [forceUpdateView](neuroglancer_ui_annotations.AnnotationLayerView.md#forceupdateview)
- [getAllAnnotationsUnderRoot](neuroglancer_ui_annotations.AnnotationLayerView.md#getallannotationsunderroot)
- [getAnnotationLevel](neuroglancer_ui_annotations.AnnotationLayerView.md#getannotationlevel)
- [getRenderedAnnotationListElement](neuroglancer_ui_annotations.AnnotationLayerView.md#getrenderedannotationlistelement)
- [getSortedIndexBasedOnPolygonSection](neuroglancer_ui_annotations.AnnotationLayerView.md#getsortedindexbasedonpolygonsection)
- [makeAnnotationListElement](neuroglancer_ui_annotations.AnnotationLayerView.md#makeannotationlistelement)
- [refCountReachedZero](neuroglancer_ui_annotations.AnnotationLayerView.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations.AnnotationLayerView.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations.AnnotationLayerView.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations.AnnotationLayerView.md#registereventlistener)
- [render](neuroglancer_ui_annotations.AnnotationLayerView.md#render)
- [resetOnUpdate](neuroglancer_ui_annotations.AnnotationLayerView.md#resetonupdate)
- [setColumnWidth](neuroglancer_ui_annotations.AnnotationLayerView.md#setcolumnwidth)
- [unregisterDisposer](neuroglancer_ui_annotations.AnnotationLayerView.md#unregisterdisposer)
- [updateAnnotationElement](neuroglancer_ui_annotations.AnnotationLayerView.md#updateannotationelement)
- [updateAttachedAnnotationLayerStates](neuroglancer_ui_annotations.AnnotationLayerView.md#updateattachedannotationlayerstates)
- [updateCoordinateSpace](neuroglancer_ui_annotations.AnnotationLayerView.md#updatecoordinatespace)
- [updateHoverView](neuroglancer_ui_annotations.AnnotationLayerView.md#updatehoverview)
- [updateListLength](neuroglancer_ui_annotations.AnnotationLayerView.md#updatelistlength)
- [updateSelectionView](neuroglancer_ui_annotations.AnnotationLayerView.md#updateselectionview)
- [updateView](neuroglancer_ui_annotations.AnnotationLayerView.md#updateview)

## Constructors

### constructor

• **new AnnotationLayerView**(`layer`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `displayState` | [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md) |

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[constructor](neuroglancer_widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L349)

## Properties

### annotationColorPicker

• `Private` **annotationColorPicker**: `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md) = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L241)

___

### attachedAnnotationStates

• `Private` **attachedAnnotationStates**: `Map`<[`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md), [`AnnotationLayerViewAttachedState`](../interfaces/neuroglancer_ui_annotations._internal_.AnnotationLayerViewAttachedState.md)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L264)

___

### cellButton

• **cellButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L257)

___

### cellSession

• **cellSession**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L254)

___

### columnWidths

• `Private` **columnWidths**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L313)

___

### comButton

• **comButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L258)

___

### comSession

• **comSession**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L255)

___

### curCoordinateSpaceGeneration

• `Private` **curCoordinateSpaceGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/annotations.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L311)

___

### displayState

• **displayState**: [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L351)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposedStacks](neuroglancer_widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[element](neuroglancer_widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L32)

___

### globalDimensionIndices

• `Private` **globalDimensionIndices**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L309)

___

### gridTemplate

• `Private` **gridTemplate**: `string` = `''`

#### Defined in

[src/neuroglancer/ui/annotations.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L314)

___

### headerRow

• `Private` **headerRow**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L252)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L350)

___

### listElements

• `Private` **listElements**: { `annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation) ; `state`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)  }[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L249)

___

### localDimensionIndices

• `Private` **localDimensionIndices**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L310)

___

### mutableControls

• `Private` **mutableControls**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L251)

___

### prevCoordinateSpaceGeneration

• `Private` **prevCoordinateSpaceGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/annotations.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L312)

___

### previousHoverAnnotationLayerState

• `Private` **previousHoverAnnotationLayerState**: `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L239)

___

### previousHoverId

• `Private` **previousHoverId**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L238)

___

### previousSelectedState

• `Private` **previousSelectedState**: `undefined` \| { `annotationId`: `string` ; `annotationLayerState`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `pin`: `boolean`  } = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L235)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCount](neuroglancer_widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### selectedAnnotationState

• `Private` **selectedAnnotationState**: [`CachedLazyDerivedWatchableValue`](neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`undefined` \| { `annotationId`: `string` ; `annotationLayerState`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `pin`: `boolean`  }\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L631)

___

### updated

• `Private` **updated**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/annotations.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L250)

___

### virtualList

• `Private` **virtualList**: [`VirtualList`](neuroglancer_widget_virtual_list.VirtualList.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L248)

___

### virtualListSource

• `Private` **virtualListSource**: [`VirtualListSource`](../interfaces/neuroglancer_widget_virtual_list.VirtualListSource.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:243](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L243)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[visibility](neuroglancer_widget_tab_view.Tab.md#visibility)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L39)

___

### volumeButton

• **volumeButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L256)

___

### volumeSession

• **volumeSession**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L253)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[wasDisposed](neuroglancer_widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationStates

• `get` **annotationStates**(): [`MergedAnnotationStates`](neuroglancer_ui_annotations.MergedAnnotationStates.md)

#### Returns

[`MergedAnnotationStates`](neuroglancer_ui_annotations.MergedAnnotationStates.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L260)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addAnnotationElement

▸ `Private` **addAnnotationElement**(`annotation`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:811](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L811)

___

### addRef

▸ **addRef**(): [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md)

#### Returns

[`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[addRef](neuroglancer_widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### clearHoverClass

▸ `Private` **clearHoverClass**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L618)

___

### clearSelectionClass

▸ `Private` **clearSelectionClass**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:604](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L604)

___

### deleteAnnotationElement

▸ `Private` **deleteAnnotationElement**(`annotationId`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:926](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L926)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[dispose](neuroglancer_widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposed](neuroglancer_widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L45)

___

### forceUpdateView

▸ `Private` **forceUpdateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L304)

___

### getAllAnnotationsUnderRoot

▸ `Private` **getAllAnnotationsUnderRoot**(`annotationId`, `state`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)[]

Returns all the descendants of the input annotation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)[]

Array of annotations that are descendants of the input annotation.

#### Defined in

[src/neuroglancer/ui/annotations.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L986)

___

### getAnnotationLevel

▸ `Private` **getAnnotationLevel**(`annotationId`, `state`): `number`

Returns the level of the annotation id based on heirarchy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`number`

a number indicating the level, 
eg: if the annotation doesn't have parent
level is 0, if the annotation has a parent and if the parent does not have any parent 
then level is 1 etc.

#### Defined in

[src/neuroglancer/ui/annotations.ts:965](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L965)

___

### getRenderedAnnotationListElement

▸ `Private` **getRenderedAnnotationListElement**(`state`, `id`, `scrollIntoView?`): `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) | `undefined` |
| `id` | `string` | `undefined` |
| `scrollIntoView` | `boolean` | `false` |

#### Returns

`undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:590](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L590)

___

### getSortedIndexBasedOnPolygonSection

▸ `Private` **getSortedIndexBasedOnPolygonSection**(`annotation`, `info`, `state`): `undefined` \| `number`

Returns the index at which the annotation should be located based on its z-coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) | annotation input id. |
| `info` | [`AnnotationLayerViewAttachedState`](../interfaces/neuroglancer_ui_annotations._internal_.AnnotationLayerViewAttachedState.md) |  |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |  |

#### Returns

`undefined` \| `number`

index at which the annotation should be located in its parent list based on its z-coordinate.

#### Defined in

[src/neuroglancer/ui/annotations.ts:855](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L855)

___

### makeAnnotationListElement

▸ `Private` **makeAnnotationListElement**(`annotation`, `state`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1028](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1028)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCountReachedZero](neuroglancer_widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerCancellable](neuroglancer_widget_tab_view.Tab.md#registercancellable)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerDisposer](neuroglancer_widget_tab_view.Tab.md#registerdisposer)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerEventListener](neuroglancer_widget_tab_view.Tab.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### render

▸ `Private` **render**(`index`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:696](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L696)

___

### resetOnUpdate

▸ `Private` **resetOnUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1020](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1020)

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

[src/neuroglancer/ui/annotations.ts:701](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L701)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[unregisterDisposer](neuroglancer_widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateAnnotationElement

▸ `Private` **updateAnnotationElement**(`annotation`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L902)

___

### updateAttachedAnnotationLayerStates

▸ `Private` **updateAttachedAnnotationLayerStates**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L267)

___

### updateCoordinateSpace

▸ `Private` **updateCoordinateSpace**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L316)

___

### updateHoverView

▸ `Private` **updateHoverView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L674)

___

### updateListLength

▸ `Private` **updateListLength**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:802](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L802)

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

[src/neuroglancer/ui/annotations.ts:646](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L646)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:713](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L713)
