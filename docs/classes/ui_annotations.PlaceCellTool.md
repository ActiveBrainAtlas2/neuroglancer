[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / PlaceCellTool

# Class: PlaceCellTool

[ui/annotations](../modules/ui_annotations.md).PlaceCellTool

This class is used to create the Cell annotation tool.

## Hierarchy

- [`PlaceAnnotationTool`](ui_annotations._internal_.PlaceAnnotationTool.md)

  ↳ **`PlaceCellTool`**

## Table of contents

### Constructors

- [constructor](ui_annotations.PlaceCellTool.md#constructor)

### Properties

- [active](ui_annotations.PlaceCellTool.md#active)
- [bindingsRef](ui_annotations.PlaceCellTool.md#bindingsref)
- [changed](ui_annotations.PlaceCellTool.md#changed)
- [disposedStacks](ui_annotations.PlaceCellTool.md#disposedstacks)
- [icon](ui_annotations.PlaceCellTool.md#icon)
- [layer](ui_annotations.PlaceCellTool.md#layer)
- [mode](ui_annotations.PlaceCellTool.md#mode)
- [refCount](ui_annotations.PlaceCellTool.md#refcount)
- [session](ui_annotations.PlaceCellTool.md#session)
- [sessionWidget](ui_annotations.PlaceCellTool.md#sessionwidget)
- [sessionWidgetDiv](ui_annotations.PlaceCellTool.md#sessionwidgetdiv)
- [wasDisposed](ui_annotations.PlaceCellTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](ui_annotations.PlaceCellTool.md#annotationcolorpicker)
- [annotationLayer](ui_annotations.PlaceCellTool.md#annotationlayer)
- [description](ui_annotations.PlaceCellTool.md#description)
- [mouseState](ui_annotations.PlaceCellTool.md#mousestate)

### Methods

- [addRef](ui_annotations.PlaceCellTool.md#addref)
- [deactivate](ui_annotations.PlaceCellTool.md#deactivate)
- [displayCellSession](ui_annotations.PlaceCellTool.md#displaycellsession)
- [dispose](ui_annotations.PlaceCellTool.md#dispose)
- [disposeSession](ui_annotations.PlaceCellTool.md#disposesession)
- [disposed](ui_annotations.PlaceCellTool.md#disposed)
- [refCountReachedZero](ui_annotations.PlaceCellTool.md#refcountreachedzero)
- [registerCancellable](ui_annotations.PlaceCellTool.md#registercancellable)
- [registerDisposer](ui_annotations.PlaceCellTool.md#registerdisposer)
- [registerEventListener](ui_annotations.PlaceCellTool.md#registereventlistener)
- [setActive](ui_annotations.PlaceCellTool.md#setactive)
- [setIconColor](ui_annotations.PlaceCellTool.md#seticoncolor)
- [toJSON](ui_annotations.PlaceCellTool.md#tojson)
- [trigger](ui_annotations.PlaceCellTool.md#trigger)
- [unbind](ui_annotations.PlaceCellTool.md#unbind)
- [unregisterDisposer](ui_annotations.PlaceCellTool.md#unregisterdisposer)
- [validateSession](ui_annotations.PlaceCellTool.md#validatesession)

## Constructors

### constructor

• **new PlaceCellTool**(`layer`, `options`, `session?`, `mode?`, `sessionDiv?`, `iconDiv?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) | `undefined` |
| `options` | `any` | `undefined` |
| `session` | `undefined` \| [`CellSession`](../interfaces/ui_annotations.CellSession.md) | `undefined` |
| `mode` | [`CellToolMode`](../enums/ui_annotations.CellToolMode.md) | `CellToolMode.NOOP` |
| `sessionDiv` | `undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) | `undefined` |
| `iconDiv` | `undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) | `undefined` |

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[constructor](ui_annotations._internal_.PlaceAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2252)

## Properties

### active

• **active**: `boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2245)

___

### bindingsRef

• **bindingsRef**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2250)

___

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[changed](ui_annotations._internal_.PlaceAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[disposedStacks](ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### icon

• **icon**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:2249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2249)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[layer](ui_annotations._internal_.PlaceAnnotationTool.md#layer)

___

### mode

• **mode**: [`CellToolMode`](../enums/ui_annotations.CellToolMode.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2244)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[refCount](ui_annotations._internal_.PlaceAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### session

• **session**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| [`CellSession`](../interfaces/ui_annotations.CellSession.md)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:2246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2246)

___

### sessionWidget

• **sessionWidget**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2247)

___

### sessionWidgetDiv

• **sessionWidgetDiv**: `undefined` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2248)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[wasDisposed](ui_annotations._internal_.PlaceAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1215)

___

### description

• `get` **description**(): ``"cell session (draw mode)"`` \| ``"cell session (edit mode)"`` \| ``"cell session (view mode)"``

#### Returns

``"cell session (draw mode)"`` \| ``"cell session (edit mode)"`` \| ``"cell session (view mode)"``

#### Overrides

PlaceAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:2496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2496)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

PlaceAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceCellTool`](ui_annotations.PlaceCellTool.md)

#### Returns

[`PlaceCellTool`](ui_annotations.PlaceCellTool.md)

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[addRef](ui_annotations._internal_.PlaceAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[deactivate](ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2371)

___

### displayCellSession

▸ **displayCellSession**(): `void`

This function is used to display the Cell session data in the annotation tabs
while the user is annotating.

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2404)

___

### dispose

▸ **dispose**(): `void`

Disposes the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[dispose](ui_annotations._internal_.PlaceAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2336)

___

### disposeSession

▸ `Private` **disposeSession**(): `void`

Deletes the current active session

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2380)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[disposed](ui_annotations._internal_.PlaceAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[refCountReachedZero](ui_annotations._internal_.PlaceAnnotationTool.md#refcountreachedzero)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[registerCancellable](ui_annotations._internal_.PlaceAnnotationTool.md#registercancellable)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[registerDisposer](ui_annotations._internal_.PlaceAnnotationTool.md#registerdisposer)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[registerEventListener](ui_annotations._internal_.PlaceAnnotationTool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### setActive

▸ **setActive**(`_value`): `void`

Activates the annotation tool if value is true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `boolean` |

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[setActive](ui_annotations._internal_.PlaceAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2347)

___

### setIconColor

▸ **setIconColor**(): `void`

Sets the icon color of the volume tool based on the type of mode

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2280)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[toJSON](ui_annotations._internal_.PlaceAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2507](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2507)

___

### trigger

▸ **trigger**(`mouseState`): `void`

This function is called when the user tries to draw annotation

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`void`

void

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[trigger](ui_annotations._internal_.PlaceAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2302)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[unbind](ui_annotations._internal_.PlaceAnnotationTool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L89)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[unregisterDisposer](ui_annotations._internal_.PlaceAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### validateSession

▸ **validateSession**(`annotationId`, `annotationLayer`): `boolean`

Valides the session, that is if the volume id edited is the current active session or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `undefined` \| `string` |
| `annotationLayer` | `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2391)
