[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/hierarchical\_map](../modules/neuroglancer_util_hierarchical_map.md) / HierarchicalMapInterface

# Interface: HierarchicalMapInterface<Key, Value\>

[neuroglancer/util/hierarchical_map](../modules/neuroglancer_util_hierarchical_map.md).HierarchicalMapInterface

**`file`** Hierarchical mapping from keys to values.

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Implemented by

- [`HierarchicalMap`](../classes/neuroglancer_util_hierarchical_map.HierarchicalMap.md)

## Table of contents

### Methods

- [entries](neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md#entries)
- [get](neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md#get)

## Methods

### entries

▸ **entries**(): [`IterableIterator`](main_module._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Returns

[`IterableIterator`](main_module._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L23)

___

### get

▸ **get**(`key`): `undefined` \| `Value`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`undefined` \| `Value`

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/hierarchical_map.ts#L22)
