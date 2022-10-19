[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/frontend\_source](../modules/annotation_frontend_source.md) / AnnotationGeometryChunk

# Class: AnnotationGeometryChunk

[annotation/frontend_source](../modules/annotation_frontend_source.md).AnnotationGeometryChunk

## Hierarchy

- [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)

  ↳ **`AnnotationGeometryChunk`**

## Table of contents

### Constructors

- [constructor](annotation_frontend_source.AnnotationGeometryChunk.md#constructor)

### Properties

- [chunkGridPosition](annotation_frontend_source.AnnotationGeometryChunk.md#chunkgridposition)
- [data](annotation_frontend_source.AnnotationGeometryChunk.md#data)
- [source](annotation_frontend_source.AnnotationGeometryChunk.md#source)
- [state](annotation_frontend_source.AnnotationGeometryChunk.md#state)

### Accessors

- [gl](annotation_frontend_source.AnnotationGeometryChunk.md#gl)

### Methods

- [copyToGPU](annotation_frontend_source.AnnotationGeometryChunk.md#copytogpu)
- [dispose](annotation_frontend_source.AnnotationGeometryChunk.md#dispose)
- [freeGPUMemory](annotation_frontend_source.AnnotationGeometryChunk.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationGeometryChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md) |
| `x` | `any` |

#### Overrides

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[constructor](sliceview_frontend.SliceViewChunk.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L102)

## Properties

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](util_geom.vec3.md)

#### Inherited from

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[chunkGridPosition](sliceview_frontend.SliceViewChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L489)

___

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](annotation_frontend_source.AnnotationGeometryData.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L100)

___

### source

• **source**: [`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)

#### Overrides

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[source](sliceview_frontend.SliceViewChunk.md#source)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L98)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[state](sliceview_frontend.SliceViewChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

SliceViewChunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[copyToGPU](sliceview_frontend.SliceViewChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L117)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[SliceViewChunk](sliceview_frontend.SliceViewChunk.md).[freeGPUMemory](sliceview_frontend.SliceViewChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L109)
