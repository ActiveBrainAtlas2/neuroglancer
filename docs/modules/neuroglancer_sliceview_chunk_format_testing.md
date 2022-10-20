[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/chunk\_format\_testing

# Module: neuroglancer/sliceview/chunk\_format\_testing

## Table of contents

### Functions

- [chunkFormatTest](neuroglancer_sliceview_chunk_format_testing.md#chunkformattest)

## Functions

### chunkFormatTest

▸ **chunkFormatTest**<`TextureLayout`\>(`dataType`, `volumeSize`, `getChunkFormatAndTextureLayout`, `rawData`, `encodedData`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TextureLayout` | extends [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `volumeSize` | `Uint32Array` |
| `getChunkFormatAndTextureLayout` | (`gl`: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)) => [[`SingleTextureChunkFormat`](../classes/neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<`TextureLayout`\>, `TextureLayout`] |
| `rawData` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `encodedData` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/chunk_format_testing.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/chunk_format_testing.ts#L29)
