[neuroglancer](../README.md) / [Modules](../modules.md) / segmentation\_display\_state/property\_map

# Module: segmentation\_display\_state/property\_map

## Table of contents

### Classes

- [IndexedSegmentPropertySource](../classes/segmentation_display_state_property_map.IndexedSegmentPropertySource.md)
- [PreprocessedSegmentPropertyMap](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)
- [SegmentPropertyMap](../classes/segmentation_display_state_property_map.SegmentPropertyMap.md)

### Interfaces

- [ExplicitIdQuery](../interfaces/segmentation_display_state_property_map.ExplicitIdQuery.md)
- [FilterQuery](../interfaces/segmentation_display_state_property_map.FilterQuery.md)
- [IndexedSegmentPropertyMapOptions](../interfaces/segmentation_display_state_property_map.IndexedSegmentPropertyMapOptions.md)
- [InlineSegmentNumericalProperty](../interfaces/segmentation_display_state_property_map.InlineSegmentNumericalProperty.md)
- [InlineSegmentPropertyMap](../interfaces/segmentation_display_state_property_map.InlineSegmentPropertyMap.md)
- [InlineSegmentStringProperty](../interfaces/segmentation_display_state_property_map.InlineSegmentStringProperty.md)
- [InlineSegmentTagsProperty](../interfaces/segmentation_display_state_property_map.InlineSegmentTagsProperty.md)
- [NumericalPropertyConstraint](../interfaces/segmentation_display_state_property_map.NumericalPropertyConstraint.md)
- [PropertyHistogram](../interfaces/segmentation_display_state_property_map.PropertyHistogram.md)
- [QueryParseError](../interfaces/segmentation_display_state_property_map.QueryParseError.md)
- [QueryParseErrors](../interfaces/segmentation_display_state_property_map.QueryParseErrors.md)
- [QueryResult](../interfaces/segmentation_display_state_property_map.QueryResult.md)
- [SortBy](../interfaces/segmentation_display_state_property_map.SortBy.md)
- [TagCount](../interfaces/segmentation_display_state_property_map.TagCount.md)

### Type Aliases

