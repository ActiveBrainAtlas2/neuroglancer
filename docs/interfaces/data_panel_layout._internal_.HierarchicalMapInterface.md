[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / HierarchicalMapInterface

# Interface: HierarchicalMapInterface<Key, Value\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).HierarchicalMapInterface

**`file`** Hierarchical mapping from keys to values.

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Implemented by

- [`HierarchicalMap`](../classes/data_panel_layout._internal_.HierarchicalMap.md)

## Table of contents

### Methods

- [entries](data_panel_layout._internal_.HierarchicalMapInterface.md#entries)
- [get](data_panel_layout._internal_.HierarchicalMapInterface.md#get)

## Methods

### entries

▸ **entries**(): [`IterableIterator`](axes_lines._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Returns

[`IterableIterator`](axes_lines._internal_.IterableIterator.md)<[`Key`, `Value`]\>

#### Defined in

[src/neuroglancer/util/hierarchical_map.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L23)

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

[src/neuroglancer/util/hierarchical_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/hierarchical_map.ts#L22)
