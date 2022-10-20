[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/ui/statistics

# Module: neuroglancer/ui/statistics

## Table of contents

### Classes

- [StatisticsDisplayState](../classes/neuroglancer_ui_statistics.StatisticsDisplayState.md)
- [StatisticsPanel](../classes/neuroglancer_ui_statistics.StatisticsPanel.md)

### Interfaces

- [ChunkStatisticsColumn](../interfaces/neuroglancer_ui_statistics.ChunkStatisticsColumn.md)

### Variables

- [columnSpecifications](neuroglancer_ui_statistics.md#columnspecifications)

### Functions

- [getChunkSourceIdentifier](neuroglancer_ui_statistics.md#getchunksourceidentifier)
- [getFormattedNames](neuroglancer_ui_statistics.md#getformattednames)

## Variables

### columnSpecifications

• `Const` **columnSpecifications**: [`ChunkStatisticsColumn`](../interfaces/neuroglancer_ui_statistics.ChunkStatisticsColumn.md)[]

#### Defined in

[src/neuroglancer/ui/statistics.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L156)

## Functions

### getChunkSourceIdentifier

▸ **getChunkSourceIdentifier**(`source`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/statistics.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L135)

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

[src/neuroglancer/ui/statistics.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L139)
