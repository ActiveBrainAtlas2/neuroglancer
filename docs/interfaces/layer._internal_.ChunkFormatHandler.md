[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / ChunkFormatHandler

# Interface: ChunkFormatHandler

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).ChunkFormatHandler

## Hierarchy

- [`Disposable`](axes_lines._internal_.Disposable.md)

  ↳ **`ChunkFormatHandler`**

## Table of contents

### Properties

- [chunkFormat](layer._internal_.ChunkFormatHandler.md#chunkformat)

### Methods

- [dispose](layer._internal_.ChunkFormatHandler.md#dispose)
- [getChunk](layer._internal_.ChunkFormatHandler.md#getchunk)

## Properties

### chunkFormat

• **chunkFormat**: [`ChunkFormat`](layer._internal_.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L126)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Disposable](axes_lines._internal_.Disposable.md).[dispose](axes_lines._internal_.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L17)

___

### getChunk

▸ **getChunk**(`source`, `x`): [`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md)\> |
| `x` | `any` |

#### Returns

[`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L127)
