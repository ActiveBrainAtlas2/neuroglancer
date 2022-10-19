[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / PlacePointTool

# Class: PlacePointTool

[ui/annotations](../modules/ui_annotations.md).PlacePointTool

## Hierarchy

- [`PlaceAnnotationTool`](ui_annotations._internal_.PlaceAnnotationTool.md)

  ↳ **`PlacePointTool`**

## Table of contents

### Constructors

- [constructor](ui_annotations.PlacePointTool.md#constructor)

### Properties

- [changed](ui_annotations.PlacePointTool.md#changed)
- [disposedStacks](ui_annotations.PlacePointTool.md#disposedstacks)
- [layer](ui_annotations.PlacePointTool.md#layer)
- [refCount](ui_annotations.PlacePointTool.md#refcount)
- [wasDisposed](ui_annotations.PlacePointTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](ui_annotations.PlacePointTool.md#annotationcolorpicker)
- [annotationLayer](ui_annotations.PlacePointTool.md#annotationlayer)
- [description](ui_annotations.PlacePointTool.md#description)
- [mouseState](ui_annotations.PlacePointTool.md#mousestate)

### Methods

- [addRef](ui_annotations.PlacePointTool.md#addref)
- [deactivate](ui_annotations.PlacePointTool.md#deactivate)
- [dispose](ui_annotations.PlacePointTool.md#dispose)
- [disposed](ui_annotations.PlacePointTool.md#disposed)
- [refCountReachedZero](ui_annotations.PlacePointTool.md#refcountreachedzero)
- [registerCancellable](ui_annotations.PlacePointTool.md#registercancellable)
- [registerDisposer](ui_annotations.PlacePointTool.md#registerdisposer)
- [registerEventListener](ui_annotations.PlacePointTool.md#registereventlistener)
- [setActive](ui_annotations.PlacePointTool.md#setactive)
- [toJSON](ui_annotations.PlacePointTool.md#tojson)
- [trigger](ui_annotations.PlacePointTool.md#trigger)
- [unbind](ui_annotations.PlacePointTool.md#unbind)
- [unregisterDisposer](ui_annotations.PlacePointTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlacePointTool**(`layer`, `options`)

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

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[disposedStacks](ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

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

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

PlaceAnnotationTool.description

#### Defined in

[src/neuroglancer/ui/annotations.ts:1265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1265)

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

▸ **addRef**(): [`PlacePointTool`](ui_annotations.PlacePointTool.md)

#### Returns

[`PlacePointTool`](ui_annotations.PlacePointTool.md)

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[addRef](ui_annotations._internal_.PlaceAnnotationTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[deactivate](ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/tool.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L86)

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

#### Inherited from

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[disposed](ui_annotations._internal_.PlaceAnnotationTool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[toJSON](ui_annotations._internal_.PlaceAnnotationTool.md#tojson)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1269)

___

### trigger

▸ **trigger**(`mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |

#### Returns

`void`

#### Overrides

[PlaceAnnotationTool](ui_annotations._internal_.PlaceAnnotationTool.md).[trigger](ui_annotations._internal_.PlaceAnnotationTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1237)

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
