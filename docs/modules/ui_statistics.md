[neuroglancer](../README.md) / [Modules](../modules.md) / ui/statistics

# Module: ui/statistics

## Table of contents

### Classes

- [StatisticsDisplayState](../classes/ui_statistics.StatisticsDisplayState.md)
- [StatisticsPanel](../classes/ui_statistics.StatisticsPanel.md)

### Interfaces

- [ChunkStatisticsColumn](../interfaces/ui_statistics.ChunkStatisticsColumn.md)

### Variables

- [columnSpecifications](ui_statistics.md#columnspecifications)

### Functions

- [getChunkSourceIdentifier](ui_statistics.md#getchunksourceidentifier)
- [getFormattedNames](ui_statistics.md#getformattednames)

## Variables

### columnSpecifications

• `Const` **columnSpecifications**: [`ChunkStatisticsColumn`](../interfaces/ui_statistics.ChunkStatisticsColumn.md)[]

#### Defined in

[src/neuroglancer/ui/statistics.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L156)

## Functions

### getChunkSourceIdentifier

▸ **getChunkSourceIdentifier**(`source`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](../classes/chunk_manager_frontend.ChunkSource.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/statistics.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L135)

___

### getFormattedNames

▸ **getFormattedNames**(`objects`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | `any`[] |

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/ui/statistics.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L139)
