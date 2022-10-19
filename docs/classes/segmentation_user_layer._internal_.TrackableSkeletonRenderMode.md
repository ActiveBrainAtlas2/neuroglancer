[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / TrackableSkeletonRenderMode

# Class: TrackableSkeletonRenderMode

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).TrackableSkeletonRenderMode

## Hierarchy

- [`TrackableEnum`](image_user_layer._internal_.TrackableEnum.md)<[`SkeletonRenderMode`](../enums/segmentation_user_layer._internal_.SkeletonRenderMode.md)\>

  ↳ **`TrackableSkeletonRenderMode`**

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md#constructor)

### Properties

- [changed](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md#changed)
- [enumType](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md#enumtype)

### Accessors

- [value](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md#value)

### Methods

- [reset](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md#reset)
- [restoreState](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md#restorestate)
- [toJSON](segmentation_user_layer._internal_.TrackableSkeletonRenderMode.md#tojson)

## Constructors

### constructor

• **new TrackableSkeletonRenderMode**(`value`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`SkeletonRenderMode`](../enums/segmentation_user_layer._internal_.SkeletonRenderMode.md) | `undefined` |
| `defaultValue` | [`SkeletonRenderMode`](../enums/segmentation_user_layer._internal_.SkeletonRenderMode.md) | `value` |

#### Overrides

[TrackableEnum](image_user_layer._internal_.TrackableEnum.md).[constructor](image_user_layer._internal_.TrackableEnum.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L285)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[TrackableEnum](image_user_layer._internal_.TrackableEnum.md).[changed](image_user_layer._internal_.TrackableEnum.md#changed)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L22)

___

### enumType

• **enumType**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Inherited from

[TrackableEnum](image_user_layer._internal_.TrackableEnum.md).[enumType](image_user_layer._internal_.TrackableEnum.md#enumtype)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableEnum.value

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L37)

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

[src/neuroglancer/util/trackable_enum.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L30)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableEnum](image_user_layer._internal_.TrackableEnum.md).[reset](image_user_layer._internal_.TrackableEnum.md#reset)

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

#### Inherited from

[TrackableEnum](image_user_layer._internal_.TrackableEnum.md).[restoreState](image_user_layer._internal_.TrackableEnum.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[TrackableEnum](image_user_layer._internal_.TrackableEnum.md).[toJSON](image_user_layer._internal_.TrackableEnum.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable_enum.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable_enum.ts#L49)
