[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / TrackableNavigationLink

# Class: TrackableNavigationLink

[navigation_state](../modules/navigation_state.md).TrackableNavigationLink

## Hierarchy

- `TrackableEnum`<[`NavigationLinkType`](../enums/navigation_state.NavigationLinkType.md)\>

  ↳ **`TrackableNavigationLink`**

## Table of contents

### Constructors

- [constructor](navigation_state.TrackableNavigationLink.md#constructor)

### Properties

- [changed](navigation_state.TrackableNavigationLink.md#changed)
- [enumType](navigation_state.TrackableNavigationLink.md#enumtype)

### Accessors

- [value](navigation_state.TrackableNavigationLink.md#value)

### Methods

- [reset](navigation_state.TrackableNavigationLink.md#reset)
- [restoreState](navigation_state.TrackableNavigationLink.md#restorestate)
- [toJSON](navigation_state.TrackableNavigationLink.md#tojson)

## Constructors

### constructor

• **new TrackableNavigationLink**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`NavigationLinkType`](../enums/navigation_state.NavigationLinkType.md) | `NavigationLinkType.LINKED` |

#### Overrides

TrackableEnum&lt;NavigationLinkType\&gt;.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L40)

## Properties

### changed

• **changed**: `NullarySignal`

#### Inherited from

TrackableEnum.changed

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/trackable_enum.ts#L22)

___

### enumType

• **enumType**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Inherited from

TrackableEnum.enumType

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableEnum.value

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/trackable_enum.ts#L37)

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

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

TrackableEnum.reset

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/trackable_enum.ts#L41)

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

TrackableEnum.restoreState

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

TrackableEnum.toJSON

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/trackable_enum.ts#L49)
