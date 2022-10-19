[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / ManifestChunk

# Class: ManifestChunk

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).ManifestChunk

## Hierarchy

- [`Chunk`](data_panel_layout._internal_.Chunk.md)

  ↳ **`ManifestChunk`**

## Table of contents

### Constructors

- [constructor](layer._internal_.ManifestChunk.md#constructor)

### Properties

- [fragmentIds](layer._internal_.ManifestChunk.md#fragmentids)
- [source](layer._internal_.ManifestChunk.md#source)
- [state](layer._internal_.ManifestChunk.md#state)

### Accessors

- [gl](layer._internal_.ManifestChunk.md#gl)

### Methods

- [copyToGPU](layer._internal_.ManifestChunk.md#copytogpu)
- [freeGPUMemory](layer._internal_.ManifestChunk.md#freegpumemory)

## Constructors

### constructor

• **new ManifestChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`MeshSource`](layer._internal_.MeshSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[constructor](data_panel_layout._internal_.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L435)

## Properties

### fragmentIds

• **fragmentIds**: `string`[]

#### Defined in

[src/neuroglancer/mesh/frontend.ts:433](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L433)

___

### source

• **source**: [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md)

#### Inherited from

[Chunk](data_panel_layout._internal_.Chunk.md).[source](data_panel_layout._internal_.Chunk.md#source)

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
