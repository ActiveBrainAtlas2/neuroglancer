[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/event\_action\_map](../modules/neuroglancer_util_event_action_map.md) / EventActionMap

# Class: EventActionMap

[neuroglancer/util/event_action_map](../modules/neuroglancer_util_event_action_map.md).EventActionMap

Hierarchical map of `EventIdentifier` specifications to `EventAction` specifications.  These maps
are used by KeyboardEventBinder and MouseEventBinder to dispatch an ActionEvent in response to an
input event.

## Hierarchy

- [`HierarchicalMap`](neuroglancer_util_hierarchical_map.HierarchicalMap.md)<[`NormalizedEventIdentifier`](../modules/neuroglancer_util_event_action_map.md#normalizedeventidentifier), [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md), [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)\>

  ↳ **`EventActionMap`**

## Implements

- [`EventActionMapInterface`](../modules/neuroglancer_util_event_action_map.md#eventactionmapinterface)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_event_action_map.EventActionMap.md#constructor)

### Properties

- [bindings](neuroglancer_util_event_action_map.EventActionMap.md#bindings)
- [label](neuroglancer_util_event_action_map.EventActionMap.md#label)
- [parents](neuroglancer_util_event_action_map.EventActionMap.md#parents)

### Methods

- [addParent](neuroglancer_util_event_action_map.EventActionMap.md#addparent)
- [clear](neuroglancer_util_event_action_map.EventActionMap.md#clear)
- [delete](neuroglancer_util_event_action_map.EventActionMap.md#delete)
- [describe](neuroglancer_util_event_action_map.EventActionMap.md#describe)
- [entries](neuroglancer_util_event_action_map.EventActionMap.md#entries)
- [get](neuroglancer_util_event_action_map.EventActionMap.md#get)
- [getAll](neuroglancer_util_event_action_map.EventActionMap.md#getall)
- [removeParent](neuroglancer_util_event_action_map.EventActionMap.md#removeparent)
- [set](neuroglancer_util_event_action_map.EventActionMap.md#set)
- [setFromObject](neuroglancer_util_event_action_map.EventActionMap.md#setfromobject)
- [fromObject](neuroglancer_util_event_action_map.EventActionMap.md#fromobject)

## Constructors

### constructor

• **new EventActionMap**(`existing?`)

If an existing HierarchicalMap is specified, a shallow copy is made.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existing?` | [`HierarchicalMap`](neuroglancer_util_hierarchical_map.HierarchicalMap.md)<`string`, [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md), [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)\> | Existing map to make a shallow copy of. |

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[constructor](neuroglancer_util_hierarchical_map.HierarchicalMap.md#constructor)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L57)

## Properties

### bindings

• **bindings**: `Map`<`string`, [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)\>

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[bindings](neuroglancer_util_hierarchical_map.HierarchicalMap.md#bindings)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L50)

___

### label

• **label**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/event_action_map.ts#L293)

___

### parents

• **parents**: [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)[]

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[parents](neuroglancer_util_hierarchical_map.HierarchicalMap.md#parents)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L48)

## Methods

### addParent

▸ **addParent**(`parent`, `priority`): () => `void`

Register `parent` as a parent map.  If `priority > 0`, this map will take precedence over
direct bindings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md) |
| `priority` | `number` |

#### Returns

`fn`

A nullary function that unregisters the parent (and may be called at most once).

▸ (): `void`

##### Returns

`void`

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[addParent](neuroglancer_util_hierarchical_map.HierarchicalMap.md#addparent)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L73)

___

### clear

▸ **clear**(): `void`

Deletes all bindings, including parents.

#### Returns

`void`

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[clear](neuroglancer_util_hierarchical_map.HierarchicalMap.md#clear)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L117)

___

### delete

▸ **delete**(`identifier`): `void`

Deletes the mapping for the specified `identifier`.

The `identifier` may be unnormalized; the mapping is deleted for each corresponding normalized
identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`void`

#### Overrides

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[delete](neuroglancer_util_hierarchical_map.HierarchicalMap.md#delete)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/event_action_map.ts#L344)

___

### describe

▸ **describe**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/event_action_map.ts#L351)

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`string`, [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)]\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`string`, [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)]\>

#### Implementation of

EventActionMapInterface.entries

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[entries](neuroglancer_util_hierarchical_map.HierarchicalMap.md#entries)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L176)

___

### get

▸ **get**(`key`): `undefined` \| [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)

Lookup the highest priority value to which the specified key is mapped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)

#### Implementation of

EventActionMapInterface.get

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[get](neuroglancer_util_hierarchical_map.HierarchicalMap.md#get)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L126)

___

### getAll

▸ **getAll**(`key`): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)\>

Find all values to which the specified key is mapped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)\>

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[getAll](neuroglancer_util_hierarchical_map.HierarchicalMap.md#getall)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L153)

___

### removeParent

▸ **removeParent**(`parent`): `void`

Unregisters `parent` as a parent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md) |

#### Returns

`void`

#### Inherited from

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[removeParent](neuroglancer_util_hierarchical_map.HierarchicalMap.md#removeparent)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L91)

___

### set

▸ **set**(`identifier`, `action`): `void`

Maps the specified event `identifier` to the specified `action`.

The `identifier` may be unnormalized; the actual mapping is created for each corresponding
normalized identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |
| `action` | [`ActionOrEventAction`](../modules/neuroglancer_util_event_action_map._internal_.md#actionoreventaction) |

#### Returns

`void`

#### Overrides

[HierarchicalMap](neuroglancer_util_hierarchical_map.HierarchicalMap.md).[set](neuroglancer_util_hierarchical_map.HierarchicalMap.md#set)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/event_action_map.ts#L330)

___

### setFromObject

▸ **setFromObject**(`bindings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bindings` | `Object` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/event_action_map.ts#L318)

___

### fromObject

▸ `Static` **fromObject**(`bindings`, `options?`): [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

Returns a new EventActionMap with the specified bindings.

The keys of the `bindings` object specify unnormalized event identifiers to be mapped to their
corresponding `ActionOrEventAction` values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bindings` | `Object` |
| `options` | `Object` |
| `options.label?` | `string` |
| `options.parents?` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[[`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md), `number`]\> |

#### Returns

[`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/event_action_map.ts#L301)
