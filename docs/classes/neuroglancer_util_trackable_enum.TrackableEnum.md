[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/trackable\_enum](../modules/neuroglancer_util_trackable_enum.md) / TrackableEnum

# Class: TrackableEnum<T\>

[neuroglancer/util/trackable_enum](../modules/neuroglancer_util_trackable_enum.md).TrackableEnum

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

## Hierarchy

- **`TrackableEnum`**

  ↳ [`TrackableNavigationLink`](neuroglancer_navigation_state.TrackableNavigationLink.md)

  ↳ [`TrackableNavigationSimpleLink`](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md)

  ↳ [`TrackableSkeletonRenderMode`](neuroglancer_skeleton_frontend.TrackableSkeletonRenderMode.md)

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_trackable_enum.TrackableEnum.md#constructor)

### Properties

- [changed](neuroglancer_util_trackable_enum.TrackableEnum.md#changed)
- [defaultValue](neuroglancer_util_trackable_enum.TrackableEnum.md#defaultvalue)
- [enumType](neuroglancer_util_trackable_enum.TrackableEnum.md#enumtype)
- [value\_](neuroglancer_util_trackable_enum.TrackableEnum.md#value_)

### Accessors

- [value](neuroglancer_util_trackable_enum.TrackableEnum.md#value)

### Methods

- [reset](neuroglancer_util_trackable_enum.TrackableEnum.md#reset)
- [restoreState](neuroglancer_util_trackable_enum.TrackableEnum.md#restorestate)
- [toJSON](neuroglancer_util_trackable_enum.TrackableEnum.md#tojson)

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

[src/neuroglancer/util/trackable_enum.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L24)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L22)

___

### defaultValue

• `Private` **defaultValue**: `T` = `value_`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L27)

___

### enumType

• **enumType**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L25)

___

### value\_

• `Private` **value\_**: `T`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L26)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L37)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

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

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable_enum.ts#L49)
