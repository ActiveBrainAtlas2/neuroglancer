[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / PlaceVolumeTool

# Class: PlaceVolumeTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).PlaceVolumeTool

This class is used to create the Volume annotation tool.

## Hierarchy

- [`PlaceCollectionAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md)

  ↳ **`PlaceVolumeTool`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations.PlaceVolumeTool.md#constructor)

### Properties

- [active](neuroglancer_ui_annotations.PlaceVolumeTool.md#active)
- [annotationType](neuroglancer_ui_annotations.PlaceVolumeTool.md#annotationtype)
- [changed](neuroglancer_ui_annotations.PlaceVolumeTool.md#changed)
- [childTool](neuroglancer_ui_annotations.PlaceVolumeTool.md#childtool)
- [disposedStacks](neuroglancer_ui_annotations.PlaceVolumeTool.md#disposedstacks)
- [icon](neuroglancer_ui_annotations.PlaceVolumeTool.md#icon)
- [inProgressAnnotation](neuroglancer_ui_annotations.PlaceVolumeTool.md#inprogressannotation)
- [layer](neuroglancer_ui_annotations.PlaceVolumeTool.md#layer)
- [mode](neuroglancer_ui_annotations.PlaceVolumeTool.md#mode)
- [refCount](neuroglancer_ui_annotations.PlaceVolumeTool.md#refcount)
- [session](neuroglancer_ui_annotations.PlaceVolumeTool.md#session)
- [sessionWidget](neuroglancer_ui_annotations.PlaceVolumeTool.md#sessionwidget)
- [sessionWidgetDiv](neuroglancer_ui_annotations.PlaceVolumeTool.md#sessionwidgetdiv)
- [sourceMouseState](neuroglancer_ui_annotations.PlaceVolumeTool.md#sourcemousestate)
- [sourcePosition](neuroglancer_ui_annotations.PlaceVolumeTool.md#sourceposition)
- [wasDisposed](neuroglancer_ui_annotations.PlaceVolumeTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations.PlaceVolumeTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations.PlaceVolumeTool.md#annotationlayer)
- [description](neuroglancer_ui_annotations.PlaceVolumeTool.md#description)
- [mouseState](neuroglancer_ui_annotations.PlaceVolumeTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations.PlaceVolumeTool.md#addref)
- [addVertexPolygon](neuroglancer_ui_annotations.PlaceVolumeTool.md#addvertexpolygon)
- [complete](neuroglancer_ui_annotations.PlaceVolumeTool.md#complete)
- [createNewVolumeAnn](neuroglancer_ui_annotations.PlaceVolumeTool.md#createnewvolumeann)
- [deactivate](neuroglancer_ui_annotations.PlaceVolumeTool.md#deactivate)
- [deleteVertexPolygon](neuroglancer_ui_annotations.PlaceVolumeTool.md#deletevertexpolygon)
- [displayVolumeSession](neuroglancer_ui_annotations.PlaceVolumeTool.md#displayvolumesession)
- [dispose](neuroglancer_ui_annotations.PlaceVolumeTool.md#dispose)
- [disposeSession](neuroglancer_ui_annotations.PlaceVolumeTool.md#disposesession)
- [disposed](neuroglancer_ui_annotations.PlaceVolumeTool.md#disposed)
- [getInitialAnnotation](neuroglancer_ui_annotations.PlaceVolumeTool.md#getinitialannotation)
- [getUpdatedAnnotation](neuroglancer_ui_annotations.PlaceVolumeTool.md#getupdatedannotation)
- [refCountReachedZero](neuroglancer_ui_annotations.PlaceVolumeTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations.PlaceVolumeTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations.PlaceVolumeTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations.PlaceVolumeTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations.PlaceVolumeTool.md#setactive)
- [setIconColor](neuroglancer_ui_annotations.PlaceVolumeTool.md#seticoncolor)
- [toJSON](neuroglancer_ui_annotations.PlaceVolumeTool.md#tojson)
- [trigger](neuroglancer_ui_annotations.PlaceVolumeTool.md#trigger)
- [unbind](neuroglancer_ui_annotations.PlaceVolumeTool.md#unbind)
- [undo](neuroglancer_ui_annotations.PlaceVolumeTool.md#undo)
- [unregisterDisposer](neuroglancer_ui_annotations.PlaceVolumeTool.md#unregisterdisposer)
- [validateSession](neuroglancer_ui_annotations.PlaceVolumeTool.md#validatesession)

## Constructors

### constructor

• **new PlaceVolumeTool**(`layer`, `options`, `session?`, `mode?`, `sessionDiv?`, `iconDiv?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) | `undefined` |
| `options` | `any` | `undefined` |
| `session` | `undefined` \| [`VolumeSession`](../interfaces/neuroglancer_ui_annotations.VolumeSession.md) | `undefined` |
| `mode` | [`VolumeToolMode`](../enums/neuroglancer_ui_annotations.VolumeToolMode.md) | `VolumeToolMode.NOOP` |
| `sessionDiv` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | `undefined` |
| `iconDiv` | `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) | `undefined` |

#### Overrides

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[constructor](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1894](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1894)

## Properties

### active

• **active**: `boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1888](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1888)

