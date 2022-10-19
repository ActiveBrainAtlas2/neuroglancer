[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / TrackableSkeletonLineWidth

# Class: TrackableSkeletonLineWidth

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).TrackableSkeletonLineWidth

## Hierarchy

- [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

  ↳ **`TrackableSkeletonLineWidth`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#constructor)

### Properties

- [changed](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#changed)
- [defaultValue](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#defaultvalue)
- [validator](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#validator)
- [value\_](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#value_)

### Accessors

- [value](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#value)

### Methods

- [reset](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#reset)
- [restoreState](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#restorestate)
- [toJSON](neuroglancer_skeleton_frontend.TrackableSkeletonLineWidth.md#tojson)

## Constructors

### constructor

• **new TrackableSkeletonLineWidth**(`value`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `defaultValue` | `number` | `value` |

#### Overrides

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[constructor](neuroglancer_trackable_value.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L291)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[changed](neuroglancer_trackable_value.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `number` = `value`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[defaultValue](neuroglancer_trackable_value.TrackableValue.md#defaultvalue)

___

### validator

• **validator**: (`value`: `any`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`number`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[validator](neuroglancer_trackable_value.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: `number`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[value_](neuroglancer_trackable_value.TrackableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableValue.value

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

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[reset](neuroglancer_trackable_value.TrackableValue.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L57)

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

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[restoreState](neuroglancer_trackable_value.TrackableValue.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[toJSON](neuroglancer_trackable_value.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L50)
