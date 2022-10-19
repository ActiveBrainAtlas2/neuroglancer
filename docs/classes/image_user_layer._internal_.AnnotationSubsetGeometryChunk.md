[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationSubsetGeometryChunk

# Class: AnnotationSubsetGeometryChunk

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationSubsetGeometryChunk

## Hierarchy

- [`Chunk`](data_panel_layout._internal_.Chunk.md)

  ↳ **`AnnotationSubsetGeometryChunk`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#constructor)

### Properties

- [data](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#data)
- [source](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#source)
- [state](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#state)

### Accessors

- [gl](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#gl)

### Methods

- [copyToGPU](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#copytogpu)
- [dispose](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#dispose)
- [freeGPUMemory](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationSubsetGeometryChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AnnotationSubsetGeometryChunkSource`](image_user_layer._internal_.AnnotationSubsetGeometryChunkSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[constructor](data_panel_layout._internal_.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L77)

## Properties

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](image_user_layer._internal_.AnnotationGeometryData.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L76)

___

### source

• **source**: [`AnnotationSubsetGeometryChunkSource`](image_user_layer._internal_.AnnotationSubsetGeometryChunkSource.md)

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[source](data_panel_layout._internal_.Chunk.md#source)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L74)

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

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L92)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[freeGPUMemory](data_panel_layout._internal_.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L84)
