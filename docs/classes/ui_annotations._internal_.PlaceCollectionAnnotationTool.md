[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / [<internal\>](../modules/ui_annotations._internal_.md) / PlaceCollectionAnnotationTool

# Class: PlaceCollectionAnnotationTool

[ui/annotations](../modules/ui_annotations.md).[<internal>](../modules/ui_annotations._internal_.md).PlaceCollectionAnnotationTool

Abstract class to represent any tool which draws a Collection.

## Hierarchy

- [`MultiStepAnnotationTool`](ui_annotations.MultiStepAnnotationTool.md)

  ↳ **`PlaceCollectionAnnotationTool`**

  ↳↳ [`PlacePolygonTool`](ui_annotations.PlacePolygonTool.md)

  ↳↳ [`PlaceVolumeTool`](ui_annotations.PlaceVolumeTool.md)

## Table of contents

### Constructors

- [constructor](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#constructor)

### Properties

- [annotationType](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationtype)
- [changed](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#changed)
- [description](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#description)
- [disposedStacks](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposedstacks)
- [inProgressAnnotation](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#inprogressannotation)
- [layer](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#layer)
- [refCount](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcount)
- [wasDisposed](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationcolorpicker)
- [annotationLayer](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#annotationlayer)
- [mouseState](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#mousestate)

### Methods

- [addRef](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#addref)
- [complete](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#complete)
- [deactivate](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#deactivate)
- [dispose](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#dispose)
- [disposed](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#disposed)
- [getInitialAnnotation](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getinitialannotation)
- [getUpdatedAnnotation](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#getupdatedannotation)
- [refCountReachedZero](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#refcountreachedzero)
- [registerCancellable](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registercancellable)
- [registerDisposer](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registerdisposer)
- [registerEventListener](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#registereventlistener)
- [setActive](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#setactive)
- [toJSON](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#tojson)
- [trigger](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#trigger)
- [unbind](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unbind)
- [undo](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#undo)
- [unregisterDisposer](ui_annotations._internal_.PlaceCollectionAnnotationTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlaceCollectionAnnotationTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |
| `options` | `any` |

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[constructor](ui_annotations.MultiStepAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### annotationType

• **annotationType**: [`POLYGON`](../enums/annotation.AnnotationType.md#polygon) \| [`VOLUME`](../enums/annotation.AnnotationType.md#volume)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1393)

___

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[changed](ui_annotations.MultiStepAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[description](ui_annotations.MultiStepAnnotationTool.md#description)

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[disposedStacks](ui_annotations.MultiStepAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `reference`: [`AnnotationReference`](annotation.AnnotationReference.md) ; `disposer`: () => `void`  }

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[inProgressAnnotation](ui_annotations.MultiStepAnnotationTool.md#inprogressannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1364)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[layer](ui_annotations.MultiStepAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[refCount](ui_annotations.MultiStepAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[wasDisposed](ui_annotations.MultiStepAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Inherited from

MultiStepAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

MultiStepAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1215)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

MultiStepAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceCollectionAnnotationTool`](ui_annotations._internal_.PlaceCollectionAnnotationTool.md)

#### Returns

[`PlaceCollectionAnnotationTool`](ui_annotations._internal_.PlaceCollectionAnnotationTool.md)

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[addRef](ui_annotations.MultiStepAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### complete

▸ `Abstract` **complete**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[complete](ui_annotations.MultiStepAnnotationTool.md#complete)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1373)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[deactivate](ui_annotations.MultiStepAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1381)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[dispose](ui_annotations.MultiStepAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[disposed](ui_annotations.MultiStepAnnotationTool.md#disposed)

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

#### Overrides

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[getInitialAnnotation](ui_annotations.MultiStepAnnotationTool.md#getinitialannotation)

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

#### Overrides

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[getUpdatedAnnotation](ui_annotations.MultiStepAnnotationTool.md#getupdatedannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1425)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[refCountReachedZero](ui_annotations.MultiStepAnnotationTool.md#refcountreachedzero)

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

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[registerCancellable](ui_annotations.MultiStepAnnotationTool.md#registercancellable)

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

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[registerDisposer](ui_annotations.MultiStepAnnotationTool.md#registerdisposer)

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

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[registerEventListener](ui_annotations.MultiStepAnnotationTool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[setActive](ui_annotations.MultiStepAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[toJSON](ui_annotations.MultiStepAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L85)

___

### trigger

▸ `Abstract` **trigger**(`mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[trigger](ui_annotations.MultiStepAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/tool.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L84)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[unbind](ui_annotations.MultiStepAnnotationTool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L89)

___

### undo

▸ `Abstract` **undo**(`mouseState`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`boolean`

#### Inherited from

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[undo](ui_annotations.MultiStepAnnotationTool.md#undo)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1374)

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

[MultiStepAnnotationTool](ui_annotations.MultiStepAnnotationTool.md).[unregisterDisposer](ui_annotations.MultiStepAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
