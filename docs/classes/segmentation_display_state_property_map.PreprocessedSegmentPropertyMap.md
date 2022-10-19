[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/property\_map](../modules/segmentation_display_state_property_map.md) / PreprocessedSegmentPropertyMap

# Class: PreprocessedSegmentPropertyMap

[segmentation_display_state/property_map](../modules/segmentation_display_state_property_map.md).PreprocessedSegmentPropertyMap

## Table of contents

### Constructors

- [constructor](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#constructor)

### Properties

- [inlineIdToIndex](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#inlineidtoindex)
- [labels](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#labels)
- [numericalProperties](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#numericalproperties)
- [segmentPropertyMap](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#segmentpropertymap)
- [tags](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#tags)

### Methods

- [getSegmentInlineIndex](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#getsegmentinlineindex)
- [getSegmentLabel](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md#getsegmentlabel)

## Constructors

### constructor

• **new PreprocessedSegmentPropertyMap**(`segmentPropertyMap`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPropertyMap` | [`SegmentPropertyMap`](segmentation_display_state_property_map.SegmentPropertyMap.md) |

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L160)

## Properties

### inlineIdToIndex

• **inlineIdToIndex**: `undefined` \| [`IndicesArray`](../modules/segmentation_display_state_property_map.md#indicesarray)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L148)

___

### labels

• **labels**: `undefined` \| [`InlineSegmentStringProperty`](../interfaces/segmentation_display_state_property_map.InlineSegmentStringProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L150)

___

### numericalProperties

• **numericalProperties**: [`InlineSegmentNumericalProperty`](../interfaces/segmentation_display_state_property_map.InlineSegmentNumericalProperty.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L151)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`SegmentPropertyMap`](segmentation_display_state_property_map.SegmentPropertyMap.md)

___

### tags

• **tags**: `undefined` \| [`InlineSegmentTagsProperty`](../interfaces/segmentation_display_state_property_map.InlineSegmentTagsProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L149)

## Methods

### getSegmentInlineIndex

▸ **getSegmentInlineIndex**(`id`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L153)

___

### getSegmentLabel

▸ **getSegmentLabel**(`id`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L175)
