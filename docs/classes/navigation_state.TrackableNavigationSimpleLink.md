[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / TrackableNavigationSimpleLink

# Class: TrackableNavigationSimpleLink

[navigation_state](../modules/navigation_state.md).TrackableNavigationSimpleLink

## Hierarchy

- `TrackableEnum`<[`NavigationSimpleLinkType`](../enums/navigation_state.NavigationSimpleLinkType.md)\>

  ↳ **`TrackableNavigationSimpleLink`**

## Table of contents

### Constructors

- [constructor](navigation_state.TrackableNavigationSimpleLink.md#constructor)

### Properties

- [changed](navigation_state.TrackableNavigationSimpleLink.md#changed)
- [enumType](navigation_state.TrackableNavigationSimpleLink.md#enumtype)

### Accessors

- [value](navigation_state.TrackableNavigationSimpleLink.md#value)

### Methods

- [reset](navigation_state.TrackableNavigationSimpleLink.md#reset)
- [restoreState](navigation_state.TrackableNavigationSimpleLink.md#restorestate)
- [toJSON](navigation_state.TrackableNavigationSimpleLink.md#tojson)

## Constructors

### constructor

• **new TrackableNavigationSimpleLink**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`NavigationSimpleLinkType`](../enums/navigation_state.NavigationSimpleLinkType.md) | `NavigationSimpleLinkType.LINKED` |

#### Overrides

TrackableEnum&lt;NavigationSimpleLinkType\&gt;.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L46)

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
