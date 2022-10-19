[neuroglancer](../README.md) / [Modules](../modules.md) / [util/color](../modules/util_color.md) / TrackableOptionalRGB

# Class: TrackableOptionalRGB

[util/color](../modules/util_color.md).TrackableOptionalRGB

## Hierarchy

- [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<[`vec3`](util_geom.vec3.md) \| `undefined`\>

  ↳ **`TrackableOptionalRGB`**

## Table of contents

### Constructors

- [constructor](util_color.TrackableOptionalRGB.md#constructor)

### Properties

- [changed](util_color.TrackableOptionalRGB.md#changed)
- [value\_](util_color.TrackableOptionalRGB.md#value_)

### Accessors

- [value](util_color.TrackableOptionalRGB.md#value)

### Methods

- [reset](util_color.TrackableOptionalRGB.md#reset)
- [restoreState](util_color.TrackableOptionalRGB.md#restorestate)
- [toJSON](util_color.TrackableOptionalRGB.md#tojson)

## Constructors

### constructor

• **new TrackableOptionalRGB**()

#### Overrides

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[constructor](annotation_annotation_layer_state._internal_.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/util/color.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L173)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[changed](annotation_annotation_layer_state._internal_.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `undefined` \| [`vec3`](util_geom.vec3.md)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[value_](annotation_annotation_layer_state._internal_.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

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

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/color.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L181)

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

[src/neuroglancer/util/color.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L184)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/util/color.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L176)
