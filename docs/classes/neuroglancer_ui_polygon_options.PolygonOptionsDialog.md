[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/polygon\_options](../modules/neuroglancer_ui_polygon_options.md) / PolygonOptionsDialog

# Class: PolygonOptionsDialog

[neuroglancer/ui/polygon_options](../modules/neuroglancer_ui_polygon_options.md).PolygonOptionsDialog

This class is used to create HTML element for displaying polygon configuration
and polygon controls.

## Hierarchy

- [`Overlay`](neuroglancer_overlay.Overlay.md)

  ↳ **`PolygonOptionsDialog`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#constructor)

### Properties

- [container](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#container)
- [content](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#content)
- [disposedStacks](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#disposedstacks)
- [keyMap](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#keymap)
- [refCount](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#refcount)
- [rotatePolygonTextEle](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#rotatepolygontextele)
- [scalePolygonTextEle](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#scalepolygontextele)
- [sectionOffsetTextEle](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#sectionoffsettextele)
- [wasDisposed](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#addref)
- [dispose](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#dispose)
- [disposed](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#disposed)
- [getCheatSheetTable](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#getcheatsheettable)
- [getCloneConfigRow](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#getcloneconfigrow)
- [getColGroupRow](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#getcolgrouprow)
- [getRotateConfigRow](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#getrotateconfigrow)
- [getScaleConfigRow](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#getscaleconfigrow)
- [refCountReachedZero](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#registercancellable)
- [registerDisposer](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new PolygonOptionsDialog**()

#### Overrides

[Overlay](neuroglancer_overlay.Overlay.md).[constructor](neuroglancer_overlay.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L125)

## Properties

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

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[refCount](neuroglancer_overlay.Overlay.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### rotatePolygonTextEle

• **rotatePolygonTextEle**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

Contains rotation amount in each rotate opeartion

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L124)

___

### scalePolygonTextEle

• **scalePolygonTextEle**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

Contains scale percentage in each scale opeartion

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L122)

___

### sectionOffsetTextEle

• **sectionOffsetTextEle**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

sectionOffsetTextEle contains clone offset related info

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L120)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[wasDisposed](neuroglancer_overlay.Overlay.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`PolygonOptionsDialog`](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md)

#### Returns

[`PolygonOptionsDialog`](neuroglancer_ui_polygon_options.PolygonOptionsDialog.md)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[addRef](neuroglancer_overlay.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

### getCheatSheetTable

▸ **getCheatSheetTable**(): [`HTMLTableElement`](../modules/main_module._internal_.md#htmltableelement)

#### Returns

[`HTMLTableElement`](../modules/main_module._internal_.md#htmltableelement)

Returns a cheat sheet table HTML element containing the 
list of polygon controls

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L320)

___

### getCloneConfigRow

▸ **getCloneConfigRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

Returns a table row element containing information about
the clone offset.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L198)

___

### getColGroupRow

▸ **getColGroupRow**(): [`HTMLTableColElement`](../modules/main_module._internal_.md#htmltablecolelement)

#### Returns

[`HTMLTableColElement`](../modules/main_module._internal_.md#htmltablecolelement)

Returns the elements of this table in a column format.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L182)

___

### getRotateConfigRow

▸ **getRotateConfigRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

Returns a row element containing information about rotation of polygon.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L275)

___

### getScaleConfigRow

▸ **getScaleConfigRow**(): [`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/main_module._internal_.md#htmltablerowelement)

Returns a row containing information about polygon scaling information.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/polygon_options.ts#L231)

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
