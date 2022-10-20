[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/segmentation\_display\_state/property\_map

# Module: neuroglancer/segmentation\_display\_state/property\_map

## Table of contents

### Classes

- [IndexedSegmentPropertySource](../classes/neuroglancer_segmentation_display_state_property_map.IndexedSegmentPropertySource.md)
- [PreprocessedSegmentPropertyMap](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)
- [SegmentPropertyMap](../classes/neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md)

### Interfaces

- [ExplicitIdQuery](../interfaces/neuroglancer_segmentation_display_state_property_map.ExplicitIdQuery.md)
- [FilterQuery](../interfaces/neuroglancer_segmentation_display_state_property_map.FilterQuery.md)
- [IndexedSegmentPropertyMapOptions](../interfaces/neuroglancer_segmentation_display_state_property_map.IndexedSegmentPropertyMapOptions.md)
- [InlineSegmentNumericalProperty](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentNumericalProperty.md)
- [InlineSegmentPropertyMap](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentPropertyMap.md)
- [InlineSegmentStringProperty](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentStringProperty.md)
- [InlineSegmentTagsProperty](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentTagsProperty.md)
- [NumericalPropertyConstraint](../interfaces/neuroglancer_segmentation_display_state_property_map.NumericalPropertyConstraint.md)
- [PropertyHistogram](../interfaces/neuroglancer_segmentation_display_state_property_map.PropertyHistogram.md)
- [QueryParseError](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryParseError.md)
- [QueryParseErrors](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryParseErrors.md)
- [QueryResult](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryResult.md)
- [SortBy](../interfaces/neuroglancer_segmentation_display_state_property_map.SortBy.md)
- [TagCount](../interfaces/neuroglancer_segmentation_display_state_property_map.TagCount.md)

### Type Aliases

- [IndicesArray](neuroglancer_segmentation_display_state_property_map.md#indicesarray)
- [InlineSegmentProperty](neuroglancer_segmentation_display_state_property_map.md#inlinesegmentproperty)
- [QueryParseResult](neuroglancer_segmentation_display_state_property_map.md#queryparseresult)

### Functions

- [changeTagConstraintInSegmentQuery](neuroglancer_segmentation_display_state_property_map.md#changetagconstraintinsegmentquery)
- [executeSegmentQuery](neuroglancer_segmentation_display_state_property_map.md#executesegmentquery)
- [findQueryResultIntersectionSize](neuroglancer_segmentation_display_state_property_map.md#findqueryresultintersectionsize)
- [forEachQueryResultSegmentId](neuroglancer_segmentation_display_state_property_map.md#foreachqueryresultsegmentid)
- [getPreprocessedSegmentPropertyMap](neuroglancer_segmentation_display_state_property_map.md#getpreprocessedsegmentpropertymap)
- [isQueryUnconstrained](neuroglancer_segmentation_display_state_property_map.md#isqueryunconstrained)
- [mergeSegmentPropertyMaps](neuroglancer_segmentation_display_state_property_map.md#mergesegmentpropertymaps)
- [normalizeInlineSegmentPropertyMap](neuroglancer_segmentation_display_state_property_map.md#normalizeinlinesegmentpropertymap)
- [parseSegmentQuery](neuroglancer_segmentation_display_state_property_map.md#parsesegmentquery)
- [queryIncludesColumn](neuroglancer_segmentation_display_state_property_map.md#queryincludescolumn)
- [unparseSegmentQuery](neuroglancer_segmentation_display_state_property_map.md#unparsesegmentquery)
- [updatePropertyHistograms](neuroglancer_segmentation_display_state_property_map.md#updatepropertyhistograms)

## Type Aliases

### IndicesArray

Ƭ **IndicesArray**: `Uint32Array` \| `Uint16Array` \| `Uint8Array`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L95)

___

### InlineSegmentProperty

Ƭ **InlineSegmentProperty**: [`InlineSegmentStringProperty`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentStringProperty.md) \| [`InlineSegmentTagsProperty`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentTagsProperty.md) \| [`InlineSegmentNumericalProperty`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentNumericalProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L29)

___

### QueryParseResult

Ƭ **QueryParseResult**: [`ExplicitIdQuery`](../interfaces/neuroglancer_segmentation_display_state_property_map.ExplicitIdQuery.md) \| [`FilterQuery`](../interfaces/neuroglancer_segmentation_display_state_property_map.FilterQuery.md) \| [`QueryParseErrors`](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryParseErrors.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L434)

## Functions

### changeTagConstraintInSegmentQuery

▸ **changeTagConstraintInSegmentQuery**(`query`, `tag`, `include`, `value`): [`FilterQuery`](../interfaces/neuroglancer_segmentation_display_state_property_map.FilterQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`FilterQuery`](../interfaces/neuroglancer_segmentation_display_state_property_map.FilterQuery.md) |
| `tag` | `string` |
| `include` | `boolean` |
| `value` | `boolean` |

#### Returns

[`FilterQuery`](../interfaces/neuroglancer_segmentation_display_state_property_map.FilterQuery.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1077](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L1077)

___

### executeSegmentQuery

▸ **executeSegmentQuery**(`db`, `query`): [`QueryResult`](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `query` | [`QueryParseResult`](neuroglancer_segmentation_display_state_property_map.md#queryparseresult) |

#### Returns

[`QueryResult`](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryResult.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:702](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L702)

___

### findQueryResultIntersectionSize

▸ **findQueryResultIntersectionSize**(`db`, `queryResult`, `segmentSet`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryResult` | `undefined` \| [`QueryResult`](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryResult.md) |
| `segmentSet` | [`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1066](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L1066)

___

### forEachQueryResultSegmentId

▸ **forEachQueryResultSegmentId**(`db`, `queryResult`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryResult` | `undefined` \| [`QueryResult`](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryResult.md) |
| `callback` | (`id`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1045](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L1045)

___

### getPreprocessedSegmentPropertyMap

▸ **getPreprocessedSegmentPropertyMap**(`chunkManager`, `maps`): [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `maps` | [`SegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md)[] |

#### Returns

[`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) \| `undefined`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L372)

___

### isQueryUnconstrained

▸ **isQueryUnconstrained**(`query`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`QueryParseResult`](neuroglancer_segmentation_display_state_property_map.md#queryparseresult) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1087](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L1087)

___

### mergeSegmentPropertyMaps

▸ **mergeSegmentPropertyMaps**(`maps`): [`SegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maps` | [`SegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md)[] |

#### Returns

[`SegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md) \| `undefined`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L356)

___

### normalizeInlineSegmentPropertyMap

▸ **normalizeInlineSegmentPropertyMap**(`inlineProperties`): [`InlineSegmentPropertyMap`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentPropertyMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inlineProperties` | [`InlineSegmentPropertyMap`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentPropertyMap.md) |

#### Returns

[`InlineSegmentPropertyMap`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentPropertyMap.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L219)

___

### parseSegmentQuery

▸ **parseSegmentQuery**(`db`, `queryString`): [`QueryParseResult`](neuroglancer_segmentation_display_state_property_map.md#queryparseresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryString` | `string` |

#### Returns

[`QueryParseResult`](neuroglancer_segmentation_display_state_property_map.md#queryparseresult)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L438)

___

### queryIncludesColumn

▸ **queryIncludesColumn**(`query`, `fieldId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `undefined` \| [`QueryParseResult`](neuroglancer_segmentation_display_state_property_map.md#queryparseresult) |
| `fieldId` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1098](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L1098)

___

### unparseSegmentQuery

▸ **unparseSegmentQuery**(`db`, `query`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `query` | [`ExplicitIdQuery`](../interfaces/neuroglancer_segmentation_display_state_property_map.ExplicitIdQuery.md) \| [`FilterQuery`](../interfaces/neuroglancer_segmentation_display_state_property_map.FilterQuery.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:969](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L969)

___

### updatePropertyHistograms

▸ **updatePropertyHistograms**(`db`, `queryResult`, `propertyHistograms`, `bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryResult` | `undefined` \| [`QueryResult`](../interfaces/neuroglancer_segmentation_display_state_property_map.QueryResult.md) |
| `propertyHistograms` | [`PropertyHistogram`](../interfaces/neuroglancer_segmentation_display_state_property_map.PropertyHistogram.md)[] |
| `bounds` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:938](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/property_map.ts#L938)
