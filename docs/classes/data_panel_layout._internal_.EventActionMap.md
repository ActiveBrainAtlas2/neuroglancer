[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / EventActionMap

# Class: EventActionMap

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).EventActionMap

Hierarchical map of `EventIdentifier` specifications to `EventAction` specifications.  These maps
are used by KeyboardEventBinder and MouseEventBinder to dispatch an ActionEvent in response to an
input event.

## Hierarchy

- [`HierarchicalMap`](data_panel_layout._internal_.HierarchicalMap.md)<[`NormalizedEventIdentifier`](../modules/data_panel_layout._internal_.md#normalizedeventidentifier), [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md), [`EventActionMap`](data_panel_layout._internal_.EventActionMap.md)\>

  ↳ **`EventActionMap`**

## Implements

- [`EventActionMapInterface`](../modules/data_panel_layout._internal_.md#eventactionmapinterface)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.EventActionMap.md#constructor)

### Properties

- [bindings](data_panel_layout._internal_.EventActionMap.md#bindings)
- [label](data_panel_layout._internal_.EventActionMap.md#label)
- [parents](data_panel_layout._internal_.EventActionMap.md#parents)

### Methods

- [addParent](data_panel_layout._internal_.EventActionMap.md#addparent)
- [clear](data_panel_layout._internal_.EventActionMap.md#clear)
- [delete](data_panel_layout._internal_.EventActionMap.md#delete)
- [describe](data_panel_layout._internal_.EventActionMap.md#describe)
- [entries](data_panel_layout._internal_.EventActionMap.md#entries)
- [get](data_panel_layout._internal_.EventActionMap.md#get)
- [getAll](data_panel_layout._internal_.EventActionMap.md#getall)
- [removeParent](data_panel_layout._internal_.EventActionMap.md#removeparent)
- [set](data_panel_layout._internal_.EventActionMap.md#set)
- [setFromObject](data_panel_layout._internal_.EventActionMap.md#setfromobject)
- [fromObject](data_panel_layout._internal_.EventActionMap.md#fromobject)

## Constructors

### constructor

• **new EventActionMap**(`existing?`)

If an existing HierarchicalMap is specified, a shallow copy is made.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existing?` | [`HierarchicalMap`](data_panel_layout._internal_.HierarchicalMap.md)<`string`, [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md), [`EventActionMap`](data_panel_layout._internal_.EventActionMap.md)\> | Existing map to make a shallow copy of. |

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[constructor](data_panel_layout._internal_.HierarchicalMap.md#constructor)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L57)

## Properties

### bindings

• **bindings**: `Map`<`string`, [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)\>

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[bindings](data_panel_layout._internal_.HierarchicalMap.md#bindings)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L50)

___

### label

• **label**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L293)

___

### parents

• **parents**: [`EventActionMap`](data_panel_layout._internal_.EventActionMap.md)[]

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[parents](data_panel_layout._internal_.HierarchicalMap.md#parents)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L48)

## Methods

### addParent

▸ **addParent**(`parent`, `priority`): () => `void`

Register `parent` as a parent map.  If `priority > 0`, this map will take precedence over
direct bindings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EventActionMap`](data_panel_layout._internal_.EventActionMap.md) |
| `priority` | `number` |

#### Returns

`fn`

A nullary function that unregisters the parent (and may be called at most once).

▸ (): `void`

##### Returns

`void`

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[addParent](data_panel_layout._internal_.HierarchicalMap.md#addparent)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L73)

___

### clear

▸ **clear**(): `void`

Deletes all bindings, including parents.

#### Returns

`void`

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[clear](data_panel_layout._internal_.HierarchicalMap.md#clear)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L117)

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

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[delete](data_panel_layout._internal_.HierarchicalMap.md#delete)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L344)

___

### describe

▸ **describe**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L351)

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`string`, [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)]\>

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`string`, [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)]\>

#### Implementation of

EventActionMapInterface.entries

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[entries](data_panel_layout._internal_.HierarchicalMap.md#entries)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L176)

___

### get

▸ **get**(`key`): `undefined` \| [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)

Lookup the highest priority value to which the specified key is mapped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)

#### Implementation of

EventActionMapInterface.get

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[get](data_panel_layout._internal_.HierarchicalMap.md#get)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L126)

___

### getAll

▸ **getAll**(`key`): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)\>

Find all values to which the specified key is mapped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)\>

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[getAll](data_panel_layout._internal_.HierarchicalMap.md#getall)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L153)

___

### removeParent

▸ **removeParent**(`parent`): `void`

Unregisters `parent` as a parent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EventActionMap`](data_panel_layout._internal_.EventActionMap.md) |

#### Returns

`void`

#### Inherited from

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[removeParent](data_panel_layout._internal_.HierarchicalMap.md#removeparent)

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L91)

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
| `action` | [`ActionOrEventAction`](../modules/data_panel_layout._internal_.md#actionoreventaction) |

#### Returns

`void`

#### Overrides

[HierarchicalMap](data_panel_layout._internal_.HierarchicalMap.md).[set](data_panel_layout._internal_.HierarchicalMap.md#set)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L330)

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

[src/neuroglancer/util/event_action_map.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L318)

___

### fromObject

▸ `Static` **fromObject**(`bindings`, `options?`): [`EventActionMap`](data_panel_layout._internal_.EventActionMap.md)

Returns a new EventActionMap with the specified bindings.

The keys of the `bindings` object specify unnormalized event identifiers to be mapped to their
corresponding `ActionOrEventAction` values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bindings` | `Object` |
| `options` | `Object` |
| `options.label?` | `string` |
| `options.parents?` | [`Iterable`](../interfaces/axes_lines._internal_.Iterable.md)<[[`EventActionMap`](data_panel_layout._internal_.EventActionMap.md), `number`]\> |

#### Returns

[`EventActionMap`](data_panel_layout._internal_.EventActionMap.md)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L301)
