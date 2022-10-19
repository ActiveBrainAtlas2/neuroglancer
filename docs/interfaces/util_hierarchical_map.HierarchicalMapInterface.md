[neuroglancer](../README.md) / [Modules](../modules.md) / [util/hierarchical\_map](../modules/util_hierarchical_map.md) / HierarchicalMapInterface

# Interface: HierarchicalMapInterface<Key, Value\>

[util/hierarchical_map](../modules/util_hierarchical_map.md).HierarchicalMapInterface

**`file`** Hierarchical mapping from keys to values.

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Implemented by

- [`HierarchicalMap`](../classes/util_hierarchical_map.HierarchicalMap.md)

## Table of contents

### Methods

- [entries](util_hierarchical_map.HierarchicalMapInterface.md#entries)
- [get](util_hierarchical_map.HierarchicalMapInterface.md#get)

## Methods

### entries

▸ **entries**(): [`IterableIterator`](annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Returns

[`IterableIterator`](annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/hierarchical_map.ts#L23)

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

[src/neuroglancer/util/hierarchical_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/hierarchical_map.ts#L22)
