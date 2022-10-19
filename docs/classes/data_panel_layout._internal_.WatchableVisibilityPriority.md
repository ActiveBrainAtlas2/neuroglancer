[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / WatchableVisibilityPriority

# Class: WatchableVisibilityPriority

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).WatchableVisibilityPriority

## Hierarchy

- [`WatchableValue`](trackable_value.WatchableValue.md)<[`VisibilityPriority`](../modules/data_panel_layout._internal_.md#visibilitypriority)\>

  ↳ **`WatchableVisibilityPriority`**

  ↳↳ [`VisibilityPriorityAggregator`](data_panel_layout._internal_.VisibilityPriorityAggregator.md)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.WatchableVisibilityPriority.md#constructor)

### Properties

- [changed](data_panel_layout._internal_.WatchableVisibilityPriority.md#changed)
- [value\_](data_panel_layout._internal_.WatchableVisibilityPriority.md#value_)
- [IGNORED](data_panel_layout._internal_.WatchableVisibilityPriority.md#ignored)
- [VISIBLE](data_panel_layout._internal_.WatchableVisibilityPriority.md#visible)

### Accessors

- [ignored](data_panel_layout._internal_.WatchableVisibilityPriority.md#ignored-1)
- [value](data_panel_layout._internal_.WatchableVisibilityPriority.md#value)
- [visible](data_panel_layout._internal_.WatchableVisibilityPriority.md#visible-1)

## Constructors

### constructor

• **new WatchableVisibilityPriority**(`value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `Number.NEGATIVE_INFINITY` |

#### Overrides

[WatchableValue](trackable_value.WatchableValue.md).[constructor](trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L35)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[changed](trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `number`

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[value_](trackable_value.WatchableValue.md#value_)

___

### IGNORED

▪ `Static` **IGNORED**: `number` = `Number.NEGATIVE_INFINITY`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L40)

___

### VISIBLE

▪ `Static` **VISIBLE**: `number` = `Number.POSITIVE_INFINITY`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L39)

## Accessors

### ignored

• `get` **ignored**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L45)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

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

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L36)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L41)
