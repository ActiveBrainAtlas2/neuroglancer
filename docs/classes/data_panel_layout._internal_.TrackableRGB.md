[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / TrackableRGB

# Class: TrackableRGB

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).TrackableRGB

## Hierarchy

- [`WatchableValue`](trackable_value.WatchableValue.md)<[`vec3`](axes_lines._internal_.vec3.md)\>

  ↳ **`TrackableRGB`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.TrackableRGB.md#constructor)

### Properties

- [changed](data_panel_layout._internal_.TrackableRGB.md#changed)
- [defaultValue](data_panel_layout._internal_.TrackableRGB.md#defaultvalue)
- [value\_](data_panel_layout._internal_.TrackableRGB.md#value_)

### Accessors

- [value](data_panel_layout._internal_.TrackableRGB.md#value)

### Methods

- [reset](data_panel_layout._internal_.TrackableRGB.md#reset)
- [restoreState](data_panel_layout._internal_.TrackableRGB.md#restorestate)
- [toJSON](data_panel_layout._internal_.TrackableRGB.md#tojson)
- [toString](data_panel_layout._internal_.TrackableRGB.md#tostring)

## Constructors

### constructor

• **new TrackableRGB**(`defaultValue`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | [`vec3`](axes_lines._internal_.vec3.md) |

#### Overrides

[WatchableValue](trackable_value.WatchableValue.md).[constructor](trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/util/color.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L143)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[changed](trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: [`vec3`](axes_lines._internal_.vec3.md)

___

### value\_

• `Protected` **value\_**: [`vec3`](axes_lines._internal_.vec3.md)

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[value_](trackable_value.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

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

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/color.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L156)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/color.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L159)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/util/color.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L149)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/color.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L146)
