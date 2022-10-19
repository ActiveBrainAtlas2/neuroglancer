[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / TrackableEnum

# Class: TrackableEnum<T\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).TrackableEnum

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

## Hierarchy

- **`TrackableEnum`**

  ↳ [`TrackableNavigationLink`](navigation_state.TrackableNavigationLink.md)

  ↳ [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md)

  ↳ [`TrackableSkeletonRenderMode`](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md)

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.TrackableEnum.md#constructor)

### Properties

- [changed](image_user_layer._internal_.TrackableEnum.md#changed)
- [enumType](image_user_layer._internal_.TrackableEnum.md#enumtype)

### Accessors

- [value](image_user_layer._internal_.TrackableEnum.md#value)

### Methods

- [reset](image_user_layer._internal_.TrackableEnum.md#reset)
- [restoreState](image_user_layer._internal_.TrackableEnum.md#restorestate)
- [toJSON](image_user_layer._internal_.TrackableEnum.md#tojson)

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

[src/neuroglancer/util/trackable_enum.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L24)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L22)

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

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L37)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L41)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L49)
