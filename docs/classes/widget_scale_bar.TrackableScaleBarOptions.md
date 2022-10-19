[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/scale\_bar](../modules/widget_scale_bar.md) / TrackableScaleBarOptions

# Class: TrackableScaleBarOptions

[widget/scale_bar](../modules/widget_scale_bar.md).TrackableScaleBarOptions

## Hierarchy

- [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<[`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md)\>

  ↳ **`TrackableScaleBarOptions`**

## Table of contents

### Constructors

- [constructor](widget_scale_bar.TrackableScaleBarOptions.md#constructor)

### Properties

- [changed](widget_scale_bar.TrackableScaleBarOptions.md#changed)
- [defaultValue](widget_scale_bar.TrackableScaleBarOptions.md#defaultvalue)
- [validator](widget_scale_bar.TrackableScaleBarOptions.md#validator)
- [value\_](widget_scale_bar.TrackableScaleBarOptions.md#value_)

### Accessors

- [value](widget_scale_bar.TrackableScaleBarOptions.md#value)

### Methods

- [reset](widget_scale_bar.TrackableScaleBarOptions.md#reset)
- [restoreState](widget_scale_bar.TrackableScaleBarOptions.md#restorestate)
- [toJSON](widget_scale_bar.TrackableScaleBarOptions.md#tojson)

## Constructors

### constructor

• **new TrackableScaleBarOptions**()

#### Overrides

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[constructor](annotation_annotation_layer_state._internal_.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L389)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[changed](annotation_annotation_layer_state._internal_.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: [`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md) = `value`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[defaultValue](annotation_annotation_layer_state._internal_.TrackableValue.md#defaultvalue)

___

### validator

• **validator**: (`value`: `any`) => [`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md)

#### Type declaration

▸ (`value`): [`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

[`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md)

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[validator](annotation_annotation_layer_state._internal_.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: [`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md)

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[value_](annotation_annotation_layer_state._internal_.TrackableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[reset](annotation_annotation_layer_state._internal_.TrackableValue.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L57)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[restoreState](annotation_annotation_layer_state._internal_.TrackableValue.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[toJSON](annotation_annotation_layer_state._internal_.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L50)
