[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / TrackableNavigationSimpleLink

# Class: TrackableNavigationSimpleLink

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).TrackableNavigationSimpleLink

## Hierarchy

- [`TrackableEnum`](neuroglancer_util_trackable_enum.TrackableEnum.md)<[`NavigationSimpleLinkType`](../enums/neuroglancer_navigation_state.NavigationSimpleLinkType.md)\>

  ↳ **`TrackableNavigationSimpleLink`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md#changed)
- [enumType](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md#enumtype)

### Accessors

- [value](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md#value)

### Methods

- [reset](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md#reset)
- [restoreState](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md#restorestate)
- [toJSON](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md#tojson)

## Constructors

### constructor

• **new TrackableNavigationSimpleLink**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`NavigationSimpleLinkType`](../enums/neuroglancer_navigation_state.NavigationSimpleLinkType.md) | `NavigationSimpleLinkType.LINKED` |

#### Overrides

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[constructor](neuroglancer_util_trackable_enum.TrackableEnum.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L46)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[changed](neuroglancer_util_trackable_enum.TrackableEnum.md#changed)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable_enum.ts#L22)

___

### enumType

• **enumType**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[enumType](neuroglancer_util_trackable_enum.TrackableEnum.md#enumtype)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableEnum.value

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable_enum.ts#L37)

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

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[reset](neuroglancer_util_trackable_enum.TrackableEnum.md#reset)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable_enum.ts#L41)

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

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[TrackableEnum](neuroglancer_util_trackable_enum.TrackableEnum.md).[toJSON](neuroglancer_util_trackable_enum.TrackableEnum.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable_enum.ts#L49)
