[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / [<internal\>](../modules/neuroglancer_ui_annotations._internal_.md) / PlaceTwoCornerAnnotationTool

# Class: PlaceTwoCornerAnnotationTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).[<internal>](../modules/neuroglancer_ui_annotations._internal_.md).PlaceTwoCornerAnnotationTool

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`TwoStepAnnotationTool`](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md)

  ↳ **`PlaceTwoCornerAnnotationTool`**

  ↳↳ [`PlaceBoundingBoxTool`](neuroglancer_ui_annotations.PlaceBoundingBoxTool.md)

  ↳↳ [`PlaceLineTool`](neuroglancer_ui_annotations.PlaceLineTool.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#constructor)

### Properties

- [annotationType](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#annotationtype)
- [changed](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#changed)
- [description](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#description)
- [disposedStacks](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#disposedstacks)
- [inProgressAnnotation](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#inprogressannotation)
- [layer](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#layer)
- [refCount](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#refcount)
- [wasDisposed](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#annotationlayer)
- [mouseState](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#addref)
- [deactivate](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#deactivate)
- [dispose](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#dispose)
- [disposed](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#disposed)
- [getInitialAnnotation](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#getinitialannotation)
- [getUpdatedAnnotation](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#getupdatedannotation)
- [refCountReachedZero](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#setactive)
- [toJSON](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#tojson)
- [trigger](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#trigger)
- [unbind](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#unbind)
- [unregisterDisposer](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlaceTwoCornerAnnotationTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `options` | `any` |

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[constructor](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### annotationType

• **annotationType**: [`LINE`](../enums/neuroglancer_annotation.AnnotationType.md#line) \| [`AXIS_ALIGNED_BOUNDING_BOX`](../enums/neuroglancer_annotation.AnnotationType.md#axis_aligned_bounding_box)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2769)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[changed](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[description](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#description)

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[disposedStacks](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `disposer`: () => `void` ; `reference`: [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)  }

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[inProgressAnnotation](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#inprogressannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1289)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[layer](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[refCount](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[wasDisposed](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Inherited from

TwoStepAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

TwoStepAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1215)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

TwoStepAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceTwoCornerAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md)

#### Returns

[`PlaceTwoCornerAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md)

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[addRef](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[deactivate](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1352)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[dispose](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[disposed](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1347)

___

### getInitialAnnotation

▸ **getInitialAnnotation**(`mouseState`, `annotationLayer`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Overrides

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[getInitialAnnotation](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#getinitialannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2771](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2771)

___

### getUpdatedAnnotation

▸ **getUpdatedAnnotation**(`oldAnnotation`, `mouseState`, `annotationLayer`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldAnnotation` | [`Line`](../interfaces/neuroglancer_annotation.Line.md) \| [`AxisAlignedBoundingBox`](../interfaces/neuroglancer_annotation.AxisAlignedBoundingBox.md) |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Overrides

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[getUpdatedAnnotation](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#getupdatedannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2790](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L2790)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[refCountReachedZero](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#refcountreachedzero)

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

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[registerCancellable](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#registercancellable)

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

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[registerDisposer](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#registerdisposer)

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

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[registerEventListener](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#registereventlistener)

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

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[setActive](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[toJSON](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L85)

___

### trigger

▸ **trigger**(`mouseState`, `parentRef?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `parentRef?` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |

#### Returns

`void`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[trigger](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/annotations.ts#L1299)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[unbind](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#unbind)

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

[TwoStepAnnotationTool](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md).[unregisterDisposer](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
