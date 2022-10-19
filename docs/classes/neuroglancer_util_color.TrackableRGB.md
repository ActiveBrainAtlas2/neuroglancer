[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/color](../modules/neuroglancer_util_color.md) / TrackableRGB

# Class: TrackableRGB

[neuroglancer/util/color](../modules/neuroglancer_util_color.md).TrackableRGB

## Hierarchy

- [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<[`vec3`](neuroglancer_util_geom.vec3.md)\>

  ↳ **`TrackableRGB`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_color.TrackableRGB.md#constructor)

### Properties

- [changed](neuroglancer_util_color.TrackableRGB.md#changed)
- [defaultValue](neuroglancer_util_color.TrackableRGB.md#defaultvalue)
- [value\_](neuroglancer_util_color.TrackableRGB.md#value_)

### Accessors

- [value](neuroglancer_util_color.TrackableRGB.md#value)

### Methods

- [reset](neuroglancer_util_color.TrackableRGB.md#reset)
- [restoreState](neuroglancer_util_color.TrackableRGB.md#restorestate)
- [toJSON](neuroglancer_util_color.TrackableRGB.md#tojson)
- [toString](neuroglancer_util_color.TrackableRGB.md#tostring)

## Constructors

### constructor

• **new TrackableRGB**(`defaultValue`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Overrides

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[constructor](neuroglancer_trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/util/color.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L143)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[changed](neuroglancer_trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: [`vec3`](neuroglancer_util_geom.vec3.md)

___

### value\_

• `Protected` **value\_**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[value_](neuroglancer_trackable_value.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/color.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L156)

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

[src/neuroglancer/util/color.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L159)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/util/color.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L149)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/color.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L146)
