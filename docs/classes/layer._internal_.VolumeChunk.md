[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / VolumeChunk

# Class: VolumeChunk

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).VolumeChunk

## Hierarchy

- [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)

  ↳ **`VolumeChunk`**

## Table of contents

### Constructors

- [constructor](layer._internal_.VolumeChunk.md#constructor)

### Properties

- [CHUNK\_FORMAT\_TYPE](layer._internal_.VolumeChunk.md#chunk_format_type)
- [chunkDataSize](layer._internal_.VolumeChunk.md#chunkdatasize)
- [chunkGridPosition](layer._internal_.VolumeChunk.md#chunkgridposition)
- [source](layer._internal_.VolumeChunk.md#source)
- [state](layer._internal_.VolumeChunk.md#state)

### Accessors

- [chunkFormat](layer._internal_.VolumeChunk.md#chunkformat)
- [gl](layer._internal_.VolumeChunk.md#gl)

### Methods

- [copyToGPU](layer._internal_.VolumeChunk.md#copytogpu)
- [freeGPUMemory](layer._internal_.VolumeChunk.md#freegpumemory)
- [getValueAt](layer._internal_.VolumeChunk.md#getvalueat)

## Constructors

### constructor

• **new VolumeChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](layer._internal_.VolumeChunkSource.md) |
| `x` | `any` |

#### Overrides

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[constructor](data_panel_layout._internal_.SliceViewChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L235)

## Properties

### CHUNK\_FORMAT\_TYPE

• **CHUNK\_FORMAT\_TYPE**: [`ChunkFormat`](../interfaces/layer._internal_.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L229)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L228)

___

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](axes_lines._internal_.vec3.md)

#### Inherited from

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[chunkGridPosition](data_panel_layout._internal_.SliceViewChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L489)

___

### source

• **source**: [`VolumeChunkSource`](layer._internal_.VolumeChunkSource.md)

#### Overrides

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[source](data_panel_layout._internal_.SliceViewChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L227)

___

### state

• **state**: [`ChunkState`](../enums/data_panel_layout._internal_.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[state](data_panel_layout._internal_.SliceViewChunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): `this`[``"CHUNK_FORMAT_TYPE"``]

#### Returns

`this`[``"CHUNK_FORMAT_TYPE"``]

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L231)

___

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

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunk](data_panel_layout._internal_.SliceViewChunk.md).[freeGPUMemory](data_panel_layout._internal_.SliceViewChunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L44)

___

### getValueAt

▸ `Abstract` **getValueAt**(`dataPosition`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPosition` | `Uint32Array` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L239)
