[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / PlaceBoundingBoxTool

# Class: PlaceBoundingBoxTool

[ui/annotations](../modules/ui_annotations.md).PlaceBoundingBoxTool

## Hierarchy

- [`PlaceTwoCornerAnnotationTool`](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md)

  ↳ **`PlaceBoundingBoxTool`**

## Table of contents

### Constructors

- [constructor](ui_annotations.PlaceBoundingBoxTool.md#constructor)

### Properties

- [annotationType](ui_annotations.PlaceBoundingBoxTool.md#annotationtype)
- [changed](ui_annotations.PlaceBoundingBoxTool.md#changed)
- [disposedStacks](ui_annotations.PlaceBoundingBoxTool.md#disposedstacks)
- [inProgressAnnotation](ui_annotations.PlaceBoundingBoxTool.md#inprogressannotation)
- [layer](ui_annotations.PlaceBoundingBoxTool.md#layer)
- [refCount](ui_annotations.PlaceBoundingBoxTool.md#refcount)
- [wasDisposed](ui_annotations.PlaceBoundingBoxTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](ui_annotations.PlaceBoundingBoxTool.md#annotationcolorpicker)
- [annotationLayer](ui_annotations.PlaceBoundingBoxTool.md#annotationlayer)
- [description](ui_annotations.PlaceBoundingBoxTool.md#description)
- [mouseState](ui_annotations.PlaceBoundingBoxTool.md#mousestate)

### Methods

- [addRef](ui_annotations.PlaceBoundingBoxTool.md#addref)
- [deactivate](ui_annotations.PlaceBoundingBoxTool.md#deactivate)
- [dispose](ui_annotations.PlaceBoundingBoxTool.md#dispose)
- [disposed](ui_annotations.PlaceBoundingBoxTool.md#disposed)
- [getInitialAnnotation](ui_annotations.PlaceBoundingBoxTool.md#getinitialannotation)
- [getUpdatedAnnotation](ui_annotations.PlaceBoundingBoxTool.md#getupdatedannotation)
- [refCountReachedZero](ui_annotations.PlaceBoundingBoxTool.md#refcountreachedzero)
- [registerCancellable](ui_annotations.PlaceBoundingBoxTool.md#registercancellable)
- [registerDisposer](ui_annotations.PlaceBoundingBoxTool.md#registerdisposer)
- [registerEventListener](ui_annotations.PlaceBoundingBoxTool.md#registereventlistener)
- [setActive](ui_annotations.PlaceBoundingBoxTool.md#setactive)
- [toJSON](ui_annotations.PlaceBoundingBoxTool.md#tojson)
- [trigger](ui_annotations.PlaceBoundingBoxTool.md#trigger)
- [unbind](ui_annotations.PlaceBoundingBoxTool.md#unbind)
- [unregisterDisposer](ui_annotations.PlaceBoundingBoxTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlaceBoundingBoxTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |
| `options` | `any` |

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[constructor](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### annotationType

• **annotationType**: [`LINE`](../enums/annotation.AnnotationType.md#line) \| [`AXIS_ALIGNED_BOUNDING_BOX`](../enums/annotation.AnnotationType.md#axis_aligned_bounding_box)

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[annotationType](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#annotationtype)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2769)

___

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[changed](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[disposedStacks](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `reference`: [`AnnotationReference`](annotation.AnnotationReference.md) ; `disposer`: () => `void`  }

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[inProgressAnnotation](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#inprogressannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1289)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[layer](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[refCount](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[wasDisposed](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceTwoCornerAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceTwoCornerAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1215)

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

PlaceTwoCornerAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:2800](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2800)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

PlaceTwoCornerAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceBoundingBoxTool`](ui_annotations.PlaceBoundingBoxTool.md)

#### Returns

[`PlaceBoundingBoxTool`](ui_annotations.PlaceBoundingBoxTool.md)

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[addRef](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[deactivate](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1352)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[dispose](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[disposed](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1347)

___

### getInitialAnnotation

▸ **getInitialAnnotation**(`mouseState`, `annotationLayer`): [`Annotation`](../modules/annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[getInitialAnnotation](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#getinitialannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2771](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2771)

___

### getUpdatedAnnotation

▸ **getUpdatedAnnotation**(`oldAnnotation`, `mouseState`, `annotationLayer`): [`Annotation`](../modules/annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldAnnotation` | [`Line`](../interfaces/annotation.Line.md) \| [`AxisAlignedBoundingBox`](../interfaces/annotation.AxisAlignedBoundingBox.md) |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[getUpdatedAnnotation](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#getupdatedannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2790](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2790)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[refCountReachedZero](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#refcountreachedzero)

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

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[registerCancellable](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registercancellable)

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

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[registerDisposer](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registerdisposer)

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

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[registerEventListener](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registereventlistener)

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

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[setActive](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[toJSON](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L2804)

___

### trigger

▸ **trigger**(`mouseState`, `parentRef?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `parentRef?` | [`AnnotationReference`](annotation.AnnotationReference.md) |

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[trigger](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1299)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[unbind](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#unbind)

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

[PlaceTwoCornerAnnotationTool](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[unregisterDisposer](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
