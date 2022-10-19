[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/cell\_session](../modules/ui_cell_session.md) / [<internal\>](../modules/ui_cell_session._internal_.md) / Overlay

# Class: Overlay

[ui/cell_session](../modules/ui_cell_session.md).[<internal>](../modules/ui_cell_session._internal_.md).Overlay

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`Overlay`**

  ↳↳ [`CellSessionDialog`](ui_cell_session.CellSessionDialog.md)

  ↳↳ [`ClonePolygonDialog`](ui_clone_polygon.ClonePolygonDialog.md)

  ↳↳ [`ComSessionDialog`](ui_com_session.ComSessionDialog.md)

  ↳↳ [`PolygonOptionsDialog`](ui_polygon_options.PolygonOptionsDialog.md)

  ↳↳ [`StateEditorDialog`](ui_state_editor.StateEditorDialog.md)

  ↳↳ [`VolumeSessionDialog`](ui_volume_session.VolumeSessionDialog.md)

## Table of contents

### Constructors

- [constructor](ui_cell_session._internal_.Overlay.md#constructor)

### Properties

- [container](ui_cell_session._internal_.Overlay.md#container)
- [content](ui_cell_session._internal_.Overlay.md#content)
- [disposedStacks](ui_cell_session._internal_.Overlay.md#disposedstacks)
- [keyMap](ui_cell_session._internal_.Overlay.md#keymap)
- [refCount](ui_cell_session._internal_.Overlay.md#refcount)
- [wasDisposed](ui_cell_session._internal_.Overlay.md#wasdisposed)

### Methods

- [addRef](ui_cell_session._internal_.Overlay.md#addref)
- [dispose](ui_cell_session._internal_.Overlay.md#dispose)
- [disposed](ui_cell_session._internal_.Overlay.md#disposed)
- [refCountReachedZero](ui_cell_session._internal_.Overlay.md#refcountreachedzero)
- [registerCancellable](ui_cell_session._internal_.Overlay.md#registercancellable)
- [registerDisposer](ui_cell_session._internal_.Overlay.md#registerdisposer)
- [registerEventListener](ui_cell_session._internal_.Overlay.md#registereventlistener)
- [unregisterDisposer](ui_cell_session._internal_.Overlay.md#unregisterdisposer)

## Constructors

### constructor

• **new Overlay**()

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/overlay.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L35)

## Properties

### container

• **container**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/overlay.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L32)

___

### content

• **content**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/overlay.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L33)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### keyMap

• **keyMap**: [`EventActionMap`](util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/overlay.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L34)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`Overlay`](ui_cell_session._internal_.Overlay.md)

#### Returns

[`Overlay`](ui_cell_session._internal_.Overlay.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/overlay.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/overlay.ts#L53)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
