[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / TrackableSkeletonRenderMode

# Class: TrackableSkeletonRenderMode

[skeleton/frontend](../modules/skeleton_frontend.md).TrackableSkeletonRenderMode

## Hierarchy

- [`TrackableEnum`](util_trackable_enum.TrackableEnum.md)<[`SkeletonRenderMode`](../enums/skeleton_frontend.SkeletonRenderMode.md)\>

  ↳ **`TrackableSkeletonRenderMode`**

## Table of contents

### Constructors

- [constructor](skeleton_frontend.TrackableSkeletonRenderMode.md#constructor)

### Properties

- [changed](skeleton_frontend.TrackableSkeletonRenderMode.md#changed)
- [enumType](skeleton_frontend.TrackableSkeletonRenderMode.md#enumtype)

### Accessors

- [value](skeleton_frontend.TrackableSkeletonRenderMode.md#value)

### Methods

- [reset](skeleton_frontend.TrackableSkeletonRenderMode.md#reset)
- [restoreState](skeleton_frontend.TrackableSkeletonRenderMode.md#restorestate)
- [toJSON](skeleton_frontend.TrackableSkeletonRenderMode.md#tojson)

## Constructors

### constructor

• **new TrackableSkeletonRenderMode**(`value`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`SkeletonRenderMode`](../enums/skeleton_frontend.SkeletonRenderMode.md) | `undefined` |
| `defaultValue` | [`SkeletonRenderMode`](../enums/skeleton_frontend.SkeletonRenderMode.md) | `value` |

#### Overrides

[TrackableEnum](util_trackable_enum.TrackableEnum.md).[constructor](util_trackable_enum.TrackableEnum.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L285)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[TrackableEnum](util_trackable_enum.TrackableEnum.md).[changed](util_trackable_enum.TrackableEnum.md#changed)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L22)

___

### enumType

• **enumType**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Inherited from

[TrackableEnum](util_trackable_enum.TrackableEnum.md).[enumType](util_trackable_enum.TrackableEnum.md#enumtype)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableEnum.value

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L37)

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

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableEnum](util_trackable_enum.TrackableEnum.md).[reset](util_trackable_enum.TrackableEnum.md#reset)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L41)

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

[TrackableEnum](util_trackable_enum.TrackableEnum.md).[restoreState](util_trackable_enum.TrackableEnum.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[TrackableEnum](util_trackable_enum.TrackableEnum.md).[toJSON](util_trackable_enum.TrackableEnum.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L49)
