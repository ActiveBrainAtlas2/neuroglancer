[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/cell\_session](../modules/neuroglancer_ui_cell_session.md) / CellSessionDialog

# Class: CellSessionDialog

[neuroglancer/ui/cell_session](../modules/neuroglancer_ui_cell_session.md).CellSessionDialog

Cell session for annotation cells.

## Hierarchy

- [`Overlay`](neuroglancer_overlay.Overlay.md)

  ↳ **`CellSessionDialog`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_cell_session.CellSessionDialog.md#constructor)

### Properties

- [annotationLayerView](neuroglancer_ui_cell_session.CellSessionDialog.md#annotationlayerview)
- [categoryDropdown](neuroglancer_ui_cell_session.CellSessionDialog.md#categorydropdown)
- [colorInput](neuroglancer_ui_cell_session.CellSessionDialog.md#colorinput)
- [container](neuroglancer_ui_cell_session.CellSessionDialog.md#container)
- [content](neuroglancer_ui_cell_session.CellSessionDialog.md#content)
- [disposedStacks](neuroglancer_ui_cell_session.CellSessionDialog.md#disposedstacks)
- [keyMap](neuroglancer_ui_cell_session.CellSessionDialog.md#keymap)
- [landmarkDropdown](neuroglancer_ui_cell_session.CellSessionDialog.md#landmarkdropdown)
- [refCount](neuroglancer_ui_cell_session.CellSessionDialog.md#refcount)
- [wasDisposed](neuroglancer_ui_cell_session.CellSessionDialog.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_cell_session.CellSessionDialog.md#addref)
- [closeSessionRow](neuroglancer_ui_cell_session.CellSessionDialog.md#closesessionrow)
- [dispose](neuroglancer_ui_cell_session.CellSessionDialog.md#dispose)
- [disposed](neuroglancer_ui_cell_session.CellSessionDialog.md#disposed)
- [getCategoryDropDown](neuroglancer_ui_cell_session.CellSessionDialog.md#getcategorydropdown)
- [getCellInfoRows](neuroglancer_ui_cell_session.CellSessionDialog.md#getcellinforows)
- [getEditCellRow](neuroglancer_ui_cell_session.CellSessionDialog.md#geteditcellrow)
- [getLandMarkDropDown](neuroglancer_ui_cell_session.CellSessionDialog.md#getlandmarkdropdown)
- [getNewCellRow](neuroglancer_ui_cell_session.CellSessionDialog.md#getnewcellrow)
- [refCountReachedZero](neuroglancer_ui_cell_session.CellSessionDialog.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_cell_session.CellSessionDialog.md#registercancellable)
- [registerDisposer](neuroglancer_ui_cell_session.CellSessionDialog.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_cell_session.CellSessionDialog.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_cell_session.CellSessionDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new CellSessionDialog**(`annotationLayerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayerView` | [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md) |

#### Overrides

[Overlay](neuroglancer_overlay.Overlay.md).[constructor](neuroglancer_overlay.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/cell_session.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L35)

## Properties

### annotationLayerView

• **annotationLayerView**: [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md)

___

### categoryDropdown

• **categoryDropdown**: `undefined` \| `HTMLSelectElement` = `undefined`

Category of cell, eg: positive/negative

#### Defined in

[src/neuroglancer/ui/cell_session.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L33)

___

### colorInput

• **colorInput**: `undefined` \| [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) = `undefined`

#### Defined in

[src/neuroglancer/ui/cell_session.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L34)

___

### container

• **container**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[container](neuroglancer_overlay.Overlay.md#container)

#### Defined in

[src/neuroglancer/overlay.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/overlay.ts#L32)

___

### content

• **content**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[content](neuroglancer_overlay.Overlay.md#content)

#### Defined in

[src/neuroglancer/overlay.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/overlay.ts#L33)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[disposedStacks](neuroglancer_overlay.Overlay.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### keyMap

• **keyMap**: [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[keyMap](neuroglancer_overlay.Overlay.md#keymap)

#### Defined in

[src/neuroglancer/overlay.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/overlay.ts#L34)

___

### landmarkDropdown

• **landmarkDropdown**: `undefined` \| `HTMLSelectElement` = `undefined`

Landmark for cell

#### Defined in

[src/neuroglancer/ui/cell_session.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L31)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[refCount](neuroglancer_overlay.Overlay.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[wasDisposed](neuroglancer_overlay.Overlay.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CellSessionDialog`](neuroglancer_ui_cell_session.CellSessionDialog.md)

#### Returns

[`CellSessionDialog`](neuroglancer_ui_cell_session.CellSessionDialog.md)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[addRef](neuroglancer_overlay.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### closeSessionRow

▸ **closeSessionRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A table row element with functionality to close current active session.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L158)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[dispose](neuroglancer_overlay.Overlay.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[disposed](neuroglancer_overlay.Overlay.md#disposed)

#### Defined in

[src/neuroglancer/overlay.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/overlay.ts#L53)

___

### getCategoryDropDown

▸ **getCategoryDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

Returns a select HTML element containing cell category information (eg: positive, negative etc)

#### Defined in

[src/neuroglancer/ui/cell_session.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L211)

___

### getCellInfoRows

▸ **getCellInfoRows**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)[]

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)[]

A table row element containing landmark and category dropdown elements.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L90)

___

### getEditCellRow

▸ **getEditCellRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A table row element containing functionality to start a cell edit session.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L132)

___

### getLandMarkDropDown

▸ **getLandMarkDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

Returns a select tag element with information about landmark of cells.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L186)

___

### getNewCellRow

▸ **getNewCellRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A table row element containing option to start a new cell session.

#### Defined in

[src/neuroglancer/ui/cell_session.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/cell_session.ts#L61)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[refCountReachedZero](neuroglancer_overlay.Overlay.md#refcountreachedzero)

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

[Overlay](neuroglancer_overlay.Overlay.md).[registerCancellable](neuroglancer_overlay.Overlay.md#registercancellable)

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

[Overlay](neuroglancer_overlay.Overlay.md).[registerDisposer](neuroglancer_overlay.Overlay.md#registerdisposer)

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

[Overlay](neuroglancer_overlay.Overlay.md).[registerEventListener](neuroglancer_overlay.Overlay.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[Overlay](neuroglancer_overlay.Overlay.md).[unregisterDisposer](neuroglancer_overlay.Overlay.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
