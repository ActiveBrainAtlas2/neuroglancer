[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/cell\_session](../modules/ui_cell_session.md) / CellSessionDialog

# Class: CellSessionDialog

[ui/cell_session](../modules/ui_cell_session.md).CellSessionDialog

Cell session for annotation cells.

## Hierarchy

- [`Overlay`](ui_cell_session._internal_.Overlay.md)

  ↳ **`CellSessionDialog`**

## Table of contents

### Constructors

- [constructor](ui_cell_session.CellSessionDialog.md#constructor)

### Properties

- [annotationLayerView](ui_cell_session.CellSessionDialog.md#annotationlayerview)
- [categoryDropdown](ui_cell_session.CellSessionDialog.md#categorydropdown)
- [colorInput](ui_cell_session.CellSessionDialog.md#colorinput)
- [container](ui_cell_session.CellSessionDialog.md#container)
- [content](ui_cell_session.CellSessionDialog.md#content)
- [disposedStacks](ui_cell_session.CellSessionDialog.md#disposedstacks)
- [keyMap](ui_cell_session.CellSessionDialog.md#keymap)
- [landmarkDropdown](ui_cell_session.CellSessionDialog.md#landmarkdropdown)
- [refCount](ui_cell_session.CellSessionDialog.md#refcount)
- [wasDisposed](ui_cell_session.CellSessionDialog.md#wasdisposed)

### Methods

- [addRef](ui_cell_session.CellSessionDialog.md#addref)
- [closeSessionRow](ui_cell_session.CellSessionDialog.md#closesessionrow)
- [dispose](ui_cell_session.CellSessionDialog.md#dispose)
- [disposed](ui_cell_session.CellSessionDialog.md#disposed)
- [getCategoryDropDown](ui_cell_session.CellSessionDialog.md#getcategorydropdown)
- [getCellInfoRows](ui_cell_session.CellSessionDialog.md#getcellinforows)
- [getEditCellRow](ui_cell_session.CellSessionDialog.md#geteditcellrow)
- [getLandMarkDropDown](ui_cell_session.CellSessionDialog.md#getlandmarkdropdown)
- [getNewCellRow](ui_cell_session.CellSessionDialog.md#getnewcellrow)
- [refCountReachedZero](ui_cell_session.CellSessionDialog.md#refcountreachedzero)
- [registerCancellable](ui_cell_session.CellSessionDialog.md#registercancellable)
- [registerDisposer](ui_cell_session.CellSessionDialog.md#registerdisposer)
- [registerEventListener](ui_cell_session.CellSessionDialog.md#registereventlistener)
- [unregisterDisposer](ui_cell_session.CellSessionDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new CellSessionDialog**(`annotationLayerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayerView` | [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md) |

#### Overrides

[Overlay](ui_cell_session._internal_.Overlay.md).[constructor](ui_cell_session._internal_.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/cell_session.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L35)

## Properties

### annotationLayerView

• **annotationLayerView**: [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md)

___

### categoryDropdown

• **categoryDropdown**: `undefined` \| `HTMLSelectElement` = `undefined`

Category of cell, eg: positive/negative

#### Defined in

[src/neuroglancer/ui/cell_session.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L33)

___

### colorInput

• **colorInput**: `undefined` \| [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement) = `undefined`

#### Defined in

[src/neuroglancer/ui/cell_session.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L34)

___

### container

• **container**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[container](ui_cell_session._internal_.Overlay.md#container)

#### Defined in

[src/neuroglancer/overlay.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L32)

___

### content

• **content**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[content](ui_cell_session._internal_.Overlay.md#content)

#### Defined in

[src/neuroglancer/overlay.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L33)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[disposedStacks](ui_cell_session._internal_.Overlay.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### keyMap

• **keyMap**: [`EventActionMap`](util_event_action_map.EventActionMap.md)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[keyMap](ui_cell_session._internal_.Overlay.md#keymap)

#### Defined in

[src/neuroglancer/overlay.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L34)

___

### landmarkDropdown

• **landmarkDropdown**: `undefined` \| `HTMLSelectElement` = `undefined`

Landmark for cell

#### Defined in

[src/neuroglancer/ui/cell_session.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L31)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[refCount](ui_cell_session._internal_.Overlay.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[wasDisposed](ui_cell_session._internal_.Overlay.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CellSessionDialog`](ui_cell_session.CellSessionDialog.md)

#### Returns

[`CellSessionDialog`](ui_cell_session.CellSessionDialog.md)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[addRef](ui_cell_session._internal_.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### closeSessionRow

▸ **closeSessionRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A table row element with functionality to close current active session.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L158)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[dispose](ui_cell_session._internal_.Overlay.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[disposed](ui_cell_session._internal_.Overlay.md#disposed)

#### Defined in

[src/neuroglancer/overlay.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L53)

___

### getCategoryDropDown

▸ **getCategoryDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

Returns a select HTML element containing cell category information (eg: positive, negative etc)

#### Defined in

[src/neuroglancer/ui/cell_session.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L211)

___

### getCellInfoRows

▸ **getCellInfoRows**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)[]

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)[]

A table row element containing landmark and category dropdown elements.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L90)

___

### getEditCellRow

▸ **getEditCellRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A table row element containing functionality to start a cell edit session.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L132)

___

### getLandMarkDropDown

▸ **getLandMarkDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

Returns a select tag element with information about landmark of cells.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L186)

___

### getNewCellRow

▸ **getNewCellRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A table row element containing option to start a new cell session.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/cell_session.ts#L61)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[refCountReachedZero](ui_cell_session._internal_.Overlay.md#refcountreachedzero)

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

[Overlay](ui_cell_session._internal_.Overlay.md).[registerCancellable](ui_cell_session._internal_.Overlay.md#registercancellable)

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

[Overlay](ui_cell_session._internal_.Overlay.md).[registerDisposer](ui_cell_session._internal_.Overlay.md#registerdisposer)

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

[Overlay](ui_cell_session._internal_.Overlay.md).[registerEventListener](ui_cell_session._internal_.Overlay.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[Overlay](ui_cell_session._internal_.Overlay.md).[unregisterDisposer](ui_cell_session._internal_.Overlay.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
