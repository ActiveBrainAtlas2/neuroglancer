[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / MultiStepAnnotationTool

# Class: MultiStepAnnotationTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).MultiStepAnnotationTool

An abstract class to represent any annotation tool with multiple steps to complete annotation.

## Hierarchy

- [`PlaceAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md)

  ↳ **`MultiStepAnnotationTool`**

  ↳↳ [`PlaceCollectionAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceCollectionAnnotationTool.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#constructor)

### Properties

- [changed](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#changed)
- [description](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#description)
- [disposedStacks](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#disposedstacks)
- [inProgressAnnotation](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#inprogressannotation)
- [layer](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#layer)
- [refCount](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#refcount)
- [wasDisposed](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#annotationlayer)
- [mouseState](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#addref)
- [complete](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#complete)
- [deactivate](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#deactivate)
- [dispose](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#dispose)
- [disposed](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#disposed)
- [getInitialAnnotation](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#getinitialannotation)
- [getUpdatedAnnotation](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#getupdatedannotation)
- [refCountReachedZero](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#setactive)
- [toJSON](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#tojson)
- [trigger](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#trigger)
- [unbind](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#unbind)
- [undo](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#undo)
- [unregisterDisposer](neuroglancer_ui_annotations.MultiStepAnnotationTool.md#unregisterdisposer)

## Constructors

### constructor

• **new MultiStepAnnotationTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `options` | `any` |

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[constructor](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[changed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[description](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#description)

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[disposedStacks](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `reference`: [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) ; `disposer`: () => `void`  }

#### Defined in

[src/neuroglancer/ui/annotations.ts:1364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1364)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[layer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[refCount](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

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

▸ **addRef**(): [`MultiStepAnnotationTool`](neuroglancer_ui_annotations.MultiStepAnnotationTool.md)

#### Returns

[`MultiStepAnnotationTool`](neuroglancer_ui_annotations.MultiStepAnnotationTool.md)

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[addRef](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### complete

▸ `Abstract` **complete**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1373)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[deactivate](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1381)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[dispose](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[disposed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1376)

___

### getInitialAnnotation

▸ `Abstract` **getInitialAnnotation**(`mouseState`, `annotationLayer`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1371)

___

### getUpdatedAnnotation

▸ `Abstract` **getUpdatedAnnotation**(`oldAnnotation`, `mouseState`, `annotationLayer`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldAnnotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1372)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `boolean` |

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[setActive](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[toJSON](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L85)

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

[PlaceAnnotationTool](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md).[trigger](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/tool.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L84)

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

### undo

▸ `Abstract` **undo**(`mouseState`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:1374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1374)

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
