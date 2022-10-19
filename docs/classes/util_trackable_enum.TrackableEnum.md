[neuroglancer](../README.md) / [Modules](../modules.md) / [util/trackable\_enum](../modules/util_trackable_enum.md) / TrackableEnum

# Class: TrackableEnum<T\>

[util/trackable_enum](../modules/util_trackable_enum.md).TrackableEnum

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

## Hierarchy

- **`TrackableEnum`**

  ↳ [`TrackableSkeletonRenderMode`](skeleton_frontend.TrackableSkeletonRenderMode.md)

  ↳ [`TrackableNavigationLink`](ui_layer_bar._internal_.TrackableNavigationLink.md)

  ↳ [`TrackableNavigationSimpleLink`](ui_layer_bar._internal_.TrackableNavigationSimpleLink.md)

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](util_trackable_enum.TrackableEnum.md#constructor)

### Properties

- [changed](util_trackable_enum.TrackableEnum.md#changed)
- [enumType](util_trackable_enum.TrackableEnum.md#enumtype)

### Accessors

- [value](util_trackable_enum.TrackableEnum.md#value)

### Methods

- [reset](util_trackable_enum.TrackableEnum.md#reset)
- [restoreState](util_trackable_enum.TrackableEnum.md#restorestate)
- [toJSON](util_trackable_enum.TrackableEnum.md#tojson)

## Constructors

### constructor

• **new TrackableEnum**<`T`\>(`enumType`, `value_`, `defaultValue?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enumType` | `Object` | `undefined` |
| `value_` | `T` | `undefined` |
| `defaultValue` | `T` | `value_` |

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L24)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L22)

___

### enumType

• **enumType**: `Object`

#### Index signature

▪ [x: `string`]: `any`

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L37)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

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

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable_enum.ts#L49)
