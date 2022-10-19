[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/frontend\_source](../modules/neuroglancer_annotation_frontend_source.md) / AnnotationGeometryChunk

# Class: AnnotationGeometryChunk

[neuroglancer/annotation/frontend_source](../modules/neuroglancer_annotation_frontend_source.md).AnnotationGeometryChunk

## Hierarchy

- [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md)

  ↳ **`AnnotationGeometryChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#constructor)

### Properties

- [chunkGridPosition](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#chunkgridposition)
- [data](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#data)
- [source](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#source)
- [state](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#state)

### Accessors

- [gl](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#copytogpu)
- [dispose](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#dispose)
- [freeGPUMemory](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationGeometryChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md) |
| `x` | `any` |

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[constructor](neuroglancer_sliceview_frontend.SliceViewChunk.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L102)

## Properties

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[chunkGridPosition](neuroglancer_sliceview_frontend.SliceViewChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L489)

___

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L100)

___

### source

• **source**: [`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[source](neuroglancer_sliceview_frontend.SliceViewChunk.md#source)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L98)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[state](neuroglancer_sliceview_frontend.SliceViewChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

SliceViewChunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[copyToGPU](neuroglancer_sliceview_frontend.SliceViewChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L117)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_frontend.SliceViewChunk.md).[freeGPUMemory](neuroglancer_sliceview_frontend.SliceViewChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L109)
