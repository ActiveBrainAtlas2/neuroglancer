[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / TrackableSkeletonRenderMode

# Class: TrackableSkeletonRenderMode

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).TrackableSkeletonRenderMode

## Hierarchy

- [`TrackableEnum`](neuroglancer_util_trackable_enum.TrackableEnum.md)<[`SkeletonRenderMode`](../enums/neuroglancer_skeleton_frontend.SkeletonRenderMode.md)\>

  ↳ **`TrackableSkeletonRenderMode`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md#constructor)

### Properties

- [changed](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md#changed)
- [enumType](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md#enumtype)

### Accessors

- [value](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md#value)

### Methods

- [reset](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md#reset)
- [restoreState](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md#restorestate)
- [toJSON](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md#tojson)

## Constructors

### constructor

• **new TrackableSkeletonRenderMode**(`value`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`SkeletonRenderMode`](../enums/neuroglancer_skeleton_frontend.SkeletonRenderMode.md) | `undefined` |
| `defaultValue` | [`SkeletonRenderMode`](../enums/neuroglancer_skeleton_frontend.SkeletonRenderMode.md) | `value` |

#### Overrides

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[constructor](neuroglancer_util_trackable_enum.TrackableEnum.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L285)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[changed](neuroglancer_util_trackable_enum.TrackableEnum.md#changed)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L22)

___

### enumType

• **enumType**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[enumType](neuroglancer_util_trackable_enum.TrackableEnum.md#enumtype)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L25)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableEnum.value

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L37)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Inherited from

TrackableEnum.value

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[reset](neuroglancer_util_trackable_enum.TrackableEnum.md#reset)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L41)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[restoreState](neuroglancer_util_trackable_enum.TrackableEnum.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[toJSON](neuroglancer_util_trackable_enum.TrackableEnum.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L49)
