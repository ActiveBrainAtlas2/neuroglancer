[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / [<internal\>](../modules/neuroglancer_ui_annotations._internal_.md) / PlaceCollectionAnnotationTool

# Class: PlaceCollectionAnnotationTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).[<internal>](../modules/neuroglancer_ui_annotations._internal_.md).PlaceCollectionAnnotationTool

Abstract class to represent any tool which draws a Collection.

## Hierarchy

- [`MultiStepAnnotationTool`](neuroglancer_ui_annotations.MultiStepAnnotationTool.md)

  ↳ **`PlaceCollectionAnnotationTool`**

  ↳↳ [`PlacePolygonTool`](neuroglancer_ui_annotations.PlacePolygonTool.md)

  ↳↳ [`PlaceVolumeTool`](neuroglancer_ui_annotations.PlaceVolumeTool.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#constructor)

### Properties

- [annotationType](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationtype)
- [changed](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#changed)
- [description](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#description)
- [disposedStacks](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposedstacks)
- [inProgressAnnotation](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#inprogressannotation)
- [layer](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#layer)
- [refCount](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcount)
- [wasDisposed](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationlayer)
- [mouseState](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#addref)
- [complete](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#complete)
- [deactivate](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#deactivate)
- [dispose](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#dispose)
- [disposed](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposed)
- [getInitialAnnotation](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getinitialannotation)
- [getUpdatedAnnotation](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getupdatedannotation)
- [refCountReachedZero](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#setactive)
- [toJSON](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#tojson)
- [trigger](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#trigger)
- [unbind](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unbind)
- [undo](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#undo)
- [unregisterDisposer](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlaceCollectionAnnotationTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `options` | `any` |

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[constructor](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### annotationType

• **annotationType**: [`POLYGON`](../enums/neuroglancer_annotation.AnnotationType.md#polygon) \| [`VOLUME`](../enums/neuroglancer_annotation.AnnotationType.md#volume)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1393)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[changed](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[description](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#description)

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[disposedStacks](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `disposer`: () => `void` ; `reference`: [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)  }

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[inProgressAnnotation](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#inprogressannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1364)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[layer](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[refCount](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[wasDisposed](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Inherited from

MultiStepAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

MultiStepAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1215)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

MultiStepAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceCollectionAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md)

#### Returns

[`PlaceCollectionAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md)

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[addRef](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### complete

▸ `Abstract` **complete**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[complete](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#complete)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1373)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[deactivate](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1381)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[dispose](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[disposed](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#disposed)

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

#### Overrides

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[getInitialAnnotation](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#getinitialannotation)

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

#### Overrides

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[getUpdatedAnnotation](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#getupdatedannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1425)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[refCountReachedZero](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#refcountreachedzero)

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

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[registerCancellable](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#registercancellable)

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

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[registerDisposer](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#registerdisposer)

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

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[registerEventListener](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### setActive

▸ **setActive**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `boolean` |

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[setActive](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[toJSON](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L85)

___

### trigger

▸ `Abstract` **trigger**(`mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[trigger](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/tool.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L84)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[unbind](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L89)

___

### undo

▸ `Abstract` **undo**(`mouseState`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`boolean`

#### Inherited from

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[undo](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#undo)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1374)

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

[MultiStepAnnotationTool](neuroglancer_ui_annotations.MultiStepAnnotationTool.md).[unregisterDisposer](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
