[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/property\_map](../modules/segmentation_display_state_property_map.md) / QueryResult

# Interface: QueryResult

[segmentation_display_state/property_map](../modules/segmentation_display_state_property_map.md).QueryResult

## Table of contents

### Properties

- [count](segmentation_display_state_property_map.QueryResult.md#count)
- [errors](segmentation_display_state_property_map.QueryResult.md#errors)
- [explicitIds](segmentation_display_state_property_map.QueryResult.md#explicitids)
- [indices](segmentation_display_state_property_map.QueryResult.md#indices)
- [intermediateIndices](segmentation_display_state_property_map.QueryResult.md#intermediateindices)
- [intermediateIndicesMask](segmentation_display_state_property_map.QueryResult.md#intermediateindicesmask)
- [query](segmentation_display_state_property_map.QueryResult.md#query)
- [tags](segmentation_display_state_property_map.QueryResult.md#tags)
- [total](segmentation_display_state_property_map.QueryResult.md#total)

## Properties

### count

• **count**: `number`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:693](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L693)

___

### errors

• `Optional` **errors**: [`QueryParseError`](segmentation_display_state_property_map.QueryParseError.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:695](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L695)

___

### explicitIds

• `Optional` **explicitIds**: [`Uint64`](../classes/util_uint64.Uint64.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:691](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L691)

___

### indices

• `Optional` **indices**: [`IndicesArray`](../modules/segmentation_display_state_property_map.md#indicesarray)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:690](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L690)

___

### intermediateIndices

• `Optional` **intermediateIndices**: [`IndicesArray`](../modules/segmentation_display_state_property_map.md#indicesarray)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:682](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L682)

___

### intermediateIndicesMask

• `Optional` **intermediateIndicesMask**: `Uint8Array` \| `Uint16Array` \| `Uint32Array`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:688](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L688)

___

### query

• **query**: [`QueryParseResult`](../modules/segmentation_display_state_property_map.md#queryparseresult)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:679](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L679)

___

### tags

• `Optional` **tags**: [`TagCount`](segmentation_display_state_property_map.TagCount.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:692](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L692)

___

### total

• **total**: `number`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:694](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L694)
