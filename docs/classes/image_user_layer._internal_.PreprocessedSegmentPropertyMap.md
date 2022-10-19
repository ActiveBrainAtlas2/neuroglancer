[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / PreprocessedSegmentPropertyMap

# Class: PreprocessedSegmentPropertyMap

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).PreprocessedSegmentPropertyMap

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#constructor)

### Properties

- [inlineIdToIndex](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#inlineidtoindex)
- [labels](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#labels)
- [numericalProperties](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#numericalproperties)
- [segmentPropertyMap](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#segmentpropertymap)
- [tags](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#tags)

### Methods

- [getSegmentInlineIndex](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#getsegmentinlineindex)
- [getSegmentLabel](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md#getsegmentlabel)

## Constructors

### constructor

• **new PreprocessedSegmentPropertyMap**(`segmentPropertyMap`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPropertyMap` | [`SegmentPropertyMap`](image_user_layer._internal_.SegmentPropertyMap.md) |

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/property_map.ts#L160)

## Properties

### inlineIdToIndex

• **inlineIdToIndex**: `undefined` \| [`IndicesArray`](../modules/image_user_layer._internal_.md#indicesarray)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/property_map.ts#L148)

___

### labels

• **labels**: `undefined` \| [`InlineSegmentStringProperty`](../interfaces/image_user_layer._internal_.InlineSegmentStringProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/property_map.ts#L150)

___

### numericalProperties

• **numericalProperties**: [`InlineSegmentNumericalProperty`](../interfaces/image_user_layer._internal_.InlineSegmentNumericalProperty.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/property_map.ts#L151)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`SegmentPropertyMap`](image_user_layer._internal_.SegmentPropertyMap.md)

___

### tags

• **tags**: `undefined` \| [`InlineSegmentTagsProperty`](../interfaces/image_user_layer._internal_.InlineSegmentTagsProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/property_map.ts#L149)

## Methods

### getSegmentInlineIndex

▸ **getSegmentInlineIndex**(`id`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/property_map.ts#L153)

___

### getSegmentLabel

▸ **getSegmentLabel**(`id`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/property_map.ts#L175)
