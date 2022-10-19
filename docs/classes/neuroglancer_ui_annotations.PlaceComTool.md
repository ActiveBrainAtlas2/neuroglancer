[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / PlaceComTool

# Class: PlaceComTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).PlaceComTool

This class is used to create the Centre of Mass (COM) annotation tool.

## Hierarchy

- [`PlaceAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md)

  ↳ **`PlaceComTool`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations.PlaceComTool.md#constructor)

### Properties

- [active](neuroglancer_ui_annotations.PlaceComTool.md#active)
- [bindingsRef](neuroglancer_ui_annotations.PlaceComTool.md#bindingsref)
- [changed](neuroglancer_ui_annotations.PlaceComTool.md#changed)
- [disposedStacks](neuroglancer_ui_annotations.PlaceComTool.md#disposedstacks)
- [icon](neuroglancer_ui_annotations.PlaceComTool.md#icon)
- [layer](neuroglancer_ui_annotations.PlaceComTool.md#layer)
- [mode](neuroglancer_ui_annotations.PlaceComTool.md#mode)
- [refCount](neuroglancer_ui_annotations.PlaceComTool.md#refcount)
- [session](neuroglancer_ui_annotations.PlaceComTool.md#session)
- [sessionWidget](neuroglancer_ui_annotations.PlaceComTool.md#sessionwidget)
- [sessionWidgetDiv](neuroglancer_ui_annotations.PlaceComTool.md#sessionwidgetdiv)
- [wasDisposed](neuroglancer_ui_annotations.PlaceComTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations.PlaceComTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations.PlaceComTool.md#annotationlayer)
- [description](neuroglancer_ui_annotations.PlaceComTool.md#description)
- [mouseState](neuroglancer_ui_annotations.PlaceComTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations.PlaceComTool.md#addref)
- [deactivate](neuroglancer_ui_annotations.PlaceComTool.md#deactivate)
- [displayComSession](neuroglancer_ui_annotations.PlaceComTool.md#displaycomsession)
- [dispose](neuroglancer_ui_annotations.PlaceComTool.md#dispose)
- [disposeSession](neuroglancer_ui_annotations.PlaceComTool.md#disposesession)
- [disposed](neuroglancer_ui_annotations.PlaceComTool.md#disposed)
- [refCountReachedZero](neuroglancer_ui_annotations.PlaceComTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations.PlaceComTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations.PlaceComTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations.PlaceComTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations.PlaceComTool.md#setactive)
- [setIconColor](neuroglancer_ui_annotations.PlaceComTool.md#seticoncolor)
- [toJSON](neuroglancer_ui_annotations.PlaceComTool.md#tojson)
- [trigger](neuroglancer_ui_annotations.PlaceComTool.md#trigger)
- [unbind](neuroglancer_ui_annotations.PlaceComTool.md#unbind)
- [unregisterDisposer](neuroglancer_ui_annotations.PlaceComTool.md#unregisterdisposer)
- [validateSession](neuroglancer_ui_annotations.PlaceComTool.md#validatesession)

## Constructors

### constructor

• **new PlaceComTool**(`layer`, `options`, `session?`, `mode?`, `sessionDiv?`, `iconDiv?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) | `undefined` |
| `options` | `any` | `undefined` |
| `session` | `undefined` \| [`COMSession`](../interfaces/neuroglancer_ui_annotations.COMSession.md) | `undefined` |
| `mode` | [`ComToolMode`](../enums/neuroglancer_ui_annotations.ComToolMode.md) | `ComToolMode.NOOP` |
| `sessionDiv` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | `undefined` |
| `iconDiv` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | `undefined` |

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[constructor](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2523](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2523)

## Properties

### active

• **active**: `boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2516)

___

### bindingsRef

• **bindingsRef**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2521](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2521)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[changed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[disposedStacks](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### icon

• **icon**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:2520](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2520)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[layer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#layer)

___

### mode

• **mode**: [`ComToolMode`](../enums/neuroglancer_ui_annotations.ComToolMode.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2515](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2515)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[refCount](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### session

• **session**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`COMSession`](../interfaces/neuroglancer_ui_annotations.COMSession.md)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:2517](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2517)

___

### sessionWidget

• **sessionWidget**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2518](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2518)

___

### sessionWidgetDiv

• **sessionWidgetDiv**: `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2519](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2519)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[wasDisposed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1215)

___

### description

• `get` **description**(): ``"com session (draw mode)"`` \| ``"com session (edit mode)"`` \| ``"com session (view mode)"``

#### Returns

``"com session (draw mode)"`` \| ``"com session (edit mode)"`` \| ``"com session (view mode)"``

#### Overrides

PlaceAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:2752](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2752)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

PlaceAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceComTool`](neuroglancer_ui_annotations.PlaceComTool.md)

#### Returns

[`PlaceComTool`](neuroglancer_ui_annotations.PlaceComTool.md)

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[addRef](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[deactivate](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2641)

___

### displayComSession

▸ **displayComSession**(): `void`

This function is used to display the COM session data in the annotation tabs
while the user is annotating.

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2674)

___

### dispose

▸ **dispose**(): `void`

Disposes the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[dispose](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2606](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2606)

___

### disposeSession

▸ `Private` **disposeSession**(): `void`

Deletes the current active session

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2650](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2650)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[disposed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[refCountReachedZero](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#refcountreachedzero)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[registerCancellable](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registercancellable)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[registerDisposer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registerdisposer)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[registerEventListener](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/ui/annotations.ts:2617](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2617)

___

### setIconColor

▸ **setIconColor**(): `void`

Sets the icon color of the volume tool based on the type of mode

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2551](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2551)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[toJSON](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2763](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2763)

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

[src/neuroglancer/ui/annotations.ts:2573](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2573)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[unbind](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L89)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

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

[src/neuroglancer/ui/annotations.ts:2661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2661)
