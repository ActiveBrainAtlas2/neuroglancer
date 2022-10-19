[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/volume\_session](../modules/neuroglancer_ui_volume_session.md) / VolumeSessionDialog

# Class: VolumeSessionDialog

[neuroglancer/ui/volume_session](../modules/neuroglancer_ui_volume_session.md).VolumeSessionDialog

A Class to create HTML Element for annotation volumes.

## Hierarchy

- [`Overlay`](neuroglancer_overlay.Overlay.md)

  ↳ **`VolumeSessionDialog`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_volume_session.VolumeSessionDialog.md#constructor)

### Properties

- [annotationLayerView](neuroglancer_ui_volume_session.VolumeSessionDialog.md#annotationlayerview)
- [colorInput](neuroglancer_ui_volume_session.VolumeSessionDialog.md#colorinput)
- [container](neuroglancer_ui_volume_session.VolumeSessionDialog.md#container)
- [content](neuroglancer_ui_volume_session.VolumeSessionDialog.md#content)
- [disposedStacks](neuroglancer_ui_volume_session.VolumeSessionDialog.md#disposedstacks)
- [keyMap](neuroglancer_ui_volume_session.VolumeSessionDialog.md#keymap)
- [landmarkDropdown](neuroglancer_ui_volume_session.VolumeSessionDialog.md#landmarkdropdown)
- [refCount](neuroglancer_ui_volume_session.VolumeSessionDialog.md#refcount)
- [wasDisposed](neuroglancer_ui_volume_session.VolumeSessionDialog.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_volume_session.VolumeSessionDialog.md#addref)
- [closeSessionRow](neuroglancer_ui_volume_session.VolumeSessionDialog.md#closesessionrow)
- [dispose](neuroglancer_ui_volume_session.VolumeSessionDialog.md#dispose)
- [disposed](neuroglancer_ui_volume_session.VolumeSessionDialog.md#disposed)
- [getEditVolumeRow](neuroglancer_ui_volume_session.VolumeSessionDialog.md#geteditvolumerow)
- [getLandMarkDropDown](neuroglancer_ui_volume_session.VolumeSessionDialog.md#getlandmarkdropdown)
- [getNewVolumeRow](neuroglancer_ui_volume_session.VolumeSessionDialog.md#getnewvolumerow)
- [getSegmentationRow](neuroglancer_ui_volume_session.VolumeSessionDialog.md#getsegmentationrow)
- [getVolumeInfoRows](neuroglancer_ui_volume_session.VolumeSessionDialog.md#getvolumeinforows)
- [refCountReachedZero](neuroglancer_ui_volume_session.VolumeSessionDialog.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_volume_session.VolumeSessionDialog.md#registercancellable)
- [registerDisposer](neuroglancer_ui_volume_session.VolumeSessionDialog.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_volume_session.VolumeSessionDialog.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_volume_session.VolumeSessionDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new VolumeSessionDialog**(`annotationLayerView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationLayerView` | [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md) |

#### Overrides

[Overlay](neuroglancer_overlay.Overlay.md).[constructor](neuroglancer_overlay.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/volume_session.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L39)

## Properties

### annotationLayerView

• **annotationLayerView**: [`AnnotationLayerView`](neuroglancer_ui_annotations.AnnotationLayerView.md)

___

### colorInput

• **colorInput**: `undefined` \| [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) = `undefined`

Color element for selecting color for annotations

#### Defined in

[src/neuroglancer/ui/volume_session.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L38)

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

Landmark dropdown containing landmarks of volumes

#### Defined in

[src/neuroglancer/ui/volume_session.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L36)

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

▸ **addRef**(): [`VolumeSessionDialog`](neuroglancer_ui_volume_session.VolumeSessionDialog.md)

#### Returns

[`VolumeSessionDialog`](neuroglancer_ui_volume_session.VolumeSessionDialog.md)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[addRef](neuroglancer_overlay.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### closeSessionRow

▸ **closeSessionRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A html row element containing information about closing the current active volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L201)

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

### getEditVolumeRow

▸ **getEditVolumeRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A html row element containing information about starting a edit session for volume.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L134)

___

### getLandMarkDropDown

▸ **getLandMarkDropDown**(): `HTMLSelectElement`

#### Returns

`HTMLSelectElement`

A html select element containing all the landmarks for the volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L229)

___

### getNewVolumeRow

▸ **getNewVolumeRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A HTML table row containing information to start a new volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L67)

___

### getSegmentationRow

▸ **getSegmentationRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

This is currently disabled as it needs to run as a background process and it
also needs to allow the apache user write access to the NFS filesystem.

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

A html row element containing information about segmentation feature of volume session.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L256)

___

### getVolumeInfoRows

▸ **getVolumeInfoRows**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)[]

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)[]

A html row element containing information about landmark and color for the volumes.

#### Defined in

[src/neuroglancer/ui/volume_session.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/volume_session.ts#L102)

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
