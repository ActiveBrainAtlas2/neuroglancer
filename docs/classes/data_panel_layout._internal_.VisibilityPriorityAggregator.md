[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / VisibilityPriorityAggregator

# Class: VisibilityPriorityAggregator

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).VisibilityPriorityAggregator

Maintains the maximum value of multiple WatchableVisibilityPriority values.

## Hierarchy

- [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md)

  ↳ **`VisibilityPriorityAggregator`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.VisibilityPriorityAggregator.md#constructor)

### Properties

- [changed](data_panel_layout._internal_.VisibilityPriorityAggregator.md#changed)
- [contributors](data_panel_layout._internal_.VisibilityPriorityAggregator.md#contributors)
- [value\_](data_panel_layout._internal_.VisibilityPriorityAggregator.md#value_)
- [IGNORED](data_panel_layout._internal_.VisibilityPriorityAggregator.md#ignored)
- [VISIBLE](data_panel_layout._internal_.VisibilityPriorityAggregator.md#visible)

### Accessors

- [ignored](data_panel_layout._internal_.VisibilityPriorityAggregator.md#ignored-1)
- [value](data_panel_layout._internal_.VisibilityPriorityAggregator.md#value)
- [visible](data_panel_layout._internal_.VisibilityPriorityAggregator.md#visible-1)

### Methods

- [add](data_panel_layout._internal_.VisibilityPriorityAggregator.md#add)
- [update](data_panel_layout._internal_.VisibilityPriorityAggregator.md#update)

## Constructors

### constructor

• **new VisibilityPriorityAggregator**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `Number.NEGATIVE_INFINITY` |

#### Inherited from

[WatchableVisibilityPriority](data_panel_layout._internal_.WatchableVisibilityPriority.md).[constructor](data_panel_layout._internal_.WatchableVisibilityPriority.md#constructor)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L35)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[WatchableVisibilityPriority](data_panel_layout._internal_.WatchableVisibilityPriority.md).[changed](data_panel_layout._internal_.WatchableVisibilityPriority.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### contributors

• `Private` **contributors**: `Map`<() => `void`, [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md)\>

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L56)

___

### value\_

• `Protected` **value\_**: `number`

#### Inherited from

[WatchableVisibilityPriority](data_panel_layout._internal_.WatchableVisibilityPriority.md).[value_](data_panel_layout._internal_.WatchableVisibilityPriority.md#value_)

___

### IGNORED

▪ `Static` **IGNORED**: `number` = `Number.NEGATIVE_INFINITY`

#### Inherited from

[WatchableVisibilityPriority](data_panel_layout._internal_.WatchableVisibilityPriority.md).[IGNORED](data_panel_layout._internal_.WatchableVisibilityPriority.md#ignored)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L40)

___

### VISIBLE

▪ `Static` **VISIBLE**: `number` = `Number.POSITIVE_INFINITY`

#### Inherited from

[WatchableVisibilityPriority](data_panel_layout._internal_.WatchableVisibilityPriority.md).[VISIBLE](data_panel_layout._internal_.WatchableVisibilityPriority.md#visible)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L39)

## Accessors

### ignored

• `get` **ignored**(): `boolean`

#### Returns

`boolean`

#### Inherited from

WatchableVisibilityPriority.ignored

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L45)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableVisibilityPriority.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L36)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

WatchableVisibilityPriority.visible

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L41)

## Methods

### add

▸ **add**(`x`): () => `void`

Registers `x` to be included in the set of values to be aggregated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md) |

#### Returns

`fn`

A disposer function that unregisters the specified value.

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L63)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L78)
