[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / PlacePolygonTool

# Class: PlacePolygonTool

[ui/annotations](../modules/ui_annotations.md).PlacePolygonTool

This class is used to draw polygon annotations.

## Hierarchy

- [`PlaceCollectionAnnotationTool`](ui_annotations._internal_.PlaceCollectionAnnotationTool.md)

  ↳ **`PlacePolygonTool`**

## Table of contents

### Constructors

- [constructor](ui_annotations.PlacePolygonTool.md#constructor)

### Properties

- [active](ui_annotations.PlacePolygonTool.md#active)
- [annotationType](ui_annotations.PlacePolygonTool.md#annotationtype)
- [bindingsRef](ui_annotations.PlacePolygonTool.md#bindingsref)
- [changed](ui_annotations.PlacePolygonTool.md#changed)
- [childTool](ui_annotations.PlacePolygonTool.md#childtool)
- [disposedStacks](ui_annotations.PlacePolygonTool.md#disposedstacks)
- [inProgressAnnotation](ui_annotations.PlacePolygonTool.md#inprogressannotation)
- [layer](ui_annotations.PlacePolygonTool.md#layer)
- [mode](ui_annotations.PlacePolygonTool.md#mode)
- [refCount](ui_annotations.PlacePolygonTool.md#refcount)
- [sourceMouseState](ui_annotations.PlacePolygonTool.md#sourcemousestate)
- [sourcePosition](ui_annotations.PlacePolygonTool.md#sourceposition)
- [wasDisposed](ui_annotations.PlacePolygonTool.md#wasdisposed)
- [zCoordinate](ui_annotations.PlacePolygonTool.md#zcoordinate)

### Accessors

- [annotationColorPicker](ui_annotations.PlacePolygonTool.md#annotationcolorpicker)
- [annotationLayer](ui_annotations.PlacePolygonTool.md#annotationlayer)
- [description](ui_annotations.PlacePolygonTool.md#description)
- [mouseState](ui_annotations.PlacePolygonTool.md#mousestate)

### Methods

- [addRef](ui_annotations.PlacePolygonTool.md#addref)
- [addVertexPolygon](ui_annotations.PlacePolygonTool.md#addvertexpolygon)
- [complete](ui_annotations.PlacePolygonTool.md#complete)
- [completeLastLine](ui_annotations.PlacePolygonTool.md#completelastline)
- [deactivate](ui_annotations.PlacePolygonTool.md#deactivate)
- [deleteVertexPolygon](ui_annotations.PlacePolygonTool.md#deletevertexpolygon)
- [dispose](ui_annotations.PlacePolygonTool.md#dispose)
- [disposeAnnotation](ui_annotations.PlacePolygonTool.md#disposeannotation)
- [disposed](ui_annotations.PlacePolygonTool.md#disposed)
- [getInitialAnnotation](ui_annotations.PlacePolygonTool.md#getinitialannotation)
- [getUpdatedAnnotation](ui_annotations.PlacePolygonTool.md#getupdatedannotation)
- [refCountReachedZero](ui_annotations.PlacePolygonTool.md#refcountreachedzero)
- [registerCancellable](ui_annotations.PlacePolygonTool.md#registercancellable)
- [registerDisposer](ui_annotations.PlacePolygonTool.md#registerdisposer)
- [registerEventListener](ui_annotations.PlacePolygonTool.md#registereventlistener)
- [setActive](ui_annotations.PlacePolygonTool.md#setactive)
- [toJSON](ui_annotations.PlacePolygonTool.md#tojson)
- [trigger](ui_annotations.PlacePolygonTool.md#trigger)
- [unbind](ui_annotations.PlacePolygonTool.md#unbind)
- [undo](ui_annotations.PlacePolygonTool.md#undo)
- [unregisterDisposer](ui_annotations.PlacePolygonTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlacePolygonTool**(`layer`, `options`, `mode?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) | `undefined` |
| `options` | `any` | `undefined` |
| `mode` | [`PolygonToolMode`](../enums/ui_annotations.PolygonToolMode.md) | `PolygonToolMode.DRAW` |

#### Overrides

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[constructor](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1451)

## Properties

### active

• **active**: `boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1448](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1448)

___

### annotationType

• **annotationType**: [`POLYGON`](../enums/annotation.AnnotationType.md#polygon) \| [`VOLUME`](../enums/annotation.AnnotationType.md#volume)

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[annotationType](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationtype)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1393)

___

### bindingsRef

• **bindingsRef**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1447](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1447)

___

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[changed](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L77)

___

### childTool

• **childTool**: [`PlaceLineTool`](ui_annotations.PlaceLineTool.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1443)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[disposedStacks](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `reference`: [`AnnotationReference`](annotation.AnnotationReference.md) ; `disposer`: () => `void`  }

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[inProgressAnnotation](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#inprogressannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1364)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[layer](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#layer)

___

### mode

• **mode**: [`PolygonToolMode`](../enums/ui_annotations.PolygonToolMode.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1446)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[refCount](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### sourceMouseState

• **sourceMouseState**: [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1444](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1444)

___

### sourcePosition

• **sourcePosition**: `undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1445)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[wasDisposed](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### zCoordinate

• **zCoordinate**: `undefined` \| `number`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1449](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1449)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceCollectionAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceCollectionAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1215)

___

### description

• `get` **description**(): ``"annotate polygon (draw mode)"`` \| ``"annotate polygon (edit mode)"``

Get polygon description to be shown in top corner of annotation tab.

#### Returns

``"annotate polygon (draw mode)"`` \| ``"annotate polygon (edit mode)"``

#### Overrides

PlaceCollectionAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:1825](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1825)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

PlaceCollectionAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlacePolygonTool`](ui_annotations.PlacePolygonTool.md)

#### Returns

[`PlacePolygonTool`](ui_annotations.PlacePolygonTool.md)

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[addRef](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### addVertexPolygon

▸ **addVertexPolygon**(`mouseState`): `void`

Adds a new vertex to the polygon in edit mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1702](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1702)

___

### complete

▸ **complete**(): `boolean`

Completes the last edge of polygon to be drawn.

#### Returns

`boolean`

true if the operation suceeded otherwise false.

#### Overrides

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[complete](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#complete)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1586)

___

### completeLastLine

▸ `Private` **completeLastLine**(): `boolean`

Completes the last line of the polygon.

#### Returns

`boolean`

true if last line was succesfully completed otherwise false.

#### Defined in

[src/neuroglancer/ui/annotations.ts:1673](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1673)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[deactivate](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1575](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1575)

___

### deleteVertexPolygon

▸ **deleteVertexPolygon**(`mouseState`): `void`

Deletes a vertex of the polygon in edit mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1757](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1757)

___

### dispose

▸ **dispose**(): `void`

Disposes the annotation tool.

#### Returns

`void`

#### Overrides

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[dispose](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1536)

___

### disposeAnnotation

▸ `Private` **disposeAnnotation**(): `void`

Dispose current active annotation.

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1608](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1608)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[disposed](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1376)

___

### getInitialAnnotation

▸ **getInitialAnnotation**(`mouseState`, `annotationLayer`): [`Annotation`](../modules/annotation.md#annotation)

Returns the initial collection annotation based on the mouse location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)

newly created annotation.

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[getInitialAnnotation](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getinitialannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1400](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1400)

___

### getUpdatedAnnotation

▸ **getUpdatedAnnotation**(`oldAnnotation`, `mouseState`, `annotationLayer`): [`Annotation`](../modules/annotation.md#annotation)

Get updated annotation based on the source position of the mouse.

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldAnnotation` | [`Annotation`](../modules/annotation.md#annotation) |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)

updated annotation.

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[getUpdatedAnnotation](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getupdatedannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1425)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[refCountReachedZero](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcountreachedzero)

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

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[registerCancellable](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registercancellable)

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

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[registerDisposer](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registerdisposer)

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

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[registerEventListener](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registereventlistener)

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

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[setActive](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1550](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1550)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[toJSON](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1833](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1833)

___

### trigger

▸ **trigger**(`mouseState`, `parentRef?`): `void`

This function is called when the user tries to draw annotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |  |
| `parentRef?` | [`AnnotationReference`](annotation.AnnotationReference.md) | optional parent reference passed from parent tool. |

#### Returns

`void`

void

#### Overrides

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[trigger](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1471)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[unbind](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L89)

___

### undo

▸ **undo**(`mouseState`): `boolean`

Undo the last drawn polygon line segment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`boolean`

#### Overrides

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[undo](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#undo)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1618)

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

[PlaceCollectionAnnotationTool](ui_annotations._internal_.PlaceCollectionAnnotationTool.md).[unregisterDisposer](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