- [IndicesArray](segmentation_display_state_property_map.md#indicesarray)
- [InlineSegmentProperty](segmentation_display_state_property_map.md#inlinesegmentproperty)
- [QueryParseResult](segmentation_display_state_property_map.md#queryparseresult)

### Functions

- [changeTagConstraintInSegmentQuery](segmentation_display_state_property_map.md#changetagconstraintinsegmentquery)
- [executeSegmentQuery](segmentation_display_state_property_map.md#executesegmentquery)
- [findQueryResultIntersectionSize](segmentation_display_state_property_map.md#findqueryresultintersectionsize)
- [forEachQueryResultSegmentId](segmentation_display_state_property_map.md#foreachqueryresultsegmentid)
- [getPreprocessedSegmentPropertyMap](segmentation_display_state_property_map.md#getpreprocessedsegmentpropertymap)
- [isQueryUnconstrained](segmentation_display_state_property_map.md#isqueryunconstrained)
- [mergeSegmentPropertyMaps](segmentation_display_state_property_map.md#mergesegmentpropertymaps)
- [normalizeInlineSegmentPropertyMap](segmentation_display_state_property_map.md#normalizeinlinesegmentpropertymap)
- [parseSegmentQuery](segmentation_display_state_property_map.md#parsesegmentquery)
- [queryIncludesColumn](segmentation_display_state_property_map.md#queryincludescolumn)
- [unparseSegmentQuery](segmentation_display_state_property_map.md#unparsesegmentquery)
- [updatePropertyHistograms](segmentation_display_state_property_map.md#updatepropertyhistograms)

## Type Aliases

### IndicesArray

Ƭ **IndicesArray**: `Uint32Array` \| `Uint16Array` \| `Uint8Array`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L95)

___

### InlineSegmentProperty

Ƭ **InlineSegmentProperty**: [`InlineSegmentStringProperty`](../interfaces/segmentation_display_state_property_map.InlineSegmentStringProperty.md) \| [`InlineSegmentTagsProperty`](../interfaces/segmentation_display_state_property_map.InlineSegmentTagsProperty.md) \| [`InlineSegmentNumericalProperty`](../interfaces/segmentation_display_state_property_map.InlineSegmentNumericalProperty.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L29)

___

### QueryParseResult

Ƭ **QueryParseResult**: [`ExplicitIdQuery`](../interfaces/segmentation_display_state_property_map.ExplicitIdQuery.md) \| [`FilterQuery`](../interfaces/segmentation_display_state_property_map.FilterQuery.md) \| [`QueryParseErrors`](../interfaces/segmentation_display_state_property_map.QueryParseErrors.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L434)

## Functions

### changeTagConstraintInSegmentQuery

▸ **changeTagConstraintInSegmentQuery**(`query`, `tag`, `include`, `value`): [`FilterQuery`](../interfaces/segmentation_display_state_property_map.FilterQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`FilterQuery`](../interfaces/segmentation_display_state_property_map.FilterQuery.md) |
| `tag` | `string` |
| `include` | `boolean` |
| `value` | `boolean` |

#### Returns

[`FilterQuery`](../interfaces/segmentation_display_state_property_map.FilterQuery.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1077](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L1077)

___

### executeSegmentQuery

▸ **executeSegmentQuery**(`db`, `query`): [`QueryResult`](../interfaces/segmentation_display_state_property_map.QueryResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `query` | [`QueryParseResult`](segmentation_display_state_property_map.md#queryparseresult) |

#### Returns

[`QueryResult`](../interfaces/segmentation_display_state_property_map.QueryResult.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:702](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L702)

___

### findQueryResultIntersectionSize

▸ **findQueryResultIntersectionSize**(`db`, `queryResult`, `segmentSet`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryResult` | `undefined` \| [`QueryResult`](../interfaces/segmentation_display_state_property_map.QueryResult.md) |
| `segmentSet` | [`Uint64Set`](../classes/mesh_backend._internal_.Uint64Set.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1066](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L1066)

___

### forEachQueryResultSegmentId

▸ **forEachQueryResultSegmentId**(`db`, `queryResult`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryResult` | `undefined` \| [`QueryResult`](../interfaces/segmentation_display_state_property_map.QueryResult.md) |
| `callback` | (`id`: [`Uint64`](../classes/util_uint64.Uint64.md), `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1045](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L1045)

___

### getPreprocessedSegmentPropertyMap

▸ **getPreprocessedSegmentPropertyMap**(`chunkManager`, `maps`): [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/chunk_manager_frontend.ChunkManager.md) |
| `maps` | [`SegmentPropertyMap`](../classes/segmentation_display_state_property_map.SegmentPropertyMap.md)[] |

#### Returns

[`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) \| `undefined`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L372)

___

### isQueryUnconstrained

▸ **isQueryUnconstrained**(`query`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`QueryParseResult`](segmentation_display_state_property_map.md#queryparseresult) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1087](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L1087)

___

### mergeSegmentPropertyMaps

▸ **mergeSegmentPropertyMaps**(`maps`): [`SegmentPropertyMap`](../classes/segmentation_display_state_property_map.SegmentPropertyMap.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maps` | [`SegmentPropertyMap`](../classes/segmentation_display_state_property_map.SegmentPropertyMap.md)[] |

#### Returns

[`SegmentPropertyMap`](../classes/segmentation_display_state_property_map.SegmentPropertyMap.md) \| `undefined`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L356)

___

### normalizeInlineSegmentPropertyMap

▸ **normalizeInlineSegmentPropertyMap**(`inlineProperties`): [`InlineSegmentPropertyMap`](../interfaces/segmentation_display_state_property_map.InlineSegmentPropertyMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inlineProperties` | [`InlineSegmentPropertyMap`](../interfaces/segmentation_display_state_property_map.InlineSegmentPropertyMap.md) |

#### Returns

[`InlineSegmentPropertyMap`](../interfaces/segmentation_display_state_property_map.InlineSegmentPropertyMap.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L219)

___

### parseSegmentQuery

▸ **parseSegmentQuery**(`db`, `queryString`): [`QueryParseResult`](segmentation_display_state_property_map.md#queryparseresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryString` | `string` |

#### Returns

[`QueryParseResult`](segmentation_display_state_property_map.md#queryparseresult)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L438)

___

### queryIncludesColumn

▸ **queryIncludesColumn**(`query`, `fieldId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `undefined` \| [`QueryParseResult`](segmentation_display_state_property_map.md#queryparseresult) |
| `fieldId` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:1098](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L1098)

___

### unparseSegmentQuery

▸ **unparseSegmentQuery**(`db`, `query`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `query` | [`ExplicitIdQuery`](../interfaces/segmentation_display_state_property_map.ExplicitIdQuery.md) \| [`FilterQuery`](../interfaces/segmentation_display_state_property_map.FilterQuery.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:969](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L969)

___

### updatePropertyHistograms

▸ **updatePropertyHistograms**(`db`, `queryResult`, `propertyHistograms`, `bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md) |
| `queryResult` | `undefined` \| [`QueryResult`](../interfaces/segmentation_display_state_property_map.QueryResult.md) |
| `propertyHistograms` | [`PropertyHistogram`](../interfaces/segmentation_display_state_property_map.PropertyHistogram.md)[] |
| `bounds` | [`DataTypeInterval`](util_lerp.md#datatypeinterval)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:938](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L938)
