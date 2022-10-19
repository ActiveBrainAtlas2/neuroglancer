[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/state\_editor](../modules/ui_state_editor.md) / StateEditorDialog

# Class: StateEditorDialog

[ui/state_editor](../modules/ui_state_editor.md).StateEditorDialog

## Hierarchy

- [`Overlay`](ui_cell_session._internal_.Overlay.md)

  ↳ **`StateEditorDialog`**

## Table of contents

### Constructors

- [constructor](ui_state_editor.StateEditorDialog.md#constructor)

### Properties

- [applyButton](ui_state_editor.StateEditorDialog.md#applybutton)
- [closeButton](ui_state_editor.StateEditorDialog.md#closebutton)
- [container](ui_state_editor.StateEditorDialog.md#container)
- [content](ui_state_editor.StateEditorDialog.md#content)
- [debouncedValueUpdater](ui_state_editor.StateEditorDialog.md#debouncedvalueupdater)
- [disposedStacks](ui_state_editor.StateEditorDialog.md#disposedstacks)
- [keyMap](ui_state_editor.StateEditorDialog.md#keymap)
- [parsedValue](ui_state_editor.StateEditorDialog.md#parsedvalue)
- [refCount](ui_state_editor.StateEditorDialog.md#refcount)
- [textEditor](ui_state_editor.StateEditorDialog.md#texteditor)
- [viewer](ui_state_editor.StateEditorDialog.md#viewer)
- [wasDisposed](ui_state_editor.StateEditorDialog.md#wasdisposed)

### Methods

- [addRef](ui_state_editor.StateEditorDialog.md#addref)
- [applyChanges](ui_state_editor.StateEditorDialog.md#applychanges)
- [dispose](ui_state_editor.StateEditorDialog.md#dispose)
- [disposed](ui_state_editor.StateEditorDialog.md#disposed)
- [getJson](ui_state_editor.StateEditorDialog.md#getjson)
- [refCountReachedZero](ui_state_editor.StateEditorDialog.md#refcountreachedzero)
- [registerCancellable](ui_state_editor.StateEditorDialog.md#registercancellable)
- [registerDisposer](ui_state_editor.StateEditorDialog.md#registerdisposer)
- [registerEventListener](ui_state_editor.StateEditorDialog.md#registereventlistener)
- [unregisterDisposer](ui_state_editor.StateEditorDialog.md#unregisterdisposer)
- [updateView](ui_state_editor.StateEditorDialog.md#updateview)

## Constructors

### constructor

• **new StateEditorDialog**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](datasource_state_share._internal_.Viewer.md) |

#### Overrides

[Overlay](ui_cell_session._internal_.Overlay.md).[constructor](ui_cell_session._internal_.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/state_editor.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L42)

## Properties

### applyButton

• **applyButton**: [`HTMLButtonElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlbuttonelement)

#### Defined in

[src/neuroglancer/ui/state_editor.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L40)

___

### closeButton

• **closeButton**: [`HTMLButtonElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlbuttonelement)

#### Defined in

[src/neuroglancer/ui/state_editor.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L41)

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

### debouncedValueUpdater

• **debouncedValueUpdater**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/state_editor.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L94)

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

### parsedValue

• **parsedValue**: `any` = `null`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L92)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[refCount](ui_cell_session._internal_.Overlay.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### textEditor

• **textEditor**: `Editor`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L39)

___

### viewer

• **viewer**: [`Viewer`](datasource_state_share._internal_.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[wasDisposed](ui_cell_session._internal_.Overlay.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`StateEditorDialog`](ui_state_editor.StateEditorDialog.md)

#### Returns

[`StateEditorDialog`](ui_state_editor.StateEditorDialog.md)

#### Inherited from

[Overlay](ui_cell_session._internal_.Overlay.md).[addRef](ui_cell_session._internal_.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### applyChanges

▸ `Private` **applyChanges**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L78)

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

### getJson

▸ **getJson**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L130)

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

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/state_editor.ts#L86)
