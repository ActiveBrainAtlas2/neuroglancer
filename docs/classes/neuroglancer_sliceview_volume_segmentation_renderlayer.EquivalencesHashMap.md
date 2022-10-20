[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/segmentation\_renderlayer](../modules/neuroglancer_sliceview_volume_segmentation_renderlayer.md) / EquivalencesHashMap

# Class: EquivalencesHashMap

[neuroglancer/sliceview/volume/segmentation_renderlayer](../modules/neuroglancer_sliceview_volume_segmentation_renderlayer.md).EquivalencesHashMap

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_volume_segmentation_renderlayer.EquivalencesHashMap.md#constructor)

### Properties

- [disjointSets](neuroglancer_sliceview_volume_segmentation_renderlayer.EquivalencesHashMap.md#disjointsets)
- [generation](neuroglancer_sliceview_volume_segmentation_renderlayer.EquivalencesHashMap.md#generation)
- [hashMap](neuroglancer_sliceview_volume_segmentation_renderlayer.EquivalencesHashMap.md#hashmap)

### Methods

- [update](neuroglancer_sliceview_volume_segmentation_renderlayer.EquivalencesHashMap.md#update)

## Constructors

### constructor

• **new EquivalencesHashMap**(`disjointSets`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `disjointSets` | [`DisjointUint64Sets`](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md) |

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L33)

## Properties

### disjointSets

• **disjointSets**: [`DisjointUint64Sets`](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L33)

___

### generation

• **generation**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L31)

___

### hashMap

• **hashMap**: [`HashMapUint64`](neuroglancer_gpu_hash_hash_table.HashMapUint64.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L32)

## Methods

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L34)
