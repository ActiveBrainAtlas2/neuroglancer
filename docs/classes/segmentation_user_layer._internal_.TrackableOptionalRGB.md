[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / TrackableOptionalRGB

# Class: TrackableOptionalRGB

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).TrackableOptionalRGB

## Hierarchy

- [`WatchableValue`](trackable_value.WatchableValue.md)<[`vec3`](axes_lines._internal_.vec3.md) \| `undefined`\>

  ↳ **`TrackableOptionalRGB`**

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.TrackableOptionalRGB.md#constructor)

### Properties

- [changed](segmentation_user_layer._internal_.TrackableOptionalRGB.md#changed)
- [value\_](segmentation_user_layer._internal_.TrackableOptionalRGB.md#value_)

### Accessors

- [value](segmentation_user_layer._internal_.TrackableOptionalRGB.md#value)

### Methods

- [reset](segmentation_user_layer._internal_.TrackableOptionalRGB.md#reset)
- [restoreState](segmentation_user_layer._internal_.TrackableOptionalRGB.md#restorestate)
- [toJSON](segmentation_user_layer._internal_.TrackableOptionalRGB.md#tojson)

## Constructors

### constructor

• **new TrackableOptionalRGB**()

#### Overrides

[WatchableValue](trackable_value.WatchableValue.md).[constructor](trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/util/color.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L173)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[changed](trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `undefined` \| [`vec3`](axes_lines._internal_.vec3.md)

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

[src/neuroglancer/util/color.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L181)

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

[src/neuroglancer/util/color.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L184)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/util/color.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/color.ts#L176)
