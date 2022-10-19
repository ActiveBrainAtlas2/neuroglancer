[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/color](../modules/neuroglancer_util_color.md) / TrackableOptionalRGB

# Class: TrackableOptionalRGB

[neuroglancer/util/color](../modules/neuroglancer_util_color.md).TrackableOptionalRGB

## Hierarchy

- [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<[`vec3`](neuroglancer_util_geom.vec3.md) \| `undefined`\>

  ↳ **`TrackableOptionalRGB`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_color.TrackableOptionalRGB.md#constructor)

### Properties

- [changed](neuroglancer_util_color.TrackableOptionalRGB.md#changed)
- [value\_](neuroglancer_util_color.TrackableOptionalRGB.md#value_)

### Accessors

- [value](neuroglancer_util_color.TrackableOptionalRGB.md#value)

### Methods

- [reset](neuroglancer_util_color.TrackableOptionalRGB.md#reset)
- [restoreState](neuroglancer_util_color.TrackableOptionalRGB.md#restorestate)
- [toJSON](neuroglancer_util_color.TrackableOptionalRGB.md#tojson)

## Constructors

### constructor

• **new TrackableOptionalRGB**()

#### Overrides

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[constructor](neuroglancer_trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/util/color.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L173)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[changed](neuroglancer_trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `undefined` \| [`vec3`](neuroglancer_util_geom.vec3.md)

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

[src/neuroglancer/util/color.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L181)

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

[src/neuroglancer/util/color.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L184)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/util/color.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L176)
