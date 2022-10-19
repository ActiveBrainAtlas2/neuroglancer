[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewChunk

# Class: SliceViewChunk

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewChunk

## Hierarchy

- [`Chunk`](data_panel_layout._internal_.Chunk.md)

  ↳ **`SliceViewChunk`**

  ↳↳ [`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md)

  ↳↳ [`VolumeChunk`](layer._internal_.VolumeChunk.md)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.SliceViewChunk.md#constructor)

### Properties

- [chunkGridPosition](data_panel_layout._internal_.SliceViewChunk.md#chunkgridposition)
- [source](data_panel_layout._internal_.SliceViewChunk.md#source)
- [state](data_panel_layout._internal_.SliceViewChunk.md#state)

### Accessors

- [gl](data_panel_layout._internal_.SliceViewChunk.md#gl)

### Methods

- [copyToGPU](data_panel_layout._internal_.SliceViewChunk.md#copytogpu)
- [freeGPUMemory](data_panel_layout._internal_.SliceViewChunk.md#freegpumemory)

## Constructors

### constructor

• **new SliceViewChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\> |
| `x` | `any` |

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[constructor](data_panel_layout._internal_.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L492)

## Properties

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L489)

___

### source

• **source**: [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[source](data_panel_layout._internal_.Chunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L490)

___

### state

• **state**: [`ChunkState`](../enums/data_panel_layout._internal_.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](data_panel_layout._internal_.Chunk.md).[state](data_panel_layout._internal_.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](data_panel_layout._internal_.Chunk.md).[copyToGPU](data_panel_layout._internal_.Chunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](data_panel_layout._internal_.Chunk.md).[freeGPUMemory](data_panel_layout._internal_.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L44)
