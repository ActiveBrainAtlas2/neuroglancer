[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/com\_session](../modules/neuroglancer_ui_com_session.md) / ComSessionDialog

# Class: ComSessionDialog

[neuroglancer/ui/com_session](../modules/neuroglancer_ui_com_session.md).ComSessionDialog

Centre of mass session element for drawing annotation

## Hierarchy

- [`Overlay`](neuroglancer_overlay.Overlay.md)

  ↳ **`ComSessionDialog`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_com_session.ComSessionDialog.md#constructor)

### Properties

- [annotationLayerView](neuroglancer_ui_com_session.ComSessionDialog.md#annotationlayerview)
- [colorInput](neuroglancer_ui_com_session.ComSessionDialog.md#colorinput)
- [container](neuroglancer_ui_com_session.ComSessionDialog.md#container)
- [content](neuroglancer_ui_com_session.ComSessionDialog.md#content)
- [disposedStacks](neuroglancer_ui_com_session.ComSessionDialog.md#disposedstacks)
- [keyMap](neuroglancer_ui_com_session.ComSessionDialog.md#keymap)
- [landmarkDropdown](neuroglancer_ui_com_session.ComSessionDialog.md#landmarkdropdown)
- [refCount](neuroglancer_ui_com_session.ComSessionDialog.md#refcount)
- [wasDisposed](neuroglancer_ui_com_session.ComSessionDialog.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_com_session.ComSessionDialog.md#addref)
- [closeSessionRow](neuroglancer_ui_com_session.ComSessionDialog.md#closesessionrow)
- [dispose](neuroglancer_ui_com_session.ComSessionDialog.md#dispose)
- [disposed](neuroglancer_ui_com_session.ComSessionDialog.md#disposed)
- [getComInfoRows](neuroglancer_ui_com_session.ComSessionDialog.md#getcominforows)
- [getEditComRow](neuroglancer_ui_com_session.ComSessionDialog.md#geteditcomrow)
- [getLandMarkDropDown](neuroglancer_ui_com_session.ComSessionDialog.md#getlandmarkdropdown)
- [getNewComRow](neuroglancer_ui_com_session.ComSessionDialog.md#getnewcomrow)
- [refCountReachedZero](neuroglancer_ui_com_session.ComSessionDialog.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_com_session.ComSessionDialog.md#registercancellable)
- [registerDisposer](neuroglancer_ui_com_session.ComSessionDialog.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_com_session.ComSessionDialog.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_com_session.ComSessionDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new ComSessionDialog**(`annotationLayerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayerView` | [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md) |

#### Overrides

[Overlay](neuroglancer_overlay.Overlay.md).[constructor](neuroglancer_overlay.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/com_session.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L34)

## Properties

### annotationLayerView

• **annotationLayerView**: [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md)

#### Defined in

[src/neuroglancer/ui/com_session.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L34)

___

### colorInput

• **colorInput**: `undefined` \| [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) = `undefined`

#### Defined in

[src/neuroglancer/ui/com_session.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L33)

___

### container

• **container**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[container](neuroglancer_overlay.Overlay.md#container)

#### Defined in

[src/neuroglancer/overlay.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/overlay.ts#L32)

___

### content

• **content**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[content](neuroglancer_overlay.Overlay.md#content)

#### Defined in

[src/neuroglancer/overlay.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/overlay.ts#L33)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[disposedStacks](neuroglancer_overlay.Overlay.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### keyMap

• **keyMap**: [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[keyMap](neuroglancer_overlay.Overlay.md#keymap)

#### Defined in

[src/neuroglancer/overlay.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/overlay.ts#L34)

___

### landmarkDropdown

• **landmarkDropdown**: `undefined` \| `HTMLSelectElement` = `undefined`

Landmark drop down to indicate the landmark for centre of mass

#### Defined in

[src/neuroglancer/ui/com_session.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L32)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[refCount](neuroglancer_overlay.Overlay.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[wasDisposed](neuroglancer_overlay.Overlay.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ComSessionDialog`](neuroglancer_ui_com_session.ComSessionDialog.md)

#### Returns

[`ComSessionDialog`](neuroglancer_ui_com_session.ComSessionDialog.md)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[addRef](neuroglancer_overlay.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### closeSessionRow

▸ **closeSessionRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

Returns a table row HTML element with options to close current centre of mass session.

#### Defined in

[src/neuroglancer/ui/com_session.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L146)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[dispose](neuroglancer_overlay.Overlay.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[disposed](neuroglancer_overlay.Overlay.md#disposed)

#### Defined in

[src/neuroglancer/overlay.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/overlay.ts#L53)

___

### getComInfoRows

▸ **getComInfoRows**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)[]

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)[]

Returns a table row containing the landmark and color of centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L88)

___

### getEditComRow

▸ **getEditComRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

Returns a row element of table containing the button to edit current centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L120)

___

### getLandMarkDropDown

▸ **getLandMarkDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

Returns a select HTML element containing different landmarks of centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L174)

___

### getNewComRow

▸ **getNewComRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A new row element of table containing the option to add new centre of mass.

#### Defined in

[src/neuroglancer/ui/com_session.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/com_session.ts#L60)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[refCountReachedZero](neuroglancer_overlay.Overlay.md#refcountreachedzero)

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

[Overlay](neuroglancer_overlay.Overlay.md).[registerCancellable](neuroglancer_overlay.Overlay.md#registercancellable)

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

[Overlay](neuroglancer_overlay.Overlay.md).[registerDisposer](neuroglancer_overlay.Overlay.md#registerdisposer)

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

[Overlay](neuroglancer_overlay.Overlay.md).[registerEventListener](neuroglancer_overlay.Overlay.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
