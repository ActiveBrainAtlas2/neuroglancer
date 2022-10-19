[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationLayerView

# Class: AnnotationLayerView

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationLayerView

## Hierarchy

- [`Tab`](image_user_layer._internal_.Tab.md)

  ↳ **`AnnotationLayerView`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationLayerView.md#constructor)

### Properties

- [annotationColorPicker](image_user_layer._internal_.AnnotationLayerView.md#annotationcolorpicker)
- [attachedAnnotationStates](image_user_layer._internal_.AnnotationLayerView.md#attachedannotationstates)
- [cellButton](image_user_layer._internal_.AnnotationLayerView.md#cellbutton)
- [cellSession](image_user_layer._internal_.AnnotationLayerView.md#cellsession)
- [columnWidths](image_user_layer._internal_.AnnotationLayerView.md#columnwidths)
- [comButton](image_user_layer._internal_.AnnotationLayerView.md#combutton)
- [comSession](image_user_layer._internal_.AnnotationLayerView.md#comsession)
- [curCoordinateSpaceGeneration](image_user_layer._internal_.AnnotationLayerView.md#curcoordinatespacegeneration)
- [displayState](image_user_layer._internal_.AnnotationLayerView.md#displaystate)
- [disposedStacks](image_user_layer._internal_.AnnotationLayerView.md#disposedstacks)
- [element](image_user_layer._internal_.AnnotationLayerView.md#element)
- [globalDimensionIndices](image_user_layer._internal_.AnnotationLayerView.md#globaldimensionindices)
- [gridTemplate](image_user_layer._internal_.AnnotationLayerView.md#gridtemplate)
- [headerRow](image_user_layer._internal_.AnnotationLayerView.md#headerrow)
- [layer](image_user_layer._internal_.AnnotationLayerView.md#layer)
- [listElements](image_user_layer._internal_.AnnotationLayerView.md#listelements)
- [localDimensionIndices](image_user_layer._internal_.AnnotationLayerView.md#localdimensionindices)
- [mutableControls](image_user_layer._internal_.AnnotationLayerView.md#mutablecontrols)
- [prevCoordinateSpaceGeneration](image_user_layer._internal_.AnnotationLayerView.md#prevcoordinatespacegeneration)
- [previousHoverAnnotationLayerState](image_user_layer._internal_.AnnotationLayerView.md#previoushoverannotationlayerstate)
- [previousHoverId](image_user_layer._internal_.AnnotationLayerView.md#previoushoverid)
- [previousSelectedState](image_user_layer._internal_.AnnotationLayerView.md#previousselectedstate)
- [refCount](image_user_layer._internal_.AnnotationLayerView.md#refcount)
- [selectedAnnotationState](image_user_layer._internal_.AnnotationLayerView.md#selectedannotationstate)
- [updated](image_user_layer._internal_.AnnotationLayerView.md#updated)
- [virtualList](image_user_layer._internal_.AnnotationLayerView.md#virtuallist)
- [virtualListSource](image_user_layer._internal_.AnnotationLayerView.md#virtuallistsource)
- [visibility](image_user_layer._internal_.AnnotationLayerView.md#visibility)
- [volumeButton](image_user_layer._internal_.AnnotationLayerView.md#volumebutton)
- [volumeSession](image_user_layer._internal_.AnnotationLayerView.md#volumesession)
- [wasDisposed](image_user_layer._internal_.AnnotationLayerView.md#wasdisposed)

### Accessors

- [annotationStates](image_user_layer._internal_.AnnotationLayerView.md#annotationstates)
- [visible](image_user_layer._internal_.AnnotationLayerView.md#visible)

### Methods

- [addAnnotationElement](image_user_layer._internal_.AnnotationLayerView.md#addannotationelement)
- [addRef](image_user_layer._internal_.AnnotationLayerView.md#addref)
- [clearHoverClass](image_user_layer._internal_.AnnotationLayerView.md#clearhoverclass)
- [clearSelectionClass](image_user_layer._internal_.AnnotationLayerView.md#clearselectionclass)
- [deleteAnnotationElement](image_user_layer._internal_.AnnotationLayerView.md#deleteannotationelement)
- [dispose](image_user_layer._internal_.AnnotationLayerView.md#dispose)
- [disposed](image_user_layer._internal_.AnnotationLayerView.md#disposed)
- [forceUpdateView](image_user_layer._internal_.AnnotationLayerView.md#forceupdateview)
- [getAllAnnotationsUnderRoot](image_user_layer._internal_.AnnotationLayerView.md#getallannotationsunderroot)
- [getAnnotationLevel](image_user_layer._internal_.AnnotationLayerView.md#getannotationlevel)
- [getRenderedAnnotationListElement](image_user_layer._internal_.AnnotationLayerView.md#getrenderedannotationlistelement)
- [getSortedIndexBasedOnPolygonSection](image_user_layer._internal_.AnnotationLayerView.md#getsortedindexbasedonpolygonsection)
- [makeAnnotationListElement](image_user_layer._internal_.AnnotationLayerView.md#makeannotationlistelement)
- [refCountReachedZero](image_user_layer._internal_.AnnotationLayerView.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.AnnotationLayerView.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.AnnotationLayerView.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.AnnotationLayerView.md#registereventlistener)
- [render](image_user_layer._internal_.AnnotationLayerView.md#render)
- [resetOnUpdate](image_user_layer._internal_.AnnotationLayerView.md#resetonupdate)
- [setColumnWidth](image_user_layer._internal_.AnnotationLayerView.md#setcolumnwidth)
- [unregisterDisposer](image_user_layer._internal_.AnnotationLayerView.md#unregisterdisposer)
- [updateAnnotationElement](image_user_layer._internal_.AnnotationLayerView.md#updateannotationelement)
- [updateAttachedAnnotationLayerStates](image_user_layer._internal_.AnnotationLayerView.md#updateattachedannotationlayerstates)
- [updateCoordinateSpace](image_user_layer._internal_.AnnotationLayerView.md#updatecoordinatespace)
- [updateHoverView](image_user_layer._internal_.AnnotationLayerView.md#updatehoverview)
- [updateListLength](image_user_layer._internal_.AnnotationLayerView.md#updatelistlength)
- [updateSelectionView](image_user_layer._internal_.AnnotationLayerView.md#updateselectionview)
- [updateView](image_user_layer._internal_.AnnotationLayerView.md#updateview)

## Constructors

### constructor

• **new AnnotationLayerView**(`layer`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](layer.UserLayer.md)\> & [`UserLayer`](layer.UserLayer.md) |
| `displayState` | [`AnnotationDisplayState`](image_user_layer._internal_.AnnotationDisplayState.md) |

#### Overrides

[Tab](image_user_layer._internal_.Tab.md).[constructor](image_user_layer._internal_.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L349)

## Properties

### annotationColorPicker

• `Private` **annotationColorPicker**: `undefined` \| [`AnnotationColorWidget`](image_user_layer._internal_.AnnotationColorWidget.md) = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L241)

___

### attachedAnnotationStates

• `Private` **attachedAnnotationStates**: `Map`<[`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md), [`AnnotationLayerViewAttachedState`](../interfaces/image_user_layer._internal_.AnnotationLayerViewAttachedState.md)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L264)

___

### cellButton

• **cellButton**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L257)

___

### cellSession

• **cellSession**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L254)

___

### columnWidths

• `Private` **columnWidths**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L313)

___

### comButton

• **comButton**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L258)

___

### comSession

• **comSession**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L255)

___

### curCoordinateSpaceGeneration

• `Private` **curCoordinateSpaceGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/annotations.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L311)

___

### displayState

• **displayState**: [`AnnotationDisplayState`](image_user_layer._internal_.AnnotationDisplayState.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[disposedStacks](image_user_layer._internal_.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[element](image_user_layer._internal_.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L32)

___

### globalDimensionIndices

• `Private` **globalDimensionIndices**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L309)

___

### gridTemplate

• `Private` **gridTemplate**: `string` = `''`

#### Defined in

[src/neuroglancer/ui/annotations.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L314)

___

### headerRow

• `Private` **headerRow**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L252)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](layer.UserLayer.md)\> & [`UserLayer`](layer.UserLayer.md)

___

### listElements

• `Private` **listElements**: { `annotation`: [`Annotation`](../modules/image_user_layer._internal_.md#annotation) ; `state`: [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)  }[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L249)

___

### localDimensionIndices

• `Private` **localDimensionIndices**: `number`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L310)

___

### mutableControls

• `Private` **mutableControls**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L251)

___

### prevCoordinateSpaceGeneration

• `Private` **prevCoordinateSpaceGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/ui/annotations.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L312)

___

### previousHoverAnnotationLayerState

• `Private` **previousHoverAnnotationLayerState**: `undefined` \| [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L239)

___

### previousHoverId

• `Private` **previousHoverId**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L238)

___

### previousSelectedState

• `Private` **previousSelectedState**: `undefined` \| { `annotationId`: `string` ; `annotationLayerState`: [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) ; `pin`: `boolean`  } = `undefined`

#### Defined in

[src/neuroglancer/ui/annotations.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L235)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[refCount](image_user_layer._internal_.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### selectedAnnotationState

• `Private` **selectedAnnotationState**: [`CachedLazyDerivedWatchableValue`](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md)<`undefined` \| { `annotationId`: `string` ; `annotationLayerState`: [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) ; `pin`: `boolean`  }\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L631)

___

### updated

• `Private` **updated**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/annotations.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L250)

___

### virtualList

• `Private` **virtualList**: [`VirtualList`](image_user_layer._internal_.VirtualList.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L248)

___

### virtualListSource

• `Private` **virtualListSource**: [`VirtualListSource`](../interfaces/image_user_layer._internal_.VirtualListSource.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:243](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L243)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[visibility](image_user_layer._internal_.Tab.md#visibility)

___

### volumeButton

• **volumeButton**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L256)

___

### volumeSession

• **volumeSession**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L253)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[wasDisposed](image_user_layer._internal_.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationStates

• `get` **annotationStates**(): [`MergedAnnotationStates`](image_user_layer._internal_.MergedAnnotationStates.md)

#### Returns

[`MergedAnnotationStates`](image_user_layer._internal_.MergedAnnotationStates.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L260)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addAnnotationElement

▸ `Private` **addAnnotationElement**(`annotation`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:811](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L811)

___

### addRef

▸ **addRef**(): [`AnnotationLayerView`](image_user_layer._internal_.AnnotationLayerView.md)

#### Returns

[`AnnotationLayerView`](image_user_layer._internal_.AnnotationLayerView.md)

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[addRef](image_user_layer._internal_.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### clearHoverClass

▸ `Private` **clearHoverClass**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L618)

___

### clearSelectionClass

▸ `Private` **clearSelectionClass**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:604](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L604)

___

### deleteAnnotationElement

▸ `Private` **deleteAnnotationElement**(`annotationId`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:926](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L926)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[dispose](image_user_layer._internal_.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[disposed](image_user_layer._internal_.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L45)

___

### forceUpdateView

▸ `Private` **forceUpdateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L304)

___

### getAllAnnotationsUnderRoot

▸ `Private` **getAllAnnotationsUnderRoot**(`annotationId`, `state`): [`Annotation`](../modules/image_user_layer._internal_.md#annotation)[]

Returns all the descendants of the input annotation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/image_user_layer._internal_.md#annotation)[]

Array of annotations that are descendants of the input annotation.

#### Defined in

[src/neuroglancer/ui/annotations.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L986)

___

### getAnnotationLevel

▸ `Private` **getAnnotationLevel**(`annotationId`, `state`): `number`

Returns the level of the annotation id based on heirarchy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |

#### Returns

`number`

a number indicating the level,
eg: if the annotation doesn't have parent
level is 0, if the annotation has a parent and if the parent does not have any parent
then level is 1 etc.

#### Defined in

[src/neuroglancer/ui/annotations.ts:965](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L965)

___

### getRenderedAnnotationListElement

▸ `Private` **getRenderedAnnotationListElement**(`state`, `id`, `scrollIntoView?`): `undefined` \| [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) | `undefined` |
| `id` | `string` | `undefined` |
| `scrollIntoView` | `boolean` | `false` |

#### Returns

`undefined` \| [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:590](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L590)

___

### getSortedIndexBasedOnPolygonSection

▸ `Private` **getSortedIndexBasedOnPolygonSection**(`annotation`, `info`, `state`): `undefined` \| `number`

Returns the index at which the annotation should be located based on its z-coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) | annotation input id. |
| `info` | [`AnnotationLayerViewAttachedState`](../interfaces/image_user_layer._internal_.AnnotationLayerViewAttachedState.md) |  |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |  |

#### Returns

`undefined` \| `number`

index at which the annotation should be located in its parent list based on its z-coordinate.

#### Defined in

[src/neuroglancer/ui/annotations.ts:855](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L855)

___

### makeAnnotationListElement

▸ `Private` **makeAnnotationListElement**(`annotation`, `state`): [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |

#### Returns

[`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1028](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L1028)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[refCountReachedZero](image_user_layer._internal_.Tab.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[Tab](image_user_layer._internal_.Tab.md).[registerCancellable](image_user_layer._internal_.Tab.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[registerDisposer](image_user_layer._internal_.Tab.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[registerEventListener](image_user_layer._internal_.Tab.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### render

▸ `Private` **render**(`index`): [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:696](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L696)

___

### resetOnUpdate

▸ `Private` **resetOnUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1020](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L1020)

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

[src/neuroglancer/ui/annotations.ts:701](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L701)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[Tab](image_user_layer._internal_.Tab.md).[unregisterDisposer](image_user_layer._internal_.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateAnnotationElement

▸ `Private` **updateAnnotationElement**(`annotation`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L902)

___

### updateAttachedAnnotationLayerStates

▸ `Private` **updateAttachedAnnotationLayerStates**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L267)

___

### updateCoordinateSpace

▸ `Private` **updateCoordinateSpace**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L316)

___

### updateHoverView

▸ `Private` **updateHoverView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L674)

___

### updateListLength

▸ `Private` **updateListLength**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:802](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L802)

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

[src/neuroglancer/ui/annotations.ts:646](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L646)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:713](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L713)
