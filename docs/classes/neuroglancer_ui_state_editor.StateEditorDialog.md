[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/state\_editor](../modules/neuroglancer_ui_state_editor.md) / StateEditorDialog

# Class: StateEditorDialog

[neuroglancer/ui/state_editor](../modules/neuroglancer_ui_state_editor.md).StateEditorDialog

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`Overlay`](neuroglancer_overlay.Overlay.md)

  ↳ **`StateEditorDialog`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_state_editor.StateEditorDialog.md#constructor)

### Properties

- [applyButton](neuroglancer_ui_state_editor.StateEditorDialog.md#applybutton)
- [closeButton](neuroglancer_ui_state_editor.StateEditorDialog.md#closebutton)
- [container](neuroglancer_ui_state_editor.StateEditorDialog.md#container)
- [content](neuroglancer_ui_state_editor.StateEditorDialog.md#content)
- [debouncedValueUpdater](neuroglancer_ui_state_editor.StateEditorDialog.md#debouncedvalueupdater)
- [disposedStacks](neuroglancer_ui_state_editor.StateEditorDialog.md#disposedstacks)
- [keyMap](neuroglancer_ui_state_editor.StateEditorDialog.md#keymap)
- [parsedValue](neuroglancer_ui_state_editor.StateEditorDialog.md#parsedvalue)
- [refCount](neuroglancer_ui_state_editor.StateEditorDialog.md#refcount)
- [textEditor](neuroglancer_ui_state_editor.StateEditorDialog.md#texteditor)
- [viewer](neuroglancer_ui_state_editor.StateEditorDialog.md#viewer)
- [wasDisposed](neuroglancer_ui_state_editor.StateEditorDialog.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_state_editor.StateEditorDialog.md#addref)
- [applyChanges](neuroglancer_ui_state_editor.StateEditorDialog.md#applychanges)
- [dispose](neuroglancer_ui_state_editor.StateEditorDialog.md#dispose)
- [disposed](neuroglancer_ui_state_editor.StateEditorDialog.md#disposed)
- [getJson](neuroglancer_ui_state_editor.StateEditorDialog.md#getjson)
- [refCountReachedZero](neuroglancer_ui_state_editor.StateEditorDialog.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_state_editor.StateEditorDialog.md#registercancellable)
- [registerDisposer](neuroglancer_ui_state_editor.StateEditorDialog.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_state_editor.StateEditorDialog.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_state_editor.StateEditorDialog.md#unregisterdisposer)
- [updateView](neuroglancer_ui_state_editor.StateEditorDialog.md#updateview)

## Constructors

### constructor

• **new StateEditorDialog**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |

#### Overrides

[Overlay](neuroglancer_overlay.Overlay.md).[constructor](neuroglancer_overlay.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/state_editor.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L42)

## Properties

### applyButton

• **applyButton**: [`HTMLButtonElement`](../modules/main_module._internal_.md#htmlbuttonelement)

#### Defined in

[src/neuroglancer/ui/state_editor.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L40)

___

### closeButton

• **closeButton**: [`HTMLButtonElement`](../modules/main_module._internal_.md#htmlbuttonelement)

#### Defined in

[src/neuroglancer/ui/state_editor.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L41)

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

### debouncedValueUpdater

• **debouncedValueUpdater**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/state_editor.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L94)

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

### parsedValue

• **parsedValue**: `any` = `null`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L92)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[refCount](neuroglancer_overlay.Overlay.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### textEditor

• **textEditor**: `Editor`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L39)

___

### viewer

• **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

#### Defined in

[src/neuroglancer/ui/state_editor.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L42)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[wasDisposed](neuroglancer_overlay.Overlay.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`StateEditorDialog`](neuroglancer_ui_state_editor.StateEditorDialog.md)

#### Returns

[`StateEditorDialog`](neuroglancer_ui_state_editor.StateEditorDialog.md)

#### Inherited from

[Overlay](neuroglancer_overlay.Overlay.md).[addRef](neuroglancer_overlay.Overlay.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### applyChanges

▸ `Private` **applyChanges**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L78)

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

### getJson

▸ **getJson**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L130)

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

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/state_editor.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/state_editor.ts#L86)
