[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / SegmentationGraphSource

# Class: SegmentationGraphSource

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).SegmentationGraphSource

## Hierarchy

- **`SegmentationGraphSource`**

  ↳ [`LocalSegmentationGraphSource`](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md)

## Table of contents

### Constructors

- [constructor](layer._internal_.SegmentationGraphSource.md#constructor)

### Accessors

- [highBitRepresentative](layer._internal_.SegmentationGraphSource.md#highbitrepresentative)

### Methods

- [connect](layer._internal_.SegmentationGraphSource.md#connect)
- [merge](layer._internal_.SegmentationGraphSource.md#merge)
- [split](layer._internal_.SegmentationGraphSource.md#split)
- [trackSegment](layer._internal_.SegmentationGraphSource.md#tracksegment)

## Constructors

### constructor

• **new SegmentationGraphSource**()

## Accessors

### highBitRepresentative

• `Abstract` `get` **highBitRepresentative**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L27)

## Methods

### connect

▸ `Abstract` **connect**(`segmentsState`): [`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/image_user_layer._internal_.VisibleSegmentsState.md) |

#### Returns

[`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L23)

___

### merge

▸ `Abstract` **merge**(`a`, `b`): `Promise`<[`Uint64`](data_panel_layout._internal_.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `b` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`Promise`<[`Uint64`](data_panel_layout._internal_.Uint64.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L24)

___

### split

▸ `Abstract` **split**(`include`, `exclude`): `Promise`<{ `exclude`: [`Uint64`](data_panel_layout._internal_.Uint64.md) ; `include`: [`Uint64`](data_panel_layout._internal_.Uint64.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `exclude` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`Promise`<{ `exclude`: [`Uint64`](data_panel_layout._internal_.Uint64.md) ; `include`: [`Uint64`](data_panel_layout._internal_.Uint64.md)  }\>

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L25)

___

### trackSegment

▸ `Abstract` **trackSegment**(`id`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `callback` | (`id`: ``null`` \| [`Uint64`](data_panel_layout._internal_.Uint64.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/source.ts#L26)
