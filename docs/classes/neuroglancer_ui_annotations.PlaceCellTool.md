[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / PlaceCellTool

# Class: PlaceCellTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).PlaceCellTool

This class is used to create the Cell annotation tool.

## Hierarchy

- [`PlaceAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md)

  ↳ **`PlaceCellTool`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations.PlaceCellTool.md#constructor)

### Properties

- [active](neuroglancer_ui_annotations.PlaceCellTool.md#active)
- [bindingsRef](neuroglancer_ui_annotations.PlaceCellTool.md#bindingsref)
- [changed](neuroglancer_ui_annotations.PlaceCellTool.md#changed)
- [disposedStacks](neuroglancer_ui_annotations.PlaceCellTool.md#disposedstacks)
- [icon](neuroglancer_ui_annotations.PlaceCellTool.md#icon)
- [layer](neuroglancer_ui_annotations.PlaceCellTool.md#layer)
- [mode](neuroglancer_ui_annotations.PlaceCellTool.md#mode)
- [refCount](neuroglancer_ui_annotations.PlaceCellTool.md#refcount)
- [session](neuroglancer_ui_annotations.PlaceCellTool.md#session)
- [sessionWidget](neuroglancer_ui_annotations.PlaceCellTool.md#sessionwidget)
- [sessionWidgetDiv](neuroglancer_ui_annotations.PlaceCellTool.md#sessionwidgetdiv)
- [wasDisposed](neuroglancer_ui_annotations.PlaceCellTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations.PlaceCellTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations.PlaceCellTool.md#annotationlayer)
- [description](neuroglancer_ui_annotations.PlaceCellTool.md#description)
- [mouseState](neuroglancer_ui_annotations.PlaceCellTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations.PlaceCellTool.md#addref)
- [deactivate](neuroglancer_ui_annotations.PlaceCellTool.md#deactivate)
- [displayCellSession](neuroglancer_ui_annotations.PlaceCellTool.md#displaycellsession)
- [dispose](neuroglancer_ui_annotations.PlaceCellTool.md#dispose)
- [disposeSession](neuroglancer_ui_annotations.PlaceCellTool.md#disposesession)
- [disposed](neuroglancer_ui_annotations.PlaceCellTool.md#disposed)
- [refCountReachedZero](neuroglancer_ui_annotations.PlaceCellTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations.PlaceCellTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations.PlaceCellTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations.PlaceCellTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations.PlaceCellTool.md#setactive)
- [setIconColor](neuroglancer_ui_annotations.PlaceCellTool.md#seticoncolor)
- [toJSON](neuroglancer_ui_annotations.PlaceCellTool.md#tojson)
- [trigger](neuroglancer_ui_annotations.PlaceCellTool.md#trigger)
- [unbind](neuroglancer_ui_annotations.PlaceCellTool.md#unbind)
- [unregisterDisposer](neuroglancer_ui_annotations.PlaceCellTool.md#unregisterdisposer)
- [validateSession](neuroglancer_ui_annotations.PlaceCellTool.md#validatesession)

## Constructors

### constructor

• **new PlaceCellTool**(`layer`, `options`, `session?`, `mode?`, `sessionDiv?`, `iconDiv?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) | `undefined` |
| `options` | `any` | `undefined` |
| `session` | `undefined` \| [`CellSession`](../interfaces/neuroglancer_ui_annotations.CellSession.md) | `undefined` |
| `mode` | [`CellToolMode`](../enums/neuroglancer_ui_annotations.CellToolMode.md) | `CellToolMode.NOOP` |
| `sessionDiv` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | `undefined` |
| `iconDiv` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | `undefined` |

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[constructor](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2252)

## Properties

### active

• **active**: `boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2245)

___

### bindingsRef

• **bindingsRef**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2250)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[changed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[disposedStacks](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### icon

• **icon**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:2249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2249)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[layer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2252)

___

### mode

• **mode**: [`CellToolMode`](../enums/neuroglancer_ui_annotations.CellToolMode.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2244)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[refCount](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### session

• **session**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`CellSession`](../interfaces/neuroglancer_ui_annotations.CellSession.md)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:2246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2246)

___

### sessionWidget

• **sessionWidget**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2247)

___

### sessionWidgetDiv

• **sessionWidgetDiv**: `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2248)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[wasDisposed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1215)

___

### description

• `get` **description**(): ``"cell session (draw mode)"`` \| ``"cell session (edit mode)"`` \| ``"cell session (view mode)"``

#### Returns

``"cell session (draw mode)"`` \| ``"cell session (edit mode)"`` \| ``"cell session (view mode)"``

#### Overrides

PlaceAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:2496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2496)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

PlaceAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceCellTool`](neuroglancer_ui_annotations.PlaceCellTool.md)

#### Returns

[`PlaceCellTool`](neuroglancer_ui_annotations.PlaceCellTool.md)

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[addRef](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[deactivate](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2371)

___

### displayCellSession

▸ **displayCellSession**(): `void`

This function is used to display the Cell session data in the annotation tabs
while the user is annotating.

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2404)

___

### dispose

▸ **dispose**(): `void`

Disposes the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[dispose](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2336)

___

### disposeSession

▸ `Private` **disposeSession**(): `void`

Deletes the current active session

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2380)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[disposed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[refCountReachedZero](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#refcountreachedzero)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[registerCancellable](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registercancellable)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[registerDisposer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registerdisposer)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[registerEventListener](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[setActive](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2347)

___

### setIconColor

▸ **setIconColor**(): `void`

Sets the icon color of the volume tool based on the type of mode

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2280)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[toJSON](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2507](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2507)

___

### trigger

▸ **trigger**(`mouseState`): `void`

This function is called when the user tries to draw annotation

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`void`

void

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[trigger](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2302)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[unbind](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L89)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[unregisterDisposer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### validateSession

▸ **validateSession**(`annotationId`, `annotationLayer`): `boolean`

Valides the session, that is if the volume id edited is the current active session or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `undefined` \| `string` |
| `annotationLayer` | `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2391)
