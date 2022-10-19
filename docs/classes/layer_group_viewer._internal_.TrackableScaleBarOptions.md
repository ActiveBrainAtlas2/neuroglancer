[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / [<internal\>](../modules/layer_group_viewer._internal_.md) / TrackableScaleBarOptions

# Class: TrackableScaleBarOptions

[layer_group_viewer](../modules/layer_group_viewer.md).[<internal>](../modules/layer_group_viewer._internal_.md).TrackableScaleBarOptions

## Hierarchy

- [`TrackableValue`](trackable_value.TrackableValue.md)<[`ScaleBarOptions`](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md)\>

  ↳ **`TrackableScaleBarOptions`**

## Table of contents

### Constructors

- [constructor](layer_group_viewer._internal_.TrackableScaleBarOptions.md#constructor)

### Properties

- [changed](layer_group_viewer._internal_.TrackableScaleBarOptions.md#changed)
- [defaultValue](layer_group_viewer._internal_.TrackableScaleBarOptions.md#defaultvalue)
- [validator](layer_group_viewer._internal_.TrackableScaleBarOptions.md#validator)
- [value\_](layer_group_viewer._internal_.TrackableScaleBarOptions.md#value_)

### Accessors

- [value](layer_group_viewer._internal_.TrackableScaleBarOptions.md#value)

### Methods

- [reset](layer_group_viewer._internal_.TrackableScaleBarOptions.md#reset)
- [restoreState](layer_group_viewer._internal_.TrackableScaleBarOptions.md#restorestate)
- [toJSON](layer_group_viewer._internal_.TrackableScaleBarOptions.md#tojson)

## Constructors

### constructor

• **new TrackableScaleBarOptions**()

#### Overrides

[TrackableValue](trackable_value.TrackableValue.md).[constructor](trackable_value.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/scale_bar.ts#L389)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[changed](trackable_value.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: [`ScaleBarOptions`](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md) = `value`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[defaultValue](trackable_value.TrackableValue.md#defaultvalue)

___

### validator

• **validator**: (`value`: `any`) => [`ScaleBarOptions`](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md)

#### Type declaration

▸ (`value`): [`ScaleBarOptions`](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

[`ScaleBarOptions`](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md)

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[validator](trackable_value.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: [`ScaleBarOptions`](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md)

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[value_](trackable_value.TrackableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[reset](trackable_value.TrackableValue.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L57)

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

[TrackableValue](trackable_value.TrackableValue.md).[restoreState](trackable_value.TrackableValue.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[toJSON](trackable_value.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L50)
