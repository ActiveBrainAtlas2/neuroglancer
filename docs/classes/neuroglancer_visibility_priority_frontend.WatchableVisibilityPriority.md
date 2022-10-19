[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/visibility\_priority/frontend](../modules/neuroglancer_visibility_priority_frontend.md) / WatchableVisibilityPriority

# Class: WatchableVisibilityPriority

[neuroglancer/visibility_priority/frontend](../modules/neuroglancer_visibility_priority_frontend.md).WatchableVisibilityPriority

## Hierarchy

- [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<[`VisibilityPriority`](../modules/neuroglancer_visibility_priority_frontend.md#visibilitypriority)\>

  ↳ **`WatchableVisibilityPriority`**

  ↳↳ [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#constructor)

### Properties

- [changed](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#changed)
- [value\_](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#value_)
- [IGNORED](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#ignored)
- [VISIBLE](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#visible)

### Accessors

- [ignored](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#ignored-1)
- [value](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#value)
- [visible](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#visible-1)

## Constructors

### constructor

• **new WatchableVisibilityPriority**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `Number.NEGATIVE_INFINITY` |

#### Overrides

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[constructor](neuroglancer_trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L35)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[changed](neuroglancer_trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `number`

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[value_](neuroglancer_trackable_value.WatchableValue.md#value_)

___

### IGNORED

▪ `Static` **IGNORED**: `number` = `Number.NEGATIVE_INFINITY`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L40)

___

### VISIBLE

▪ `Static` **VISIBLE**: `number` = `Number.POSITIVE_INFINITY`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L39)

## Accessors

### ignored

• `get` **ignored**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L45)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L36)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L41)
