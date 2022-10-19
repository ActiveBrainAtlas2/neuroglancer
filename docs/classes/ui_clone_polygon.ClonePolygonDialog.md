[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/clone\_polygon](../modules/ui_clone_polygon.md) / ClonePolygonDialog

# Class: ClonePolygonDialog

[ui/clone_polygon](../modules/ui_clone_polygon.md).ClonePolygonDialog

## Hierarchy

- [`Overlay`](ui_cell_session._internal_.Overlay.md)

  ↳ **`ClonePolygonDialog`**

## Table of contents

### Constructors

- [constructor](ui_clone_polygon.ClonePolygonDialog.md#constructor)

### Properties

- [annotationId](ui_clone_polygon.ClonePolygonDialog.md#annotationid)
- [annotationLayer](ui_clone_polygon.ClonePolygonDialog.md#annotationlayer)
- [container](ui_clone_polygon.ClonePolygonDialog.md#container)
- [content](ui_clone_polygon.ClonePolygonDialog.md#content)
- [disposedStacks](ui_clone_polygon.ClonePolygonDialog.md#disposedstacks)
- [keyMap](ui_clone_polygon.ClonePolygonDialog.md#keymap)
- [navigationState](ui_clone_polygon.ClonePolygonDialog.md#navigationstate)
- [refCount](ui_clone_polygon.ClonePolygonDialog.md#refcount)
- [wasDisposed](ui_clone_polygon.ClonePolygonDialog.md#wasdisposed)

### Methods

- [addRef](ui_clone_polygon.ClonePolygonDialog.md#addref)
- [dispose](ui_clone_polygon.ClonePolygonDialog.md#dispose)
- [disposed](ui_clone_polygon.ClonePolygonDialog.md#disposed)
- [refCountReachedZero](ui_clone_polygon.ClonePolygonDialog.md#refcountreachedzero)
- [registerCancellable](ui_clone_polygon.ClonePolygonDialog.md#registercancellable)
- [registerDisposer](ui_clone_polygon.ClonePolygonDialog.md#registerdisposer)
- [registerEventListener](ui_clone_polygon.ClonePolygonDialog.md#registereventlistener)
- [unregisterDisposer](ui_clone_polygon.ClonePolygonDialog.md#unregisterdisposer)

## Constructors

### constructor

• **new ClonePolygonDialog**(`navigationState`, `annotationId`, `annotationLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `navigationState` | [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\> |
| `annotationId` | `string` |
| `annotationLayer` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Overrides

[Overlay](ui_cell_session._internal_.Overlay.md).[constructor](ui_cell_session._internal_.Overlay.md#constructor)

#### Defined in

[src/neuroglancer/ui/clone_polygon.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/clone_polygon.ts#L31)

## Properties

### annotationId

• **annotationId**: `string`

#### Defined in

[src/neuroglancer/ui/clone_polygon.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/clone_polygon.ts#L29)

___

### annotationLayer

• **annotationLayer**: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Defined in

[src/neuroglancer/ui/clone_polygon.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/clone_polygon.ts#L30)

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

### navigationState

• **navigationState**: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/ui/clone_polygon.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/clone_polygon.ts#L28)

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

▸ **addRef**(): [`ClonePolygonDialog`](ui_clone_polygon.ClonePolygonDialog.md)

#### Returns

[`ClonePolygonDialog`](ui_clone_polygon.ClonePolygonDialog.md)

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
