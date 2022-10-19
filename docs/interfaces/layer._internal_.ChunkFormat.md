[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / ChunkFormat

# Interface: ChunkFormat

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).ChunkFormat

## Table of contents

### Properties

- [dataType](layer._internal_.ChunkFormat.md#datatype)
- [shaderKey](layer._internal_.ChunkFormat.md#shaderkey)

### Methods

- [beginDrawing](layer._internal_.ChunkFormat.md#begindrawing)
- [beginSource](layer._internal_.ChunkFormat.md#beginsource)
- [bindChunk](layer._internal_.ChunkFormat.md#bindchunk)
- [defineShader](layer._internal_.ChunkFormat.md#defineshader)
- [endDrawing](layer._internal_.ChunkFormat.md#enddrawing)

## Properties

### dataType

• **dataType**: [`DataType`](../enums/image_user_layer._internal_.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L32)

___

### shaderKey

• **shaderKey**: `string`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L30)

## Methods

### beginDrawing

▸ **beginDrawing**(`gl`, `shader`): `void`

Called once per RenderLayer when starting to draw chunks, on the ChunkFormat of the first
source.  This is not called before each source is drawn.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](axes_lines._internal_.GL.md) |
| `shader` | [`ShaderProgram`](../classes/axes_lines._internal_.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L49)

___

### beginSource

▸ **beginSource**(`gl`, `shader`): `void`

Called just before drawing chunks for the source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](axes_lines._internal_.GL.md) |
| `shader` | [`ShaderProgram`](../classes/axes_lines._internal_.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L67)

___

### bindChunk

▸ **bindChunk**(`gl`, `shader`, `chunk`, `fixedChunkPosition`, `displayChunkDimensions`, `channelDimensions`, `newSource`): `void`

Called just before drawing each chunk, on the ChunkFormat .

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](axes_lines._internal_.GL.md) |
| `shader` | [`ShaderProgram`](../classes/axes_lines._internal_.ShaderProgram.md) |
| `chunk` | [`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md) |
| `fixedChunkPosition` | `Uint32Array` |
| `displayChunkDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |
| `newSource` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L60)

___

### defineShader

▸ **defineShader**(`builder`, `numChannelDimensions`): `void`

Called on the ChunkFormat of the first source of a RenderLayer.

This should define a fragment shader function:

  value_type getDataValueAt(ivec3 position, int channelIndex...);

where value_type is `getShaderType(this.dataType)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/image_user_layer._internal_.ShaderBuilder.md) |
| `numChannelDimensions` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L43)

___

### endDrawing

▸ **endDrawing**(`gl`, `shader`): `void`

Called once after all chunks have been drawn, on the ChunkFormat of the first source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](axes_lines._internal_.GL.md) |
| `shader` | [`ShaderProgram`](../classes/axes_lines._internal_.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L54)
