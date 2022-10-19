[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/volume\_session](../modules/ui_volume_session.md) / VolumeSessionDialog

# Class: VolumeSessionDialog

[ui/volume_session](../modules/ui_volume_session.md).VolumeSessionDialog

A Class to create HTML Element for annotation volumes.

## Hierarchy

- [`Overlay`](ui_cell_session._internal_.Overlay.md)

  ↳ **`VolumeSessionDialog`**

## Table of contents

### Constructors

- [constructor](ui_volume_session.VolumeSessionDialog.md#constructor)

### Properties

- [annotationLayerView](ui_volume_session.VolumeSessionDialog.md#annotationlayerview)
- [colorInput](ui_volume_session.VolumeSessionDialog.md#colorinput)
- [container](ui_volume_session.VolumeSessionDialog.md#container)
- [content](ui_volume_session.VolumeSessionDialog.md#content)
- [disposedStacks](ui_volume_session.VolumeSessionDialog.md#disposedstacks)
- [keyMap](ui_volume_session.VolumeSessionDialog.md#keymap)
- [landmarkDropdown](ui_volume_session.VolumeSessionDialog.md#landmarkdropdown)
- [refCount](ui_volume_session.VolumeSessionDialog.md#refcount)
- [wasDisposed](ui_volume_session.VolumeSessionDialog.md#wasdisposed)

### Methods

- [addRef](ui_volume_session.VolumeSessionDialog.md#addref)
- [closeSessionRow](ui_volume_session.VolumeSessionDialog.md#closesessionrow)
- [dispose](ui_volume_session.VolumeSessionDialog.md#dispose)
- [disposed](ui_volume_session.VolumeSessionDialog.md#disposed)
- [getEditVolumeRow](ui_volume_session.VolumeSessionDialog.md#geteditvolumerow)
- [getLandMarkDropDown](ui_volume_session.VolumeSessionDialog.md#getlandmarkdropdown)
- [getNewVolumeRow](ui_volume_session.VolumeSessionDialog.md#getnewvolumerow)
- [getSegmentationRow](ui_volume_session.VolumeSessionDialog.md#getsegmentationrow)
- [getVolumeInfoRows](ui_volume_session.VolumeSessionDialog.md#getvolumeinforows)
- [refCountReachedZero](ui_volume_session.VolumeSessionDialog.md#refcountreachedzero)
- [registerCancellable](ui_volume_session.VolumeSessionDialog.md#registercancellable)
- [registerDisposer](ui_volume_session.VolumeSessionDialog.md#registerdisposer)
- [registerEventListener](ui_volume_session.VolumeSessionDialog.md#registereventlistener)
- [unregisterDisposer](ui_volume_session.VolumeSessionDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new VolumeSessionDialog**(`annotationLayerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayerView` | [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md) |

#### Overrides

[Overlay](ui_cell_session._internal_.Overlay.md).[constructor](ui_cell_session._internal_.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/volume_session.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L39)

## Properties

### annotationLayerView

• **annotationLayerView**: [`AnnotationLayerView`](ui_annotations.AnnotationLayerView.md)

___

### colorInput

• **colorInput**: `undefined` \| [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement) = `undefined`

Color element for selecting color for annotations

#### Defined in

[src/neuroglancer/ui/volume_session.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L38)

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

Landmark dropdown containing landmarks of volumes

#### Defined in

[src/neuroglancer/ui/volume_session.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L36)

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

▸ **addRef**(): [`VolumeSessionDialog`](ui_volume_session.VolumeSessionDialog.md)

#### Returns

[`VolumeSessionDialog`](ui_volume_session.VolumeSessionDialog.md)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[addRef](ui_cell_session._internal_.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### closeSessionRow

▸ **closeSessionRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A html row element containing information about closing the current active volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L201)

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

### getEditVolumeRow

▸ **getEditVolumeRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A html row element containing information about starting a edit session for volume.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L134)

___

### getLandMarkDropDown

▸ **getLandMarkDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

A html select element containing all the landmarks for the volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L229)

___

### getNewVolumeRow

▸ **getNewVolumeRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A HTML table row containing information to start a new volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L67)

___

### getSegmentationRow

▸ **getSegmentationRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

This is currently disabled as it needs to run as a background process and it
also needs to allow the apache user write access to the NFS filesystem.

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

A html row element containing information about segmentation feature of volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L256)

___

### getVolumeInfoRows

▸ **getVolumeInfoRows**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)[]

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)[]

A html row element containing information about landmark and color for the volumes.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/volume_session.ts#L102)

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
