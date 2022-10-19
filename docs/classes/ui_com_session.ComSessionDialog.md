[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/com\_session](../modules/ui_com_session.md) / ComSessionDialog

# Class: ComSessionDialog

[ui/com_session](../modules/ui_com_session.md).ComSessionDialog

Centre of mass session element for drawing annotation

## Hierarchy

- [`Overlay`](ui_cell_session._internal_.Overlay.md)

  ↳ **`ComSessionDialog`**

## Table of contents

### Constructors

- [constructor](ui_com_session.ComSessionDialog.md#constructor)

### Properties

- [annotationLayerView](ui_com_session.ComSessionDialog.md#annotationlayerview)
- [colorInput](ui_com_session.ComSessionDialog.md#colorinput)
- [container](ui_com_session.ComSessionDialog.md#container)
- [content](ui_com_session.ComSessionDialog.md#content)
- [disposedStacks](ui_com_session.ComSessionDialog.md#disposedstacks)
- [keyMap](ui_com_session.ComSessionDialog.md#keymap)
- [landmarkDropdown](ui_com_session.ComSessionDialog.md#landmarkdropdown)
- [refCount](ui_com_session.ComSessionDialog.md#refcount)
- [wasDisposed](ui_com_session.ComSessionDialog.md#wasdisposed)

### Methods

- [addRef](ui_com_session.ComSessionDialog.md#addref)
- [closeSessionRow](ui_com_session.ComSessionDialog.md#closesessionrow)
- [dispose](ui_com_session.ComSessionDialog.md#dispose)
- [disposed](ui_com_session.ComSessionDialog.md#disposed)
- [getComInfoRows](ui_com_session.ComSessionDialog.md#getcominforows)
- [getEditComRow](ui_com_session.ComSessionDialog.md#geteditcomrow)
- [getLandMarkDropDown](ui_com_session.ComSessionDialog.md#getlandmarkdropdown)
- [getNewComRow](ui_com_session.ComSessionDialog.md#getnewcomrow)
- [refCountReachedZero](ui_com_session.ComSessionDialog.md#refcountreachedzero)
- [registerCancellable](ui_com_session.ComSessionDialog.md#registercancellable)
- [registerDisposer](ui_com_session.ComSessionDialog.md#registerdisposer)
- [registerEventListener](ui_com_session.ComSessionDialog.md#registereventlistener)
- [unregisterDisposer](ui_com_session.ComSessionDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new ComSessionDialog**(`annotationLayerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayerView` | [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md) |

#### Overrides

[Overlay](ui_cell_session._internal_.Overlay.md).[constructor](ui_cell_session._internal_.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/com_session.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L34)

## Properties

### annotationLayerView

• **annotationLayerView**: [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md)

___

### colorInput

• **colorInput**: `undefined` \| [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement) = `undefined`

#### Defined in

[src/neuroglancer/ui/com_session.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L33)

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

Landmark drop down to indicate the landmark for centre of mass

#### Defined in

[src/neuroglancer/ui/com_session.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L32)

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

▸ **addRef**(): [`ComSessionDialog`](ui_com_session.ComSessionDialog.md)

#### Returns

[`ComSessionDialog`](ui_com_session.ComSessionDialog.md)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[addRef](ui_cell_session._internal_.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### closeSessionRow

▸ **closeSessionRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

Returns a table row HTML element with options to close current centre of mass session.

#### Defined in

[src/neuroglancer/ui/com_session.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L146)

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

### getComInfoRows

▸ **getComInfoRows**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)[]

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)[]

Returns a table row containing the landmark and color of centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L88)

___

### getEditComRow

▸ **getEditComRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

Returns a row element of table containing the button to edit current centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L120)

___

### getLandMarkDropDown

▸ **getLandMarkDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

Returns a select HTML element containing different landmarks of centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L174)

___

### getNewComRow

▸ **getNewComRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A new row element of table containing the option to add new centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/com_session.ts#L60)

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
