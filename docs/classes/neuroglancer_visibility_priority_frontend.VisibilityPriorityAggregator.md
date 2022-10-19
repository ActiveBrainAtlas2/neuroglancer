[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/visibility\_priority/frontend](../modules/neuroglancer_visibility_priority_frontend.md) / VisibilityPriorityAggregator

# Class: VisibilityPriorityAggregator

[neuroglancer/visibility_priority/frontend](../modules/neuroglancer_visibility_priority_frontend.md).VisibilityPriorityAggregator

Maintains the maximum value of multiple WatchableVisibilityPriority values.

## Hierarchy

- [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

  ↳ **`VisibilityPriorityAggregator`**

## Table of contents

### Constructors

- [constructor](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#constructor)

### Properties

- [changed](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#changed)
- [contributors](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#contributors)
- [value\_](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#value_)
- [IGNORED](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#ignored)
- [VISIBLE](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#visible)

### Accessors

- [ignored](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#ignored-1)
- [value](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#value)
- [visible](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#visible-1)

### Methods

- [add](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#add)
- [update](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md#update)

## Constructors

### constructor

• **new VisibilityPriorityAggregator**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `Number.NEGATIVE_INFINITY` |

#### Inherited from

[WatchableVisibilityPriority](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md).[constructor](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#constructor)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L35)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableVisibilityPriority](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md).[changed](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L42)

___

### contributors

• `Private` **contributors**: `Map`<() => `void`, [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)\>

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L56)

___

### value\_

• `Protected` **value\_**: `number`

#### Inherited from

[WatchableVisibilityPriority](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md).[value_](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#value_)

___

### IGNORED

▪ `Static` **IGNORED**: `number` = `Number.NEGATIVE_INFINITY`

#### Inherited from

[WatchableVisibilityPriority](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md).[IGNORED](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#ignored)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L40)

___

### VISIBLE

▪ `Static` **VISIBLE**: `number` = `Number.POSITIVE_INFINITY`

#### Inherited from

[WatchableVisibilityPriority](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md).[VISIBLE](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md#visible)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L39)

## Accessors

### ignored

• `get` **ignored**(): `boolean`

#### Returns

`boolean`

#### Inherited from

WatchableVisibilityPriority.ignored

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L45)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableVisibilityPriority.value

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

WatchableVisibilityPriority.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L36)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

WatchableVisibilityPriority.visible

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L41)

## Methods

### add

▸ **add**(`x`): () => `void`

Registers `x` to be included in the set of values to be aggregated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Returns

`fn`

A disposer function that unregisters the specified value.

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L63)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L78)
