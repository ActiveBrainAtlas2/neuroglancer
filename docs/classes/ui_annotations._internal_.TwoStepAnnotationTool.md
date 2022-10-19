[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / [<internal\>](../modules/ui_annotations._internal_.md) / TwoStepAnnotationTool

# Class: TwoStepAnnotationTool

[ui/annotations](../modules/ui_annotations.md).[<internal>](../modules/ui_annotations._internal_.md).TwoStepAnnotationTool

## Hierarchy

- [`PlaceAnnotationTool`](ui_annotations._internal_.PlaceAnnotationTool.md)

  ↳ **`TwoStepAnnotationTool`**

  ↳↳ [`PlaceTwoCornerAnnotationTool`](ui_annotations._internal_.PlaceTwoCornerAnnotationTool.md)

## Table of contents

### Constructors

- [constructor](ui_annotations._internal_.TwoStepAnnotationTool.md#constructor)

### Properties

- [changed](ui_annotations._internal_.TwoStepAnnotationTool.md#changed)
- [description](ui_annotations._internal_.TwoStepAnnotationTool.md#description)
- [disposedStacks](ui_annotations._internal_.TwoStepAnnotationTool.md#disposedstacks)
- [inProgressAnnotation](ui_annotations._internal_.TwoStepAnnotationTool.md#inprogressannotation)
- [layer](ui_annotations._internal_.TwoStepAnnotationTool.md#layer)
- [refCount](ui_annotations._internal_.TwoStepAnnotationTool.md#refcount)
- [wasDisposed](ui_annotations._internal_.TwoStepAnnotationTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](ui_annotations._internal_.TwoStepAnnotationTool.md#annotationcolorpicker)
- [annotationLayer](ui_annotations._internal_.TwoStepAnnotationTool.md#annotationlayer)
- [mouseState](ui_annotations._internal_.TwoStepAnnotationTool.md#mousestate)

### Methods

- [addRef](ui_annotations._internal_.TwoStepAnnotationTool.md#addref)
- [deactivate](ui_annotations._internal_.TwoStepAnnotationTool.md#deactivate)
- [dispose](ui_annotations._internal_.TwoStepAnnotationTool.md#dispose)
- [disposed](ui_annotations._internal_.TwoStepAnnotationTool.md#disposed)
- [getInitialAnnotation](ui_annotations._internal_.TwoStepAnnotationTool.md#getinitialannotation)
- [getUpdatedAnnotation](ui_annotations._internal_.TwoStepAnnotationTool.md#getupdatedannotation)
- [refCountReachedZero](ui_annotations._internal_.TwoStepAnnotationTool.md#refcountreachedzero)
- [registerCancellable](ui_annotations._internal_.TwoStepAnnotationTool.md#registercancellable)
- [registerDisposer](ui_annotations._internal_.TwoStepAnnotationTool.md#registerdisposer)
- [registerEventListener](ui_annotations._internal_.TwoStepAnnotationTool.md#registereventlistener)
- [setActive](ui_annotations._internal_.TwoStepAnnotationTool.md#setactive)
- [toJSON](ui_annotations._internal_.TwoStepAnnotationTool.md#tojson)
- [trigger](ui_annotations._internal_.TwoStepAnnotationTool.md#trigger)
- [unbind](ui_annotations._internal_.TwoStepAnnotationTool.md#unbind)
- [unregisterDisposer](ui_annotations._internal_.TwoStepAnnotationTool.md#unregisterdisposer)

## Constructors

### constructor

• **new TwoStepAnnotationTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |
| `options` | `any` |

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[constructor](ui_annotations._internal_.PlaceAnnotationTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[changed](ui_annotations._internal_.PlaceAnnotationTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[description](ui_annotations._internal_.PlaceAnnotationTool.md#description)

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[disposedStacks](ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### inProgressAnnotation

• **inProgressAnnotation**: `undefined` \| { `annotationLayer`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `reference`: [`AnnotationReference`](annotation.AnnotationReference.md) ; `disposer`: () => `void`  }

#### Defined in

[src/neuroglancer/ui/annotations.ts:1289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1289)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[layer](ui_annotations._internal_.PlaceAnnotationTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[refCount](ui_annotations._internal_.PlaceAnnotationTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[wasDisposed](ui_annotations._internal_.PlaceAnnotationTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Inherited from

PlaceAnnotationTool.annotationColorPicker

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Inherited from

PlaceAnnotationTool.annotationLayer

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1215)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

PlaceAnnotationTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`TwoStepAnnotationTool`](ui_annotations._internal_.TwoStepAnnotationTool.md)

#### Returns

[`TwoStepAnnotationTool`](ui_annotations._internal_.TwoStepAnnotationTool.md)

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[addRef](ui_annotations._internal_.PlaceAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[deactivate](ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1352)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[dispose](ui_annotations._internal_.PlaceAnnotationTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[disposed](ui_annotations._internal_.PlaceAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1347)

___

### getInitialAnnotation

▸ `Abstract` **getInitialAnnotation**(`mouseState`, `annotationLayer`): [`Annotation`](../modules/annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1293)

___

### getUpdatedAnnotation

▸ `Abstract` **getUpdatedAnnotation**(`oldAnnotation`, `mouseState`, `annotationLayer`): [`Annotation`](../modules/annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldAnnotation` | [`Annotation`](../modules/annotation.md#annotation) |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `annotationLayer` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1295)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[refCountReachedZero](ui_annotations._internal_.PlaceAnnotationTool.md#refcountreachedzero)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[registerCancellable](ui_annotations._internal_.PlaceAnnotationTool.md#registercancellable)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[registerDisposer](ui_annotations._internal_.PlaceAnnotationTool.md#registerdisposer)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[registerEventListener](ui_annotations._internal_.PlaceAnnotationTool.md#registereventlistener)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[setActive](ui_annotations._internal_.PlaceAnnotationTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[toJSON](ui_annotations._internal_.PlaceAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L85)

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

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[trigger](ui_annotations._internal_.PlaceAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1299)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[unbind](ui_annotations._internal_.PlaceAnnotationTool.md#unbind)

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

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[unregisterDisposer](ui_annotations._internal_.PlaceAnnotationTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
