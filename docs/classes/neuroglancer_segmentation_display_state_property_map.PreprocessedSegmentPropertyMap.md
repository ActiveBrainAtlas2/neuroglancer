[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/property\_map](../modules/neuroglancer_segmentation_display_state_property_map.md) / PreprocessedSegmentPropertyMap

# Class: PreprocessedSegmentPropertyMap

[neuroglancer/segmentation_display_state/property_map](../modules/neuroglancer_segmentation_display_state_property_map.md).PreprocessedSegmentPropertyMap

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#constructor)

### Properties

- [inlineIdToIndex](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#inlineidtoindex)
- [labels](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#labels)
- [numericalProperties](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#numericalproperties)
- [segmentPropertyMap](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#segmentpropertymap)
- [tags](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#tags)

### Methods

- [getSegmentInlineIndex](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#getsegmentinlineindex)
- [getSegmentLabel](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#getsegmentlabel)

## Constructors

### constructor

• **new PreprocessedSegmentPropertyMap**(`segmentPropertyMap`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPropertyMap` | [`SegmentPropertyMap`](neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md) |

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/property_map.ts#L160)

## Properties

### inlineIdToIndex

• **inlineIdToIndex**: `undefined` \| [`IndicesArray`](../modules/neuroglancer_segmentation_display_state_property_map.md#indicesarray)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/property_map.ts#L148)

___

### labels

• **labels**: `undefined` \| [`InlineSegmentStringProperty`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentStringProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/property_map.ts#L150)

___

### numericalProperties

• **numericalProperties**: [`InlineSegmentNumericalProperty`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentNumericalProperty.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/property_map.ts#L151)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`SegmentPropertyMap`](neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md)

___

### tags

• **tags**: `undefined` \| [`InlineSegmentTagsProperty`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentTagsProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/property_map.ts#L149)

## Methods

### getSegmentInlineIndex

▸ **getSegmentInlineIndex**(`id`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/property_map.ts#L153)

___

### getSegmentLabel

▸ **getSegmentLabel**(`id`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/property_map.ts#L175)
