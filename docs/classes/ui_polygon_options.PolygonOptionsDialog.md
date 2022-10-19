[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/polygon\_options](../modules/ui_polygon_options.md) / PolygonOptionsDialog

# Class: PolygonOptionsDialog

[ui/polygon_options](../modules/ui_polygon_options.md).PolygonOptionsDialog

This class is used to create HTML element for displaying polygon configuration
and polygon controls.

## Hierarchy

- [`Overlay`](ui_cell_session._internal_.Overlay.md)

  ↳ **`PolygonOptionsDialog`**

## Table of contents

### Constructors

- [constructor](ui_polygon_options.PolygonOptionsDialog.md#constructor)

### Properties

- [container](ui_polygon_options.PolygonOptionsDialog.md#container)
- [content](ui_polygon_options.PolygonOptionsDialog.md#content)
- [disposedStacks](ui_polygon_options.PolygonOptionsDialog.md#disposedstacks)
- [keyMap](ui_polygon_options.PolygonOptionsDialog.md#keymap)
- [refCount](ui_polygon_options.PolygonOptionsDialog.md#refcount)
- [rotatePolygonTextEle](ui_polygon_options.PolygonOptionsDialog.md#rotatepolygontextele)
- [scalePolygonTextEle](ui_polygon_options.PolygonOptionsDialog.md#scalepolygontextele)
- [sectionOffsetTextEle](ui_polygon_options.PolygonOptionsDialog.md#sectionoffsettextele)
- [wasDisposed](ui_polygon_options.PolygonOptionsDialog.md#wasdisposed)

### Methods

- [addRef](ui_polygon_options.PolygonOptionsDialog.md#addref)
- [dispose](ui_polygon_options.PolygonOptionsDialog.md#dispose)
- [disposed](ui_polygon_options.PolygonOptionsDialog.md#disposed)
- [getCheatSheetTable](ui_polygon_options.PolygonOptionsDialog.md#getcheatsheettable)
- [getCloneConfigRow](ui_polygon_options.PolygonOptionsDialog.md#getcloneconfigrow)
- [getColGroupRow](ui_polygon_options.PolygonOptionsDialog.md#getcolgrouprow)
- [getRotateConfigRow](ui_polygon_options.PolygonOptionsDialog.md#getrotateconfigrow)
- [getScaleConfigRow](ui_polygon_options.PolygonOptionsDialog.md#getscaleconfigrow)
- [refCountReachedZero](ui_polygon_options.PolygonOptionsDialog.md#refcountreachedzero)
- [registerCancellable](ui_polygon_options.PolygonOptionsDialog.md#registercancellable)
- [registerDisposer](ui_polygon_options.PolygonOptionsDialog.md#registerdisposer)
- [registerEventListener](ui_polygon_options.PolygonOptionsDialog.md#registereventlistener)
- [unregisterDisposer](ui_polygon_options.PolygonOptionsDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new PolygonOptionsDialog**()

#### Overrides

[Overlay](ui_cell_session._internal_.Overlay.md).[constructor](ui_cell_session._internal_.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L125)

## Properties

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

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[refCount](ui_cell_session._internal_.Overlay.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### rotatePolygonTextEle

• **rotatePolygonTextEle**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

Contains rotation amount in each rotate opeartion

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L124)

___

### scalePolygonTextEle

• **scalePolygonTextEle**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

Contains scale percentage in each scale opeartion

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L122)

___

### sectionOffsetTextEle

• **sectionOffsetTextEle**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

sectionOffsetTextEle contains clone offset related info

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L120)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[wasDisposed](ui_cell_session._internal_.Overlay.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`PolygonOptionsDialog`](ui_polygon_options.PolygonOptionsDialog.md)

#### Returns

[`PolygonOptionsDialog`](ui_polygon_options.PolygonOptionsDialog.md)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[addRef](ui_cell_session._internal_.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

### getCheatSheetTable

▸ **getCheatSheetTable**(): [`HTMLTableElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltableelement)

#### Returns

[`HTMLTableElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltableelement)

Returns a cheat sheet table HTML element containing the
list of polygon controls

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L320)

___

### getCloneConfigRow

▸ **getCloneConfigRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

Returns a table row element containing information about
the clone offset.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L198)

___

### getColGroupRow

▸ **getColGroupRow**(): [`HTMLTableColElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablecolelement)

#### Returns

[`HTMLTableColElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablecolelement)

Returns the elements of this table in a column format.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L182)

___

### getRotateConfigRow

▸ **getRotateConfigRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

Returns a row element containing information about rotation of polygon.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L275)

___

### getScaleConfigRow

▸ **getScaleConfigRow**(): [`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

#### Returns

[`HTMLTableRowElement`](../modules/annotation_annotation_layer_state._internal_.md#htmltablerowelement)

Returns a row containing information about polygon scaling information.

#### Defined in

[src/neuroglancer/ui/polygon_options.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/polygon_options.ts#L231)

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