___

### annotationType

• **annotationType**: [`POLYGON`](../enums/neuroglancer_annotation.AnnotationType.md#polygon) \| [`VOLUME`](../enums/neuroglancer_annotation.AnnotationType.md#volume)

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[annotationType](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationtype)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1393)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[changed](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L77)

___

### childTool

• **childTool**: `undefined` \| [`PlacePolygonTool`](neuroglancer_ui_annotations.PlacePolygonTool.md)

Volume tool utilises the polygon tool to draw annotations.

#### Defined in

[src/neuroglancer/ui/annotations.ts:1884](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1884)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[disposedStacks](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### icon

• **icon**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:1892](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1892)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `disposer`: () => `void` ; `reference`: [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)  }

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[inProgressAnnotation](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#inprogressannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1364)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[layer](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1894](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1894)

___

### mode

• **mode**: [`VolumeToolMode`](../enums/neuroglancer_ui_annotations.VolumeToolMode.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1887](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1887)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[refCount](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### session

• **session**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`VolumeSession`](../interfaces/neuroglancer_ui_annotations.VolumeSession.md)\>

#### Defined in

[src/neuroglancer/ui/annotations.ts:1889](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1889)

___

### sessionWidget

• **sessionWidget**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1890](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1890)

___

### sessionWidgetDiv

• **sessionWidgetDiv**: `undefined` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1891](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1891)

___

### sourceMouseState

• **sourceMouseState**: [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1885](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1885)

___

### sourcePosition

• **sourcePosition**: `any`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1886](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1886)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[wasDisposed](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceCollectionAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceCollectionAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1215)

___

### description

• `get` **description**(): ``"volume session (draw mode)"`` \| ``"volume session (edit mode)"`` \| ``"volume session (view mode)"``

#### Returns

``"volume session (draw mode)"`` \| ``"volume session (edit mode)"`` \| ``"volume session (view mode)"``

#### Overrides

PlaceCollectionAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:2223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2223)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

PlaceCollectionAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceVolumeTool`](neuroglancer_ui_annotations.PlaceVolumeTool.md)

#### Returns

[`PlaceVolumeTool`](neuroglancer_ui_annotations.PlaceVolumeTool.md)

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[addRef](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### addVertexPolygon

▸ **addVertexPolygon**(`mouseState`): `void`

Adds a new vertex to the polygon in edit mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2058](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2058)

___

### complete

▸ **complete**(): `boolean`

Completes the last edge of polygon to be drawn.

#### Returns

`boolean`

true if the operation suceeded otherwise false.

#### Overrides

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[complete](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#complete)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2018](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2018)

___

### createNewVolumeAnn

▸ **createNewVolumeAnn**(`description`, `color`): `undefined` \| [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

Takes description and color and creates a new volume annotation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `undefined` \| `string` |
| `color` | `undefined` \| `string` |

#### Returns

`undefined` \| [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1962)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[deactivate](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2009](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2009)

___

### deleteVertexPolygon

▸ **deleteVertexPolygon**(`mouseState`): `void`

Deletes a vertex of the polygon in edit mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2069](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2069)

___

### displayVolumeSession

▸ **displayVolumeSession**(): `void`

This function is used to display the Volume session data in the annotation tabs
while the user is annotating.

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2095](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2095)

___

### dispose

▸ **dispose**(): `void`

Disposes the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[dispose](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1985](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1985)

___

### disposeSession

▸ `Private` **disposeSession**(): `void`

Deletes the current active session

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:2037](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2037)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[disposed](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1376)

___

### getInitialAnnotation

▸ **getInitialAnnotation**(`mouseState`, `annotationLayer`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

Returns the initial collection annotation based on the mouse location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)

newly created annotation.

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[getInitialAnnotation](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getinitialannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1400](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1400)

___

### getUpdatedAnnotation

▸ **getUpdatedAnnotation**(`oldAnnotation`, `mouseState`, `annotationLayer`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

Get updated annotation based on the source position of the mouse.

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldAnnotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)

updated annotation.

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[getUpdatedAnnotation](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getupdatedannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1425)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[refCountReachedZero](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcountreachedzero)

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

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[registerCancellable](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registercancellable)

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

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[registerDisposer](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registerdisposer)

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

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[registerEventListener](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registereventlistener)

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

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[setActive](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1997](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1997)

___

### setIconColor

▸ **setIconColor**(): `void`

Sets the icon color of the volume tool based on the type of mode

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1921](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1921)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[toJSON](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2234)

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

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[trigger](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1943](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1943)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[unbind](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L89)

___

### undo

▸ **undo**(`mouseState`): `boolean`

Undo the last drawn polygon line segment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`boolean`

#### Overrides

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[undo](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#undo)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2047](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2047)

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

[PlaceCollectionAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[unregisterDisposer](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unregisterdisposer)

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

[src/neuroglancer/ui/annotations.ts:2081](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2081)
