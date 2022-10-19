[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TrackableValue

# Class: TrackableValue<T\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TrackableValue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`T`\>

  ↳ **`TrackableValue`**

  ↳↳ [`TrackableSkeletonLineWidth`](skeleton_frontend.TrackableSkeletonLineWidth.md)

  ↳↳ [`TrackableScaleBarOptions`](widget_scale_bar.TrackableScaleBarOptions.md)

  ↳↳ [`TrackableWindowedViewport`](datasource_state_share._internal_.TrackableWindowedViewport.md)

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.TrackableValue.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.TrackableValue.md#changed)
- [defaultValue](annotation_annotation_layer_state._internal_.TrackableValue.md#defaultvalue)
- [validator](annotation_annotation_layer_state._internal_.TrackableValue.md#validator)
- [value\_](annotation_annotation_layer_state._internal_.TrackableValue.md#value_)

### Accessors

- [value](annotation_annotation_layer_state._internal_.TrackableValue.md#value)

### Methods

- [reset](annotation_annotation_layer_state._internal_.TrackableValue.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.TrackableValue.md#restorestate)
- [toJSON](annotation_annotation_layer_state._internal_.TrackableValue.md#tojson)

## Constructors

### constructor

• **new TrackableValue**<`T`\>(`value`, `validator`, `defaultValue?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `T` | `undefined` |
| `validator` | (`value`: `any`) => `T` | `undefined` |
| `defaultValue` | `T` | `value` |

#### Overrides

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[constructor](annotation_annotation_layer_state._internal_.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L47)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[changed](annotation_annotation_layer_state._internal_.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `T` = `value`

___

### validator

• **validator**: (`value`: `any`) => `T`

#### Type declaration

▸ (`value`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`T`

___

### value\_

• `Protected` **value\_**: `T`

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[value_](annotation_annotation_layer_state._internal_.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L57)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L50)
