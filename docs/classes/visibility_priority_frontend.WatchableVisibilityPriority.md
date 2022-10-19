[neuroglancer](../README.md) / [Modules](../modules.md) / [visibility\_priority/frontend](../modules/visibility_priority_frontend.md) / WatchableVisibilityPriority

# Class: WatchableVisibilityPriority

[visibility_priority/frontend](../modules/visibility_priority_frontend.md).WatchableVisibilityPriority

## Hierarchy

- [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<[`VisibilityPriority`](../modules/visibility_priority_frontend.md#visibilitypriority)\>

  ↳ **`WatchableVisibilityPriority`**

  ↳↳ [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

## Table of contents

### Constructors

- [constructor](visibility_priority_frontend.WatchableVisibilityPriority.md#constructor)

### Properties

- [changed](visibility_priority_frontend.WatchableVisibilityPriority.md#changed)
- [value\_](visibility_priority_frontend.WatchableVisibilityPriority.md#value_)
- [IGNORED](visibility_priority_frontend.WatchableVisibilityPriority.md#ignored)
- [VISIBLE](visibility_priority_frontend.WatchableVisibilityPriority.md#visible)

### Accessors

- [ignored](visibility_priority_frontend.WatchableVisibilityPriority.md#ignored-1)
- [value](visibility_priority_frontend.WatchableVisibilityPriority.md#value)
- [visible](visibility_priority_frontend.WatchableVisibilityPriority.md#visible-1)

## Constructors

### constructor

• **new WatchableVisibilityPriority**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `Number.NEGATIVE_INFINITY` |

#### Overrides

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[constructor](annotation_annotation_layer_state._internal_.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L35)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[changed](annotation_annotation_layer_state._internal_.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `number`

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[value_](annotation_annotation_layer_state._internal_.WatchableValue.md#value_)

___

### IGNORED

▪ `Static` **IGNORED**: `number` = `Number.NEGATIVE_INFINITY`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L40)

___

### VISIBLE

▪ `Static` **VISIBLE**: `number` = `Number.POSITIVE_INFINITY`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L39)

## Accessors

### ignored

• `get` **ignored**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L45)

___

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

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L41)
