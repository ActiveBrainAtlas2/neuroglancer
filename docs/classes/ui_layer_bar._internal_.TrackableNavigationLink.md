[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / TrackableNavigationLink

# Class: TrackableNavigationLink

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).TrackableNavigationLink

## Hierarchy

- [`TrackableEnum`](util_trackable_enum.TrackableEnum.md)<[`NavigationLinkType`](../enums/ui_layer_bar._internal_.NavigationLinkType.md)\>

  ↳ **`TrackableNavigationLink`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.TrackableNavigationLink.md#constructor)

### Properties

- [changed](ui_layer_bar._internal_.TrackableNavigationLink.md#changed)
- [enumType](ui_layer_bar._internal_.TrackableNavigationLink.md#enumtype)

### Accessors

- [value](ui_layer_bar._internal_.TrackableNavigationLink.md#value)

### Methods

- [reset](ui_layer_bar._internal_.TrackableNavigationLink.md#reset)
- [restoreState](ui_layer_bar._internal_.TrackableNavigationLink.md#restorestate)
- [toJSON](ui_layer_bar._internal_.TrackableNavigationLink.md#tojson)

## Constructors

### constructor

• **new TrackableNavigationLink**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`NavigationLinkType`](../enums/ui_layer_bar._internal_.NavigationLinkType.md) | `NavigationLinkType.LINKED` |

#### Overrides

[TrackableEnum](util_trackable_enum.TrackableEnum.md).[constructor](util_trackable_enum.TrackableEnum.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L40)

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
