[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / PlaceLineTool

# Class: PlaceLineTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).PlaceLineTool

## Hierarchy

- [`PlaceTwoCornerAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md)

  ↳ **`PlaceLineTool`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations.PlaceLineTool.md#constructor)

### Properties

- [annotationType](neuroglancer_ui_annotations.PlaceLineTool.md#annotationtype)
- [changed](neuroglancer_ui_annotations.PlaceLineTool.md#changed)
- [disposedStacks](neuroglancer_ui_annotations.PlaceLineTool.md#disposedstacks)
- [inProgressAnnotation](neuroglancer_ui_annotations.PlaceLineTool.md#inprogressannotation)
- [initialRelationships](neuroglancer_ui_annotations.PlaceLineTool.md#initialrelationships)
- [layer](neuroglancer_ui_annotations.PlaceLineTool.md#layer)
- [refCount](neuroglancer_ui_annotations.PlaceLineTool.md#refcount)
- [wasDisposed](neuroglancer_ui_annotations.PlaceLineTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations.PlaceLineTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations.PlaceLineTool.md#annotationlayer)
- [description](neuroglancer_ui_annotations.PlaceLineTool.md#description)
- [mouseState](neuroglancer_ui_annotations.PlaceLineTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations.PlaceLineTool.md#addref)
- [deactivate](neuroglancer_ui_annotations.PlaceLineTool.md#deactivate)
- [dispose](neuroglancer_ui_annotations.PlaceLineTool.md#dispose)
- [disposed](neuroglancer_ui_annotations.PlaceLineTool.md#disposed)
- [getInitialAnnotation](neuroglancer_ui_annotations.PlaceLineTool.md#getinitialannotation)
- [getUpdatedAnnotation](neuroglancer_ui_annotations.PlaceLineTool.md#getupdatedannotation)
- [refCountReachedZero](neuroglancer_ui_annotations.PlaceLineTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations.PlaceLineTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations.PlaceLineTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations.PlaceLineTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations.PlaceLineTool.md#setactive)
- [toJSON](neuroglancer_ui_annotations.PlaceLineTool.md#tojson)
- [trigger](neuroglancer_ui_annotations.PlaceLineTool.md#trigger)
- [unbind](neuroglancer_ui_annotations.PlaceLineTool.md#unbind)
- [unregisterDisposer](neuroglancer_ui_annotations.PlaceLineTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlaceLineTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `options` | `any` |

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[constructor](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### annotationType

• **annotationType**: [`LINE`](../enums/neuroglancer_annotation.AnnotationType.md#line) \| [`AXIS_ALIGNED_BOUNDING_BOX`](../enums/neuroglancer_annotation.AnnotationType.md#axis_aligned_bounding_box)

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[annotationType](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#annotationtype)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2769)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[changed](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[disposedStacks](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `reference`: [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) ; `disposer`: () => `void`  }

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[inProgressAnnotation](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#inprogressannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1289)

___

### initialRelationships

• `Private` **initialRelationships**: `undefined` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)[][]

#### Defined in

[src/neuroglancer/ui/annotations.ts:2815](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2815)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[layer](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[refCount](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[wasDisposed](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceTwoCornerAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceTwoCornerAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1215)

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

PlaceTwoCornerAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:2811](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2811)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

PlaceTwoCornerAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceLineTool`](neuroglancer_ui_annotations.PlaceLineTool.md)

#### Returns

[`PlaceLineTool`](neuroglancer_ui_annotations.PlaceLineTool.md)

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[addRef](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[deactivate](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1352)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[dispose](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[disposed](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1347)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[getInitialAnnotation](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#getinitialannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2817](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2817)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[getUpdatedAnnotation](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#getupdatedannotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2825](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2825)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[refCountReachedZero](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#refcountreachedzero)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[registerCancellable](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registercancellable)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[registerDisposer](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registerdisposer)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[registerEventListener](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[setActive](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[toJSON](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:2844](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L2844)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[trigger](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1299)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[unbind](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#unbind)

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

[PlaceTwoCornerAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md).[unregisterDisposer](neuroglancer_ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
