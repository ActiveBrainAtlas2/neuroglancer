[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/hierarchical\_map](../modules/neuroglancer_util_hierarchical_map.md) / HierarchicalMap

# Class: HierarchicalMap<Key, Value, Parent\>

[neuroglancer/util/hierarchical_map](../modules/neuroglancer_util_hierarchical_map.md).HierarchicalMap

Maps string event identifiers to string action identifiers.

When an event identifier is looked up in a given HierarchicalMap, it is resolved to a
corresponding action identifier in one of two ways:

1. via mappings defined directly on the HierarchicalMap.

2. via a recursive lookup on a "parent" HierarchicalMap that has been specified for the root
   HierarchicalMap on which the lookup was initiated.

HierarchicalMap objects may be specified as "parents" of another HierarchicalMap along with a
specified numerical priority value, such that there is a directed graph of HierarchicalMap
objects.  Cycles in this graph may lead to infinite looping.

Recursive lookups in parent HierarchicalMap objects are performed in order of decreasing
priority. The lookup stops as soon as a mapping is found.  Direct bindings have a priority of 0.
Therefore, parent maps with a priority higher than 0 take precedence over direct bindings.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | `Value` |
| `Parent` | extends [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<`Key`, `Value`\> = [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<`Key`, `Value`\> |

## Hierarchy

- **`HierarchicalMap`**

  ↳ [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

## Implements

- [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<`Key`, `Value`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_util_hierarchical_map.HierarchicalMap.md#constructor)

### Properties

- [bindings](neuroglancer_util_hierarchical_map.HierarchicalMap.md#bindings)
- [parentPriorities](neuroglancer_util_hierarchical_map.HierarchicalMap.md#parentpriorities)
- [parents](neuroglancer_util_hierarchical_map.HierarchicalMap.md#parents)

### Methods

- [addParent](neuroglancer_util_hierarchical_map.HierarchicalMap.md#addparent)
- [clear](neuroglancer_util_hierarchical_map.HierarchicalMap.md#clear)
- [delete](neuroglancer_util_hierarchical_map.HierarchicalMap.md#delete)
- [entries](neuroglancer_util_hierarchical_map.HierarchicalMap.md#entries)
- [get](neuroglancer_util_hierarchical_map.HierarchicalMap.md#get)
- [getAll](neuroglancer_util_hierarchical_map.HierarchicalMap.md#getall)
- [removeParent](neuroglancer_util_hierarchical_map.HierarchicalMap.md#removeparent)
- [set](neuroglancer_util_hierarchical_map.HierarchicalMap.md#set)

## Constructors

### constructor

• **new HierarchicalMap**<`Key`, `Value`, `Parent`\>(`existing?`)

If an existing HierarchicalMap is specified, a shallow copy is made.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | `Value` |
| `Parent` | extends [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<`Key`, `Value`, `Parent`\> = [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<`Key`, `Value`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existing?` | [`HierarchicalMap`](neuroglancer_util_hierarchical_map.HierarchicalMap.md)<`Key`, `Value`, `Parent`\> | Existing map to make a shallow copy of. |

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L57)

## Properties

### bindings

• **bindings**: `Map`<`Key`, `Value`\>

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L50)

___

### parentPriorities

• `Private` **parentPriorities**: `number`[]

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L49)

___

### parents

• **parents**: `Parent`[]

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L48)

## Methods

### addParent

▸ **addParent**(`parent`, `priority`): () => `void`

Register `parent` as a parent map.  If `priority > 0`, this map will take precedence over
direct bindings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Parent` |
| `priority` | `number` |

#### Returns

`fn`

A nullary function that unregisters the parent (and may be called at most once).

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L73)

___

### clear

▸ **clear**(): `void`

Deletes all bindings, including parents.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L117)

___

### delete

▸ **delete**(`key`): `void`

Unregister a direct binding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L110)

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Implementation of

[HierarchicalMapInterface](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md).[entries](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md#entries)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L176)

___

### get

▸ **get**(`key`): `undefined` \| `Value`

Lookup the highest priority value to which the specified key is mapped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`undefined` \| `Value`

#### Implementation of

[HierarchicalMapInterface](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md).[get](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md#get)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L126)

___

### getAll

▸ **getAll**(`key`): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`Value`\>

Find all values to which the specified key is mapped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`Value`\>

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L153)

___

### removeParent

▸ **removeParent**(`parent`): `void`

Unregisters `parent` as a parent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Parent` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L91)

___

### set

▸ **set**(`key`, `value`): `void`

Register a direct binding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `value` | `Value` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/hierarchical_map.ts#L103)
