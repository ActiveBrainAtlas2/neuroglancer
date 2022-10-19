[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationGeometryChunk

# Class: AnnotationGeometryChunk

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationGeometryChunk

## Hierarchy

- [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)

  ↳ **`AnnotationGeometryChunk`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationGeometryChunk.md#constructor)

### Properties

- [chunkGridPosition](image_user_layer._internal_.AnnotationGeometryChunk.md#chunkgridposition)
- [data](image_user_layer._internal_.AnnotationGeometryChunk.md#data)
- [source](image_user_layer._internal_.AnnotationGeometryChunk.md#source)
- [state](image_user_layer._internal_.AnnotationGeometryChunk.md#state)

### Accessors

- [gl](image_user_layer._internal_.AnnotationGeometryChunk.md#gl)

### Methods

- [copyToGPU](image_user_layer._internal_.AnnotationGeometryChunk.md#copytogpu)
- [dispose](image_user_layer._internal_.AnnotationGeometryChunk.md#dispose)
- [freeGPUMemory](image_user_layer._internal_.AnnotationGeometryChunk.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationGeometryChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md) |
| `x` | `any` |

#### Overrides

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[constructor](data_panel_layout._internal_.SliceViewChunk.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L102)

## Properties

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](axes_lines._internal_.vec3.md)

#### Inherited from

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[chunkGridPosition](data_panel_layout._internal_.SliceViewChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L489)

___

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](image_user_layer._internal_.AnnotationGeometryData.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L100)

___

### source

• **source**: [`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md)

#### Overrides

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[source](data_panel_layout._internal_.SliceViewChunk.md#source)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L98)

___

### state

• **state**: [`ChunkState`](../enums/data_panel_layout._internal_.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[state](data_panel_layout._internal_.SliceViewChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

SliceViewChunk.gl

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

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[copyToGPU](data_panel_layout._internal_.SliceViewChunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L117)

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

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[freeGPUMemory](data_panel_layout._internal_.SliceViewChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L109)
