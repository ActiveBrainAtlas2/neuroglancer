[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md) / [<internal\>](../modules/neuroglancer_ui_annotations._internal_.md) / PlaceAnnotationTool

# Class: PlaceAnnotationTool

[neuroglancer/ui/annotations](../modules/neuroglancer_ui_annotations.md).[<internal>](../modules/neuroglancer_ui_annotations._internal_.md).PlaceAnnotationTool

## Hierarchy

- [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)

  ↳ **`PlaceAnnotationTool`**

  ↳↳ [`PlacePointTool`](neuroglancer_ui_annotations.PlacePointTool.md)

  ↳↳ [`MultiStepAnnotationTool`](neuroglancer_ui_annotations.MultiStepAnnotationTool.md)

  ↳↳ [`PlaceCellTool`](neuroglancer_ui_annotations.PlaceCellTool.md)

  ↳↳ [`PlaceComTool`](neuroglancer_ui_annotations.PlaceComTool.md)

  ↳↳ [`TwoStepAnnotationTool`](neuroglancer_ui_annotations._internal_.TwoStepAnnotationTool.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#constructor)

### Properties

- [changed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#changed)
- [description](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#description)
- [disposedStacks](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposedstacks)
- [layer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#layer)
- [refCount](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#refcount)
- [wasDisposed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#wasdisposed)

### Accessors

- [annotationColorPicker](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#annotationcolorpicker)
- [annotationLayer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#annotationlayer)
- [mouseState](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#mousestate)

### Methods

- [addRef](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#addref)
- [deactivate](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#deactivate)
- [dispose](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#dispose)
- [disposed](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#disposed)
- [refCountReachedZero](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#registereventlistener)
- [setActive](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#setactive)
- [toJSON](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#tojson)
- [trigger](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#trigger)
- [unbind](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#unbind)
- [unregisterDisposer](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md#unregisterdisposer)

## Constructors

### constructor

• **new PlaceAnnotationTool**(`layer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `options` | `any` |

#### Overrides

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[constructor](neuroglancer_ui_tool.LegacyTool.md#constructor)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1210)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[changed](neuroglancer_ui_tool.LegacyTool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[description](neuroglancer_ui_tool.LegacyTool.md#description)

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[disposedStacks](neuroglancer_ui_tool.LegacyTool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: `C`<(...`args`: `any`[]) => [`UserLayer`](neuroglancer_layer.UserLayer.md)\> & [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Overrides

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[layer](neuroglancer_ui_tool.LegacyTool.md#layer)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[refCount](neuroglancer_ui_tool.LegacyTool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[wasDisposed](neuroglancer_ui_tool.LegacyTool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### annotationColorPicker

• `get` **annotationColorPicker**(): `undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Returns

`undefined` \| [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1222)

___

### annotationLayer

• `get` **annotationLayer**(): `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

`undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:1215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/annotations.ts#L1215)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

LegacyTool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`PlaceAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md)

#### Returns

[`PlaceAnnotationTool`](neuroglancer_ui_annotations._internal_.PlaceAnnotationTool.md)

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[addRef](neuroglancer_ui_tool.LegacyTool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[deactivate](neuroglancer_ui_tool.LegacyTool.md#deactivate)

#### Defined in

[src/neuroglancer/ui/tool.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[dispose](neuroglancer_ui_tool.LegacyTool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[disposed](neuroglancer_ui_tool.LegacyTool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[refCountReachedZero](neuroglancer_ui_tool.LegacyTool.md#refcountreachedzero)

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

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[registerCancellable](neuroglancer_ui_tool.LegacyTool.md#registercancellable)

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

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[registerDisposer](neuroglancer_ui_tool.LegacyTool.md#registerdisposer)

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

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[registerEventListener](neuroglancer_ui_tool.LegacyTool.md#registereventlistener)

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

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[setActive](neuroglancer_ui_tool.LegacyTool.md#setactive)

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[toJSON](neuroglancer_ui_tool.LegacyTool.md#tojson)

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

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[trigger](neuroglancer_ui_tool.LegacyTool.md#trigger)

#### Defined in

[src/neuroglancer/ui/tool.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L84)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[unbind](neuroglancer_ui_tool.LegacyTool.md#unbind)

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

[LegacyTool](neuroglancer_ui_tool.LegacyTool.md).[unregisterDisposer](neuroglancer_ui_tool.LegacyTool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
