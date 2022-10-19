[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / [<internal\>](../modules/ui_annotations._internal_.md) / PlaceAnnotationTool

# Class: PlaceAnnotationTool

[ui/annotations](../modules/ui_annotations.md).[<internal>](../modules/ui_annotations._internal_.md).PlaceAnnotationTool

## Hierarchy

- [`LegacyTool`](ui_tool.LegacyTool.md)

  ↳ **`PlaceAnnotationTool`**

  ↳↳ [`PlacePointTool`](ui_annotations.PlacePointTool.md)

  ↳↳ [`MultiStepAnnotationTool`](ui_annotations.MultiStepAnnotationTool.md)

  ↳↳ [`PlaceCellTool`](ui_annotations.PlaceCellTool.md)

  ↳↳ [`PlaceComTool`](ui_annotations.PlaceComTool.md)

  ↳↳ [`TwoStepAnnotationTool`](ui_annotations._internal_.TwoStepAnnotationTool.md)

## Table of contents

### Constructors

- [constructor](ui_annotations._internal_.PlaceAnnotationTool.md#constructor)

### Properties

- [changed](ui_annotations._internal_.PlaceAnnotationTool.md#changed)
- [description](ui_annotations._internal_.PlaceAnnotationTool.md#description)
- [disposedStacks](ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)
- [layer](ui_annotations._internal_.PlaceAnnotationTool.md#layer)
- [refCount](ui_annotations._internal_.PlaceAnnotationTool.md#refcount)
- [wasDisposed](ui_annotations._internal_.PlaceAnnotationTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](ui_annotations._internal_.PlaceAnnotationTool.md#annotationcolorpicker)
- [annotationLayer](ui_annotations._internal_.PlaceAnnotationTool.md#annotationlayer)
- [mouseState](ui_annotations._internal_.PlaceAnnotationTool.md#mousestate)

### Methods

- [addRef](ui_annotations._internal_.PlaceAnnotationTool.md#addref)
- [deactivate](ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)
- [dispose](ui_annotations._internal_.PlaceAnnotationTool.md#dispose)
- [disposed](ui_annotations._internal_.PlaceAnnotationTool.md#disposed)
- [refCountReachedZero](ui_annotations._internal_.PlaceAnnotationTool.md#refcountreachedzero)
- [registerCancellable](ui_annotations._internal_.PlaceAnnotationTool.md#registercancellable)
- [registerDisposer](ui_annotations._internal_.PlaceAnnotationTool.md#registerdisposer)
- [registerEventListener](ui_annotations._internal_.PlaceAnnotationTool.md#registereventlistener)
- [setActive](ui_annotations._internal_.PlaceAnnotationTool.md#setactive)
- [toJSON](ui_annotations._internal_.PlaceAnnotationTool.md#tojson)
- [trigger](ui_annotations._internal_.PlaceAnnotationTool.md#trigger)
- [unbind](ui_annotations._internal_.PlaceAnnotationTool.md#unbind)
- [unregisterDisposer](ui_annotations._internal_.PlaceAnnotationTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlaceAnnotationTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |
| `options` | `any` |

#### Overrides

[LegacyTool](ui_tool.LegacyTool.md).[constructor](ui_tool.LegacyTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[changed](ui_tool.LegacyTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[description](ui_tool.LegacyTool.md#description)

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[disposedStacks](ui_tool.LegacyTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Overrides

[LegacyTool](ui_tool.LegacyTool.md).[layer](ui_tool.LegacyTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[refCount](ui_tool.LegacyTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[wasDisposed](ui_tool.LegacyTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L1215)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

LegacyTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceAnnotationTool`](ui_annotations._internal_.PlaceAnnotationTool.md)

#### Returns

[`PlaceAnnotationTool`](ui_annotations._internal_.PlaceAnnotationTool.md)

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[addRef](ui_tool.LegacyTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[deactivate](ui_tool.LegacyTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/tool.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[dispose](ui_tool.LegacyTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[disposed](ui_tool.LegacyTool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[refCountReachedZero](ui_tool.LegacyTool.md#refcountreachedzero)

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

[LegacyTool](ui_tool.LegacyTool.md).[registerCancellable](ui_tool.LegacyTool.md#registercancellable)

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

[LegacyTool](ui_tool.LegacyTool.md).[registerDisposer](ui_tool.LegacyTool.md#registerdisposer)

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

[LegacyTool](ui_tool.LegacyTool.md).[registerEventListener](ui_tool.LegacyTool.md#registereventlistener)

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

[LegacyTool](ui_tool.LegacyTool.md).[setActive](ui_tool.LegacyTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[toJSON](ui_tool.LegacyTool.md#tojson)

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

[LegacyTool](ui_tool.LegacyTool.md).[trigger](ui_tool.LegacyTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/tool.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L84)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](ui_tool.LegacyTool.md).[unbind](ui_tool.LegacyTool.md#unbind)

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

[LegacyTool](ui_tool.LegacyTool.md).[unregisterDisposer](ui_tool.LegacyTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
