[neuroglancer](../README.md) / [Modules](../modules.md) / [util/color](../modules/util_color.md) / TrackableRGB

# Class: TrackableRGB

[util/color](../modules/util_color.md).TrackableRGB

## Hierarchy

- [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<[`vec3`](util_geom.vec3.md)\>

  ↳ **`TrackableRGB`**

## Table of contents

### Constructors

- [constructor](util_color.TrackableRGB.md#constructor)

### Properties

- [changed](util_color.TrackableRGB.md#changed)
- [defaultValue](util_color.TrackableRGB.md#defaultvalue)
- [value\_](util_color.TrackableRGB.md#value_)

### Accessors

- [value](util_color.TrackableRGB.md#value)

### Methods

- [reset](util_color.TrackableRGB.md#reset)
- [restoreState](util_color.TrackableRGB.md#restorestate)
- [toJSON](util_color.TrackableRGB.md#tojson)
- [toString](util_color.TrackableRGB.md#tostring)

## Constructors

### constructor

• **new TrackableRGB**(`defaultValue`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | [`vec3`](util_geom.vec3.md) |

#### Overrides

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[constructor](annotation_annotation_layer_state._internal_.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/util/color.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L143)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[changed](annotation_annotation_layer_state._internal_.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: [`vec3`](util_geom.vec3.md)

___

### value\_

• `Protected` **value\_**: [`vec3`](util_geom.vec3.md)

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

[src/neuroglancer/util/color.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L156)

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

[src/neuroglancer/util/color.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L159)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/util/color.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L149)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/color.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/color.ts#L146)
